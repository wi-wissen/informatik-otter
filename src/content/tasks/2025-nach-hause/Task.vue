<script setup lang="ts">
import { computed, ref } from 'vue';

type Spot = { id: string; x: number; y: number }; // x, y in percent of the picture
const props = defineProps<{
  image: string;
  alt: string;
  spots: Spot[];
  inventory: Record<string, number>; // arrows still available, e.g. { up: 2, right: 1 }
}>();
const emit = defineEmits<{ answer: [value: string] }>();

const dirs = Object.keys(props.inventory);
const names: Record<string, string> = { up: 'nach oben', right: 'nach rechts', left: 'nach links', down: 'nach unten' };
const glyph: Record<string, string> = { up: '↑', right: '→', left: '←', down: '↓' };
const placed = ref<Record<string, string>>({});

const left = computed(() => {
  const l = { ...props.inventory };
  for (const d of Object.values(placed.value)) l[d]--;
  return l;
});

function cycle(id: string) {
  const cur = placed.value[id];
  const order = [...dirs, ''];
  let i = order.indexOf(cur ?? '');
  const next = { ...placed.value };
  delete next[id];
  const l = { ...left.value };
  if (cur) l[cur]++;
  for (let k = 0; k < order.length; k++) {
    i = (i + 1) % order.length;
    const d = order[i];
    if (d === '' ) break;
    if (l[d] > 0) { next[id] = d; break; }
  }
  placed.value = next;
  report();
}
function report() {
  const v = Object.entries(placed.value).map(([id, d]) => `${id}:${d}`).sort().join(',');
  emit('answer', v);
}
function reset() { placed.value = {}; report(); }
</script>

<template>
  <div class="nh">
    <div class="stock" aria-live="polite">
      Übrige Pfeile:
      <span v-for="d in dirs" :key="d" class="tag">{{ glyph[d] ?? d }} × {{ left[d] }}</span>
    </div>
    <div class="map">
      <img :src="image" :alt="alt" />
      <button v-for="s in spots" :key="s.id" type="button" class="spot" :class="{ on: placed[s.id] }"
        :style="{ left: s.x + '%', top: s.y + '%' }"
        :aria-label="`Kreuzung ${s.id}: ${placed[s.id] ? 'Pfeil ' + names[placed[s.id]] : 'kein Pfeil'}`"
        @click="cycle(s.id)">{{ placed[s.id] ? glyph[placed[s.id]] : '' }}</button>
    </div>
    <div class="bar"><span class="hint">Tippe auf eine Kreuzung, um einen Pfeil zu legen. Nochmal tippen dreht oder entfernt ihn.</span>
      <button type="button" class="reset" @click="reset">Zurücksetzen</button></div>
  </div>
</template>

<style scoped>
.nh { display: grid; gap: 8px; }
.stock { font-size: .9rem; color: var(--muted); display: flex; gap: 8px; flex-wrap: wrap; align-items: center; }
.tag { border: 1px solid var(--line); background: var(--surface); color: var(--ink); border-radius: 999px; padding: 1px 10px; font-weight: 700; }
.map { position: relative; max-width: 560px; margin: 0 auto; }
.map img { display: block; width: 100%; height: auto; border-radius: 10px; }
.spot { position: absolute; transform: translate(-50%, -50%); width: 9%; aspect-ratio: 1; min-width: 28px; border-radius: 50%; border: 2px dashed var(--primary); background: transparent; color: var(--bad); font: 700 1.4rem/1 var(--font-body); cursor: pointer; padding: 0; }
.spot:hover { background: var(--primary-soft); }
.spot.on { border-style: solid; background: var(--surface); }
.bar { display: flex; justify-content: space-between; gap: 8px; flex-wrap: wrap; align-items: center; }
.hint { font-size: .85rem; color: var(--muted); }
.reset { border: 1px solid var(--line); background: var(--surface); color: var(--ink); border-radius: 999px; padding: 4px 12px; cursor: pointer; font: inherit; font-size: .85rem; }
</style>
