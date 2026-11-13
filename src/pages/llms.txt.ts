import type { APIRoute } from 'astro';
import { getTasks, label, SITE, gradeRange } from '../lib/tasks';
import { text } from '../lib/text';
import taxonomy from '../data/taxonomy.json';

export const GET: APIRoute = async () => {
  const tasks = await getTasks();
  const lines = [
    '# Informatik-Otter',
    '',
    '> Knobelaufgaben, in denen Informatik steckt: Aufgaben aus dem Wettbewerb Informatik-Biber (BWINF/Bebras) unter freier Lizenz, verortet nach den Bildungsstandards der Gesellschaft für Informatik (GI), mit Klassenstufe, Thema und dem Verfahren dahinter. Eigene, neu geschriebene Varianten (Maskottchen: Otter) stehen unter CC BY-SA 4.0.',
    '',
    'Jede Aufgabe gibt es als Markdown unter /tasks/<id>.txt. Alle Aufgabentexte auf einmal: /llms-full.txt. Maschinenlesbare Liste: /tasks.json. Lösungen sind nicht öffentlich verlinkt.',
    '',
    'Hinweise zum Erstellen neuer Varianten: Behalte das informatische Verfahren bei, wähle einen neuen Kontext und neue Zahlen, nimm den Otter statt des Bibers als Figur und gib in der Quelle die Ausgangsaufgabe an (derived_from).',
    '',
    `- [Alle Aufgaben (Volltext)](${SITE}/llms-full.txt)`,
    `- [Aufgabenliste als JSON](${SITE}/tasks.json)`,
    `- [Taxonomie: GI-Bereiche, Themen, Verfahren](${SITE}/taxonomy.json)`,
  ];
  for (const [gi, giLabel] of Object.entries(taxonomy.giContent)) {
    const inGi = tasks.filter((t) => t.data.gi.content[0] === gi);
    if (!inGi.length) continue;
    lines.push('', `## ${giLabel}`, '');
    for (const t of inGi) {
      lines.push(`- [${t.data.title}](${SITE}/tasks/${t.id}.txt): ${t.data.summary} (${gradeRange(t.data.grades)}; ${t.data.topics.map(label.topic).join(', ')})`);
    }
  }
  return text(lines.join('\n') + '\n');
};
