<script setup lang="ts">
// Islands on a picture. Select two islands, then "verbinden" lays a new cable between them,
// "trennen" removes a cable you laid. The answer is "ok" when exactly two new cables make the
// network robust: whichever single cable breaks, every island is still connected to Ho.
import { computed, onMounted, ref } from 'vue';

type Island = { id: string; x: number; y: number };
const props = defineProps<{
  background: string; alt: string; width: number; height: number;
  islands: Island[]; existing: [string, string][]; main: string; extra: number;
}>();
const emit = defineEmits<{ answer: [value: string] }>();

const pair = (a: string, b: string) => [a, b].sort().join('-');
const existingKeys = new Set(props.existing.map(([a, b]) => pair(a, b)));
const added = ref<[string, string][]>([]);
const sel = ref<string[]>([]);
const note = ref('');
const byId = Object.fromEntries(props.islands.map((i) => [i.id, i]));

function robust(edges: [string, string][]): boolean {
  const connected = (skip: number) => {
    const seen = new Set<string>([props.main]);
    const stack = [props.main];
    while (stack.length) {
      const n = stack.pop()!;
      edges.forEach(([a, b], i) => {
        if (i === skip) return;
        const o = a === n ? b : b === n ? a : null;
        if (o && !seen.has(o)) { seen.add(o); stack.push(o); }
      });
    }
    return seen.size === props.islands.length;
  };
  return edges.every((_, i) => connected(i)) && connected(-1);
}
function report() {
  emit('answer', added.value.length === props.extra && robust([...props.existing, ...added.value]) ? 'ok' : 'nicht-ok');
}
onMounted(report);

function choose(id: string) {
  note.value = '';
  if (sel.value.includes(id)) sel.value = sel.value.filter((x) => x !== id);
  else sel.value = sel.value.length >= 2 ? [sel.value[1], id] : [...sel.value, id];
}
function connect() {
  const [a, b] = sel.value;
  const k = pair(a, b);
  if (existingKeys.has(k) || added.value.some(([x, y]) => pair(x, y) === k)) { note.value = 'Zwischen diesen Inseln liegt schon ein Kabel.'; return; }
  added.value = [...added.value, [a, b]];
  sel.value = [];
  report();
}
function disconnect() {
  const [a, b] = sel.value;
  const k = pair(a, b);
  if (existingKeys.has(k)) { note.value = 'Dieses Kabel war schon da und bleibt liegen.'; return; }
  if (!added.value.some(([x, y]) => pair(x, y) === k)) { note.value = 'Zwischen diesen Inseln liegt kein neues Kabel.'; return; }
  added.value = added.value.filter(([x, y]) => pair(x, y) !== k);
  sel.value = [];
  report();
}
const ready = computed(() => sel.value.length === 2);
const pct = (v: number, of: number) => `${(v / of) * 100}%`;
</script>

<template>
  <div class="iso">
    <div class="board" :style="{ aspectRatio: `${width} / ${height}` }">
      <img :src="background" :alt="alt" draggable="false" />
      <svg :viewBox="`0 0 ${width} ${height}`" class="lines" aria-hidden="true">
        <line v-for="([a, b], i) in added" :key="i" :x1="byId[a].x" :y1="byId[a].y" :x2="byId[b].x" :y2="byId[b].y" class="cable" />
      </svg>
      <button v-for="i in islands" :key="i.id" type="button" class="isl" :class="{ on: sel.includes(i.id) }" :aria-pressed="sel.includes(i.id)"
              :aria-label="`Insel ${i.id}`" :style="{ left: pct(i.x, width), top: pct(i.y, height) }" @click="choose(i.id)">{{ i.id }}</button>
    </div>
    <div class="bar">
      <button type="button" class="btn" :disabled="!ready" @click="connect">verbinden</button>
      <button type="button" class="btn" :disabled="!ready" @click="disconnect">trennen</button>
      <span class="info" aria-live="polite">{{ note || (added.length ? `Neue Kabel: ${added.map(([a, b]) => `${a}–${b}`).join(', ')}` : 'Noch kein neues Kabel.') }}</span>
    </div>
  </div>
</template>

<style scoped>
.iso { display: grid; gap: 10px; }
.board { position: relative; width: 100%; max-width: 440px; margin-inline: auto; background: #fff; border-radius: 10px; overflow: hidden; }
.board > img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: contain; pointer-events: none; }
.lines { position: absolute; inset: 0; width: 100%; height: 100%; pointer-events: none; }
.cable { stroke: #1d6fd1; stroke-width: 3.5; stroke-linecap: round; stroke-dasharray: 1 0; }
.isl { position: absolute; transform: translate(-50%, -50%); width: 17%; aspect-ratio: 1; border-radius: 50%; border: 2px dashed transparent; background: transparent; color: transparent; cursor: pointer; font-size: 0; }
.isl:hover, .isl:focus-visible { border-color: #0a6f7d; }
.isl.on { border: 3px solid #ffc531; background: rgba(255, 197, 49, .3); }
.bar { display: flex; flex-wrap: wrap; gap: 10px; align-items: center; justify-content: center; }
.btn { border: 0; border-radius: 6px; background: #ffc531; color: #3b2a00; font: 700 1rem var(--font-body); padding: 6px 18px; cursor: pointer; }
.btn:disabled { opacity: .5; cursor: default; }
.info { font-size: .9rem; color: var(--muted); flex-basis: 100%; text-align: center; }
</style>
