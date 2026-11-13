<script setup lang="ts">
// Beads come out of the tube one after another. For each bead: thread it on the string ("verwenden") or put it aside ("weglegen").
// A bead may only be used if the string is empty or the bead is bigger than the last one on the string.
// Emits the used beads (as strings, in order) once every bead has been decided, otherwise null.
import { computed, onMounted, ref } from 'vue';

const props = defineProps<{ beads: number[] }>();
const emit = defineEmits<{ answer: [value: string[] | null] }>();

const decisions = ref<boolean[]>([]); // true = used, in tube order
const next = computed(() => decisions.value.length);
const done = computed(() => next.value >= props.beads.length);
const used = computed(() => props.beads.filter((_, i) => decisions.value[i]));
const aside = computed(() => props.beads.filter((_, i) => decisions.value[i] === false));
const last = computed(() => used.value[used.value.length - 1]);
const canUse = computed(() => !done.value && (last.value === undefined || props.beads[next.value] > last.value));
const waiting = computed(() => props.beads.slice(next.value));

function report() { emit('answer', done.value ? used.value.map(String) : null); }
onMounted(report);
function decide(use: boolean) {
  if (done.value || (use && !canUse.value)) return;
  decisions.value = [...decisions.value, use];
  report();
}
function undo() { decisions.value = decisions.value.slice(0, -1); report(); }
function reset() { decisions.value = []; report(); }
</script>

<template>
  <div class="bd">
    <div class="tube" aria-label="Röhrchen mit den noch wartenden Perlen">
      <span class="cap">Röhrchen</span>
      <span v-for="(b, i) in waiting" :key="`${next}-${i}`" class="bead" :class="{ front: i === 0 }">{{ b }}</span>
      <span v-if="done" class="empty">leer</span>
    </div>

    <div class="actions">
      <button type="button" class="act use" :disabled="!canUse" @click="decide(true)">
        {{ done ? 'Alle Perlen entschieden' : `Perle ${beads[next]} verwenden` }}
      </button>
      <button type="button" class="act skip" :disabled="done" @click="decide(false)">
        {{ done ? '' : `Perle ${beads[next]} weglegen` }}
      </button>
    </div>
    <p v-if="!done && !canUse" class="note">Die {{ beads[next] }} ist nicht größer als die {{ last }} auf der Schnur. Sie kann nur weggelegt werden.</p>

    <div class="string" aria-label="Schnur mit den verwendeten Perlen">
      <span class="cap">Schnur</span>
      <span v-for="(b, i) in used" :key="i" class="bead used">{{ b }}</span>
      <span v-if="!used.length" class="empty">noch leer</span>
    </div>
    <div class="aside" aria-label="Weggelegte Perlen">
      <span class="cap">Weggelegt</span>
      <span v-for="(b, i) in aside" :key="i" class="bead off">{{ b }}</span>
      <span v-if="!aside.length" class="empty">nichts</span>
    </div>

    <div class="bar">
      <span class="hint">{{ done ? `Armband mit ${used.length} Perlen` : `${next} von ${beads.length} Perlen entschieden` }}</span>
      <span class="btns">
        <button type="button" class="small" :disabled="!decisions.length" @click="undo">Letzte Entscheidung zurücknehmen</button>
        <button type="button" class="small" :disabled="!decisions.length" @click="reset">Von vorn beginnen</button>
      </span>
    </div>
  </div>
</template>

<style scoped>
.bd { display: grid; gap: 12px; }
.tube, .string, .aside { display: flex; flex-wrap: wrap; align-items: center; gap: 8px; padding: 10px 12px; border-radius: 999px; min-height: 58px; }
.tube { background: var(--primary-soft); border: 2px solid var(--primary); }
.string { border: 2px dashed var(--line); background: var(--surface); border-radius: 14px; }
.aside { border: 2px solid var(--line); background: var(--sunk); border-radius: 14px; }
.cap { font-size: .75rem; font-weight: 700; text-transform: uppercase; letter-spacing: .04em; color: var(--muted); min-width: 74px; }
.bead { display: inline-grid; place-items: center; width: 38px; height: 38px; border-radius: 50%; background: #fff3b8; color: #3b2a00; font: 800 1.05rem var(--font-body); border: 2px solid #c9a227; }
.bead.front { box-shadow: 0 0 0 3px var(--sun); }
.bead.used { background: #ffe680; }
.bead.off { opacity: .55; }
.empty { color: var(--muted); font-size: .9rem; }
.actions { display: flex; flex-wrap: wrap; gap: 10px; }
.act { flex: 1 1 180px; padding: 10px 14px; border-radius: 10px; font: 700 1rem var(--font-body); cursor: pointer; border: 2px solid var(--primary); }
.act.use { background: var(--primary); color: var(--primary-ink); }
.act.skip { background: var(--surface); color: var(--ink); border-color: var(--line); }
.act:disabled { opacity: .4; cursor: not-allowed; }
.act:focus-visible { outline: 3px solid var(--sun); }
.note { margin: 0; font-size: .9rem; color: var(--muted); }
.bar { display: flex; justify-content: space-between; gap: 8px; flex-wrap: wrap; align-items: center; }
.hint { font-size: .85rem; color: var(--muted); }
.btns { display: flex; gap: 8px; flex-wrap: wrap; }
.small { border: 1px solid var(--line); background: var(--surface); color: var(--ink); border-radius: 999px; padding: 4px 12px; cursor: pointer; font: inherit; font-size: .85rem; }
.small:disabled { opacity: .4; cursor: default; }
</style>
