<script setup lang="ts">
// A playable board for "Piratenjagd" (seven fields in a ring, two police officers, one pirate) plus the multiple-choice
// question of the booklet. The student plays the police; the pirate answers with perfect play. The answer is the chosen option.
import { computed, ref } from 'vue';
import Choice from '../../../components/formats/Choice.vue';

const emit = defineEmits<{ answer: [value: string | string[] | null] }>();
const options = [
  { id: 'a', label: 'Die Polizei kann in 2 Zügen gewinnen.' },
  { id: 'b', label: 'Die Polizei kann in 3 Zügen gewinnen.' },
  { id: 'c', label: 'Die Polizei kann in 5 Zügen gewinnen.' },
  { id: 'd', label: 'Die Polizei hat keine Chance zu gewinnen.' },
];

const N = 7;
const mod = (n: number) => (n + N) % N;
const key = (pol: number[], pir: number) => `${[...pol].sort().join(',')}|${pir}`;

// States from which the police can force a win: "police to move" and "pirate to move".
const polWin = new Set<string>();
const pirWin = new Set<string>();
const polMoves = (pol: number[], pir: number) => {
  const out: number[][] = [];
  pol.forEach((p, i) => [1, -1].forEach((d) => {
    const n = mod(p + d);
    if (!pol.includes(n) && n !== pir) out.push(pol.map((q, j) => (j === i ? n : q)));
  }));
  return out;
};
const pirDests = (pir: number) => [mod(pir + 2), mod(pir - 2)];
(function solve() {
  const all: [number[], number][] = [];
  for (let a = 0; a < N; a++) for (let b = a + 1; b < N; b++) for (let r = 0; r < N; r++) if (r !== a && r !== b) all.push([[a, b], r]);
  for (const [pol, pir] of all) if (pirDests(pir).every((d) => pol.includes(d))) pirWin.add(key(pol, pir));
  let changed = true;
  while (changed) {
    changed = false;
    for (const [pol, pir] of all) {
      if (!polWin.has(key(pol, pir)) && polMoves(pol, pir).some((n) => pirWin.has(key(n, pir)))) { polWin.add(key(pol, pir)); changed = true; }
      const free = pirDests(pir).filter((d) => !pol.includes(d));
      if (!pirWin.has(key(pol, pir)) && free.length && free.every((d) => polWin.has(key(pol, d)))) { pirWin.add(key(pol, pir)); changed = true; }
    }
  }
})();

const pol = ref<number[]>([2, 5]);
const pir = ref(0);
const moves = ref(0);
const selected = ref<number | null>(null);
const msg = ref('Du spielst die Polizei und bist am Zug. Wähle einen Polizisten und dann ein freies Nachbarfeld.');
const won = ref(false);

const pos = (k: number) => {
  const a = (-90 + (360 / N) * k) * (Math.PI / 180);
  return { x: 50 + 38 * Math.cos(a), y: 50 + 38 * Math.sin(a) };
};
const nodes = Array.from({ length: N }, (_, k) => k);
const canGo = computed(() => selected.value === null ? [] : [1, -1].map((d) => mod(pol.value[selected.value!] + d)).filter((n) => !pol.value.includes(n) && n !== pir.value));

function click(k: number) {
  if (won.value) return;
  const pi = pol.value.indexOf(k);
  if (pi >= 0) { selected.value = selected.value === pi ? null : pi; return; }
  if (selected.value === null || !canGo.value.includes(k)) return;
  const next = pol.value.map((q, j) => (j === selected.value ? k : q));
  pol.value = next; selected.value = null; moves.value++;
  const free = pirDests(pir.value).filter((d) => !next.includes(d));
  if (!free.length) { won.value = true; msg.value = `Der Pirat muss auf ein Feld mit einem Polizisten: Die Polizei hat nach ${moves.value} Zügen gewonnen.`; return; }
  const safe = free.filter((d) => !polWin.has(key(next, d)));
  const to = (safe.length ? safe : free)[0];
  msg.value = `Der Pirat springt zwei Felder weiter. Die Polizei ist wieder am Zug (Zug ${moves.value + 1}).`;
  pir.value = to;
}
function reset() {
  pol.value = [2, 5]; pir.value = 0; moves.value = 0; selected.value = null; won.value = false;
  msg.value = 'Du spielst die Polizei und bist am Zug. Wähle einen Polizisten und dann ein freies Nachbarfeld.';
}
const label = (k: number) => `Feld ${k + 1}${pir.value === k ? ', Pirat' : pol.value.includes(k) ? ', Polizist' : ', frei'}`;
</script>

<template>
  <div class="pj">
    <div class="board">
      <svg viewBox="0 0 100 100" class="ring" aria-hidden="true">
        <line v-for="k in nodes" :key="k" :x1="pos(k).x" :y1="pos(k).y" :x2="pos(mod(k + 1)).x" :y2="pos(mod(k + 1)).y" />
      </svg>
      <button v-for="k in nodes" :key="k" type="button" class="node" :aria-label="label(k)"
              :class="{ pirate: pir === k, police: pol.includes(k), sel: selected !== null && pol[selected] === k, go: canGo.includes(k) }"
              :style="{ left: `${pos(k).x}%`, top: `${pos(k).y}%` }" @click="click(k)">
        <span v-if="pir === k">Pirat</span><span v-else-if="pol.includes(k)">Polizei</span>
      </button>
    </div>
    <p class="msg" role="status">{{ msg }}</p>
    <div class="bar"><span class="cnt">Züge der Polizei: {{ moves }}</span><button type="button" class="reset" @click="reset">Neu beginnen</button></div>
    <p class="hint">Du kannst selbst Züge machen, um die Möglichkeiten zu probieren. Der Pirat macht keine Fehler.</p>
    <Choice :options="options" @answer="(v) => emit('answer', v)" />
  </div>
</template>

<style scoped>
.pj { display: grid; gap: 12px; }
.board { position: relative; width: min(100%, 320px); aspect-ratio: 1; margin: 0 auto 0 0; }
.ring { position: absolute; inset: 0; width: 100%; height: 100%; }
.ring line { stroke: var(--ink); stroke-width: 1.2; }
.node { position: absolute; width: 19%; aspect-ratio: 1; transform: translate(-50%, -50%); border-radius: 50%; border: 3px solid var(--ink); background: var(--sunk); color: var(--ink); font: 700 .7rem var(--font-body); cursor: pointer; padding: 0; display: grid; place-items: center; }
.node.pirate { background: var(--sun); color: var(--sun-ink); }
.node.police { background: var(--primary); color: var(--primary-ink); }
.node.sel { box-shadow: 0 0 0 4px var(--sun); }
.node.go { border-style: dashed; border-color: var(--primary); background: var(--primary-soft); }
.node:focus-visible { outline: 3px solid var(--sun); outline-offset: 2px; }
.msg { margin: 0; min-height: 3em; }
.bar { display: flex; gap: 12px; align-items: center; flex-wrap: wrap; }
.cnt { font-weight: 700; }
.reset { border: 1px solid var(--line); background: var(--surface); color: var(--ink); border-radius: 999px; padding: 4px 12px; cursor: pointer; font: inherit; font-size: .85rem; }
.hint { margin: 0; font-size: .85rem; color: var(--muted); }
</style>
