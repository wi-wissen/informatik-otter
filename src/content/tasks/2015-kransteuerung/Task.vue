<script setup lang="ts">
// Crane with three positions and two boxes. The student builds a command list; the scene is
// computed from the whole list. The answer is "ok" when box A is on 2 and box B is on 1.
import { computed, onMounted, ref } from 'vue';

const emit = defineEmits<{ answer: [value: string] }>();

type Cmd = 'LINKS' | 'RECHTS' | 'RAUF' | 'RUNTER' | 'LOSLASSEN' | 'ZUGREIFEN';
const buttons: { id: Cmd; label: string; icon: string }[] = [
  { id: 'LINKS', label: 'LINKS', icon: '◀' },
  { id: 'RECHTS', label: 'RECHTS', icon: '▶' },
  { id: 'RAUF', label: 'RAUF', icon: '▲' },
  { id: 'RUNTER', label: 'RUNTER', icon: '▼' },
  { id: 'ZUGREIFEN', label: 'ZUGREIFEN', icon: '✊' },
  { id: 'LOSLASSEN', label: 'LOSLASSEN', icon: '✋' },
];

type State = { x: number; down: boolean; closed: boolean; held: 'A' | 'B' | null; ground: Record<'A' | 'B', number | null> };
const start = (): State => ({ x: 1, down: false, closed: false, held: null, ground: { A: 1, B: 2 } });

function boxAt(s: State, x: number) {
  return (['A', 'B'] as const).find((b) => s.ground[b] === x) ?? null;
}
function step(s: State, c: Cmd): State {
  const n: State = { ...s, ground: { ...s.ground } };
  if (c === 'LINKS' && !s.down && s.x > 1) n.x = s.x - 1;
  else if (c === 'RECHTS' && !s.down && s.x < 3) n.x = s.x + 1;
  else if (c === 'RAUF') n.down = false;
  else if (c === 'RUNTER') {
    // a carried box cannot be lowered onto another box
    if (!(s.held && boxAt(s, s.x))) n.down = true;
  } else if (c === 'ZUGREIFEN') {
    n.closed = true;
    if (s.down && !s.held) {
      const b = boxAt(s, s.x);
      if (b) { n.held = b; n.ground[b] = null; }
    }
  } else if (c === 'LOSLASSEN') {
    n.closed = false;
    if (s.held && !boxAt(s, s.x)) { n.ground[s.held] = s.x; n.held = null; }
  }
  return n;
}

const program = ref<Cmd[]>([]);
const state = computed(() => program.value.reduce(step, start()));
const where = (s: State, b: 'A' | 'B') => (s.held === b ? s.x : s.ground[b]);
const solved = computed(() => where(state.value, 'A') === 2 && where(state.value, 'B') === 1);

function report() {
  emit('answer', solved.value ? 'ok' : 'nein');
}
function add(c: Cmd) {
  program.value = [...program.value, c];
  report();
}
function undo() {
  program.value = program.value.slice(0, -1);
  report();
}
function reset() {
  program.value = [];
  report();
}
onMounted(report);

const cx = (x: number) => 50 + (x - 1) * 100;
const gy = computed(() => (state.value.down ? 112 : 56));
const open = computed(() => (state.value.closed ? 22 : 31));
const boxes = computed(() =>
  (['A', 'B'] as const).map((b) => {
    const s = state.value;
    const held = s.held === b;
    return { id: b, x: held ? cx(s.x) : cx(s.ground[b] as number), y: held ? gy.value + 22 : 136 };
  }),
);
</script>

<template>
  <div class="crane">
    <svg viewBox="0 0 300 200" class="svg" role="img"
      :aria-label="`Kran über Position ${state.x}, ${state.down ? 'unten' : 'oben'}; Kiste A auf ${where(state, 'A')}, Kiste B auf ${where(state, 'B')}`">
      <rect x="4" y="6" width="292" height="10" class="rail" />
      <rect :x="cx(state.x) - 16" y="4" width="32" height="14" rx="3" class="cart" />
      <line :x1="cx(state.x)" y1="18" :x2="cx(state.x)" :y2="gy" class="cable" />
      <rect :x="cx(state.x) - 18" :y="gy" width="36" height="7" class="claw" />
      <rect :x="cx(state.x) - open - 5" :y="gy" width="5" height="34" class="claw" />
      <rect :x="cx(state.x) + open" :y="gy" width="5" height="34" class="claw" />
      <g v-for="b in boxes" :key="b.id" :class="['box', b.id]">
        <rect :x="b.x - 20" :y="b.y" width="40" height="40" rx="3" />
        <text :x="b.x" :y="b.y + 21" text-anchor="middle" dominant-baseline="central">{{ b.id }}</text>
      </g>
      <g v-for="n in 3" :key="n">
        <rect :x="cx(n) - 24" y="176" width="48" height="5" class="base" />
        <text :x="cx(n)" y="194" text-anchor="middle" class="num">{{ n }}</text>
      </g>
    </svg>
    <div class="pad" role="group" aria-label="Befehlsknöpfe">
      <button v-for="b in buttons" :key="b.id" type="button" @click="add(b.id)">
        <span class="ic" aria-hidden="true">{{ b.icon }}</span> {{ b.label }}
      </button>
    </div>
    <p class="log" aria-live="polite"><span class="muted">Befehle ({{ program.length }}):</span> {{ program.join(' ') || '–' }}</p>
    <div class="bar">
      <span class="hint">Links und rechts fährt der Kran nur, wenn er oben ist.</span>
      <span class="btns">
        <button type="button" class="small" :disabled="!program.length" @click="undo">Letzten Befehl zurücknehmen</button>
        <button type="button" class="small" @click="reset">Zurücksetzen</button>
      </span>
    </div>
  </div>
</template>

<style scoped>
.crane { display: grid; gap: 10px; }
.svg { width: 100%; max-width: 420px; margin: 0 auto; display: block; background: var(--sunk); border-radius: 10px; }
.rail { fill: var(--ink); }
.cart { fill: var(--muted); }
.cable { stroke: var(--ink); stroke-width: 3; }
.claw { fill: var(--ink); }
.box rect { stroke-width: 2; }
.box.A rect { fill: var(--good-soft); stroke: var(--good); }
.box.B rect { fill: var(--sun-soft); stroke: var(--sun); }
.box text { font: 700 20px var(--font-body); fill: var(--ink); }
.base { fill: var(--bad); }
.num { font: 700 13px var(--font-body); fill: var(--ink); }
.pad { display: flex; flex-wrap: wrap; gap: 8px; }
.pad button { border: 2px solid var(--primary); background: var(--surface); color: var(--ink); border-radius: 12px; padding: 8px 12px; min-height: 44px; font: inherit; font-weight: 600; cursor: pointer; }
.pad button:hover, .pad button:focus-visible { background: var(--primary); color: var(--primary-ink); }
.ic { display: inline-block; min-width: 1.2em; }
.log { margin: 0; font-family: var(--font-mono); font-size: .8rem; overflow-wrap: anywhere; }
.muted { color: var(--muted); }
.bar { display: flex; justify-content: space-between; gap: 8px; align-items: center; flex-wrap: wrap; }
.btns { display: flex; gap: 8px; flex-wrap: wrap; }
.hint { font-size: .85rem; color: var(--muted); }
.small { border: 1px solid var(--line); background: var(--surface); color: var(--ink); border-radius: 999px; padding: 4px 12px; cursor: pointer; font: inherit; font-size: .85rem; }
.small:disabled { opacity: .5; cursor: default; }
</style>
