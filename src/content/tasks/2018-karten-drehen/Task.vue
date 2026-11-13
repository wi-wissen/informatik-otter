<script setup lang="ts">
// A row of cards. "Spielzug" carries out one move of the game (right to left: a covered card is uncovered and
// the move ends; an uncovered card is turned back). The question is how many cards are uncovered after
// 16 moves, so the answer is the number typed below.
import { ref } from 'vue';

const props = defineProps<{ count: number }>();
const emit = defineEmits<{ answer: [value: string] }>();

const cards = ref<boolean[]>(Array(props.count).fill(false)); // true = uncovered
const moves = ref(0);
const guess = ref('');

function play() {
  const next = [...cards.value];
  for (let i = next.length - 1; i >= 0; i--) {
    if (!next[i]) { next[i] = true; break; }
    next[i] = false;
  }
  cards.value = next;
  moves.value++;
}
function reset() { cards.value = Array(props.count).fill(false); moves.value = 0; }
function report() { emit('answer', guess.value.trim()); }
</script>

<template>
  <div class="cards">
    <div class="row" role="img" :aria-label="`${count} Karten, ${cards.filter(Boolean).length} aufgedeckt`">
      <span v-for="(up, i) in cards" :key="i" class="card" :class="{ up }">
        <svg v-if="up" viewBox="0 0 30 44" aria-hidden="true">
          <circle cx="15" cy="21" r="8" fill="#8a5a3b" /><circle cx="9" cy="14" r="3" fill="#8a5a3b" /><circle cx="21" cy="14" r="3" fill="#8a5a3b" />
          <rect x="12" y="25" width="6" height="4" rx="1" fill="#fff" /><circle cx="12" cy="20" r="1" fill="#222" /><circle cx="18" cy="20" r="1" fill="#222" />
        </svg>
      </span>
    </div>
    <div class="bar">
      <button type="button" class="btn" @click="play">Spielzug</button>
      <button type="button" class="btn secondary" @click="reset">Neu beginnen</button>
      <span class="info" aria-live="polite">Spielzüge: {{ moves }} · aufgedeckt: {{ cards.filter(Boolean).length }}</span>
    </div>
    <label class="ans">Nach 16 Spielzügen sind
      <input v-model="guess" type="text" inputmode="numeric" autocomplete="off" @input="report" /> Karten aufgedeckt.
    </label>
  </div>
</template>

<style scoped>
.cards { display: grid; gap: 10px; max-width: 560px; }
.row { display: grid; grid-template-columns: repeat(16, 1fr); gap: 3px; }
.card { aspect-ratio: 30 / 44; border-radius: 4px; border: 2px solid #0b7a7a; background: #0b8585; display: grid; place-items: center; }
.card.up { background: #fff; }
.card svg { width: 90%; height: 90%; }
.bar { display: flex; flex-wrap: wrap; gap: 8px; align-items: center; }
.btn { border: 2px solid transparent; border-radius: 999px; background: var(--primary); color: var(--primary-ink); font: 700 .95rem var(--font-display); padding: 6px 16px; cursor: pointer; }
.btn.secondary { background: var(--surface); color: var(--ink); border-color: var(--line); }
.info { font-size: .85rem; color: var(--muted); }
.ans { display: flex; gap: 8px; align-items: center; flex-wrap: wrap; font-weight: 700; }
.ans input { width: 4.5em; font: inherit; padding: 6px 10px; border: 2px solid var(--line); border-radius: 8px; background: var(--surface); color: var(--ink); }
</style>
