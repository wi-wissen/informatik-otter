<script setup lang="ts">
import { computed, ref } from 'vue';

const props = defineProps<{ slots: number; repeats: number; size: number }>();
const emit = defineEmits<{ answer: [value: string] }>();

const OPTIONS = [
  { id: '', label: '– wählen –' },
  { id: 'L', label: 'nach links drehen' },
  { id: 'R', label: 'nach rechts drehen' },
  { id: 'F', label: 'R Zellen vorwärts' },
];
const DIRS = [[0, -1], [1, 0], [0, 1], [-1, 0]]; // north, east, south, west
const prog = ref<string[]>(Array.from({ length: props.slots }, () => ''));
const N = props.size;
const mid = (N - 1) / 2;

// Run the block `repeats` times; the counter R grows with every run.
const run = computed(() => {
  let x = mid, y = mid, d = 0;
  const seen = new Set([`${x},${y}`]);
  const path: [number, number][] = [[x, y]];
  let outside = false;
  for (let r = 1; r <= props.repeats && !outside; r++) {
    for (const c of prog.value) {
      if (c === 'L') d = (d + 3) % 4;
      else if (c === 'R') d = (d + 1) % 4;
      else if (c === 'F') {
        for (let i = 0; i < r; i++) {
          x += DIRS[d][0]; y += DIRS[d][1];
          if (x < 0 || y < 0 || x >= N || y >= N) { outside = true; break; }
          seen.add(`${x},${y}`); path.push([x, y]);
        }
        if (outside) break;
      }
    }
  }
  let all = true;
  for (let i = 1; i < N - 1; i++) for (let j = 1; j < N - 1; j++) if (!seen.has(`${i},${j}`)) all = false;
  return { seen, path, outside, all };
});
const complete = computed(() => prog.value.every((p) => p !== ''));

function change(i: number, v: string) {
  prog.value = prog.value.map((p, k) => (k === i ? v : p));
  emit('answer', complete.value && !run.value.outside && run.value.all ? 'ok' : 'nicht der ganze Acker');
}
const cell = 30;
const poly = computed(() => run.value.path.map(([x, y]) => `${x * cell + cell / 2},${y * cell + cell / 2}`).join(' '));
</script>

<template>
  <div class="cassy">
    <div class="block">
      <div class="cap">Mache es {{ repeats }} Mal</div>
      <label v-for="(p, i) in prog" :key="i" class="slot">
        <span class="n">{{ i + 1 }}</span>
        <select :value="p" :aria-label="`Anweisung ${i + 1}`" @change="change(i, ($event.target as HTMLSelectElement).value)">
          <option v-for="o in OPTIONS" :key="o.id" :value="o.id">{{ o.label }}</option>
        </select>
      </label>
    </div>
    <div class="field">
      <svg :viewBox="`0 0 ${N * cell} ${N * cell}`" class="svg" role="img" aria-label="Gitterland mit Cassys Weg; der Acker ist das innere Quadrat">
        <rect v-for="k in N * N" :key="k" :x="((k - 1) % N) * cell" :y="Math.floor((k - 1) / N) * cell" :width="cell" :height="cell"
          :class="['c', { acker: (k - 1) % N > 0 && (k - 1) % N < N - 1 && Math.floor((k - 1) / N) > 0 && Math.floor((k - 1) / N) < N - 1, eaten: run.seen.has(`${(k - 1) % N},${Math.floor((k - 1) / N)}`) }]" />
        <polyline :points="poly" class="path" />
        <circle :cx="mid * cell + cell / 2" :cy="mid * cell + cell / 2" r="6" class="start" />
      </svg>
      <p v-if="run.outside" class="warn">Cassy hat das Gitterland verlassen!</p>
      <p v-else class="hint">Das beige Quadrat ist der Acker. Grün markiert die Zellen, die Cassy besucht hat (sie startet in der Mitte, Blick nach oben).</p>
    </div>
  </div>
</template>

<style scoped>
.cassy { display: flex; gap: 20px; flex-wrap: wrap; align-items: flex-start; justify-content: center; }
.block { display: grid; gap: 6px; border: 2px solid var(--ink); border-radius: 8px; padding: 10px; background: var(--surface); }
.cap { font-weight: 700; text-align: center; }
.slot { display: flex; gap: 6px; align-items: center; }
.n { width: 1.4em; color: var(--muted); font-weight: 600; }
select { font: inherit; padding: 6px 8px; border: 1px solid var(--line); border-radius: 6px; background: var(--surface); color: var(--ink); min-width: 12em; }
.field { display: grid; gap: 6px; justify-items: center; }
.svg { width: 230px; max-width: 100%; }
.c { fill: var(--surface); stroke: var(--line); stroke-width: 1; }
.c.acker { fill: var(--sunk); }
.c.eaten { fill: var(--good-soft); }
.path { fill: none; stroke: var(--primary); stroke-width: 3; stroke-linejoin: round; }
.start { fill: var(--good); }
.hint, .warn { margin: 0; font-size: .85rem; max-width: 30ch; }
.hint { color: var(--muted); }
.warn { color: var(--bad); font-weight: 600; }
</style>
