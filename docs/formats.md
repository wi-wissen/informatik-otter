# Answer formats

Every task has exactly one `interaction` in its `index.md` frontmatter. The format decides which
Vue component renders it (`src/components/formats/`) and what shape the answer has. The answer key
in `solution.md` must have exactly that shape. `TaskPlayer.vue` compares them in teacher mode.

Paths in `props` that start with `./` are files in the task folder (usually `./img/...`).

| format | use it for | props | answer in `solution.md` |
|---|---|---|---|
| `choice` | pick one (or several) of A–D, a number, a picture (the component adds A, B, C … itself; don't prefix labels) | `options: [{id, label?, image?, alt?}]`, `multiple?`, `columns?`, `keys?` (false when the option pictures already show their letter) | single: `answer: b` · multiple: `answer: [a, c]` (order does not matter) |
| `sort-list` | put things in an order | `items: [{id, label?, image?, alt?}]` in the **start order shown in the booklet**, `direction?: horizontal\|vertical`, `startLabel?`, `endLabel?` | `answer: [b, d, a, c, e]` |
| `match` | assign each left item one right item (a right item may be used several times) | `left: [...]`, `right: [...]` | `answer: { l1: r3, l2: r1 }` |
| `graph-pick` | click nodes, edges or a path in a graph/map | `pick: nodes\|edges\|path`, `nodes: [{id, x, y, label?, image?}]`, `edges: [{id?, from, to, label?}]`, `width`, `height` (coordinate system), `background?` (picture under the graph, crop with `--alpha`), `max?` (1 = single pick, a new click replaces the old one), `hideNodes?` (nodes invisible but still clickable; chosen ones get a yellow ring), `nodeImage?`, `nodeRadius?`, `directed?` | nodes/edges: list of ids, order does not matter (edge id defaults to `from-to`) · path: ordered list of node ids |
| `pixel-grid` | colour cells in a grid (index 0 = empty colour; wide grids scroll sideways) | `rows`, `cols`, `palette: ["#fff", "#000"]`, `initial?: [[0,1],...]`, `locked?` | `answer: [[0,1,0],[1,1,0]]` (palette indices) |
| `command-sequence` | build a program from command buttons | `commands: [{id, label?, image?}]`, `maxLength?` | `answer: [up, up, right]` |
| `input` | type a number or a word | `kind: number\|text`, `placeholder?`, `prefix?`, `suffix?`, `caseSensitive?` | `answer: "42"` (compared trimmed, case-insensitive unless `caseSensitive`) |
| `place` | drag things onto fields (also tap-tap) | `items: [...]`, `zones: [{id, label?, x?, y?, w?, h?, capacity?, accepts?}]` (accepts: only these item ids), `itemSize?` (px of pieces in the tray, default 64; placed pieces fill their field), `background?`, `width`, `height` (coordinates of the picture), `reusable?` (items can be used several times, e.g. arrows), `initial?` | `answer: { zone: item }`; zones with `capacity` > 1: `{ zone: [items] }` (sorted); empty zones are left out |
| `hotspots` | click places on a picture that switch between states (e.g. ? → rechts → links) | `background`, `width`, `height`, `spots: [{id, x, y, w?, h?, label?}]`, `states: [{id, label?, image?}]` (first state = untouched) | `answer: { spot: state }` for every spot not in the first state |
| `custom` | anything else | free | free; `Task.vue` in the task folder must `emit('answer', value)` |

Several correct answers: use `answers: [[a, b], [b, a]]` instead of `answer`.

## Custom tasks

Only when no format fits. Put `Task.vue` next to `index.md`:

```vue
<script setup lang="ts">
const props = defineProps<{ /* your props from index.md */ }>();
const emit = defineEmits<{ answer: [value: unknown] }>();
// call emit('answer', value) whenever the student changes something
</script>
```

Use the design tokens from `src/styles/global.css` (`var(--primary)`, `var(--line)` ...), no fixed colours,
and keep it usable with keyboard and on a phone. Reuse `formats/ItemFace.vue` for pictures with labels.
