<script setup lang="ts">
import { computed, ref } from 'vue';

// Place rectangular pieces on a grid. Select a piece, then tap the grid cell for its top-left corner.
// The answer is the area (in cells) of the smallest rectangle around all pieces, once all pieces are placed.
type Piece = { id: string; w: number; h: number; tone: string; label?: string };
const props = defineProps<{ cols: number; rows: number; pieces: Piece[] }>();
const emit = defineEmits<{ answer: [value: number | null] }>();

type State = { w: number; h: number; x: number | null; y: number | null };
const state = ref<Record<string, State>>(Object.fromEntries(props.pieces.map((p) => [p.id, { w: p.w, h: p.h, x: null, y: null }])));
const selected = ref<string | null>(props.pieces[0]?.id ?? null);
const message = ref('');

const placed = computed(() => props.pieces.filter((p) => state.value[p.id].x !== null));
const bbox = computed(() => {
  if (!placed.value.length) return null;
  let x0 = Infinity, y0 = Infinity, x1 = 0, y1 = 0;
  for (const p of placed.value) {
    const s = state.value[p.id];
    x0 = Math.min(x0, s.x as number); y0 = Math.min(y0, s.y as number);
    x1 = Math.max(x1, (s.x as number) + s.w); y1 = Math.max(y1, (s.y as number) + s.h);
  }
  return { x: x0, y: y0, w: x1 - x0, h: y1 - y0 };
});
const area = computed(() => (bbox.value ? bbox.value.w * bbox.value.h : 0));
const total = computed(() => props.pieces.reduce((n, p) => n + p.w * p.h, 0));
const done = computed(() => placed.value.length === props.pieces.length);
const free = computed(() => area.value - placed.value.reduce((n, p) => n + p.w * p.h, 0));

function send() { emit('answer', done.value ? area.value : null); }

function fits(id: string, x: number, y: number) {
  const s = state.value[id];
  if (x < 0 || y < 0 || x + s.w > props.cols || y + s.h > props.rows) return false;
  return placed.value.every((q) => {
    if (q.id === id) return true;
    const t = state.value[q.id] as State & { x: number; y: number };
    return x + s.w <= t.x || t.x + t.w <= x || y + s.h <= t.y || t.y + t.h <= y;
  });
}
function place(x: number, y: number) {
  const id = selected.value;
  if (!id) { message.value = 'Wähle zuerst eine Tafel aus.'; return; }
  if (!fits(id, x, y)) { message.value = 'Dort ist kein Platz für die Tafel.'; return; }
  state.value = { ...state.value, [id]: { ...state.value[id], x, y } };
  message.value = '';
  const next = props.pieces.find((p) => state.value[p.id].x === null);
  selected.value = next ? next.id : id;
  send();
}
function pick(id: string) {
  selected.value = id;
  if (state.value[id].x !== null) {
    state.value = { ...state.value, [id]: { ...state.value[id], x: null, y: null } };
    send();
  }
}
function rotate() {
  const id = selected.value;
  if (!id) return;
  const s = state.value[id];
  state.value = { ...state.value, [id]: { w: s.h, h: s.w, x: null, y: null } };
  send();
}
function reset() {
  state.value = Object.fromEntries(props.pieces.map((p) => [p.id, { w: p.w, h: p.h, x: null, y: null }]));
  selected.value = props.pieces[0]?.id ?? null;
  message.value = '';
  send();
}
const name = (p: Piece) => p.label ?? `${p.h} × ${p.w}`;
</script>

<template>
  <div class="pack">
    <div class="tray" role="group" aria-label="Tafeln">
      <button v-for="p in pieces" :key="p.id" type="button" class="tile" :class="[p.tone, { sel: selected === p.id, on: state[p.id].x !== null }]"
              :aria-pressed="selected === p.id" :aria-label="`Tafel ${state[p.id].h} × ${state[p.id].w}${state[p.id].x !== null ? ', liegt im Raster, tippen zum Zurücknehmen' : ''}`"
              @click="pick(p.id)">
        <span class="mini" :style="{ gridTemplateColumns: `repeat(${state[p.id].w}, 1fr)`, width: `${state[p.id].w * 22}px`, height: `${state[p.id].h * 22}px` }">
          <i v-for="n in state[p.id].w * state[p.id].h" :key="n" />
        </span>
      </button>
      <button type="button" class="ctl" :disabled="!selected" @click="rotate">Drehen</button>
      <button type="button" class="ctl" @click="reset">Zurücksetzen</button>
    </div>

    <div class="board" :style="{ aspectRatio: `${cols} / ${rows}` }">
      <div class="cells" :style="{ gridTemplateColumns: `repeat(${cols}, 1fr)`, gridTemplateRows: `repeat(${rows}, 1fr)` }">
        <button v-for="n in cols * rows" :key="n" type="button" class="cell" tabindex="-1"
                :aria-label="`Feld Zeile ${Math.floor((n - 1) / cols) + 1}, Spalte ${((n - 1) % cols) + 1}`"
                @click="place((n - 1) % cols, Math.floor((n - 1) / cols))" />
      </div>
      <div v-if="bbox" class="box" :style="{ left: `${bbox.x / cols * 100}%`, top: `${bbox.y / rows * 100}%`, width: `${bbox.w / cols * 100}%`, height: `${bbox.h / rows * 100}%` }" />
      <button v-for="p in placed" :key="p.id" type="button" class="piece" :class="p.tone"
              :style="{ left: `${(state[p.id].x as number) / cols * 100}%`, top: `${(state[p.id].y as number) / rows * 100}%`, width: `${state[p.id].w / cols * 100}%`, height: `${state[p.id].h / rows * 100}%` }"
              :aria-label="`Tafel ${state[p.id].h} × ${state[p.id].w} wieder herausnehmen`" @click="pick(p.id)">
        {{ state[p.id].h }}×{{ state[p.id].w }}
      </button>
    </div>

    <p class="info" role="status">
      <template v-if="message">{{ message }}</template>
      <template v-else-if="done">Schachtel: {{ bbox?.h }} × {{ bbox?.w }} = {{ area }} Stücke, freier Platz: {{ free }} Stücke.</template>
      <template v-else>Wähle eine Tafel, dann tippe auf das Feld, an dem ihre linke obere Ecke liegen soll. Gelegte Tafeln kannst du antippen, um sie wieder zu nehmen.</template>
    </p>
  </div>
</template>

<style scoped>
.pack { display: grid; gap: 10px; max-width: 640px; }
.tray { display: flex; flex-wrap: wrap; gap: 10px; align-items: center; }
.tile { border: 3px solid var(--line); background: var(--surface); border-radius: 10px; padding: 6px; cursor: pointer; display: grid; place-items: center; min-height: 44px; }
.tile.sel { border-color: var(--primary); }
.tile.on { opacity: .45; }
.mini { display: grid; gap: 1px; max-width: 120px; }
.mini i { background: var(--tone); border: 1px solid var(--ink); display: block; }
.ctl { border: 1px solid var(--line); background: var(--surface); color: var(--ink); border-radius: 999px; padding: 6px 14px; cursor: pointer; font: inherit; font-size: .9rem; }
.ctl:disabled { opacity: .5; cursor: default; }
.board { position: relative; width: 100%; background: var(--sunk); border: 2px solid var(--ink); border-radius: 6px; overflow: hidden; }
.cells { position: absolute; inset: 0; display: grid; }
.cell { border: 1px solid var(--line); background: transparent; padding: 0; cursor: pointer; }
.cell:hover { background: var(--primary-soft); }
.box { position: absolute; border: 3px dashed var(--primary); pointer-events: none; box-sizing: border-box; }
.piece { position: absolute; box-sizing: border-box; border: 2px solid var(--ink); background: var(--tone); color: var(--ink); font: 700 .85rem var(--font-body); cursor: pointer; padding: 0; display: grid; place-items: center; }
.piece:focus-visible, .tile:focus-visible, .cell:focus-visible { outline: 3px solid var(--primary); outline-offset: 1px; }
.info { margin: 0; font-size: .9rem; color: var(--muted); }
.t1 { --tone: color-mix(in srgb, var(--teacher) 55%, var(--surface)); }
.t2 { --tone: color-mix(in srgb, var(--sun) 75%, var(--surface)); }
.t3 { --tone: color-mix(in srgb, var(--bad) 50%, var(--surface)); }
.t4 { --tone: color-mix(in srgb, var(--good) 55%, var(--surface)); }
</style>
