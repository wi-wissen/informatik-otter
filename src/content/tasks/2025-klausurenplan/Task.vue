<script setup lang="ts">
import { computed, ref } from 'vue';

type Node = { id: string; x: number; y: number };
const props = defineProps<{
  nodes: Node[];
  edges: [string, string][];
  days: number; // available days (colours)
  minColors: number; // fewest days that are enough
}>();
const emit = defineEmits<{ answer: [value: string] }>();

const value = ref<Record<string, number>>(Object.fromEntries(props.nodes.map((n) => [n.id, 0])));
const pos = Object.fromEntries(props.nodes.map((n) => [n.id, n]));
const R = 26;
const box = computed(() => {
  const xs = props.nodes.map((n) => n.x), ys = props.nodes.map((n) => n.y);
  const x0 = Math.min(...xs) - R - 6, y0 = Math.min(...ys) - R - 6;
  return { x0, y0, w: Math.max(...xs) + R + 6 - x0, h: Math.max(...ys) + R + 6 - y0 };
});

function cycle(id: string) {
  value.value = { ...value.value, [id]: (value.value[id] + 1) % (props.days + 1) };
  emit('answer', verdict(value.value));
}
function reset() {
  value.value = Object.fromEntries(props.nodes.map((n) => [n.id, 0]));
  emit('answer', '');
}
// "ok" = every exam has a day, no conflict edge joins equal days, and only minColors days are used.
function verdict(v: Record<string, number>): string {
  if (Object.values(v).some((d) => d === 0)) return 'unvollständig';
  if (props.edges.some(([a, b]) => v[a] === v[b])) return 'konflikt';
  return new Set(Object.values(v)).size === props.minColors ? 'ok' : 'zu viele Tage';
}
const conflicts = computed(() => props.edges.filter(([a, b]) => value.value[a] && value.value[a] === value.value[b]));
const used = computed(() => new Set(Object.values(value.value).filter(Boolean)).size);
</script>

<template>
  <div class="gc">
    <svg :viewBox="`${box.x0} ${box.y0} ${box.w} ${box.h}`" class="svg" role="group" aria-label="Diagramm der Tageskonflikte">
      <line v-for="([a, b], i) in edges" :key="i" :x1="pos[a].x" :y1="pos[a].y" :x2="pos[b].x" :y2="pos[b].y"
        :class="['edge', { bad: conflicts.some(([x, y]) => x === a && y === b) }]" />
      <g v-for="n in nodes" :key="n.id" class="node" tabindex="0" role="button"
        :aria-label="`Klausur ${n.id}: ${value[n.id] ? 'Tag ' + value[n.id] : 'noch kein Tag'}`"
        @click="cycle(n.id)" @keydown.enter.prevent="cycle(n.id)" @keydown.space.prevent="cycle(n.id)">
        <circle :cx="n.x" :cy="n.y" :r="R" :class="{ set: value[n.id] }" />
        <text :x="n.x" :y="n.y" text-anchor="middle" dominant-baseline="central">{{ value[n.id] || '' }}</text>
      </g>
    </svg>
    <div class="bar">
      <span class="hint">Tippe auf einen Kreis, um den Tag (1 bis {{ days }}) zu wechseln. Genutzte Tage: {{ used }}</span>
      <button type="button" class="reset" @click="reset">Zurücksetzen</button>
    </div>
  </div>
</template>

<style scoped>
.gc { display: grid; gap: 8px; }
.svg { width: 100%; max-width: 440px; margin: 0 auto; display: block; }
.edge { stroke: var(--ink); stroke-width: 2; }
.edge.bad { stroke: var(--bad); stroke-width: 4; }
.node { cursor: pointer; outline: none; }
.node circle { fill: var(--surface); stroke: var(--ink); stroke-width: 2; }
.node circle.set { fill: var(--primary-soft); }
.node:hover circle, .node:focus-visible circle { stroke: var(--primary); stroke-width: 4; }
.node text { font: 700 24px var(--font-body); fill: var(--ink); pointer-events: none; }
.bar { display: flex; justify-content: space-between; gap: 8px; flex-wrap: wrap; align-items: center; }
.hint { font-size: .85rem; color: var(--muted); }
.reset { border: 1px solid var(--line); background: var(--surface); color: var(--ink); border-radius: 999px; padding: 4px 12px; cursor: pointer; font: inherit; font-size: .85rem; }
</style>
