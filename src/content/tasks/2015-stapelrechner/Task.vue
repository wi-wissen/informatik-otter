<script setup lang="ts">
// Input field for the description of the calculation plus the stack calculator of the booklet to try it out.
// The answer is "ok" when the entered description uses exactly the numbers and signs of 4 * (8 + 3) - 2 and gives 42.
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';

const emit = defineEmits<{ answer: [value: string] }>();
const text = ref('');

const tokens = computed(() => text.value.replace(/[–−]/g, '-').trim().split(/\s+/).filter(Boolean));
const valid = (t: string) => /^(\d+|[-+*/])$/.test(t);

function evaluate(toks: string[]): number | null {
  const st: number[] = [];
  for (const t of toks) {
    if (!valid(t)) return null;
    if (/^\d+$/.test(t)) { st.push(Number(t)); continue; }
    if (st.length < 2) return null;
    const b = st.pop()!, a = st.pop()!;
    st.push(t === '+' ? a + b : t === '-' ? a - b : t === '*' ? a * b : a / b);
  }
  return st.length === 1 && Number.isFinite(st[0]) ? st[0] : null;
}
const wanted = ['2', '3', '4', '8', '*', '+', '-'].sort().join(' ');
function isRight(toks: string[]) { return [...toks].sort().join(' ') === wanted && evaluate(toks) === 42; }
function report() { emit('answer', text.value.trim() === '' ? '' : isRight(tokens.value) ? 'ok' : text.value.trim()); }
onMounted(report);
function onInput() { reset(); report(); }

// --- simulator ---
const step = ref(0);        // number of tokens already put on the stack
const stack = ref<(number | string)[]>([]);
const note = ref('');
let timer: ReturnType<typeof setInterval> | null = null;
const belt = computed(() => tokens.value.slice(step.value));

function stop() { if (timer) { clearInterval(timer); timer = null; } }
function reset() { stop(); step.value = 0; stack.value = []; note.value = ''; }
function next(): boolean {
  const toks = tokens.value;
  if (step.value >= toks.length) { stop(); return false; }
  const t = toks[step.value];
  if (!valid(t)) { note.value = `„${t}“ ist keine Zahl und kein Rechenzeichen (+, –, * oder /).`; stop(); return false; }
  step.value++;
  if (/^\d+$/.test(t)) { stack.value = [...stack.value, Number(t)]; note.value = ''; return true; }
  const st = [...stack.value] as number[];
  if (st.length < 2) { stack.value = [...stack.value, t]; note.value = 'Für das Rechenzeichen liegen nicht genug Zahlen auf dem Stapel.'; stop(); return false; }
  const b = st.pop()!, a = st.pop()!;
  st.push(t === '+' ? a + b : t === '-' ? a - b : t === '*' ? a * b : a / b);
  stack.value = st; note.value = '';
  return true;
}
function go() { stop(); if (step.value >= tokens.value.length) reset(); timer = setInterval(() => { if (!next()) stop(); }, 700); }
onBeforeUnmount(stop);
const done = computed(() => step.value > 0 && step.value >= tokens.value.length && !note.value);
</script>

<template>
  <div class="sr">
    <div class="sim" aria-label="Stapelrechner zum Ausprobieren">
      <div class="belt"><span class="lbl">Fließband</span>
        <span v-for="(t, i) in belt" :key="`${step}-${i}`" class="box">{{ t }}</span>
        <span v-if="!belt.length" class="none">leer</span></div>
      <div class="stack"><span class="lbl">Stapel</span>
        <span v-for="(v, i) in stack" :key="i" class="box on">{{ v }}</span>
        <span v-if="!stack.length" class="none">leer</span></div>
      <p class="note" role="status">{{ note || (done ? `Der Stapelrechner ist fertig. Ergebnis: ${stack[stack.length - 1]}` : '') }}</p>
    </div>
    <div class="ctrl">
      <input v-model="text" class="in" inputmode="text" autocomplete="off" spellcheck="false" aria-label="Beschreibung für den Stapelrechner" placeholder="z. B. 2 3 +" @input="onInput" />
      <button type="button" class="b" @click="go">Los!</button>
      <button type="button" class="b" @click="next">Nächster Schritt!</button>
      <button type="button" class="b" @click="stop">Stop!</button>
      <button type="button" class="b" @click="reset">Von vorne!</button>
    </div>
  </div>
</template>

<style scoped>
.sr { display: grid; gap: 12px; }
.sim { border: 2px solid var(--line); border-radius: 12px; padding: 12px; display: grid; gap: 10px; background: var(--sunk); }
.belt, .stack { display: flex; flex-wrap: wrap; gap: 6px; align-items: center; min-height: 40px; }
.lbl { width: 5.5rem; font-size: .8rem; color: var(--muted); font-weight: 700; }
.box { min-width: 36px; padding: 6px 10px; border: 2px solid var(--ink); border-radius: 6px; text-align: center; font: 700 1rem var(--font-mono); background: var(--sun-soft); color: var(--ink); }
.box.on { background: var(--primary-soft); }
.none { color: var(--muted); font-size: .85rem; }
.note { margin: 0; min-height: 1.4em; font-size: .9rem; }
.ctrl { display: flex; flex-wrap: wrap; gap: 8px; align-items: center; }
.in { font: 700 1.2rem var(--font-mono); padding: 8px 12px; border: 2px solid var(--line); border-radius: 12px; background: var(--surface); color: var(--ink); width: 22ch; max-width: 100%; min-width: 0; }
.in:focus { outline: none; border-color: var(--primary); box-shadow: 0 0 0 4px var(--primary-soft); }
.b { border: 2px solid var(--line); background: var(--surface); color: var(--ink); border-radius: 999px; padding: 6px 14px; cursor: pointer; font: inherit; }
.b:hover { border-color: var(--primary); }
.b:focus-visible { outline: 3px solid var(--primary); outline-offset: 2px; }
</style>
