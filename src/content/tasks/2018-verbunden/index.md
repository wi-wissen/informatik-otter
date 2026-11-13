---
short: Y45A
title: Verbunden
summary: Spielsteine in einer Reihe oder Spalte gelten als verbunden. Welcher Graph beschreibt die Stellung mit sechs Steinen?
grades:
  "9-10": hard
  "11-13": hard
gi:
  content: [information-data, algorithms]
  process: [modelling, representing]
topics: [graphs, modelling]
methods: []
mascot: beaver
interaction:
  format: choice
  props:
    columns: 4
    options:
      - { id: a, image: ./img/graph-a.png, alt: "Graph A: sechs Kreise, ein äußeres und ein inneres Dreieck, Ecken paarweise verbunden" }
      - { id: b, image: ./img/graph-b.png, alt: "Graph B: sechs Kreise in zwei Reihen zu je drei, wie eine Leiter" }
      - { id: c, image: ./img/graph-c.png, alt: "Graph C: sieben Kreise, sechs außen und einer in der Mitte" }
      - { id: d, image: ./img/graph-d.png, alt: "Graph D: sechs Kreise in unregelmäßiger Anordnung" }
source:
  type: original
  work: Informatik-Biber 2018
  year: 2018
  page: 59
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2018/Biberheft2018-mit-Loesungen.pdf
  country: BE
  license: CC BY-SA 4.0
---
Auf einem Spielbrett liegen vier Spielsteine. Zwei Spielsteine, die auf der selben Zeile oder auf der selben Spalte des Spielbretts liegen, gelten als *verbunden*. Das Bild neben dem Spielbrett beschreibt die Spielsituation. Die Linien zeigen, wie die Steine verbunden sind.

![Links ein Spielbrett mit vier Steinen A, B, C und D. Rechts ein Graph: A verbunden mit D und B, D verbunden mit B, B verbunden mit C.](./img/example.png)

Jetzt liegen sechs Spielsteine auf dem Spielbrett.

![Ein Spielbrett mit sechs Steinen: drei in der zweiten Zeile von oben, drei in der fünften, jeweils in der zweiten, fünften und sechsten Spalte](./img/board.png)

**Welches Bild beschreibt die neue Spielsituation?**
