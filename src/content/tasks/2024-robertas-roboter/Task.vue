<script setup lang="ts">
import { computed, ref } from 'vue';

type Dir = 'right' | 'up' | 'down';
const glyph: Record<Dir, string> = { right: '→', up: '↑', down: '↓' };
const label: Record<Dir, string> = { right: 'Pfeil nach rechts', up: 'Pfeil nach oben', down: 'Pfeil nach unten' };
const emit = defineEmits<{ answer: [value: Record<string, Dir>] }>();

// Board: 5 rows x 5 columns. Columns 2 and 4 are empty and get the three loose tiles.
const rows = [1, 2, 3, 4, 5];
const cols = [1, 2, 3, 4, 5];
const fixed: Record<string, Dir> = {
  c1r1: 'right', c1r2: 'down', c1r3: 'right', c1r4: 'up', c1r5: 'up',
  c3r1: 'right', c3r2: 'up', c3r3: 'down', c3r4: 'down', c3r5: 'right',
  c5r1: 'down', c5r2: 'down', c5r3: 'right', c5r4: 'right', c5r5: 'up',
};
const tray: Dir[] = ['right', 'right', 'up'];

const placed = ref<Record<string, Dir>>({});
const usedTray = ref<boolean[]>([false, false, false]);
const slotTray = ref<Record<string, number>>({});
const selected = ref<number | null>(null);

const free = computed(() => usedTray.value.filter((u) => !u).length);

function report() { emit('answer', { ...placed.value }); }

function pickTray(i: number) {
  if (usedTray.value[i]) return;
  selected.value = selected.value === i ? null : i;
}

function clickSlot(key: string) {
  if (placed.value[key]) {
    const i = slotTray.value[key];
    const { [key]: _p, ...rest } = placed.value;
    const { [key]: _s, ...restSlots } = slotTray.value;
    placed.value = rest;
    slotTray.value = restSlots;
    usedTray.value = usedTray.value.map((u, j) => (j === i ? false : u));
    selected.value = i;
    report();
    return;
  }
  let i = selected.value;
  if (i === null) i = usedTray.value.findIndex((u) => !u);
  if (i < 0 || usedTray.value[i]) return;
  placed.value = { ...placed.value, [key]: tray[i] };
  slotTray.value = { ...slotTray.value, [key]: i };
  usedTray.value = usedTray.value.map((u, j) => (j === i ? true : u));
  selected.value = usedTray.value.findIndex((u) => !u) >= 0 ? usedTray.value.findIndex((u) => !u) : null;
  report();
}
</script>

<template>
  <div class="robot">
    <p class="tray-label">Diese Kärtchen kannst du legen (zuerst eines antippen, dann eine freie Stelle):</p>
    <div class="tray" role="group" aria-label="Kärtchen zum Legen">
      <button v-for="(d, i) in tray" :key="i" type="button" class="tile loose" :class="{ used: usedTray[i], sel: selected === i }"
              :disabled="usedTray[i]" :aria-pressed="selected === i" :aria-label="label[d]" @click="pickTray(i)">
        <span aria-hidden="true">{{ glyph[d] }}</span>
      </button>
      <span class="count" aria-live="polite">{{ free }} von 3 übrig</span>
    </div>

    <div class="board" role="group" aria-label="Wegeplan">
      <div class="start" style="grid-row: 5; grid-column: 1"><span>Start</span><b aria-hidden="true">→</b></div>
      <div class="goal" style="grid-row: 3; grid-column: 7"><span>Ziel</span></div>
      <template v-for="r in rows" :key="r">
        <template v-for="c in cols" :key="`${c}-${r}`">
          <div v-if="fixed[`c${c}r${r}`]" class="tile" :style="{ gridRow: r, gridColumn: c + 1 }" role="img" :aria-label="label[fixed[`c${c}r${r}`]]">
            <span aria-hidden="true">{{ glyph[fixed[`c${c}r${r}`]] }}</span>
          </div>
          <button v-else type="button" class="slot" :class="{ filled: placed[`c${c}r${r}`] }" :style="{ gridRow: r, gridColumn: c + 1 }"
                  :aria-label="placed[`c${c}r${r}`] ? `Spalte ${c}, Zeile ${r}: ${label[placed[`c${c}r${r}`]]} (zum Entfernen antippen)` : `Spalte ${c}, Zeile ${r}: leer`"
                  @click="clickSlot(`c${c}r${r}`)">
            <span v-if="placed[`c${c}r${r}`]" class="tile placedtile" aria-hidden="true">{{ glyph[placed[`c${c}r${r}`]] }}</span>
          </button>
        </template>
      </template>
    </div>
  </div>
</template>

<style scoped>
.robot { --cell: clamp(38px, 11vw, 56px); display: grid; gap: 12px; }
.tray-label { margin: 0; color: var(--muted); font-size: 0.95rem; }
.tray { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; }
.count { color: var(--muted); font-size: 0.9rem; }
.tile { display: grid; place-items: center; width: var(--cell); height: var(--cell); background: var(--sun-soft); color: var(--primary);
  border: 2px solid var(--sun); border-radius: 8px; font-size: calc(var(--cell) * 0.6); font-weight: 800; line-height: 1; box-sizing: border-box; font-family: var(--font-body); }
.tile.loose { cursor: pointer; }
.tile.loose.used { opacity: 0.3; cursor: default; }
.tile.loose.sel { outline: 3px solid var(--primary); outline-offset: 2px; }
.board { display: grid; grid-template-columns: repeat(7, var(--cell)); grid-template-rows: repeat(5, var(--cell)); gap: 2px; width: max-content; max-width: 100%; }
.slot { width: var(--cell); height: var(--cell); background: var(--primary-soft); border: 2px dashed var(--primary); border-radius: 8px; padding: 0; cursor: pointer; box-sizing: border-box; display: grid; place-items: center; }
.slot.filled { border-style: solid; background: transparent; border-color: transparent; }
.slot .placedtile { width: 100%; height: 100%; border-color: var(--primary); }
.start, .goal { display: grid; place-items: center; width: var(--cell); height: var(--cell); border-radius: 8px; font-size: 0.7rem; font-weight: 700; box-sizing: border-box; text-align: center; }
.start { background: var(--primary); color: var(--primary-ink); grid-template-rows: auto auto; align-content: center; }
.start b { font-size: calc(var(--cell) * 0.45); }
.goal { background: var(--sun); color: var(--sun-ink); }
.slot:focus-visible, .tile.loose:focus-visible { outline: 3px solid var(--primary); outline-offset: 2px; }
</style>
