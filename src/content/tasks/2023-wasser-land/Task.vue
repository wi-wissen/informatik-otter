<script setup lang="ts">
// Tiles are dragged (or tapped, then tapped on a gap) into the gaps of a board picture.
// Tiles stay large, because their edges are what the task is about.
import { computed, ref } from 'vue';

type Gap = { id: string; label: string; x: number; y: number; w: number; h: number };
type Tile = { id: string; image: string; alt: string };
const props = defineProps<{ board: string; width: number; height: number; gaps: Gap[]; tiles: Tile[] }>();
const emit = defineEmits<{ answer: [value: Record<string, string> | null] }>();

const placed = ref<Record<string, string>>({});
const selected = ref<string | null>(null);
const byId = Object.fromEntries(props.tiles.map((t) => [t.id, t]));
const inTray = computed(() => props.tiles.filter((t) => !Object.values(placed.value).includes(t.id)));

function report() {
  emit('answer', Object.keys(placed.value).length ? { ...placed.value } : null);
}
function put(gapId: string, tileId: string) {
  const next = Object.fromEntries(Object.entries(placed.value).filter(([, t]) => t !== tileId));
  next[gapId] = tileId;
  placed.value = next;
  selected.value = null;
  report();
}
function remove(gapId: string) {
  const { [gapId]: _gone, ...rest } = placed.value;
  placed.value = rest;
  report();
}
function tapGap(gapId: string) {
  if (selected.value) put(gapId, selected.value);
  else if (placed.value[gapId]) remove(gapId);
}
function tapTile(id: string) { selected.value = selected.value === id ? null : id; }
function dragStart(e: DragEvent, id: string) {
  e.dataTransfer?.setData('text/plain', id);
  selected.value = id;
}
function dropOnGap(e: DragEvent, gapId: string) {
  e.preventDefault();
  const id = e.dataTransfer?.getData('text/plain');
  if (id && byId[id]) put(gapId, id);
}
function dropOnTray(e: DragEvent) {
  e.preventDefault();
  const id = e.dataTransfer?.getData('text/plain');
  const gap = Object.keys(placed.value).find((g) => placed.value[g] === id);
  if (gap) remove(gap);
  selected.value = null;
}
const pct = (v: number, of: number) => `${(v / of) * 100}%`;
</script>

<template>
  <div class="wl">
    <div class="board" :style="{ aspectRatio: `${width} / ${height}` }">
      <img :src="board" alt="Spielfeld mit zwei Kärtchen und zwei Lücken" draggable="false" />
      <button v-for="g in gaps" :key="g.id" type="button" class="gap" :class="{ target: !!selected, filled: !!placed[g.id] }"
              :style="{ left: pct(g.x, width), top: pct(g.y, height), width: pct(g.w, width), height: pct(g.h, height) }"
              :aria-label="placed[g.id] ? `${g.label}: ${byId[placed[g.id]].alt}. Antippen zum Entfernen.` : g.label"
              @click="tapGap(g.id)" @dragover.prevent @drop="dropOnGap($event, g.id)">
        <img v-if="placed[g.id]" :src="byId[placed[g.id]].image" :alt="byId[placed[g.id]].alt" draggable="true"
             @dragstart="dragStart($event, placed[g.id])" />
      </button>
    </div>
    <div class="tray" aria-label="Kärtchen" @dragover.prevent @drop="dropOnTray">
      <button v-for="t in inTray" :key="t.id" type="button" class="tile" :class="{ sel: selected === t.id }"
              :aria-pressed="selected === t.id" draggable="true" @click="tapTile(t.id)" @dragstart="dragStart($event, t.id)">
        <img :src="t.image" :alt="t.alt" draggable="false" />
      </button>
    </div>
    <p class="hint">Ziehe ein Kärtchen in eine Lücke, oder tippe erst das Kärtchen und dann die Lücke an. Ein Kärtchen in der Lücke antippen legt es zurück.</p>
  </div>
</template>

<style scoped>
.wl { display: grid; gap: 12px; }
.board { position: relative; width: 100%; max-width: 420px; margin-inline: auto; background: #fff; border-radius: 10px; overflow: hidden; }
.board > img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: contain; pointer-events: none; }
.gap { position: absolute; padding: 0; border: 2px dashed var(--primary); border-radius: 4px; background: color-mix(in srgb, var(--primary-soft) 55%, transparent); cursor: pointer; display: block; }
.gap.target { border-color: var(--sun); background: color-mix(in srgb, var(--sun-soft) 70%, transparent); }
.gap.filled { border-style: solid; background: #fff; }
.gap img { width: 100%; height: 100%; object-fit: fill; display: block; }
.gap:focus-visible, .tile:focus-visible { outline: 3px solid var(--sun); }
.tray { display: grid; grid-template-columns: repeat(auto-fill, minmax(104px, 1fr)); gap: 10px; min-height: 80px; padding: 10px; border: 1px solid var(--line); border-radius: 12px; background: var(--bg); }
.tile { padding: 3px; border: 2px solid var(--line); border-radius: 8px; background: var(--surface); cursor: grab; }
.tile.sel { border-color: var(--sun); background: var(--sun-soft); }
.tile img { width: 100%; display: block; }
.hint { font-size: .85rem; color: var(--muted); }
</style>
