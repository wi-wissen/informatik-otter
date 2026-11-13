<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';

// Table of smiley ratings. Tap a smiley to change it (gut -> mittel -> schlecht -> gut).
// The answer is the list of changed cells as { "<row id>-<column number>": "<new rating>" }.
type Row = { id: string; label: string; ratings: string[] };
const props = defineProps<{ rows: Row[]; columnLabel?: string }>();
const emit = defineEmits<{ answer: [value: Record<string, string>] }>();

const ORDER = ['g', 'm', 's'];
const NAMES: Record<string, string> = { g: 'gut', m: 'mittel', s: 'schlecht' };
const state = ref<string[][]>(props.rows.map((r) => [...r.ratings]));
const columns = computed(() => props.rows[0]?.ratings.length ?? 0);

const changes = computed(() => {
  const out: Record<string, string> = {};
  props.rows.forEach((r, i) => r.ratings.forEach((orig, j) => {
    if (state.value[i][j] !== orig) out[`${r.id}-${j + 1}`] = state.value[i][j];
  }));
  return out;
});
const count = computed(() => Object.keys(changes.value).length);

function send() { emit('answer', { ...changes.value }); }
onMounted(send);
function cycle(i: number, j: number) {
  const next = state.value.map((r) => [...r]);
  next[i][j] = ORDER[(ORDER.indexOf(next[i][j]) + 1) % ORDER.length];
  state.value = next;
  send();
}
function reset() { state.value = props.rows.map((r) => [...r.ratings]); send(); }
const changed = (i: number, j: number) => state.value[i][j] !== props.rows[i].ratings[j];
</script>

<template>
  <div class="films">
    <div class="scroll">
      <table>
        <thead>
          <tr>
            <th scope="col"><span class="sr">Person</span></th>
            <th v-for="j in columns" :key="j" scope="col">{{ columnLabel ?? 'Film' }} {{ j }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(r, i) in rows" :key="r.id">
            <th scope="row">{{ r.label }}</th>
            <td v-for="j in columns" :key="j">
              <button type="button" class="face" :class="[state[i][j - 1], { changed: changed(i, j - 1) }]"
                      :aria-label="`${r.label}, ${columnLabel ?? 'Film'} ${j}: ${NAMES[state[i][j - 1]]}`"
                      @click="cycle(i, j - 1)">
                <svg viewBox="0 0 40 40" aria-hidden="true">
                  <circle cx="20" cy="20" r="17" class="bg" />
                  <circle cx="14" cy="16" r="2" class="ink" /><circle cx="26" cy="16" r="2" class="ink" />
                  <path v-if="state[i][j - 1] === 'g'" d="M12 25 Q20 33 28 25" class="mouth" />
                  <path v-else-if="state[i][j - 1] === 'm'" d="M13 27 H27" class="mouth" />
                  <path v-else d="M12 29 Q20 21 28 29" class="mouth" />
                </svg>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="bar">
      <span class="hint">Tippe auf ein Gesicht, um die Bewertung zu ändern. Geänderte Bewertungen: <strong>{{ count }}</strong></span>
      <button type="button" class="reset" @click="reset">Zurücksetzen</button>
    </div>
  </div>
</template>

<style scoped>
.films { display: grid; gap: 8px; }
.scroll { overflow-x: auto; }
table { border-collapse: collapse; min-width: 100%; }
th, td { border: 1px solid var(--line); padding: 3px; text-align: center; color: var(--ink); font-size: .9rem; }
thead th { background: var(--sunk); }
tbody th { text-align: left; padding: 3px 8px; background: var(--sunk); white-space: nowrap; }
.sr { position: absolute; left: -9999px; }
.face { border: 0; background: transparent; padding: 0; cursor: pointer; width: 40px; height: 40px; border-radius: 50%; display: block; margin: 0 auto; }
.face svg { width: 100%; height: 100%; display: block; }
.bg { stroke: var(--ink); stroke-width: 2; }
.g .bg { fill: var(--good); }
.m .bg { fill: var(--sun); }
.s .bg { fill: var(--bad); }
.ink { fill: var(--ink); }
.mouth { fill: none; stroke: var(--ink); stroke-width: 2.5; stroke-linecap: round; }
.face.changed { outline: 3px solid var(--primary); outline-offset: 1px; }
.face:focus-visible { outline: 3px solid var(--primary); outline-offset: 2px; }
.bar { display: flex; justify-content: space-between; gap: 8px; align-items: center; flex-wrap: wrap; }
.hint { font-size: .85rem; color: var(--muted); }
.reset { border: 1px solid var(--line); background: var(--surface); color: var(--ink); border-radius: 999px; padding: 4px 12px; cursor: pointer; font: inherit; font-size: .85rem; }
</style>
