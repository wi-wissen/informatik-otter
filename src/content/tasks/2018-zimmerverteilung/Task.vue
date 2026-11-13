<script setup lang="ts">
// Wish cards of the club members are moved into three rooms (drag, or tap a card and then a room).
// The answer is "ok" when every card is in a room and all wishes (+ together, – apart) are fulfilled.
import { computed, onMounted, ref } from 'vue';

type Girl = { id: string; name: string; plus: string[]; minus: string[] };
type Spot = 'tray' | 'r1' | 'r2' | 'r3';
const props = defineProps<{ girls: Girl[] }>();
const emit = defineEmits<{ answer: [value: string] }>();

const rooms: { id: Spot; label: string }[] = [{ id: 'r1', label: 'Zimmer 1' }, { id: 'r2', label: 'Zimmer 2' }, { id: 'r3', label: 'Zimmer 3' }];
const where = ref<Record<string, Spot>>(Object.fromEntries(props.girls.map((g) => [g.id, 'tray'])));
const selected = ref<string | null>(null);
const nameOf = (id: string) => props.girls.find((g) => g.id === id)!.name;
const inSpot = (s: Spot) => props.girls.filter((g) => where.value[g.id] === s);

// a wish is violated when both girls sit in rooms and the rule is broken
const broken = computed(() => {
  const bad = new Set<string>();
  for (const g of props.girls) {
    const a = where.value[g.id];
    if (a === 'tray') continue;
    for (const o of g.plus) if (where.value[o] !== 'tray' && where.value[o] !== a) bad.add(g.id);
    for (const o of g.minus) if (where.value[o] === a) bad.add(g.id);
  }
  return bad;
});
function report() {
  const placed = props.girls.every((g) => where.value[g.id] !== 'tray');
  const good = props.girls.every((g) =>
    g.plus.every((o) => where.value[o] === where.value[g.id]) && g.minus.every((o) => where.value[o] !== where.value[g.id]));
  emit('answer', placed && good ? 'ok' : 'nicht-ok');
}
onMounted(report);
function move(id: string, to: Spot) { where.value = { ...where.value, [id]: to }; selected.value = null; report(); }
function tapTarget(s: Spot) { if (selected.value) move(selected.value, s); }
// a tap on a card while another one is selected moves the selected one to this card's place
function tapCard(id: string) {
  if (selected.value && selected.value !== id) move(selected.value, where.value[id]);
  else selected.value = selected.value === id ? null : id;
}
function dragStart(e: DragEvent, id: string) { e.dataTransfer?.setData('text/plain', id); selected.value = id; }
function drop(e: DragEvent, s: Spot) {
  e.preventDefault();
  const id = e.dataTransfer?.getData('text/plain');
  if (id && id in where.value) move(id, s);
}
</script>

<template>
  <div class="rooms">
    <div class="tray" role="group" aria-label="Wunsch-Karten" @click="tapTarget('tray')" @dragover.prevent @drop="drop($event, 'tray')">
      <template v-for="g in inSpot('tray')" :key="g.id">
        <button type="button" class="card" :class="{ sel: selected === g.id }" draggable="true" :aria-pressed="selected === g.id"
                @click.stop="tapCard(g.id)" @dragstart="dragStart($event, g.id)">
          <b>{{ g.name }}</b><span>+: {{ g.plus.map(nameOf).join(', ') }}</span><span>–: {{ g.minus.map(nameOf).join(', ') }}</span>
        </button>
      </template>
      <span v-if="!inSpot('tray').length" class="empty">Alle Karten liegen in einem Zimmer.</span>
    </div>
    <div class="grid">
      <section v-for="r in rooms" :key="r.id" class="room" :class="{ target: !!selected }" role="button" tabindex="0" :aria-label="r.label"
               @click="tapTarget(r.id)" @keydown.enter.prevent="tapTarget(r.id)" @keydown.space.prevent="tapTarget(r.id)"
               @dragover.prevent @drop="drop($event, r.id)">
        <h4>{{ r.label }}</h4>
        <div class="in">
          <button v-for="g in inSpot(r.id)" :key="g.id" type="button" class="card" :class="{ sel: selected === g.id, bad: broken.has(g.id) }" draggable="true"
                  :aria-pressed="selected === g.id" @click.stop="tapCard(g.id)" @dragstart="dragStart($event, g.id)">
            <b>{{ g.name }}</b><span>+: {{ g.plus.map(nameOf).join(', ') }}</span><span>–: {{ g.minus.map(nameOf).join(', ') }}</span>
          </button>
        </div>
      </section>
    </div>
    <p class="hint">Ziehe die Wunsch-Karten in die Zimmer, oder tippe erst eine Karte und dann ein Zimmer an. Rot umrandete Karten haben einen unerfüllten Wunsch.</p>
  </div>
</template>

<style scoped>
.rooms { display: grid; gap: 12px; }
.tray { display: flex; flex-wrap: wrap; gap: 8px; min-height: 84px; padding: 8px; border: 1px solid var(--line); border-radius: 12px; background: var(--bg); }
.grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 10px; }
@media (max-width: 600px) { .grid { grid-template-columns: 1fr; } }
.room { min-height: 150px; padding: 8px; border: 2px solid #8cc56a; border-radius: 10px; background: var(--sunk); cursor: pointer; }
.room.target { border-color: var(--sun); }
.room:focus-visible { outline: 3px solid var(--sun); }
.room h4 { margin: 0 0 6px; font-size: .95rem; }
.in { display: grid; gap: 6px; }
.card { display: grid; gap: 0; text-align: left; min-width: 0; padding: 5px 9px; border: 2px solid transparent; border-radius: 6px; background: #ffeb3b; color: #10313a; font: inherit; font-size: .9rem; line-height: 1.3; cursor: grab; }
.card b { font-size: 1rem; border-bottom: 1px solid #10313a55; margin-bottom: 2px; }
.card.sel { border-color: #10313a; box-shadow: 0 0 0 3px var(--sun); }
.card.bad { border-color: var(--bad); }
.empty { color: var(--muted); font-size: .85rem; align-self: center; }
.hint { margin: 0; font-size: .85rem; color: var(--muted); }
</style>
