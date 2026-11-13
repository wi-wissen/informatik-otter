<script setup lang="ts">
import { computed, ref } from 'vue';

const props = defineProps<{ count: number; on: number[] }>();
const emit = defineEmits<{ answer: [value: string] }>();

// Lamp i (1-based) sits on a ring; switch i sits outside next to it and toggles lamps i-1, i and i+1.
const R = 100, SR = 138, LR = 17;
const ids = Array.from({ length: props.count }, (_, k) => k + 1);
const angle = (i: number) => ((i - 1) / props.count) * 2 * Math.PI - Math.PI / 2;
const pos = (i: number, r: number) => ({ x: Math.cos(angle(i)) * r, y: Math.sin(angle(i)) * r });
const wrap = (i: number) => ((i - 1 + props.count) % props.count) + 1;
const links = (i: number) => [wrap(i - 1), i, wrap(i + 1)];

const lit = ref<boolean[]>(ids.map((i) => props.on.includes(i)));
const presses = ref(0);
const allOn = computed(() => lit.value.every(Boolean));

function press(i: number) {
  const next = [...lit.value];
  for (const l of links(i)) next[l - 1] = !next[l - 1];
  lit.value = next;
  presses.value++;
  emit('answer', next.every(Boolean) ? 'ok' : 'nein');
}
function reset() {
  lit.value = ids.map((i) => props.on.includes(i));
  presses.value = 0;
  emit('answer', '');
}
</script>

<template>
  <div class="lights">
    <svg viewBox="-170 -170 340 340" class="svg" role="group" aria-label="Sieben Leuchten und sieben Schalter">
      <g v-for="i in ids" :key="`w${i}`">
        <line v-for="l in links(i)" :key="l" :x1="pos(i, SR).x" :y1="pos(i, SR).y" :x2="pos(l, R).x" :y2="pos(l, R).y" class="wire" />
      </g>
      <g v-for="i in ids" :key="`l${i}`" class="lamp">
        <circle :cx="pos(i, R).x" :cy="pos(i, R).y" :r="LR" :class="lit[i - 1] ? 'on' : 'off'" />
        <text :x="pos(i, R).x" :y="pos(i, R).y" text-anchor="middle" dominant-baseline="central">{{ i }}</text>
      </g>
      <g v-for="i in ids" :key="`s${i}`" class="switch" tabindex="0" role="button"
        :aria-label="`Schalter ${i}: schaltet die Leuchten ${links(i).join(', ')} um`"
        @click="press(i)" @keydown.enter.prevent="press(i)" @keydown.space.prevent="press(i)">
        <circle :cx="pos(i, SR).x" :cy="pos(i, SR).y" r="17" class="hit" />
        <rect :x="pos(i, SR).x - 12" :y="pos(i, SR).y - 8" width="24" height="16" rx="4" />
      </g>
    </svg>
    <div class="bar">
      <span class="hint">Tippe auf einen Schalter (kleines Rechteck außen), um die drei mit ihm verbundenen Leuchten umzuschalten. Schalter: {{ presses }} Mal gedrückt.</span>
      <button type="button" class="reset" @click="reset">Zurücksetzen</button>
    </div>
    <p v-if="allOn" class="done">Alle Leuchten sind an.</p>
  </div>
</template>

<style scoped>
.lights { display: grid; gap: 8px; }
.svg { width: 100%; max-width: 380px; margin: 0 auto; display: block; }
.wire { stroke: var(--muted); stroke-width: 1.5; }
.lamp circle { stroke: var(--ink); stroke-width: 2; }
.lamp circle.on { fill: var(--sun); }
.lamp circle.off { fill: var(--primary); }
.lamp text { font: 700 16px var(--font-body); fill: var(--ink); stroke: var(--surface); stroke-width: 3px; paint-order: stroke; pointer-events: none; }
.switch { cursor: pointer; outline: none; }
.switch .hit { fill: transparent; }
.switch rect { fill: var(--bad-soft); stroke: var(--bad); stroke-width: 2; }
.switch:hover rect, .switch:focus-visible rect { fill: var(--sun-soft); stroke: var(--ink); stroke-width: 3; }
.bar { display: flex; justify-content: space-between; gap: 8px; flex-wrap: wrap; align-items: center; }
.hint { font-size: .85rem; color: var(--muted); }
.done { margin: 0; font-weight: 700; color: var(--good); }
.reset { border: 1px solid var(--line); background: var(--surface); color: var(--ink); border-radius: 999px; padding: 4px 12px; cursor: pointer; font: inherit; font-size: .85rem; }
</style>
