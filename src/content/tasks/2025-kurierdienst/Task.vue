<script setup lang="ts">
// The three pictures next to each other: secret image, foil 1 (given) and foil 2 (to be built).
// Click a pixel of foil 2 to switch it between dark (dense hatching) and light (loose hatching).
import { onMounted, ref } from 'vue';

const props = defineProps<{ rows: number; cols: number; secret: string; foil1: string; secretAlt: string; foil1Alt: string }>();
const emit = defineEmits<{ answer: [value: number[][]] }>();

const grid = ref<number[][]>(Array.from({ length: props.rows }, () => Array.from({ length: props.cols }, () => 0)));
const report = () => emit('answer', grid.value.map((row) => [...row]));
onMounted(report);

function flip(r: number, c: number) {
  grid.value = grid.value.map((row, i) => (i === r ? row.map((v, j) => (j === c ? 1 - v : v)) : row));
  report();
}
function reset() { grid.value = grid.value.map((row) => row.map(() => 0)); report(); }
</script>

<template>
  <div class="foil">
    <div class="panels">
      <figure><figcaption>Geheimes Bild</figcaption><img :src="secret" :alt="secretAlt" draggable="false" /></figure>
      <figure><figcaption>Folie 1</figcaption><img :src="foil1" :alt="foil1Alt" draggable="false" /></figure>
      <figure>
        <figcaption>Folie 2</figcaption>
        <div class="grid" :style="{ gridTemplateColumns: `repeat(${cols}, 1fr)` }" role="group" aria-label="Folie 2">
          <template v-for="(row, r) in grid" :key="r">
            <button v-for="(v, c) in row" :key="`${r}-${c}`" type="button" class="px" :class="v ? 'dark' : 'light'"
                    :aria-pressed="v === 1" :aria-label="`Zeile ${r + 1}, Spalte ${c + 1}: ${v ? 'dunkel' : 'hell'}`" @click="flip(r, c)" />
          </template>
        </div>
      </figure>
    </div>
    <div class="bar"><span class="hint">Klicke ein Pixel an, um es dunkel (dicht schraffiert) oder hell (locker schraffiert) zu machen.</span>
      <button type="button" class="reset" @click="reset">Zurücksetzen</button></div>
  </div>
</template>

<style scoped>
.foil { display: grid; gap: 10px; }
.panels { display: grid; grid-template-columns: repeat(3, minmax(0, 170px)); gap: 14px; justify-content: start; }
@media (max-width: 560px) { .panels { grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 8px; } }
figure { margin: 0; display: grid; gap: 6px; align-content: start; }
figcaption { font-weight: 700; font-size: .9rem; text-align: center; }
img { width: 100%; height: auto; display: block; background: #fff; border: 1px solid var(--ink); }
/* black hatching on a white foil: the picture itself, not a theme colour */
.grid { display: grid; gap: 0; aspect-ratio: 1; border: 1px solid var(--ink); background: #fff; }
.px { border: 0; padding: 0; cursor: pointer; background-color: #fff; outline-offset: -3px; }
.px.dark { background-image: repeating-linear-gradient(-60deg, #000 0 3px, #fff 3px 5px); }
.px.light { background-image: repeating-linear-gradient(-60deg, #000 0 1px, #fff 1px 6px); }
.px:hover { outline: 2px solid var(--primary); }
.px:focus-visible { outline: 3px solid var(--sun); }
.bar { display: flex; justify-content: space-between; gap: 8px; flex-wrap: wrap; align-items: center; }
.hint { font-size: .85rem; color: var(--muted); }
.reset { border: 1px solid var(--line); background: var(--surface); color: var(--ink); border-radius: 999px; padding: 4px 12px; cursor: pointer; font: inherit; font-size: .85rem; }
</style>
