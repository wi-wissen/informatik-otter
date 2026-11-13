<script setup lang="ts">
import { computed, ref, watch } from 'vue';

type Job = { id: string; hours: number; after: string[] };
const props = defineProps<{ jobs: Job[] }>();
const emit = defineEmits<{ answer: [value: unknown] }>();

const plan = ref<string[][]>([[], []]);
const placed = computed(() => new Set(plan.value.flat()));
const pool = computed(() => props.jobs.filter((j) => !placed.value.has(j.id)));
const byId = computed(() => Object.fromEntries(props.jobs.map((j) => [j.id, j])));

// Each beaver works through his list in order and waits until predecessors are done.
const schedule = computed(() => {
  const end: Record<string, number> = {};
  const start: Record<string, number> = {};
  const pos = [0, 0];
  const free = [0, 0];
  let progress = true;
  while (progress) {
    progress = false;
    for (let b = 0; b < 2; b++) {
      const id = plan.value[b][pos[b]];
      if (!id) continue;
      const job = byId.value[id];
      if (job.after.every((a) => a in end)) {
        const s = Math.max(free[b], ...job.after.map((a) => end[a]));
        start[id] = s;
        end[id] = s + job.hours;
        free[b] = end[id];
        pos[b]++;
        progress = true;
      }
    }
  }
  const stuck = plan.value.some((l, b) => pos[b] < l.length);
  return { start, end, stuck, total: Math.max(0, ...Object.values(end)) };
});

watch(plan, () => {
  if (pool.value.length > 0) return emit('answer', null);
  emit('answer', schedule.value.stuck ? 'unmöglich' : schedule.value.total);
}, { deep: true });

function add(id: string, b: number) { plan.value[b].push(id); }
function remove(id: string) { plan.value = plan.value.map((l) => l.filter((x) => x !== id)); }
function reset() { plan.value = [[], []]; }
const scale = 14;
</script>

<template>
  <div class="plan">
    <div class="pool" aria-label="Noch nicht eingeplante Aufgaben">
      <span v-if="!pool.length" class="muted">Alle Aufgaben sind eingeplant.</span>
      <div v-for="j in pool" :key="j.id" class="card">
        <strong>{{ j.id }}</strong> <span class="muted">({{ j.hours }} h)</span>
        <button type="button" class="mini" @click="add(j.id, 0)" :aria-label="`${j.id} zu Biber 1`">→ Biber 1</button>
        <button type="button" class="mini" @click="add(j.id, 1)" :aria-label="`${j.id} zu Biber 2`">→ Biber 2</button>
      </div>
    </div>

    <div v-for="(list, b) in plan" :key="b" class="lane">
      <div class="name">Biber {{ b + 1 }}</div>
      <div class="track">
        <button v-for="id in list" :key="id" type="button" class="job" :title="`${id} wieder herausnehmen`"
                :style="{ left: (schedule.start[id] ?? 0) * scale + 'px', width: byId[id].hours * scale + 'px' }"
                :class="{ idle: !(id in schedule.start) }" @click="remove(id)">
          {{ id }}
        </button>
      </div>
    </div>
    <p class="status" role="status">
      <template v-if="schedule.stuck">Dieser Plan geht nicht auf: Ein Biber wartet auf eine Aufgabe, die erst nach ihm drankommt.</template>
      <template v-else>Der Damm wäre nach <strong>{{ schedule.total }}</strong> Stunden fertig.</template>
      <button type="button" class="mini" @click="reset">Plan leeren</button>
    </p>
    <p class="muted small">Tippe auf einen Block im Plan, um die Aufgabe wieder herauszunehmen.</p>
  </div>
</template>

<style scoped>
.plan { display: grid; gap: 12px; }
.pool { display: flex; flex-wrap: wrap; gap: 8px; }
.card { display: flex; align-items: center; gap: 6px; flex-wrap: wrap; padding: 6px 10px; border: 2px solid var(--line); border-radius: 12px; background: var(--surface); }
.mini { font: inherit; font-size: .85rem; padding: 4px 8px; border: 1px solid var(--primary); border-radius: 8px; background: var(--primary-soft); color: var(--ink); cursor: pointer; }
.lane { display: flex; align-items: center; gap: 10px; }
.name { width: 70px; font-weight: 700; flex: none; }
.track { position: relative; flex: 1; height: 40px; min-width: 330px; background: var(--sunk); border-radius: 8px; overflow-x: auto; }
.job { position: absolute; top: 4px; height: 32px; box-sizing: border-box; border: 2px solid var(--primary); background: var(--primary-soft); color: var(--ink); border-radius: 6px; font: 700 1rem var(--font-body); cursor: pointer; }
.job.idle { border-style: dashed; opacity: .6; }
.muted { color: var(--muted); }
.small { font-size: .85rem; margin: 0; }
.status { margin: 0; display: flex; gap: 10px; align-items: center; flex-wrap: wrap; }
.plan { overflow-x: auto; }
</style>
