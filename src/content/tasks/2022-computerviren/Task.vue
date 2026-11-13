<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';

type Node = { id: string; x: number; y: number; start?: 'blue' | 'red' };
type Edge = { from: string; to: string };
type Mark = { id: string; label: string; image: string };
const props = defineProps<{ width: number; height: number; radius?: number; nodes: Node[]; edges: Edge[]; marks: Mark[] }>();
const emit = defineEmits<{ answer: [value: Record<string, string>] }>();

const R = props.radius ?? 36;
const state = ref<Record<string, string>>({});
const byId = computed(() => Object.fromEntries(props.nodes.map((n) => [n.id, n])));
const markById = computed(() => Object.fromEntries(props.marks.map((m) => [m.id, m])));

function send() { emit('answer', { ...state.value }); }
function init() {
  state.value = Object.fromEntries(props.nodes.filter((n) => n.start).map((n) => [n.id, n.start as string]));
  send();
}
onMounted(init);

// click cycle: no mark -> first mark -> second mark -> ... -> no mark
function cycle(id: string) {
  const order = props.marks.map((m) => m.id);
  const cur = state.value[id];
  const next = cur === undefined ? order[0] : order[order.indexOf(cur) + 1];
  const copy = { ...state.value };
  if (next === undefined) delete copy[id]; else copy[id] = next;
  state.value = copy;
  send();
}
const label = (n: Node) => `Knoten ${n.id}: ${state.value[n.id] ? markById.value[state.value[n.id]].label : 'keine Markierung'}`;
</script>

<template>
  <div class="virus">
    <ul class="legend">
      <li v-for="m in marks" :key="m.id"><img :src="m.image" alt="" width="24" height="24" /> {{ m.label }}</li>
    </ul>
    <svg :viewBox="`0 0 ${width} ${height}`" role="group" aria-label="Computernetz">
      <line v-for="(e, i) in edges" :key="i" class="edge"
            :x1="byId[e.from].x" :y1="byId[e.from].y" :x2="byId[e.to].x" :y2="byId[e.to].y" />
      <g v-for="n in nodes" :key="n.id" class="node" role="button" tabindex="0" :aria-label="label(n)"
         @click="cycle(n.id)" @keydown.enter.prevent="cycle(n.id)" @keydown.space.prevent="cycle(n.id)">
        <circle :cx="n.x" :cy="n.y" :r="R" />
        <image v-if="state[n.id]" :href="markById[state[n.id]].image" :x="n.x - R" :y="n.y - R" :width="R * 2" :height="R * 2" />
      </g>
    </svg>
    <div class="bar">
      <span class="hint">Tippe einen Knoten mehrfach an, um die Markierung zu wechseln.</span>
      <button type="button" class="reset" @click="init">Zurücksetzen</button>
    </div>
  </div>
</template>

<style scoped>
.virus { display: grid; gap: 8px; }
.legend { display: flex; flex-wrap: wrap; gap: 6px 18px; list-style: none; padding: 0; margin: 0; color: var(--ink); }
.legend li { display: flex; align-items: center; gap: 6px; }
svg { width: 100%; max-width: 640px; height: auto; background: var(--surface); border: 1px solid var(--line); border-radius: 12px; }
.edge { stroke: var(--muted); stroke-width: 6; }
.node { cursor: pointer; }
.node circle { fill: var(--sunk); stroke: var(--ink); stroke-width: 4; }
.node:hover circle { stroke: var(--primary); }
.node:focus-visible { outline: none; }
.node:focus-visible circle { stroke: var(--primary); stroke-width: 8; }
.bar { display: flex; justify-content: space-between; gap: 8px; align-items: center; flex-wrap: wrap; }
.hint { font-size: .85rem; color: var(--muted); }
.reset { border: 1px solid var(--line); background: var(--surface); color: var(--ink); border-radius: 999px; padding: 4px 12px; cursor: pointer; font: inherit; font-size: .85rem; }
</style>
