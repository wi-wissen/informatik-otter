<script setup lang="ts">
// A small canal network. Four sluices (A–D) send the water either left or right.
// The component computes which fields get water and emits them as "2,4,5,6".
import { computed, onMounted, ref } from 'vue';

const emit = defineEmits<{ answer: [value: string] }>();

type P = [number, number];
const pos: Record<string, P> = {
  S: [180, 14], B: [95, 56], C: [265, 56], A: [45, 110], JA: [30, 165], J: [150, 140],
  R: [300, 110], D: [240, 175], K: [330, 205],
  F1: [30, 255], F2: [90, 255], F3: [150, 255], F4: [210, 255], F5: [270, 255], F6: [330, 255],
};
// [from, to, sluice, side]: an edge with a sluice only carries water when the sluice points that way.
const edges: [string, string, string?, 'L' | 'R'?][] = [
  ['S', 'B'], ['S', 'C'],
  ['B', 'A', 'B', 'L'], ['B', 'J', 'B', 'R'],
  ['C', 'J', 'C', 'L'], ['C', 'R', 'C', 'R'],
  ['A', 'JA', 'A', 'L'], ['A', 'F2', 'A', 'R'],
  ['JA', 'F1'], ['JA', 'F2'],
  ['J', 'F2'], ['J', 'F3'], ['J', 'F4'],
  ['R', 'D'], ['R', 'K'], ['K', 'F6'], ['K', 'F5'],
  ['D', 'F4', 'D', 'L'], ['D', 'F5', 'D', 'R'],
];
const sluices = ['A', 'B', 'C', 'D'];
const dir = ref<Record<string, 'L' | 'R'>>({ A: 'L', B: 'L', C: 'R', D: 'R' });

const open = (e: (typeof edges)[number]) => !e[2] || dir.value[e[2]] === e[3];
const wet = computed(() => {
  const seen = new Set(['S']);
  let grew = true;
  while (grew) {
    grew = false;
    for (const e of edges) if (seen.has(e[0]) && open(e) && !seen.has(e[1])) { seen.add(e[1]); grew = true; }
  }
  return seen;
});
const fields = computed(() => [1, 2, 3, 4, 5, 6].filter((n) => wet.value.has('F' + n)));
const edgeWet = (e: (typeof edges)[number]) => wet.value.has(e[0]) && open(e);

function report() {
  emit('answer', fields.value.join(','));
}
function toggle(id: string) {
  dir.value = { ...dir.value, [id]: dir.value[id] === 'L' ? 'R' : 'L' };
  report();
}
onMounted(report);
</script>

<template>
  <div class="canal">
    <svg viewBox="0 0 360 285" class="svg" role="group" aria-label="Kanalsystem mit vier Schleusen">
      <g v-for="(e, i) in edges" :key="i">
        <line :x1="pos[e[0]][0]" :y1="pos[e[0]][1]" :x2="pos[e[1]][0]" :y2="pos[e[1]][1]"
          :class="['ch', { wet: edgeWet(e), off: e[2] && !open(e) }]" />
      </g>
      <g v-for="s in sluices" :key="s" class="sluice" tabindex="0" role="button"
        :aria-label="`Schleuse ${s}: Wasser fließt nach ${dir[s] === 'L' ? 'links' : 'rechts'}. Zum Umstellen drücken.`"
        @click="toggle(s)" @keydown.enter.prevent="toggle(s)" @keydown.space.prevent="toggle(s)">
        <circle :cx="pos[s][0]" :cy="pos[s][1]" r="15" />
        <text :x="pos[s][0]" :y="pos[s][1] - 3" text-anchor="middle" class="name">{{ s }}</text>
        <text :x="pos[s][0]" :y="pos[s][1] + 10" text-anchor="middle" class="arr">{{ dir[s] === 'L' ? '◀' : '▶' }}</text>
      </g>
      <g v-for="n in 6" :key="n" :class="['field', { wet: wet.has('F' + n) }]">
        <circle :cx="pos['F' + n][0]" :cy="pos['F' + n][1]" r="13" />
        <text :x="pos['F' + n][0]" :y="pos['F' + n][1]" text-anchor="middle" dominant-baseline="central">{{ n }}</text>
      </g>
    </svg>
    <p class="hint">Tippe auf eine Schleuse, um die Richtung zu wechseln. Bewässert:
      <strong>{{ fields.length ? fields.join(', ') : 'kein Feld' }}</strong></p>
  </div>
</template>

<style scoped>
.canal { display: grid; gap: 6px; }
.svg { width: 100%; max-width: 440px; margin: 0 auto; display: block; }
.ch { stroke: var(--line); stroke-width: 7; stroke-linecap: round; }
.ch.off { stroke-dasharray: 2 8; }
.ch.wet { stroke: var(--primary); }
.sluice { cursor: pointer; outline: none; }
.sluice circle { fill: var(--surface); stroke: var(--ink); stroke-width: 2; }
.sluice:hover circle, .sluice:focus-visible circle { stroke: var(--primary); stroke-width: 4; }
.sluice text { fill: var(--ink); pointer-events: none; }
.name { font: 700 12px var(--font-body); }
.arr { font: 700 11px var(--font-body); }
.field circle { fill: var(--surface); stroke: var(--ink); stroke-width: 2; }
.field.wet circle { fill: var(--primary); }
.field text { font: 700 14px var(--font-body); fill: var(--ink); }
.field.wet text { fill: var(--surface); }
.hint { margin: 0; font-size: .85rem; color: var(--muted); }
</style>
