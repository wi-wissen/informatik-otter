<script setup lang="ts">
import { ref } from 'vue';
import ItemFace from './ItemFace.vue';

type Item = { id: string; label?: string; image?: string; alt?: string };
const props = defineProps<{ left: Item[]; right: Item[] }>();
const emit = defineEmits<{ answer: [value: Record<string, string>] }>();

const pairs = ref<Record<string, string>>({});
function pick(l: string, r: string) {
  pairs.value = { ...pairs.value, [l]: r };
  emit('answer', { ...pairs.value });
}
</script>

<template>
  <div class="match">
    <div v-for="l in left" :key="l.id" class="row">
      <div class="left"><ItemFace :item="l" /></div>
      <span class="arrow" aria-hidden="true">→</span>
      <div class="opts" role="radiogroup" :aria-label="`Zuordnung für ${l.label ?? l.id}`">
        <button v-for="r in right" :key="r.id" type="button" class="opt" role="radio"
                :aria-checked="pairs[l.id] === r.id" :class="{ on: pairs[l.id] === r.id }" @click="pick(l.id, r.id)">
          <ItemFace :item="r" />
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.match { display: grid; gap: 10px; }
.row { display: grid; grid-template-columns: minmax(80px, auto) auto 1fr; gap: 10px; align-items: center; padding: 8px; border: 1px solid var(--line); border-radius: 12px; background: var(--surface); }
.left { display: grid; place-items: center; }
.arrow { color: var(--muted); font-weight: 700; }
.opts { display: flex; flex-wrap: wrap; gap: 6px; }
.opt { border: 2px solid var(--line); background: var(--bg); border-radius: 10px; padding: 6px 10px; cursor: pointer; color: var(--ink); font: inherit; }
.opt:hover { border-color: var(--primary); }
.opt.on { border-color: var(--primary); background: var(--primary-soft); }
@media (max-width: 520px) { .row { grid-template-columns: 1fr; } .arrow { display: none; } }
</style>
