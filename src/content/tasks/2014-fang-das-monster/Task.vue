<script setup lang="ts">
// The monster hides in one of the yellow cells (a long snake-shaped row). Click a yellow cell: the monster is not
// there, and the yellow cells get fewer: only the larger part of the row on one side of the clicked cell stays
// (the monster is always where it is hardest to catch). When one yellow cell is left, the monster is caught.
// The answer is "ok" when the monster was caught with the fewest possible clicks.
import { computed, onMounted, ref } from 'vue';

const props = defineProps<{ rows: string[]; best: number }>();
const emit = defineEmits<{ answer: [value: string] }>();

const R = props.rows.length, C = props.rows[0].length;
const isYellow = (r: number, c: number) => props.rows[r]?.[c] === 'o';

// Order the yellow cells along the snake, starting at one end.
const path: [number, number][] = (() => {
  const all: [number, number][] = [];
  for (let r = 0; r < R; r++) for (let c = 0; c < C; c++) if (isYellow(r, c)) all.push([r, c]);
  const nb = (r: number, c: number) => [[r, c + 1], [r + 1, c], [r, c - 1], [r - 1, c]].filter(([y, x]) => isYellow(y, x));
  const startCell = all.find(([r, c]) => nb(r, c).length === 1) ?? all[0];
  const out: [number, number][] = [startCell];
  const seen = new Set([startCell.join(',')]);
  for (;;) {
    const [r, c] = out[out.length - 1];
    const next = nb(r, c).find(([y, x]) => !seen.has(`${y},${x}`));
    if (!next) break;
    out.push(next as [number, number]); seen.add(next.join(','));
  }
  return out;
})();
const indexOf = new Map(path.map(([r, c], i) => [`${r},${c}`, i]));

const lo = ref(0);
const hi = ref(path.length - 1);
const clicked = ref<number[]>([]);
const clicks = computed(() => clicked.value.length);
const caught = computed(() => hi.value === lo.value);
const remaining = computed(() => hi.value - lo.value + 1);

function report() {
  emit('answer', clicks.value === 0 ? '' : caught.value ? (clicks.value === props.best ? 'ok' : String(clicks.value)) : '');
}
onMounted(report);

function click(r: number, c: number) {
  const i = indexOf.get(`${r},${c}`);
  if (i === undefined || caught.value || i < lo.value || i > hi.value) return;
  const before = i - lo.value, after = hi.value - i;
  clicked.value = [...clicked.value, i];
  if (before > after) hi.value = i - 1; else lo.value = i + 1; // equal parts: the later part stays
  report();
}
function restart() { lo.value = 0; hi.value = path.length - 1; clicked.value = []; report(); }
function state(r: number, c: number): 'wall' | 'live' | 'gone' | 'hit' {
  const i = indexOf.get(`${r},${c}`);
  if (i === undefined) return 'wall';
  if (clicked.value.includes(i)) return 'hit';
  return i >= lo.value && i <= hi.value ? 'live' : 'gone';
}
</script>

<template>
  <div class="monster">
    <div class="grid" :style="{ gridTemplateColumns: `repeat(${C}, 1fr)`, aspectRatio: `${C} / ${R}` }" role="group" aria-label="Keller mit gelben Zellen">
      <template v-for="(row, r) in rows" :key="r">
        <template v-for="(_, c) in row.length" :key="c">
          <button v-if="state(r, c) === 'live' && !caught" type="button" class="cell live" aria-label="Gelbe Zelle" @click="click(r, c)" />
          <span v-else class="cell" :class="state(r, c)" />
        </template>
      </template>
    </div>
    <div class="bar">
      <span class="count" role="status">
        <strong>{{ clicks }}</strong> {{ clicks === 1 ? 'Klick' : 'Klicks' }} · {{ remaining }} gelbe {{ remaining === 1 ? 'Zelle' : 'Zellen' }}
        <template v-if="caught"> · Das Monster ist gefangen!</template>
      </span>
      <button type="button" class="reset" @click="restart">Neu starten</button>
    </div>
    <p class="hint">Klicke auf eine gelbe Zelle. Die gelben Zellen werden weniger. Rot sind die Zellen, auf die du geklickt hast; grau sind Zellen, in denen das Monster nicht mehr sein kann.</p>
  </div>
</template>

<style scoped>
.monster { display: grid; gap: 10px; max-width: 480px; }
.grid { display: grid; gap: 2px; padding: 2px; background: #2a2a2a; border-radius: 6px; width: 100%; }
.cell { display: block; border: 0; padding: 0; background: #3b3b3b; min-width: 0; }
.cell.live { background: #ffe600; cursor: pointer; }
.cell.live:hover { background: #fff27a; }
.cell.live:focus-visible { outline: 3px solid var(--primary); outline-offset: -3px; }
.cell.gone { background: #8a8a8a; }
.cell.hit { background: #e0120f; }
.bar { display: flex; justify-content: space-between; gap: 8px; align-items: center; flex-wrap: wrap; }
.hint { font-size: .85rem; color: var(--muted); margin: 0; }
.reset { border: 1px solid var(--line); background: var(--surface); color: var(--ink); border-radius: 999px; padding: 4px 12px; cursor: pointer; font: inherit; font-size: .85rem; }
</style>
