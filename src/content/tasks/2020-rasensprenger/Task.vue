<script setup lang="ts">
// The shared `place` format on the garden picture (sprinklers can be used several times).
// This wrapper checks the goal itself: every flower is watered with as few sprinklers as possible.
import Place from '../../../components/formats/Place.vue';
defineOptions({ inheritAttrs: false });
const emit = defineEmits<{ answer: [value: string] }>();

const props = defineProps<{ flowers: string[]; minimum: number }>();
function onAnswer(v: Record<string, string>) {
  const spots = Object.keys(v).map((z) => [Number(z[1]), Number(z[2])]);
  if (!spots.length) return emit('answer', '');
  const watered = props.flowers.every((f) => {
    const [fr, fc] = [Number(f[0]), Number(f[1])];
    return spots.some(([r, c]) => Math.abs(r - fr) <= 1 && Math.abs(c - fc) <= 1);
  });
  emit('answer', watered && spots.length === props.minimum ? 'ok' : 'noch nicht');
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
.big :deep(.on-pic .chip-item img) { max-width: 14cqw; max-height: 14cqw; }
.big :deep(.tray .chip-item img) { max-width: 70px; max-height: 70px; }
</style>
