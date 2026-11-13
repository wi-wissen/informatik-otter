// Checks the task folders beyond what the zod schema in src/lib/schema.ts covers.
// Run: npm run validate
import { existsSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { TASKS_DIR, ALPHABET, frontmatter, taskDirs } from './lib.mjs';
import taxonomy from '../src/data/taxonomy.json' with { type: 'json' };

const errors = [];
const warn = [];
const err = (id, msg) => errors.push(`${id}: ${msg}`);
const shorts = new Map();
const FORMATS = ['choice', 'sort-list', 'match', 'graph-pick', 'pixel-grid', 'command-sequence', 'input', 'place', 'hotspots', 'custom'];
const RESERVED = new Set(['tasks', 'topics', 'teachers', 'solutions', '_astro', 'pagefind']);

function walkStrings(v, fn) {
  if (typeof v === 'string') fn(v);
  else if (Array.isArray(v)) v.forEach((x) => walkStrings(x, fn));
  else if (v && typeof v === 'object') Object.values(v).forEach((x) => walkStrings(x, fn));
}

for (const id of taskDirs()) {
  const dir = join(TASKS_DIR, id);
  if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(id)) err(id, 'folder name must be lowercase a-z, 0-9 and hyphens');
  const idx = join(dir, 'index.md');
  const sol = join(dir, 'solution.md');
  if (!existsSync(idx)) { err(id, 'index.md missing'); continue; }
  if (!existsSync(sol)) err(id, 'solution.md missing');
  let d, body;
  try { ({ data: d, body } = frontmatter(idx)); } catch (e) { err(id, e.message); continue; }

  // short code
  const s = String(d.short ?? '');
  if (!/^[1-9A-HJ-NP-Za-km-z]{4}$/.test(s)) err(id, `short "${s}" must be 4 Base58 characters (no 0 O I l)`);
  if (RESERVED.has(s.toLowerCase())) err(id, `short "${s}" is a reserved path`);
  const lower = s.toLowerCase();
  if (shorts.has(lower)) err(id, `short "${s}" collides with ${shorts.get(lower)} (codes must differ ignoring case)`);
  shorts.set(lower, id);

  // taxonomy references
  for (const t of d.topics ?? []) if (!taxonomy.topics[t]) err(id, `unknown topic "${t}" (add it to src/data/taxonomy.json)`);
  for (const m of d.methods ?? []) if (!taxonomy.methods[m]) err(id, `unknown method "${m}" (add it to src/data/taxonomy.json)`);
  for (const g of Object.keys(d.grades ?? {})) if (!taxonomy.grades[g]) err(id, `unknown grade "${g}"`);
  for (const c of d.gi?.content ?? []) if (!taxonomy.giContent[c]) err(id, `unknown gi.content "${c}"`);
  for (const p of d.gi?.process ?? []) if (!taxonomy.giProcess[p]) err(id, `unknown gi.process "${p}"`);

  // interaction
  const f = d.interaction?.format;
  if (!FORMATS.includes(f)) err(id, `unknown interaction.format "${f}"`);
  if (f === 'custom' && !existsSync(join(dir, 'Task.vue'))) err(id, 'format "custom" needs a Task.vue in the task folder');

  // referenced files exist
  const refs = [];
  walkStrings(d.interaction?.props ?? {}, (v) => v.startsWith('./') && refs.push(v));
  for (const m of body.matchAll(/\]\((\.\/[^)\s]+)\)/g)) refs.push(m[1]);
  if (existsSync(sol)) {
    try {
      const { data: sd, body: sb } = frontmatter(sol);
      for (const m of sb.matchAll(/\]\((\.\/[^)\s]+)\)/g)) refs.push(m[1]);
      if (sd.answer === undefined && sd.answers === undefined) err(id, 'solution.md needs "answer" or "answers" in its frontmatter');
      if (!/Das ist Informatik|Dies ist Informatik/i.test(sb)) warn.push(`${id}: solution.md has no "Das ist Informatik!" section`);
    } catch (e) { err(id, `solution.md: ${e.message}`); }
  }
  for (const r of refs) if (!existsSync(join(dir, r))) err(id, `referenced file not found: ${r}`);

  // source
  if (!d.source?.license) err(id, 'source.license missing');
  if (d.source?.type === 'synthetic' && !(d.source.derived_from?.length)) err(id, 'synthetic tasks need source.derived_from');
  if (d.source?.type === 'synthetic' && d.mascot !== 'otter') err(id, 'synthetic tasks use mascot: otter');

  // image sizes
  const img = join(dir, 'img');
  if (existsSync(img)) for (const file of readdirSync(img)) {
    const size = statSync(join(img, file)).size;
    if (size > 400_000) warn.push(`${id}: img/${file} is ${(size / 1024).toFixed(0)} KB (keep images below 400 KB)`);
  }
}

warn.forEach((w) => console.warn(`warning  ${w}`));
if (errors.length) {
  errors.forEach((e) => console.error(`error    ${e}`));
  console.error(`\n${errors.length} error(s) in ${taskDirs().length} task folder(s).`);
  process.exit(1);
}
console.log(`ok: ${taskDirs().length} task folder(s), ${shorts.size} short code(s).`);
