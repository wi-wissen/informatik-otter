<script setup lang="ts">
import { computed, ref } from 'vue';

// Letters: q = square, t = triangle, c = circle
const props = defineProps<{
  rules: { from: string; to: string }[];
  start: string;
  goal: string;
}>();
const emit = defineEmits<{ answer: [value: string] }>();

const field = ref(props.start);
const presses = ref<number[]>([]);

function apply(i: number) {
  const r = props.rules[i];
  const at = field.value.indexOf(r.from);
  if (at < 0) return;
  field.value = field.value.slice(0, at) + r.to + field.value.slice(at + r.from.length);
  presses.value = [...presses.value, i + 1];
  emit('answer', verdict());
}
function reset() {
  field.value = props.start;
  presses.value = [];
  emit('answer', '');
}
function verdict(): string {
  return field.value === props.goal ? 'ok' : 'noch nicht';
}
const canApply = computed(() => props.rules.map((r) => field.value.includes(r.from)));
const names: Record<string, string> = { q: 'Quadrat', t: 'Dreieck', c: 'Kreis' };
const describe = (s: string) => (s ? [...s].map((ch) => names[ch]).join(', ') : 'nichts');
</script>

<template>
  <div class="fs">
    <div class="buttons" role="group" aria-label="Knöpfe">
      <button v-for="(r, i) in rules" :key="i" type="button" class="btn" :disabled="!canApply[i]"
        :aria-label="`Knopf ${i + 1}: ${describe(r.from)} wird ersetzt durch ${describe(r.to)}`" @click="apply(i)">
        <span class="num">{{ i + 1 }}</span>
        <svg v-for="(ch, k) in [...r.from]" :key="'f' + k" viewBox="0 0 20 20" class="shape" aria-hidden="true">
          <rect v-if="ch === 'q'" x="2" y="2" width="16" height="16" rx="3" class="q" />
          <polygon v-else-if="ch === 't'" points="10,2 18,18 2,18" class="t" />
          <circle v-else cx="10" cy="10" r="8" class="c" />
        </svg>
        <span class="arrow" aria-hidden="true">→</span>
        <span v-if="!r.to" class="none">nichts</span>
        <svg v-for="(ch, k) in [...r.to]" :key="'t' + k" viewBox="0 0 20 20" class="shape" aria-hidden="true">
          <rect v-if="ch === 'q'" x="2" y="2" width="16" height="16" rx="3" class="q" />
          <polygon v-else-if="ch === 't'" points="10,2 18,18 2,18" class="t" />
          <circle v-else cx="10" cy="10" r="8" class="c" />
        </svg>
      </button>
    </div>
    <div class="board" role="img" :aria-label="`Spielfeld: ${describe(field)}`">
      <svg v-for="(ch, k) in [...field]" :key="k" viewBox="0 0 20 20" class="shape big" aria-hidden="true">
        <rect v-if="ch === 'q'" x="2" y="2" width="16" height="16" rx="3" class="q" />
        <polygon v-else-if="ch === 't'" points="10,2 18,18 2,18" class="t" />
        <circle v-else cx="10" cy="10" r="8" class="c" />
      </svg>
      <span v-if="!field" class="none">leer</span>
    </div>
    <div class="bar">
      <span class="hint">Gedrückt: {{ presses.length ? presses.join(', ') : 'noch nichts' }}</span>
      <button type="button" class="reset" @click="reset">Neu starten</button>
    </div>
  </div>
</template>

<style scoped>
.fs { display: grid; gap: 12px; }
.buttons { display: grid; gap: 6px; }
.btn { display: flex; align-items: center; gap: 6px; padding: 6px 10px; border: 1px solid var(--line); border-radius: 12px; background: var(--surface); color: var(--ink); cursor: pointer; font: inherit; text-align: left; }
.btn:hover:not(:disabled), .btn:focus-visible { border-color: var(--primary); outline: 2px solid var(--primary); outline-offset: 1px; }
.btn:disabled { opacity: .45; cursor: not-allowed; }
.num { display: inline-grid; place-items: center; width: 1.8em; height: 1.8em; border-radius: 8px; background: var(--primary); color: var(--primary-ink); font-weight: 700; margin-right: 4px; }
.arrow { margin: 0 4px; color: var(--muted); font-weight: 700; }
.shape { width: 26px; height: 26px; }
.shape.big { width: 44px; height: 44px; }
.q { fill: var(--primary); }
.t { fill: var(--ink); }
.c { fill: var(--bad); }
.none { color: var(--muted); font-size: .9rem; }
.board { display: flex; flex-wrap: wrap; align-items: center; gap: 4px; min-height: 64px; padding: 10px; border-radius: var(--radius); background: var(--sun-soft); border: 1px solid var(--line); }
.bar { display: flex; justify-content: space-between; gap: 8px; flex-wrap: wrap; align-items: center; }
.hint { font-size: .85rem; color: var(--muted); }
.reset { border: 1px solid var(--line); background: var(--surface); color: var(--ink); border-radius: 999px; padding: 4px 12px; cursor: pointer; font: inherit; font-size: .85rem; }
</style>
