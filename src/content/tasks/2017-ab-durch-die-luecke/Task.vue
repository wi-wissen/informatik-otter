<script setup lang="ts">
// Program the robot with the blocks "gehe vorwärts", "drehe nach links", "drehe nach rechts".
// "Programm testen" lets the robot run; the answer is "ok" when it ends on the goal field.
import { onBeforeUnmount, onMounted, ref } from 'vue';

const props = defineProps<{ rows: string[]; start: [number, number]; goal: [number, number] }>();
const emit = defineEmits<{ answer: [value: string] }>();

const R = props.rows.length;
const C = props.rows[0].length;
const free = (r: number, c: number) => r >= 0 && c >= 0 && r < R && c < C && props.rows[r][c] !== '#';
const DIRS = [[0, 1], [1, 0], [0, -1], [-1, 0]]; // right, down, left, up (turning right = +1)

const palette = [
  { id: 'fwd', label: 'gehe vorwärts' },
  { id: 'left', label: 'drehe nach links' },
  { id: 'right', label: 'drehe nach rechts' },
];
const labels: Record<string, string> = Object.fromEntries(palette.map((p) => [p.id, p.label]));
const program = ref<string[]>([]);
const selected = ref<string | null>(null);

type Step = { r: number; c: number; d: number };
function run(): { steps: Step[]; reached: boolean } {
  let [r, c] = props.start;
  let d = 0;
  const steps: Step[] = [{ r, c, d }];
  for (const b of program.value) {
    if (b === 'fwd') {
      const [dr, dc] = DIRS[d];
      if (free(r + dr, c + dc)) { r += dr; c += dc; }
    } else d = (d + (b === 'right' ? 1 : 3)) % 4;
    steps.push({ r, c, d });
  }
  return { steps, reached: r === props.goal[0] && c === props.goal[1] };
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
  }, 220);
}
function changed() {
  reset();
  note.value = '';
  emit('answer', run().reached ? 'ok' : 'nicht-ok');
}
function add(id: string) { program.value = [...program.value, id]; selected.value = null; changed(); }
function removeAt(i: number) { program.value = program.value.filter((_, k) => k !== i); changed(); }
function clearAll() { program.value = []; changed(); }
function onDrop(e: DragEvent) {
  e.preventDefault();
  const t = e.dataTransfer?.getData('text/plain');
  if (t && labels[t]) add(t);
}
function dragStart(e: DragEvent, id: string) { e.dataTransfer?.setData('text/plain', id); selected.value = id; }
onMounted(() => emit('answer', 'nicht-ok'));
onBeforeUnmount(() => clearInterval(timer));
</script>

<template>
  <div class="robot">
    <div class="top">
      <div class="room" :style="{ gridTemplateColumns: `repeat(${C}, 1fr)`, aspectRatio: `${C} / ${R}` }" role="img"
           :aria-label="`Spielfeld mit ${C} mal ${R} Feldern. Der Roboter steht auf Zeile ${pos.r + 1}, Spalte ${pos.c + 1} und schaut nach ${['rechts', 'unten', 'links', 'oben'][pos.d]}. Das Zielfeld ist in Zeile ${goal[0] + 1}, Spalte ${goal[1] + 1}.`">
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
      <div class="palette" role="group" aria-label="Programmbausteine">
        <button v-for="p in palette" :key="p.id" type="button" class="blk" :class="{ sel: selected === p.id }"
                draggable="true" :aria-pressed="selected === p.id" @click="add(p.id)" @dragstart="dragStart($event, p.id)">{{ p.label }}</button>
      </div>
      <div class="area" aria-label="Dein Programm" @dragover.prevent @drop="onDrop">
        <p class="count">{{ program.length ? `Programm (${program.length} Bausteine)` : 'Dein Programm ist noch leer.' }}</p>
        <ol class="list">
          <li v-for="(b, i) in program" :key="i" class="blk placed">
            {{ labels[b] }}<button type="button" class="x" :aria-label="`${labels[b]} (Schritt ${i + 1}) entfernen`" @click="removeAt(i)">×</button>
          </li>
        </ol>
      </div>
    </div>
    <p class="hint">Tippe einen Baustein an oder ziehe ihn in dein Programm. Mit × nimmst du einen Baustein wieder heraus.</p>
  </div>
</template>

<style scoped>
.robot { display: grid; gap: 14px; }
.top { display: flex; gap: 18px; flex-wrap: wrap; align-items: flex-start; }
.room { display: grid; width: min(100%, 360px); border: 3px solid var(--ink); background: var(--ink); }
.cell { position: relative; background: var(--surface); border: 1px solid var(--line); display: grid; place-items: center; }
.cell.wall { background: var(--ink); border-color: var(--ink); }
.cell.start { background: #e53935; }
.cell.goal { background: #43d14b; }
.bot { width: 62%; height: 62%; background: #5fa8d3; clip-path: polygon(0 0, 100% 50%, 0 100%); transition: transform .12s; }
.buttons { display: grid; gap: 8px; justify-items: start; }
.btn { border: 2px solid transparent; border-radius: 999px; background: var(--primary); color: var(--primary-ink); font: 700 .95rem var(--font-display); padding: 7px 16px; cursor: pointer; }
.btn.secondary { background: var(--surface); color: var(--ink); border-color: var(--line); }
.btn:disabled { opacity: .55; cursor: default; }
.note { margin: 0; min-height: 1.5em; font-size: .9rem; color: var(--muted); max-width: 22ch; }
.editor { display: grid; grid-template-columns: minmax(150px, 190px) 1fr; gap: 14px; align-items: start; }
@media (max-width: 560px) { .editor { grid-template-columns: 1fr; } }
.palette { display: grid; gap: 8px; padding: 10px; border-radius: 12px; background: var(--sunk); border: 1px solid var(--line); }
.area { display: grid; gap: 8px; padding: 10px; border-radius: 12px; background: var(--sunk); border: 1px solid var(--line); min-height: 140px; align-content: start; }
.count { margin: 0; font-size: .85rem; color: var(--muted); }
.list { list-style: none; margin: 0; padding: 0; display: flex; flex-wrap: wrap; gap: 6px; }
.blk { border: 2px solid transparent; border-radius: 8px; padding: 6px 10px; font: 600 .9rem var(--font-body); background: #8e44ad; color: #fff; cursor: grab; text-align: left; }
.blk.sel { border-color: var(--sun); box-shadow: 0 0 0 3px var(--sun-soft); }
.placed { cursor: default; display: flex; align-items: center; gap: 8px; }
.x { border: 0; background: rgba(0, 0, 0, .25); color: #fff; border-radius: 50%; width: 22px; height: 22px; cursor: pointer; line-height: 1; font-size: 1rem; }
.hint { margin: 0; font-size: .85rem; color: var(--muted); }
</style>
