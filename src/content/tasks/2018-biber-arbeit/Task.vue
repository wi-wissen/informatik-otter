<script setup lang="ts">
import { computed, ref } from 'vue';

type Job = { id: string; hours: number; after: string[] };
const props = defineProps<{ jobs: Job[]; workers: number; best: number }>();
const emit = defineEmits<{ answer: [value: string] }>();

const lanes = ref<string[][]>(Array.from({ length: props.workers }, () => []));
const active = ref(0);
const job = Object.fromEntries(props.jobs.map((j) => [j.id, j]));
const placed = computed(() => new Set(lanes.value.flat()));

// Run every lane in its given order; a job starts when its worker is free and all predecessors are done.
const plan = computed(() => {
  const done: Record<string, { start: number; end: number }> = {};
  const idx = lanes.value.map(() => 0);
  const free = lanes.value.map(() => 0);
  let moved = true;
  while (moved) {
    moved = false;
    lanes.value.forEach((lane, w) => {
      const id = lane[idx[w]];
      if (!id || !job[id].after.every((p) => done[p])) return;
      const start = Math.max(free[w], ...job[id].after.map((p) => done[p].end));
      done[id] = { start, end: start + job[id].hours };
      free[w] = done[id].end;
      idx[w]++;
      moved = true;
    });
  }
  return done;
});
const finish = computed(() => Math.max(0, ...Object.values(plan.value).map((d) => d.end)));
const complete = computed(() => props.jobs.every((j) => plan.value[j.id]));
const blocked = computed(() => placed.value.size > Object.keys(plan.value).length);
const scale = 18;
const width = computed(() => Math.max(finish.value, props.best) * scale + 2);

function emitAnswer() {
  emit('answer', complete.value && finish.value === props.best ? 'ok' : complete.value ? `fertig nach ${finish.value}` : '');
}
function add(id: string) {
  if (placed.value.has(id)) return;
  lanes.value = lanes.value.map((l, i) => (i === active.value ? [...l, id] : l));
  emitAnswer();
}
function remove(w: number, i: number) {
  lanes.value = lanes.value.map((l, k) => (k === w ? l.filter((_, n) => n !== i) : l));
  emitAnswer();
}
function reset() {
  lanes.value = lanes.value.map(() => []);
  emitAnswer();
}
function ready(id: string) {
  return job[id].after.every((p) => placed.value.has(p));
}
</script>

<template>
  <div class="plan">
    <div class="pool" role="group" aria-label="Aufgaben">
      <button v-for="j in jobs" :key="j.id" type="button" class="job" :class="{ used: placed.has(j.id), wait: !ready(j.id) && !placed.has(j.id) }"
        :disabled="placed.has(j.id)" @click="add(j.id)" :aria-label="`Aufgabe ${j.id}, ${j.hours} Stunden`">
        <b>{{ j.id }}</b><span>{{ j.hours }} h</span>
      </button>
    </div>
    <div class="pick" role="radiogroup" aria-label="Biber wählen">
      <span>Neue Aufgabe zu:</span>
      <button v-for="(_, w) in lanes" :key="w" type="button" role="radio" :aria-checked="active === w" :class="{ on: active === w }" @click="active = w">Biber {{ w + 1 }}</button>
      <button type="button" class="reset" @click="reset">Zurücksetzen</button>
    </div>
    <div class="lanes">
      <div v-for="(lane, w) in lanes" :key="w" class="lane">
        <span class="who">Biber {{ w + 1 }}</span>
        <div class="track" :style="{ width: width + 'px' }">
          <button v-for="(id, i) in lane" :key="id" type="button" class="bar" :class="{ stuck: !plan[id] }"
            :style="plan[id] ? { left: plan[id].start * scale + 'px', width: job[id].hours * scale - 2 + 'px' }
              : { position: 'static', width: job[id].hours * scale - 2 + 'px' }"
            :aria-label="`Aufgabe ${id} von Biber ${w + 1} entfernen`" @click="remove(w, i)">{{ id }}</button>
        </div>
      </div>
    </div>
    <p class="hint">Tippe auf eine Aufgabe im Plan, um sie wieder zu entfernen. Die Aufgaben eines Bibers laufen in der Reihenfolge, in der du sie hinzufügst.</p>
    <p class="sum" :class="{ bad: blocked }">
      <template v-if="blocked">Manche Aufgaben können nicht beginnen, weil eine Aufgabe davor fehlt oder falsch eingeordnet ist.</template>
      <template v-else-if="placed.size">Fertig nach {{ finish }} Stunden{{ complete ? '' : ' (noch nicht alle Aufgaben verteilt)' }}.</template>
      <template v-else>Noch keine Aufgabe verteilt.</template>
    </p>
  </div>
</template>

<style scoped>
.plan { display: grid; gap: 10px; }
.pool { display: flex; flex-wrap: wrap; gap: 6px; }
.job { display: grid; place-items: center; min-width: 52px; padding: 6px 8px; border: 2px solid var(--line); border-radius: 10px; background: var(--surface); color: var(--ink); font: inherit; cursor: pointer; }
.job span { font-size: .8rem; color: var(--muted); }
.job:hover:not(:disabled) { border-color: var(--primary); }
.job.wait { background: var(--sunk); }
.job.used { opacity: .35; cursor: default; }
.pick { display: flex; flex-wrap: wrap; gap: 6px; align-items: center; font-size: .9rem; }
.pick button { border: 1px solid var(--line); background: var(--surface); color: var(--ink); border-radius: 999px; padding: 4px 12px; cursor: pointer; font: inherit; font-size: .85rem; }
.pick button.on { border-color: var(--primary); background: var(--primary-soft); font-weight: 700; }
.pick .reset { margin-left: auto; }
.lanes { display: grid; gap: 6px; overflow-x: auto; }
.lane { display: flex; align-items: center; gap: 8px; }
.who { width: 64px; flex: none; font-size: .85rem; color: var(--muted); }
.track { position: relative; height: 40px; flex: none; border: 1px dashed var(--line); border-radius: 8px; background: var(--sunk); }
.bar { position: absolute; top: 3px; height: 32px; border: 2px solid var(--primary); border-radius: 8px; background: var(--primary-soft); color: var(--ink); font: 700 1rem var(--font-body); cursor: pointer; padding: 0; }
.bar.stuck { position: static; border-color: var(--bad); background: var(--bad-soft); }
.bar:hover { border-color: var(--ink); }
.hint { margin: 0; font-size: .85rem; color: var(--muted); }
.sum { margin: 0; font-weight: 700; }
.sum.bad { color: var(--bad); }
</style>
