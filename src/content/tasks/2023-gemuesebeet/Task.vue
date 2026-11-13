<script setup lang="ts">
// Hexagon bed: choose a vegetable, then click an empty area to plant it. Click a planted vegetable to remove it.
import { computed, ref } from 'vue';

type Veg = { id: string; label: string; image: string; count: number };
const props = defineProps<{
  rows: number;
  cols: number;
  vegetables: Veg[];
  /** Pre-planted cells: "row,col" -> vegetable id */
  fixed: Record<string, string>;
  /** Pairs of vegetables that must not touch */
  conflicts: [string, string][];
}>();
const emit = defineEmits<{ answer: [value: unknown] }>();

const W = 60;
const R = W / Math.sqrt(3);
const key = (r: number, c: number) => `${r},${c}`;
const cells = computed(() => {
  const out: { r: number; c: number; x: number; y: number; k: string }[] = [];
  for (let r = 0; r < props.rows; r++) {
    for (let c = 0; c < props.cols; c++) {
      out.push({ r, c, x: W / 2 + c * W + (props.rows - 1 - r) * (W / 2) + 2, y: R + r * 1.5 * R + 2, k: key(r, c) });
    }
  }
  return out;
});
const width = W * props.cols + (props.rows - 1) * (W / 2) + 4;
const height = R * 2 + (props.rows - 1) * 1.5 * R + 4;

const planted = ref<Record<string, string>>({});
const selected = ref<string>(props.vegetables[0]?.id ?? '');
const byId = computed(() => Object.fromEntries(props.vegetables.map((v) => [v.id, v])));
const at = (k: string) => props.fixed[k] ?? planted.value[k];

const left = (id: string) => {
  const used = Object.values(planted.value).filter((x) => x === id).length;
  return (byId.value[id]?.count ?? 0) - used;
};

function neighbours(r: number, c: number): string[] {
  // Each row is shifted half a cell to the left of the row above it.
  const cand: [number, number][] = [[r, c - 1], [r, c + 1], [r + 1, c], [r + 1, c + 1], [r - 1, c - 1], [r - 1, c]];
  return cand.filter(([rr, cc]) => rr >= 0 && rr < props.rows && cc >= 0 && cc < props.cols).map(([rr, cc]) => key(rr, cc));
}
const clash = (a: string, b: string) => props.conflicts.some(([x, y]) => (x === a && y === b) || (x === b && y === a));

const badCells = computed(() => {
  const bad = new Set<string>();
  for (const cell of cells.value) {
    const v = at(cell.k);
    if (!v) continue;
    for (const n of neighbours(cell.r, cell.c)) {
      const w = at(n);
      if (w && clash(v, w)) { bad.add(cell.k); bad.add(n); }
    }
  }
  return bad;
});

function report() {
  const board = cells.value.map((c) => at(c.k) ?? '');
  const placedCount = Object.keys(planted.value).length;
  const complete = board.every((v) => v !== '');
  const countsOk = props.vegetables.every((v) => left(v.id) === 0);
  if (placedCount === 0) emit('answer', []);
  else if (complete && countsOk && badCells.value.size === 0) emit('answer', 'korrekt');
  else emit('answer', board);
}

function click(k: string) {
  if (props.fixed[k]) return;
  if (planted.value[k]) {
    const { [k]: _removed, ...rest } = planted.value;
    planted.value = rest;
  } else if (selected.value && left(selected.value) > 0) {
    planted.value = { ...planted.value, [k]: selected.value };
  } else return;
  report();
}
function reset() { planted.value = {}; report(); }
</script>

<template>
  <div class="bed">
    <div class="tools" role="radiogroup" aria-label="Gemüse auswählen">
      <button v-for="v in vegetables.filter((x) => x.count > 0)" :key="v.id" type="button" class="tool" role="radio"
              :aria-checked="selected === v.id" :class="{ on: selected === v.id }" :disabled="left(v.id) === 0 && selected !== v.id"
              @click="selected = v.id">
        <img :src="v.image" :alt="v.label" draggable="false" />
        <span>{{ v.label }}: noch {{ left(v.id) }}</span>
      </button>
      <button type="button" class="reset" @click="reset">Beet leeren</button>
    </div>
    <svg :viewBox="`0 0 ${width} ${height}`" class="board" role="group" aria-label="Gemüsebeet mit sechseckigen Bereichen">
      <g v-for="cell in cells" :key="cell.k" :transform="`translate(${cell.x} ${cell.y})`"
         :class="['cell', { fixed: fixed[cell.k], bad: badCells.has(cell.k) }]"
         :role="fixed[cell.k] ? 'img' : 'button'" :tabindex="fixed[cell.k] ? -1 : 0"
         :aria-label="`Bereich ${cell.r + 1}.${cell.c + 1}${at(cell.k) ? ': ' + byId[at(cell.k)!]?.label : ': leer'}`"
         @click="click(cell.k)" @keydown.enter.prevent="click(cell.k)" @keydown.space.prevent="click(cell.k)">
        <polygon :points="[0,1,2,3,4,5].map(i => { const a = Math.PI / 180 * (60 * i - 30); return `${(R * Math.cos(a)).toFixed(1)},${(R * Math.sin(a)).toFixed(1)}`; }).join(' ')" />
        <image v-if="at(cell.k)" :href="byId[at(cell.k)!]?.image" x="-22" y="-22" width="44" height="44" preserveAspectRatio="xMidYMid meet" />
      </g>
    </svg>
    <p v-if="badCells.size" class="warn" role="status">Rot umrandete Bereiche berühren sich, obwohl sich ihr Gemüse nicht verträgt.</p>
  </div>
</template>

<style scoped>
.bed { display: grid; gap: 14px; justify-items: start; }
.tools { display: flex; flex-wrap: wrap; gap: 8px; align-items: stretch; }
.tool { display: grid; justify-items: center; gap: 2px; padding: 6px 10px; border: 2px solid var(--line); border-radius: 10px; background: var(--surface); color: var(--ink); font: inherit; font-size: 0.85rem; cursor: pointer; }
.tool img { height: 40px; width: 52px; object-fit: contain; }
.tool.on { border-color: var(--primary); background: var(--primary-soft); }
.tool:disabled { opacity: 0.5; cursor: not-allowed; }
.reset { border: 2px dashed var(--line); background: transparent; color: var(--ink); border-radius: 10px; padding: 6px 12px; font: inherit; cursor: pointer; }
.board { width: min(100%, 420px); height: auto; }
.cell polygon { fill: var(--sun-soft); stroke: var(--sun-ink); stroke-width: 1.5; }
.cell.fixed polygon { fill: var(--sunk); }
.cell:not(.fixed) { cursor: pointer; }
.cell:not(.fixed):hover polygon, .cell:focus-visible polygon { stroke: var(--primary); stroke-width: 3; }
.cell:focus-visible { outline: none; }
.cell.bad polygon { stroke: var(--bad); stroke-width: 3.5; fill: var(--bad-soft); }
.warn { margin: 0; color: var(--bad); font-weight: 700; }
</style>
