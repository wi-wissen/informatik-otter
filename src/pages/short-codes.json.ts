import type { APIRoute } from 'astro';
import { getTasks } from '../lib/tasks';

export const GET: APIRoute = async () => {
  const tasks = await getTasks();
  const map = Object.fromEntries(tasks.map((t) => [t.data.short, { id: t.id, title: t.data.title }]));
  return new Response(JSON.stringify(map), { headers: { 'Content-Type': 'application/json' } });
};
