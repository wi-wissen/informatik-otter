<script setup lang="ts">
// Two lifts with a weight limit. Drag the beavers into a lift (or tap a beaver and then a lift).
// The answer is "ok" when no lift is overloaded and as many beavers as possible fit in.
import { computed, onMounted, ref } from 'vue';

type Beaver = { id: string; kg: number; image: string };
type Place = 'out' | 'l1' | 'l2';
const props = defineProps<{ beavers: Beaver[]; limit: number }>();
const emit = defineEmits<{ answer: [value: string] }>();

const where = ref<Record<string, Place>>(Object.fromEntries(props.beavers.map((b) => [b.id, 'out'])));
const selected = ref<string | null>(null);
const lifts: { id: Place; label: string }[] = [{ id: 'l1', label: 'Aufzug 1' }, { id: 'l2', label: 'Aufzug 2' }];

// largest number of beavers that fit into the two lifts
function best(): number {
  let top = 0;
  const n = props.beavers.length;
  const go = (i: number, a: number, b: number, c: number) => {
    if (i === n) { top = Math.max(top, c); return; }
    const kg = props.beavers[i].kg;
    go(i + 1, a, b, c);
    if (a + kg <= props.limit) go(i + 1, a + kg, b, c + 1);
    if (b + kg <= props.limit) go(i + 1, a, b + kg, c + 1);
  };
  go(0, 0, 0, 0);
  return top;
}
const most = best();

const inPlace = (p: Place) => props.beavers.filter((b) => where.value[b.id] === p);
const weight = (p: Place) => inPlace(p).reduce((s, b) => s + b.kg, 0);
const loaded = computed(() => inPlace('l1').length + inPlace('l2').length);

function report() {
  const okWeight = weight('l1') <= props.limit && weight('l2') <= props.limit;
  emit('answer', okWeight && loaded.value === most ? 'ok' : 'nicht-ok');
}
onMounted(report);
function move(id: string, to: Place) {
  where.value = { ...where.value, [id]: to };
  selected.value = null;
  report();
}
function tapTarget(p: Place) { if (selected.value) move(selected.value, p); }
function tapBeaver(id: string) { selected.value = selected.value === id ? null : id; }
function dragStart(e: DragEvent, id: string) { e.dataTransfer?.setData('text/plain', id); selected.value = id; }
function drop(e: DragEvent, p: Place) {
  e.preventDefault();
  const id = e.dataTransfer?.getData('text/plain');
  if (id && id in where.value) move(id, p);
}
</script>

<template>
  <div class="lifts">
    <div class="pair">
      <section v-for="l in lifts" :key="l.id" class="lift" :class="{ target: !!selected, over: weight(l.id) > limit }">
        <h4>{{ l.label }} <small>(höchstens {{ limit }} kg)</small></h4>
        <div class="cab" role="button" tabindex="0" :aria-label="`${l.label}: ${weight(l.id)} kg`" @click="tapTarget(l.id)"
             @keydown.enter.prevent="tapTarget(l.id)" @keydown.space.prevent="tapTarget(l.id)" @dragover.prevent @drop="drop($event, l.id)">
          <button v-for="b in inPlace(l.id)" :key="b.id" type="button" class="b" :class="{ sel: selected === b.id }" draggable="true"
                  :aria-label="`Biber ${b.kg} kg${selected === b.id ? ' (ausgewählt)' : ''}`" @click.stop="tapBeaver(b.id)" @dragstart="dragStart($event, b.id)">
            <img :src="b.image" alt="" draggable="false" />
          </button>
        </div>
        <p class="scale" :class="{ bad: weight(l.id) > limit }" aria-live="polite"><b>{{ weight(l.id) }}</b> kg</p>
      </section>
    </div>
    <section class="grass" role="group" aria-label="Biber, die warten" :class="{ target: !!selected }" @click="tapTarget('out')" @dragover.prevent @drop="drop($event, 'out')">
      <button v-for="b in inPlace('out')" :key="b.id" type="button" class="b" :class="{ sel: selected === b.id }" draggable="true"
              :aria-label="`Biber ${b.kg} kg${selected === b.id ? ' (ausgewählt)' : ''}`" @click.stop="tapBeaver(b.id)" @dragstart="dragStart($event, b.id)">
        <img :src="b.image" alt="" draggable="false" />
      </button>
      <span v-if="!inPlace('out').length" class="empty">Alle Biber sind in einem Aufzug.</span>
    </section>
    <p class="hint">Ziehe die Biber in die Aufzüge, oder tippe erst einen Biber und dann einen Aufzug an. Tippe auf die Wiese, um einen Biber zurückzustellen.</p>
  </div>
</template>

<style scoped>
.lifts { display: grid; gap: 12px; }
.pair { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
@media (max-width: 480px) { .pair { grid-template-columns: 1fr; } }
.lift h4 { margin: 0 0 4px; font-size: 1rem; }
.lift h4 small { font-weight: 400; color: var(--muted); }
.cab { min-height: 190px; display: flex; flex-wrap: wrap; gap: 4px; align-content: flex-start; padding: 8px; border: 4px solid #a87c2a; border-radius: 10px; background: var(--surface); cursor: pointer; }
.lift.target .cab, .grass.target { border-color: var(--sun); }
.lift.over .cab { border-color: var(--bad); }
.cab:focus-visible { outline: 3px solid var(--sun); }
.scale { margin: 4px 0 0; padding: 4px 10px; border: 2px solid var(--line); border-radius: 8px; background: var(--surface); font: 600 1.4rem var(--font-body); text-align: center; }
.scale b { color: var(--good); }
.scale.bad b { color: var(--bad); }
.grass { display: flex; flex-wrap: wrap; gap: 6px; min-height: 120px; padding: 8px; background: #7ed321; border: 3px solid transparent; border-radius: 10px; cursor: pointer; align-items: flex-end; }
.b { padding: 0; border: 3px solid transparent; border-radius: 8px; background: none; cursor: grab; line-height: 0; }
.b img { height: 96px; width: auto; }
.cab .b img { height: 78px; }
.b.sel { border-color: var(--sun); background: var(--sun-soft); }
.empty { color: #10313a; font-size: .85rem; align-self: center; }
.hint { margin: 0; font-size: .85rem; color: var(--muted); }
</style>
