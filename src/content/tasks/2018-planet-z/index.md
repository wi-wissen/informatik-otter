---
short: vjZ9
title: Planet Z
summary: Auf Planet Z entstehen Städte durch drei Ersetzungsregeln. Eine der vier Städte kann dort nicht stehen. Welche?
grades:
  "5-6": medium
  "7-8": easy
gi:
  content: [languages-automata]
  process: [modelling, reasoning]
topics: [formal-languages]
methods: [context-free-grammar]
mascot: beaver
interaction:
  format: choice
  props:
    columns: 4
    options:
      - { id: a, image: ./img/city-a.png, alt: "Stadt A: Haus, Baum, drei übereinander gestapelte Blöcke" }
      - { id: b, image: ./img/city-b.png, alt: "Stadt B: Baum, drei gestapelte Blöcke, Baum" }
      - { id: c, image: ./img/city-c.png, alt: "Stadt C: vier Häuser" }
      - { id: d, image: ./img/city-d.png, alt: "Stadt D: Baum, drei gestapelte Blöcke, Baum, drei gestapelte Blöcke" }
source:
  type: original
  work: Informatik-Biber 2018
  year: 2018
  page: 51
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2018/Biberheft2018-mit-Loesungen.pdf
  country: DE
  license: CC BY-SA 4.0
---
Die Leute auf Planet Z bauen ihre Städte immer auf die gleiche Weise. Sie beginnen mit einem Haus (ein rotes Haus). Dann ersetzen sie einzelne Objekte nach diesen drei Regeln:

![Regel 1: ein Haus wird zu zwei Häusern. Regel 2: ein Haus wird zu einem Baum und einem Block daneben. Regel 3: ein Block wird zu zwei übereinander gestapelten Blöcken.](./img/rules.png)

Ein Beispiel: Wenn man zuerst Regel 1, dann Regel 2 und dann zwei Mal Regel 3 anwendet, baut man eine Stadt wie ganz rechts im Bild:

![Aus einem Haus wird mit Regel 1 ein Paar Häuser, mit Regel 2 Haus, Baum und Block, mit Regel 3 Haus, Baum und zwei Blöcke, mit Regel 3 Haus, Baum und drei Blöcke](./img/example.png)

Beachte, dass die Reihenfolge der Objekte nicht verändert wird.

**Welche Stadt steht NICHT auf Planet Z?**
