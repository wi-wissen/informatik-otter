<script setup lang="ts">
// Table of four friends and their juices (more hearts = they like it more). Click one glass per person
// to order it. The answer is "ok" when everybody has a different juice and the hearts add up to the maximum.
import { computed, onMounted, ref } from 'vue';

type Juice = { id: string; label: string; image: string };
const props = defineProps<{ names: string[]; hearts: number[]; juices: Juice[]; table: string[][] }>();
const emit = defineEmits<{ answer: [value: string] }>();

const byId = Object.fromEntries(props.juices.map((j) => [j.id, j]));
const chosen = ref<(number | null)[]>(props.names.map(() => null)); // column index per person

// best total over all assignments of different juices (small brute force)
function best(): number {
  let top = 0;
  const used = new Set<string>();
  const go = (p: number, sum: number) => {
    if (p === props.names.length) { top = Math.max(top, sum); return; }
    props.table[p].forEach((j, c) => {
      if (used.has(j)) return;
      used.add(j);
      go(p + 1, sum + props.hearts[c]);
      used.delete(j);
    });
  };
  go(0, 0);
  return top;
}
const maxHearts = best();

const taken = computed(() => {
  const count: Record<string, number> = {};
  chosen.value.forEach((c, p) => { if (c !== null) count[props.table[p][c]] = (count[props.table[p][c]] ?? 0) + 1; });
  return count;
});
const total = computed(() => chosen.value.reduce<number>((s, c) => s + (c === null ? 0 : props.hearts[c]), 0));

function report() {
  const all = chosen.value.every((c) => c !== null);
  const distinct = Object.values(taken.value).every((n) => n === 1);
  emit('answer', all && distinct && total.value === maxHearts ? 'ok' : 'nicht-ok');
}
onMounted(report);
function pick(p: number, c: number) {
  chosen.value = chosen.value.map((v, i) => (i === p ? (v === c ? null : c) : v));
  report();
}
const conflict = (p: number, c: number) => chosen.value[p] === c && (taken.value[props.table[p][c]] ?? 0) > 1;
</script>

<template>
  <div class="juice">
    <table>
      <caption class="sr">Wer trinkt welchen Saft? Je mehr Herzen, desto lieber.</caption>
      <thead>
        <tr>
          <th scope="col"><span class="sr">Person</span></th>
          <th v-for="(h, c) in hearts" :key="c" scope="col" class="hearts" :aria-label="`${h} Herzen`">{{ '♥'.repeat(h) }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(name, p) in names" :key="name">
          <th scope="row">{{ name }}</th>
          <td v-for="(jid, c) in table[p]" :key="c">
            <button type="button" class="glass" :class="{ on: chosen[p] === c, bad: conflict(p, c) }" :aria-pressed="chosen[p] === c"
                    :aria-label="`${name}: ${byId[jid].label} (${hearts[c]} Herzen)`" @click="pick(p, c)">
              <img :src="byId[jid].image" :alt="byId[jid].label" draggable="false" />
              <span class="jl">{{ byId[jid].label }}</span>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <p class="sum" aria-live="polite">Bestellt: {{ chosen.filter((c) => c !== null).length }} von {{ names.length }} · Herzen: {{ total }}
      <span v-if="Object.values(taken).some((n) => n > 1)" class="warn"> · Jeder Saft ist nur einmal da!</span></p>
  </div>
</template>

<style scoped>
.juice { display: grid; gap: 8px; max-width: 560px; }
table { border-collapse: separate; border-spacing: 6px; width: 100%; }
th { font-weight: 700; text-align: left; vertical-align: middle; }
th.hearts { text-align: center; color: #d32f2f; letter-spacing: -2px; font-size: 1rem; }
td { padding: 0; }
.glass { width: 100%; display: grid; justify-items: center; gap: 2px; padding: 4px; border: 2px solid var(--line); border-radius: 10px; background: #fff; color: #10313a; font: inherit; cursor: pointer; }
.glass img { height: 56px; width: auto; }
.jl { font-size: .7rem; line-height: 1.1; }
.glass:hover { border-color: var(--primary); }
.glass.on { border-color: var(--primary); background: var(--sun-soft); box-shadow: 0 0 0 3px var(--primary-soft); color: #10313a; }
.glass.bad { border-color: var(--bad); }
.sum { margin: 0; font-size: .9rem; color: var(--muted); }
.warn { color: var(--bad); font-weight: 700; }
.sr { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); }
</style>
