---
short: 9pwk
title: Güterzug
summary: Ein Güterzug soll mit möglichst wenigen Rangieroperationen in die richtige Wagenreihung gebracht werden.
grades:
  "9-10": hard
  "11-13": medium
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [optimization, data-structures]
methods: [stack]
mascot: beaver
interaction:
  format: input
  props:
    kind: number
    placeholder: Anzahl
source:
  type: original
  work: Informatik-Biber 2011
  year: 2011
  page: 14
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2011/Biberheft2011-mit-Loesungen.pdf
  license: CC BY-NC-SA 3.0 DE
---
Der Güterzug der Biberbahn wurde in der Wagenreihung D-E-B-C-A abgestellt:

![Lok mit den Waggons D, E, B, C, A vor einer Weiche mit Abstellgleisen](./img/start.png)

Die Lok kann vorwärts und rückwärts fahren und dabei beliebig viele Waggons ziehen und schieben. Jedes Mal, wenn ein Waggon angekoppelt oder ein Waggon abgekoppelt wird, zählt das als eine Rangieroperation.

**Wie viele Rangieroperationen sind mindestens nötig, um die Wagenreihung A-B-C-D-E herzustellen?**

![Gewünschte Wagenreihung: Lok, dann A, B, C, D, E](./img/ziel.png)
