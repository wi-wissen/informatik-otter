<script setup lang="ts">
import { computed, ref } from 'vue';

type Computer = { name: string; ip: number[] };
const props = defineProps<{ mask: number[]; computers: Computer[] }>();
const emit = defineEmits<{ answer: [value: string] }>();

const ips = ref<string[][]>(props.computers.map((c) => c.ip.map(String)));

const parsed = computed(() => ips.value.map((row) => row.map((v) => (/^\d{1,3}$/.test(v) ? Number(v) : NaN))));

// "ok" = all parts are 1..254, the network parts (mask 255) are equal for all computers and the device parts are all different.
const verdict = computed(() => {
  const p = parsed.value;
  if (p.some((row) => row.some((v) => Number.isNaN(v) || v < 1 || v > 254))) return 'ungültige Zahl';
  const net = (row: number[]) => row.filter((_, i) => props.mask[i] === 255).join('.');
  const dev = (row: number[]) => row.filter((_, i) => props.mask[i] !== 255).join('.');
  if (new Set(p.map(net)).size !== 1) return 'Netzanteil verschieden';
  if (new Set(p.map(dev)).size !== p.length) return 'Geräteanteil doppelt';
  return 'ok';
});

function change(i: number, j: number, v: string) {
  ips.value = ips.value.map((row, a) => (a === i ? row.map((x, b) => (b === j ? v.replace(/\D/g, '').slice(0, 3) : x)) : row));
  emit('answer', verdict.value);
}
</script>

<template>
  <div class="ip">
    <div class="head">
      <span /><span class="t">IP-Adresse</span><span class="t">Netzmaske (für alle gleich)</span>
    </div>
    <div v-for="(c, i) in computers" :key="c.name" class="row">
      <strong class="name">{{ c.name }}</strong>
      <div class="parts">
        <template v-for="j in 4" :key="j">
          <input class="oct" inputmode="numeric" :value="ips[i][j - 1]" :aria-label="`${c.name}, Teil ${j} der IP-Adresse`"
            @input="change(i, j - 1, ($event.target as HTMLInputElement).value)" />
          <span v-if="j < 4" class="dot">.</span>
        </template>
      </div>
      <div class="mask">{{ mask.join('.') }}</div>
    </div>
  </div>
</template>

<style scoped>
.ip { display: grid; gap: 8px; }
.head, .row { display: grid; grid-template-columns: 4em 1fr 1fr; gap: 8px; align-items: center; }
.t { font-size: .8rem; color: var(--muted); }
.parts { display: flex; align-items: center; gap: 2px; }
.oct { width: 3.2em; font: inherit; text-align: center; padding: 6px 2px; border: 1px solid var(--line); border-radius: 6px; background: var(--surface); color: var(--ink); }
.oct:focus-visible { outline: 2px solid var(--primary); }
.dot { font-weight: 700; }
.mask { color: var(--muted); font-variant-numeric: tabular-nums; }
@media (max-width: 480px) { .head { display: none; } .row { grid-template-columns: 4em 1fr; } .mask { grid-column: 2; font-size: .85rem; } }
</style>
