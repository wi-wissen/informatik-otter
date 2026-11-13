---
short: r25E
title: Ameisen im Fluss
summary: Zehn Ameisen wollen über Strohhalme zum Futter. Wie viele schaffen es in drei Minuten?
grades:
  "7-8": hard
  "9-10": medium
  "11-13": easy
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [graphs, optimization]
methods: [max-flow]
mascot: beaver
interaction:
  format: input
  props:
    kind: number
source:
  type: original
  work: Informatik-Biber 2019
  year: 2019
  page: 7
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2019/Biberheft2019-mit-Loesungen.pdf
  country: LT
  license: CC BY-SA 4.0
---
Zehn Ameisen sind auf Stein A. Sie wollen zum Stein F, dort gibt es Futter. Die Ameisen können über die Strohhalme zu den anderen Steinen laufen. Aber jeder Strohhalm kann höchstens eine Ameise gleichzeitig tragen. Eine Ameise braucht eine Minute, um von einem Stein über einen Strohhalm zum nächsten Stein zu laufen.

![Sechs Steine A bis F im Wasser, durch Strohhalme verbunden. Auf A sitzen zehn Ameisen, auf F liegt das Futter. A–B: 3 Strohhalme, A–C: 3, A–D: 2, B–C: 1, B–F: 1, C–F: 2, D–E: 1, E–F: 1.](./img/rivers.png)

**Wie viele Ameisen können nach drei Minuten höchstens beim Futter auf Stein F sein?**
