<script setup lang="ts">
import { computed, ref } from 'vue';

const props = defineProps<{ cols: number; rows: number; target: string }>();
const emit = defineEmits<{ answer: [value: string] }>();

// Rule i looks at the triple that is the 3-bit binary number (7 - i): rule 0 = black/black/black ... rule 7 = white/white/white.
const rules = ref<number[]>(Array(8).fill(0));
const triple = (i: number) => [(7 - i) >> 2 & 1, (7 - i) >> 1 & 1, (7 - i) & 1];

const grid = computed(() => {
  const rows: number[][] = [];
  let row = Array(props.cols).fill(0);
  row[Math.floor(props.cols / 2)] = 1;
  rows.push(row);
  for (let r = 1; r < props.rows; r++) {
    const prev = rows[r - 1];
    row = prev.map((c, x) => rules.value[7 - ((prev[x - 1] ?? 0) * 4 + c * 2 + (prev[x + 1] ?? 0))]);
    rows.push(row);
  }
  return rows;
});
const done = computed(() => grid.value[props.rows - 1].join('') === props.target);

function toggle(i: number) {
  rules.value = rules.value.map((v, k) => (k === i ? 1 - v : v));
  emit('answer', done.value ? 'ok' : 'nein');
}
const S = 14;
</script>

<template>
  <div class="ca">
    <div class="rules" role="group" aria-label="Die acht Regeln">
      <div v-for="(_, i) in rules" :key="i" class="rule">
        <div class="top"><span v-for="(t, k) in triple(i)" :key="k" :class="['cell', t ? 'b' : 'w']" /></div>
        <button type="button" :class="['cell', 'pick', rules[i] ? 'b' : 'w']" :aria-pressed="rules[i] === 1"
          :aria-label="`Regel ${i + 1}: Fliese darunter ist ${rules[i] ? 'schwarz' : 'weiß'}`" @click="toggle(i)" />
      </div>
    </div>
    <svg :viewBox="`0 0 ${cols * S} ${rows * S}`" class="field" role="img" aria-label="Das entstehende Fliesenmuster">
      <rect :width="cols * S" :height="rows * S" class="bg" />
      <template v-for="(row, y) in grid" :key="y">
        <rect v-for="(c, x) in row" :key="x" :x="x * S" :y="y * S" :width="S" :height="S" :class="c ? 'b' : 'w'" />
      </template>
    </svg>
    <p class="hint">Tippe auf die untere Fliese einer Regel, um sie zwischen weiß und schwarz zu wechseln.</p>
  </div>
</template>

<style scoped>
.ca { display: grid; gap: 10px; }
.rules { display: flex; flex-wrap: wrap; gap: 8px; }
.rule { display: grid; justify-items: center; gap: 0; padding: 6px; border-radius: 8px; background: var(--sun-soft); border: 1px solid var(--line); }
.top { display: flex; }
.cell { display: block; width: 22px; height: 22px; border: 1px solid var(--ink); }
.cell.b, .b { background: var(--ink); fill: var(--ink); }
.cell.w, .w { background: var(--surface); fill: var(--surface); }
.pick { padding: 0; cursor: pointer; margin-top: 0; }
.pick:hover, .pick:focus-visible { outline: 3px solid var(--primary); outline-offset: 1px; }
.field { width: 100%; max-width: 500px; border: 1px solid var(--line); }
.field .bg { fill: var(--surface); }
.field rect { stroke: var(--line); stroke-width: .5; }
.hint { margin: 0; font-size: .85rem; color: var(--muted); }
</style>
