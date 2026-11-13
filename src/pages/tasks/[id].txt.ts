import type { APIRoute, GetStaticPaths } from 'astro';
import { getTasks, type TaskEntry } from '../../lib/tasks';
import { taskMarkdown, text } from '../../lib/text';

export const getStaticPaths: GetStaticPaths = async () =>
  (await getTasks()).map((task) => ({ params: { id: task.id }, props: { task } }));

export const GET: APIRoute = ({ props }) => text(taskMarkdown(props.task as TaskEntry));
