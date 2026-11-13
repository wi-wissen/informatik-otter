<script setup lang="ts">
// Three 3x3 grids; the student draws one 3-Bomino in each. The answer is the sorted list of the
// shapes in a form that ignores position, rotation and reflection.
import { onMounted, ref } from 'vue';

const emit = defineEmits<{ answer: [value: string[]] }>();
const N = 3;
const grids = ref<boolean[][][]>(
  Array.from({ length: 3 }, () => Array.from({ length: N }, () => Array.from({ length: N }, () => false))),
);

function shape(grid: boolean[][]): string {
  const cells: [number, number][] = [];
  grid.forEach((row, r) => row.forEach((on, c) => { if (on) cells.push([r, c]); }));
  if (cells.length === 0) return '';
  const forms = [0, 1, 2, 3, 4, 5, 6, 7].map((t) => {
    const moved = cells.map(([r, c]) => {
      let [y, x] = [r, c];
      if (t & 4) x = -x;
      for (let i = 0; i < (t & 3); i++) [y, x] = [x, -y];
      return [y, x] as [number, number];
    });
    const minY = Math.min(...moved.map((m) => m[0]));
    const minX = Math.min(...moved.map((m) => m[1]));
    return moved.map(([y, x]) => [y - minY, x - minX]).sort((a, b) => a[0] - b[0] || a[1] - b[1]).map((m) => m.join(',')).join(';');
  });
  return forms.sort()[0];
}

function report() {
  emit('answer', grids.value.map(shape).sort());
}
onMounted(report);

function toggle(g: number, r: number, c: number) {
  grids.value = grids.value.map((grid, gi) => (gi === g ? grid.map((row, ri) => (ri === r ? row.map((v, ci) => (ci === c ? !v : v)) : row)) : grid));
  report();
}
function clear() {
  grids.value = grids.value.map((grid) => grid.map((row) => row.map(() => false)));
  report();
}
</script>

<template>
  <div class="bom">
    <div class="boards">
      <div v-for="(grid, g) in grids" :key="g" class="board" role="group" :aria-label="`Raster ${g + 1}`">
        <template v-for="(row, r) in grid" :key="r">
          <button v-for="(on, c) in row" :key="c" type="button" class="cell" :class="{ on }" :aria-pressed="on"
                  :aria-label="`Raster ${g + 1}, Zeile ${r + 1}, Spalte ${c + 1}`" @click="toggle(g, r, c)" />
        </template>
      </div>
    </div>
    <div class="bar"><span class="hint">Tippe Felder an, um sie zu färben oder wieder zu leeren.</span><button type="button" class="reset" @click="clear">Zurücksetzen</button></div>
  </div>
</template>

<style scoped>
.bom { display: grid; gap: 8px; }
.boards { display: flex; flex-wrap: wrap; gap: 18px; }
.board { display: grid; grid-template-columns: repeat(3, 44px); gap: 2px; background: var(--line); padding: 2px; border-radius: 8px; width: max-content; }
.cell { width: 44px; height: 44px; border: 0; padding: 0; cursor: pointer; background: var(--surface); }
.cell.on { background: var(--primary); }
.cell:focus-visible { outline: 3px solid var(--primary); outline-offset: -3px; }
.bar { display: flex; justify-content: space-between; gap: 8px; align-items: center; flex-wrap: wrap; }
.hint { font-size: .85rem; color: var(--muted); }
.reset { border: 1px solid var(--line); background: var(--surface); color: var(--ink); border-radius: 999px; padding: 4px 12px; cursor: pointer; font: inherit; font-size: .85rem; }
</style>
