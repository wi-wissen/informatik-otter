import { getCollection, type CollectionEntry } from 'astro:content';
import { getImage } from 'astro:assets';
import taxonomy from '../data/taxonomy.json';

export type TaskEntry = CollectionEntry<'tasks'>;
export const SITE = 'https://informatik-otter.wi7.net';

/** All tasks, sorted by year (newest first), then id. */
export async function getTasks(): Promise<TaskEntry[]> {
  const all = await getCollection('tasks');
  return all.sort((a, b) => (b.data.source.year ?? 0) - (a.data.source.year ?? 0) || a.id.localeCompare(b.id));
}

// Pictures inside task folders, loaded lazily so only pictures that are really used end up in the build.
const images = import.meta.glob<{ default: ImageMetadata }>('/src/content/tasks/*/**/*.{png,jpg,jpeg,gif,webp}');
const svgs = import.meta.glob('/src/content/tasks/*/**/*.svg', { query: '?url', import: 'default' }) as Record<string, () => Promise<string>>;

/** URL of a task file "./img/x.png": raster pictures are converted to WebP at build time. */
export async function assetUrl(taskId: string, path: string): Promise<string> {
  const key = `/src/content/tasks/${taskId}/${path.slice(2)}`;
  if (svgs[key]) return svgs[key]();
  if (!images[key]) throw new Error(`Task ${taskId}: file not found: ${path}`);
  const meta = (await images[key]()).default;
  const out = await getImage({ src: meta, format: 'webp', quality: 82 });
  return out.src;
}

/** Replace every string "./something" in props with the built URL of that file in the task folder. */
export async function resolveAssets<T>(taskId: string, value: T): Promise<T> {
  if (typeof value === 'string' && value.startsWith('./')) return (await assetUrl(taskId, value)) as T;
  if (Array.isArray(value)) return (await Promise.all(value.map((v) => resolveAssets(taskId, v)))) as T;
  if (value && typeof value === 'object') {
    const entries = await Promise.all(Object.entries(value).map(async ([k, v]) => [k, await resolveAssets(taskId, v)] as const));
    return Object.fromEntries(entries) as T;
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
