<script setup lang="ts">
import { onMounted, ref } from 'vue';

// Pyramid of hexagons: rows[0] is the top row with one cell, each row below has one cell more.
// 0 = not coloured yet, 1..n = index+1 in `colors`. Cells that are already coloured in `rows` are locked.
type Color = { name: string; tone: 'good' | 'sun' | 'primary'; symbol: 'square' | 'circle' | 'star' };
const props = defineProps<{ rows: number[][]; colors: Color[] }>();
const emit = defineEmits<{ answer: [value: number[][]] }>();

const grid = ref<number[][]>(props.rows.map((r) => [...r]));
const current = ref(1);
const S = 30; // hexagon radius
const W = Math.sqrt(3) * S;
const n = props.rows.length;
const width = n * W + 8;
const height = (n - 1) * 1.5 * S + 2 * S + 8;

const report = () => emit('answer', grid.value.map((r) => [...r]));
onMounted(report);

const cx = (r: number, i: number) => width / 2 + (i - r / 2) * W;
const cy = (r: number) => S + 4 + r * 1.5 * S;
const hex = (r: number, i: number) =>
  Array.from({ length: 6 }, (_, k) => {
    const a = (Math.PI / 180) * (60 * k - 30);
    return `${(cx(r, i) + S * Math.cos(a)).toFixed(1)},${(cy(r) + S * Math.sin(a)).toFixed(1)}`;
  }).join(' ');
const star = (x: number, y: number, R = 10) =>
  Array.from({ length: 10 }, (_, k) => {
    const a = (Math.PI / 5) * k - Math.PI / 2;
    const rr = k % 2 ? R * 0.45 : R;
    return `${(x + rr * Math.cos(a)).toFixed(1)},${(y + rr * Math.sin(a)).toFixed(1)}`;
  }).join(' ');

const locked = (r: number, i: number) => props.rows[r][i] !== 0;
function paint(r: number, i: number) {
  if (locked(r, i)) return;
  const next = grid.value.map((row) => [...row]);
  next[r][i] = next[r][i] === current.value ? 0 : current.value;
  grid.value = next;
  report();
}
const label = (r: number, i: number) => {
  const v = grid.value[r][i];
  return `Reihe ${r + 1} von oben, Feld ${i + 1}: ${v ? props.colors[v - 1].name : 'noch nicht ausgemalt'}${locked(r, i) ? ' (vorgegeben)' : ''}`;
};
</script>

<template>
  <div class="hexes">
    <div class="palette" role="radiogroup" aria-label="Farbe wählen">
      <button v-for="(c, k) in colors" :key="k" type="button" role="radio" :aria-checked="current === k + 1"
              :class="['sw', c.tone, { on: current === k + 1 }]" :aria-label="c.name" @click="current = k + 1">
        <svg viewBox="-14 -14 28 28" aria-hidden="true">
          <rect v-if="c.symbol === 'square'" x="-8" y="-8" width="16" height="16" class="sym" />
          <circle v-else-if="c.symbol === 'circle'" r="8" class="sym" />
          <polygon v-else :points="star(0, 0, 12)" class="sym" />
        </svg>
      </button>
    </div>
    <svg :viewBox="`0 0 ${width} ${height}`" class="pyramid" role="group" aria-label="Sechseck-Pyramide">
      <template v-for="(row, r) in grid" :key="r">
        <g v-for="(v, i) in row" :key="i" class="cell" :class="{ locked: locked(r, i) }" role="button" tabindex="0"
           :aria-label="label(r, i)" @click="paint(r, i)" @keydown.enter.prevent="paint(r, i)" @keydown.space.prevent="paint(r, i)">
          <polygon :points="hex(r, i)" :class="['hx', v ? colors[v - 1].tone : 'empty']" />
          <template v-if="v">
            <rect v-if="colors[v - 1].symbol === 'square'" :x="cx(r, i) - 8" :y="cy(r) - 8" width="16" height="16" class="sym" />
            <circle v-else-if="colors[v - 1].symbol === 'circle'" :cx="cx(r, i)" :cy="cy(r)" r="8" class="sym" />
            <polygon v-else :points="star(cx(r, i), cy(r), 12)" class="sym" />
          </template>
        </g>
      </template>
    </svg>
  </div>
</template>

<style scoped>
.hexes { display: grid; gap: 10px; justify-items: start; }
.palette { display: flex; gap: 10px; }
.sw { width: 44px; height: 44px; border-radius: 50%; border: 3px solid var(--line); cursor: pointer; padding: 4px; }
.sw.on { border-color: var(--ink); box-shadow: 0 0 0 3px var(--primary-soft); }
.sw svg { width: 100%; height: 100%; display: block; }
.pyramid { width: 100%; max-width: 420px; height: auto; }
.hx { stroke: var(--ink); stroke-width: 2; }
.hx.empty { fill: var(--surface); }
.hx.good, .sw.good { fill: var(--good); background: var(--good); }
.hx.sun, .sw.sun { fill: var(--sun); background: var(--sun); }
.hx.primary, .sw.primary { fill: var(--primary); background: var(--primary); }
.sym { fill: var(--surface); stroke: var(--ink); stroke-width: 1.2; pointer-events: none; }
.cell { cursor: pointer; }
.cell.locked { cursor: default; }
.cell:focus-visible { outline: none; }
.cell:focus-visible .hx { stroke: var(--primary); stroke-width: 5; }
.cell:not(.locked):hover .hx.empty { fill: var(--primary-soft); }
</style>
