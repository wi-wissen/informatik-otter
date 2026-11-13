<script setup lang="ts">
import { computed, ref } from 'vue';

type Person = { id: string; label: string; time: number };
const props = defineProps<{ people: Person[]; limit: number; passages: number }>();
const emit = defineEmits<{ answer: [value: string] }>();

// plan[i] = [person 1, person 2] of passage i + 1; '' = nobody
const plan = ref<string[][]>(Array.from({ length: props.passages }, () => ['', '']));
const byId = Object.fromEntries(props.people.map((p) => [p.id, p]));

// Simulate: odd passages go to the exit, even ones back; the lamp travels with every passage.
const result = computed(() => {
  const side: Record<string, 0 | 1> = Object.fromEntries(props.people.map((p) => [p.id, 0])); // 0 = entrance, 1 = exit
  let total = 0;
  let error = '';
  plan.value.forEach((pair, i) => {
    if (error) return;
    const who = pair.filter(Boolean);
    const from = i % 2 === 0 ? 0 : 1;
    if (who.length === 0) { error = `Passage ${i + 1}: niemand ausgewählt`; return; }
    if (who.length === 2 && who[0] === who[1]) { error = `Passage ${i + 1}: zweimal dieselbe Person`; return; }
    if (who.some((w) => side[w] !== from)) { error = `Passage ${i + 1}: eine Person ist nicht auf der richtigen Seite`; return; }
    total += Math.max(...who.map((w) => byId[w].time));
    who.forEach((w) => (side[w] = from === 0 ? 1 : 0));
  });
  if (!error && props.people.some((p) => side[p.id] !== 1)) error = 'Nicht alle sind am Ausgang';
  if (!error && total > props.limit) error = `Zu lang: ${total} Minuten`;
  return { total, error };
});

function set(i: number, j: number, v: string) {
  plan.value = plan.value.map((row, k) => (k === i ? row.map((x, m) => (m === j ? v : x)) : row));
  emit('answer', result.value.error ? result.value.error : 'ok');
}
</script>

<template>
  <div class="tunnel">
    <table>
      <thead><tr><th>Passage</th><th>Person 1</th><th>Person 2</th></tr></thead>
      <tbody>
        <tr v-for="(row, i) in plan" :key="i">
          <th scope="row">{{ i + 1 }}: {{ i % 2 === 0 ? 'Hin →' : '← Zurück' }}</th>
          <td v-for="j in [0, 1]" :key="j">
            <select :value="row[j]" :aria-label="`Passage ${i + 1}, Person ${j + 1}`" @change="set(i, j, ($event.target as HTMLSelectElement).value)">
              <option value="">–</option>
              <option v-for="p in people" :key="p.id" :value="p.id">{{ p.label }} ({{ p.time }} min)</option>
            </select>
          </td>
        </tr>
      </tbody>
    </table>
    <p class="sum">Zeit insgesamt: {{ result.total }} von {{ limit }} Minuten</p>
  </div>
</template>

<style scoped>
.tunnel { display: grid; gap: 8px; }
table { border-collapse: collapse; width: 100%; max-width: 520px; }
th, td { border: 1px solid var(--line); padding: 6px 8px; text-align: left; background: var(--surface); }
thead th { background: var(--sunk); }
select { font: inherit; width: 100%; padding: 4px 6px; border: 1px solid var(--line); border-radius: 6px; background: var(--surface); color: var(--ink); }
.sum { margin: 0; font-size: .9rem; color: var(--muted); }
</style>
