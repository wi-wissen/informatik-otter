<script setup lang="ts">
// Parking lot: the guests' cars are dragged into a parking lane (or: tap a car, then tap a lane).
// A car drives as far forward as possible, so the cars of a lane stand in the order of their arrival (the order of `items`).
import { computed, onMounted, ref } from 'vue';

type Item = { id: string; image: string; alt: string };
type Lane = { id: string; label: string; x: number; y: number; w: number; h: number; capacity: number };
const props = defineProps<{ items: Item[]; lanes: Lane[]; background: string; width: number; height: number }>();
const emit = defineEmits<{ answer: [value: Record<string, string[]>] }>();

const byId = Object.fromEntries(props.items.map((i) => [i.id, i]));
const order = Object.fromEntries(props.items.map((i, n) => [i.id, n]));
const placed = ref<Record<string, string[]>>(Object.fromEntries(props.lanes.map((l) => [l.id, []])));
const selected = ref<string | null>(null);
const full = ref<string | null>(null);
const tray = computed(() => props.items.filter((i) => !Object.values(placed.value).flat().includes(i.id)));

function report() {
  const out: Record<string, string[]> = {};
  for (const l of props.lanes) if (placed.value[l.id].length) out[l.id] = [...placed.value[l.id]].sort();
  emit('answer', out);
}
onMounted(report);

function remove(id: string) {
  const next: Record<string, string[]> = {};
  for (const k of Object.keys(placed.value)) next[k] = placed.value[k].filter((x) => x !== id);
  return next;
}
function put(laneId: string, itemId: string) {
  const lane = props.lanes.find((l) => l.id === laneId)!;
  const next = remove(itemId);
  if (next[laneId].length >= lane.capacity) {
    full.value = laneId;
    setTimeout(() => { if (full.value === laneId) full.value = null; }, 700);
    return;
  }
  next[laneId] = [...next[laneId], itemId].sort((a, b) => order[a] - order[b]);
  placed.value = next;
  selected.value = null;
  report();
}
function take(id: string) { placed.value = remove(id); report(); }
function tapLane(laneId: string) { if (selected.value) put(laneId, selected.value); }
function tapItem(id: string) { selected.value = selected.value === id ? null : id; }
function dragStart(e: DragEvent, id: string) { e.dataTransfer?.setData('text/plain', id); selected.value = id; }
function drop(e: DragEvent, laneId: string | null) {
  e.preventDefault();
  const id = e.dataTransfer?.getData('text/plain');
  if (!id || !byId[id]) return;
  if (laneId) put(laneId, id); else take(id);
  selected.value = null;
}
const pct = (v: number, of: number) => `${(v / of) * 100}%`;
</script>

<template>
  <div class="lot">
    <div class="board" :style="{ aspectRatio: `${width} / ${height}` }">
      <img :src="background" alt="Der Parkplatz mit drei Parkspuren; Auto A und Auto C stehen in Spur 1, Auto B in Spur 2" draggable="false" />
      <div v-for="l in lanes" :key="l.id" class="lane" :class="{ target: !!selected, full: full === l.id }"
           :style="{ left: pct(l.x, width), top: pct(l.y, height), width: pct(l.w, width), height: pct(l.h, height) }"
           role="button" tabindex="0" :aria-label="`${l.label}, noch ${l.capacity - placed[l.id].length} Plätze frei`"
           @click="tapLane(l.id)" @keydown.enter.prevent="tapLane(l.id)" @keydown.space.prevent="tapLane(l.id)"
           @dragover.prevent @drop="drop($event, l.id)">
        <button v-for="id in placed[l.id]" :key="id" type="button" class="car" draggable="true"
                :style="{ height: `${100 / l.capacity}%` }" :aria-label="`${byId[id].alt} aus ${l.label} herausnehmen`"
                @click.stop="take(id)" @dragstart="dragStart($event, id)">
          <img :src="byId[id].image" :alt="byId[id].alt" draggable="false" />
        </button>
      </div>
      <span v-for="l in lanes" :key="`n-${l.id}`" class="lane-no" :style="{ left: pct(l.x + l.w / 2, width), top: pct(167, height) }" aria-hidden="true">{{ l.label.replace('Spur ', '') }}</span>
    </div>
    <div class="tray" role="group" aria-label="Wartende Autos" @dragover.prevent @drop="drop($event, null)">
      <button v-for="it in tray" :key="it.id" type="button" class="chip" :class="{ sel: selected === it.id }"
              draggable="true" :aria-pressed="selected === it.id" :aria-label="it.alt" @click="tapItem(it.id)" @dragstart="dragStart($event, it.id)">
        <img :src="it.image" :alt="it.alt" draggable="false" />
      </button>
      <span v-if="!tray.length" class="empty">Alle Autos stehen auf dem Parkplatz.</span>
    </div>
    <p class="hint">Ziehe die Autos in die Parkspuren, oder tippe erst ein Auto und dann eine Spur an. Ein Auto in einer Spur antippen nimmt es wieder heraus.</p>
  </div>
</template>

<style scoped>
.lot { display: flex; flex-wrap: wrap; gap: 16px 28px; align-items: flex-start; }
.board { position: relative; flex: 0 0 min(360px, 100%); background: #fff; border-radius: 10px; overflow: hidden; }
.board > img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: contain; pointer-events: none; }
.lane { position: absolute; display: flex; flex-direction: column; align-items: center; border: 2px dashed var(--primary); border-radius: 6px; cursor: pointer; background: color-mix(in srgb, var(--primary-soft) 40%, transparent); box-sizing: border-box; }
.lane.target { border-color: var(--sun); background: color-mix(in srgb, var(--sun-soft) 65%, transparent); }
.lane.full { border-color: var(--bad); }
.lane:focus-visible { outline: 3px solid var(--sun); }
.lane-no { position: absolute; transform: translate(-50%, 0); font: 700 .8rem var(--font-body); color: #fff; background: #3b3b3b; border-radius: 50%; width: 1.4em; height: 1.4em; display: grid; place-items: center; pointer-events: none; }
.car { padding: 2px 0; border: 0; background: transparent; cursor: grab; width: 100%; display: grid; place-items: center; box-sizing: border-box; }
.car img { height: 100%; width: auto; max-width: 100%; object-fit: contain; }
.tray { display: flex; flex-wrap: wrap; gap: 10px; min-width: 200px; max-width: 320px; padding: 10px; border: 1px solid var(--line); border-radius: 12px; background: var(--bg); }
.chip { border: 2px solid var(--line); background: var(--surface); border-radius: 10px; padding: 6px 8px; cursor: grab; }
.chip.sel { border-color: var(--sun); background: var(--sun-soft); }
.chip img { height: 96px; width: auto; display: block; }
.plane img, .car img, .chip img { pointer-events: none; }
.empty { color: var(--muted); font-size: .85rem; align-self: center; }
.hint { flex-basis: 100%; font-size: .85rem; color: var(--muted); margin: 0; }
</style>
