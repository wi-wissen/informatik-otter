# Answer formats

Every task has exactly one `interaction` in its `index.md` frontmatter. The format decides which
Vue component renders it (`src/components/formats/`) and what shape the answer has. The answer key
in `solution.md` must have exactly that shape. `TaskPlayer.vue` compares them in teacher mode.

Paths in `props` that start with `./` are files in the task folder (usually `./img/...`).

| format | use it for | props | answer in `solution.md` |
|---|---|---|---|
| `choice` | pick one (or several) of A–D, a number, a picture | `options: [{id, label?, image?, alt?}]`, `multiple?`, `columns?` | single: `answer: b` · multiple: `answer: [a, c]` (order does not matter) |
| `sort-list` | put things in an order | `items: [{id, label?, image?, alt?}]` in the **start order shown in the booklet**, `direction?: horizontal\|vertical`, `startLabel?`, `endLabel?` | `answer: [b, d, a, c, e]` |
| `match` | assign each left item one right item | `left: [...]`, `right: [...]` | `answer: { l1: r3, l2: r1 }` |
| `graph-pick` | click nodes, edges or a path in a graph/map | `pick: nodes\|edges\|path`, `nodes: [{id, x, y, label?, image?}]`, `edges: [{id?, from, to, label?}]`, `width`, `height` (coordinate system), `background?` (picture under the graph, crop with `--alpha`), `hideNodes?` (nodes invisible but still clickable; chosen ones get a yellow ring), `nodeImage?`, `nodeRadius?`, `directed?` | nodes/edges: list of ids, order does not matter (edge id defaults to `from-to`) · path: ordered list of node ids |
| `pixel-grid` | colour cells in a grid | `rows`, `cols`, `palette: ["#fff", "#000"]`, `initial?: [[0,1],...]`, `locked?` | `answer: [[0,1,0],[1,1,0]]` (palette indices) |
| `command-sequence` | build a program from command buttons | `commands: [{id, label?, image?}]`, `maxLength?` | `answer: [up, up, right]` |
| `input` | type a number or a word | `kind: number\|text`, `placeholder?`, `prefix?`, `suffix?`, `caseSensitive?` | `answer: "42"` (compared trimmed, case-insensitive unless `caseSensitive`) |
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
