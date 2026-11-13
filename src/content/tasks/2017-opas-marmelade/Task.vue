<script setup lang="ts">
// A timetable with one row per helper and one column per minute. Pick a work step, then click the
// minute where it starts. The answer is the number of jars that are completely finished
// (washed, then filled, then closed) according to the plan.
import { computed, ref } from 'vue';

type Step = { id: string; label: string; minutes: number };
type Block = { row: number; start: number; step: string };

const props = defineProps<{ names: string[]; minutes: number; steps: Step[] }>();
const emit = defineEmits<{ answer: [value: unknown] }>();

const tool = ref(props.steps[0].id);
const blocks = ref<Block[]>([]);
const len = (id: string) => props.steps.find((s) => s.id === id)!.minutes;
const label = (id: string) => props.steps.find((s) => s.id === id)!.label;

function blockAt(row: number, col: number) {
  return blocks.value.find((b) => b.row === row && col >= b.start && col < b.start + len(b.step));
}
function place(row: number, col: number) {
  const hit = blockAt(row, col);
  if (hit) {
    blocks.value = blocks.value.filter((b) => b !== hit);
  } else {
    const n = len(tool.value);
    if (col + n > props.minutes) return;
    for (let c = col; c < col + n; c++) if (blockAt(row, c)) return;
    blocks.value = [...blocks.value, { row, start: col, step: tool.value }];
  }
  emit('answer', String(finished.value));
}

// Greedy matching: wash -> fill, then fill -> close; every step may be used only once.
function match(early: { end: number }[], late: { start: number; end: number }[]) {
  const free = [...early].sort((a, b) => a.end - b.end);
  const out: { end: number }[] = [];
  for (const l of [...late].sort((a, b) => a.start - b.start)) {
    const i = free.findIndex((e) => e.end <= l.start);
    if (i >= 0) { free.splice(i, 1); out.push({ end: l.end }); }
  }
  return out;
}
const finished = computed(() => {
  const of = (id: string) => blocks.value.filter((b) => b.step === id).map((b) => ({ start: b.start, end: b.start + len(b.step) }));
  const [a, b, c] = props.steps.map((s) => of(s.id));
  return match(match(a, b), c).length;
});
</script>

<template>
  <div class="plan">
    <div class="tools" role="radiogroup" aria-label="Arbeitsschritt wählen">
      <button v-for="(s, i) in steps" :key="s.id" type="button" role="radio" class="tool" :class="['t' + i, { on: tool === s.id }]"
              :aria-checked="tool === s.id" @click="tool = s.id">{{ s.label }} ({{ s.minutes }} Min.)</button>
    </div>
    <div class="table" :style="{ '--n': minutes }">
      <div class="head"><span />
        <span v-for="m in minutes" :key="m" class="min">{{ m }}</span>
      </div>
      <div v-for="(name, r) in names" :key="name" class="row">
        <span class="name">{{ name }}</span>
        <div class="cells">
          <button v-for="c in minutes" :key="c" type="button" class="cell" :style="{ gridColumn: c, gridRow: 1 }"
                  :aria-label="`${name}, Minute ${c}`" @click="place(r, c - 1)" />
          <button v-for="b in blocks.filter((x) => x.row === r)" :key="b.start" type="button" class="block"
                  :class="'t' + steps.findIndex((s) => s.id === b.step)"
                  :style="{ gridColumn: `${b.start + 1} / span ${len(b.step)}`, gridRow: 1 }"
                  :aria-label="`${name}: ${label(b.step)} ab Minute ${b.start + 1} (entfernen)`"
                  @click="place(r, b.start)">{{ label(b.step) }}</button>
        </div>
      </div>
    </div>
    <p class="hint">Wähle einen Arbeitsschritt und klicke auf die Minute, in der er beginnt. Klicke auf einen eingetragenen Schritt, um ihn zu entfernen.</p>
  </div>
</template>

<style scoped>
.plan { display: grid; gap: 12px; }
.tools { display: flex; flex-wrap: wrap; gap: 8px; }
.tool { padding: 8px 12px; border-radius: 10px; border: 2px solid var(--line); background: var(--surface); color: var(--ink); font: inherit; cursor: pointer; }
.tool.on { border-color: var(--primary); box-shadow: 0 0 0 3px var(--primary-soft); }
.tool.t0, .block.t0 { background: var(--sun-soft); }
.tool.t1, .block.t1 { background: var(--primary-soft); }
.tool.t2, .block.t2 { background: var(--good-soft); }
.table { display: grid; gap: 6px; overflow-x: auto; }
.head, .row { display: grid; grid-template-columns: 54px 1fr; align-items: center; min-width: 440px; }
.head .min { text-align: center; font: .75rem var(--font-mono); color: var(--muted); }
.head { grid-template-columns: 54px repeat(var(--n), 1fr); }
.name { font-weight: 700; }
.cells { display: grid; grid-template-columns: repeat(var(--n), 1fr); height: 44px; border: 1px solid var(--line); border-radius: 8px; background: var(--surface); overflow: hidden; }
.cell { border: 0; border-right: 1px solid var(--line); background: transparent; cursor: pointer; padding: 0; }
.cell:hover { background: var(--primary-soft); }
.block { border: 2px solid var(--ink); border-radius: 6px; margin: 2px; color: var(--ink); font: .72rem var(--font-body); font-weight: 700; cursor: pointer; overflow: hidden; padding: 0 2px; }
.hint { margin: 0; color: var(--muted); font-size: .85rem; }
</style>
