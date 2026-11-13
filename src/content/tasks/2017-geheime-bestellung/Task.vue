<script setup lang="ts">
// The secret disc from the booklet: a fixed outer ring and an inner ring that can be turned to the left
// (buttons or slider), plus a text field for the five letters of the order.
import { computed, ref } from 'vue';

defineProps<{ placeholder?: string; length?: number }>();
const emit = defineEmits<{ answer: [value: string] }>();

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const N = letters.length;
const step = 360 / N;
const turn = ref(0);
const text = ref('');

const C = 200;
const rings = [
  { name: 'outer', r0: 160, r1: 196 },
  { name: 'inner', r0: 122, r1: 158 },
];
const rad = (deg: number) => (deg * Math.PI) / 180;
const pt = (r: number, deg: number) => `${(C + r * Math.sin(rad(deg))).toFixed(2)},${(C - r * Math.cos(rad(deg))).toFixed(2)}`;
// Cell i is centred at i * step degrees (clockwise from the top).
function cell(i: number, r0: number, r1: number) {
  const a = i * step - step / 2;
  const b = i * step + step / 2;
  return `M${pt(r0, a)} L${pt(r1, a)} A${r1},${r1} 0 0 1 ${pt(r1, b)} L${pt(r0, b)} A${r0},${r0} 0 0 0 ${pt(r0, a)} Z`;
}
const innerRotation = computed(() => -turn.value * step);

function setTurn(v: number) { turn.value = ((v % N) + N) % N; }
function onText(e: Event) {
  const el = e.target as HTMLInputElement;
  text.value = el.value.toUpperCase().replace(/[^A-ZÄÖÜ]/g, '').slice(0, 5);
  el.value = text.value;
  emit('answer', text.value);
}
</script>

<template>
  <div class="secret">
    <svg viewBox="0 0 400 400" class="disc" role="img"
         :aria-label="`Geheimscheibe, innerer Ring um ${turn} Buchstaben nach links gedreht`">
      <g v-for="ring in rings" :key="ring.name" :transform="ring.name === 'inner' ? `rotate(${innerRotation} ${C} ${C})` : undefined" class="ring" :class="ring.name">
        <g v-for="(l, i) in letters" :key="l">
          <path :d="cell(i, ring.r0, ring.r1)" :class="{ a: i === 0 }" />
          <text :x="C" :y="C - (ring.r0 + ring.r1) / 2" :transform="`rotate(${i * step} ${C} ${C})`" text-anchor="middle" dominant-baseline="central" :class="{ a: i === 0 }">{{ l }}</text>
        </g>
      </g>
    </svg>

    <div class="controls">
      <button type="button" class="btn secondary" aria-label="Inneren Ring einen Buchstaben nach links drehen" @click="setTurn(turn + 1)">&lt;</button>
      <button type="button" class="btn secondary" @click="setTurn(0)">auf Anfang</button>
      <button type="button" class="btn secondary" aria-label="Inneren Ring einen Buchstaben nach rechts drehen" @click="setTurn(turn - 1)">&gt;</button>
    </div>
    <label class="slider">
      <span class="sr">Drehung des inneren Rings</span>
      <input type="range" min="0" :max="N - 1" step="1" :value="turn" @input="setTurn(Number(($event.target as HTMLInputElement).value))" />
      <output class="num">{{ turn }}</output>
    </label>

    <label class="order">
      <span>Bestellung</span>
      <input :value="text" :placeholder="placeholder ?? 'Bestellung'" :maxlength="length ?? 5" autocomplete="off" autocapitalize="characters" spellcheck="false" @input="onText" />
    </label>
  </div>
</template>

<style scoped>
.secret { display: grid; gap: 12px; justify-items: center; }
.disc { width: min(100%, 360px); height: auto; }
.ring path { fill: var(--surface); stroke: var(--ink); stroke-width: 1.5; }
.ring path.a { fill: var(--primary); }
.ring text { font: 700 17px var(--font-body); fill: var(--ink); }
.ring text.a { fill: var(--primary-ink); }
.ring.inner text { font-size: 16px; }
.controls { display: flex; gap: 10px; flex-wrap: wrap; justify-content: center; }
.controls .btn { min-width: 48px; min-height: 44px; }
.slider { display: flex; align-items: center; gap: 12px; width: min(100%, 360px); }
.slider input { flex: 1; min-width: 0; accent-color: var(--primary); }
.num { font: 700 1.1rem var(--font-mono); min-width: 2ch; text-align: right; }
.sr { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); }
.order { display: inline-flex; align-items: center; gap: 10px; font-weight: 700; }
.order input { font: 700 1.3rem var(--font-mono); letter-spacing: .25em; padding: 10px 14px; border: 2px solid var(--line); border-radius: 12px; background: var(--surface); color: var(--ink); width: 9ch; min-width: 0; text-transform: uppercase; }
.order input:focus { outline: none; border-color: var(--primary); box-shadow: 0 0 0 4px var(--primary-soft); }
</style>
