<script setup lang="ts">
// The start plan (picture) with empty slots on the left, the missing planes on the right.
// Drag a plane onto a slot, or tap a plane and then a slot (touch and keyboard). Tap a placed plane to take it back.
import { computed, onMounted, ref } from 'vue';

type Item = { id: string; image: string; alt: string };
type Zone = { id: string; label: string; x: number; y: number; w: number; h: number };
const props = defineProps<{ items: Item[]; zones: Zone[]; background: string; width: number; height: number }>();
const emit = defineEmits<{ answer: [value: Record<string, string>] }>();

const byId = Object.fromEntries(props.items.map((i) => [i.id, i]));
const placed = ref<Record<string, string>>({});
const selected = ref<string | null>(null);
const tray = computed(() => props.items.filter((i) => !Object.values(placed.value).includes(i.id)));
const report = () => emit('answer', { ...placed.value });
onMounted(report);

function put(zoneId: string, itemId: string) {
  const next = { ...placed.value };
  for (const k of Object.keys(next)) if (next[k] === itemId) delete next[k];
  next[zoneId] = itemId;
  placed.value = next;
  selected.value = null;
  report();
}
function take(zoneId: string) {
  const next = { ...placed.value };
  delete next[zoneId];
  placed.value = next;
  report();
}
function tapZone(zoneId: string) { if (selected.value) put(zoneId, selected.value); }
function tapItem(id: string) { selected.value = selected.value === id ? null : id; }
function dragStart(e: DragEvent, id: string) { e.dataTransfer?.setData('text/plain', id); selected.value = id; }
function drop(e: DragEvent, zoneId: string | null) {
  e.preventDefault();
  const id = e.dataTransfer?.getData('text/plain');
  if (!id || !byId[id]) return;
  if (zoneId) put(zoneId, id);
  else { const z = Object.keys(placed.value).find((k) => placed.value[k] === id); if (z) take(z); }
  selected.value = null;
}
const pct = (v: number, of: number) => `${(v / of) * 100}%`;
</script>

<template>
  <div class="plan">
    <div class="board" :style="{ aspectRatio: `${width} / ${height}` }">
      <img :src="background" alt="Startplan mit vier leeren Feldern" draggable="false" />
      <div v-for="z in zones" :key="z.id" class="zone" :class="{ target: !!selected }"
           :style="{ left: pct(z.x, width), top: pct(z.y, height), width: pct(z.w, width), height: pct(z.h, height) }"
           role="button" tabindex="0" :aria-label="`Startzeit ${z.label}`"
           @click="tapZone(z.id)" @keydown.enter.prevent="tapZone(z.id)" @keydown.space.prevent="tapZone(z.id)"
           @dragover.prevent @drop="drop($event, z.id)">
        <button v-if="placed[z.id]" type="button" class="plane" draggable="true"
                :aria-label="`${byId[placed[z.id]].alt} zurücknehmen`"
                @click.stop="take(z.id)" @dragstart="dragStart($event, placed[z.id])">
          <img :src="byId[placed[z.id]].image" :alt="byId[placed[z.id]].alt" draggable="false" />
        </button>
      </div>
    </div>
    <div class="tray" role="group" aria-label="Fehlende Flugzeuge" @dragover.prevent @drop="drop($event, null)">
      <button v-for="it in tray" :key="it.id" type="button" class="plane" :class="{ sel: selected === it.id }"
              draggable="true" :aria-pressed="selected === it.id" @click="tapItem(it.id)" @dragstart="dragStart($event, it.id)">
        <img :src="it.image" :alt="it.alt" draggable="false" />
      </button>
      <span v-if="!tray.length" class="empty">Alle Flugzeuge sind eingetragen.</span>
    </div>
    <p class="hint">Ziehe die Flugzeuge auf die leeren Felder, oder tippe erst ein Flugzeug und dann ein Feld an.</p>
  </div>
</template>

<style scoped>
.plan { display: flex; flex-wrap: wrap; gap: 18px 28px; align-items: flex-start; }
.board { position: relative; flex: 0 0 min(240px, 100%); background: #fff; border-radius: 10px; overflow: hidden; }
.board > img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: contain; pointer-events: none; }
.zone { position: absolute; display: grid; place-items: center; border: 2px dashed var(--primary); border-radius: 8px; cursor: pointer; background: color-mix(in srgb, var(--primary-soft) 45%, transparent); }
.zone.target { border-color: var(--sun); background: color-mix(in srgb, var(--sun-soft) 70%, transparent); }
.zone:focus-visible { outline: 3px solid var(--sun); }
.zone .plane { padding: 0; border: 0; background: transparent; width: 100%; height: 100%; display: grid; place-items: center; }
.zone .plane img { max-width: 92%; max-height: 92%; }
.tray { display: grid; gap: 10px; min-width: 150px; padding: 10px; border: 1px solid var(--line); border-radius: 12px; background: var(--bg); align-content: start; }
.plane { border: 2px solid var(--line); background: var(--surface); border-radius: 10px; padding: 6px 10px; cursor: grab; }
.plane.sel { border-color: var(--sun); background: var(--sun-soft); }
.tray .plane img { width: 100px; height: auto; display: block; }
.plane img, .car img, .chip img { pointer-events: none; }
.empty { color: var(--muted); font-size: .85rem; }
.hint { flex-basis: 100%; font-size: .85rem; color: var(--muted); margin: 0; }
</style>
