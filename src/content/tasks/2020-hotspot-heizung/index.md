---
short: dq1k
title: Hotspot-Heizung
summary: Luis lässt vier Heizungs-Hotspots in den Boden seines Bades einbauen. Wo sollen sie sitzen, damit es schnell warm wird?
grades:
  "7-8": hard
  "9-10": medium
  "11-13": easy
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [graphs, optimization]
methods: [dominating-set]
mascot: beaver
interaction:
  format: custom
  props:
    background: ./img/bath.png
    width: 1179
    height: 397
    minutes: 2
    trayLabel: Hotspots
    tiles: ["r0c0", "r0c1", "r0c2", "r0c3", "r0c4", "r0c5", "r0c6", "r0c7", "r0c8", "r1c5", "r1c6", "r1c7", "r1c8", "r1c9", "r1c10", "r1c11", "r1c12", "r1c13", "r1c14", "r2c5", "r2c6", "r2c7", "r2c8", "r2c9", "r2c10", "r2c11", "r2c12", "r2c13", "r2c14", "r3c5", "r3c6", "r3c7", "r3c8", "r3c9", "r3c10", "r3c11", "r3c12", "r3c13", "r3c14", "r4c0", "r4c1", "r4c2", "r4c3", "r4c4", "r4c5", "r4c6", "r4c7", "r4c8"]
    zones:
      - { id: r0c0, label: "Fliese Zeile 1, Spalte 1", x: 8, y: 8, w: 72, h: 72 }
      - { id: r0c1, label: "Fliese Zeile 1, Spalte 2", x: 86, y: 8, w: 72, h: 72 }
      - { id: r0c2, label: "Fliese Zeile 1, Spalte 3", x: 164, y: 8, w: 72, h: 72 }
      - { id: r0c3, label: "Fliese Zeile 1, Spalte 4", x: 241, y: 8, w: 72, h: 72 }
      - { id: r0c4, label: "Fliese Zeile 1, Spalte 5", x: 319, y: 8, w: 72, h: 72 }
      - { id: r0c5, label: "Fliese Zeile 1, Spalte 6", x: 397, y: 8, w: 72, h: 72 }
      - { id: r0c6, label: "Fliese Zeile 1, Spalte 7", x: 475, y: 8, w: 72, h: 72 }
      - { id: r0c7, label: "Fliese Zeile 1, Spalte 8", x: 553, y: 8, w: 72, h: 72 }
      - { id: r0c8, label: "Fliese Zeile 1, Spalte 9", x: 630, y: 8, w: 72, h: 72 }
      - { id: r1c5, label: "Fliese Zeile 2, Spalte 6", x: 397, y: 86, w: 72, h: 72 }
      - { id: r1c6, label: "Fliese Zeile 2, Spalte 7", x: 475, y: 86, w: 72, h: 72 }
      - { id: r1c7, label: "Fliese Zeile 2, Spalte 8", x: 553, y: 86, w: 72, h: 72 }
      - { id: r1c8, label: "Fliese Zeile 2, Spalte 9", x: 630, y: 86, w: 72, h: 72 }
      - { id: r1c9, label: "Fliese Zeile 2, Spalte 10", x: 708, y: 86, w: 72, h: 72 }
      - { id: r1c10, label: "Fliese Zeile 2, Spalte 11", x: 786, y: 86, w: 72, h: 72 }
      - { id: r1c11, label: "Fliese Zeile 2, Spalte 12", x: 864, y: 86, w: 72, h: 72 }
      - { id: r1c12, label: "Fliese Zeile 2, Spalte 13", x: 942, y: 86, w: 72, h: 72 }
      - { id: r1c13, label: "Fliese Zeile 2, Spalte 14", x: 1019, y: 86, w: 72, h: 72 }
      - { id: r1c14, label: "Fliese Zeile 2, Spalte 15", x: 1097, y: 86, w: 72, h: 72 }
      - { id: r2c5, label: "Fliese Zeile 3, Spalte 6", x: 397, y: 164, w: 72, h: 72 }
      - { id: r2c6, label: "Fliese Zeile 3, Spalte 7", x: 475, y: 164, w: 72, h: 72 }
      - { id: r2c7, label: "Fliese Zeile 3, Spalte 8", x: 553, y: 164, w: 72, h: 72 }
      - { id: r2c8, label: "Fliese Zeile 3, Spalte 9", x: 630, y: 164, w: 72, h: 72 }
      - { id: r2c9, label: "Fliese Zeile 3, Spalte 10", x: 708, y: 164, w: 72, h: 72 }
      - { id: r2c10, label: "Fliese Zeile 3, Spalte 11", x: 786, y: 164, w: 72, h: 72 }
      - { id: r2c11, label: "Fliese Zeile 3, Spalte 12", x: 864, y: 164, w: 72, h: 72 }
      - { id: r2c12, label: "Fliese Zeile 3, Spalte 13", x: 942, y: 164, w: 72, h: 72 }
      - { id: r2c13, label: "Fliese Zeile 3, Spalte 14", x: 1019, y: 164, w: 72, h: 72 }
      - { id: r2c14, label: "Fliese Zeile 3, Spalte 15", x: 1097, y: 164, w: 72, h: 72 }
      - { id: r3c5, label: "Fliese Zeile 4, Spalte 6", x: 397, y: 241, w: 72, h: 72 }
      - { id: r3c6, label: "Fliese Zeile 4, Spalte 7", x: 475, y: 241, w: 72, h: 72 }
      - { id: r3c7, label: "Fliese Zeile 4, Spalte 8", x: 553, y: 241, w: 72, h: 72 }
      - { id: r3c8, label: "Fliese Zeile 4, Spalte 9", x: 630, y: 241, w: 72, h: 72 }
      - { id: r3c9, label: "Fliese Zeile 4, Spalte 10", x: 708, y: 241, w: 72, h: 72 }
      - { id: r3c10, label: "Fliese Zeile 4, Spalte 11", x: 786, y: 241, w: 72, h: 72 }
      - { id: r3c11, label: "Fliese Zeile 4, Spalte 12", x: 864, y: 241, w: 72, h: 72 }
      - { id: r3c12, label: "Fliese Zeile 4, Spalte 13", x: 942, y: 241, w: 72, h: 72 }
      - { id: r3c13, label: "Fliese Zeile 4, Spalte 14", x: 1019, y: 241, w: 72, h: 72 }
      - { id: r3c14, label: "Fliese Zeile 4, Spalte 15", x: 1097, y: 241, w: 72, h: 72 }
      - { id: r4c0, label: "Fliese Zeile 5, Spalte 1", x: 8, y: 319, w: 72, h: 72 }
      - { id: r4c1, label: "Fliese Zeile 5, Spalte 2", x: 86, y: 319, w: 72, h: 72 }
      - { id: r4c2, label: "Fliese Zeile 5, Spalte 3", x: 164, y: 319, w: 72, h: 72 }
      - { id: r4c3, label: "Fliese Zeile 5, Spalte 4", x: 241, y: 319, w: 72, h: 72 }
      - { id: r4c4, label: "Fliese Zeile 5, Spalte 5", x: 319, y: 319, w: 72, h: 72 }
      - { id: r4c5, label: "Fliese Zeile 5, Spalte 6", x: 397, y: 319, w: 72, h: 72 }
      - { id: r4c6, label: "Fliese Zeile 5, Spalte 7", x: 475, y: 319, w: 72, h: 72 }
      - { id: r4c7, label: "Fliese Zeile 5, Spalte 8", x: 553, y: 319, w: 72, h: 72 }
      - { id: r4c8, label: "Fliese Zeile 5, Spalte 9", x: 630, y: 319, w: 72, h: 72 }
    items:
      - { id: h1, image: ./img/hotspot.png, alt: Hotspot }
      - { id: h2, image: ./img/hotspot.png, alt: Hotspot }
      - { id: h3, image: ./img/hotspot.png, alt: Hotspot }
      - { id: h4, image: ./img/hotspot.png, alt: Hotspot }
source:
  type: original
  work: Informatik-Biber 2020
  year: 2020
  page: 30
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2020/Biberheft_2020_final_mit_Loesungen.pdf
  country: PK
  license: CC BY-SA 4.0
---
Luis mag es warm im Bad. In sein neues Haus lässt er eine Bodenheizung mit Hotspots einbauen.

Ein Hotspot wird direkt unter einer Fliese montiert. Schaltet man den Hotspot ein, wird diese Fliese sofort warm. Von einer warmen Fliese breitet sich die Wärme in einer Minute auf alle benachbarten Fliesen aus – seitlich und über Eck.

Hier ist ein Beispiel. Die Zahlen sagen für jede Fliese, nach wie vielen Minuten sie warm ist.

![Beispiel: Ein Hotspot unten rechts. Die Fliesen daneben zeigen 1, die übernächsten 2, die weiter entfernten 3 Minuten](./img/example.png)

Luis kann sich 4 Hotspots leisten. Luis wünscht, dass nach möglichst wenigen Minuten alle Fliesen im Bad warm sind. Die Hotspots werden gleichzeitig angeschaltet.

**Hier ist das neue Bad. Montiere die 4 Hotspots so, dass Luis' Wunsch erfüllt wird.** Ziehe die Hotspots auf die Fliesen.
