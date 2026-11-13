<script setup lang="ts">
// Hosts one task interaction. In teacher mode (set on /teachers/) it adds "Prüfen" and "Hintergrund".
import { computed, defineAsyncComponent, onMounted, ref, shallowRef } from 'vue';
import Choice from './formats/Choice.vue';
import SortList from './formats/SortList.vue';
import Match from './formats/Match.vue';
import GraphPick from './formats/GraphPick.vue';
import PixelGrid from './formats/PixelGrid.vue';
import CommandSequence from './formats/CommandSequence.vue';
import Input from './formats/Input.vue';
import { isCorrect } from '../lib/answer';

const props = defineProps<{ taskId: string; format: string; props: Record<string, unknown>; solutionUrl: string }>();

const customs = import.meta.glob('../content/tasks/*/Task.vue');
const formats: Record<string, unknown> = {
  choice: Choice, 'sort-list': SortList, match: Match, 'graph-pick': GraphPick,
  'pixel-grid': PixelGrid, 'command-sequence': CommandSequence, input: Input,
};
const component = computed(() => {
  if (props.format !== 'custom') return formats[props.format];
  const loader = customs[`../content/tasks/${props.taskId}/Task.vue`];
  return loader ? defineAsyncComponent(loader as never) : null;
});

const answer = shallowRef<unknown>(null);
const teacher = ref(false);
const feedback = ref<'right' | 'wrong' | 'empty' | null>(null);
const solutionHtml = ref<string | null>(null);
const showSolution = ref(false);
const loading = ref(false);
let key: { answer?: unknown; answers?: unknown[] } | null = null;

onMounted(() => {
  try { teacher.value = localStorage.getItem('informatik-otter:teacher') === '1'; } catch { /* storage blocked */ }
});

function onAnswer(v: unknown) { answer.value = v; feedback.value = null; }

async function loadSolution() {
  if (key) return;
  loading.value = true;
  try {
    const res = await fetch(props.solutionUrl);
    const doc = new DOMParser().parseFromString(await res.text(), 'text/html');
    key = JSON.parse(doc.getElementById('answer-key')?.textContent ?? '{}');
    solutionHtml.value = doc.getElementById('solution')?.innerHTML ?? '';
  } finally { loading.value = false; }
}
async function check() {
  await loadSolution();
  const empty = answer.value === null || answer.value === '' || (Array.isArray(answer.value) && answer.value.length === 0);
  feedback.value = empty ? 'empty' : isCorrect(props.format, answer.value, key ?? {}, props.props) ? 'right' : 'wrong';
}
async function toggleSolution() {
  await loadSolution();
  showSolution.value = !showSolution.value;
}
</script>

<template>
  <div class="player">
    <component :is="component" v-if="component" v-bind="props.props" @answer="onAnswer" />
    <p v-else class="missing">Diese Aufgabe hat noch keine Bedienoberfläche.</p>

    <div v-if="teacher" class="teacher-tools">
      <div class="row">
        <button type="button" class="btn teacher small" @click="check" :disabled="loading">Prüfen</button>
        <button type="button" class="btn teacher small" @click="toggleSolution" :disabled="loading" :aria-expanded="showSolution">{{ showSolution ? 'Hintergrund ausblenden' : 'Hintergrund' }}</button>
        <span v-if="feedback === 'right'" class="fb right" role="status">Richtig!</span>
        <span v-else-if="feedback === 'wrong'" class="fb wrong" role="status">Noch nicht richtig.</span>
        <span v-else-if="feedback === 'empty'" class="fb wrong" role="status">Noch keine Antwort gegeben.</span>
      </div>
      <section v-if="showSolution && solutionHtml !== null" class="solution prose" v-html="solutionHtml" />
    </div>
  </div>
</template>

<style scoped>
.player { display: grid; gap: 18px; }
.missing { color: var(--muted); }
.teacher-tools { display: grid; gap: 12px; border-top: 2px dashed var(--teacher-soft); padding-top: 14px; }
.row { display: flex; flex-wrap: wrap; gap: 10px; align-items: center; }
.fb { font-weight: 700; padding: 6px 12px; border-radius: 999px; }
.fb.right { background: var(--good-soft); color: var(--good); }
.fb.wrong { background: var(--bad-soft); color: var(--bad); }
.solution { background: var(--teacher-soft); border-radius: var(--radius); padding: 18px; max-width: none; }
</style>
