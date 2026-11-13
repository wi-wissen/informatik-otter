---
short: tD1j
title: Helligkeitskarte
summary: Aus Pixelbildern entstehen Zahlentabellen. Drei der Bilder ergeben dieselbe, eines nicht. Welches?
grades:
  "7-8": hard
  "9-10": medium
  "11-13": easy
gi:
  content: [systems]
  process: [modelling, representing]
topics: [images, ai]
methods: [neural-network]
mascot: beaver
interaction:
  format: choice
  props:
    columns: 4
    options:
      - { id: a, image: ./img/a.png, alt: "Bild A: obere Pixelreihe hellblau, die zwei unteren Reihen dunkelblau" }
      - { id: b, image: ./img/b.png, alt: "Bild B: zwei linke Pixelspalten violett, rechte Spalte hellviolett" }
      - { id: c, image: ./img/c.png, alt: "Bild C: alle neun Pixel rot" }
      - { id: d, image: ./img/d.png, alt: "Bild D: obere und untere Reihe dunkelgrün, mittlere Reihe hellgrün" }
source:
  type: original
  work: Informatik-Biber 2025
  year: 2025
  page: 40
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2025/Biberheft_2025_web_komplett.pdf
  country: DE
  license: CC BY-SA 4.0
---
Digitale Bilder bestehen häufig aus Pixeln. Sandra erstellt Helligkeitskarten für solche Pixelbilder. Dazu legt sie um ein Bild zuerst einen Rahmen aus zusätzlichen weißen Pixeln. Dann bestimmt sie für jedes Pixel des Bildes einen Helligkeitswert, und zwar:

- **1**, falls das Pixel heller ist als sein rechtes Nachbarpixel.
- **0**, falls das Pixel gleich hell ist wie sein rechtes Nachbarpixel.
- **-1**, falls das Pixel dunkler ist als sein rechtes Nachbarpixel.

Hier siehst du ein Bild aus vier Pixeln (plus die zusätzlichen weißen Pixel) und seine Helligkeitskarte.

![Ein Bild aus vier Pixeln in der Mitte eines weißen Rahmens: links oben ein hellvioletter, rechts oben ein dunkelvioletter, links unten ein dunkelvioletter und rechts unten ein dunkelvioletter Pixel](./img/example.png)

![Die Helligkeitskarte dazu: obere Zeile 1 und -1, untere Zeile 0 und -1](./img/example-map.png)

Unten siehst du vier Bilder mit je neun Pixeln. Genau drei davon haben die gleiche Helligkeitskarte.

**Welches der Bilder hat als einziges eine andere Helligkeitskarte?**
