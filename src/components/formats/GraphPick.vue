<script setup lang="ts">
import { computed, ref } from 'vue';

type Node = { id: string; x: number; y: number; label?: string; image?: string };
type Edge = { id?: string; from: string; to: string; label?: string };
const props = defineProps<{
  width?: number; height?: number; background?: string; nodeImage?: string; nodeRadius?: number;
  directed?: boolean; hideNodes?: boolean; pick: 'nodes' | 'edges' | 'path'; nodes: Node[]; edges?: Edge[];
}>();
const emit = defineEmits<{ answer: [value: string[]] }>();

const W = props.width ?? 400;
const H = props.height ?? 300;
const R = props.nodeRadius ?? 16;
const edges = computed(() => (props.edges ?? []).map((e) => ({ ...e, id: e.id ?? `${e.from}-${e.to}` })));
const byId = computed(() => Object.fromEntries(props.nodes.map((n) => [n.id, n])));
const chosen = ref<string[]>([]);

const adjacent = (a: string, b: string) =>
  edges.value.some((e) => (e.from === a && e.to === b) || (!props.directed && e.from === b && e.to === a));

function send() {
  emit('answer', props.pick === 'path' ? [...chosen.value] : [...chosen.value].sort());
}
function clickNode(id: string) {
  if (props.pick === 'nodes') {
    chosen.value = chosen.value.includes(id) ? chosen.value.filter((x) => x !== id) : [...chosen.value, id];
  } else if (props.pick === 'path') {
    const last = chosen.value[chosen.value.length - 1];
    if (last === id) chosen.value = chosen.value.slice(0, -1);
    else if (!last || edges.value.length === 0 || adjacent(last, id)) chosen.value = [...chosen.value, id];
    else return;
  } else return;
  send();
}
function clickEdge(id: string) {
  if (props.pick !== 'edges') return;
  chosen.value = chosen.value.includes(id) ? chosen.value.filter((x) => x !== id) : [...chosen.value, id];
  send();
}
function reset() { chosen.value = []; send(); }

const pathEdges = computed(() => {
  const s = new Set<string>();
  for (let i = 1; i < chosen.value.length; i++) s.add(`${chosen.value[i - 1]}|${chosen.value[i]}`);
  return s;
});
const edgeOn = (e: { id: string; from: string; to: string }) =>
  props.pick === 'edges' ? chosen.value.includes(e.id)
    : props.pick === 'path' ? pathEdges.value.has(`${e.from}|${e.to}`) || (!props.directed && pathEdges.value.has(`${e.to}|${e.from}`))
    : false;
const mid = (e: Edge) => { const a = byId.value[e.from], b = byId.value[e.to]; return { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 }; };
const hint = { nodes: 'Tippe die passenden Punkte an.', edges: 'Tippe die passenden Verbindungen an.', path: 'Tippe die Punkte in der richtigen Reihenfolge an.' };
</script>

<template>
  <div class="graph">
    <svg :class="{ 'has-bg': !!background }" :viewBox="`0 0 ${W} ${H}`" role="group" :aria-label="hint[pick]">
      <defs>
        <marker id="arrow" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0 0L10 5L0 10z" fill="currentColor" />
        </marker>
      </defs>
      <!-- visible edges first, so a background picture with transparency can sit on top of them -->
      <line v-for="e in edges" :key="`v-${e.id}`" class="vis" :class="{ on: edgeOn(e) }"
            :x1="byId[e.from].x" :y1="byId[e.from].y" :x2="byId[e.to].x" :y2="byId[e.to].y"
            :marker-end="directed ? 'url(#arrow)' : undefined" />
      <image v-if="background" :href="background" x="0" y="0" :width="W" :height="H" preserveAspectRatio="xMidYMid meet" />
      <!-- with a background picture: repeat chosen edges on top, semi-transparent, so they stay visible over opaque drawings -->
      <template v-if="background">
        <line v-for="e in edges.filter(edgeOn)" :key="`o-${e.id}`" class="overlay"
              :x1="byId[e.from].x" :y1="byId[e.from].y" :x2="byId[e.to].x" :y2="byId[e.to].y" />
      </template>
      <g v-for="e in edges" :key="e.id" class="edge" :class="{ on: edgeOn(e), pickable: pick === 'edges' }"
         :tabindex="pick === 'edges' ? 0 : -1" :role="pick === 'edges' ? 'button' : undefined" :aria-pressed="pick === 'edges' ? edgeOn(e) : undefined"
         :aria-label="`Verbindung ${byId[e.from].label ?? e.from} – ${byId[e.to].label ?? e.to}`"
         @click="clickEdge(e.id)" @keydown.enter.prevent="clickEdge(e.id)" @keydown.space.prevent="clickEdge(e.id)">
        <line :x1="byId[e.from].x" :y1="byId[e.from].y" :x2="byId[e.to].x" :y2="byId[e.to].y" class="hit" />
        <text v-if="e.label" :x="mid(e).x" :y="mid(e).y - 6" class="elabel">{{ e.label }}</text>
      </g>
      <g v-for="n in (hideNodes ? [] : nodes)" :key="n.id" class="node" :class="{ on: chosen.includes(n.id), pickable: pick !== 'edges' }"
         :tabindex="pick !== 'edges' ? 0 : -1" role="button" :aria-pressed="chosen.includes(n.id)" :aria-label="n.label ?? n.id"
         @click="clickNode(n.id)" @keydown.enter.prevent="clickNode(n.id)" @keydown.space.prevent="clickNode(n.id)">
        <image v-if="n.image || nodeImage" :href="n.image ?? nodeImage" :x="n.x - R * 1.4" :y="n.y - R * 1.4" :width="R * 2.8" :height="R * 2.8" />
        <circle v-else :cx="n.x" :cy="n.y" :r="R" />
        <circle v-if="n.image || nodeImage" :cx="n.x" :cy="n.y" :r="R * 1.5" class="ring" />
        <text v-if="n.label" :x="n.x" :y="n.image || nodeImage ? n.y + R * 2.1 : n.y + 5" class="nlabel">{{ n.label }}</text>
        <text v-if="pick === 'path' && chosen.includes(n.id)" :x="n.x + R" :y="n.y - R" class="order">{{ chosen.indexOf(n.id) + 1 }}</text>
      </g>
    </svg>
    <div class="bar"><span class="hint">{{ hint[pick] }}</span><button type="button" class="reset" @click="reset">Zurücksetzen</button></div>
  </div>
</template>

<style scoped>
.graph { display: grid; gap: 6px; }
svg { width: 100%; max-width: 640px; height: auto; background: var(--surface); border: 1px solid var(--line); border-radius: 12px; color: var(--muted); }
.vis { stroke: var(--muted); stroke-width: 3; }
.vis.on { stroke: var(--primary); stroke-width: 6; }
.has-bg .vis { stroke: transparent; }
.has-bg .vis.on { stroke: var(--sun); stroke-width: 14; stroke-linecap: round; }
.overlay { stroke: var(--sun); stroke-width: 7; stroke-opacity: .55; stroke-linecap: round; pointer-events: none; }
.edge .hit { stroke: transparent; stroke-width: 18; }
.edge.pickable { cursor: pointer; }
.edge.pickable:hover .hit { stroke: var(--primary-soft); stroke-opacity: .5; }
.edge:focus-visible { outline: none; }
.edge:focus-visible .hit { stroke: var(--primary); stroke-opacity: .4; }
.elabel { font: 700 13px var(--font-body); fill: var(--ink); text-anchor: middle; paint-order: stroke; stroke: var(--surface); stroke-width: 4px; }
.node circle { fill: var(--surface); stroke: var(--ink); stroke-width: 2.5; }
.node .ring { fill: transparent; stroke: transparent; }
.node.pickable { cursor: pointer; }
.node.on circle { fill: var(--sun); }
.node.on .ring { stroke: var(--sun); stroke-width: 4; fill: transparent; }
.node:focus-visible { outline: none; }
.node:focus-visible circle { stroke: var(--primary); stroke-width: 4; }
.nlabel { font: 700 14px var(--font-body); fill: var(--ink); text-anchor: middle; pointer-events: none; }
.order { font: 700 13px var(--font-mono); fill: var(--primary); }
.bar { display: flex; justify-content: space-between; gap: 8px; align-items: center; flex-wrap: wrap; }
.hint { font-size: .85rem; color: var(--muted); }
.reset { border: 1px solid var(--line); background: var(--surface); color: var(--ink); border-radius: 999px; padding: 4px 12px; cursor: pointer; font: inherit; font-size: .85rem; }
</style>
