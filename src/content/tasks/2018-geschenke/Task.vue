<script setup lang="ts">
import { computed, ref } from 'vue';

type Kid = { id: string; name: string; max: number; x: number; y: number };
const props = defineProps<{ kids: Kid[]; pairs: [string, string][] }>();
const emit = defineEmits<{ answer: [value: string] }>();

// per pair: 0 = no arrow yet, 1 = first gives to second, -1 = second gives to first
const dir = ref<number[]>(props.pairs.map(() => 0));
const kid = Object.fromEntries(props.kids.map((k) => [k.id, k]));
const RX = 44, RY = 19;

const given = computed(() => {
  const n: Record<string, number> = Object.fromEntries(props.kids.map((k) => [k.id, 0]));
  props.pairs.forEach(([a, b], i) => {
    if (dir.value[i] === 1) n[a]++;
    else if (dir.value[i] === -1) n[b]++;
  });
  return n;
});
const box = computed(() => {
  const xs = props.kids.map((k) => k.x), ys = props.kids.map((k) => k.y);
  const x0 = Math.min(...xs) - RX - 6, y0 = Math.min(...ys) - RY - 6;
  return { x0, y0, w: Math.max(...xs) + RX + 6 - x0, h: Math.max(...ys) + RY + 6 - y0 };
});

// Line from one ellipse border to the other, so the arrow head stays visible.
function line(i: number) {
  const [a, b] = props.pairs[i];
  const [from, to] = dir.value[i] === -1 ? [kid[b], kid[a]] : [kid[a], kid[b]];
  const dx = to.x - from.x, dy = to.y - from.y;
  const edge = (k: number) => 1 / Math.sqrt((dx / RX) ** 2 + (dy / RY) ** 2) * k;
  const t0 = edge(1), t1 = 1 - edge(1) - 0.0;
  return { x1: from.x + dx * t0, y1: from.y + dy * t0, x2: from.x + dx * t1, y2: from.y + dy * t1 };
}
function cycle(i: number) {
  dir.value = dir.value.map((d, k) => (k === i ? (d === 0 ? 1 : d * -1) : d));
  emit('answer', verdict());
}
function reset() {
  dir.value = props.pairs.map(() => 0);
  emit('answer', '');
}
// "ok" = every pair has an arrow and nobody gives more presents than allowed.
function verdict() {
  if (dir.value.some((d) => d === 0)) return 'unvollständig';
  return props.kids.every((k) => given.value[k.id] <= k.max) ? 'ok' : 'zu viele Geschenke';
}
const label = (i: number) => {
  const [a, b] = props.pairs[i];
  const d = dir.value[i];
  return d === 0 ? `${kid[a].name} und ${kid[b].name}: noch keine Schenkrichtung`
    : d === 1 ? `${kid[a].name} besorgt ein Geschenk für ${kid[b].name}` : `${kid[b].name} besorgt ein Geschenk für ${kid[a].name}`;
};
</script>

<template>
  <div class="gifts">
    <svg :viewBox="`${box.x0} ${box.y0} ${box.w} ${box.h}`" class="svg" role="group" aria-label="Freundschaften der Kinder">
      <defs>
        <marker id="gift-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M0 0L10 5L0 10z" fill="currentColor" />
        </marker>
      </defs>
      <g v-for="(p, i) in pairs" :key="i" class="pair" tabindex="0" role="button" :aria-label="label(i)"
        @click="cycle(i)" @keydown.enter.prevent="cycle(i)" @keydown.space.prevent="cycle(i)">
        <line v-bind="line(i)" :class="['vis', { set: dir[i] !== 0 }]" :marker-end="dir[i] !== 0 ? 'url(#gift-arrow)' : undefined" />
        <line v-bind="line(i)" class="hit" />
      </g>
      <g v-for="k in kids" :key="k.id" class="kid">
        <ellipse :cx="k.x" :cy="k.y" :rx="RX" :ry="RY" :class="{ over: given[k.id] > k.max }" />
        <text :x="k.x" :y="k.y" text-anchor="middle" dominant-baseline="central">{{ k.name }}: {{ k.max }}</text>
      </g>
    </svg>
    <div class="bar">
      <span class="hint">Tippe auf eine Linie, um einen Pfeil zu setzen. Tippe noch einmal, um die Richtung zu wechseln.</span>
      <button type="button" class="reset" @click="reset">Zurücksetzen</button>
    </div>
    <ul class="counts">
      <li v-for="k in kids" :key="k.id" :class="{ over: given[k.id] > k.max }">{{ k.name }} besorgt {{ given[k.id] }} von {{ k.max }}</li>
    </ul>
  </div>
</template>

<style scoped>
.gifts { display: grid; gap: 8px; }
.svg { width: 100%; max-width: 460px; margin: 0 auto; display: block; }
.pair { cursor: pointer; outline: none; color: var(--primary); }
.vis { stroke: var(--good); stroke-width: 3; }
.vis.set { stroke: var(--primary); stroke-width: 3.5; }
.hit { stroke: transparent; stroke-width: 22; }
.pair:hover .vis, .pair:focus-visible .vis { stroke: var(--sun); stroke-width: 6; }
.kid ellipse { fill: var(--sunk); stroke: var(--primary); stroke-width: 2; }
.kid ellipse.over { stroke: var(--bad); fill: var(--bad-soft); }
.kid text { font: 600 16px var(--font-body); fill: var(--ink); pointer-events: none; }
.bar { display: flex; justify-content: space-between; gap: 8px; flex-wrap: wrap; align-items: center; }
.hint { font-size: .85rem; color: var(--muted); }
.reset { border: 1px solid var(--line); background: var(--surface); color: var(--ink); border-radius: 999px; padding: 4px 12px; cursor: pointer; font: inherit; font-size: .85rem; }
.counts { display: flex; flex-wrap: wrap; gap: 4px 14px; margin: 0; padding: 0; list-style: none; font-size: .85rem; color: var(--muted); }
.counts .over { color: var(--bad); font-weight: 700; }
</style>
