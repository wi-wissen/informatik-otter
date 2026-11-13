<script setup lang="ts">
import { computed, ref } from 'vue';

const props = defineProps<{
  holes: [number, number][]; // per level (top to bottom): the cell [x, y] with a hole; the last level has none
  goal: [number, number];
  start: [number, number];
}>();
const emit = defineEmits<{ answer: [value: string] }>();

const seq = ref('');
const DIRS: Record<string, [number, number]> = { N: [0, 1], S: [0, -1], O: [1, 0], W: [-1, 0] };
const LEVELS = props.holes.length + 1;

function fall(level: number, pos: [number, number]): number {
  while (level < LEVELS - 1 && props.holes[level][0] === pos[0] && props.holes[level][1] === pos[1]) level++;
  return level;
}
const state = computed(() => {
  let pos: [number, number] = [...props.start];
  let level = fall(0, pos);
  for (const c of seq.value) {
    const d = DIRS[c];
    const nx = pos[0] + d[0], ny = pos[1] + d[1];
    if (nx < 0 || nx > 1 || ny < 0 || ny > 1) continue; // closed maze
    pos = [nx, ny];
    level = fall(level, pos);
  }
  return { pos, level };
});
const done = computed(() => state.value.level === LEVELS - 1 && state.value.pos[0] === props.goal[0] && state.value.pos[1] === props.goal[1]);

function set(v: string) {
  seq.value = v.toUpperCase().replace(/[^NOSW]/g, '');
  emit('answer', done.value ? 'ok' : 'nicht im Ziel');
}
function add(c: string) { set(seq.value + c); }
function cellKind(l: number, x: number, y: number) {
  if (l < LEVELS - 1 && props.holes[l][0] === x && props.holes[l][1] === y) return 'hole';
  if (l === LEVELS - 1 && props.goal[0] === x && props.goal[1] === y) return 'goal';
  return '';
}
const rows = [1, 0]; // y = 1 (north) drawn on top
</script>

<template>
  <div class="maze">
    <div class="levels" role="group" aria-label="Die vier Ebenen des Labyrinths, Norden oben">
      <div v-for="l in LEVELS" :key="l" class="level">
        <div class="cap">Ebene {{ l }}</div>
        <div class="grid">
          <template v-for="y in rows" :key="y">
            <div v-for="x in [0, 1]" :key="x" :class="['cell', cellKind(l - 1, x, y)]">
              <span v-if="state.level === l - 1 && state.pos[0] === x && state.pos[1] === y" class="ball" />
            </div>
          </template>
        </div>
      </div>
    </div>
    <div class="ctrl">
      <label class="lbl">Befehle
        <input :value="seq" class="inp" type="text" autocapitalize="characters" autocomplete="off" spellcheck="false"
          aria-label="Befehlsfolge aus N, O, S und W" @input="set(($event.target as HTMLInputElement).value)" />
      </label>
      <div class="btns">
        <button v-for="c in ['N', 'W', 'S', 'O']" :key="c" type="button" @click="add(c)">{{ c }}</button>
        <button type="button" @click="set(seq.slice(0, -1))">Zurück</button>
        <button type="button" @click="set('')">Löschen</button>
      </div>
      <p class="hint">Norden (N) ist oben, Osten (O) rechts. Dunkel = Loch, gelb = Ziel.</p>
    </div>
  </div>
</template>

<style scoped>
.maze { display: grid; gap: 12px; }
.levels { display: flex; gap: 10px; flex-wrap: wrap; justify-content: center; }
.cap { font-size: .8rem; color: var(--muted); text-align: center; margin-bottom: 2px; }
.grid { display: grid; grid-template-columns: repeat(2, 48px); grid-auto-rows: 48px; gap: 3px; }
.cell { border: 2px solid var(--ink); background: var(--surface); display: grid; place-items: center; border-radius: 4px; }
.cell.hole { background: var(--ink); opacity: .85; }
.cell.goal { background: #f4d93b; }
.ball { width: 28px; height: 28px; border-radius: 50%; background: #e53a26; border: 2px solid #111; }
.ctrl { display: grid; gap: 8px; justify-items: center; }
.lbl { display: flex; gap: 8px; align-items: center; font-weight: 600; }
.inp { font: inherit; letter-spacing: .15em; padding: 6px 10px; border: 1px solid var(--line); border-radius: 8px; background: var(--surface); color: var(--ink); min-width: 12ch; }
.btns { display: flex; gap: 6px; flex-wrap: wrap; justify-content: center; }
.btns button { font: inherit; border: 1px solid var(--line); background: var(--surface); color: var(--ink); border-radius: 999px; padding: 6px 14px; cursor: pointer; }
.hint { margin: 0; font-size: .85rem; color: var(--muted); }
</style>
