<script setup lang="ts">
// A picture with clickable spots; every click on a spot switches it to the next state.
import { reactive } from 'vue';

const props = defineProps<{
  image: string;
  alt: string;
  spots: { id: string; x: number; y: number }[]; // x, y in percent of the picture
  states: { id: string; label: string }[];
}>();
const emit = defineEmits<{ answer: [value: unknown] }>();

const chosen = reactive<Record<string, string>>({});

function cycle(id: string) {
  const i = props.states.findIndex((s) => s.id === chosen[id]);
  if (i + 1 >= props.states.length) delete chosen[id];
  else chosen[id] = props.states[i + 1].id;
  emit('answer', { ...chosen });
}
function label(id: string) {
  return props.states.find((s) => s.id === chosen[id])?.label ?? '?';
}
</script>

<template>
  <div class="wrap">
    <div class="stage">
    <img :src="image" :alt="alt" draggable="false" />
    <button v-for="s in spots" :key="s.id" type="button" class="spot" :class="{ set: chosen[s.id] }"
            :style="{ left: s.x + '%', top: s.y + '%' }"
            :aria-label="`Markierung ${s.id}: ${label(s.id) === '?' ? 'noch nicht gewählt' : label(s.id)}`"
            @click="cycle(s.id)">{{ label(s.id) }}</button>
    </div>
    <p class="hint">Klicke auf ein Fragezeichen, bis die gewünschte Markierung erscheint.</p>
  </div>
</template>

<style scoped>
.wrap { max-width: 560px; }
.stage { position: relative; }
img { display: block; width: 100%; height: auto; }
.spot { position: absolute; transform: translate(-50%, -50%); min-width: 34px; min-height: 34px; padding: 2px 6px;
  border: 2px solid var(--primary); border-radius: 8px; background: var(--surface); color: var(--ink);
  font: 700 .8rem var(--font-mono); cursor: pointer; }
.spot.set { background: var(--primary-soft); }
.spot:hover, .spot:focus-visible { box-shadow: 0 0 0 3px var(--primary-soft); }
.hint { margin: 8px 0 0; color: var(--muted); font-size: .85rem; }
</style>
