<script setup lang="ts">
// The shared `place` format on the flower box. This wrapper shows Peter's score and reports "ok"
// when the planting has the highest possible score and every colour is used.
import { ref } from 'vue';
import Place from '../../../components/formats/Place.vue';
defineOptions({ inheritAttrs: false });
const emit = defineEmits<{ answer: [value: string] }>();

const POINTS: Record<string, number> = { 'ry': 3, 'yr': 3, 'yo': 1, 'oy': 1 };
const score = (g: string[]) => {
  let s = 0;
  const at = (r: number, c: number) => g[r * 3 + c];
  for (let r = 0; r < 3; r++) for (let c = 0; c < 3; c++) {
    if (c < 2) s += POINTS[at(r, c) + at(r, c + 1)] ?? 0;
    if (r < 2) s += POINTS[at(r, c) + at(r + 1, c)] ?? 0;
  }
  return s;
};
// best score over all plantings with at most 5 flowers per colour that use every colour
function best() {
  let m = 0;
  const g: string[] = [];
  const left: Record<string, number> = { r: 5, y: 5, o: 5 };
  const rec = (i: number) => {
    if (i === 9) { if (g.includes('r') && g.includes('y') && g.includes('o')) m = Math.max(m, score(g)); return; }
    for (const k of ['r', 'y', 'o', '.']) {
      if (k !== '.') { if (!left[k]) continue; left[k]--; }
      g.push(k); rec(i + 1); g.pop();
      if (k !== '.') left[k]++;
    }
  };
  rec(0);
  return m;
}
const MAX = best();
const points = ref(0);
function onAnswer(v: Record<string, string>) {
  const g = Array.from({ length: 9 }, (_, i) => (v[`z${i}`] ? v[`z${i}`][0] : '.'));
  points.value = score(g);
  if (g.every((x) => x === '.')) return emit('answer', '');
  const all = ['r', 'y', 'o'].every((k) => g.includes(k));
  emit('answer', all && points.value === MAX ? 'ok' : 'noch nicht');
}
</script>

<template>
  <div class="big">
    <Place v-bind="$attrs" @answer="onAnswer" />
    <p class="score" role="status">Punkte: <strong>{{ points }}</strong></p>
  </div>
</template>

<style scoped>
.big { display: grid; gap: 8px; }
.big :deep(.board) { container-type: inline-size; max-width: 420px; }
.big :deep(.zone.on-pic) { border-radius: 50%; border-width: 1px; }
.big :deep(.on-pic .chip-item) { padding: 0; border: 0; background: transparent; }
.big :deep(.on-pic .chip-item img) { max-width: 17cqw; max-height: 17cqw; }
.big :deep(.tray .chip-item) { padding: 2px; }
.big :deep(.tray .chip-item img) { max-width: 44px; max-height: 44px; }
.score { font-size: 1.1rem; font-weight: 700; }
</style>
