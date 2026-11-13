<script setup lang="ts">
// Erdbeerklau: put a new thing in place of the strawberry and remove exactly one branch,
// so that no branch lies between two equal things.
import { computed, onMounted, ref } from 'vue';

type Piece = { id: string; label: string; image: string };
type Edge = { id: string; from: string; to: string; x1: number; y1: number; x2: number; y2: number };
const props = defineProps<{
  background: string; width: number; height: number;
  fixed: Record<string, string>;       // spot id -> piece id (everything except the strawberry's spot)
  gap: { id: string; x: number; y: number; w: number; h: number; label: string };
  pieces: Piece[];
  edges: Edge[];
  labels: Record<string, string>;      // spot id -> German name for screen readers
}>();
const emit = defineEmits<{ answer: [value: unknown] }>();

const placed = ref<string | null>(null);
const removed = ref<string[]>([]);
const dragging = ref(false);
const byId = Object.fromEntries(props.pieces.map((p) => [p.id, p]));

function thing(spot: string): string | null { return spot === props.gap.id ? placed.value : props.fixed[spot] ?? null; }
const clashes = computed(() => props.edges.filter((e) => {
  const a = thing(e.from), b = thing(e.to);
  return a !== null && a === b;
}).map((e) => e.id));
const valid = computed(() => placed.value !== null && removed.value.length === 1
  && clashes.value.every((id) => removed.value.includes(id)));

function report() { emit('answer', valid.value ? 'ok' : placed.value === null && removed.value.length === 0 ? null : 'offen'); }
onMounted(report);

function place(id: string | null) { placed.value = id; report(); }
function toggle(id: string) {
  removed.value = removed.value.includes(id) ? removed.value.filter((x) => x !== id) : [...removed.value, id];
  report();
}
function reset() { placed.value = null; removed.value = []; report(); }
function dragStart(e: DragEvent, id: string) { e.dataTransfer?.setData('text/plain', id); dragging.value = true; }
function drop(e: DragEvent) {
  e.preventDefault(); dragging.value = false;
  const id = e.dataTransfer?.getData('text/plain');
  if (id && byId[id]) place(id);
}
const pct = (v: number, of: number) => `${(v / of) * 100}%`;
const edgeName = (e: Edge) => `Ast zwischen ${props.labels[e.from]} und ${props.labels[e.to]}`;
</script>

<template>
  <div class="art">
    <div class="board" :style="{ aspectRatio: `${width} / ${height}` }">
      <img :src="background" alt="" draggable="false" />
      <svg :viewBox="`0 0 ${width} ${height}`" aria-label="Äste des Kunstwerks">
        <g v-for="e in edges" :key="e.id" role="button" tabindex="0" class="edge" :class="{ gone: removed.includes(e.id) }"
           :aria-label="edgeName(e)" :aria-pressed="removed.includes(e.id)"
           @click="toggle(e.id)" @keydown.enter.prevent="toggle(e.id)" @keydown.space.prevent="toggle(e.id)">
          <line class="mask" :x1="e.x1" :y1="e.y1" :x2="e.x2" :y2="e.y2" />
          <line class="mark" :x1="e.x1" :y1="e.y1" :x2="e.x2" :y2="e.y2" />
          <line class="hit" :x1="e.x1" :y1="e.y1" :x2="e.x2" :y2="e.y2" />
        </g>
      </svg>
      <div class="gap" :class="{ over: dragging }" role="button" tabindex="0" :aria-label="gap.label + (placed ? `: ${byId[placed].label}` : ': leer')"
           :style="{ left: pct(gap.x, width), top: pct(gap.y, height), width: pct(gap.w, width), height: pct(gap.h, height) }"
           @dragover.prevent @drop="drop" @click="placed && place(null)" @keydown.enter.prevent="placed && place(null)">
        <img v-if="placed" :src="byId[placed].image" :alt="byId[placed].label" draggable="false" />
        <span v-else>?</span>
      </div>
    </div>

    <div class="palette" role="group" aria-label="Sachen zum Hinlegen">
      <span class="lead">Lege an die Stelle der Erdbeere:</span>
      <button v-for="p in pieces" :key="p.id" type="button" class="piece" :class="{ on: placed === p.id }" :aria-pressed="placed === p.id"
              draggable="true" @dragstart="dragStart($event, p.id)" @dragend="dragging = false" @click="place(placed === p.id ? null : p.id)">
        <img :src="p.image" alt="" draggable="false" /> {{ p.label }}
      </button>
      <button type="button" class="reset" @click="reset">Von vorn beginnen</button>
    </div>
    <p class="hint">Wähle eine Sache (oder ziehe sie auf das Fragezeichen). Tippe einen Ast an, um ihn zu entfernen; tippe ihn noch einmal an, um ihn zurückzulegen.</p>
    <p class="status" role="status">Entfernte Äste: <strong>{{ removed.length }}</strong></p>
  </div>
</template>

<style scoped>
.art { display: grid; gap: 10px; }
.board { position: relative; width: 100%; max-width: 640px; margin-inline: auto; background: #fff; border-radius: 10px; overflow: hidden; }
.board > img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: contain; pointer-events: none; }
svg { position: absolute; inset: 0; width: 100%; height: 100%; }
.edge { cursor: pointer; outline: none; }
.hit { stroke: transparent; stroke-width: 34; stroke-linecap: round; pointer-events: stroke; }
.mask, .mark { stroke-linecap: round; opacity: 0; pointer-events: none; }
.mask { stroke: #fff; stroke-width: 22; }
.mark { stroke: var(--bad); stroke-width: 5; stroke-dasharray: 12 10; }
.edge:hover .mark, .edge:focus-visible .mark { opacity: .55; }
.edge.gone .mask { opacity: .88; }
.edge.gone .mark { opacity: 1; }
.edge:focus-visible .hit { stroke: var(--sun); stroke-opacity: .5; }
.gap { position: absolute; box-sizing: border-box; display: grid; place-items: center; border: 3px dashed var(--ink); border-radius: 10px; background: color-mix(in srgb, #fff 80%, transparent); cursor: pointer; font: 700 2rem var(--font-body); color: var(--ink); }
.gap.over { border-color: var(--sun); }
.gap:focus-visible { outline: 3px solid var(--sun); }
.gap img { width: 100%; height: 100%; object-fit: contain; }
.palette { display: flex; flex-wrap: wrap; gap: 8px; align-items: center; }
.lead { font-weight: 700; }
.piece { display: inline-flex; align-items: center; gap: 6px; padding: 4px 12px 4px 6px; border: 2px solid var(--line); border-radius: 12px; background: var(--surface); color: var(--ink); font: inherit; cursor: grab; }
.piece img { height: 38px; width: auto; }
.piece.on { border-color: var(--primary); background: var(--primary-soft); }
.reset { margin-left: auto; border: 1px solid var(--line); background: var(--surface); color: var(--ink); border-radius: 999px; padding: 4px 12px; cursor: pointer; font: inherit; font-size: .85rem; }
.hint { margin: 0; font-size: .85rem; color: var(--muted); }
.status { margin: 0; }
</style>
