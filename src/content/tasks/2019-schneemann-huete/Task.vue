<script setup lang="ts">
// The shared `place` format on a picture, with larger pieces (the original pieces are pictures that need room).
import Place from '../../../components/formats/Place.vue';
defineOptions({ inheritAttrs: false });
const emit = defineEmits<{ answer: [value: unknown] }>();
</script>

<template>
  <div class="big">
    <Place v-bind="$attrs" @answer="(v: unknown) => emit('answer', v)" />
  </div>
</template>

<style scoped>
.big :deep(.board) { container-type: inline-size; }
.big :deep(.on-pic .chip-item) { padding: 0; border-width: 1px; }
.big :deep(.on-pic .chip-item img) { max-width: 17.5cqw; max-height: 35cqw; }
.big :deep(.tray .chip-item img) { max-width: 90px; max-height: 150px; }
</style>
