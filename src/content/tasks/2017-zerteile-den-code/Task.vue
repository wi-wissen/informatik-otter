<script setup lang="ts">
// A row of digits with a clickable gap between every two digits. Click a gap to cut the sequence there
// (click again to remove the cut). The answer is the cut sequence written with spaces, e.g. "1 21 1 ...".
import { computed, onMounted, ref } from 'vue';

const props = defineProps<{ digits: string }>();
const emit = defineEmits<{ answer: [value: string] }>();

const chars = props.digits.split('');
const cuts = ref<Set<number>>(new Set()); // cut after digit i
const parts = computed(() => {
  const out: string[] = [];
  let cur = '';
  chars.forEach((ch, i) => {
    cur += ch;
    if (cuts.value.has(i) || i === chars.length - 1) { out.push(cur); cur = ''; }
  });
  return out;
});
function report() { emit('answer', parts.value.join(' ')); }
onMounted(report);
function toggle(i: number) {
  const next = new Set(cuts.value);
  if (!next.delete(i)) next.add(i);
  cuts.value = next;
  report();
}
function reset() { cuts.value = new Set(); report(); }
</script>

<template>
  <div class="code">
    <div class="row" role="group" aria-label="Ziffernfolge. Zwischen zwei Ziffern kannst du einen Schnitt setzen.">
      <template v-for="(ch, i) in chars" :key="i">
        <span class="digit">{{ ch }}</span>
        <button v-if="i < chars.length - 1" type="button" class="gap" :class="{ cut: cuts.has(i) }" :aria-pressed="cuts.has(i)"
                :aria-label="`Schnitt zwischen Ziffer ${i + 1} und ${i + 2}`" @click="toggle(i)"><span class="bar" /></button>
      </template>
    </div>
    <p class="parts" aria-live="polite"><strong>Deine Codewörter:</strong> {{ parts.length > 1 ? parts.join(' | ') : 'noch nicht zerteilt' }}</p>
    <button type="button" class="reset" @click="reset">Alle Schnitte entfernen</button>
  </div>
</template>

<style scoped>
.code { display: grid; gap: 10px; justify-items: start; }
.row { display: flex; align-items: stretch; flex-wrap: wrap; row-gap: 8px; padding: 8px 4px; background: var(--sunk); border: 1px solid var(--line); border-radius: 12px; max-width: 100%; }
.digit { font: 600 1.6rem/1 var(--font-mono); padding: 8px 2px; min-width: 1.1ch; text-align: center; }
.gap { width: 16px; padding: 0; border: 0; background: none; cursor: pointer; display: grid; place-items: center; }
.bar { width: 0; height: 100%; border-left: 2px dotted var(--line); transition: border .1s; }
.gap:hover .bar, .gap:focus-visible .bar { border-left: 3px solid var(--primary); }
.gap.cut { width: 22px; }
.gap.cut .bar { border-left: 4px solid var(--primary); }
.gap:focus-visible { outline: 3px solid var(--sun); border-radius: 6px; }
.parts { margin: 0; font-size: .95rem; }
.reset { border: 1px solid var(--line); background: var(--surface); color: var(--ink); border-radius: 999px; padding: 4px 12px; cursor: pointer; font: inherit; font-size: .85rem; }
</style>
