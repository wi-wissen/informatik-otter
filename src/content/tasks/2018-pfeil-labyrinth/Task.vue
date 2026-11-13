<script setup lang="ts">
import { computed, ref } from 'vue';

// cells: one string per row, one letter per cell: U/R/D/L = arrow, S = smiley (start field), H = home.
const props = defineProps<{ cells: string[]; entries: [number, number][] }>();
const emit = defineEmits<{ answer: [value: string] }>();

const ORDER = ['U', 'R', 'D', 'L'];
const DELTA: Record<string, [number, number]> = { U: [-1, 0], R: [0, 1], D: [1, 0], L: [0, -1] };
const ROT: Record<string, number> = { U: 0, R: 90, D: 180, L: 270 };
const initial = props.cells.map((r) => r.split(''));
const grid = ref<string[][]>(initial.map((r) => [...r]));
const rows = props.cells.length, cols = props.cells[0].length;
const entrySet = new Set(props.entries.map(([r, c]) => `${r},${c}`));

const changed = computed(() => grid.value.flat().filter((v, i) => v !== initial.flat()[i]).length);

// Follow the arrows from an entry field; true if the home field is reached before leaving the board or looping.
function reaches(from: [number, number]): boolean {
  let [r, c] = from;
  const seen = new Set<string>();
  while (r >= 0 && r < rows && c >= 0 && c < cols) {
    const v = grid.value[r][c];
    if (v === 'H') return true;
    if (v === 'S' || seen.has(`${r},${c}`)) return false;
    seen.add(`${r},${c}`);
    r += DELTA[v][0];
    c += DELTA[v][1];
  }
  return false;
}
const works = computed(() => props.entries.some((e) => reaches(e)));

function turn(r: number, c: number) {
  const v = grid.value[r][c];
  if (v === 'S' || v === 'H') return;
  const next = grid.value.map((row) => [...row]);
  next[r][c] = ORDER[(ORDER.indexOf(v) + 1) % 4];
  grid.value = next;
  emit('answer', changed.value === 1 && works.value ? 'ok' : changed.value > 1 ? 'zu viele geändert' : 'nein');
}
function reset() {
  grid.value = initial.map((r) => [...r]);
  emit('answer', '');
}
const name = (r: number, c: number) => `${'ABCDEFGH'[c]}${r + 1}`;
</script>

<template>
  <div class="maze">
    <div class="board" :style="{ gridTemplateColumns: `repeat(${cols}, 72px)` }" role="group" aria-label="Pfeil-Labyrinth">
      <template v-for="(row, r) in grid" :key="r">
        <button v-for="(v, c) in row" :key="c" type="button" class="cell" :class="{ entry: entrySet.has(`${r},${c}`), fixed: v === 'S' || v === 'H' }"
          :aria-label="v === 'S' ? `${name(r, c)}: Smiley` : v === 'H' ? `${name(r, c)}: Zuhause` : `${name(r, c)}: Pfeil nach ${{ U: 'oben', R: 'rechts', D: 'unten', L: 'links' }[v]}${entrySet.has(`${r},${c}`) ? ', Eingang' : ''}`"
          @click="turn(r, c)">
          <svg v-if="v === 'S'" viewBox="-20 -20 40 40" class="icon"><circle r="17" class="face" /><circle cx="-6" cy="-5" r="2.2" /><circle cx="6" cy="-5" r="2.2" /><path d="M-9 4 Q0 14 9 4" class="smile" /></svg>
          <svg v-else-if="v === 'H'" viewBox="-20 -20 40 40" class="icon"><path d="M-16 -2 L0 -16 L16 -2 V16 H-16Z" class="house" /><rect x="-5" y="3" width="10" height="13" class="door" /></svg>
          <svg v-else viewBox="-20 -20 40 40" class="icon" :style="{ transform: `rotate(${ROT[v]}deg)` }"><path d="M0 -16 L14 -2 H6 V16 H-6 V-2 H-14Z" class="arrow" /></svg>
        </button>
      </template>
    </div>
    <div class="bar">
      <span class="hint">Tippe auf einen Pfeil, um ihn zu drehen. Grüne Felder sind Eingänge. Geänderte Pfeile: {{ changed }}</span>
      <button type="button" class="reset" @click="reset">Zurücksetzen</button>
    </div>
  </div>
</template>

<style scoped>
.maze { display: grid; gap: 8px; }
.board { display: grid; gap: 4px; justify-content: start; }
.cell { width: 72px; height: 72px; padding: 6px; border: 2px solid var(--line); border-radius: 10px; background: var(--surface); cursor: pointer; }
.cell.entry { background: var(--good-soft); border-color: var(--good); }
.cell.fixed { cursor: default; }
.cell:not(.fixed):hover, .cell:focus-visible { border-color: var(--primary); outline: none; }
.icon { width: 100%; height: 100%; display: block; transition: transform .15s; }
.arrow { fill: var(--primary); stroke: var(--ink); stroke-width: 1.5; stroke-linejoin: round; }
.face { fill: var(--sun); stroke: var(--ink); stroke-width: 1.5; }
.icon circle:not(.face) { fill: var(--ink); }
.smile { fill: none; stroke: var(--ink); stroke-width: 2; stroke-linecap: round; }
.house { fill: var(--otter-fur); stroke: var(--ink); stroke-width: 1.5; stroke-linejoin: round; }
.door { fill: var(--sun); stroke: var(--ink); stroke-width: 1; }
.bar { display: flex; justify-content: space-between; gap: 8px; flex-wrap: wrap; align-items: center; max-width: 320px; }
.hint { font-size: .85rem; color: var(--muted); }
.reset { border: 1px solid var(--line); background: var(--surface); color: var(--ink); border-radius: 999px; padding: 4px 12px; cursor: pointer; font: inherit; font-size: .85rem; }
</style>
