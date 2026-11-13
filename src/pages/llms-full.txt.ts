import type { APIRoute } from 'astro';
import { getTasks } from '../lib/tasks';
import { taskMarkdown, text } from '../lib/text';

export const GET: APIRoute = async () => {
  const tasks = await getTasks();
  return text(`# Informatik-Otter: alle Aufgaben\n\n${tasks.map((t) => taskMarkdown(t)).join('\n---\n\n')}`);
};
