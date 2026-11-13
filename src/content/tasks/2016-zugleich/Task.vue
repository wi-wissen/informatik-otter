<script setup lang="ts">
// Three robots move at the same time: every command moves all of them one field. The answer is "ok" as soon as the
// robots end on one ball, one ring and one cone. Moves out of the board are ignored.
import { computed, onMounted, ref } from 'vue';

const emit = defineEmits<{ answer: [value: string] }>();

const N = 6;
type Kind = 'ball' | 'ring' | 'cone';
const things: Record<string, Kind> = {
  '0,0': 'ball', '0,3': 'ball', '2,5': 'ball', '3,1': 'ball',
  '1,5': 'ring', '2,0': 'ring', '4,3': 'ring', '4,5': 'ring',
  '2,3': 'cone', '3,5': 'cone', '5,1': 'cone', '5,3': 'cone',
};
const starts: [number, number][] = [[2, 2], [4, 2], [5, 0]];
const moves: Record<string, [number, number]> = { N: [-1, 0], O: [0, 1], S: [1, 0], W: [0, -1] };
const names: Record<string, string> = { N: 'Norden', O: 'Osten', S: 'Süden', W: 'Westen' };
const arrows: Record<string, string> = { N: '↑', O: '→', S: '↓', W: '←' };
const kindLabel: Record<Kind, string> = { ball: 'Ball', ring: 'Ring', cone: 'Kegel' };

const cmds = ref<string[]>([]);

const robots = computed(() => starts.map(([r0, c0]) => {
  let r = r0, c = c0;
  for (const m of cmds.value) {
    const [dr, dc] = moves[m];
    const nr = r + dr, nc = c + dc;
    if (nr >= 0 && nr < N && nc >= 0 && nc < N) { r = nr; c = nc; }
  }
  return { r, c, takes: things[`${r},${c}`] as Kind | undefined };
}));
const taken = computed(() => robots.value.map((x) => x.takes).filter(Boolean) as Kind[]);
const ok = computed(() => taken.value.length === 3 && new Set(taken.value).size === 3);

function report() { emit('answer', cmds.value.length === 0 ? '' : ok.value ? 'ok' : cmds.value.join(' ')); }
onMounted(report);
function add(m: string) { cmds.value = [...cmds.value, m]; report(); }
function undo() { cmds.value = cmds.value.slice(0, -1); report(); }
function clear() { cmds.value = []; report(); }

const cells = Array.from({ length: N * N }, (_, i) => ({ r: Math.floor(i / N), c: i % N }));
const robotAt = (r: number, c: number) => robots.value.map((x, i) => ({ ...x, i })).filter((x) => x.r === r && x.c === c);
const summary = computed(() => taken.value.length ? `Die Roboter nehmen: ${taken.value.map((k) => kindLabel[k]).join(', ')}.` : 'Die Roboter nehmen noch nichts.');
</script>

<template>
  <div class="zug">
    <div class="board" role="img" :aria-label="`Feld mit sechs mal sechs Feldern, drei Robotern, Bällen, Ringen und Kegeln. ${summary}`">
      <div v-for="cell in cells" :key="`${cell.r}-${cell.c}`" class="cell" :class="{ hit: robotAt(cell.r, cell.c).some((x) => x.takes) }">
        <svg v-if="things[`${cell.r},${cell.c}`]" viewBox="0 0 40 40" class="thing" aria-hidden="true">
          <circle v-if="things[`${cell.r},${cell.c}`] === 'ball'" cx="20" cy="20" r="14" class="ball" />
          <circle v-else-if="things[`${cell.r},${cell.c}`] === 'ring'" cx="20" cy="20" r="11" class="ring" />
          <path v-else d="M20 5 L33 33 L7 33 Z" class="cone" />
        </svg>
        <span v-for="x in robotAt(cell.r, cell.c)" :key="x.i" class="robot" :style="{ transform: `translate(${(x.i - 1) * 6}px, ${(x.i - 1) * 4}px)` }">
          {{ x.i + 1 }}
        </span>
      </div>
    </div>

    <div class="legend"><span><svg viewBox="0 0 40 40" aria-hidden="true"><circle cx="20" cy="20" r="14" class="ball" /></svg> Ball</span>
      <span><svg viewBox="0 0 40 40" aria-hidden="true"><circle cx="20" cy="20" r="11" class="ring" /></svg> Ring</span>
      <span><svg viewBox="0 0 40 40" aria-hidden="true"><path d="M20 5 L33 33 L7 33 Z" class="cone" /></svg> Kegel</span>
      <span><b class="robot static">1</b> Roboter (alle drei bewegen sich gleichzeitig)</span></div>

    <div class="pad" role="group" aria-label="Richtungsbefehle">
      <button v-for="m in ['N', 'O', 'S', 'W']" :key="m" type="button" class="dir" :aria-label="`Befehl ${m}, ein Feld nach ${names[m]}`" @click="add(m)">
        <span aria-hidden="true">{{ arrows[m] }}</span> {{ m }}
      </button>
    </div>
    <p class="prog" aria-live="polite"><b>Befehle:</b> {{ cmds.length ? cmds.join(', ') : 'noch keine' }}</p>
    <p class="sum" :class="{ good: ok }">{{ summary }}</p>
    <div class="bar"><button type="button" class="small" :disabled="!cmds.length" @click="undo">Letzten Befehl löschen</button>
      <button type="button" class="small" :disabled="!cmds.length" @click="clear">Alle löschen</button></div>
  </div>
</template>

<style scoped>
.zug { display: grid; gap: 12px; }
.board { display: grid; grid-template-columns: repeat(6, 1fr); width: min(100%, 360px); border: 2px solid var(--ink); background: var(--surface); }
.cell { position: relative; aspect-ratio: 1; border: 1px solid var(--ink); display: grid; place-items: center; }
.cell.hit { background: var(--sun-soft); }
.thing { width: 78%; height: 78%; }
.ball { fill: var(--primary); stroke: var(--ink); stroke-width: 1.5; }
.ring { fill: none; stroke: var(--primary); stroke-width: 7; }
.cone { fill: var(--sun); stroke: var(--ink); stroke-width: 1.5; stroke-linejoin: round; }
.robot { position: absolute; inset: 22% auto auto 22%; width: 56%; height: 56%; display: grid; place-items: center; border-radius: 8px; background: var(--ink); color: var(--surface); font: 700 .95rem var(--font-mono); box-shadow: 0 0 0 2px var(--surface); }
.robot.static { position: static; display: inline-grid; width: 22px; height: 22px; font-size: .8rem; box-shadow: none; }
.legend { display: flex; flex-wrap: wrap; gap: 6px 16px; align-items: center; font-size: .9rem; color: var(--muted); }
.legend span { display: inline-flex; gap: 6px; align-items: center; }
.legend svg { width: 22px; height: 22px; }
.pad { display: flex; flex-wrap: wrap; gap: 8px; }
.dir { min-width: 64px; padding: 10px 14px; border: 2px solid var(--line); border-radius: 12px; background: var(--surface); color: var(--ink); font: 700 1.1rem var(--font-mono); cursor: pointer; }
.dir:hover { border-color: var(--primary); }
.dir:focus-visible, .small:focus-visible { outline: 3px solid var(--primary); outline-offset: 2px; }
.prog { margin: 0; font-family: var(--font-mono); }
.sum { margin: 0; color: var(--muted); }
.sum.good { color: var(--good); font-weight: 700; }
.bar { display: flex; gap: 8px; flex-wrap: wrap; }
.small { border: 1px solid var(--line); background: var(--surface); color: var(--ink); border-radius: 999px; padding: 4px 12px; cursor: pointer; font: inherit; font-size: .85rem; }
.small:disabled { opacity: .5; cursor: default; }
</style>
