<script setup lang="ts">
// Ausmalbild: paint every area with one of three patterns. Areas that touch must not get the same pattern.
// The answer is "ok" when all areas are painted and no two touching areas share a pattern.
import { computed, onMounted, ref } from 'vue';
import shape from './shape.json';

type Pattern = { id: string; name: string };
defineProps<{ patterns: Pattern[] }>();
const emit = defineEmits<{ answer: [value: unknown] }>();

const painted = ref<Record<string, number>>({});
const brush = ref(0);

const valid = computed(() => shape.regions.every((r) => painted.value[r.id] !== undefined)
  && shape.adjacent.every(([a, b]) => painted.value[a] !== painted.value[b]));
function report() {
  const any = Object.keys(painted.value).length > 0;
  emit('answer', valid.value ? 'ok' : any ? 'offen' : null);
}
onMounted(report);

function paint(id: string) {
  const next = { ...painted.value };
  if (next[id] === brush.value) delete next[id]; else next[id] = brush.value;
  painted.value = next;
  report();
}
function reset() { painted.value = {}; report(); }
const fillOf = (id: string) => painted.value[id] === undefined ? '#fff' : `url(#pat${painted.value[id]})`;
const label = (r: { id: string; name: string }, ps: Pattern[]) =>
  `${r.name}: ${painted.value[r.id] === undefined ? 'nicht ausgemalt' : ps[painted.value[r.id]].name}`;
</script>

<template>
  <div class="paint">
    <div class="swatches" role="radiogroup" aria-label="Muster">
      <button v-for="(p, i) in patterns" :key="p.id" type="button" role="radio" class="swatch" :class="{ on: brush === i }"
              :aria-checked="brush === i" :aria-label="p.name" @click="brush = i">
        <svg viewBox="0 0 40 40" aria-hidden="true"><circle cx="20" cy="20" r="18" :fill="`url(#pat${i})`" stroke="#000" stroke-width="2" /></svg>
      </button>
      <button type="button" class="reset" @click="reset">Alles löschen</button>
    </div>
    <svg class="picture" :viewBox="shape.viewBox" role="group" aria-label="Das Bild zum Ausmalen">
      <defs>
        <pattern id="pat0" width="12" height="12" patternUnits="userSpaceOnUse">
          <rect width="12" height="12" fill="#5cbf3f" />
          <path d="M1 5 L5 5 L3 1Z M7 11 L11 11 L9 7Z" fill="#9ae07a" />
        </pattern>
        <pattern id="pat1" width="14" height="8" patternUnits="userSpaceOnUse">
          <rect width="14" height="8" fill="#2f64c4" />
          <path d="M0 4 Q3.5 0 7 4 T14 4" fill="none" stroke="#7ba5ec" stroke-width="1.6" />
        </pattern>
        <pattern id="pat2" width="10" height="10" patternUnits="userSpaceOnUse">
          <rect width="10" height="10" fill="#fff36b" />
          <circle cx="2.5" cy="2.5" r="1.3" fill="#fffbc0" /><circle cx="7.5" cy="7.5" r="1.3" fill="#fffbc0" />
        </pattern>
      </defs>
      <path v-for="r in shape.regions" :key="r.id" :d="r.d" :fill="fillOf(r.id)" class="region" role="button" tabindex="0"
            :aria-label="label(r, patterns)" @click="paint(r.id)" @keydown.enter.prevent="paint(r.id)" @keydown.space.prevent="paint(r.id)" />
      <path :d="shape.outline" fill="#000" class="outline" />
    </svg>
    <p class="hint">Wähle ein Muster und tippe dann die Flächen an, die damit ausgemalt werden sollen. Tippst du eine Fläche mit demselben Muster noch einmal an, wird sie wieder weiß.</p>
  </div>
</template>

<style scoped>
.paint { display: grid; gap: 10px; }
.swatches { display: flex; gap: 10px; align-items: center; flex-wrap: wrap; }
.swatch { width: 56px; height: 56px; padding: 4px; border: 3px solid var(--line); border-radius: 12px; background: #fff; cursor: pointer; }
.swatch.on { border-color: var(--primary); box-shadow: 0 0 0 3px var(--primary-soft); }
.swatch svg { width: 100%; height: 100%; display: block; }
.reset { margin-left: auto; border: 1px solid var(--line); background: var(--surface); color: var(--ink); border-radius: 999px; padding: 4px 12px; cursor: pointer; font: inherit; font-size: .85rem; }
.picture { width: 100%; max-width: 640px; margin-inline: auto; background: #fff; border-radius: 10px; }
.region { cursor: pointer; outline: none; }
.region:hover { opacity: .85; }
.region:focus-visible { stroke: var(--sun); stroke-width: 3; }
.outline { pointer-events: none; }
.hint { margin: 0; font-size: .85rem; color: var(--muted); }
</style>
