<script setup lang="ts">
import { computed, ref, watch } from 'vue';

type Job = { id: string; hours: number; after: string[]; color?: string };
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

const selected = ref<string | null>(null);
const ready = (id: string) => byId.value[id].after.every((a) => placed.value.has(a)); // grey while predecessors are not in the plan
function add(id: string, b: number) { remove(id); plan.value[b].push(id); selected.value = null; }
function remove(id: string) { plan.value = plan.value.map((l) => l.filter((x) => x !== id)); }
function tapJob(id: string) { selected.value = selected.value === id ? null : id; }
function tapLane(b: number) { if (selected.value) add(selected.value, b); }
function dragStart(e: DragEvent, id: string) { e.dataTransfer?.setData('text/plain', id); selected.value = id; }
function dropLane(e: DragEvent, b: number) { e.preventDefault(); const id = e.dataTransfer?.getData('text/plain'); if (id && byId.value[id]) add(id, b); }
function dropPool(e: DragEvent) { e.preventDefault(); const id = e.dataTransfer?.getData('text/plain'); if (id && byId.value[id]) { remove(id); selected.value = null; } }
function reset() { plan.value = [[], []]; }
const scale = 14;
</script>

<template>
  <div class="plan">
    <div class="pool" role="group" aria-label="Noch nicht eingeplante Aufgaben" @dragover.prevent @drop="dropPool">
      <span v-if="!pool.length" class="muted">Alle Aufgaben sind eingeplant. Tippe oder ziehe eine Aufgabe aus dem Plan hierher, um sie zurückzulegen.</span>
      <button v-for="j in pool" :key="j.id" type="button" class="block" :class="{ grey: !ready(j.id), sel: selected === j.id }"
              :style="{ width: j.hours * scale + 'px', '--c': j.color }" draggable="true" :aria-pressed="selected === j.id"
              :aria-label="`Aufgabe ${j.id}, ${j.hours} Stunden${ready(j.id) ? '' : ', kann noch nicht begonnen werden'}`"
              @click="tapJob(j.id)" @dragstart="dragStart($event, j.id)">
        {{ j.id }}
      </button>
    </div>

    <div v-for="(list, b) in plan" :key="b" class="lane">
      <button type="button" class="name" :class="{ target: !!selected }" :aria-label="`Biber ${b + 1}: ausgewählte Aufgabe hier einplanen`" @click="tapLane(b)">Biber {{ b + 1 }}</button>
      <div class="track" :class="{ target: !!selected }" @click="tapLane(b)" @dragover.prevent @drop="dropLane($event, b)">
        <button v-for="id in list" :key="id" type="button" class="job" :title="`${id} wieder herausnehmen`" draggable="true"
                :style="{ left: (schedule.start[id] ?? 0) * scale + 'px', width: byId[id].hours * scale + 'px', '--c': byId[id].color }"
                :class="{ idle: !(id in schedule.start) }" :aria-label="`${id} aus dem Plan nehmen`"
                @click.stop="remove(id)" @dragstart="dragStart($event, id)">
          {{ id }}
        </button>
      </div>
    </div>
    <p class="status" role="status">
      <template v-if="schedule.stuck">Dieser Plan geht nicht auf: Ein Biber wartet auf eine Aufgabe, die erst nach ihm drankommt.</template>
      <template v-else>Der Damm wäre nach <strong>{{ schedule.total }}</strong> Stunden fertig.</template>
      <button type="button" class="mini" @click="reset">Plan leeren</button>
    </p>
    <p class="muted small">Ziehe die Aufgaben in den Plan (oder tippe erst eine Aufgabe an und dann den Biber). Aufgaben, die noch nicht begonnen werden können, sind grau. Tippe auf einen Block im Plan, um die Aufgabe wieder herauszunehmen.</p>
  </div>
</template>

<style scoped>
.plan { display: grid; gap: 12px; overflow-x: auto; }
.pool { display: flex; flex-wrap: wrap; gap: 6px; min-height: 48px; padding: 6px; border: 1px dashed var(--line); border-radius: 10px; align-items: center; }
.block, .job { box-sizing: border-box; height: 38px; border: 2px solid var(--ink); border-radius: 4px; background: var(--c, var(--primary-soft)); color: #10313a; font: 700 1rem var(--font-body); cursor: grab; padding: 0; }
.block.grey { background: #b8b8b8; border-color: #777; }
.block.sel { outline: 3px solid var(--sun); }
.mini { font: inherit; font-size: .85rem; padding: 4px 8px; border: 1px solid var(--primary); border-radius: 8px; background: var(--primary-soft); color: var(--ink); cursor: pointer; }
.lane { display: flex; align-items: center; gap: 10px; }
.name { width: 78px; flex: none; font: 700 1rem var(--font-body); color: var(--ink); text-align: left; padding: 8px; border: 1px solid var(--line); border-radius: 8px; background: var(--sunk); cursor: pointer; }
.name.target, .track.target { outline: 2px dashed var(--sun); }
.track { position: relative; flex: 1; height: 46px; min-width: 330px; background: var(--sunk); border-radius: 8px; overflow-x: auto; }
.job { position: absolute; top: 4px; }
.job.idle { border-style: dashed; opacity: .6; }
.muted { color: var(--muted); }
.small { font-size: .85rem; margin: 0; }
.status { margin: 0; display: flex; gap: 10px; align-items: center; flex-wrap: wrap; }
</style>
