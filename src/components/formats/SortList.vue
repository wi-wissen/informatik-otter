<script setup lang="ts">
import { onMounted, ref } from 'vue';
import ItemFace from './ItemFace.vue';

type Item = { id: string; label?: string; image?: string; alt?: string };
const props = defineProps<{ items: Item[]; direction?: 'horizontal' | 'vertical'; startLabel?: string; endLabel?: string }>();
const emit = defineEmits<{ answer: [value: string[]] }>();

const order = ref<Item[]>([...props.items]);
const selected = ref<number | null>(null);
const report = () => emit('answer', order.value.map((i) => i.id));
onMounted(report);

function move(i: number, d: number) {
  const j = i + d;
  if (j < 0 || j >= order.value.length) return;
  const next = [...order.value];
  [next[i], next[j]] = [next[j], next[i]];
  order.value = next;
  selected.value = null;
  report();
}
// Tap one item, then another: they swap places.
function tap(i: number) {
  if (selected.value === null) { selected.value = i; return; }
  if (selected.value !== i) {
    const next = [...order.value];
    [next[i], next[selected.value]] = [next[selected.value], next[i]];
    order.value = next;
    report();
  }
  selected.value = null;
}
const vertical = props.direction === 'vertical';
</script>

<template>
  <div class="sort" :class="{ vertical }">
    <span v-if="startLabel" class="end">{{ startLabel }}</span>
    <ol class="row">
      <li v-for="(it, i) in order" :key="it.id" :class="{ sel: selected === i }">
        <button type="button" class="item" :aria-pressed="selected === i" @click="tap(i)"
                :aria-label="`${it.label ?? it.alt ?? it.id}, Platz ${i + 1}. Antippen zum Tauschen`">
          <ItemFace :item="it" />
        </button>
        <span class="moves">
          <button type="button" class="mv" :disabled="i === 0" @click="move(i, -1)" :aria-label="`${it.label ?? it.id} nach vorne`">{{ vertical ? '▲' : '◀' }}</button>
          <button type="button" class="mv" :disabled="i === order.length - 1" @click="move(i, 1)" :aria-label="`${it.label ?? it.id} nach hinten`">{{ vertical ? '▼' : '▶' }}</button>
        </span>
      </li>
    </ol>
    <span v-if="endLabel" class="end">{{ endLabel }}</span>
    <p class="hint">Tippe zwei Teile nacheinander an, um sie zu tauschen.</p>
  </div>
</template>

<style scoped>
.sort { display: grid; gap: 8px; }
.row { list-style: none; margin: 0; padding: 0; display: flex; gap: 10px; flex-wrap: wrap; }
.vertical .row { flex-direction: column; }
li { display: grid; gap: 4px; justify-items: center; }
.vertical li { grid-template-columns: 1fr auto; align-items: center; }
.item { border: 2px solid var(--line); background: var(--surface); border-radius: 12px; padding: 10px; cursor: pointer; min-width: 72px; min-height: 64px; color: var(--ink); font: inherit; width: 100%; }
.item:hover { border-color: var(--primary); }
li.sel .item { border-color: var(--sun); box-shadow: 0 0 0 4px var(--sun-soft); }
.moves { display: flex; gap: 4px; }
.mv { width: 30px; height: 28px; border: 1px solid var(--line); background: var(--bg); color: var(--ink); border-radius: 8px; cursor: pointer; font-size: .75rem; }
.mv:disabled { opacity: .3; cursor: default; }
.end { font: 700 .85rem var(--font-body); color: var(--muted); }
.hint { font-size: .85rem; color: var(--muted); }
</style>
