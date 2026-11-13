<script setup lang="ts">
// A row of digits; between two digits a cut can be set or removed. The answer is the cut digit string, words separated by a space.
import { computed, onMounted, ref } from 'vue';

const props = defineProps<{ digits: string }>();
const emit = defineEmits<{ answer: [value: string] }>();

const chars = props.digits.split('');
const cuts = ref<boolean[]>(Array(chars.length - 1).fill(false));
const result = computed(() => chars.map((c, i) => c + (cuts.value[i] ? ' ' : '')).join(''));

function report() { emit('answer', result.value); }
onMounted(() => emit('answer', ''));
function toggle(i: number) {
  cuts.value = cuts.value.map((c, j) => (j === i ? !c : c));
  report();
}
function reset() { cuts.value = cuts.value.map(() => false); emit('answer', ''); }
</script>

<template>
  <div class="cut">
    <div class="row" role="group" aria-label="Ziffernfolge mit Trennstellen">
      <template v-for="(c, i) in chars" :key="i">
        <span class="digit">{{ c }}</span>
        <button v-if="i < chars.length - 1" type="button" class="gap" :class="{ on: cuts[i] }" :aria-pressed="cuts[i]"
                :aria-label="`Trennstrich zwischen Ziffer ${i + 1} und ${i + 2}`" @click="toggle(i)">
          <span class="bar" />
        </button>
      </template>
    </div>
    <div class="bar-row">
      <span class="hint">Deine Aufteilung: <b class="out">{{ cuts.some(Boolean) ? result : 'noch keine Trennstriche' }}</b></span>
      <button type="button" class="reset" @click="reset">Zurücksetzen</button>
    </div>
  </div>
</template>

<style scoped>
.cut { display: grid; gap: 10px; }
.row { display: flex; flex-wrap: wrap; align-items: center; row-gap: 10px; justify-content: center; }
.digit { display: grid; place-items: center; width: 34px; height: 46px; border: 2px solid var(--line); border-radius: 8px; background: var(--surface); color: var(--ink); font: 700 1.5rem var(--font-mono); }
.gap { width: 18px; height: 54px; padding: 0; border: 0; background: transparent; cursor: pointer; display: grid; place-items: center; }
.gap .bar { width: 3px; height: 100%; border-radius: 2px; background: transparent; border-left: 2px dotted var(--line); }
.gap:hover .bar, .gap:focus-visible .bar { border-left-color: var(--primary); }
.gap.on .bar { width: 5px; border: 0; background: var(--primary); }
.gap:focus-visible { outline: 3px solid var(--sun); border-radius: 6px; }
.bar-row { display: flex; justify-content: space-between; gap: 8px; flex-wrap: wrap; align-items: center; }
.hint { font-size: .9rem; color: var(--muted); }
.out { font-family: var(--font-mono); color: var(--ink); letter-spacing: .05em; }
.reset { border: 1px solid var(--line); background: var(--surface); color: var(--ink); border-radius: 999px; padding: 4px 12px; cursor: pointer; font: inherit; font-size: .85rem; }
</style>
