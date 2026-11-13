<script setup lang="ts">
// The shared `hotspots` format with larger state pictures (the beavers need room on the canal picture).
import Hotspots from '../../../components/formats/Hotspots.vue';
defineOptions({ inheritAttrs: false });
const emit = defineEmits<{ answer: [value: unknown] }>();
</script>

<template>
  <div class="big">
    <Hotspots v-bind="$attrs" @answer="(v: unknown) => emit('answer', v)" />
  </div>
</template>

<style scoped>
.big :deep(.board) { container-type: inline-size; }
.big :deep(.spot) { padding: 0; }
.big :deep(.spot img) { max-width: 11.5cqw; max-height: 13.5cqw; }
</style>
