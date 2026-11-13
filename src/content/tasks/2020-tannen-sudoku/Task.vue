<script setup lang="ts">
// The shared `place` format on the board picture. This wrapper checks the rules itself
// (every height once per row and column, all signs correct) and reports "ok" when they hold.
import Place from '../../../components/formats/Place.vue';
defineOptions({ inheritAttrs: false });
const emit = defineEmits<{ answer: [value: string] }>();

// signs: [row index, side, count] and [column index, side, count]
const CLUES = [
  { line: 'row', i: 0, from: 'start', n: 3 },
  { line: 'row', i: 1, from: 'end', n: 2 },
  { line: 'col', i: 0, from: 'start', n: 3 },
  { line: 'col', i: 0, from: 'end', n: 1 },
] as const;
const height = (id: string) => ({ s: 1, m: 2, l: 3 } as Record<string, number>)[id[0]];

function seen(line: number[], from: string) {
  const l = from === 'start' ? line : [...line].reverse();
  let max = 0, n = 0;
  for (const h of l) if (h > max) { max = h; n++; }
  return n;
}
function onAnswer(v: Record<string, string>) {
  const g: number[][] = [0, 1, 2].map((r) => [0, 1, 2].map((c) => (v[`z${r}${c}`] ? height(v[`z${r}${c}`]) : 0)));
  if (g.flat().every((x) => x === 0)) return emit('answer', '');
  const full = g.flat().every((x) => x > 0);
  const cols = [0, 1, 2].map((c) => g.map((row) => row[c]));
  const latin = [...g, ...cols].every((l) => new Set(l).size === 3 && !l.includes(0));
  const clues = CLUES.every((k) => seen(k.line === 'row' ? g[k.i] : cols[k.i], k.from) === k.n);
  emit('answer', full && latin && clues ? 'ok' : 'noch nicht');
}
</script>

<template>
  <div class="big">
    <Place v-bind="$attrs" @answer="onAnswer" />
  </div>
</template>

<style scoped>
.big :deep(.board) { container-type: inline-size; max-width: 520px; }
.big :deep(.on-pic .chip-item) { padding: 0; border: 0; background: transparent; }
.big :deep(.on-pic .chip-item img) { max-width: 14cqw; max-height: 17cqw; }
.big :deep(.tray .chip-item img) { max-width: 70px; max-height: 90px; }
</style>
