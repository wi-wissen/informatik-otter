<script setup lang="ts">
// Bienenwaben: put every bee on a honeycomb that fits her hint. Drag a bee card onto a cell,
// or tap a bee and then a cell. Every cell holds one bee.
import { onMounted, ref } from 'vue';

type Bee = { id: string; image: string; icon: string; alt: string };
type Cell = { id: string; x: number; y: number; label: string };
const props = defineProps<{ background: string; width: number; height: number; cellSize: number; cells: Cell[]; bees: Bee[] }>();
const emit = defineEmits<{ answer: [value: unknown] }>();

const onCell = ref<Record<string, string>>({}); // cell id -> bee id
const selected = ref<string | null>(null);
const dragged = ref<string | null>(null);
const byId = Object.fromEntries(props.bees.map((b) => [b.id, b]));
const beeCell = (b: string) => Object.keys(onCell.value).find((c) => onCell.value[c] === b);

function report() {
  const out: Record<string, string> = {};
  for (const c of Object.keys(onCell.value)) out[onCell.value[c]] = c;
  emit('answer', Object.keys(out).length ? out : null);
}
onMounted(report);

function put(cell: string, bee: string) {
  const next = { ...onCell.value };
  for (const c of Object.keys(next)) if (next[c] === bee) delete next[c];
  next[cell] = bee;
  onCell.value = next;
  selected.value = null;
  report();
}
function tapCell(cell: string) {
  if (selected.value) return put(cell, selected.value);
  if (onCell.value[cell]) { const next = { ...onCell.value }; delete next[cell]; onCell.value = next; report(); }
}
function tapBee(id: string) { selected.value = selected.value === id ? null : id; }
function dragStart(e: DragEvent, id: string) { e.dataTransfer?.setData('text/plain', id); dragged.value = id; selected.value = id; }
function drop(e: DragEvent, cell: string) {
  e.preventDefault();
  const id = e.dataTransfer?.getData('text/plain');
  dragged.value = null;
  if (id && byId[id]) put(cell, id);
}
const pct = (v: number, of: number) => `${(v / of) * 100}%`;
</script>

<template>
  <div class="hive">
    <div class="board" :style="{ aspectRatio: `${width} / ${height}` }">
      <img :src="background" alt="" draggable="false" />
      <div v-for="c in cells" :key="c.id" class="cell" :class="{ target: !!selected }" role="button" tabindex="0"
           :style="{ left: pct(c.x, width), top: pct(c.y, height), width: pct(cellSize, width), height: pct(cellSize, height) }"
           :aria-label="`Wabe ${c.label}` + (onCell[c.id] ? `: ${byId[onCell[c.id]].alt}` : ': frei')"
           @click="tapCell(c.id)" @keydown.enter.prevent="tapCell(c.id)" @keydown.space.prevent="tapCell(c.id)"
           @dragover.prevent @drop="drop($event, c.id)">
        <img v-if="onCell[c.id]" :src="byId[onCell[c.id]].icon" :alt="byId[onCell[c.id]].alt" draggable="false" />
      </div>
    </div>
    <div class="bees" role="group" aria-label="Bienen mit Hinweisen">
      <button v-for="b in bees" :key="b.id" type="button" class="bee" :class="{ sel: selected === b.id, done: !!beeCell(b.id) }"
              :aria-pressed="selected === b.id" draggable="true" @click="tapBee(b.id)" @dragstart="dragStart($event, b.id)" @dragend="dragged = null">
        <img :src="b.image" :alt="b.alt" draggable="false" />
      </button>
    </div>
    <p class="hint">Ziehe jede Biene auf eine richtige Wabe, oder tippe erst die Biene und dann die Wabe an. Tippe eine besetzte Wabe an, um die Biene zurückzunehmen.</p>
  </div>
</template>

<style scoped>
.hive { display: grid; gap: 12px; }
.board { position: relative; width: 100%; max-width: 360px; margin-inline: auto; background: #fff; border-radius: 10px; overflow: hidden; }
.board > img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: contain; pointer-events: none; }
.cell { position: absolute; transform: translate(-50%, -50%); display: grid; place-items: center; cursor: pointer; border-radius: 12px; }
.cell img { width: 100%; height: 100%; object-fit: contain; pointer-events: none; }
.cell:hover { background: color-mix(in srgb, var(--sun-soft) 60%, transparent); }
.cell.target { outline: 2px dashed var(--sun); }
.cell:focus-visible { outline: 3px solid var(--sun); }
.bees { display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; }
.bee { padding: 4px 6px; border: 2px solid var(--line); border-radius: 10px; background: #fff; cursor: grab; }
.bee img { display: block; height: 128px; width: auto; }
.bee.sel { border-color: var(--sun); background: var(--sun-soft); }
.bee.done { opacity: .4; }
.hint { margin: 0; font-size: .85rem; color: var(--muted); }
</style>
