<script setup lang="ts">
// Put items onto zones: drag with the mouse, or tap an item and then a zone (works on touch and keyboard).
// Zones can sit on a background picture (x/y/w/h in the picture's coordinate system) or be listed as rows.
import { computed, onMounted, ref } from 'vue';
import ItemFace from './ItemFace.vue';

type Item = { id: string; label?: string; image?: string; alt?: string };
type Zone = { id: string; label?: string; x?: number; y?: number; w?: number; h?: number; capacity?: number };
const props = defineProps<{
  items: Item[]; zones: Zone[]; background?: string; width?: number; height?: number;
  reusable?: boolean; trayLabel?: string; initial?: Record<string, string | string[]>;
}>();
const emit = defineEmits<{ answer: [value: Record<string, string | string[]>] }>();

const W = props.width ?? 400;
const H = props.height ?? 300;
const byId = Object.fromEntries(props.items.map((i) => [i.id, i]));
const cap = (z: Zone) => z.capacity ?? 1;
// zone id -> list of item ids
const placed = ref<Record<string, string[]>>(Object.fromEntries(props.zones.map((z) => {
  const v = props.initial?.[z.id];
  return [z.id, v === undefined ? [] : Array.isArray(v) ? [...v] : [v]];
})));
const selected = ref<string | null>(null);

const used = computed(() => new Set(Object.values(placed.value).flat()));
const tray = computed(() => props.reusable ? props.items : props.items.filter((i) => !used.value.has(i.id)));

function report() {
  const out: Record<string, string | string[]> = {};
  for (const z of props.zones) {
    const v = placed.value[z.id];
    if (!v.length) continue;
    out[z.id] = cap(z) === 1 ? v[0] : [...v].sort();
  }
  emit('answer', out);
}
onMounted(report);

function put(zoneId: string, itemId: string) {
  const z = props.zones.find((x) => x.id === zoneId)!;
  const next = Object.fromEntries(Object.entries(placed.value).map(([k, v]) => [k, [...v]]));
  if (!props.reusable) for (const k in next) next[k] = next[k].filter((x) => x !== itemId);
  if (next[zoneId].length >= cap(z)) {
    if (cap(z) !== 1) return; // full
    next[zoneId] = [];        // single zone: replace
  }
  next[zoneId].push(itemId);
  placed.value = next;
  selected.value = null;
  report();
}
function removeFrom(zoneId: string, index: number) {
  const next = { ...placed.value, [zoneId]: placed.value[zoneId].filter((_, i) => i !== index) };
  placed.value = next;
  report();
}
function tapZone(zoneId: string) { if (selected.value) put(zoneId, selected.value); }
function tapItem(id: string) { selected.value = selected.value === id ? null : id; }

// mouse drag & drop
function dragStart(e: DragEvent, id: string, from?: { zone: string; index: number }) {
  e.dataTransfer?.setData('text/plain', JSON.stringify({ id, from }));
  selected.value = id;
}
function drop(e: DragEvent, zoneId: string | null) {
  e.preventDefault();
  const raw = e.dataTransfer?.getData('text/plain');
  if (!raw) return;
  const { id, from } = JSON.parse(raw);
  if (from && props.reusable) removeFrom(from.zone, from.index);
  if (zoneId) put(zoneId, id);
  else if (from) removeFrom(from.zone, from.index);
  selected.value = null;
}
const pct = (v: number, of: number) => `${(v / of) * 100}%`;
</script>

<template>
  <div class="place">
    <div v-if="background" class="board" :style="{ aspectRatio: `${W} / ${H}`, width: `min(100%, 720px, calc(78vh * ${W / H}))` }">
      <img :src="background" alt="" draggable="false" />
      <div v-for="z in zones" :key="z.id" class="zone on-pic" :class="{ target: !!selected }"
           :style="{ left: pct(z.x ?? 0, W), top: pct(z.y ?? 0, H), width: pct(z.w ?? 40, W), height: pct(z.h ?? 40, H) }"
           role="button" tabindex="0" :aria-label="`Feld ${z.label ?? z.id}`"
           @click="tapZone(z.id)" @keydown.enter.prevent="tapZone(z.id)" @keydown.space.prevent="tapZone(z.id)"
           @dragover.prevent @drop="drop($event, z.id)">
        <button v-for="(id, i) in placed[z.id]" :key="`${id}-${i}`" type="button" class="chip-item" draggable="true"
                :aria-label="`${byId[id].label ?? byId[id].alt ?? id} entfernen`"
                @click.stop="selected ? tapZone(z.id) : removeFrom(z.id, i)" @dragstart="dragStart($event, id, { zone: z.id, index: i })">
          <ItemFace :item="byId[id]" />
        </button>
      </div>
    </div>
    <div v-else class="rows">
      <div v-for="z in zones" :key="z.id" class="row">
        <span class="zlabel">{{ z.label ?? z.id }}</span>
        <div class="zone in-row" :class="{ target: !!selected }" role="button" tabindex="0" :aria-label="`Feld ${z.label ?? z.id}`"
             @click="tapZone(z.id)" @keydown.enter.prevent="tapZone(z.id)" @keydown.space.prevent="tapZone(z.id)"
             @dragover.prevent @drop="drop($event, z.id)">
          <button v-for="(id, i) in placed[z.id]" :key="`${id}-${i}`" type="button" class="chip-item" draggable="true"
                  :aria-label="`${byId[id].label ?? byId[id].alt ?? id} entfernen`"
                  @click.stop="selected ? tapZone(z.id) : removeFrom(z.id, i)" @dragstart="dragStart($event, id, { zone: z.id, index: i })">
            <ItemFace :item="byId[id]" />
          </button>
          <span v-if="!placed[z.id].length" class="empty">hier ablegen</span>
        </div>
      </div>
    </div>

    <div class="tray" @dragover.prevent @drop="drop($event, null)" :aria-label="trayLabel ?? 'Teile'">
      <button v-for="it in tray" :key="it.id" type="button" class="chip-item" :class="{ sel: selected === it.id }"
              draggable="true" :aria-pressed="selected === it.id" @click="tapItem(it.id)" @dragstart="dragStart($event, it.id)">
        <ItemFace :item="it" />
      </button>
      <span v-if="!tray.length" class="empty">Alles verteilt. Tippe ein Teil an, um es zurückzulegen.</span>
    </div>
    <p class="hint">Ziehe die Teile auf die Felder, oder tippe erst ein Teil und dann ein Feld an.</p>
  </div>
</template>

<style scoped>
.place { display: grid; gap: 12px; }
.board { position: relative; margin-inline: auto; background: #fff; border-radius: 10px; overflow: hidden; }
.board img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: contain; pointer-events: none; }
.zone { display: flex; flex-wrap: wrap; gap: 4px; align-items: center; justify-content: center; border: 2px dashed var(--primary); border-radius: 8px; cursor: pointer; }
.zone.on-pic { position: absolute; background: color-mix(in srgb, var(--primary-soft) 45%, transparent); }
.zone.target { border-color: var(--sun); background: color-mix(in srgb, var(--sun-soft) 70%, transparent); }
.zone:focus-visible { outline: 3px solid var(--sun); }
.rows { display: grid; gap: 8px; }
.row { display: grid; grid-template-columns: minmax(90px, auto) 1fr; gap: 10px; align-items: center; }
.zlabel { font-weight: 700; }
.zone.in-row { min-height: 56px; padding: 6px; background: var(--bg); }
.tray { display: flex; flex-wrap: wrap; gap: 8px; min-height: 64px; padding: 10px; border: 1px solid var(--line); border-radius: 12px; background: var(--bg); }
.chip-item { border: 2px solid var(--line); background: var(--surface); color: var(--ink); border-radius: 10px; padding: 4px 8px; cursor: grab; font: inherit; }
.chip-item.sel { border-color: var(--sun); background: var(--sun-soft); }
.chip-item :deep(img) { max-height: 64px; max-width: 96px; }
.on-pic .chip-item { padding: 2px 4px; }
.on-pic .chip-item :deep(img) { max-height: 40px; max-width: 60px; }
.empty { color: var(--muted); font-size: .85rem; align-self: center; }
.hint { font-size: .85rem; color: var(--muted); }
</style>
