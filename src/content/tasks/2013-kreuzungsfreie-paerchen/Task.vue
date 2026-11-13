<script setup lang="ts">
// Circles on top, squares below. Draw a line from a circle to a square with the same letter (drag with the mouse,
// or click the circle and then the square). A line is refused when it breaks one of the two rules. Click a line to
// delete it. The answer is "ok" when the maximum number of pairs is drawn.
import { computed, onMounted, onBeforeUnmount, ref } from 'vue';

const props = defineProps<{ top: string; bottom: string; best: number }>();
const emit = defineEmits<{ answer: [value: string] }>();

const W = 520, H = 150;
type Node = { key: string; kind: 't' | 'b'; i: number; letter: string; x: number; y: number };
const nodes: Node[] = [
  ...[...props.top].map((l, i) => ({ key: `t${i}`, kind: 't' as const, i, letter: l, x: 30 + i * 57, y: 28 })),
  ...[...props.bottom].map((l, i) => ({ key: `b${i}`, kind: 'b' as const, i, letter: l, x: 60 + i * 57, y: 122 })),
];
const byKey = Object.fromEntries(nodes.map((n) => [n.key, n]));
const pairs = ref<{ t: number; b: number }[]>([]);
const selected = ref<string | null>(null);
const message = ref('');
const svg = ref<SVGSVGElement | null>(null);
const rubber = ref<{ from: string; x: number; y: number } | null>(null);
let start: { key: string; sx: number; sy: number; moved: boolean } | null = null;
let justDragged = false;

const usedT = computed(() => new Set(pairs.value.map((p) => p.t)));
const usedB = computed(() => new Set(pairs.value.map((p) => p.b)));

function report() {
  const n = pairs.value.length;
  emit('answer', n === 0 ? '' : n === props.best ? 'ok' : `${n}`);
}
onMounted(report);

function tryConnect(k1: string, k2: string) {
  const a = byKey[k1], b = byKey[k2];
  if (a.kind === b.kind) return false;
  const t = a.kind === 't' ? a : b, bo = a.kind === 'b' ? a : b;
  if (t.letter !== bo.letter) { message.value = 'Ein Kreis und ein Quadrat bilden nur mit dem gleichen Buchstaben ein Pärchen.'; return false; }
  if (usedT.value.has(t.i) || usedB.value.has(bo.i)) { message.value = 'Jeder Kreis und jedes Quadrat darf nur zu einem Pärchen gehören.'; return false; }
  if (pairs.value.some((p) => (p.t - t.i) * (p.b - bo.i) < 0)) { message.value = 'Die Linien dürfen nicht überkreuz liegen.'; return false; }
  pairs.value = [...pairs.value, { t: t.i, b: bo.i }];
  message.value = '';
  report();
  return true;
}
function removePair(p: { t: number; b: number }) {
  pairs.value = pairs.value.filter((q) => q !== p);
  message.value = '';
  report();
}
function clickNode(key: string) {
  if (justDragged) { justDragged = false; return; }
  const cur = selected.value;
  if (cur === null) { selected.value = key; message.value = ''; return; }
  if (cur === key) { selected.value = null; return; }
  if (byKey[cur].kind === byKey[key].kind) { selected.value = key; return; }
  tryConnect(cur, key);
  selected.value = null;
}
function svgPoint(e: PointerEvent) {
  const r = svg.value!.getBoundingClientRect();
  return { x: ((e.clientX - r.left) / r.width) * W, y: ((e.clientY - r.top) / r.height) * H };
}
function down(e: PointerEvent, key: string) {
  start = { key, sx: e.clientX, sy: e.clientY, moved: false };
  window.addEventListener('pointermove', move);
  window.addEventListener('pointerup', up);
}
function move(e: PointerEvent) {
  if (!start) return;
  if (!start.moved && Math.hypot(e.clientX - start.sx, e.clientY - start.sy) < 6) return;
  start.moved = true;
  const p = svgPoint(e);
  rubber.value = { from: start.key, x: p.x, y: p.y };
}
function up(e: PointerEvent) {
  window.removeEventListener('pointermove', move);
  window.removeEventListener('pointerup', up);
  const s = start; start = null; rubber.value = null;
  if (!s || !s.moved) return;
  justDragged = true;
  setTimeout(() => { justDragged = false; }, 0);
  const el = document.elementFromPoint(e.clientX, e.clientY)?.closest('[data-key]') as HTMLElement | null;
  selected.value = null;
  if (el && el.dataset.key !== s.key) tryConnect(s.key, el.dataset.key!);
}
onBeforeUnmount(() => { window.removeEventListener('pointermove', move); window.removeEventListener('pointerup', up); });
function clear() { pairs.value = []; selected.value = null; message.value = ''; report(); }
const line = (p: { t: number; b: number }) => ({ x1: byKey[`t${p.t}`].x, y1: byKey[`t${p.t}`].y + 16, x2: byKey[`b${p.b}`].x, y2: byKey[`b${p.b}`].y - 16 });
</script>

<template>
  <div class="pairs">
    <svg ref="svg" :viewBox="`0 0 ${W} ${H}`" class="board" role="group" aria-label="Kreise oben, Quadrate unten">
      <g v-for="(p, n) in pairs" :key="n" class="pair" role="button" tabindex="0"
         :aria-label="`Pärchen ${byKey['t' + p.t].letter} entfernen`"
         @click="removePair(p)" @keydown.enter.prevent="removePair(p)" @keydown.space.prevent="removePair(p)">
        <line v-bind="line(p)" class="hit" />
        <line v-bind="line(p)" class="ln" />
      </g>
      <line v-if="rubber" :x1="byKey[rubber.from].x" :y1="byKey[rubber.from].y + (byKey[rubber.from].kind === 't' ? 16 : -16)" :x2="rubber.x" :y2="rubber.y" class="ln ghost" />
      <g v-for="n in nodes" :key="n.key" :data-key="n.key" class="node" :class="[n.kind, { sel: selected === n.key, used: (n.kind === 't' ? usedT : usedB).has(n.i) }]"
         role="button" tabindex="0" :aria-label="`${n.kind === 't' ? 'Kreis' : 'Quadrat'} ${n.letter}, Position ${n.i + 1}`"
         @pointerdown.prevent="down($event, n.key)" @click="clickNode(n.key)"
         @keydown.enter.prevent="clickNode(n.key)" @keydown.space.prevent="clickNode(n.key)">
        <circle v-if="n.kind === 't'" :cx="n.x" :cy="n.y" r="16" />
        <rect v-else :x="n.x - 16" :y="n.y - 16" width="32" height="32" rx="2" />
        <text :x="n.x" :y="n.y + 6" text-anchor="middle">{{ n.letter }}</text>
      </g>
    </svg>
    <p class="msg" role="status">{{ message }}</p>
    <div class="bar">
      <span class="hint">{{ pairs.length }} Pärchen · Ziehe eine Linie von einem Kreis zu einem Quadrat (oder klicke beide nacheinander an). Klicke auf eine Linie, um sie zu löschen.</span>
      <button type="button" class="reset" @click="clear">Alle Linien löschen</button>
    </div>
  </div>
</template>

<style scoped>
.pairs { display: grid; gap: 8px; }
.board { width: 100%; max-width: 620px; touch-action: none; user-select: none; }
.node { cursor: pointer; outline: none; }
.node circle { fill: var(--sun); stroke: var(--ink); stroke-width: 2; }
.node rect { fill: var(--primary-soft); stroke: var(--ink); stroke-width: 2; }
.node text { font: 700 18px var(--font-body); fill: var(--ink); pointer-events: none; }
.node:hover circle, .node:hover rect { stroke: var(--primary); }
.node.sel circle, .node.sel rect { stroke: var(--primary); stroke-width: 4; }
.node:focus-visible circle, .node:focus-visible rect { stroke: var(--primary); stroke-width: 4; }
.node.used circle, .node.used rect { stroke-width: 3; }
.ln { stroke: var(--ink); stroke-width: 3; stroke-linecap: round; fill: none; }
.ghost { stroke: var(--primary); stroke-dasharray: 5 4; }
.hit { stroke: transparent; stroke-width: 16; }
.pair { cursor: pointer; outline: none; }
.pair:hover .ln, .pair:focus-visible .ln { stroke: var(--bad); }
.msg { min-height: 1.5em; margin: 0; color: var(--bad); font-size: .9rem; }
.bar { display: flex; justify-content: space-between; gap: 8px; align-items: center; flex-wrap: wrap; }
.hint { font-size: .85rem; color: var(--muted); }
.reset { border: 1px solid var(--line); background: var(--surface); color: var(--ink); border-radius: 999px; padding: 4px 12px; cursor: pointer; font: inherit; font-size: .85rem; }
</style>
