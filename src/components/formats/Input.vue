<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{ kind?: 'number' | 'text'; placeholder?: string; prefix?: string; suffix?: string; caseSensitive?: boolean }>();
const emit = defineEmits<{ answer: [value: string] }>();
const value = ref('');
function update() { emit('answer', value.value); }
</script>

<template>
  <label class="inp">
    <span v-if="prefix">{{ prefix }}</span>
    <input v-model="value" :inputmode="kind === 'number' ? 'decimal' : 'text'" :placeholder="placeholder ?? 'Deine Antwort'"
           autocomplete="off" spellcheck="false" @input="update" />
    <span v-if="suffix">{{ suffix }}</span>
  </label>
</template>

<style scoped>
.inp { display: inline-flex; align-items: center; gap: 8px; font-weight: 700; }
input { font: 700 1.3rem var(--font-mono); padding: 10px 14px; border: 2px solid var(--line); border-radius: 12px; background: var(--surface); color: var(--ink); min-width: 0; width: 14ch; }
input:focus { outline: none; border-color: var(--primary); box-shadow: 0 0 0 4px var(--primary-soft); }
</style>
