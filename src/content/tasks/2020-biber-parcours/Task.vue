<script setup lang="ts">
// The table plan. The student walks a route: click a table to start there, then click the lines
// (or the neighbouring tables) to walk on. Every line may be used once and costs 1 second; an item is taken
// when you arrive at its table not earlier than the number on it. The route must end at the teacher's table
// within the time limit with at least `goal` items.
import { computed, onMounted, ref } from 'vue';

const props = defineProps<{
  background: string; width: number; height: number;
  xs: number[]; ys: number[];
  numbers: Record<string, number>; // "row,col" -> number on the table
  teacher: string; limit: number; goal: number;
}>();
const emit = defineEmits<{ answer: [value: string] }>();

const cells = props.ys.flatMap((_, r) => props.xs.map((_, c) => `${r},${c}`));
const pos = (k: string) => { const [r, c] = k.split(',').map(Number); return { x: props.xs[c], y: props.ys[r] }; };
const neighbours = (k: string) => {
  const [r, c] = k.split(',').map(Number);
  return [[r - 1, c], [r + 1, c], [r, c - 1], [r, c + 1]]
    .filter(([a, b]) => a >= 0 && b >= 0 && a < props.ys.length && b < props.xs.length).map(([a, b]) => `${a},${b}`);
};
const edgeKey = (a: string, b: string) => [a, b].sort().join('|');
const edges = cells.flatMap((a) => neighbours(a).filter((b) => a < b).map((b) => ({ a, b, key: edgeKey(a, b) })));

const route = ref<string[]>([]); // visited tables in order
const used = computed(() => new Set(route.value.slice(1).map((t, i) => edgeKey(route.value[i], t))));
const seconds = computed(() => Math.max(0, route.value.length - 1));
const taken = computed(() => {
  const got: string[] = [];
  route.value.slice(1).forEach((t, i) => {
    const n = props.numbers[t];
    if (n !== undefined && !got.includes(t) && i + 1 >= n) got.push(t);
  });
  return got;
});
const here = computed(() => route.value[route.value.length - 1]);

function report() {
  if (!route.value.length) return emit('answer', '');
  const ok = here.value === props.teacher && seconds.value <= props.limit && taken.value.length >= props.goal;
  emit('answer', ok ? 'ok' : 'noch nicht');
}
onMounted(report);

function visit(k: string) {
  if (!route.value.length) route.value = [k];
  else if (route.value.length > 1 && k === route.value[route.value.length - 2]) route.value = route.value.slice(0, -1); // step back
  else if (neighbours(here.value).includes(k) && !used.value.has(edgeKey(here.value, k)) && seconds.value < props.limit) route.value = [...route.value, k];
  else return;
  report();
}
function clickEdge(a: string, b: string) {
  if (!route.value.length) return;
  const other = a === here.value ? b : b === here.value ? a : null;
  if (other) visit(other);
}
function reset() { route.value = []; report(); }
const arrival = (i: number) => i;
</script>

<template>
  <div class="par">
    <svg :viewBox="`0 0 ${width} ${height}`" role="group" aria-label="Tischplan">
      <image :href="background" x="0" y="0" :width="width" :height="height" />
      <g v-for="e in edges" :key="e.key">
        <line :x1="pos(e.a).x" :y1="pos(e.a).y" :x2="pos(e.b).x" :y2="pos(e.b).y" class="seg" :class="{ on: used.has(e.key) }" />
        <line :x1="pos(e.a).x" :y1="pos(e.a).y" :x2="pos(e.b).x" :y2="pos(e.b).y" class="hit" role="button" tabindex="0"
              :aria-label="`Linie von Tisch ${e.a} nach Tisch ${e.b}`"
              @click="clickEdge(e.a, e.b)" @keydown.enter.prevent="clickEdge(e.a, e.b)" @keydown.space.prevent="clickEdge(e.a, e.b)" />
      </g>
      <g v-for="k in cells" :key="k" class="table" role="button" tabindex="0" :aria-label="`Tisch ${k}${numbers[k] ? ' mit der Zahl ' + numbers[k] : ''}`"
         @click="visit(k)" @keydown.enter.prevent="visit(k)" @keydown.space.prevent="visit(k)">
        <circle :cx="pos(k).x" :cy="pos(k).y" r="46" class="node" :class="{ here: k === here, got: taken.includes(k) }" />
      </g>
      <g v-for="(k, i) in route" :key="'s' + i" class="step">
        <circle :cx="pos(k).x + (i === 0 ? 0 : 36)" :cy="pos(k).y - 40" r="17" class="bubble" />
        <text :x="pos(k).x + (i === 0 ? 0 : 36)" :y="pos(k).y - 34" class="bt">{{ i === 0 ? 'S' : arrival(i) }}</text>
      </g>
    </svg>
    <div class="bar" role="status">
      <span>Zeit: <strong>{{ seconds }}</strong> von {{ limit }} Sekunden</span>
      <span>Gegenstände: <strong>{{ taken.length }}</strong></span>
      <button type="button" class="reset" @click="reset">Neu beginnen</button>
    </div>
    <p class="hint">Klicke auf einen Tisch, um dort zu starten. Dann klicke auf die Linien, um dich von Tisch zu Tisch zu bewegen. Ein Klick auf die letzte Linie nimmt den Schritt zurück. Das Kreuz ist der Lehrertisch.</p>
  </div>
</template>

<style scoped>
.par { display: grid; gap: 8px; }
svg { width: 100%; max-width: 560px; height: auto; margin-inline: auto; background: #fff; border-radius: 10px; }
.seg { stroke: transparent; stroke-width: 14; stroke-linecap: round; }
.seg.on { stroke: var(--primary); stroke-width: 18; }
.hit { stroke: transparent; stroke-width: 44; cursor: pointer; }
.hit:focus-visible { stroke: color-mix(in srgb, var(--sun) 60%, transparent); outline: none; }
.node { fill: transparent; stroke: transparent; stroke-width: 6; cursor: pointer; }
.node.here { stroke: var(--sun); }
.node.got { fill: color-mix(in srgb, var(--good) 35%, transparent); }
.table:focus-visible .node { stroke: var(--primary); }
.bubble { fill: var(--primary); stroke: #fff; stroke-width: 3; }
.bt { fill: var(--primary-ink); font: 700 20px var(--font-body); text-anchor: middle; pointer-events: none; }
.bar { display: flex; flex-wrap: wrap; gap: 14px; align-items: center; }
.reset { border: 1px solid var(--line); background: var(--surface); color: var(--ink); border-radius: 999px; padding: 4px 12px; cursor: pointer; font: inherit; font-size: .85rem; margin-left: auto; }
.hint { font-size: .85rem; color: var(--muted); }
</style>
