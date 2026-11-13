<script setup lang="ts">
// Zerobot drives on a grid. Every move costs 1 fuel; arriving on a spare tank swaps tanks.
// Goal: stand on the base station while every tank (carried and spare) is empty. Emits "ok" when that holds.
import { computed, onMounted, ref } from 'vue';

type Dir = 'up' | 'down' | 'left' | 'right';
type Tank = { row: number; col: number; fuel: number; color: string };
const props = defineProps<{
  size: number;
  start: { row: number; col: number; fuel: number };
  base: { row: number; col: number };
  tanks: Tank[];
}>();
const emit = defineEmits<{ answer: [value: string] }>();

const delta: Record<Dir, [number, number]> = { up: [-1, 0], down: [1, 0], left: [0, -1], right: [0, 1] };
const arrow: Record<Dir, string> = { up: '↑', down: '↓', left: '←', right: '→' };
const name: Record<Dir, string> = { up: 'nach oben', down: 'nach unten', left: 'nach links', right: 'nach rechts' };
const moves = ref<Dir[]>([]);

type Sim = { row: number; col: number; fuel: number; spare: Record<string, number>; origin: Record<string, string> };
function run(list: Dir[]): Sim {
  let row = props.start.row, col = props.start.col, fuel = props.start.fuel;
  const spare: Record<string, number> = Object.fromEntries(props.tanks.map((t) => [`${t.row},${t.col}`, t.fuel]));
  // which colour the tank lying on a cell has (the carried tank starts purple)
  const origin: Record<string, string> = Object.fromEntries(props.tanks.map((t) => [`${t.row},${t.col}`, t.color]));
  let carried = '#6b3fa0';
  for (const d of list) {
    const [dr, dc] = delta[d];
    const nr = row + dr, nc = col + dc;
    if (fuel <= 0 || nr < 0 || nc < 0 || nr >= props.size || nc >= props.size) continue;
    row = nr; col = nc; fuel -= 1;
    const k = `${row},${col}`;
    if (k in spare) {
      const f = spare[k]; spare[k] = fuel; fuel = f;
      const c = origin[k]; origin[k] = carried; carried = c;
    }
  }
  origin['carried'] = carried;
  return { row, col, fuel, spare, origin };
}
const sim = computed(() => run(moves.value));
const atBase = computed(() => sim.value.row === props.base.row && sim.value.col === props.base.col);
const allEmpty = computed(() => sim.value.fuel === 0 && Object.values(sim.value.spare).every((f) => f === 0));
const done = computed(() => atBase.value && allEmpty.value);
const status = computed(() => {
  if (done.value) return 'Mission erfüllt: Zerobot steht an der Basisstation und alle Tanks sind leer.';
  if (atBase.value) return 'Zerobot ist an der Basisstation, aber nicht alle Tanks sind leer.';
  if (sim.value.fuel === 0) return 'Der Tank ist leer. Zerobot kann sich nicht mehr bewegen, bis du Bewegungen zurücknimmst.';
  return '';
});

function report() {
  emit('answer', done.value ? 'ok' : moves.value.length ? 'offen' : '');
}
onMounted(report);
function can(d: Dir) {
  const [dr, dc] = delta[d];
  const nr = sim.value.row + dr, nc = sim.value.col + dc;
  return sim.value.fuel > 0 && nr >= 0 && nc >= 0 && nr < props.size && nc < props.size;
}
function go(d: Dir) {
  if (!can(d)) return;
  moves.value = [...moves.value, d];
  report();
}
function back() { moves.value = moves.value.slice(0, -1); report(); }
function reset() { moves.value = []; report(); }
function onKey(e: KeyboardEvent) {
  const map: Record<string, Dir> = { ArrowUp: 'up', ArrowDown: 'down', ArrowLeft: 'left', ArrowRight: 'right' };
  const d = map[e.key];
  if (d) { e.preventDefault(); go(d); }
}
function clickCell(r: number, c: number) {
  const dr = r - sim.value.row, dc = c - sim.value.col;
  if (Math.abs(dr) + Math.abs(dc) !== 1) return;
  go(dr === -1 ? 'up' : dr === 1 ? 'down' : dc === -1 ? 'left' : 'right');
}
const cells = computed(() => {
  const out: { r: number; c: number; tank?: number; color?: string; base: boolean; robot: boolean }[] = [];
  for (let r = 0; r < props.size; r++) for (let c = 0; c < props.size; c++) {
    const k = `${r},${c}`;
    out.push({
      r, c, base: r === props.base.row && c === props.base.col, robot: r === sim.value.row && c === sim.value.col,
      tank: k in sim.value.spare ? sim.value.spare[k] : undefined, color: sim.value.origin[k],
    });
  }
  return out;
});
</script>

<template>
  <div class="zb">
    <div class="grid" tabindex="0" role="group" aria-label="Raster mit Zerobot. Pfeiltasten bewegen Zerobot."
         :style="{ gridTemplateColumns: `repeat(${size}, 1fr)` }" @keydown="onKey">
      <button v-for="cell in cells" :key="`${cell.r}-${cell.c}`" type="button" class="cell" tabindex="-1"
              :class="{ near: Math.abs(cell.r - sim.row) + Math.abs(cell.c - sim.col) === 1 && sim.fuel > 0 }"
              :aria-label="`Feld Zeile ${cell.r + 1}, Spalte ${cell.c + 1}`" @click="clickCell(cell.r, cell.c)">
        <span v-if="cell.base" class="base" aria-label="Basisstation" role="img">
          <svg viewBox="0 0 40 40" width="100%" height="100%"><path d="M20 12 L8 36 H32 Z M14 28 H26 M16 21 H24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/><circle cx="20" cy="9" r="2.5" fill="currentColor"/><path d="M12 6 Q8 9 12 12 M28 6 Q32 9 28 12" fill="none" stroke="currentColor" stroke-width="2"/></svg>
        </span>
        <span v-if="cell.tank !== undefined && !cell.robot" class="tank" :style="{ background: cell.color }" :aria-label="`Austauschtank mit Füllstand ${cell.tank}`" role="img">{{ cell.tank }}</span>
        <span v-if="cell.robot" class="robot" role="img" :aria-label="`Zerobot mit Füllstand ${sim.fuel}`">
          <span class="tank carried" :style="{ background: sim.origin.carried }">{{ sim.fuel }}</span>
          <span class="tracks" />
        </span>
      </button>
    </div>

    <div class="pad" role="group" aria-label="Bewegen">
      <button type="button" class="k up" :disabled="!can('up')" aria-label="Nach oben" @click="go('up')">↑</button>
      <button type="button" class="k left" :disabled="!can('left')" aria-label="Nach links" @click="go('left')">←</button>
      <button type="button" class="k down" :disabled="!can('down')" aria-label="Nach unten" @click="go('down')">↓</button>
      <button type="button" class="k right" :disabled="!can('right')" aria-label="Nach rechts" @click="go('right')">→</button>
    </div>

    <p class="path" aria-live="polite">
      <span class="count">{{ moves.length }} Bewegungen</span>
      <span class="seq">{{ moves.map((m) => arrow[m]).join(' ') }}</span>
    </p>
    <p v-if="status" class="status" :class="{ good: done }" role="status">{{ status }}</p>
    <div class="bar">
      <button type="button" class="small" :disabled="!moves.length" @click="back">Einen Schritt zurück</button>
      <button type="button" class="small" :disabled="!moves.length" @click="reset">Von vorn beginnen</button>
    </div>
  </div>
</template>

<style scoped>
.zb { display: grid; gap: 10px; justify-items: center; }
.grid { display: grid; width: min(100%, 340px); gap: 2px; padding: 2px; border-radius: 8px; background: var(--line); outline: none; }
.grid:focus-visible { box-shadow: 0 0 0 3px var(--sun); }
.cell { position: relative; aspect-ratio: 1; border: 0; padding: 0; background: var(--surface); cursor: default; display: grid; place-items: center; color: var(--ink); }
.cell.near { background: var(--primary-soft); cursor: pointer; }
.base { position: absolute; inset: 14%; color: var(--ink); }
.tank { display: grid; place-items: center; width: 62%; height: 70%; border-radius: 10px; color: #fff; font: 800 1.35rem var(--font-body); box-shadow: inset 0 -4px 0 rgb(0 0 0 / .18); }
.robot { position: absolute; inset: 6%; display: grid; place-items: center; }
.robot .tank { width: 64%; height: 72%; outline: 3px solid #2f6fd0; }
.tracks { position: absolute; left: 12%; right: 12%; bottom: 2%; height: 9%; border-radius: 6px; background: repeating-linear-gradient(90deg, var(--ink) 0 8px, var(--surface) 8px 12px); }
.pad { display: grid; grid-template-columns: repeat(3, 52px); grid-template-rows: repeat(2, 52px); gap: 6px; grid-template-areas: ". up ." "left down right"; }
.k { border: 2px solid var(--line); background: var(--surface); color: var(--ink); border-radius: 10px; font: 700 1.4rem var(--font-body); cursor: pointer; }
.k:hover:not(:disabled) { border-color: var(--primary); }
.k:disabled { opacity: .4; cursor: not-allowed; }
.k.up { grid-area: up; } .k.left { grid-area: left; } .k.down { grid-area: down; } .k.right { grid-area: right; }
.path { display: flex; flex-wrap: wrap; gap: 6px 12px; justify-content: center; margin: 0; font-size: .9rem; color: var(--muted); }
.seq { font-family: var(--font-mono); color: var(--ink); letter-spacing: .08em; word-break: break-all; }
.status { margin: 0; font-weight: 700; color: var(--bad); text-align: center; }
.status.good { color: var(--good); }
.bar { display: flex; gap: 8px; flex-wrap: wrap; justify-content: center; }
.small { border: 1px solid var(--line); background: var(--surface); color: var(--ink); border-radius: 999px; padding: 4px 14px; cursor: pointer; font: inherit; font-size: .85rem; }
.small:disabled { opacity: .4; cursor: default; }
</style>
