<script setup lang="ts">
// Reorder items by dragging one onto another. mode "swap": the two change places (as in the original online task);
// mode "insert": the dragged item is moved to the place of the target. Tap one item and then another works too,
// and each item has arrow buttons for keyboard use.
import { onMounted, ref } from 'vue';

type Item = { id: string; label?: string; image?: string; alt?: string };
const props = defineProps<{ items: Item[]; mode?: 'swap' | 'insert'; direction?: 'horizontal' | 'vertical'; startLabel?: string; endLabel?: string }>();
const emit = defineEmits<{ answer: [value: string[]] }>();

const order = ref<Item[]>([...props.items]);
const selected = ref<number | null>(null);
const dragFrom = ref<number | null>(null);
const over = ref<number | null>(null);
const vertical = props.direction === 'vertical';
const insert = props.mode === 'insert';

const report = () => emit('answer', order.value.map((i) => i.id));
onMounted(report);

function moveTo(from: number, to: number) {
  if (from === to) return;
  const next = [...order.value];
  if (insert) {
    const [it] = next.splice(from, 1);
    next.splice(to, 0, it);
  } else {
    [next[from], next[to]] = [next[to], next[from]];
  }
  order.value = next;
  report();
}
function tap(i: number) {
  if (selected.value === null) { selected.value = i; return; }
  moveTo(selected.value, i);
  selected.value = null;
}
function step(i: number, d: number) {
  const j = i + d;
  if (j < 0 || j >= order.value.length) return;
  const next = [...order.value];
  [next[i], next[j]] = [next[j], next[i]];
  order.value = next;
  selected.value = null;
  report();
}
function onDragStart(e: DragEvent, i: number) {
  dragFrom.value = i;
  e.dataTransfer?.setData('text/plain', String(i));
  if (e.dataTransfer) e.dataTransfer.effectAllowed = 'move';
}
function onDrop(e: DragEvent, i: number) {
  e.preventDefault();
  const from = dragFrom.value;
  dragFrom.value = null; over.value = null; selected.value = null;
  if (from !== null) moveTo(from, i);
}
</script>

<template>
  <div class="sort" :class="{ vertical }">
    <span v-if="startLabel" class="end">{{ startLabel }}</span>
    <ol class="row">
      <li v-for="(it, i) in order" :key="it.id" :class="{ sel: selected === i, over: over === i && dragFrom !== i }"
          @dragover.prevent="over = i" @dragleave="over = null" @drop="onDrop($event, i)">
        <button type="button" class="item" draggable="true" :aria-pressed="selected === i"
                :aria-label="`${it.label ?? it.alt ?? it.id}, Platz ${i + 1}. Ziehen oder antippen zum Verschieben`"
                @click="tap(i)" @dragstart="onDragStart($event, i)" @dragend="dragFrom = null; over = null">
          <span class="face">
            <img v-if="it.image" :src="it.image" :alt="it.alt ?? it.label ?? ''" draggable="false" />
            <span v-if="it.label" class="label">{{ it.label }}</span>
          </span>
        </button>
        <span class="moves">
          <button type="button" class="mv" :disabled="i === 0" @click="step(i, -1)" :aria-label="`${it.label ?? it.alt ?? it.id} nach vorne`">{{ vertical ? '▲' : '◀' }}</button>
          <button type="button" class="mv" :disabled="i === order.length - 1" @click="step(i, 1)" :aria-label="`${it.label ?? it.alt ?? it.id} nach hinten`">{{ vertical ? '▼' : '▶' }}</button>
        </span>
      </li>
    </ol>
    <span v-if="endLabel" class="end">{{ endLabel }}</span>
    <p class="hint">{{ insert ? 'Ziehe die Teile in die richtige Reihenfolge, oder tippe ein Teil und dann die Stelle an, an die es soll.' : 'Ziehe ein Teil auf ein anderes, dann tauschen sie die Plätze. Oder tippe zwei Teile nacheinander an.' }}</p>
  </div>
</template>

<style scoped>
.sort { display: grid; gap: 8px; }
.row { list-style: none; margin: 0; padding: 0; display: flex; gap: 10px; flex-wrap: wrap; }
.vertical .row { flex-direction: column; max-width: 420px; }
li { display: grid; gap: 4px; justify-items: center; border-radius: 14px; }
.vertical li { grid-template-columns: 1fr auto; align-items: center; }
li.over { outline: 3px dashed var(--sun); outline-offset: 3px; }
.item { border: 2px solid var(--line); background: var(--surface); border-radius: 12px; padding: 10px; cursor: grab; min-width: 72px; min-height: 64px; color: var(--ink); font: inherit; width: 100%; }
.item:hover { border-color: var(--primary); }
li.sel .item { border-color: var(--sun); box-shadow: 0 0 0 4px var(--sun-soft); }
.face { display: inline-flex; flex-direction: column; align-items: center; gap: 4px; pointer-events: none; }
.face img { max-height: 110px; max-width: 160px; object-fit: contain; }
.label { font-weight: 700; }
.moves { display: flex; gap: 4px; }
.mv { width: 30px; height: 28px; border: 1px solid var(--line); background: var(--bg); color: var(--ink); border-radius: 8px; cursor: pointer; font-size: .75rem; }
.mv:disabled { opacity: .3; cursor: default; }
.end { font: 700 .85rem var(--font-body); color: var(--muted); }
.hint { font-size: .85rem; color: var(--muted); }
</style>
