<script setup lang="ts">
// Four cards; click a card to turn it over (as often as you like). The answer is the set of cards that are turned over.
import { onMounted, ref } from 'vue';

const emit = defineEmits<{ answer: [value: string[]] }>();
const cards = [
  { id: 'e', front: 'E', back: '4' },
  { id: 'v', front: 'V', back: '5' },
  { id: '2', front: '2', back: 'K' },
  { id: '7', front: '7', back: 'R' },
];
const flipped = ref<Record<string, boolean>>({});
function report() { emit('answer', cards.filter((c) => flipped.value[c.id]).map((c) => c.id).sort()); }
onMounted(report);
function flip(id: string) { flipped.value = { ...flipped.value, [id]: !flipped.value[id] }; report(); }
function reset() { flipped.value = {}; report(); }
</script>

<template>
  <div class="cards">
    <div class="row">
      <button v-for="c in cards" :key="c.id" type="button" class="card" :class="{ back: flipped[c.id] }"
              :aria-pressed="!!flipped[c.id]"
              :aria-label="flipped[c.id] ? `Karte ${c.front}, umgedreht: Rückseite ${c.back}. Antippen dreht zurück` : `Karte ${c.front}. Antippen dreht um`"
              @click="flip(c.id)">
        <span class="glyph" aria-hidden="true">{{ flipped[c.id] ? c.back : c.front }}</span>
      </button>
    </div>
    <div class="bar">
      <span class="hint">Klicke auf Karten, um sie umzudrehen. Du kannst beliebig oft klicken.</span>
      <button type="button" class="reset" @click="reset">Alle zurückdrehen</button>
    </div>
  </div>
</template>

<style scoped>
.cards { display: grid; gap: 10px; }
.row { display: flex; flex-wrap: wrap; gap: 12px; }
.card { width: 84px; height: 120px; display: grid; place-items: center; border: 3px solid var(--line); border-radius: 12px; background: var(--surface); color: var(--ink); cursor: pointer; padding: 0; font: inherit; }
.card:hover { border-color: var(--primary); }
.card.back { background: var(--ink); color: var(--surface); }
.card:focus-visible { outline: 3px solid var(--sun); outline-offset: 2px; }
.glyph { font: 700 4rem/1 var(--font-body); }
.bar { display: flex; justify-content: space-between; gap: 8px; align-items: center; flex-wrap: wrap; }
.hint { font-size: .85rem; color: var(--muted); }
.reset { border: 1px solid var(--line); background: var(--surface); color: var(--ink); border-radius: 999px; padding: 4px 12px; cursor: pointer; font: inherit; font-size: .85rem; }
</style>
