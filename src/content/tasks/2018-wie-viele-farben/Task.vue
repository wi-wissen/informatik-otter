<script setup lang="ts">
// A line drawing that can be coloured: pick a colour, then click (or tap) a region to fill it.
// Keyboard: focus the picture, move the cross with the arrow keys, fill with Enter or Space.
// The question is how many different colours are enough: the answer is the number typed below.
import { onMounted, ref } from 'vue';

const props = defineProps<{ image: string; alt: string }>();
const emit = defineEmits<{ answer: [value: string] }>();

type Rgb = [number, number, number];
// Colour is part of the task here, so these swatches are fixed. Patterns help when colours look alike.
const swatches: { id: string; label: string; css: string; px: (x: number, y: number) => Rgb }[] = [
  { id: 'red', label: 'rot gestreift', css: 'repeating-linear-gradient(90deg,#f00 0 4px,#fff 4px 8px)', px: (x) => (Math.floor(x / 8) % 2 ? [255, 255, 255] : [255, 0, 0]) },
  { id: 'orange', label: 'orange kariert', css: 'conic-gradient(#ff6a1a 25%,#fff 0 50%,#ff6a1a 0 75%,#fff 0) 0 0/12px 12px', px: (x, y) => ((Math.floor(x / 12) + Math.floor(y / 12)) % 2 ? [255, 255, 255] : [255, 106, 26]) },
  { id: 'yellow', label: 'gelb', css: '#ffee00', px: () => [255, 238, 0] },
  { id: 'green', label: 'grün schraffiert', css: 'repeating-linear-gradient(45deg,#16d33a 0 5px,#555 5px 8px)', px: (x, y) => (((x + y) % 18) < 12 ? [22, 211, 58] : [85, 85, 85]) },
  { id: 'blue', label: 'blau', css: '#2a00ff', px: () => [42, 0, 255] },
  { id: 'pink', label: 'rosa schraffiert', css: 'repeating-linear-gradient(135deg,#ff6ff0 0 5px,#fff 5px 8px)', px: (x, y) => (((x - y + 2000) % 20) < 12 ? [255, 111, 240] : [255, 255, 255]) },
];

const canvas = ref<HTMLCanvasElement | null>(null);
const picked = ref(0);
const guess = ref('');
const cross = ref({ x: 0.5, y: 0.5 });
const showCross = ref(false);
const colours = ref(0);
let W = 0, H = 0;
let base: ImageData | null = null;
let labels: Int32Array | null = null;
let paint: number[] = []; // swatch index per region, -1 = unpainted

onMounted(() => {
  const img = new Image();
  img.onload = () => {
    const c = canvas.value!;
    W = c.width = img.naturalWidth;
    H = c.height = img.naturalHeight;
    const ctx = c.getContext('2d')!;
    ctx.drawImage(img, 0, 0);
    base = ctx.getImageData(0, 0, W, H);
    // label connected light regions (4-neighbourhood); dark pixels belong to the lines
    labels = new Int32Array(W * H).fill(-1);
    const light = (i: number) => base!.data[i * 4] > 150;
    let n = 0;
    const stack: number[] = [];
    for (let s = 0; s < W * H; s++) {
      if (labels[s] !== -1 || !light(s)) continue;
      labels[s] = n; stack.push(s);
      while (stack.length) {
        const p = stack.pop()!;
        const x = p % W, y = (p / W) | 0;
        for (const q of [x > 0 ? p - 1 : -1, x < W - 1 ? p + 1 : -1, y > 0 ? p - W : -1, y < H - 1 ? p + W : -1]) {
          if (q >= 0 && labels[q] === -1 && light(q)) { labels[q] = n; stack.push(q); }
        }
      }
      n++;
    }
    paint = Array(n).fill(-1);
  };
  img.src = props.image;
  report();
});

function render() {
  if (!base || !labels) return;
  const out = new ImageData(new Uint8ClampedArray(base.data), W, H);
  for (let p = 0; p < W * H; p++) {
    const l = labels[p];
    if (l < 0 || paint[l] < 0) continue;
    const [r, g, b] = swatches[paint[l]].px(p % W, (p / W) | 0);
    out.data[p * 4] = r; out.data[p * 4 + 1] = g; out.data[p * 4 + 2] = b;
  }
  canvas.value!.getContext('2d')!.putImageData(out, 0, 0);
  colours.value = new Set(paint.filter((v) => v >= 0)).size;
}
function fillAt(px: number, py: number) {
  if (!labels) return;
  const x = Math.min(W - 1, Math.max(0, Math.round(px))), y = Math.min(H - 1, Math.max(0, Math.round(py)));
  let l = labels[y * W + x];
  if (l < 0) { // clicked on a line: use the nearest region around
    outer: for (let d = 1; d <= 4; d++) for (let dy = -d; dy <= d; dy++) for (let dx = -d; dx <= d; dx++) {
      const xx = x + dx, yy = y + dy;
      if (xx < 0 || yy < 0 || xx >= W || yy >= H) continue;
      if (labels[yy * W + xx] >= 0) { l = labels[yy * W + xx]; break outer; }
    }
  }
  if (l < 0) return;
  paint[l] = paint[l] === picked.value ? -1 : picked.value;
  render();
}
function onClick(e: MouseEvent) {
  const r = canvas.value!.getBoundingClientRect();
  showCross.value = false;
  fillAt(((e.clientX - r.left) / r.width) * W, ((e.clientY - r.top) / r.height) * H);
}
function onKey(e: KeyboardEvent) {
  const step = 0.04;
  const k = e.key;
  if (k === 'ArrowLeft') cross.value.x = Math.max(0, cross.value.x - step);
  else if (k === 'ArrowRight') cross.value.x = Math.min(1, cross.value.x + step);
  else if (k === 'ArrowUp') cross.value.y = Math.max(0, cross.value.y - step);
  else if (k === 'ArrowDown') cross.value.y = Math.min(1, cross.value.y + step);
  else if (k === 'Enter' || k === ' ') { fillAt(cross.value.x * W, cross.value.y * H); e.preventDefault(); return; }
  else return;
  showCross.value = true;
  e.preventDefault();
}
function clearAll() { paint = paint.map(() => -1); render(); }
function report() { emit('answer', guess.value.trim()); }
</script>

<template>
  <div class="paint">
    <div class="tools" role="group" aria-label="Farben">
      <button v-for="(s, i) in swatches" :key="s.id" type="button" class="sw" :class="{ on: picked === i }" :aria-pressed="picked === i"
              :aria-label="s.label" :style="{ background: s.css }" @click="picked = i" />
      <button type="button" class="reset" @click="clearAll">Alles löschen</button>
    </div>
    <div class="stage">
      <canvas ref="canvas" tabindex="0" role="img" :aria-label="alt + ' Mit Pfeiltasten und Enter kannst du Flächen färben.'"
              @click="onClick" @keydown="onKey" @blur="showCross = false" />
      <span v-if="showCross" class="cross" :style="{ left: cross.x * 100 + '%', top: cross.y * 100 + '%' }" aria-hidden="true" />
    </div>
    <p class="info">Gewählte Farbe: {{ swatches[picked].label }} · Verwendete Farben im Bild: {{ colours }}</p>
    <label class="ans">Deine Antwort: Es genügen … Farben.
      <input v-model="guess" type="text" inputmode="numeric" autocomplete="off" @input="report" />
    </label>
  </div>
</template>

<style scoped>
.paint { display: grid; gap: 10px; max-width: 560px; }
.tools { display: flex; flex-wrap: wrap; gap: 8px; align-items: center; }
.sw { width: 40px; height: 40px; border-radius: 8px; border: 3px solid var(--line); cursor: pointer; padding: 0; }
.sw.on { border-color: var(--ink); box-shadow: 0 0 0 3px var(--sun); }
.reset { border: 1px solid var(--line); background: var(--surface); color: var(--ink); border-radius: 999px; padding: 4px 12px; cursor: pointer; font: inherit; font-size: .85rem; margin-left: auto; }
.stage { position: relative; background: #fff; border-radius: 6px; line-height: 0; }
canvas { width: 100%; height: auto; cursor: pointer; border-radius: 6px; }
canvas:focus-visible { outline: 3px solid var(--sun); }
.cross { position: absolute; width: 22px; height: 22px; transform: translate(-50%, -50%); border: 3px solid #e53935; border-radius: 50%; box-shadow: 0 0 0 2px #fff; pointer-events: none; }
.info { margin: 0; font-size: .85rem; color: var(--muted); }
.ans { display: flex; gap: 10px; align-items: center; flex-wrap: wrap; font-weight: 700; }
.ans input { width: 5em; font: inherit; padding: 6px 10px; border: 2px solid var(--line); border-radius: 8px; background: var(--surface); color: var(--ink); }
</style>
