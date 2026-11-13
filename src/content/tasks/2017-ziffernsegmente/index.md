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
  format: hotspots
  props:
    background: ./img/display.png
    width: 281
    height: 496
    states:
      - { id: off, label: "–" }
      - { id: on, label: "✓" }
    spots:
      - { id: top, label: oberes Segment, x: 140, y: 32, w: 150, h: 44 }
      - { id: ul, label: oberes linkes Segment, x: 32, y: 140, w: 44, h: 140 }
      - { id: ur, label: oberes rechtes Segment, x: 248, y: 140, w: 44, h: 140 }
      - { id: mid, label: mittleres Segment, x: 140, y: 248, w: 150, h: 44 }
      - { id: ll, label: unteres linkes Segment, x: 32, y: 356, w: 44, h: 140 }
      - { id: lr, label: unteres rechtes Segment, x: 248, y: 356, w: 44, h: 140 }
      - { id: bottom, label: unteres Segment, x: 140, y: 464, w: 150, h: 44 }
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

**Markiere alle Segmente, die immer funktionieren müssen!**
