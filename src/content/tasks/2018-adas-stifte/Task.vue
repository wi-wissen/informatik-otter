<script setup lang="ts">
// Ten pencils lie in a box, some tip up, some tip down. A range of neighbouring pencils can be flipped at once
// (try it out: tap one pencil, then another one, then "Umdrehen"). The question is how often Ada has to
// flip at least, so the answer is the number typed below.
import { ref } from 'vue';

const props = defineProps<{ colors: string[]; down: number[] }>();
const emit = defineEmits<{ answer: [value: string] }>();

const up = ref<boolean[]>(props.colors.map((_, i) => !props.down.includes(i)));
const sel = ref<[number, number] | null>(null);
const flips = ref(0);
const guess = ref('');

function tap(i: number) {
  if (!sel.value || sel.value[0] !== sel.value[1]) sel.value = [i, i];
  else sel.value = i === sel.value[0] ? sel.value : [Math.min(i, sel.value[0]), Math.max(i, sel.value[0])];
}
function flip() {
  if (!sel.value) return;
  const [a, b] = sel.value;
  up.value = up.value.map((v, i) => (i >= a && i <= b ? !v : v));
  flips.value++;
  sel.value = null;
}
function reset() {
  up.value = props.colors.map((_, i) => !props.down.includes(i));
  flips.value = 0;
  sel.value = null;
}
const inSel = (i: number) => !!sel.value && i >= sel.value[0] && i <= sel.value[1];
const done = () => up.value.every(Boolean);
function report() { emit('answer', guess.value.trim()); }
</script>

<template>
  <div class="pens">
    <div class="box" role="group" aria-label="Schachtel mit zehn Stiften">
      <button v-for="(c, i) in colors" :key="i" type="button" class="pen" :class="{ sel: inSel(i) }" :aria-pressed="inSel(i)"
              :aria-label="`Stift ${i + 1}: Spitze zeigt nach ${up[i] ? 'oben' : 'unten'}`" @click="tap(i)">
        <svg viewBox="0 0 30 100" :class="{ flipped: !up[i] }" aria-hidden="true">
          <rect x="3" y="26" width="24" height="72" :fill="c" /><rect x="3" y="26" width="24" height="3" fill="#fff" opacity=".45" />
          <path d="M3 26 L15 4 L27 26 Z" fill="#c9ad8f" /><path d="M11.5 12.5 L15 4 L18.5 12.5 Z" :fill="c" />
        </svg>
      </button>
    </div>
    <div class="bar">
      <button type="button" class="btn" :disabled="!sel" @click="flip">Umdrehen</button>
      <button type="button" class="btn secondary" @click="reset">Zurücksetzen</button>
      <span class="info" aria-live="polite">Umgedreht: {{ flips }}× {{ done() ? '· alle Stifte zeigen nach oben' : '' }}</span>
    </div>
    <label class="ans">Mindestens
      <input v-model="guess" type="text" inputmode="numeric" autocomplete="off" @input="report" /> mal
    </label>
  </div>
</template>

<style scoped>
.pens { display: grid; gap: 10px; max-width: 520px; }
.box { display: grid; grid-template-columns: repeat(10, 1fr); gap: 3px; padding: 8px; background: #dcdbc8; border: 2px solid #1b1b1b; border-radius: 10px; }
.pen { padding: 2px 0; border: 2px solid transparent; border-radius: 6px; background: none; cursor: pointer; line-height: 0; }
.pen svg { width: 100%; height: auto; transition: transform .2s; }
.pen svg.flipped { transform: rotate(180deg); }
.pen.sel { border-color: #e53935; background: rgba(229, 57, 53, .15); }
.bar { display: flex; flex-wrap: wrap; gap: 8px; align-items: center; }
.btn { border: 2px solid transparent; border-radius: 999px; background: var(--primary); color: var(--primary-ink); font: 700 .95rem var(--font-display); padding: 6px 16px; cursor: pointer; }
.btn.secondary { background: var(--surface); color: var(--ink); border-color: var(--line); }
.btn:disabled { opacity: .5; cursor: default; }
.info { font-size: .85rem; color: var(--muted); }
.ans { display: flex; gap: 8px; align-items: center; flex-wrap: wrap; font-weight: 700; }
.ans input { width: 4.5em; font: inherit; padding: 6px 10px; border: 2px solid var(--line); border-radius: 8px; background: var(--surface); color: var(--ink); }
</style>
