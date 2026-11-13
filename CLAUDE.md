# Informatik-Otter

Static site (Astro + Vue islands) cataloguing tasks from the Informatik-Biber competition,
mapped to the GI education standards. Deployed to GitHub Pages at https://informatik-otter.wi7.net.

## Commands

- `npm run dev` – dev server
- `npm run validate` – checks task folders (short codes, taxonomy keys, files, answer keys)
- `npm run build` – static build into `dist/` (also validates frontmatter with zod)
- `npm run short -- 3` – print 3 unused short codes
- `python3 tools/biber_pdf.py --help` – read and crop Biber booklets (needs `pip install pymupdf`)

## Layout

- `src/content/tasks/<id>/` – one folder per task: `index.md`, `solution.md`, `img/`, optional `Task.vue`
- `src/lib/schema.ts` – zod schema for tasks and solutions (source of truth for frontmatter)
- `src/data/taxonomy.json` – grades, GI areas, topics, methods (labels in German)
- `src/components/formats/` – reusable answer formats; `TaskPlayer.vue` hosts them and the teacher mode
- `src/pages/` – `/`, `/tasks/`, `/tasks/<id>/`, `/<short>/` (focus view), `/solutions/<id>/` (fetched in
  teacher mode, not indexed), `/teachers/`, `/topics/`, `404`, `llms.txt`, `llms-full.txt`, `tasks.json`
- `docs/adding-tasks.md` – how to import a booklet year; `docs/formats.md` – answer formats

## Conventions

- Code, paths, keys, variables and comments in English. Content (titles, texts, labels) in German.
- URLs only lowercase, except short codes (`/r7Kq`, 4 Base58 characters, case-sensitive).
- Write "Lehrer:in", "Lehrer:innen", "Schüler:innen".
- Colours only through the tokens in `src/styles/global.css`; light and dark theme must both work.
- Students see tasks without "Prüfen"; checking and solutions exist only in teacher mode
  (localStorage flag `informatik-otter:teacher`, switched on `/teachers/`).
- Original tasks keep the booklet's license; own tasks use `mascot: otter`, `source.type: synthetic`,
  `derived_from`, license `CC BY-SA 4.0`. Code is MIT.
