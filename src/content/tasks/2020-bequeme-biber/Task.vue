<script setup lang="ts">
// A clock with eight sectors (3 hours each), each showing three flags: red square or blue triangle.
// The student clicks flags to change them. Goal: when the next sector begins (also at midnight)
// exactly one flag changes, and every sector shows a different pattern.
import { onMounted, ref } from 'vue';

const props = defineProps<{ initial: string[] }>();
const emit = defineEmits<{ answer: [value: string] }>();
const flags = ref<number[][]>(props.initial.map((r) => [...r].map(Number)));

function verdict() {
  const f = flags.value;
  const code = f.map((r) => r.join(''));
  const distinct = new Set(code).size === 8;
  const oneChange = f.every((r, i) => r.filter((v, j) => v !== f[(i + 1) % 8][j]).length === 1);
  emit('answer', distinct && oneChange ? 'ok' : 'noch nicht');
}
onMounted(() => emit('answer', ''));
function toggle(s: number, j: number) {
  flags.value = flags.value.map((r, i) => (i === s ? r.map((v, k) => (k === j ? 1 - v : v)) : r));
  verdict();
}
const C = 200, R = 190;
const rad = (deg: number) => (deg * Math.PI) / 180;
const pt = (deg: number, r: number) => [C + r * Math.cos(rad(deg)), C + r * Math.sin(rad(deg))];
const wedge = (k: number) => {
  const a0 = -90 + 45 * k, a1 = a0 + 45;
  const [x0, y0] = pt(a0, R), [x1, y1] = pt(a1, R);
  return `M${C},${C} L${x0},${y0} A${R},${R} 0 0 1 ${x1},${y1} Z`;
};
const centre = (k: number, r: number) => pt(-90 + 45 * k + 22.5, r);
const label = (k: number) => `${3 * k}–${3 * k + 3} Uhr`;
</script>

<template>
  <div class="clock">
    <svg viewBox="0 0 400 400" role="group" aria-label="Uhr mit acht Zeitabschnitten und je drei Flaggen">
      <path v-for="k in 8" :key="'w' + k" :d="wedge(k - 1)" class="wedge" :class="{ alt: k % 2 === 0 }" />
      <circle :cx="C" :cy="C" r="58" class="face" />
      <text :x="C" :y="C + 5" class="mid">24 Uhr</text>
      <g v-for="(row, s) in flags" :key="s">
        <text :x="centre(s, 168)[0]" :y="centre(s, 168)[1] + 4" class="lbl">{{ label(s) }}</text>
        <g v-for="(v, j) in row" :key="j" class="flag" role="button" tabindex="0"
           :aria-label="`${label(s)}, Flagge ${j + 1}: ${v ? 'blaues Dreieck' : 'rotes Quadrat'}`"
           :transform="`translate(${centre(s, 115)[0] + (j - 1) * 34}, ${centre(s, 115)[1] + 22})`"
           @click="toggle(s, j)" @keydown.enter.prevent="toggle(s, j)" @keydown.space.prevent="toggle(s, j)">
          <rect x="-16" y="-52" width="32" height="58" class="hit" />
          <line x1="0" y1="6" x2="0" y2="-44" class="pole" />
          <rect v-if="!v" x="0" y="-44" width="17" height="14" fill="#e53935" stroke="#7f1d1d" stroke-width="1.5" />
          <polygon v-else points="0,-44 18,-37 0,-30" fill="#1a237e" stroke="#0b1250" stroke-width="1.5" />
        </g>
      </g>
    </svg>
    <p class="hint">Klicke auf eine Flagge, um sie zu wechseln (rotes Quadrat und blaues Dreieck).</p>
  </div>
</template>

<style scoped>
.clock { display: grid; gap: 8px; justify-items: center; }
svg { width: 100%; max-width: 480px; height: auto; }
.wedge { fill: var(--primary-soft); stroke: var(--surface); stroke-width: 3; }
.wedge.alt { fill: var(--sun-soft); }
.face { fill: var(--surface); stroke: var(--line); stroke-width: 3; }
.mid { text-anchor: middle; font: 700 16px var(--font-body); fill: var(--ink); }
.lbl { text-anchor: middle; font: 700 13px var(--font-body); fill: var(--ink); }
.pole { stroke: #5a4636; stroke-width: 3; stroke-linecap: round; }
.hit { fill: transparent; }
.flag { cursor: pointer; }
.flag:hover .hit { fill: rgba(255, 255, 255, .5); }
.flag:focus-visible { outline: none; }
.flag:focus-visible .hit { stroke: var(--primary); stroke-width: 3; fill: rgba(255, 255, 255, .5); }
.hint { font-size: .85rem; color: var(--muted); justify-self: start; }
</style>
