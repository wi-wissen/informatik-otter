<script setup lang="ts">
// The QB code is turned as a whole (in steps of a quarter turn). The answer is the code as it looks after turning:
// a 3x3 matrix with 1 = black, 0 = white.
import { computed, onMounted, ref } from 'vue';

const emit = defineEmits<{ answer: [value: number[][]] }>();
const start = [[0, 1, 0], [1, 0, 0], [0, 0, 1]];
const quarter = ref(0); // number of quarter turns clockwise (can grow beyond 3, shown with a smooth rotation)

const turned = computed(() => {
  let g = start;
  for (let i = 0; i < ((quarter.value % 4) + 4) % 4; i++) g = g[0].map((_, c) => g.map((row) => row[c]).reverse());
  return g;
});
function report() { emit('answer', turned.value.map((r) => [...r])); }
onMounted(report);
function turn(d: number) { quarter.value += d; report(); }
function reset() { quarter.value = 0; report(); }
</script>

<template>
  <div class="qb">
    <div class="stage">
      <div class="grid" :style="{ transform: `rotate(${quarter * 90}deg)` }" role="img" aria-label="QB-Code mit 3 mal 3 Feldern">
        <template v-for="(row, r) in start" :key="r"><span v-for="(v, c) in row" :key="c" class="cell" :class="{ on: v === 1 }" /></template>
      </div>
    </div>
    <div class="bar">
      <button type="button" class="btn secondary" @click="turn(-1)">↺ Nach links drehen</button>
      <button type="button" class="btn secondary" @click="turn(1)">↻ Nach rechts drehen</button>
      <button type="button" class="reset" @click="reset">Zurücksetzen</button>
    </div>
    <p class="hint">Der QB-Code hat jetzt die schwarzen Felder: {{ turned.flatMap((row, r) => row.map((v, c) => v ? `Zeile ${r + 1}, Spalte ${c + 1}` : null)).filter(Boolean).join('; ') }}.</p>
  </div>
</template>

<style scoped>
.qb { display: grid; gap: 12px; justify-items: start; }
.stage { padding: 22px; }
.grid { display: grid; grid-template-columns: repeat(3, 56px); gap: 0; border: 2px solid var(--ink); width: max-content; transition: transform .35s ease; }
.cell { width: 56px; height: 56px; border: 1px solid var(--ink); background: var(--surface); box-sizing: border-box; }
.cell.on { background: var(--ink); }
.bar { display: flex; flex-wrap: wrap; gap: 10px; align-items: center; }
.reset { border: 1px solid var(--line); background: var(--surface); color: var(--ink); border-radius: 999px; padding: 4px 12px; cursor: pointer; font: inherit; font-size: .85rem; }
.hint { margin: 0; font-size: .85rem; color: var(--muted); }
@media (prefers-reduced-motion: reduce) { .grid { transition: none; } }
</style>
