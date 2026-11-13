<script setup lang="ts">
// The program (at most 7 instructions) is repeated six times. The pen starts on a field that is already painted;
// every instruction moves the pen one field and paints it. The answer is "ok" when the result equals the target pattern.
import { computed, onMounted, ref } from 'vue';

const emit = defineEmits<{ answer: [value: string] }>();
const MAX = 7;
const REPEAT = 6;
const commands = [
  { id: 'right', label: 'Gehe einen Schritt nach rechts', d: [1, 0] },
  { id: 'left', label: 'Gehe einen Schritt nach links', d: [-1, 0] },
  { id: 'up', label: 'Gehe einen Schritt nach oben', d: [0, -1] },
  { id: 'down', label: 'Gehe einen Schritt nach unten', d: [0, 1] },
] as const;
const byId = Object.fromEntries(commands.map((c) => [c.id, c]));

const program = ref<string[]>([]);
const shown = ref(false);

function paint(prog: string[]): Set<string> {
  const cells = new Set<string>(['0,0']);
  let x = 0, y = 0;
  for (let i = 0; i < REPEAT; i++) for (const id of prog) { x += byId[id].d[0]; y += byId[id].d[1]; cells.add(`${x},${y}`); }
  return cells;
}
const target = paint(['right', 'up', 'right', 'right', 'down', 'right']);
const painted = computed(() => paint(program.value));
const ok = computed(() => painted.value.size === target.size && [...target].every((c) => painted.value.has(c)));

function report() { emit('answer', program.value.length === 0 ? '' : ok.value ? 'ok' : program.value.join(' ')); }
onMounted(report);
function add(id: string) { if (program.value.length >= MAX) return; program.value = [...program.value, id]; shown.value = false; report(); }
function undo() { program.value = program.value.slice(0, -1); shown.value = false; report(); }
function clear() { program.value = []; shown.value = false; report(); }

const view = computed(() => {
  const pts = [...painted.value].map((c) => c.split(',').map(Number));
  const minX = Math.min(...pts.map((p) => p[0])), maxX = Math.max(...pts.map((p) => p[0]));
  const minY = Math.min(...pts.map((p) => p[1])), maxY = Math.max(...pts.map((p) => p[1]));
  return { pts, minX, minY, w: maxX - minX + 1, h: maxY - minY + 1 };
});
</script>

<template>
  <div class="mm">
    <div class="work">
      <div class="palette" role="group" aria-label="Anweisungen">
        <button v-for="c in commands" :key="c.id" type="button" class="cmd" :disabled="program.length >= MAX" @click="add(c.id)">{{ c.label }}</button>
        <div class="gap" />
        <button type="button" class="cmd run" :disabled="!program.length" @click="shown = true">Programm ausprobieren</button>
        <button type="button" class="cmd" :disabled="!program.length" @click="undo">Die letzte Anweisung löschen</button>
        <button type="button" class="cmd" :disabled="!program.length" @click="clear">Alle Anweisungen löschen</button>
      </div>
      <div class="loop">
        <p class="rep">Wiederhole sechs mal …</p>
        <ol class="slots" aria-label="Dein Programm">
          <li v-for="i in MAX" :key="i" class="slot" :class="{ filled: !!program[i - 1] }">{{ program[i - 1] ? byId[program[i - 1]].label : '' }}</li>
        </ol>
      </div>
    </div>
    <div class="res" aria-live="polite">
      <p class="cap">Dein Ergebnis:</p>
      <svg v-if="shown" class="canvas" :viewBox="`0 0 ${Math.max(view.w, 3) + 0} ${Math.max(view.h, 2)}`" :style="{ width: `${Math.max(view.w, 3) * 22}px`, maxWidth: '100%' }"
           role="img" :aria-label="`Das Programm malt ${painted.size} Felder`">
        <rect v-for="p in view.pts" :key="p.join(',')" :x="p[0] - view.minX + 0.04" :y="p[1] - view.minY + 0.04" width="0.92" height="0.92" class="px" />
      </svg>
      <p v-else class="hint">Klicke auf „Programm ausprobieren“, um zu sehen, was dein Programm malt. Der Stift startet in einem schon gemalten Feld.</p>
    </div>
  </div>
</template>

<style scoped>
.mm { display: grid; gap: 14px; }
.work { display: flex; flex-wrap: wrap; gap: 24px; align-items: flex-start; }
.palette { display: grid; gap: 8px; width: 17.5rem; max-width: 100%; }
.gap { height: 6px; }
.cmd { border: 2px solid var(--line); background: var(--surface); color: var(--ink); border-radius: 10px; padding: 7px 12px; text-align: left; cursor: pointer; font: inherit; font-size: .95rem; }
.cmd:hover:not(:disabled) { border-color: var(--primary); }
.cmd:disabled { opacity: .5; cursor: default; }
.cmd.run { background: var(--primary-soft); }
.cmd:focus-visible { outline: 3px solid var(--primary); outline-offset: 2px; }
.loop { border: 3px solid var(--ink); border-radius: 4px; padding: 6px 8px 10px; min-width: 14rem; position: relative; }
.rep { margin: 0 0 6px; font-size: .9rem; color: var(--muted); }
.slots { list-style: none; margin: 0; padding: 0; border: 2px solid var(--ink); }
.slot { height: 2rem; padding: 0 8px; display: flex; align-items: center; font-size: .85rem; border-top: 1px solid var(--ink); background: var(--surface); }
.slot:first-child { border-top: 0; }
.slot.filled { background: var(--primary-soft); }
.cap { margin: 0 0 6px; font-weight: 700; }
.canvas { display: block; height: auto; }
.px { fill: var(--ink); }
.hint { margin: 0; color: var(--muted); font-size: .9rem; }
</style>
