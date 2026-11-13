<script setup lang="ts">
// A triangle divided into 64 small triangles. The first step (big black triangle) is given;
// the student colours the small triangles that are black after three steps by clicking them.
import { computed, onMounted, ref } from 'vue';

const emit = defineEmits<{ answer: [value: string] }>();
const N = 8, S = 50, RH = 43.3;
type Tri = { id: string; pts: string; cx: number; cy: number; black: boolean; given: boolean };
const xy = (r: number, c: number): [number, number] => [200 + (c - r / 2) * S, r * RH];
const binom = (n: number, k: number): number => (k === 0 || k === n ? 1 : binom(n - 1, k - 1) + binom(n - 1, k));
function inside(p: number[], t: number[][]) {
  const [[x1, y1], [x2, y2], [x3, y3]] = t; const [x, y] = p;
  const d = (y2 - y3) * (x1 - x3) + (x3 - x2) * (y1 - y3);
  const a = ((y2 - y3) * (x - x3) + (x3 - x2) * (y - y3)) / d;
  const b = ((y3 - y1) * (x - x3) + (x1 - x3) * (y - y3)) / d;
  return a > 0 && b > 0 && 1 - a - b > 0;
}
const big = [xy(4, 0), xy(4, 4), xy(8, 4)];
const tris: Tri[] = [];
function add(id: string, v: number[][], black: boolean) {
  const c = [(v[0][0] + v[1][0] + v[2][0]) / 3, (v[0][1] + v[1][1] + v[2][1]) / 3];
  tris.push({ id, pts: v.map((p) => p.join(',')).join(' '), cx: c[0], cy: c[1], black, given: black && inside(c, big) });
}
for (let r = 0; r < N; r++) {
  for (let c = 0; c <= r; c++) add(`u${r}-${c}`, [xy(r, c), xy(r + 1, c), xy(r + 1, c + 1)], binom(r, c) % 2 === 0);
  for (let c = 0; c < r; c++) add(`d${r}-${c}`, [xy(r, c), xy(r, c + 1), xy(r + 1, c + 1)], true);
}
const on = ref<Set<string>>(new Set(tris.filter((t) => t.given).map((t) => t.id)));
function verdict() {
  const ok = tris.every((t) => on.value.has(t.id) === t.black);
  emit('answer', ok ? 'ok' : 'noch nicht');
}
onMounted(() => emit('answer', ''));
function toggle(t: Tri) {
  if (t.given) return;
  const s = new Set(on.value);
  if (s.has(t.id)) s.delete(t.id); else s.add(t.id);
  on.value = s;
  verdict();
}
const count = computed(() => on.value.size);
</script>

<template>
  <div class="sier">
    <svg viewBox="-2 -2 404 351" role="group" aria-label="Dreieck aus 64 kleinen Dreiecken">
      <polygon v-for="t in tris" :key="t.id" :points="t.pts" class="tri" :class="{ black: on.has(t.id), given: t.given }"
               :tabindex="t.given ? -1 : 0" role="button" :aria-pressed="on.has(t.id)" :aria-label="`Teildreieck ${t.id}`"
               @click="toggle(t)" @keydown.enter.prevent="toggle(t)" @keydown.space.prevent="toggle(t)" />
    </svg>
    <p class="hint">Klicke auf ein Teildreieck, um es schwarz zu färben oder wieder weiß zu machen. Gefärbt: {{ count }}.</p>
  </div>
</template>

<style scoped>
.sier { display: grid; gap: 8px; justify-items: center; }
svg { width: 100%; max-width: 460px; height: auto; }
.tri { fill: #fff; stroke: #222; stroke-width: 1.2; cursor: pointer; }
.tri:hover:not(.given) { fill: #cfe9ef; }
.tri.black { fill: #111; }
.tri.given { cursor: default; }
.tri:focus-visible { outline: 3px solid var(--primary); }
.hint { font-size: .85rem; color: var(--muted); justify-self: start; }
</style>
