import type { APIRoute } from 'astro';
import taxonomy from '../data/taxonomy.json';
export const GET: APIRoute = () => new Response(JSON.stringify(taxonomy, null, 1), { headers: { 'Content-Type': 'application/json' } });
