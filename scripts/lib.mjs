// Shared helpers for repository scripts (no Astro needed).
import { readdirSync, readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { load as yamlLoad } from 'js-yaml';

export const TASKS_DIR = 'src/content/tasks';
export const ALPHABET = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';

export function frontmatter(file) {
  const text = readFileSync(file, 'utf8');
  const m = text.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!m) throw new Error(`${file}: no frontmatter`);
  return { data: yamlLoad(m[1]) ?? {}, body: m[2] };
}

export function taskDirs() {
  if (!existsSync(TASKS_DIR)) return [];
  return readdirSync(TASKS_DIR, { withFileTypes: true }).filter((d) => d.isDirectory()).map((d) => d.name).sort();
}

export function shortCodes() {
  const codes = new Map();
  for (const id of taskDirs()) {
    const f = join(TASKS_DIR, id, 'index.md');
    if (!existsSync(f)) continue;
    try { const { data } = frontmatter(f); if (data.short) codes.set(String(data.short), id); } catch { /* reported by validate */ }
  }
  return codes;
}
