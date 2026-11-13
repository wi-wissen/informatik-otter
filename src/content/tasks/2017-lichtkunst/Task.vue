<script setup lang="ts">
// A building with switches for every floor and every window column. Switching a line on or off
// sets all windows of that line. The answer is the resulting pattern of lights (top floor first).
import { computed, reactive } from 'vue';

const props = defineProps<{ floors: number; columns: string[]; doors: [number, number][] }>();
const emit = defineEmits<{ answer: [value: unknown] }>();

const floorIds = computed(() => Array.from({ length: props.floors }, (_, i) => props.floors - 1 - i));
const lights = reactive<number[][]>(Array.from({ length: props.floors }, () => props.columns.map(() => 0)));
const switches = reactive<Record<string, boolean>>({});

function isDoor(floor: number, col: number) {
  return props.doors.some(([f, c]) => f === floor && c === col);
}
function toggle(kind: 'row' | 'col', index: number) {
  const key = `${kind}${index}`;
  const on = !switches[key];
  switches[key] = on;
  for (let f = 0; f < props.floors; f++) {
    for (let c = 0; c < props.columns.length; c++) {
      if (isDoor(f, c)) continue;
      if ((kind === 'row' && f === index) || (kind === 'col' && c === index)) lights[f][c] = on ? 1 : 0;
    }
  }
  report();
}
function reset() {
  for (const k of Object.keys(switches)) switches[k] = false;
  lights.forEach((r) => r.fill(0));
  report();
}
function report() {
  emit('answer', floorIds.value.map((f) => [...lights[f]]));
}
</script>

<template>
  <div class="light">
    <div class="grid" :style="{ gridTemplateColumns: `repeat(${columns.length}, 44px) 44px` }">
      <button v-for="(c, ci) in columns" :key="c" type="button" class="sw" :class="{ on: switches['col' + ci] }"
              :aria-pressed="!!switches['col' + ci]" :aria-label="`Fensterspalte ${c}`" @click="toggle('col', ci)">{{ c }}</button>
      <span />
      <template v-for="f in floorIds" :key="f">
        <template v-for="(c, ci) in columns" :key="c">
          <span v-if="isDoor(f, ci)" class="door" aria-hidden="true" />
          <span v-else class="win" :class="{ on: lights[f][ci] }"
                :role="'img'" :aria-label="`Stockwerk ${f}, Spalte ${c}: Licht ${lights[f][ci] ? 'an' : 'aus'}`" />
        </template>
        <button type="button" class="sw" :class="{ on: switches['row' + f] }" :aria-pressed="!!switches['row' + f]"
                :aria-label="`Stockwerk ${f}`" @click="toggle('row', f)">{{ f }}</button>
      </template>
    </div>
    <button type="button" class="reset" @click="reset">Alle Lichter aus</button>
  </div>
</template>

<style scoped>
.light { display: grid; gap: 12px; justify-items: start; }
.grid { display: grid; gap: 8px; padding: 12px; border-radius: 12px; background: var(--sunk); border: 1px solid var(--line); }
.win { height: 44px; border-radius: 8px; border: 2px solid var(--line); background: var(--primary); }
.win.on { background: var(--sun); }
.door { height: 44px; border-radius: 6px 6px 0 0; background: var(--muted); opacity: .6; }
.sw { height: 44px; border-radius: 8px; border: 2px solid var(--line); background: var(--surface); color: var(--ink);
  font: 700 1rem var(--font-mono); cursor: pointer; }
.sw.on { border-color: var(--primary); background: var(--primary-soft); }
.sw:hover, .sw:focus-visible { border-color: var(--primary); }
.reset { border: 0; background: none; color: var(--primary); font: inherit; text-decoration: underline; cursor: pointer; padding: 0; }
</style>
