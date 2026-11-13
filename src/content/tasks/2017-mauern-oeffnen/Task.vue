<script setup lang="ts">
// Treasure map: click a wall to open it, click again to close it. The answer is "ok" when a path from
// Peter to the treasure is free and no more walls than necessary are open.
import { computed, onMounted, ref } from 'vue';

const props = defineProps<{ map: string[]; start: [number, number]; treasure: [number, number] }>();
const emit = defineEmits<{ answer: [value: string] }>();

const R = props.map.length;
const C = props.map[0].length;
const isWall = (r: number, c: number) => props.map[r][c] === '#';
const opened = ref<Set<string>>(new Set());
const key = (r: number, c: number) => `${r},${c}`;

// fewest walls on any path (0-1 BFS)
function fewest(): number {
  const dist = Array.from({ length: R }, () => Array<number>(C).fill(Infinity));
  dist[props.start[0]][props.start[1]] = 0;
  const queue: [number, number][] = [props.start];
  const dq: [number, number][] = [props.start];
  void queue;
  while (dq.length) {
    const [r, c] = dq.shift()!;
    for (const [dr, dc] of [[0, 1], [1, 0], [0, -1], [-1, 0]]) {
      const nr = r + dr, nc = c + dc;
      if (nr < 0 || nc < 0 || nr >= R || nc >= C) continue;
      const w = isWall(nr, nc) ? 1 : 0;
      if (dist[r][c] + w < dist[nr][nc]) {
        dist[nr][nc] = dist[r][c] + w;
        if (w) dq.push([nr, nc]); else dq.unshift([nr, nc]);
      }
    }
  }
  return dist[props.treasure[0]][props.treasure[1]];
}
const minimum = fewest();

function connected(): boolean {
  const seen = new Set<string>([key(...props.start)]);
  const stack: [number, number][] = [props.start];
  while (stack.length) {
    const [r, c] = stack.pop()!;
    if (r === props.treasure[0] && c === props.treasure[1]) return true;
    for (const [dr, dc] of [[0, 1], [1, 0], [0, -1], [-1, 0]]) {
      const nr = r + dr, nc = c + dc;
      if (nr < 0 || nc < 0 || nr >= R || nc >= C || seen.has(key(nr, nc))) continue;
      if (isWall(nr, nc) && !opened.value.has(key(nr, nc))) continue;
      seen.add(key(nr, nc));
      stack.push([nr, nc]);
    }
  }
  return false;
}
const count = computed(() => opened.value.size);
function report() {
  emit('answer', connected() && opened.value.size === minimum ? 'ok' : 'nicht-ok');
}
onMounted(report);
function toggle(r: number, c: number) {
  const next = new Set(opened.value);
  if (!next.delete(key(r, c))) next.add(key(r, c));
  opened.value = next;
  report();
}
function reset() { opened.value = new Set(); report(); }
const isStart = (r: number, c: number) => r === props.start[0] && c === props.start[1];
const isTreasure = (r: number, c: number) => r === props.treasure[0] && c === props.treasure[1];
</script>

<template>
  <div class="map">
    <div class="grid" :style="{ gridTemplateColumns: `repeat(${C}, 1fr)` }" role="group" aria-label="Schatzkarte">
      <template v-for="(row, r) in map" :key="r">
        <template v-for="(ch, c) in row" :key="c">
          <button v-if="ch === '#'" type="button" class="cell wall" :class="{ open: opened.has(key(r, c)) }"
                  :aria-pressed="opened.has(key(r, c))" :aria-label="`Mauer in Zeile ${r + 1}, Spalte ${c + 1}: ${opened.has(key(r, c)) ? 'geöffnet' : 'geschlossen'}`"
                  @click="toggle(r, c)" />
          <div v-else class="cell free" :aria-label="isStart(r, c) ? 'Peter (Start)' : isTreasure(r, c) ? 'Schatz' : undefined">
            <svg v-if="isStart(r, c)" viewBox="0 0 40 40" class="icon" aria-hidden="true">
              <path d="M6 40c0-9 6-13 14-13s14 4 14 13z" fill="#6cbf3a" /><circle cx="20" cy="15" r="9" fill="#f2b980" />
              <path d="M11 12c2-7 16-7 18 0-5-3-13-3-18 0z" fill="#5a3a22" /><circle cx="16.5" cy="16" r="1.2" fill="#222" /><circle cx="23.5" cy="16" r="1.2" fill="#222" />
              <path d="M16 20c2 2 6 2 8 0" stroke="#222" stroke-width="1.4" fill="none" />
            </svg>
            <svg v-else-if="isTreasure(r, c)" viewBox="0 0 40 40" class="icon" aria-hidden="true">
              <ellipse cx="20" cy="29" rx="16" ry="9" fill="#5a3418" /><ellipse cx="20" cy="22" rx="13" ry="4" fill="#f5c518" />
              <ellipse cx="14" cy="19" rx="5" ry="2" fill="#ffd84d" /><ellipse cx="25" cy="18" rx="5" ry="2" fill="#f5c518" /><ellipse cx="20" cy="15" rx="5" ry="2" fill="#ffd84d" />
            </svg>
          </div>
        </template>
      </template>
    </div>
    <div class="bar"><span aria-live="polite">Geöffnete Mauern: {{ count }}</span><button type="button" class="reset" @click="reset">Alle Mauern schließen</button></div>
  </div>
</template>

<style scoped>
.map { display: grid; gap: 8px; max-width: 480px; }
.grid { display: grid; gap: 0; border: 2px solid var(--line); }
.cell { aspect-ratio: 1; border: 0; padding: 0; display: grid; place-items: center; }
.free { background: #bdbdbd; }
.icon { width: 80%; height: 80%; }
.wall { cursor: pointer; background:
  linear-gradient(#3a2216 0 0) 0 33% / 100% 2px no-repeat,
  linear-gradient(#3a2216 0 0) 0 66% / 100% 2px no-repeat,
  linear-gradient(#3a2216 0 0) 50% 0 / 2px 33% no-repeat,
  linear-gradient(#3a2216 0 0) 25% 33% / 2px 33% no-repeat,
  linear-gradient(#3a2216 0 0) 75% 66% / 2px 34% no-repeat,
  #8a4f32; outline: 1px solid #3a2216; outline-offset: -1px; }
.wall.open { background: #bdbdbd; outline: 2px dashed #8a4f32; outline-offset: -3px; }
.wall:focus-visible { outline: 3px solid var(--sun); outline-offset: -3px; }
.bar { display: flex; justify-content: space-between; gap: 8px; align-items: center; flex-wrap: wrap; font-size: .9rem; }
.reset { border: 1px solid var(--line); background: var(--surface); color: var(--ink); border-radius: 999px; padding: 4px 12px; cursor: pointer; font: inherit; font-size: .85rem; }
</style>
