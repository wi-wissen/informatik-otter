<script setup lang="ts">
import { onMounted, ref } from 'vue';

const props = defineProps<{ rows: number; cols: number; palette: string[]; initial?: number[][]; locked?: boolean[][] }>();
const emit = defineEmits<{ answer: [value: number[][]] }>();

const grid = ref<number[][]>(
  Array.from({ length: props.rows }, (_, r) => Array.from({ length: props.cols }, (_, c) => props.initial?.[r]?.[c] ?? 0)),
);
const color = ref(1 % props.palette.length);
const report = () => emit('answer', grid.value.map((row) => [...row]));
onMounted(report);

function paint(r: number, c: number) {
  if (props.locked?.[r]?.[c]) return;
  const next = grid.value.map((row) => [...row]);
  next[r][c] = next[r][c] === color.value ? 0 : color.value;
  grid.value = next;
  report();
}
</script>

<template>
  <div class="pix">
    <div class="palette" role="radiogroup" aria-label="Farbe wählen">
      <button v-for="(p, i) in palette" :key="i" type="button" role="radio" :aria-checked="color === i"
              :class="{ on: color === i }" :style="{ background: p }" :aria-label="`Farbe ${i + 1}`" @click="color = i" />
    </div>
    <div class="grid" :style="{ gridTemplateColumns: `repeat(${cols}, minmax(0, 40px))` }">
      <template v-for="(row, r) in grid" :key="r">
        <button v-for="(v, c) in row" :key="`${r}-${c}`" type="button" class="cell" :class="{ locked: locked?.[r]?.[c] }"
                :style="{ background: palette[v] }" :aria-label="`Zeile ${r + 1}, Spalte ${c + 1}`" @click="paint(r, c)" />
      </template>
    </div>
  </div>
</template>

<style scoped>
.pix { display: grid; gap: 10px; min-width: 0; overflow-x: auto; }
.palette { display: flex; gap: 8px; }
.palette button { width: 34px; height: 34px; border-radius: 50%; border: 3px solid var(--line); cursor: pointer; }
.palette button.on { border-color: var(--primary); box-shadow: 0 0 0 3px var(--primary-soft); }
.grid { display: grid; gap: 2px; background: var(--line); padding: 2px; border-radius: 8px; justify-content: start; width: max-content; }
.cell { aspect-ratio: 1; width: 100%; min-width: 26px; border: 0; cursor: pointer; padding: 0; }
.cell.locked { cursor: default; outline: 2px dashed rgba(0,0,0,.25); outline-offset: -4px; }
</style>
