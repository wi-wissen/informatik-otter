<script setup lang="ts">
// Three vessels (4, 3 and 1 litre). The student picks pours and puts them in order (at most four); "Ausführen" shows
// the vessels after every pour. The answer is the list of pour ids.
import { computed, onMounted, ref } from 'vue';

const emit = defineEmits<{ answer: [value: string[]] }>();
const caps = [4, 3, 1];
const pours = [
  { id: 's43', from: 0, to: 1 }, { id: 's41', from: 0, to: 2 },
  { id: 's34', from: 1, to: 0 }, { id: 's31', from: 1, to: 2 },
  { id: 's14', from: 2, to: 0 }, { id: 's13', from: 2, to: 1 },
];
const MAX = 4;
const byId = Object.fromEntries(pours.map((p) => [p.id, p]));
const lab = (id: string) => `${caps[byId[id].from]} → ${caps[byId[id].to]}`;

const seq = ref<string[]>([]);
const ran = ref(false);

const states = computed(() => {
  const out: number[][] = [[4, 0, 0]];
  for (const id of seq.value) {
    const s = [...out[out.length - 1]];
    const { from, to } = byId[id];
    const amount = Math.min(s[from], caps[to] - s[to]);
    s[from] -= amount; s[to] += amount;
    out.push(s);
  }
  return out;
});
const last = computed(() => states.value[states.value.length - 1]);
const fair = computed(() => last.value[0] === last.value[1] + last.value[2]);

function report() { emit('answer', [...seq.value]); }
onMounted(report);
function add(id: string) { if (seq.value.length >= MAX) return; seq.value = [...seq.value, id]; ran.value = false; report(); }
function undo() { seq.value = seq.value.slice(0, -1); ran.value = false; report(); }
function clear() { seq.value = []; ran.value = false; report(); }
const level = (v: number, cap: number) => (v / cap);
</script>

<template>
  <div class="fg">
    <div class="cols">
      <div>
        <p class="cap">Wähle die Umschüttungen …</p>
        <div class="list" role="group" aria-label="Umschüttungen">
          <button v-for="p in pours" :key="p.id" type="button" class="pour" :disabled="seq.length >= MAX" @click="add(p.id)">{{ lab(p.id) }}</button>
        </div>
      </div>
      <div>
        <p class="cap">… und bringe sie in die richtige Reihenfolge.</p>
        <ol class="slots" aria-label="Deine Umschüttungen">
          <li v-for="i in MAX" :key="i" class="slot" :class="{ filled: !!seq[i - 1] }">{{ seq[i - 1] ? lab(seq[i - 1]) : '' }}</li>
        </ol>
        <div class="bar"><button type="button" class="small" :disabled="!seq.length" @click="undo">Letzte löschen</button>
          <button type="button" class="small" :disabled="!seq.length" @click="clear">Alle löschen</button></div>
      </div>
      <div>
        <p class="cap">Klicke auf „Ausführen“, um das Ergebnis zu sehen:</p>
        <div class="steps" aria-live="polite">
          <div v-for="(s, i) in (ran ? states : [states[0]])" :key="i" class="state">
            <svg viewBox="0 0 120 100" role="img" :aria-label="`${ran && i > 0 ? `Nach ${i}. Umschüttung` : 'Anfang'}: Gefäß 4 enthält ${s[0]}, Gefäß 3 enthält ${s[1]}, Gefäß 1 enthält ${s[2]} Liter`">
              <g v-for="(c, j) in caps" :key="j" :transform="`translate(${8 + j * 38} 0)`">
                <rect x="0" :y="90 - c * 20 * level(s[j], c)" width="30" :height="c * 20 * level(s[j], c)" class="water" />
                <path :d="`M0 ${90 - c * 20} V90 H30 V${90 - c * 20}`" class="glass" />
                <text x="15" y="99" text-anchor="middle" class="num">{{ c }}</text>
              </g>
            </svg>
            <span class="stl">{{ ran && i > 0 ? lab(seq[i - 1]) : 'Anfang' }}</span>
          </div>
        </div>
        <button type="button" class="run" :disabled="!seq.length" @click="ran = true">Ausführen</button>
        <p v-if="ran" class="res" :class="{ good: fair }">{{ fair ? 'Hamid und Kazim haben gleich viel Wasser.' : `Hamid hat ${last[0]} Liter, Kazim hat ${last[1] + last[2]} Liter.` }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.fg { display: grid; gap: 12px; }
.cols { display: flex; flex-wrap: wrap; gap: 24px; align-items: flex-start; }
.cap { margin: 0 0 6px; font-size: .9rem; color: var(--muted); max-width: 16rem; }
.list { display: grid; gap: 4px; width: 8.5rem; }
.pour { border: 2px solid var(--line); background: var(--surface); color: var(--ink); border-radius: 6px; padding: 5px 10px; font: 700 1rem var(--font-mono); cursor: pointer; }
.pour:hover:not(:disabled) { border-color: var(--primary); }
.pour:disabled { opacity: .5; cursor: default; }
.slots { list-style: none; margin: 0 0 8px; padding: 0; width: 8.5rem; border: 2px solid var(--ink); }
.slot { height: 2.1rem; display: flex; align-items: center; padding: 0 10px; font: 700 1rem var(--font-mono); border-top: 1px solid var(--ink); background: var(--sunk); }
.slot:first-child { border-top: 0; }
.slot.filled { background: var(--primary-soft); }
.steps { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 8px; }
.state { display: grid; justify-items: center; }
.state svg { width: 120px; height: 100px; }
.water { fill: var(--otter-water); opacity: .75; }
.glass { fill: none; stroke: var(--ink); stroke-width: 2; }
.num { fill: var(--ink); font: 700 9px var(--font-mono); }
.stl { font: .75rem var(--font-mono); color: var(--muted); }
.run, .small { border: 1px solid var(--line); background: var(--surface); color: var(--ink); border-radius: 999px; padding: 5px 16px; cursor: pointer; font: inherit; font-size: .9rem; }
.run:disabled, .small:disabled { opacity: .5; cursor: default; }
.bar { display: flex; gap: 8px; flex-wrap: wrap; }
.res { margin: 8px 0 0; font-weight: 700; }
.res.good { color: var(--good); }
.pour:focus-visible, .run:focus-visible, .small:focus-visible { outline: 3px solid var(--primary); outline-offset: 2px; }
</style>
