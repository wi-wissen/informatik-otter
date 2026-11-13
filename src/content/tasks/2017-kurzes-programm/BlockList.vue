<script setup lang="ts">
// Recursive list of program blocks (used by Task.vue).
type Block =
  | { t: 'fwd' | 'left' | 'right' }
  | { t: 'if'; a: Block[]; b: Block[] }
  | { t: 'loop'; body: Block[] };

defineOptions({ name: 'BlockList' });
const props = defineProps<{
  list: Block[];
  labels: Record<string, string>;
  remove: (list: Block[], i: number) => void;
  addTo: (list: Block[]) => void;
  drop: (e: DragEvent, list: Block[]) => void;
}>();
</script>

<template>
  <ul class="list">
    <li v-for="(b, i) in list" :key="i">
      <div v-if="b.t === 'fwd' || b.t === 'left' || b.t === 'right'" class="blk act placed">
        {{ labels[b.t] }}<button type="button" class="x" :aria-label="`${labels[b.t]} entfernen`" @click="remove(list, i)">×</button>
      </div>
      <div v-else-if="b.t === 'loop'" class="blk loop placed wide">
        <div class="head">wiederhole<button type="button" class="x" aria-label="wiederhole entfernen" @click="remove(list, i)">×</button></div>
        <div class="inner">
          <span class="lbl">mache</span>
          <BlockList :list="b.body" :labels="labels" :remove="remove" :add-to="addTo" :drop="drop" />
          <button type="button" class="slotbtn" @click="addTo(b.body)" @dragover.prevent @drop="drop($event, b.body)">+ hier einfügen</button>
        </div>
      </div>
      <div v-else class="blk ctl placed wide">
        <div class="head">wenn vorne frei<button type="button" class="x" aria-label="wenn-Baustein entfernen" @click="remove(list, i)">×</button></div>
        <div class="inner">
          <span class="lbl">mache</span>
          <BlockList :list="b.a" :labels="labels" :remove="remove" :add-to="addTo" :drop="drop" />
          <button type="button" class="slotbtn" @click="addTo(b.a)" @dragover.prevent @drop="drop($event, b.a)">+ hier einfügen</button>
        </div>
        <div class="inner">
          <span class="lbl">sonst</span>
          <BlockList :list="b.b" :labels="labels" :remove="remove" :add-to="addTo" :drop="drop" />
          <button type="button" class="slotbtn" @click="addTo(b.b)" @dragover.prevent @drop="drop($event, b.b)">+ hier einfügen</button>
        </div>
      </div>
    </li>
  </ul>
</template>

<style scoped>
.list { list-style: none; margin: 0; padding: 0; display: grid; gap: 6px; }
.blk { position: relative; border-radius: 8px; padding: 6px 10px; font: 600 .9rem var(--font-body); text-align: left; color: #fff; }
.blk.act { background: #8e44ad; }
.blk.ctl { background: #3d6c99; }
.blk.loop { background: #2e8b57; }
.placed { display: flex; align-items: center; justify-content: space-between; gap: 8px; }
.placed.wide { display: grid; gap: 6px; }
.head { display: flex; justify-content: space-between; align-items: center; gap: 8px; }
.inner { margin-left: 10px; padding: 6px; border-radius: 6px; background: rgba(255, 255, 255, .18); display: grid; gap: 6px; }
.lbl { font-size: .8rem; opacity: .9; }
.x { border: 0; background: rgba(0, 0, 0, .25); color: #fff; border-radius: 50%; width: 22px; height: 22px; cursor: pointer; line-height: 1; font-size: 1rem; }
.slotbtn { border: 2px dashed var(--line); border-radius: 8px; background: var(--surface); color: var(--muted); font: inherit; font-size: .8rem; padding: 4px 8px; cursor: pointer; }
.slotbtn:hover, .slotbtn:focus-visible { border-color: var(--primary); color: var(--ink); }
</style>
