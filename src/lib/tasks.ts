import { getCollection, type CollectionEntry } from 'astro:content';
import taxonomy from '../data/taxonomy.json';

export type TaskEntry = CollectionEntry<'tasks'>;
export const SITE = 'https://informatik-otter.wi7.net';

/** All tasks, sorted by year (newest first), then id. */
export async function getTasks(): Promise<TaskEntry[]> {
  const all = await getCollection('tasks');
  return all.sort((a, b) => (b.data.source.year ?? 0) - (a.data.source.year ?? 0) || a.id.localeCompare(b.id));
}

// Files inside task folders (img/, data/ ...) as public URLs, keyed by "/src/content/tasks/<id>/<path>".
const assetUrls = import.meta.glob('/src/content/tasks/*/**/*.{png,jpg,jpeg,gif,svg,webp}', {
  eager: true, query: '?url', import: 'default',
}) as Record<string, string>;

/** Replace every string "./something" in props with the built URL of that file in the task folder. */
export function resolveAssets<T>(taskId: string, value: T): T {
  if (typeof value === 'string' && value.startsWith('./')) {
    const key = `/src/content/tasks/${taskId}/${value.slice(2)}`;
    const url = assetUrls[key];
    if (!url) throw new Error(`Task ${taskId}: file not found: ${value}`);
    return url as T;
  }
  if (Array.isArray(value)) return value.map((v) => resolveAssets(taskId, v)) as T;
  if (value && typeof value === 'object') {
    return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, resolveAssets(taskId, v)])) as T;
  }
  return value;
}

export const label = {
  grade: (k: string) => (taxonomy.grades as Record<string, string>)[k] ?? k,
  difficulty: (k: string) => (taxonomy.difficulty as Record<string, string>)[k] ?? k,
  topic: (k: string) => (taxonomy.topics as Record<string, { label: string }>)[k]?.label ?? k,
  method: (k: string) => (taxonomy.methods as Record<string, { label: string }>)[k]?.label ?? k,
  giContent: (k: string) => (taxonomy.giContent as Record<string, string>)[k] ?? k,
  giProcess: (k: string) => (taxonomy.giProcess as Record<string, string>)[k] ?? k,
};

export const formatLabel: Record<string, string> = {
  choice: 'Auswahl', 'sort-list': 'Reihenfolge', match: 'Zuordnen', 'graph-pick': 'Graph',
  'pixel-grid': 'Raster', 'command-sequence': 'Befehle', input: 'Eingabe', place: 'Ablegen', hotspots: 'Klickpunkte', custom: 'Interaktiv',
};

/** "Klasse 3–4 (leicht), 5–6 (mittel)" */
export function gradeText(grades: Record<string, string>) {
  return Object.entries(grades).map(([g, d]) => `${g} (${label.difficulty(d)})`).join(', ');
}
export function gradeRange(grades: Record<string, string>) {
  const ks = Object.keys(grades).sort((a, b) => parseInt(a) - parseInt(b));
  const lo = ks[0].split('-')[0];
  const hi = ks[ks.length - 1].split('-')[1];
  return `Klasse ${lo}–${hi}`;
}

/** One-line source note for footers and txt files. */
export function sourceNote(t: TaskEntry) {
  const s = t.data.source;
  if (s.type === 'synthetic') return `Eigene Aufgabe (Otter), abgeleitet von ${s.derived_from?.join(', ') ?? '–'} · ${s.license}`;
  return `Aufgabe: ${s.work}${s.page ? `, S. ${s.page}` : ''}${s.country ? ` · Idee: Bebras ${s.country}` : ''} · ${s.license}`;
}

/** Normalized words for the catalog search: title, summary, topics, plus hidden keywords (methods and their aliases). */
export function normalizeSearch(text: string) {
  return text.toLowerCase().replace(/ß/g, 'ss').normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .split(/[^a-z0-9]+/).filter(Boolean);
}
export function searchText(t: TaskEntry) {
  const d = t.data;
  const methods = d.methods.flatMap((m) => {
    const e = (taxonomy.methods as Record<string, { label: string; aliases?: string[] }>)[m];
    return [m, e?.label ?? '', ...(e?.aliases ?? [])];
  });
  const words = normalizeSearch([d.title, d.summary, ...d.topics.map(label.topic), ...methods].join(' '));
  return [...new Set(words)].join(' ');
}
