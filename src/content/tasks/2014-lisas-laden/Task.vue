<script setup lang="ts">
// Drag barrels onto the two boats (the pieces and the drag-and-drop come from the shared Place component).
// This wrapper adds the weight rules of the task: it shows the load of each boat and emits "ok" when
// neither boat is overloaded and the total is the maximum possible.
import { computed, ref } from 'vue';
import Place from '../../../components/formats/Place.vue';

type Barrel = { id: string; image: string; alt: string; kg: number };
const props = defineProps<{
  barrels: Barrel[]; zones: { id: string; label: string; x: number; y: number; w: number; h: number; capacity: number }[];
  background: string; width: number; height: number; limit: number; best: number;
}>();
const emit = defineEmits<{ answer: [value: string] }>();

const kg = Object.fromEntries(props.barrels.map((b) => [b.id, b.kg]));
const placed = ref<Record<string, string | string[]>>({});
const loads = computed(() => props.zones.map((z) => {
  const v = placed.value[z.id];
  const ids = v === undefined ? [] : Array.isArray(v) ? v : [v];
  return { id: z.id, label: z.label, kg: ids.reduce((s, id) => s + kg[id], 0), n: ids.length };
}));
const total = computed(() => loads.value.reduce((s, l) => s + l.kg, 0));

function onPlace(v: Record<string, string | string[]>) {
  placed.value = v;
  const ls = loads.value;
  const n = ls.reduce((s, l) => s + l.n, 0);
  const ok = ls.every((l) => l.kg <= props.limit) && total.value === props.best;
  emit('answer', n === 0 ? '' : ok ? 'ok' : String(total.value));
}
</script>

<template>
  <div class="lisas">
    <Place :items="barrels" :zones="zones" :background="background" :width="width" :height="height" tray-label="Fässer im Hafen" @answer="onPlace" />
    <ul class="loads" aria-live="polite">
      <li v-for="l in loads" :key="l.id" :class="{ over: l.kg > limit }">
        <strong>{{ l.label }}:</strong> {{ l.kg }} kg von höchstens {{ limit }} kg<span v-if="l.kg > limit"> – zu schwer!</span>
      </li>
      <li><strong>Zusammen:</strong> {{ total }} kg</li>
    </ul>
  </div>
</template>

<style scoped>
.lisas { display: grid; gap: 10px; }
.loads { list-style: none; margin: 0; padding: 0; display: flex; flex-wrap: wrap; gap: 6px 20px; font-size: .95rem; }
.loads .over { color: var(--bad); }
</style>
