<script setup lang="ts">
// Go-Bots: build a command sequence by choosing alternately a Go-Bot and an arrow.
// A Go-Bot drives straight until it stands in front of an obstacle, the edge or another bot.
// The board shows the result of the commands chosen so far. Emits "ok" when the sequence has exactly `steps` arrows and Go-Bot 1 stops on the goal.
import { computed, onMounted, ref } from 'vue';

type Dir = 'up' | 'down' | 'left' | 'right';
type Bot = { id: string; n: number; row: number; col: number; color: string };
const props = defineProps<{
  rows: number; cols: number; steps: number;
  goal: { row: number; col: number };
  obstacles: [number, number][];
  bots: Bot[];
}>();
const emit = defineEmits<{ answer: [value: string] }>();

const delta: Record<Dir, [number, number]> = { up: [-1, 0], down: [1, 0], left: [0, -1], right: [0, 1] };
const arrows: { id: Dir; glyph: string; label: string }[] = [
  { id: 'up', glyph: '↑', label: 'hoch' }, { id: 'down', glyph: '↓', label: 'runter' },
  { id: 'left', glyph: '←', label: 'links' }, { id: 'right', glyph: '→', label: 'rechts' },
];
const glyph = Object.fromEntries(arrows.map((a) => [a.id, a.glyph]));
const blocked = new Set(props.obstacles.map(([r, c]) => `${r},${c}`));
const byId = Object.fromEntries(props.bots.map((b) => [b.id, b]));

// program = [bot, arrow, bot, arrow, ...]
const program = ref<string[]>([]);
const nextIsBot = computed(() => program.value.length % 2 === 0);
const full = computed(() => program.value.length >= props.steps * 2);

const pos = computed(() => {
  const p: Record<string, { row: number; col: number }> = Object.fromEntries(props.bots.map((b) => [b.id, { row: b.row, col: b.col }]));
  for (let i = 0; i + 1 < program.value.length; i += 2) {
    const id = program.value[i], d = delta[program.value[i + 1] as Dir];
    let { row, col } = p[id];
    for (;;) {
      const nr = row + d[0], nc = col + d[1];
      if (nr < 0 || nc < 0 || nr >= props.rows || nc >= props.cols || blocked.has(`${nr},${nc}`)) break;
      if (Object.entries(p).some(([k, q]) => k !== id && q.row === nr && q.col === nc)) break;
      row = nr; col = nc;
    }
    p[id] = { row, col };
  }
  return p;
});
const won = computed(() => {
  const b1 = pos.value[props.bots[0].id];
  return program.value.length === props.steps * 2 && b1.row === props.goal.row && b1.col === props.goal.col;
});

function report() { emit('answer', won.value ? 'ok' : program.value.length ? 'offen' : ''); }
onMounted(report);
function add(id: string) { if (!full.value) { program.value = [...program.value, id]; report(); } }
function undo() { program.value = program.value.slice(0, -1); report(); }
function clear() { program.value = []; report(); }

const cells = computed(() => {
  const out: { r: number; c: number; wall: boolean; goal: boolean; bot?: Bot }[] = [];
  for (let r = 0; r < props.rows; r++) for (let c = 0; c < props.cols; c++) {
    const bot = props.bots.find((b) => pos.value[b.id].row === r && pos.value[b.id].col === c);
    out.push({ r, c, wall: blocked.has(`${r},${c}`), goal: r === props.goal.row && c === props.goal.col, bot });
  }
  return out;
});
</script>

<template>
  <div class="gb">
    <div class="board" :style="{ gridTemplateColumns: `repeat(${cols}, 1fr)`, aspectRatio: `${cols} / ${rows}` }" role="img"
         :aria-label="`Spielbrett mit ${bots.length} Go-Bots, Hindernissen und dem Ziel. ${bots.map((b) => `Go-Bot ${b.n}: Zeile ${pos[b.id].row + 1}, Spalte ${pos[b.id].col + 1}`).join('; ')}; Ziel: Zeile ${goal.row + 1}, Spalte ${goal.col + 1}`">
      <div v-for="cell in cells" :key="`${cell.r}-${cell.c}`" class="cell" :class="{ wall: cell.wall }">
        <span v-if="cell.goal && !cell.bot" class="star">✶</span>
        <span v-if="cell.bot" class="bot" :style="{ background: cell.bot.color }">{{ cell.bot.n }}</span>
      </div>
    </div>

    <div class="palette" role="group" :aria-label="nextIsBot ? 'Wähle einen Go-Bot' : 'Wähle einen Pfeil'">
      <button v-for="b in bots" :key="b.id" type="button" class="p botbtn" :disabled="!nextIsBot || full"
              :aria-label="`Go-Bot ${b.n}`" :style="{ '--c': b.color }" @click="add(b.id)"><span class="dot">{{ b.n }}</span></button>
      <span class="sep" aria-hidden="true" />
      <button v-for="a in arrows" :key="a.id" type="button" class="p arrow" :disabled="nextIsBot || full"
              :aria-label="`Pfeil ${a.label}`" @click="add(a.id)">{{ a.glyph }}</button>
    </div>

    <ol class="program" aria-label="Deine Befehlsfolge">
      <li v-for="i in steps" :key="i" class="step">
        <span class="slot" :class="{ filled: program[(i - 1) * 2] }" :style="program[(i - 1) * 2] ? { '--c': byId[program[(i - 1) * 2]].color } : undefined">
          <span v-if="program[(i - 1) * 2]" class="dot">{{ byId[program[(i - 1) * 2]].n }}</span>
        </span>
        <span class="slot arrowslot" :class="{ filled: program[(i - 1) * 2 + 1] }">{{ program[(i - 1) * 2 + 1] ? glyph[program[(i - 1) * 2 + 1]] : '' }}</span>
      </li>
    </ol>
    <div class="bar">
      <span class="hint">{{ nextIsBot && !full ? 'Als Nächstes: ein Go-Bot' : !full ? 'Als Nächstes: ein Pfeil' : 'Die Befehlsfolge ist vollständig.' }}</span>
      <span class="btns">
        <button type="button" class="small" :disabled="!program.length" @click="undo">Letzten Befehl löschen</button>
        <button type="button" class="small" :disabled="!program.length" @click="clear">Alles löschen</button>
      </span>
    </div>
  </div>
</template>

<style scoped>
.gb { display: grid; gap: 12px; }
.board { display: grid; width: 100%; max-width: 560px; margin-inline: auto; border: 2px solid var(--ink); background: var(--ink); gap: 1px; }
.cell { position: relative; display: grid; place-items: center; background: color-mix(in srgb, var(--sun-soft) 70%, var(--surface)); min-width: 0; }
.cell.wall { background: #d35400; }
.star { color: #1f8a3b; font-size: clamp(14px, 3.6vw, 26px); line-height: 1; }
.bot { display: grid; place-items: center; width: 82%; aspect-ratio: 1; border-radius: 50%; border: 2px solid #111; color: #fff; font: 800 clamp(9px, 2.4vw, 16px) var(--font-body); }
.palette { display: flex; flex-wrap: wrap; gap: 8px; align-items: center; justify-content: center; }
.p { min-width: 48px; height: 48px; border: 2px solid var(--line); background: var(--surface); color: var(--ink); border-radius: 10px; font: 700 1.4rem var(--font-body); cursor: pointer; display: grid; place-items: center; }
.p:hover:not(:disabled) { border-color: var(--primary); }
.p:disabled { opacity: .35; cursor: not-allowed; }
.p:focus-visible { outline: 3px solid var(--sun); }
.sep { width: 12px; }
.dot { display: inline-grid; place-items: center; width: 30px; height: 30px; border-radius: 50%; border: 2px solid #111; background: var(--c); color: #fff; font: 800 1rem var(--font-body); }
.program { display: flex; flex-wrap: wrap; gap: 10px; list-style: none; margin: 0; padding: 10px; border: 2px dashed var(--line); border-radius: 12px; justify-content: center; }
.step { display: flex; gap: 4px; }
.slot { display: grid; place-items: center; width: 42px; height: 42px; border-radius: 8px; background: var(--sunk); font: 700 1.3rem var(--font-body); color: var(--ink); }
.slot.filled { background: var(--primary-soft); }
.bar { display: flex; justify-content: space-between; gap: 8px; flex-wrap: wrap; align-items: center; }
.hint { font-size: .85rem; color: var(--muted); }
.btns { display: flex; gap: 8px; flex-wrap: wrap; }
.small { border: 1px solid var(--line); background: var(--surface); color: var(--ink); border-radius: 999px; padding: 4px 12px; cursor: pointer; font: inherit; font-size: .85rem; }
.small:disabled { opacity: .4; cursor: default; }
</style>
