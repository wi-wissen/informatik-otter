<script setup lang="ts">
import { computed, ref } from 'vue';

type Stone = { id: number; image: string; alt: string };
const props = defineProps<{
  stones: Stone[];
  fits: [number, number][]; // pairs of stones whose shapes fit into each other (order does not matter)
  target: number; // number of pairs that can be formed at the same time
}>();
const emit = defineEmits<{ answer: [value: string] }>();

const key = (a: number, b: number) => (a < b ? `${a}-${b}` : `${b}-${a}`);
const fitKeys = new Set(props.fits.map(([a, b]) => key(a, b)));
const pairs = ref<[number, number][]>([]);
const picked = ref<number | null>(null);
const message = ref('');

const used = computed(() => new Set(pairs.value.flat()));

function click(id: number) {
  message.value = '';
  if (used.value.has(id)) return;
  if (picked.value === null) { picked.value = id; return; }
  if (picked.value === id) { picked.value = null; return; }
  if (fitKeys.has(key(picked.value, id))) pairs.value = [...pairs.value, [picked.value, id]];
  else message.value = `Die Formen von Stein ${picked.value} und Stein ${id} passen nicht ineinander.`;
  picked.value = null;
  emit('answer', pairs.value.length === props.target ? 'ok' : `${pairs.value.length} Pärchen`);
}
function remove(i: number) {
  pairs.value = pairs.value.filter((_, k) => k !== i);
  message.value = '';
  emit('answer', `${pairs.value.length} Pärchen`);
}
function reset() { pairs.value = []; picked.value = null; message.value = ''; emit('answer', ''); }
const byId = Object.fromEntries(props.stones.map((s) => [s.id, s]));
</script>

<template>
  <div class="pz">
    <div class="row" role="group" aria-label="Die fünf Puzzlesteine">
      <button v-for="s in stones" :key="s.id" type="button" :class="['stone', { picked: picked === s.id, used: used.has(s.id) }]"
        :aria-pressed="picked === s.id" :aria-label="`Stein ${s.id}: ${s.alt}${used.has(s.id) ? ' (schon in einem Pärchen)' : ''}`" @click="click(s.id)">
        <img :src="s.image" :alt="s.alt" />
        <span class="n">{{ s.id }}</span>
      </button>
    </div>
    <div class="pairs">
      <span v-if="!pairs.length" class="hint">Tippe nacheinander auf zwei Steine, die zusammenpassen.</span>
      <div v-for="(p, i) in pairs" :key="i" class="pair">
        <img :src="byId[p[0]].image" alt="" /><img :src="byId[p[1]].image" alt="" />
        <span>Stein {{ p[0] }} + Stein {{ p[1] }}</span>
        <button type="button" class="x" :aria-label="`Pärchen ${p[0]} und ${p[1]} auflösen`" @click="remove(i)">×</button>
      </div>
    </div>
    <p v-if="message" class="warn" role="status">{{ message }}</p>
    <button type="button" class="reset" @click="reset">Zurücksetzen</button>
  </div>
</template>

<style scoped>
.pz { display: grid; gap: 10px; }
.row { display: flex; gap: 8px; flex-wrap: wrap; }
.stone { position: relative; border: 2px solid var(--line); border-radius: 10px; background: var(--surface); padding: 6px; cursor: pointer; }
.stone img { display: block; height: 64px; width: auto; }
.stone .n { position: absolute; left: 6px; top: 2px; font-size: .75rem; font-weight: 700; color: var(--ink); }
.stone.picked { border-color: var(--primary); box-shadow: 0 0 0 3px var(--primary-soft); }
.stone.used { opacity: .35; cursor: default; }
.pairs { display: grid; gap: 6px; }
.pair { display: flex; align-items: center; gap: 4px; }
.pair img { height: 40px; width: auto; }
.pair span { margin-left: 6px; font-size: .9rem; }
.x { margin-left: auto; border: 1px solid var(--line); background: var(--surface); color: var(--ink); border-radius: 999px; width: 28px; height: 28px; cursor: pointer; font-size: 1rem; line-height: 1; }
.hint { color: var(--muted); font-size: .85rem; }
.warn { margin: 0; color: var(--bad); font-size: .9rem; }
.reset { justify-self: start; border: 1px solid var(--line); background: var(--surface); color: var(--ink); border-radius: 999px; padding: 4px 12px; cursor: pointer; font: inherit; font-size: .85rem; }
</style>
