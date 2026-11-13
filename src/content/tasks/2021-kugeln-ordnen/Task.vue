<script setup lang="ts">
import { computed, ref } from 'vue';

// Glasses are listed bottom to top. `a` and `b` are the two ball colours.
const props = defineProps<{ glasses: string[][]; capacity: number }>();
const emit = defineEmits<{ answer: [value: unknown] }>();

const state = ref<string[][]>(props.glasses.map((g) => [...g]));
const selected = ref<number | null>(null);
const moves = ref(0);
const message = ref('');

const solved = computed(() => {
  const filled = state.value.filter((g) => g.length > 0);
  return filled.length === 2 && filled.every((g) => g.every((c) => c === g[0]));
});

function canMove(from: number, to: number): boolean {
  const src = state.value[from];
  const dst = state.value[to];
  if (from === to || src.length === 0 || dst.length >= props.capacity) return false;
  return dst.length === 0 || dst[dst.length - 1] === src[src.length - 1];
}

function click(i: number) {
  message.value = '';
  if (selected.value === null) {
    if (state.value[i].length > 0) selected.value = i;
    return;
  }
  const from = selected.value;
  selected.value = null;
  if (from === i) return;
  if (!canMove(from, i)) {
    message.value = 'Das geht nicht: Die Kugel passt nur in ein leeres Glas oder auf eine gleichfarbige Kugel, und im Glas muss Platz sein.';
    return;
  }
  const next = state.value.map((g) => [...g]);
  next[i].push(next[from].pop() as string);
  state.value = next;
  moves.value++;
  emit('answer', solved.value ? 'geordnet' : 'offen');
}

function reset() {
  state.value = props.glasses.map((g) => [...g]);
  selected.value = null;
  moves.value = 0;
  message.value = '';
  emit('answer', null);
}

function describe(g: string[], i: number) {
  const names: Record<string, string> = { a: 'blau gestreift', b: 'orange' };
  const content = g.length ? [...g].reverse().map((c) => names[c] ?? c).join(', ') : 'leer';
  return `Glas ${i + 1}, von oben nach unten: ${content}`;
}
</script>

<template>
  <div class="balls">
    <div class="glasses">
      <button v-for="(g, i) in state" :key="i" type="button" class="glass"
              :class="{ sel: selected === i }" :aria-pressed="selected === i"
              :aria-label="describe(g, i)" @click="click(i)"
              :style="{ height: `${capacity * 52 + 16}px` }">
        <span v-for="(c, k) in g" :key="k" class="ball" :class="c" />
      </button>
    </div>
    <div class="bar">
      <span>Schritte: <strong>{{ moves }}</strong></span>
      <span v-if="solved" class="ok" role="status">Geordnet!</span>
      <button type="button" class="reset" @click="reset">Von vorn beginnen</button>
    </div>
    <p v-if="message" class="msg" role="alert">{{ message }}</p>
    <p class="hint">Tippe erst das Glas an, aus dem du die oberste Kugel nehmen willst, dann das Glas, in das sie soll.</p>
  </div>
</template>

<style scoped>
.balls { display: grid; gap: 12px; }
.glasses { display: flex; gap: 18px; justify-content: center; align-items: flex-end; }
.glass { display: flex; flex-direction: column-reverse; justify-content: flex-start; align-items: center; gap: 4px; width: 84px; padding: 8px 6px;
  border: 3px solid var(--line); border-top-width: 2px; border-radius: 8px 8px 22px 22px; background: var(--sunk); cursor: pointer; }
.glass:hover { border-color: var(--primary); }
.glass.sel { border-color: var(--primary); box-shadow: 0 0 0 4px var(--primary-soft); }
.ball { width: 48px; height: 48px; border-radius: 50%; border: 2px solid var(--ink); box-sizing: border-box; flex: none; }
.ball.a { background: repeating-linear-gradient(135deg, var(--primary) 0 8px, var(--primary-soft) 8px 12px); }
.ball.b { background: var(--sun); }
.bar { display: flex; gap: 14px; align-items: center; justify-content: center; flex-wrap: wrap; }
.ok { font-weight: 700; color: var(--good); background: var(--good-soft); padding: 4px 12px; border-radius: 999px; }
.reset { border: 1px solid var(--line); background: var(--surface); color: var(--ink); border-radius: 999px; padding: 4px 12px; cursor: pointer; font: inherit; font-size: .85rem; }
.msg { margin: 0; color: var(--bad); text-align: center; }
.hint { margin: 0; font-size: .85rem; color: var(--muted); text-align: center; }
</style>
