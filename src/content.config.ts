import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { task, solution } from './lib/schema';

// Each task lives in src/content/tasks/<id>/ with index.md and solution.md.
const folderId = ({ entry }: { entry: string }) => entry.split('/')[0];

const tasks = defineCollection({
  loader: glob({ pattern: '*/index.md', base: './src/content/tasks', generateId: folderId }),
  schema: task,
});

const solutions = defineCollection({
  loader: glob({ pattern: '*/solution.md', base: './src/content/tasks', generateId: folderId }),
  schema: solution,
});

export const collections = { tasks, solutions };
