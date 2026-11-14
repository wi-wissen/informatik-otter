import type { APIRoute } from 'astro';
import { getTasks } from '../lib/tasks';
import { taskMarkdown, text } from '../lib/text';

export const GET: APIRoute = async () => {
  const tasks = await getTasks();
  const parts = await Promise.all(tasks.map((t) => taskMarkdown(t)));
  return text(`# Informatik-Otter: alle Aufgaben\n\n${parts.join('\n---\n\n')}`);
};
