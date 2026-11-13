<script setup lang="ts">
// Free-form program entry: one instruction per line (wait(n), goto_block(X), goto_treasure).
// The component runs the program on the corridor. It reports "ok" when Jones reaches the treasure
// as early as possible (minTime) with the fewest instructions for that (minLength).
import { computed, ref } from 'vue';

const props = defineProps<{ periods: number[]; minTime: number; minLength: number }>();
const emit = defineEmits<{ answer: [value: string] }>();

const text = ref('');
const letters = props.periods.map((_, i) => String.fromCharCode(65 + i));

type Ins = { op: 'wait'; n: number } | { op: 'block'; k: number } | { op: 'treasure' };
function parse(src: string): Ins[] | null {
  const out: Ins[] = [];
  for (const raw of src.split(/[\n;]/)) {
    const line = raw.trim().replace(/\s+/g, '');
    if (!line) continue;
    let m: RegExpMatchArray | null;
    if ((m = line.match(/^wait\((\d+)\)$/i))) out.push({ op: 'wait', n: Number(m[1]) });
    else if ((m = line.match(/^goto_block\(([a-z])\)$/i)) && letters.includes(m[1].toUpperCase())) out.push({ op: 'block', k: letters.indexOf(m[1].toUpperCase()) + 1 });
    else if (/^goto_treasure(\(\))?$/i.test(line)) out.push({ op: 'treasure' });
    else return null;
  }
  return out;
}
// A block with period T is down until T, up from T to 2T, down again from 2T to 3T, and so on.
const up = (T: number, t: number) => Math.floor(t / T) % 2 === 1;
function run(prog: Ins[]): number | null {
  let t = 0, pos = 0;
  for (const ins of prog) {
    if (ins.op === 'wait') {
      if (pos > 0) {
        const T = props.periods[pos - 1];
        if (!up(T, t) || t + ins.n > (Math.floor(t / T) + 1) * T) return null; // crushed while waiting under a block
      }
      t += ins.n;
    } else if (ins.op === 'block') {
      if (ins.k <= pos) return null;
      for (let j = pos + 1; j <= ins.k; j++) if (!up(props.periods[j - 1], t)) return null;
      pos = ins.k;
    } else {
      for (let j = pos + 1; j <= props.periods.length; j++) if (!up(props.periods[j - 1], t)) return null;
      return t;
    }
  }
  return null;
}
const verdict = computed(() => {
  if (!text.value.trim()) return '';
  const prog = parse(text.value);
  if (!prog) return 'unlesbar';
  const t = run(prog);
  return t === props.minTime && prog.length === props.minLength ? 'ok' : 'nicht richtig';
});
function onInput() { emit('answer', verdict.value); }
</script>

<template>
  <div class="prog">
    <label for="jones-prog">Deine Anweisungen (eine pro Zeile):</label>
    <textarea id="jones-prog" v-model="text" rows="6" spellcheck="false" autocapitalize="off" autocomplete="off" autocorrect="off"
              placeholder="wait(2)&#10;goto_block(A)&#10;…" @input="onInput"></textarea>
    <span class="hint">Mögliche Anweisungen: <code>wait(n)</code>, <code>goto_block(A)</code> bis <code>goto_block({{ letters[letters.length - 1] }})</code> und <code>goto_treasure</code>.</span>
  </div>
</template>

<style scoped>
.prog { display: grid; gap: 8px; max-width: 460px; }
label { font-weight: 700; }
textarea { font: 1rem/1.5 var(--font-mono); padding: 10px 12px; border: 2px solid var(--line); border-radius: 10px; background: var(--surface); color: var(--ink); resize: vertical; }
textarea:focus-visible { outline: 3px solid var(--sun); border-color: var(--primary); }
.hint { font-size: .85rem; color: var(--muted); }
code { font-family: var(--font-mono); }
</style>
