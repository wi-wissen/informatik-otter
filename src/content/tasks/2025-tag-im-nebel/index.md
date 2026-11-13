---
short: 2aB3
title: Tag im Nebel
summary: Der Nebel breitet sich Stunde für Stunde über das Bergland aus. Welches Haus erreicht er als letztes?
grades:
  "7-8": easy
  "9-10": easy
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [images, graphs]
methods: [flood-fill, bfs]
mascot: beaver
interaction:
  format: graph-pick
  props:
    pick: nodes
    width: 242
    height: 212
    background: ./img/map.png
    hideNodes: true
    nodeRadius: 14
    nodes:
      - { id: h1, x: 106, y: 45 }
      - { id: h2, x: 76, y: 106 }
      - { id: h3, x: 166, y: 106 }
      - { id: h4, x: 15, y: 136 }
      - { id: h5, x: 226, y: 166 }
    edges: []
source:
  type: original
  work: Informatik-Biber 2025
  year: 2025
  page: 74
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2025/Biberheft_2025_web_komplett.pdf
  country: PT
  license: CC BY-SA 4.0
---
Im Land der Berge ist heute Nebel, und der breitet sich mit jeder Stunde weiter aus.

Bei Sonnenaufgang bedeckt der Nebel nur einige Regionen. In jeweils einer Stunde breitet sich der Nebel von jeder bisherigen Nebelregion in alle ihr benachbarten Regionen aus; nach rechts, links, oben oder unten. Dadurch werden auch Häuser vom Nebel bedeckt. Nur in die Bergregionen kann der Nebel sich nicht ausbreiten.

Ein Beispiel:

![Drei Raster aus 5×5 Regionen: bei Sonnenaufgang, nach 1 Stunde und nach 2 Stunden. Nebelregionen sind Wolken, Berge sind Dreiecke, Häuser sind kleine Häuser. Mit jeder Stunde breiten sich die Wolken in alle Nachbarregionen aus, nur nicht in Berge](./img/example.png)

![Raster aus 8 Spalten und 7 Zeilen. Wolken: Zeile 1 Spalte 1 und 8, Zeile 2 Spalte 1, Zeile 7 Spalte 1 und 2. Berge: Zeile 1 Spalte 3 und 4; Zeile 3 Spalte 4, 6 und 7; Zeile 4 Spalte 1, 4 und 7; Zeile 5 Spalte 5 und 7; Zeile 6 Spalte 1 und 5; Zeile 7 Spalte 6. Häuser: Zeile 2 Spalte 4, Zeile 4 Spalte 3 und 6, Zeile 5 Spalte 1, Zeile 6 Spalte 8](./img/map.png)

**Welches Haus im Land wird als letztes vom Nebel bedeckt?**
