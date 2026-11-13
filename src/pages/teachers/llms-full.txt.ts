import type { APIRoute } from 'astro';
import { getTasks } from '../../lib/tasks';
import { taskMarkdown, solutionMarkdown, text } from '../../lib/text';

// All tasks including solutions. Not linked publicly, disallowed in robots.txt.
export const GET: APIRoute = async () => {
  const tasks = await getTasks();
  const parts = await Promise.all(tasks.map(async (t) => taskMarkdown(t, await solutionMarkdown(t))));
  return text(`# Informatik-Otter: alle Aufgaben mit Lösungen\n\n${parts.join('\n---\n\n')}`);
};
