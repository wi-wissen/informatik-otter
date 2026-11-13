// Plain-text (Markdown) renderings of tasks for llms.txt and friends.
import { getCollection } from 'astro:content';
import { SITE, label, formatLabel, gradeText, resolveAssets, type TaskEntry } from './tasks';

const absolute = (taskId: string, md: string) =>
  md.replace(/\]\((\.\/[^)\s]+)\)/g, (m, p) => {
    try { return `](${SITE}${resolveAssets(taskId, p)})`; } catch { return m; }
  });

export function taskMarkdown(t: TaskEntry, extra = '') {
  const d = t.data;
  const s = d.source;
  return [
    `# ${d.title}`,
    '',
    `> ${d.summary}`,
    '',
    `- ID: ${t.id}`,
    `- Seite: ${SITE}/tasks/${t.id}/  (Kurzlink: ${SITE}/${d.short})`,
    `- Klassenstufen (Schwierigkeit): ${gradeText(d.grades)}`,
    `- GI-Inhaltsbereich: ${d.gi.content.map(label.giContent).join(', ')}`,
    d.gi.process.length ? `- GI-Prozessbereich: ${d.gi.process.map(label.giProcess).join(', ')}` : '',
    `- Themen: ${d.topics.map(label.topic).join(', ')}`,
    `- Antwortformat: ${formatLabel[d.interaction.format]} (${d.interaction.format})`,
    `- Quelle: ${s.type === 'synthetic' ? `eigene Variante, abgeleitet von ${s.derived_from?.join(', ')}` : s.work}${s.page ? `, S. ${s.page}` : ''}${s.bebras_id ? `, Bebras ${s.bebras_id}` : ''}${s.url ? ` (${s.url})` : ''}`,
    `- Lizenz: ${s.license}`,
    '',
    '## Aufgabe',
    '',
    absolute(t.id, (t.body ?? '').trim()),
    '',
    '## Interaktion',
    '',
    '```json',
    JSON.stringify(d.interaction, null, 2),
    '```',
    extra,
  ].filter((l) => l !== '').join('\n').replace(/\n## /g, '\n\n## ') + '\n';
}

export async function solutionMarkdown(t: TaskEntry) {
  const sol = (await getCollection('solutions')).find((s) => s.id === t.id);
  if (!sol) return '';
  return [
    '',
    '## Lösung',
    '',
    t.data.methods.length ? `Verfahren: ${t.data.methods.map(label.method).join(', ')}\n` : '',
    'Antwortschlüssel:',
    '```json',
    JSON.stringify(sol.data.answers ?? sol.data.answer),
    '```',
    '',
    absolute(t.id, (sol.body ?? '').trim()),
  ].join('\n');
}

export const text = (body: string) => new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
