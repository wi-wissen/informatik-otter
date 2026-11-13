<script setup lang="ts">
// Two fixed input cards and one output card. The student clicks the output cells until each shows
// the right moon: untouched (blue) -> Vollmond -> Neumond -> Vollmond ...
import { onMounted, ref } from 'vue';

const props = defineProps<{ a: string[]; b: string[] }>();
const emit = defineEmits<{ answer: [value: (number | null)[][]] }>();

const toGrid = (rows: string[]) => rows.map((r) => [...r].map((c) => c === '1'));
const A = toGrid(props.a);
const B = toGrid(props.b);
// like in the booklet, the first output cell is already filled in
const out = ref<(number | null)[][]>(A.map((row, r) => row.map((_, c) => (r === 0 && c === 0 ? 1 : null))));

function report() { emit('answer', out.value.map((row) => [...row])); }
onMounted(report);
function click(r: number, c: number) {
  const v = out.value[r][c];
  out.value = out.value.map((row, ri) => (ri === r ? row.map((x, ci) => (ci === c ? (v === 1 ? 0 : 1) : x)) : row));
  report();
}
const name = (v: number | null) => (v === null ? 'noch leer' : v === 1 ? 'Vollmond' : 'Neumond');
</script>

<template>
  <div class="moon">
    <div class="cards">
      <div class="card" role="img" aria-label="Erste Eingabekarte">
        <div v-for="(row, r) in A" :key="r" class="row">
          <span v-for="(on, c) in row" :key="c" class="cell" :aria-label="on ? 'Vollmond' : 'Neumond'"><i v-if="on" class="m" /></span>
        </div>
      </div>
      <span class="op" aria-hidden="true">+</span>
      <div class="card" role="img" aria-label="Zweite Eingabekarte">
        <div v-for="(row, r) in B" :key="r" class="row">
          <span v-for="(on, c) in row" :key="c" class="cell" :aria-label="on ? 'Vollmond' : 'Neumond'"><i v-if="on" class="m" /></span>
        </div>
      </div>
      <span class="op" aria-hidden="true">→</span>
      <div class="card out" role="group" aria-label="Ausgabekarte">
        <div v-for="(row, r) in out" :key="r" class="row">
          <button v-for="(v, c) in row" :key="c" type="button" class="cell btn-cell" :class="{ unset: v === null }"
                  :aria-label="`Ausgabekarte, Zeile ${r + 1}, Spalte ${c + 1}: ${name(v)}`" @click="click(r, c)">
            <i v-if="v === 1" class="m" />
          </button>
        </div>
      </div>
    </div>
    <p class="hint">Klicke auf die Felder der Ausgabekarte rechts. Dunkel ist Neumond, hell ist Vollmond.</p>
  </div>
</template>

<style scoped>
.moon { display: grid; gap: 8px; }
.cards { display: flex; flex-wrap: wrap; gap: 12px; align-items: center; }
.card { display: grid; grid-template-rows: repeat(3, 1fr); gap: 2px; padding: 2px; background: #1b1820; border-radius: 4px; }
.row { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2px; }
.cell { width: clamp(30px, 9vw, 44px); aspect-ratio: 1; display: grid; place-items: center; background: #2b2830; border: 0; padding: 0; }
.btn-cell { cursor: pointer; }
.btn-cell.unset { background: #9be7f2; }
.btn-cell:focus-visible { outline: 3px solid var(--primary); outline-offset: -3px; }
.m { width: 74%; aspect-ratio: 1; border-radius: 50%; background: radial-gradient(circle at 35% 35%, #efe4d0, #b8a98f); box-shadow: inset -3px -3px 5px rgba(0, 0, 0, .25); }
.op { font-size: 1.8rem; font-weight: 800; color: var(--ink); }
.hint { font-size: .85rem; color: var(--muted); }
</style>
