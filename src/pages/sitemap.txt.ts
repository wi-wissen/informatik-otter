import type { APIRoute } from 'astro';
import { getTasks, SITE } from '../lib/tasks';

export const GET: APIRoute = async () => {
  const tasks = await getTasks();
  const urls = ['/', '/tasks/', '/topics/', ...tasks.map((t) => `/tasks/${t.id}/`)].map((p) => SITE + p);
  return new Response(urls.join('\n') + '\n', { headers: { 'Content-Type': 'text/plain' } });
};
