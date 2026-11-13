<script setup lang="ts">
import { computed, ref } from 'vue';

// Plate sizes: L = large, M = medium, S = small. "." = empty slot.
const props = defineProps<{
  rack: string; // plates in the rack, from the left, e.g. "LLLMMMSS."
  incoming: string; // the new plate, e.g. "L"
  minMoves: number; // fewest moves of plates that are already in the rack
}>();
const emit = defineEmits<{ answer: [value: string] }>();

const slots = ref<string[]>([...props.rack]);
const hand = ref<string | null>(props.incoming); // the new plate, not yet in the rack
const selected = ref<{ from: 'hand' } | { from: 'slot'; index: number } | null>(null);
const moves = ref(0);

const order = { L: 0, M: 1, S: 2 } as Record<string, number>;
const label = { L: 'großer Teller', M: 'mittlerer Teller', S: 'kleiner Teller' } as Record<string, string>;
const plateSize = { L: [26, 52], M: [22, 42], S: [18, 32] } as Record<string, [number, number]>;

function clickSlot(i: number) {
  const s = selected.value;
  if (!s) {
    if (slots.value[i] !== '.') selected.value = { from: 'slot', index: i };
    return;
  }
  if (slots.value[i] === '.') {
    const next = [...slots.value];
    if (s.from === 'hand') {
      next[i] = hand.value as string;
      hand.value = null;
    } else {
      next[i] = next[s.index];
      next[s.index] = '.';
      moves.value += 1;
    }
    slots.value = next;
    selected.value = null;
    emit('answer', verdict());
  } else if (s.from === 'slot' && s.index === i) {
    selected.value = null;
  } else {
    selected.value = { from: 'slot', index: i };
  }
}
function clickHand() {
  if (!hand.value) return;
  selected.value = selected.value?.from === 'hand' ? null : { from: 'hand' };
}
function reset() {
  slots.value = [...props.rack];
  hand.value = props.incoming;
  selected.value = null;
  moves.value = 0;
  emit('answer', '');
}
function verdict(): string {
  if (hand.value) return 'unvollständig';
  const plates = slots.value.filter((p) => p !== '.');
  const sorted = plates.every((p, k) => k === 0 || order[plates[k - 1]] <= order[p]);
  const gapless = slots.value.join('').replace(/\.+$/, '').indexOf('.') < 0;
  if (!sorted || !gapless) return 'nicht geordnet';
  return moves.value === props.minMoves ? 'ok' : 'zu viele Umstellungen';
}
const state = computed(() => verdict());
</script>

<template>
  <div class="td">
    <div class="hand">
      <span class="cap">Neuer Teller:</span>
      <button v-if="hand" type="button" :class="['plate', { sel: selected?.from === 'hand' }]"
        :aria-label="`Neuer ${label[hand]}`" :aria-pressed="selected?.from === 'hand'" @click="clickHand">
        <svg viewBox="0 0 30 56" :width="plateSize[hand][0]" :height="plateSize[hand][1]" aria-hidden="true">
          <ellipse cx="15" cy="28" :rx="plateSize[hand][0] / 2.2" :ry="plateSize[hand][1] / 2.1" :class="'p-' + hand" />
        </svg>
      </button>
      <span v-else class="muted">(eingeräumt)</span>
    </div>
    <div class="rack" role="group" aria-label="Geschirrspüler mit neun Plätzen">
      <button v-for="(p, i) in slots" :key="i" type="button" class="slot"
        :class="{ sel: selected?.from === 'slot' && selected.index === i }"
        :aria-label="p === '.' ? `Platz ${i + 1}, leer` : `Platz ${i + 1}, ${label[p]}`"
        @click="clickSlot(i)">
        <svg v-if="p !== '.'" viewBox="0 0 30 56" :width="plateSize[p][0]" :height="plateSize[p][1]" aria-hidden="true">
          <ellipse cx="15" cy="28" :rx="plateSize[p][0] / 2.2" :ry="plateSize[p][1] / 2.1" :class="'p-' + p" />
        </svg>
        <span class="num">{{ i + 1 }}</span>
      </button>
    </div>
    <div class="bar">
      <span class="hint">
        Tippe auf einen Teller und dann auf einen freien Platz. Umgestellt: {{ moves }}
        <template v-if="state !== 'ok' && !hand && state === 'zu viele Umstellungen'"> – es geht mit weniger.</template>
      </span>
      <button type="button" class="reset" @click="reset">Zurücksetzen</button>
    </div>
  </div>
</template>

<style scoped>
.td { display: grid; gap: 12px; }
.hand { display: flex; align-items: center; gap: 10px; min-height: 64px; }
.cap { font-weight: 700; }
.muted { color: var(--muted); }
.rack { display: grid; grid-template-columns: repeat(9, minmax(0, 1fr)); gap: 4px; padding: 8px; border-radius: var(--radius); background: var(--sunk); border-bottom: 6px solid var(--line); }
.slot, .plate { display: flex; flex-direction: column; align-items: center; justify-content: flex-end; gap: 2px; min-height: 76px; padding: 4px 0; border: 2px solid transparent; border-radius: 10px; background: transparent; color: var(--ink); cursor: pointer; font: inherit; }
.plate { min-height: 64px; padding: 4px 12px; }
.slot:hover, .slot:focus-visible, .plate:hover, .plate:focus-visible { border-color: var(--primary); outline: none; }
.slot.sel, .plate.sel { border-color: var(--sun); background: var(--sun-soft); }
.num { font-size: .75rem; color: var(--muted); }
.p-L { fill: var(--good); }
.p-M { fill: var(--primary); }
.p-S { fill: var(--bad); }
.bar { display: flex; justify-content: space-between; gap: 8px; flex-wrap: wrap; align-items: center; }
.hint { font-size: .85rem; color: var(--muted); }
.reset { border: 1px solid var(--line); background: var(--surface); color: var(--ink); border-radius: 999px; padding: 4px 12px; cursor: pointer; font: inherit; font-size: .85rem; }
</style>
