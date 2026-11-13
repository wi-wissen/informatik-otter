<script setup lang="ts">
import { computed, ref } from 'vue';

type Node = { id: string; x: number; y: number };
const props = defineProps<{
  nodes: Node[];
  root: string;
  fixed: [string, string][]; // bridges that are already drawn
}>();
const emit = defineEmits<{ answer: [value: string] }>();

const key = (a: string, b: string) => (a < b ? `${a}-${b}` : `${b}-${a}`);
const pos = Object.fromEntries(props.nodes.map((n) => [n.id, n]));
const fixedKeys = new Set(props.fixed.map(([a, b]) => key(a, b)));
const drawn = ref<string[]>([]); // keys of bridges drawn by the student
const picked = ref<string | null>(null);
const R = 10;

const all = computed(() => [...fixedKeys, ...drawn.value]);

function click(id: string) {
  if (picked.value === null) { picked.value = id; return; }
  if (picked.value !== id) {
    const k = key(picked.value, id);
    if (!fixedKeys.has(k)) {
      drawn.value = drawn.value.includes(k) ? drawn.value.filter((x) => x !== k) : [...drawn.value, k];
    }
  }
  picked.value = null;
  emit('answer', verdict());
}
function reset() { drawn.value = []; picked.value = null; emit('answer', ''); }

// "ok" = a tree rooted at the root, every node at most 2 bridges from the root, at most 2 bridges leading on from every castle.
function verdict(): string {
  const adj: Record<string, string[]> = Object.fromEntries(props.nodes.map((n) => [n.id, []]));
  for (const k of all.value) { const [a, b] = k.split('-'); adj[a].push(b); adj[b].push(a); }
  const depth: Record<string, number> = { [props.root]: 0 };
  const queue = [props.root];
  for (let i = 0; i < queue.length; i++) {
    for (const m of adj[queue[i]]) if (!(m in depth)) { depth[m] = depth[queue[i]] + 1; queue.push(m); }
  }
  if (queue.length < props.nodes.length) return 'nicht alle Burgen erreichbar';
  if (all.value.length !== props.nodes.length - 1) return 'zu viele Brücken';
  if (Object.values(depth).some((d) => d > 2)) return 'zu weit von Opas Burg';
  for (const n of props.nodes) {
    const kids = adj[n.id].length - (n.id === props.root ? 0 : 1);
    if (kids > 2) return 'zu viele Brücken von einer Burg';
  }
  return 'ok';
}
</script>

<template>
  <div class="bp">
    <svg viewBox="-14 -6 218 162" class="svg" role="group" aria-label="Burgen und Brücken">
      <line v-for="k in all" :key="k" :x1="pos[k.split('-')[0]].x" :y1="pos[k.split('-')[0]].y"
        :x2="pos[k.split('-')[1]].x" :y2="pos[k.split('-')[1]].y" :class="['edge', { fixed: fixedKeys.has(k) }]" />
      <g v-for="n in nodes" :key="n.id" class="node" tabindex="0" role="button"
        :aria-label="`Burg ${n.id === root ? 'von Opa' : n.id.toUpperCase()}${picked === n.id ? ', ausgewählt' : ''}`"
        @click="click(n.id)" @keydown.enter.prevent="click(n.id)" @keydown.space.prevent="click(n.id)">
        <circle :cx="n.x" :cy="n.y" :r="R + 4" class="hit" />
        <circle :cx="n.x" :cy="n.y" :r="R" :class="{ root: n.id === root, picked: picked === n.id }" />
      </g>
    </svg>
    <div class="bar">
      <span class="hint">Tippe nacheinander auf zwei Burgen, um eine Brücke zu bauen oder wieder abzureißen. Neue Brücken: {{ drawn.length }} von 5</span>
      <button type="button" class="reset" @click="reset">Zurücksetzen</button>
    </div>
  </div>
</template>

<style scoped>
.bp { display: grid; gap: 8px; }
.svg { width: 100%; max-width: 420px; margin: 0 auto; display: block; }
.edge { stroke: var(--ink); stroke-width: 3; stroke-linecap: round; }
.edge.fixed { stroke: var(--muted); }
.node { cursor: pointer; outline: none; }
.node .hit { fill: transparent; }
.node circle:not(.hit) { fill: var(--surface); stroke: var(--ink); stroke-width: 2.5; }
.node circle.root { fill: #e53a26; }
.node circle.picked, .node:focus-visible circle:not(.hit) { stroke: var(--primary); stroke-width: 5; }
.node:hover circle:not(.hit) { stroke: var(--primary); }
.bar { display: flex; justify-content: space-between; gap: 8px; flex-wrap: wrap; align-items: center; }
.hint { font-size: .85rem; color: var(--muted); }
.reset { border: 1px solid var(--line); background: var(--surface); color: var(--ink); border-radius: 999px; padding: 4px 12px; cursor: pointer; font: inherit; font-size: .85rem; }
</style>
