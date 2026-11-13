---
short: 6rLQ
title: Ziffernsegmente
summary: Ein Segment der Aufzugsanzeige ist ausgefallen, trotzdem erkennt man alle Ziffern. Welche Segmente müssen immer leuchten können?
grades:
  "11-13": hard
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [algorithm-analysis, encoding]
methods: [brute-force]
mascot: beaver
interaction:
  format: graph-pick
  props:
    pick: edges
    width: 112
    height: 198
    background: ./img/display.png
    hideNodes: true
    nodes:
      - { id: TL, x: 13, y: 13 }
      - { id: TR, x: 99, y: 13 }
      - { id: ML, x: 13, y: 99 }
      - { id: MR, x: 99, y: 99 }
      - { id: BL, x: 13, y: 186 }
      - { id: BR, x: 99, y: 186 }
    edges:
      - { id: top, from: TL, to: TR }
      - { id: ul, from: TL, to: ML }
      - { id: ur, from: TR, to: MR }
      - { id: mid, from: ML, to: MR }
      - { id: ll, from: ML, to: BL }
      - { id: lr, from: MR, to: BR }
      - { id: bottom, from: BL, to: BR }
source:
  type: original
  work: Informatik-Biber 2017
  year: 2017
  page: 62
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2017/Biberheft2017-mit-Loesungen.pdf
  country: RU
  license: CC BY-SA 4.0
---
In einem Haus mit 10 Stockwerken zeigt der Aufzug das aktuelle Stockwerk mit einer 7-Segment-Anzeige an. Die Ziffern 0 (für Erdgeschoss) bis 9 sehen dabei so aus:

![Die Ziffern 0 bis 9 als 7-Segment-Anzeige. Leuchtende Segmente sind grün, dunkle Segmente grau.](./img/digits.png)

Um eine Ziffer anzuzeigen, leuchten also mindestens 2 und höchstens 7 Segmente. Vor Kurzem war ein Segment kaputt und blieb dunkel. Trotzdem konnte man alle Ziffern erkennen und voneinander unterscheiden. Die meisten Segmente müssen aber immer funktionieren, damit man die Ziffern voneinander unterscheiden kann.

**Markiere alle Segmente, die immer funktionieren müssen!** Klicke dazu auf die Segmente der Anzeige.
