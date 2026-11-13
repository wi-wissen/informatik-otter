<script setup lang="ts">
// Block programming for the robot: build a program from the blocks "gehe vorwärts", "drehe nach links",
// "drehe nach rechts", "wenn vorne frei … sonst …" and "wiederhole …" (at most `maxBlocks` blocks).
// "Programm testen" lets the robot run; the answer is "ok" when the program brings it to the goal.
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';
import BlockList from './BlockList.vue';

type Block =
  | { t: 'fwd' | 'left' | 'right' }
  | { t: 'if'; a: Block[]; b: Block[] }
  | { t: 'loop'; body: Block[] };
type Slot = { list: Block[] };

const props = defineProps<{ rows: string[]; start: [number, number]; goal: [number, number]; maxBlocks: number }>();
const emit = defineEmits<{ answer: [value: string] }>();

const R = props.rows.length;
const C = props.rows[0].length;
const free = (r: number, c: number) => r >= 0 && c >= 0 && r < R && c < C && props.rows[r][c] !== '#';
const DIRS = [[0, 1], [1, 0], [0, -1], [-1, 0]]; // right, down, left, up (turning right = +1)

const program = ref<Block[]>([]);
const selected = ref<string | null>(null);
const palette = [
  { id: 'fwd', label: 'gehe vorwärts', cls: 'act' },
  { id: 'left', label: 'drehe nach links', cls: 'act' },
  { id: 'right', label: 'drehe nach rechts', cls: 'act' },
  { id: 'if', label: 'wenn vorne frei', cls: 'ctl' },
  { id: 'loop', label: 'wiederhole', cls: 'loop' },
];
const labels: Record<string, string> = Object.fromEntries(palette.map((p) => [p.id, p.label]));

function count(list: Block[]): number {
  return list.reduce((n, b) => n + 1 + (b.t === 'if' ? count(b.a) + count(b.b) : b.t === 'loop' ? count(b.body) : 0), 0);
}
const used = computed(() => count(program.value));

function make(t: string): Block {
  if (t === 'if') return { t: 'if', a: [], b: [] };
  if (t === 'loop') return { t: 'loop', body: [] };
  return { t: t as 'fwd' | 'left' | 'right' };
}
function add(list: Block[], t: string) {
  if (used.value >= props.maxBlocks) { note.value = `Du darfst höchstens ${props.maxBlocks} Bausteine benutzen.`; return; }
  list.push(make(t));
  program.value = [...program.value];
  selected.value = null;
  afterEdit();
}
function removeAt(list: Block[], i: number) {
  list.splice(i, 1);
  program.value = [...program.value];
  afterEdit();
}
function clickSlot(list: Block[]) {
  if (selected.value) add(list, selected.value);
  else note.value = 'Wähle erst links einen Baustein und dann eine Stelle im Programm.';
}
function onDrop(e: DragEvent, list: Block[]) {
  e.preventDefault();
  const t = e.dataTransfer?.getData('text/plain');
  if (t) add(list, t);
}
function dragStart(e: DragEvent, id: string) { e.dataTransfer?.setData('text/plain', id); selected.value = id; }

// --- simulation ---
type Step = { r: number; c: number; d: number };
function run(): { steps: Step[]; reached: boolean } {
  let [r, c] = props.start;
  let d = 0;
  const steps: Step[] = [{ r, c, d }];
  let budget = 400;
  let stop = false;
  const atGoal = () => r === props.goal[0] && c === props.goal[1];
  const exec = (list: Block[]) => {
    for (const b of list) {
      if (stop || budget <= 0) return;
      if (b.t === 'fwd') {
        const [dr, dc] = DIRS[d];
        if (free(r + dr, c + dc)) { r += dr; c += dc; }
        steps.push({ r, c, d }); budget--;
      } else if (b.t === 'left' || b.t === 'right') {
        d = (d + (b.t === 'right' ? 1 : 3)) % 4;
        steps.push({ r, c, d }); budget--;
      } else if (b.t === 'if') {
        const [dr, dc] = DIRS[d];
        exec(free(r + dr, c + dc) ? b.a : b.b);
      } else {
        let guard = 200;
        while (!stop && budget > 0 && guard-- > 0) {
          const before = steps.length;
          exec(b.body);
          if (steps.length === before) break; // empty loop: nothing happens
        }
      }
      if (atGoal()) { stop = true; return; }
    }
  };
  exec(program.value);
  return { steps, reached: atGoal() };
}

const pos = ref<Step>({ r: props.start[0], c: props.start[1], d: 0 });
const note = ref('');
const running = ref(false);
let timer: ReturnType<typeof setInterval> | undefined;

function reset() {
  clearInterval(timer);
  running.value = false;
  pos.value = { r: props.start[0], c: props.start[1], d: 0 };
}
function test() {
  reset();
  const { steps, reached } = run();
  let i = 0;
  running.value = true;
  note.value = '';
  timer = setInterval(() => {
    i++;
    if (i >= steps.length) {
      clearInterval(timer);
      running.value = false;
      note.value = reached ? 'Der Roboter hat das Zielfeld erreicht.' : 'Der Roboter hat das Zielfeld nicht erreicht.';
      return;
    }
    pos.value = steps[i];
  }, 180);
}
function afterEdit() {
  reset();
  note.value = '';
  emit('answer', run().reached && used.value <= props.maxBlocks ? 'ok' : 'nicht-ok');
}
function clearAll() { program.value = []; afterEdit(); }
onMounted(() => emit('answer', 'nicht-ok'));
onBeforeUnmount(() => clearInterval(timer));
</script>

<template>
  <div class="robot">
    <div class="top">
      <div class="room" :style="{ gridTemplateColumns: `repeat(${C}, 1fr)`, aspectRatio: `${C} / ${R}` }" role="img"
           :aria-label="`Raum mit ${C} mal ${R} Feldern. Der Roboter steht auf Zeile ${pos.r + 1}, Spalte ${pos.c + 1} und schaut nach ${['rechts', 'unten', 'links', 'oben'][pos.d]}. Das Zielfeld ist in Zeile ${goal[0] + 1}, Spalte ${goal[1] + 1}.`">
        <template v-for="(row, r) in rows" :key="r">
          <div v-for="(ch, c) in row" :key="c" class="cell"
               :class="{ wall: ch === '#', start: r === start[0] && c === start[1], goal: r === goal[0] && c === goal[1] }">
            <span v-if="pos.r === r && pos.c === c" class="bot" :style="{ transform: `rotate(${pos.d * 90}deg)` }" />
          </div>
        </template>
      </div>
      <div class="buttons">
        <button type="button" class="btn" :disabled="running" @click="test">Programm testen</button>
        <button type="button" class="btn secondary" @click="reset">Zurücksetzen</button>
        <button type="button" class="btn secondary" @click="clearAll">Programm löschen</button>
        <p class="note" aria-live="polite">{{ note }}</p>
      </div>
    </div>

    <div class="editor">
      <div class="palette" role="group" aria-label="Bausteine">
        <button v-for="p in palette" :key="p.id" type="button" class="blk" :class="[p.cls, { sel: selected === p.id }]"
                draggable="true" :aria-pressed="selected === p.id" @click="selected = selected === p.id ? null : p.id"
                @dragstart="dragStart($event, p.id)">{{ p.label }}</button>
      </div>

      <div class="area" aria-label="Dein Programm">
        <p class="count">Bausteine: {{ used }} von {{ maxBlocks }}</p>
        <BlockList :list="program" :labels="labels" :remove="removeAt" :add-to="clickSlot" :drop="onDrop" />
        <button type="button" class="slot" @click="clickSlot(program)" @dragover.prevent @drop="onDrop($event, program)">+ hier einfügen</button>
      </div>
    </div>
    <p class="hint">Ziehe Bausteine in dein Programm, oder tippe erst einen Baustein und dann eine Stelle an. Mit × nimmst du einen Baustein wieder heraus.</p>
  </div>
</template>

<style scoped>
.robot { display: grid; gap: 14px; }
.top { display: flex; gap: 18px; flex-wrap: wrap; align-items: flex-start; }
.room { display: grid; width: min(100%, 320px); border: 3px solid var(--ink); background: var(--surface); }
.cell { position: relative; background: var(--surface); border: 1px solid var(--line); display: grid; place-items: center; }
.cell.wall { background: var(--ink); }
.cell.start { background: #e53935; }
.cell.goal { background: #43d14b; }
.bot { width: 62%; height: 62%; background: #5fa8d3; clip-path: polygon(0 0, 100% 50%, 0 100%); border: 0; filter: drop-shadow(0 0 1px #000); transition: transform .12s; }
.buttons { display: grid; gap: 8px; justify-items: start; }
.btn { border: 2px solid transparent; border-radius: 999px; background: var(--primary); color: var(--primary-ink); font: 700 .95rem var(--font-display); padding: 7px 16px; cursor: pointer; }
.btn.secondary { background: var(--surface); color: var(--ink); border-color: var(--line); }
.btn:disabled { opacity: .55; cursor: default; }
.note { margin: 0; min-height: 1.5em; font-size: .9rem; color: var(--muted); max-width: 22ch; }
.editor { display: grid; grid-template-columns: minmax(150px, 190px) 1fr; gap: 14px; align-items: start; }
@media (max-width: 560px) { .editor { grid-template-columns: 1fr; } }
.palette { display: grid; gap: 8px; padding: 10px; border-radius: 12px; background: var(--sunk); border: 1px solid var(--line); }
.area { display: grid; gap: 8px; padding: 10px; border-radius: 12px; background: var(--sunk); border: 1px solid var(--line); min-height: 160px; }
.count { margin: 0; font-size: .85rem; color: var(--muted); }
.list { list-style: none; margin: 0; padding: 0; display: grid; gap: 6px; }
.blk { position: relative; border-radius: 8px; padding: 6px 10px; font: 600 .9rem var(--font-body); text-align: left; cursor: grab; border: 2px solid transparent; color: #fff; }
.blk.act { background: #8e44ad; }
.blk.ctl { background: #3d6c99; }
.blk.loop { background: #2e8b57; }
.blk.sel { border-color: var(--sun); box-shadow: 0 0 0 3px var(--sun-soft); }
.placed { cursor: default; display: flex; align-items: center; justify-content: space-between; gap: 8px; }
.placed.wide { display: grid; gap: 6px; }
.head { display: flex; justify-content: space-between; align-items: center; gap: 8px; }
.inner { margin-left: 10px; padding: 6px; border-radius: 6px; background: rgba(255, 255, 255, .18); display: grid; gap: 6px; }
.lbl { font-size: .8rem; opacity: .9; }
.x { border: 0; background: rgba(0, 0, 0, .25); color: #fff; border-radius: 50%; width: 22px; height: 22px; cursor: pointer; line-height: 1; font-size: 1rem; }
.slot { border: 2px dashed var(--line); border-radius: 8px; background: var(--surface); color: var(--muted); font: inherit; font-size: .8rem; padding: 4px 8px; cursor: pointer; }
.slot:hover, .slot:focus-visible { border-color: var(--primary); color: var(--ink); }
.hint { margin: 0; font-size: .85rem; color: var(--muted); }
</style>
