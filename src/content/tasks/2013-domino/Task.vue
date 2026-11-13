<script setup lang="ts">
// Nine dominoes lie next to a circle. Move dominoes onto the circle (click, tap or drag), click a domino on the
// circle to turn it, move it along the circle by dragging it onto another one (or with the arrow keys), and put it
// back by dragging it to the pile or with the cross. The answer is "ok" when the dominoes on the circle form a closed
// ring (equal pips touch, also last to first) with the maximum number of stones.
import { computed, onMounted, ref } from 'vue';

type Stone = { id: string; image: string; pips: [number, number]; alt: string };
const props = defineProps<{ stones: Stone[]; best: number }>();
const emit = defineEmits<{ answer: [value: string] }>();

const byId = Object.fromEntries(props.stones.map((s) => [s.id, s]));
const ring = ref<{ id: string; flipped: boolean }[]>([]);
const dragging = ref<{ from: 'pile' | 'ring'; id: string } | null>(null);
const over = ref<number | null>(null);

const pile = computed(() => props.stones.filter((s) => !ring.value.some((r) => r.id === s.id)));
const left = (r: { id: string; flipped: boolean }) => byId[r.id].pips[r.flipped ? 1 : 0];
const right = (r: { id: string; flipped: boolean }) => byId[r.id].pips[r.flipped ? 0 : 1];
const valid = computed(() => {
  const n = ring.value.length;
  if (n < 2) return false;
  return ring.value.every((r, i) => right(r) === left(ring.value[(i + 1) % n]));
});
function report() {
  const n = ring.value.length;
  emit('answer', n === 0 ? '' : valid.value && n === props.best ? 'ok' : `${n}`);
}
onMounted(report);

function add(id: string, at = ring.value.length) {
  if (ring.value.some((r) => r.id === id)) return;
  const next = [...ring.value];
  next.splice(at, 0, { id, flipped: false });
  ring.value = next; report();
}
function remove(i: number) { ring.value = ring.value.filter((_, j) => j !== i); report(); }
function turn(i: number) { ring.value = ring.value.map((r, j) => (j === i ? { ...r, flipped: !r.flipped } : r)); report(); }
function shift(i: number, d: number) {
  const n = ring.value.length;
  if (n < 2) return;
  const j = (i + d + n) % n;
  const next = [...ring.value];
  [next[i], next[j]] = [next[j], next[i]];
  ring.value = next; report();
}
function moveTo(from: number, to: number) {
  if (from === to) return;
  const next = [...ring.value];
  const [it] = next.splice(from, 1);
  next.splice(to, 0, it);
  ring.value = next; report();
}
function clear() { ring.value = []; report(); }

function startPile(e: DragEvent, id: string) { dragging.value = { from: 'pile', id }; e.dataTransfer?.setData('text/plain', id); }
function startRing(e: DragEvent, id: string) { dragging.value = { from: 'ring', id }; e.dataTransfer?.setData('text/plain', id); }
function dropOnRing(e: DragEvent, at: number | null) {
  e.preventDefault(); e.stopPropagation();
  const d = dragging.value; dragging.value = null; over.value = null;
  if (!d) return;
  if (d.from === 'pile') add(d.id, at ?? ring.value.length);
  else if (at !== null) moveTo(ring.value.findIndex((r) => r.id === d.id), at);
}
function dropOnPile(e: DragEvent) {
  e.preventDefault();
  const d = dragging.value; dragging.value = null; over.value = null;
  if (d?.from === 'ring') remove(ring.value.findIndex((r) => r.id === d.id));
}

const SIZE = 330, R = 118, W = 84, H = 42;
function place(i: number) {
  const n = ring.value.length;
  const a = (i * 2 * Math.PI) / n;
  const x = SIZE / 2 + R * Math.sin(a), y = SIZE / 2 - R * Math.cos(a);
  return { left: `${x - W / 2}px`, top: `${y - H / 2}px`, transform: `rotate(${(a * 180) / Math.PI}deg)`, width: `${W}px`, height: `${H}px` };
}
function ctrl(i: number) {
  const n = ring.value.length;
  const a = (i * 2 * Math.PI) / n;
  const r = R - 38;
  return { left: `${SIZE / 2 + r * Math.sin(a) - 11}px`, top: `${SIZE / 2 - r * Math.cos(a) - 11}px` };
}
</script>

<template>
  <div class="domino">
    <div class="pile" @dragover.prevent @drop="dropOnPile" aria-label="Dominosteine">
      <button v-for="s in pile" :key="s.id" type="button" class="stone" draggable="true" :aria-label="`${s.alt} auf den Kreis legen`"
              @click="add(s.id)" @dragstart="startPile($event, s.id)">
        <img :src="s.image" alt="" draggable="false" />
      </button>
      <span v-if="!pile.length" class="empty">Alle Steine liegen auf dem Kreis.</span>
    </div>
    <div class="circle" :style="{ width: `${SIZE}px`, height: `${SIZE}px` }" @dragover.prevent @drop="dropOnRing($event, null)">
      <svg class="guide" :viewBox="`0 0 ${SIZE} ${SIZE}`" aria-hidden="true"><circle :cx="SIZE / 2" :cy="SIZE / 2" :r="R" /></svg>
      <template v-for="(r, i) in ring" :key="r.id">
        <button type="button" class="stone on-ring" :class="{ over: over === i }" :style="place(i)" draggable="true"
                :aria-label="`${byId[r.id].alt}, Platz ${i + 1} im Ring${r.flipped ? ', gedreht' : ''}. Antippen dreht den Stein, Pfeiltasten verschieben ihn, Entf legt ihn zurück`"
                @click="turn(i)" @keydown.left.prevent="shift(i, -1)" @keydown.right.prevent="shift(i, 1)" @keydown.delete.prevent="remove(i)" @keydown.backspace.prevent="remove(i)" @dragstart="startRing($event, r.id)" @dragover.prevent="over = i" @dragleave="over = null" @drop="dropOnRing($event, i)">
          <img :src="byId[r.id].image" alt="" draggable="false" :class="{ flipped: r.flipped }" />
        </button>
        <button type="button" class="mini" :style="ctrl(i)" :aria-label="`${byId[r.id].alt} zurücklegen`" @click="remove(i)">×</button>
      </template>
      <p v-if="!ring.length" class="hint center">Lege hier die Dominosteine zu einem Ring.</p>
    </div>
    <div class="bar">
      <span class="hint">{{ ring.length }} Steine im Ring · Stein anklicken = drehen · Ziehen auf einen anderen Stein verschiebt ihn im Ring (oder Pfeiltasten) · × legt zurück.</span>
      <button type="button" class="reset" @click="clear">Alle zurücklegen</button>
    </div>
  </div>
</template>

<style scoped>
.domino { display: grid; gap: 12px; justify-items: start; }
.pile { display: grid; grid-template-columns: repeat(3, auto); gap: 8px; padding: 10px; border: 2px dashed var(--line); border-radius: 12px; min-height: 64px; max-width: 100%; }
.stone { padding: 0; border: 2px solid var(--line); border-radius: 8px; background: #0b0b0b; cursor: grab; line-height: 0; overflow: hidden; }
.stone:hover { border-color: var(--primary); }
.stone img { width: 100px; height: auto; display: block; }
.on-ring { position: absolute; }
.on-ring img { width: 100%; height: 100%; object-fit: fill; transition: transform .15s; }
.on-ring img.flipped { transform: rotate(180deg); }
.on-ring.over { outline: 3px dashed var(--sun); }
.circle { position: relative; max-width: 100%; border-radius: 50%; }
.guide { position: absolute; inset: 0; width: 100%; height: 100%; pointer-events: none; }
.guide circle { fill: none; stroke: var(--primary); stroke-opacity: .35; stroke-width: 10; }
.mini { position: absolute; width: 22px; height: 22px; padding: 0; border: 1px solid var(--line); background: var(--surface); color: var(--ink); border-radius: 6px; cursor: pointer; font: inherit; font-size: .8rem; line-height: 1; }
.center { position: absolute; inset: 0; display: grid; place-items: center; text-align: center; padding: 70px; margin: 0; }
.empty { color: var(--muted); font-size: .85rem; align-self: center; grid-column: 1 / -1; }
.bar { display: flex; justify-content: space-between; gap: 8px; align-items: center; flex-wrap: wrap; }
.hint { font-size: .85rem; color: var(--muted); }
.reset { border: 1px solid var(--line); background: var(--surface); color: var(--ink); border-radius: 999px; padding: 4px 12px; cursor: pointer; font: inherit; font-size: .85rem; }
</style>
