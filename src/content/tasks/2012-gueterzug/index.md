---
short: 7vBx
title: Güterzug
summary: Ein Güterzug soll mit möglichst wenigen Rangieroperationen umsortiert werden. Wie viele sind mindestens nötig?
grades:
  "11-13": hard
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [optimization, sorting]
methods: [stack]
mascot: beaver
interaction:
  format: input
  props:
    kind: number
    suffix: Rangieroperationen
source:
  type: original
  work: Informatik-Biber 2012
  year: 2012
  page: 23
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2012/Biberheft2012-mit-Loesungen.pdf
  license: CC BY-NC-SA 3.0
---
Der Güterzug der Biberbahn wurde in der Wagenreihung D-E-B-C-A abgestellt:

![Lok und Waggons in der Reihenfolge D, E, B, C, A vor einer Gleisgabelung mit zwei Abstellgleisen](./img/start.png)

Die Lok kann vorwärts und rückwärts fahren und dabei beliebig viele Waggons ziehen und schieben. Jedes Mal, wenn ein Waggon angekoppelt oder ein Waggon abgekoppelt wird, zählt das als eine Rangieroperation.

**Wie viele Rangieroperationen sind mindestens nötig, um die Wagenreihung A-B-C-D-E herzustellen?**

![Lok und Waggons in der gewünschten Reihenfolge A, B, C, D, E](./img/goal.png)
