<script setup lang="ts">
import { ref } from 'vue';

type Step = { device: string; slots: number };
type Ingredient = { id: string; label: string; steps: Step[] };
type Device = { id: string; label: string };
const props = defineProps<{
  devices: Device[];
  ingredients: Ingredient[];
  slots: number; // number of time columns
  slotMinutes: number;
  maxSlots: number; // plan must finish within this many columns
}>();
const emit = defineEmits<{ answer: [value: string] }>();

const grid = ref<string[][]>(props.devices.map(() => Array(props.slots).fill('')));
const current = ref(props.ingredients[0]?.id ?? '');
const labelOf = Object.fromEntries(props.ingredients.map((i) => [i.id, i.label]));

function toggle(d: number, s: number) {
  const next = grid.value.map((r) => [...r]);
  next[d][s] = next[d][s] === current.value ? '' : current.value;
  grid.value = next;
  emit('answer', verdict(next));
}
function clear() {
  grid.value = props.devices.map(() => Array(props.slots).fill(''));
  emit('answer', '');
}

// "ok" if every step has the right length on the right device, steps of one
// ingredient follow each other, and everything is done within maxSlots columns.
function verdict(g: string[][]): string {
  for (const ing of props.ingredients) {
    let earliest = 0;
    const used = new Set<number>();
    for (const st of ing.steps) {
      const d = props.devices.findIndex((x) => x.id === st.device);
      const cols = g[d].map((v, i) => (v === ing.id ? i : -1)).filter((i) => i >= 0);
      if (cols.length !== st.slots) return 'nein';
      if (cols[cols.length - 1] - cols[0] !== st.slots - 1) return 'nein';
      if (cols[0] < earliest) return 'nein';
      earliest = cols[cols.length - 1] + 1;
      used.add(d);
    }
    for (let d = 0; d < g.length; d++) if (!used.has(d) && g[d].includes(ing.id)) return 'nein';
  }
  for (const row of g) for (let s = props.maxSlots; s < row.length; s++) if (row[s]) return 'nein';
  return 'ok';
}
</script>

<template>
  <div class="plan">
    <div class="pal" role="radiogroup" aria-label="Zutat wählen">
      <button v-for="i in ingredients" :key="i.id" type="button" role="radio" :aria-checked="current === i.id"
        :class="['chip', { on: current === i.id }]" @click="current = i.id">{{ i.label }}</button>
    </div>
    <p class="hint">Wähle eine Zutat und tippe dann auf die Zeitfelder der Geräte, in denen sie bearbeitet wird. Jedes Feld sind {{ slotMinutes }} Minuten.</p>
    <table class="tbl">
      <thead>
        <tr><th></th><th v-for="s in slots" :key="s" scope="col">{{ (s - 1) * slotMinutes }}</th></tr>
      </thead>
      <tbody>
        <tr v-for="(d, di) in devices" :key="d.id">
          <th scope="row">{{ d.label }}</th>
          <td v-for="s in slots" :key="s">
            <button type="button" :class="['cell', { filled: grid[di][s - 1] }]" @click="toggle(di, s - 1)"
              :aria-label="`${d.label}, ab Minute ${(s - 1) * slotMinutes}: ${grid[di][s - 1] ? labelOf[grid[di][s - 1]] : 'leer'}`">
              {{ grid[di][s - 1] ? labelOf[grid[di][s - 1]] : '' }}
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="bar"><button type="button" class="reset" @click="clear">Plan löschen</button></div>
  </div>
</template>

<style scoped>
.plan { display: grid; gap: 10px; }
.pal { display: flex; flex-wrap: wrap; gap: 8px; }
.chip { border: 2px solid var(--line); background: var(--surface); color: var(--ink); border-radius: 999px; padding: 6px 14px; cursor: pointer; font: inherit; }
.chip.on { border-color: var(--primary); background: var(--primary-soft); font-weight: 700; }
.hint { margin: 0; color: var(--muted); font-size: .85rem; }
.tbl { border-collapse: separate; border-spacing: 4px; width: 100%; table-layout: fixed; }
.tbl th { font-size: .8rem; font-weight: 600; color: var(--muted); text-align: left; }
.tbl thead th { text-align: left; font-family: var(--font-mono); }
.tbl tbody th { width: 22%; color: var(--ink); }
.cell { width: 100%; min-height: 44px; border: 2px solid var(--line); background: var(--surface); color: var(--ink); border-radius: 8px; cursor: pointer; font: inherit; font-size: .72rem; padding: 2px; overflow: hidden; }
.cell:hover { border-color: var(--primary); }
.cell.filled { background: var(--primary-soft); border-color: var(--primary); font-weight: 600; }
.bar { display: flex; justify-content: flex-end; }
.reset { border: 1px solid var(--line); background: var(--surface); color: var(--ink); border-radius: 999px; padding: 4px 12px; cursor: pointer; font: inherit; font-size: .85rem; }
</style>
