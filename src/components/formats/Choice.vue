<script setup lang="ts">
import { ref } from 'vue';
import ItemFace from './ItemFace.vue';

type Item = { id: string; label?: string; image?: string; alt?: string };
const props = defineProps<{ options: Item[]; multiple?: boolean; columns?: number }>();
const emit = defineEmits<{ answer: [value: string | string[] | null] }>();

const picked = ref<string[]>([]);
function toggle(id: string) {
  if (props.multiple) {
    picked.value = picked.value.includes(id) ? picked.value.filter((x) => x !== id) : [...picked.value, id];
    emit('answer', [...picked.value].sort());
  } else {
    picked.value = [id];
    emit('answer', id);
  }
}
</script>

<template>
  <div class="choice" :style="columns ? { gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` } : undefined"
       :role="multiple ? 'group' : 'radiogroup'">
    <button v-for="(o, i) in options" :key="o.id" type="button" class="opt"
            :class="{ on: picked.includes(o.id) }"
            :role="multiple ? 'checkbox' : 'radio'" :aria-checked="picked.includes(o.id)"
            @click="toggle(o.id)">
      <span class="key">{{ String.fromCharCode(65 + i) }}</span>
      <ItemFace :item="o" />
    </button>
  </div>
</template>

<style scoped>
.choice { display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 10px; }
.opt { position: relative; display: grid; place-items: center; gap: 6px; min-height: 64px; padding: 14px 12px 12px;
  border: 2px solid var(--line); border-radius: 12px; background: var(--surface); color: var(--ink); font: inherit; cursor: pointer; }
.opt:hover { border-color: var(--primary); }
.opt.on { border-color: var(--primary); background: var(--primary-soft); box-shadow: 0 0 0 3px var(--primary-soft); }
.key { position: absolute; top: 6px; left: 8px; font: 700 .75rem var(--font-mono); color: var(--muted); }
</style>
