import type { APIRoute } from 'astro';
import { getTasks, SITE } from '../lib/tasks';

export const GET: APIRoute = async () => {
  const tasks = await getTasks();
  const out = tasks.map((t) => ({
    id: t.id, url: `${SITE}/tasks/${t.id}/`, text: `${SITE}/tasks/${t.id}.txt`, short: t.data.short,
    title: t.data.title, summary: t.data.summary, grades: t.data.grades, gi: t.data.gi, topics: t.data.topics,
    format: t.data.interaction.format, source: t.data.source,
  }));
  return new Response(JSON.stringify(out, null, 1), { headers: { 'Content-Type': 'application/json' } });
};
