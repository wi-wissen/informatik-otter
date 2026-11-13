<script setup lang="ts">
// Candles for `days` Sundays: on the n-th Sunday n candles burn. Click a candle to light it or put it out.
// The last Sunday is already given. Valid when every row has the right number of lit candles
// and every candle was lit equally often (reports "ok").
import { computed, onMounted, ref } from 'vue';

const props = defineProps<{ days: number; on: string; off: string }>();
const emit = defineEmits<{ answer: [value: string] }>();

const grid = ref<boolean[][]>(Array.from({ length: props.days }, (_, r) => Array.from({ length: props.days }, () => r === props.days - 1)));
const total = (props.days * (props.days + 1)) / 2;
const each = total / props.days;
const rowCount = (r: number) => grid.value[r].filter(Boolean).length;
const colCount = (c: number) => grid.value.filter((row) => row[c]).length;
const rowsOk = computed(() => grid.value.every((_, r) => rowCount(r) === r + 1));
const colsOk = computed(() => Array.from({ length: props.days }, (_, c) => colCount(c) === each).every(Boolean));

function report() { emit('answer', rowsOk.value && colsOk.value ? 'ok' : grid.value.map((row) => row.map((v) => (v ? 1 : 0)).join('')).join('/')); }
onMounted(report);
function toggle(r: number, c: number) {
  if (r === props.days - 1) return;
  grid.value = grid.value.map((row, i) => (i === r ? row.map((v, j) => (j === c ? !v : v)) : row));
  report();
}
function reset() {
  grid.value = grid.value.map((row, r) => row.map(() => r === props.days - 1));
  report();
}
</script>

<template>
  <div class="candles">
    <div v-for="(row, r) in grid" :key="r" class="row">
      <span class="day">{{ r + 1 }}. Sonntag</span>
      <div class="cs">
        <button v-for="(lit, c) in row" :key="c" type="button" class="candle" :class="{ locked: r === days - 1 }"
                :aria-pressed="lit" :disabled="r === days - 1"
                :aria-label="`${r + 1}. Sonntag, Kerze ${c + 1}: ${lit ? 'brennt' : 'brennt nicht'}`" @click="toggle(r, c)">
          <img :src="lit ? on : off" alt="" draggable="false" />
        </button>
      </div>
    </div>
    <div class="bar"><span class="hint">Klicke auf eine Kerze, um sie anzuzünden oder wieder zu löschen.</span>
      <button type="button" class="reset" @click="reset">Zurücksetzen</button></div>
  </div>
</template>

<style scoped>
.candles { display: grid; gap: 6px; max-width: 460px; }
.row { display: grid; grid-template-columns: 6.5em 1fr; align-items: end; gap: 8px; padding: 2px 8px; border-radius: 10px; background: #fff; }
.day { font-weight: 600; color: #10313a; padding-bottom: 10px; white-space: nowrap; }
.cs { display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); gap: 4px; }
.candle { padding: 0; border: 2px solid transparent; border-radius: 8px; background: transparent; cursor: pointer; }
.candle:hover:not(:disabled) { border-color: var(--primary); }
.candle:focus-visible { outline: 3px solid var(--sun); }
.candle:disabled { cursor: default; }
.candle img { width: 100%; height: auto; display: block; }
.bar { display: flex; justify-content: space-between; gap: 8px; flex-wrap: wrap; align-items: center; }
.hint { font-size: .85rem; color: var(--muted); }
.reset { border: 1px solid var(--line); background: var(--surface); color: var(--ink); border-radius: 999px; padding: 4px 12px; cursor: pointer; font: inherit; font-size: .85rem; }
</style>
