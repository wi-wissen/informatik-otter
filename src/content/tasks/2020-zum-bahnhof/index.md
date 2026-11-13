---
short: nz6c
title: Zum Bahnhof
summary: Der Zug soll zum Bahnhof fahren, aber zwei Schienenstücke fehlen noch. Welche passen?
grades:
  "3-4": easy
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [programming]
methods: [sequence]
mascot: beaver
interaction:
  format: custom
  props:
    background: ./img/board.png
    width: 965
    height: 488
    trayLabel: Schienenstücke
    zones:
      - { id: z1, label: Grüner Punkt links, x: 166, y: 166, w: 156, h: 156 }
      - { id: z2, label: Grüner Punkt rechts unten, x: 643, y: 325, w: 156, h: 154 }
    items:
      - { id: p0, image: ./img/piece0.png, alt: "Kurve von unten nach rechts" }
      - { id: p1, image: ./img/piece1.png, alt: "Kurve von unten nach links" }
      - { id: p2, image: ./img/piece2.png, alt: "Kurve von oben nach rechts" }
      - { id: p3, image: ./img/piece3.png, alt: "Kurve von oben nach links" }
      - { id: p4, image: ./img/piece4.png, alt: "Gerade waagerecht" }
      - { id: p5, image: ./img/piece5.png, alt: "Gerade senkrecht" }
source:
  type: original
  work: Informatik-Biber 2020
  year: 2020
  page: 64
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2020/Biberheft_2020_final_mit_Loesungen.pdf
  country: PT
  license: CC BY-SA 4.0
---
**Ziehe Schienen auf die grünen Punkte, so dass der Zug zum Bahnhof fahren kann.**

Der Zug steht links in der mittleren Zeile, oben rechts ist der Bahnhof, in der mittleren Zeile rechts endet ein Gleis an einem Prellbock.
