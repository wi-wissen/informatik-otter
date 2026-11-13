---
short: yY5e
title: Gläser
summary: Fünf Gläser, eines steht auf dem Kopf. Pro Zug müssen genau drei umgedreht werden. Wie viele Züge braucht man mindestens?
grades:
  "9-10": medium
gi:
  content: [algorithms]
  process: [reasoning, modelling]
topics: [algorithm-analysis, optimization]
methods: [brute-force]
mascot: beaver
interaction:
  format: choice
  props:
    options:
      - { id: a, label: 2 Spielzüge }
      - { id: b, label: 3 Spielzüge }
      - { id: c, label: 5 Spielzüge }
      - { id: d, label: So kann man nicht erreichen, dass alle Gläser richtig herum stehen. }
source:
  type: original
  work: Informatik-Biber 2012
  year: 2012
  page: 21
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2012/Biberheft2012-mit-Loesungen.pdf
  license: CC BY-NC-SA 3.0
---
Auf dem Tisch stehen fünf leere Gläser. Eines steht falsch herum (auf dem Kopf). Die anderen vier Gläser stehen richtig herum.

![Fünf Gläser in einer Reihe: die ersten vier stehen richtig herum, das fünfte steht auf dem Kopf](./img/glasses.png)

In einem Spiel sollst du erreichen, dass alle Gläser richtig herum stehen. Du musst aber mit jedem Spielzug immer genau drei dieser Gläser umdrehen.

**Wie viele Spielzüge brauchst du mindestens, bis alle Gläser richtig herum stehen?**
