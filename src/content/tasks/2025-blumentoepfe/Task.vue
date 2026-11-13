<script setup lang="ts">
// Eight flower pots: click a pot to plant a flower in it (click again to remove it).
// The component runs Florian's method on the pots and reports "ok" when it ends at the pot with the key.
import { computed, onMounted, ref } from 'vue';

type Pot = { id: string; image: string; alt: string };
const props = defineProps<{ pots: Pot[]; flower: string; keyPot: string }>();
const emit = defineEmits<{ answer: [value: string] }>();

const planted = ref<Record<string, boolean>>(Object.fromEntries(props.pots.map((p) => [p.id, false])));
const count = computed(() => props.pots.filter((p) => planted.value[p.id]).length);

function findKey(): string {
  let lo = 0, hi = props.pots.length;
  while (hi - lo > 1) {
    const mid = (lo + hi) / 2;
    const flowers = props.pots.slice(lo, hi).filter((p) => planted.value[p.id]).length;
    if (flowers % 2 === 0) hi = mid; else lo = mid;
  }
  return props.pots[lo].id;
}
function report() {
  if (count.value === 0) return emit('answer', '');
  emit('answer', findKey() === props.keyPot ? 'ok' : props.pots.filter((p) => planted.value[p.id]).map((p) => p.id).join(','));
}
onMounted(report);
function toggle(id: string) { planted.value = { ...planted.value, [id]: !planted.value[id] }; report(); }
function reset() { planted.value = Object.fromEntries(props.pots.map((p) => [p.id, false])); report(); }
</script>

<template>
  <div class="pots">
    <div class="row" role="group" aria-label="Die acht Blumentöpfe">
      <button v-for="p in pots" :key="p.id" type="button" class="pot" :class="{ on: planted[p.id] }"
              :aria-pressed="planted[p.id]" :aria-label="`${p.alt}: ${planted[p.id] ? 'Blume gepflanzt' : 'leer'}`" @click="toggle(p.id)">
        <span class="sky"><img class="flower" :src="flower" alt="" draggable="false" /></span>
        <img class="vase" :src="p.image" alt="" draggable="false" />
      </button>
    </div>
    <div class="bar"><span class="hint">Klicke auf einen Topf, um eine Blume zu pflanzen oder wieder zu entfernen. Blumen: {{ count }}</span>
      <button type="button" class="reset" @click="reset">Alle Töpfe leeren</button></div>
  </div>
</template>

<style scoped>
.pots { display: grid; gap: 10px; }
.row { display: grid; grid-template-columns: repeat(8, minmax(0, 1fr)); gap: 4px; }
@media (max-width: 520px) { .row { grid-template-columns: repeat(4, minmax(0, 1fr)); } }
.pot { display: grid; gap: 0; padding: 4px 2px; border: 2px solid transparent; border-radius: 12px; background: #fff; cursor: pointer; }
.pot:hover { border-color: var(--primary); }
.pot:focus-visible { outline: 3px solid var(--sun); }
.pot.on { background: #fff; border-color: var(--line); }
.sky { display: grid; place-items: end center; aspect-ratio: 125 / 160; }
.flower { width: 80%; height: auto; transform: translateX(-10%); opacity: 0; }
.pot:hover .flower { opacity: .22; }
.pot.on .flower { opacity: 1; }
.vase { width: 100%; height: auto; display: block; }
.bar { display: flex; justify-content: space-between; gap: 8px; flex-wrap: wrap; align-items: center; }
.hint { font-size: .85rem; color: var(--muted); }
.reset { border: 1px solid var(--line); background: var(--surface); color: var(--ink); border-radius: 999px; padding: 4px 12px; cursor: pointer; font: inherit; font-size: .85rem; }
</style>
