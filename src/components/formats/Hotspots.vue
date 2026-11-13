<script setup lang="ts">
// Clickable spots on a picture. Each click moves a spot to its next state (e.g. "?" → "rechts" → "links").
import { onMounted, ref } from 'vue';

type Spot = { id: string; x: number; y: number; w?: number; h?: number; label?: string };
type State = { id: string; label?: string; image?: string };
const props = defineProps<{ background: string; width?: number; height?: number; spots: Spot[]; states: State[]; spotSize?: number }>();
const emit = defineEmits<{ answer: [value: Record<string, string>] }>();

const W = props.width ?? 400;
const H = props.height ?? 300;
const S = props.spotSize ?? 28;
const value = ref<Record<string, number>>(Object.fromEntries(props.spots.map((s) => [s.id, 0])));
function report() {
  const out: Record<string, string> = {};
  for (const s of props.spots) if (value.value[s.id] !== 0) out[s.id] = props.states[value.value[s.id]].id;
  emit('answer', out);
}
onMounted(report);
function step(id: string, d = 1) {
  const n = props.states.length;
  value.value = { ...value.value, [id]: (value.value[id] + d + n) % n };
  report();
}
const pct = (v: number, of: number) => `${(v / of) * 100}%`;
</script>

<template>
  <div class="hot">
    <div class="board" :style="{ aspectRatio: `${W} / ${H}`, width: `min(100%, 720px, calc(78vh * ${W / H}))` }">
      <img :src="background" alt="" draggable="false" />
      <button v-for="s in spots" :key="s.id" type="button" class="spot" :class="{ set: value[s.id] !== 0 }"
              :style="{ left: pct(s.x, W), top: pct(s.y, H), minWidth: s.w ? pct(s.w, W) : `${S}px`, minHeight: s.h ? pct(s.h, H) : `${S}px` }"
              :aria-label="`${s.label ?? s.id}: ${states[value[s.id]].label ?? states[value[s.id]].id}`"
              @click="step(s.id)" @contextmenu.prevent="step(s.id, -1)">
        <img v-if="states[value[s.id]].image" :src="states[value[s.id]].image" alt="" />
        <span v-else>{{ states[value[s.id]].label ?? '' }}</span>
      </button>
    </div>
    <p class="hint">Klicke auf eine Stelle, um sie umzuschalten ({{ states.map((s) => s.label ?? s.id).join(' → ') }}).</p>
  </div>
</template>

<style scoped>
.hot { display: grid; gap: 8px; }
.board { position: relative; margin-inline: auto; background: #fff; border-radius: 10px; overflow: hidden; }
.board > img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: contain; pointer-events: none; }
.spot { position: absolute; transform: translate(-50%, -50%); display: grid; place-items: center; padding: 2px 6px; border: 2px dashed var(--primary); border-radius: 999px; background: color-mix(in srgb, #fff 75%, transparent); color: #10313a; font: 700 .85rem var(--font-body); cursor: pointer; }
.spot.set { border-style: solid; border-color: #0a6f7d; background: #fff2c7; }
.spot img { max-width: 72px; max-height: 72px; width: auto; height: auto; }
.spot:focus-visible { outline: 3px solid var(--sun); }
.hint { font-size: .85rem; color: var(--muted); }
</style>
