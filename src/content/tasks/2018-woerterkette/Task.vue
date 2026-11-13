<script setup lang="ts">
// Build a word chain by tapping words: the next word must start with the last letter of the previous one,
// and every word is used at most once. The question is how long a chain can be at most, so the answer is
// the number typed below.
import { computed, ref } from 'vue';

const props = defineProps<{ words: string[] }>();
const emit = defineEmits<{ answer: [value: string] }>();

const chain = ref<string[]>([]);
const guess = ref('');
const last = computed(() => chain.value[chain.value.length - 1]);
const allowed = (w: string) => !chain.value.includes(w) && (!last.value || last.value.slice(-1) === w[0]);

function add(w: string) { if (allowed(w)) chain.value = [...chain.value, w]; }
function undo() { chain.value = chain.value.slice(0, -1); }
function clear() { chain.value = []; }
function report() { emit('answer', guess.value.trim()); }
</script>

<template>
  <div class="chain">
    <div class="words" role="group" aria-label="Wörter">
      <button v-for="w in words" :key="w" type="button" class="w" :class="{ used: chain.includes(w), ok: allowed(w) && chain.length > 0 }"
              :disabled="!allowed(w)" @click="add(w)">
        <b>{{ w[0] }}</b>{{ w.slice(1, -1) }}<b>{{ w.slice(-1) }}</b>
      </button>
    </div>
    <p class="mine" aria-live="polite"><strong>Deine Kette ({{ chain.length }}):</strong> {{ chain.length ? chain.join(' → ') : 'noch leer – tippe ein Wort an' }}</p>
    <div class="bar">
      <button type="button" class="btn secondary" :disabled="!chain.length" @click="undo">Letztes Wort entfernen</button>
      <button type="button" class="btn secondary" :disabled="!chain.length" @click="clear">Neu beginnen</button>
    </div>
    <label class="ans">Höchstens
      <input v-model="guess" type="text" inputmode="numeric" autocomplete="off" @input="report" /> Wörter
    </label>
  </div>
</template>

<style scoped>
.chain { display: grid; gap: 10px; max-width: 560px; }
.words { display: flex; flex-wrap: wrap; gap: 8px; }
.w { font: 500 1rem var(--font-body); padding: 6px 12px; border: 2px solid #c9a600; border-radius: 4px; background: #ffe97a; color: #10313a; cursor: pointer; }
.w b { text-decoration: underline; }
.w.ok { box-shadow: 0 0 0 3px var(--primary); }
.w.used { background: var(--sunk); border-color: var(--line); color: var(--muted); }
.w:disabled { cursor: default; }
.mine { margin: 0; font-size: .95rem; }
.bar { display: flex; flex-wrap: wrap; gap: 8px; }
.btn { border: 2px solid var(--line); border-radius: 999px; background: var(--surface); color: var(--ink); font: 700 .85rem var(--font-body); padding: 4px 14px; cursor: pointer; }
.btn:disabled { opacity: .5; cursor: default; }
.ans { display: flex; gap: 8px; align-items: center; flex-wrap: wrap; font-weight: 700; }
.ans input { width: 4.5em; font: inherit; padding: 6px 10px; border: 2px solid var(--line); border-radius: 8px; background: var(--surface); color: var(--ink); }
</style>
