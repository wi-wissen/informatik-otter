<script setup lang="ts">
// Renders the visible part of an item: image and/or label.
defineProps<{ item: { id: string; label?: string; image?: string; alt?: string } }>();
</script>

<template>
  <span class="face">
    <img v-if="item.image" :src="item.image" :alt="item.alt ?? item.label ?? ''" draggable="false" />
    <span v-if="item.label" class="label">{{ item.label }}</span>
  </span>
</template>

<style scoped>
.face { display: inline-flex; flex-direction: column; align-items: center; gap: 4px; pointer-events: none; }
img { max-height: 110px; max-width: 100%; object-fit: contain; }
.face { max-width: 100%; }
.label { font-weight: 700; }
</style>
