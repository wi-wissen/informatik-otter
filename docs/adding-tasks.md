# Adding tasks from a Biber booklet

This is the step-by-step guide for importing the tasks of one Informatik-Biber year.
Work in your own branch, one year per branch: `import/<year>`.

## 0. Setup

```bash
npm ci
pip install pymupdf
```

## 1. Get the booklet

The booklets with solutions are listed on https://bwinf.de/informatik-biber/aufgaben/
("Aufgaben und Lösungen"). Download into `.import/` (ignored by git):

```bash
mkdir -p .import
curl -sSL -o .import/biber<YEAR>.pdf "<url of the booklet with solutions>"
python3 tools/biber_pdf.py info .import/biber<YEAR>.pdf
```

`info` prints the license line and the overview page (title, topic classification, page).

**License check.** Only import if the booklet states a free license (e.g. `CC BY-SA 4.0`,
`CC BY-NC-SA 3.0 DE`). Use the exact license from the booklet in `source.license`. If no license is
stated, stop and report it instead of importing.

## 2. One folder per task

Folder name: `<year>-<slug>`, slug from the German title, lowercase ASCII, words joined by `-`
(ä→ae, ö→oe, ü→ue, ß→ss, drop punctuation). Examples: `2025-obstkoerbe`, `2025-entdecke-seoul`,
`2025-baukloetze-1` (from "Bauklötze 1"). Tasks with the same
title in a later year get the later year, so there is no clash.

```
src/content/tasks/2025-obstkoerbe/
  index.md       task text + metadata
  solution.md    answer key + explanation + "Das ist Informatik!"
  img/           pictures cropped from the booklet
  Task.vue       only for format: custom
```

Look at the three reference tasks first:
`2025-obstkoerbe` (sort-list), `2025-entdecke-seoul` (graph-pick on a picture), `2025-pruef-biber` (choice).

## 3. Read the task

```bash
python3 tools/biber_pdf.py text .import/biber<YEAR>.pdf --pages 62-63
python3 tools/biber_pdf.py render .import/biber<YEAR>.pdf --page 62 --out .import/p62.png
```

Look at the rendered page (the image tool shows it to you). The header line says the grades and
difficulty, e.g. `3-4: einfach  5-6: –  7-8: mittel`. The flag at the top right is the Bebras country
the idea came from (two-letter code in `source.country`, e.g. AU, DE, CH, KR).

## 4. Cut out pictures

Most pictures in the booklets are vector drawings. Let the tool find them:

```bash
python3 tools/biber_pdf.py figures .import/biber<YEAR>.pdf --page 62 --out .import/f62.png
```

It prints one box per line (`bbox` in PDF points) and writes an image with numbered red boxes.
Look at the image, pick the boxes you need, then crop:

```bash
python3 tools/biber_pdf.py crop .import/biber<YEAR>.pdf --page 62 --bbox 52.2,284.1,138.2,333.9 --out src/content/tasks/2025-obstkoerbe/img/basket-a.png --scale 2.5
```

- `--scale 2.5` is a good default (sharp, small files). Keep each image below 400 KB.
- Use `--alpha` for a picture that goes under a `graph-pick` (transparent background).
- Do not crop the blue solution box into task pictures; solution pictures go into `solution.md`.
- Combine boxes when one picture was split, or adjust the bbox by hand.
- Always look at the cropped PNG once to check nothing is cut off.
- Small inline icons in a sentence (a red flag, an apple): write the word instead.

## 5. Write `index.md`

```yaml
---
short: u2xh                 # npm run short -- 1   (prints an unused code)
title: Obstkörbe            # exactly as in the booklet
summary: Bella will ihre Obstkörbe so aufstellen, dass die mit den meisten Äpfeln vorne stehen.
grades:                     # only the grades that have the task; einfach→easy, mittel→medium, schwer→hard
  "3-4": easy
gi:
  content: [algorithms]     # GI Inhaltsbereich, see table below
  process: [structuring]    # GI Prozessbereich, 1–2 that fit best
topics: [sorting]           # 1–3 keys from src/data/taxonomy.json → topics
methods: [lexicographic-order]  # the concrete algorithm/technique, if there is one (may be empty)
mascot: beaver
interaction: { ... }        # see docs/formats.md
source:
  type: original
  work: Informatik-Biber 2025
  year: 2025
  page: 62                  # first page of the task in the booklet
  url: https://bwinf.de/...pdf
  country: AU
  license: CC BY-SA 4.0     # as printed in the booklet
---
Task text in Markdown.
```

**Text rules**

- Copy the task text faithfully. Fix hyphenation from the PDF (`Teil­nahme` → `Teilnahme`) and line breaks.
- Replace instructions that only make sense in the original online system (e.g. "Ziehe die Karten …")
  with wording that fits our component, or keep them if they still fit.
- Keep the question at the end in **bold**.
- Pictures: `![precise alt text](./img/name.png)`. Alt text describes what matters for solving.
- Tables stay Markdown tables.
- `summary`: one sentence (max 160 characters) that makes you want to try it, no solution hints.

**GI Inhaltsbereich** (from the booklet's classification, first word):

| booklet | `gi.content` | typical `topics` |
|---|---|---|
| Algorithmen | `algorithms` | sorting, searching, graphs, optimization, algorithm-analysis, games |
| Programmierung | `algorithms` | programming, recursion |
| Modellierung | `information-data` (graphs: also `algorithms`) | modelling, graphs, logic, databases, trees |
| Kodierung | `information-data` | encoding, compression, error-detection, cryptography, images |
| Theoretische Informatik | `languages-automata` | automata, formal-languages |
| Systeme | `systems` | computer-architecture, networks, parallelism, ai |
| Informatik und Gesellschaft / Sicherheit | `society` | security, society |

**GI Prozessbereich**: `modelling` (Modellieren und Implementieren), `reasoning` (Begründen und Bewerten),
`structuring` (Strukturieren und Vernetzen), `communicating` (Kommunizieren und Kooperieren),
`representing` (Darstellen und Interpretieren).

**methods**: name the concrete procedure behind the task when there is one (Dijkstra, binary search,
Hamming code …). The "Das ist Informatik!" box usually says it. If a fitting method is missing in
`src/data/taxonomy.json`, add it there (key in English kebab-case, German label, its topic).
Do not add new topics or GI areas without asking.

## 6. Write `solution.md`

```yaml
---
answer: [b, d, a, c, e]     # shape depends on the format, see docs/formats.md
---
Explanation from the booklet ("So ist es richtig"), faithfully, with pictures.

## Das ist Informatik!

Text of the "Das ist Informatik!" box.
```

Older booklets call the box "Dies ist Informatik!" – use the heading `## Das ist Informatik!` anyway.

## 7. Choose the interaction

Rebuild what the student did in the online competition as closely as our formats allow:

- answer options A–D (text or pictures) → `choice`
- "Bringe in die richtige Reihenfolge" → `sort-list` (items in the booklet's start order)
- "Ordne zu" → `match`
- click places/connections on a map or graph → `graph-pick` with `background` and `hideNodes: true`
- colour/flip squares → `pixel-grid`
- build a sequence of commands → `command-sequence`
- "Wie viele …?" / enter a word → `input`
- something else (drag pieces on a board, a little simulation) → `custom` with `Task.vue`. Use it
  sparingly; if a simpler format captures the question, prefer it and adapt the question text.

For `graph-pick` on a picture: crop the picture with `--alpha`, use its size in points as `width`/`height`
(pixel size divided by the scale), and read node positions from the picture.

## 8. Check

```bash
npm run validate
npm run build
```

Both must pass. Then look at one or two of your tasks in the browser (`npm run preview`, open
`/tasks/<id>/`), switch on the teacher mode on `/teachers/`, solve the task and press **Prüfen**: it
must say "Richtig!" for the correct answer.

## 9. Commit

One commit per year is fine: `Import Informatik-Biber <year> (<n> tasks)`.
Do not commit the PDF or files in `.import/`.
