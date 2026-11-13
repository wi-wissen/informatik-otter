<script setup lang="ts">
// A hidden binary search tree of chambers. Only the chambers on the way to the goal have fixed
// numbers (spine, from the booklet); all other chambers get the middle of the free number range.
import { computed, onMounted, ref } from 'vue';

const props = defineProps<{ spine: number[]; goal: number; max: number }>();
const emit = defineEmits<{ answer: [value: string] }>();

// Fixed numbers by path ('' = root, 'L', 'LR', ...), built by inserting the spine into a search tree.
const known: Record<string, number> = {};
for (const n of props.spine) {
  let path = '';
  while (known[path] !== undefined) path += n < known[path] ? 'L' : 'R';
  known[path] = n;
}

// Number of the chamber at `path`, or null if there is no chamber.
function chamber(path: string): number | null {
  let lo = 0, hi = props.max + 1, p = '';
  for (let i = 0; i <= path.length; i++) {
    const exists = known[p] !== undefined || hi - lo > 1;
    if (!exists) return null;
    const v = known[p] ?? Math.floor((lo + hi) / 2);
    if (i === path.length) return v;
    if (path[i] === 'L') hi = v; else lo = v;
    p += path[i];
  }
  return null;
}

const path = ref('');
const visited = ref<number[]>([]);
const here = computed(() => chamber(path.value) as number);
const canLeft = computed(() => chamber(path.value + 'L') !== null);
const canRight = computed(() => chamber(path.value + 'R') !== null);

function report() {
  emit('answer', String(here.value));
}
function go(dir: 'L' | 'R') {
  path.value += dir;
  visited.value = [...visited.value, here.value];
  report();
}
function back() {
  if (!path.value) return;
  path.value = path.value.slice(0, -1);
  visited.value = visited.value.slice(0, -1);
  report();
}
function restart() {
  path.value = '';
  visited.value = [];
  report();
}
onMounted(report);
</script>

<template>
  <div class="hotel">
    <p class="goal">Gesuchte Kammer: <strong>{{ goal }}</strong></p>
    <div class="cave">
      <button type="button" class="way left" :disabled="!canLeft" aria-label="Gang nach links" @click="go('L')">&#8598; links</button>
      <div class="room" role="status" aria-live="polite">
        <span class="label">Du bist in Kammer</span>
        <span class="num">{{ here }}</span>
      </div>
      <button type="button" class="way right" :disabled="!canRight" aria-label="Gang nach rechts" @click="go('R')">rechts &#8599;</button>
      <button type="button" class="way back" :disabled="!path" aria-label="Gang zurück" @click="back">&#8595; zurück</button>
    </div>
    <div class="bar">
      <span class="hint">Besucht: {{ [spine[0], ...visited].join(' → ') }}</span>
      <button type="button" class="reset" @click="restart">Neu starten</button>
    </div>
  </div>
</template>

<style scoped>
.hotel { display: grid; gap: 10px; }
.goal { margin: 0; }
.cave { display: grid; grid-template-columns: 1fr auto 1fr; grid-template-areas: "l r1 r2" "b b b"; gap: 10px; align-items: center; justify-items: center; padding: 16px; border-radius: 24px; background: var(--primary-soft); border: 1px solid var(--line); }
.room { grid-area: r1; width: 140px; height: 140px; border-radius: 50%; background: var(--surface); border: 3px solid var(--ink); display: grid; place-content: center; text-align: center; }
.room .label { font-size: .75rem; color: var(--muted); }
.room .num { font: 700 2rem var(--font-body); color: var(--ink); }
.way { border: 2px solid var(--primary); background: var(--surface); color: var(--ink); border-radius: 999px; padding: 10px 14px; font: inherit; font-weight: 600; cursor: pointer; min-height: 44px; }
.way:hover:not(:disabled), .way:focus-visible { background: var(--primary); color: var(--surface); }
.way:disabled { opacity: .35; cursor: not-allowed; }
.left { grid-area: l; }
.right { grid-area: r2; }
.back { grid-area: b; }
.bar { display: flex; justify-content: space-between; gap: 8px; align-items: center; flex-wrap: wrap; }
.hint { font-size: .85rem; color: var(--muted); }
.reset { border: 1px solid var(--line); background: var(--surface); color: var(--ink); border-radius: 999px; padding: 4px 12px; cursor: pointer; font: inherit; font-size: .85rem; }
</style>
