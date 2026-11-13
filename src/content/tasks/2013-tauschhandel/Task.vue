<script setup lang="ts">
// Table of trade offers on the left; move offers to the right (click, tap or drag) and put them in order.
// The answer is "ok" when the chain starts with the brush, every offer takes what Benny holds at that moment,
// and the last offer gives a house.
import { computed, onMounted, ref } from 'vue';

type Offer = { id: string; name: string; takes: string; gives: string };
const props = defineProps<{ offers: Offer[]; start: string; goal: string }>();
const emit = defineEmits<{ answer: [value: string] }>();

const byId = Object.fromEntries(props.offers.map((o) => [o.id, o]));
const chain = ref<string[]>([]);
const drag = ref<{ from: 'table' | 'chain'; id: string } | null>(null);
const over = ref<number | null>(null);
const free = computed(() => props.offers.filter((o) => !chain.value.includes(o.id)));

function valid(ids: string[]) {
  let held = props.start;
  for (const id of ids) {
    if (byId[id].takes !== held) return false;
    held = byId[id].gives;
  }
  return ids.length > 0 && held === props.goal;
}
function report() { emit('answer', chain.value.length === 0 ? '' : valid(chain.value) ? 'ok' : chain.value.join(',')); }
onMounted(report);

function add(id: string, at = chain.value.length) {
  if (chain.value.includes(id)) return;
  const next = [...chain.value];
  next.splice(at, 0, id);
  chain.value = next; report();
}
function removeAt(i: number) { chain.value = chain.value.filter((_, j) => j !== i); report(); }
function step(i: number, d: number) {
  const j = i + d;
  if (j < 0 || j >= chain.value.length) return;
  const next = [...chain.value];
  [next[i], next[j]] = [next[j], next[i]];
  chain.value = next; report();
}
function moveTo(from: number, to: number) {
  if (from === to) return;
  const next = [...chain.value];
  const [it] = next.splice(from, 1);
  next.splice(to, 0, it);
  chain.value = next; report();
}
function startDrag(e: DragEvent, from: 'table' | 'chain', id: string) { drag.value = { from, id }; e.dataTransfer?.setData('text/plain', id); }
function dropChain(e: DragEvent, at: number | null) {
  e.preventDefault(); e.stopPropagation();
  const d = drag.value; drag.value = null; over.value = null;
  if (!d) return;
  if (d.from === 'table') add(d.id, at ?? chain.value.length);
  else moveTo(chain.value.indexOf(d.id), at ?? chain.value.length - 1);
}
function dropTable(e: DragEvent) {
  e.preventDefault();
  const d = drag.value; drag.value = null; over.value = null;
  if (d?.from === 'chain') removeAt(chain.value.indexOf(d.id));
}
function clear() { chain.value = []; report(); }
</script>

<template>
  <div class="trade">
    <div class="side">
      <table @dragover.prevent @drop="dropTable">
        <thead><tr><th>Name</th><th>nimmt</th><th>gibt dafür</th></tr></thead>
        <tbody>
          <tr v-for="o in free" :key="o.id" draggable="true" @dragstart="startDrag($event, 'table', o.id)">
            <td colspan="3">
              <button type="button" class="row" :aria-label="`Angebot von ${o.name}: nimmt ${o.takes}, gibt ${o.gives}. Nach rechts legen`" @click="add(o.id)">
                <span>{{ o.name }}</span><span>{{ o.takes }}</span><span>{{ o.gives }}</span>
              </button>
            </td>
          </tr>
          <tr v-if="!free.length"><td colspan="3" class="empty">Alle Angebote liegen rechts.</td></tr>
        </tbody>
      </table>
    </div>
    <div class="side drop" @dragover.prevent @drop="dropChain($event, null)">
      <p class="start">Benny hat: <strong>{{ start }}</strong></p>
      <ol class="chain" aria-label="Deine Tauschfolge">
        <li v-for="(id, i) in chain" :key="id" :class="{ over: over === i }" draggable="true"
            @dragstart="startDrag($event, 'chain', id)" @dragover.prevent="over = i" @dragleave="over = null" @drop="dropChain($event, i)">
          <span class="n">{{ i + 1 }}</span>
          <span class="txt"><strong>{{ byId[id].name }}</strong>: {{ byId[id].takes }} → {{ byId[id].gives }}</span>
          <span class="moves">
            <button type="button" class="mv" :disabled="i === 0" @click="step(i, -1)" :aria-label="`${byId[id].name} nach oben`">▲</button>
            <button type="button" class="mv" :disabled="i === chain.length - 1" @click="step(i, 1)" :aria-label="`${byId[id].name} nach unten`">▼</button>
            <button type="button" class="mv" @click="removeAt(i)" :aria-label="`${byId[id].name} zurücklegen`">×</button>
          </span>
        </li>
        <li v-if="!chain.length" class="empty">Angebote von links hierher ziehen (oder antippen) und in die richtige Reihenfolge bringen!</li>
      </ol>
    </div>
    <div class="bar"><span class="hint">Ein Angebot per Maus auf ein anderes ziehen, um es dort einzufügen; zurück auf die Tabelle ziehen legt es zurück.</span>
      <button type="button" class="reset" @click="clear">Alles zurücklegen</button></div>
  </div>
</template>

<style scoped>
.trade { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 14px; align-items: start; }
.bar { grid-column: 1 / -1; display: flex; justify-content: space-between; gap: 8px; align-items: center; flex-wrap: wrap; }
.side { border: 1px solid var(--line); border-radius: 12px; overflow: hidden; background: var(--surface); }
.side.drop { background: var(--primary-soft); padding: 10px; min-height: 160px; border: 2px dashed var(--primary); }
table { width: 100%; border-collapse: collapse; }
th { text-align: left; font-size: .85rem; padding: 6px 10px; background: var(--sunk); }
tbody td { padding: 0; border-top: 1px solid var(--line); }
.row { display: grid; grid-template-columns: 1.1fr 1fr 1fr; gap: 6px; width: 100%; padding: 7px 10px; border: 0; background: transparent; color: var(--ink); font: inherit; text-align: left; cursor: grab; }
.row:hover { background: var(--primary-soft); }
.start { margin: 0 0 8px; font-size: .95rem; }
.chain { list-style: none; margin: 0; padding: 0; display: grid; gap: 6px; }
.chain li { display: grid; grid-template-columns: auto 1fr auto; gap: 8px; align-items: center; padding: 6px 8px; border: 2px solid var(--line); border-radius: 10px; background: var(--surface); cursor: grab; }
.chain li.over { border-color: var(--sun); }
.chain li.empty { display: block; border: 0; background: transparent; color: var(--muted); font-size: .9rem; cursor: default; }
.n { font: 700 .75rem var(--font-mono); color: var(--muted); }
.moves { display: flex; gap: 3px; }
.mv { width: 26px; height: 26px; padding: 0; border: 1px solid var(--line); background: var(--bg); color: var(--ink); border-radius: 7px; cursor: pointer; font-size: .7rem; }
.mv:disabled { opacity: .3; cursor: default; }
.empty { color: var(--muted); font-size: .9rem; padding: 8px 10px; }
.hint { font-size: .85rem; color: var(--muted); }
.reset { border: 1px solid var(--line); background: var(--surface); color: var(--ink); border-radius: 999px; padding: 4px 12px; cursor: pointer; font: inherit; font-size: .85rem; }
</style>
