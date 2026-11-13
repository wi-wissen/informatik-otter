<script setup lang="ts">
// Complete the equation: drag "Vater" or "Mutter" into the three gaps (or tap a word, then tap a gap).
// The words can be used several times. Tap a filled gap to empty it.
import { onMounted, ref } from 'vue';

const props = defineProps<{ left: string; right: string; words: { id: string; label: string }[]; gaps: number }>();
const emit = defineEmits<{ answer: [value: string[]] }>();

const gaps = ref<(string | null)[]>(Array.from({ length: props.gaps }, () => null));
const selected = ref<string | null>(null);
const label = (id: string) => props.words.find((w) => w.id === id)!.label;

function report() { emit('answer', gaps.value.every((g) => g) ? gaps.value.map(String) : []); }
onMounted(report);

function put(i: number, id: string) {
  gaps.value = gaps.value.map((g, j) => (j === i ? id : g));
  selected.value = null;
  report();
}
function clear(i: number) { gaps.value = gaps.value.map((g, j) => (j === i ? null : g)); report(); }
function tapGap(i: number) {
  if (selected.value) put(i, selected.value);
  else if (gaps.value[i]) clear(i);
}
function tapWord(id: string) { selected.value = selected.value === id ? null : id; }
function dragStart(e: DragEvent, id: string) { e.dataTransfer?.setData('text/plain', id); selected.value = id; }
function drop(e: DragEvent, i: number) {
  e.preventDefault();
  const id = e.dataTransfer?.getData('text/plain');
  if (id && props.words.some((w) => w.id === id)) put(i, id);
}
function reset() { gaps.value = gaps.value.map(() => null); selected.value = null; report(); }
</script>

<template>
  <div class="eq">
    <div class="words" role="group" aria-label="Wörter für die Lücken">
      <button v-for="w in words" :key="w.id" type="button" class="word" :class="[w.id, { sel: selected === w.id }]"
              draggable="true" :aria-pressed="selected === w.id" @click="tapWord(w.id)" @dragstart="dragStart($event, w.id)">{{ w.label }}</button>
    </div>
    <div class="line" aria-label="Die Gleichung">
      <span class="fixed">{{ left }}</span>
      <span class="eqs" aria-hidden="true">=</span>
      <template v-for="(g, i) in gaps" :key="i">
        <button type="button" class="gap" :class="[g ?? 'empty', { target: !!selected }]"
                :aria-label="g ? `Lücke ${i + 1}: ${label(g)}, antippen zum Leeren` : `Lücke ${i + 1}: leer`"
                @click="tapGap(i)" @dragover.prevent @drop="drop($event, i)">{{ g ? label(g) : '' }}</button>
        <span class="fixed" aria-hidden="true">(</span>
      </template>
      <span class="fixed">{{ right }}</span>
      <span class="fixed" aria-hidden="true">{{ ')'.repeat(gaps.length) }}</span>
    </div>
    <div class="bar"><span class="hint">Ziehe die Wörter in die Lücken, oder tippe erst ein Wort und dann eine Lücke an.</span>
      <button type="button" class="reset" @click="reset">Zurücksetzen</button></div>
  </div>
</template>

<style scoped>
.eq { display: grid; gap: 14px; }
.words { display: flex; gap: 12px; }
.word, .gap { font: 700 1rem var(--font-body); border-radius: 8px; border: 2px solid transparent; padding: 4px 14px; min-width: 5.2em; color: #10313a; cursor: pointer; }
.word { cursor: grab; }
/* blue = Vater, pink = Mutter: the colours of the booklet's word tiles */
.word.vater, .gap.vater { background: #b5d6f5; }
.word.mutter, .gap.mutter { background: #f7b6dd; }
.gap.empty { background: var(--line); border-style: dashed; border-color: var(--muted); min-height: 2.1em; }
.gap.target { border-color: var(--sun); }
.sel { border-color: var(--sun); box-shadow: 0 0 0 3px var(--sun-soft); }
.word:focus-visible, .gap:focus-visible { outline: 3px solid var(--primary); }
.line { display: flex; flex-wrap: wrap; align-items: center; gap: 6px; font: 600 1.05rem var(--font-mono); padding: 14px; border: 1px solid var(--line); border-radius: 12px; background: var(--surface); color: var(--ink); }
.fixed { white-space: nowrap; }
.eqs { padding: 0 4px; }
.bar { display: flex; justify-content: space-between; gap: 8px; flex-wrap: wrap; align-items: center; }
.hint { font-size: .85rem; color: var(--muted); }
.reset { border: 1px solid var(--line); background: var(--surface); color: var(--ink); border-radius: 999px; padding: 4px 12px; cursor: pointer; font: inherit; font-size: .85rem; }
</style>
