<script setup lang="ts">
import { ref } from 'vue';
import ItemFace from './ItemFace.vue';

type Item = { id: string; label?: string; image?: string; alt?: string };
const props = defineProps<{ commands: Item[]; maxLength?: number }>();
const emit = defineEmits<{ answer: [value: string[]] }>();

const program = ref<string[]>([]);
const max = props.maxLength ?? 12;
const byId = Object.fromEntries(props.commands.map((c) => [c.id, c]));
function add(id: string) { if (program.value.length < max) { program.value = [...program.value, id]; emit('answer', [...program.value]); } }
function removeAt(i: number) { program.value = program.value.filter((_, j) => j !== i); emit('answer', [...program.value]); }
function clear() { program.value = []; emit('answer', []); }
</script>

<template>
  <div class="cmd">
    <div class="palette">
      <button v-for="c in commands" :key="c.id" type="button" class="c" @click="add(c.id)" :aria-label="`${c.label ?? c.id} anhängen`">
        <ItemFace :item="c" />
      </button>
    </div>
    <ol class="program" aria-label="Deine Befehlsfolge">
      <li v-for="(id, i) in program" :key="i">
        <button type="button" class="c set" @click="removeAt(i)" :aria-label="`Schritt ${i + 1} entfernen`">
          <span class="n">{{ i + 1 }}</span><ItemFace :item="byId[id]" />
        </button>
      </li>
      <li v-if="program.length === 0" class="empty">Tippe oben auf Befehle, um sie hier anzuhängen.</li>
    </ol>
    <div class="bar"><span class="hint">{{ program.length }} / {{ max }} Schritte · antippen entfernt</span>
      <button type="button" class="reset" @click="clear">Alles löschen</button></div>
  </div>
</template>

<style scoped>
.cmd { display: grid; gap: 10px; }
.palette, .program { display: flex; flex-wrap: wrap; gap: 8px; list-style: none; margin: 0; padding: 0; }
.program { min-height: 70px; padding: 10px; border: 2px dashed var(--line); border-radius: 12px; }
.c { position: relative; border: 2px solid var(--line); background: var(--surface); color: var(--ink); border-radius: 10px; padding: 8px 12px; cursor: pointer; font: inherit; min-width: 56px; }
.c:hover { border-color: var(--primary); }
.c.set { background: var(--primary-soft); }
.n { position: absolute; top: 2px; left: 5px; font: 700 .65rem var(--font-mono); color: var(--muted); }
.empty { color: var(--muted); font-size: .9rem; align-self: center; }
.bar { display: flex; justify-content: space-between; gap: 8px; flex-wrap: wrap; align-items: center; }
.hint { font-size: .85rem; color: var(--muted); }
.reset { border: 1px solid var(--line); background: var(--surface); color: var(--ink); border-radius: 999px; padding: 4px 12px; cursor: pointer; font: inherit; font-size: .85rem; }
</style>
