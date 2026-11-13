<script setup lang="ts">
import { ref } from 'vue';

type Road = { id: string; x: number; y: number };
const props = defineProps<{ image: string; alt?: string; roads: Road[] }>();
const emit = defineEmits<{ answer: [value: unknown] }>();

// Cycle: not set -> not passable -> passable -> unknown -> not set
const order = ['', 'no', 'ok', 'q'] as const;
const names: Record<string, string> = { '': 'noch nicht festgelegt', no: 'nicht befahrbar', ok: 'befahrbar', q: 'nicht sicher zu sagen' };
const state = ref<Record<string, string>>(Object.fromEntries(props.roads.map((r) => [r.id, ''])));

function next(id: string) {
  const cur = order.indexOf(state.value[id] as (typeof order)[number]);
  state.value = { ...state.value, [id]: order[(cur + 1) % order.length] };
  emit('answer', { ...state.value });
}
function reset() {
  state.value = Object.fromEntries(props.roads.map((r) => [r.id, '']));
  emit('answer', null);
}
const symbol: Record<string, string> = { '': '', no: '–', ok: '✓', q: '?' };
</script>

<template>
  <div class="sos">
    <ul class="legend">
      <li><span class="mark no">–</span> nicht befahrbar</li>
      <li><span class="mark ok">✓</span> befahrbar</li>
      <li><span class="mark q">?</span> ohne weitere Information nicht zu sagen</li>
    </ul>
    <div class="map">
      <img :src="image" :alt="alt ?? 'Karte mit Dörfern und Straßen'" />
      <button v-for="(r, i) in roads" :key="r.id" type="button" class="mark btn" :class="state[r.id] || 'unset'"
              :style="{ left: r.x + '%', top: r.y + '%' }"
              :aria-label="`Straße ${i + 1}: ${names[state[r.id]]}`" @click="next(r.id)">
        {{ symbol[state[r.id]] }}
      </button>
    </div>
    <div class="bar">
      <span class="hint">Tippe auf eine Straße, bis das richtige Zeichen erscheint.</span>
      <button type="button" class="reset" @click="reset">Zurücksetzen</button>
    </div>
  </div>
</template>

<style scoped>
.sos { display: grid; gap: 10px; }
.legend { display: flex; flex-wrap: wrap; gap: 6px 18px; list-style: none; margin: 0; padding: 0; font-size: .9rem; }
.legend li { display: flex; align-items: center; gap: 6px; }
.map { position: relative; max-width: 720px; }
.map img { display: block; width: 100%; height: auto; border-radius: 12px; border: 1px solid var(--line); }
.mark { display: inline-grid; place-items: center; width: 28px; height: 28px; border-radius: 50%; border: 2px solid var(--ink); font: 700 1rem var(--font-body); color: var(--ink); box-sizing: border-box; }
.mark.no { background: var(--bad-soft); border-color: var(--bad); color: var(--bad); }
.mark.ok { background: var(--good-soft); border-color: var(--good); color: var(--good); }
.mark.q { background: var(--sun); border-color: var(--sun-ink); color: #3b2a00; }
.btn { position: absolute; transform: translate(-50%, -50%); cursor: pointer; padding: 0; }
.btn.unset { background: var(--surface); border-style: dashed; opacity: .9; }
.btn:hover, .btn:focus-visible { outline: 3px solid var(--primary); outline-offset: 2px; }
.bar { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px; }
.hint { font-size: .85rem; color: var(--muted); }
.reset { border: 1px solid var(--line); background: var(--surface); color: var(--ink); border-radius: 999px; padding: 4px 12px; cursor: pointer; font: inherit; font-size: .85rem; }
</style>
