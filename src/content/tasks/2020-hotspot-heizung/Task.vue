<script setup lang="ts">
// The shared `place` format on the picture of the bathroom (4 hotspots). This wrapper simulates
// how the heat spreads (to all neighbours incl. diagonals, one step per minute) and reports "ok"
// when all tiles are warm after 2 minutes.
import Place from '../../../components/formats/Place.vue';
defineOptions({ inheritAttrs: false });
const emit = defineEmits<{ answer: [value: string] }>();
const props = defineProps<{ tiles: string[]; minutes: number }>();

const pos = (id: string) => id.slice(1).split('c').map(Number) as [number, number];
function onAnswer(v: Record<string, string>) {
  const sources = Object.keys(v);
  if (!sources.length) return emit('answer', '');
  const dist = new Map<string, number>(sources.map((s) => [s, 0]));
  const queue = [...sources];
  const all = new Set(props.tiles);
  while (queue.length) {
    const cur = queue.shift()!;
    const [r, c] = pos(cur);
    for (let dr = -1; dr <= 1; dr++) for (let dc = -1; dc <= 1; dc++) {
      const id = `r${r + dr}c${c + dc}`;
      if (all.has(id) && !dist.has(id)) { dist.set(id, dist.get(cur)! + 1); queue.push(id); }
    }
  }
  const ok = props.tiles.every((t) => (dist.get(t) ?? 99) <= props.minutes);
  emit('answer', ok ? 'ok' : 'noch nicht');
}
</script>

<template>
  <div class="big">
    <Place v-bind="$attrs" @answer="onAnswer" />
  </div>
</template>

<style scoped>
.big :deep(.board) { container-type: inline-size; }
.big :deep(.zone.on-pic) { border-width: 1px; border-radius: 4px; }
.big :deep(.on-pic .chip-item) { padding: 0; border: 0; background: transparent; }
.big :deep(.on-pic .chip-item img) { max-width: 6cqw; max-height: 6cqw; }
.big :deep(.tray .chip-item img) { max-width: 56px; max-height: 56px; }
</style>
