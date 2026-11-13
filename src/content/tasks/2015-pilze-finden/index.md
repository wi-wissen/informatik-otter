---
short: ULh7
title: Pilze finden
summary: Drei Biber laufen nach Pfeilsymbolen durch den Wald. Bei welchen Pilzen kommen sie an?
grades:
  "3-4": medium
  "5-6": easy
gi:
  content: [algorithms]
  process: [representing, reasoning]
topics: [programming]
methods: [sequence]
mascot: beaver
interaction:
  format: place
  props:
    background: ./img/forest.png
    width: 543
    height: 550
    trayLabel: Biber
    zones:
      - { id: z00, label: "Zeile 1, Spalte 1", x: 7, y: 8, w: 106, h: 107 }
      - { id: z01, label: "Zeile 1, Spalte 2", x: 113, y: 8, w: 106, h: 107 }
      - { id: z02, label: "Zeile 1, Spalte 3", x: 219, y: 8, w: 106, h: 107 }
      - { id: z03, label: "Zeile 1, Spalte 4", x: 325, y: 8, w: 106, h: 107 }
      - { id: z04, label: "Zeile 1, Spalte 5", x: 431, y: 8, w: 106, h: 107 }
      - { id: z10, label: "Zeile 2, Spalte 1", x: 7, y: 115, w: 106, h: 107 }
      - { id: z11, label: "Zeile 2, Spalte 2", x: 113, y: 115, w: 106, h: 107 }
      - { id: z12, label: "Zeile 2, Spalte 3", x: 219, y: 115, w: 106, h: 107 }
      - { id: z13, label: "Zeile 2, Spalte 4", x: 325, y: 115, w: 106, h: 107 }
      - { id: z14, label: "Zeile 2, Spalte 5", x: 431, y: 115, w: 106, h: 107 }
      - { id: z20, label: "Zeile 3, Spalte 1", x: 7, y: 222, w: 106, h: 107 }
      - { id: z21, label: "Zeile 3, Spalte 2", x: 113, y: 222, w: 106, h: 107 }
      - { id: z22, label: "Zeile 3, Spalte 3", x: 219, y: 222, w: 106, h: 107 }
      - { id: z23, label: "Zeile 3, Spalte 4", x: 325, y: 222, w: 106, h: 107 }
      - { id: z24, label: "Zeile 3, Spalte 5", x: 431, y: 222, w: 106, h: 107 }
      - { id: z30, label: "Zeile 4, Spalte 1", x: 7, y: 329, w: 106, h: 107 }
      - { id: z31, label: "Zeile 4, Spalte 2", x: 113, y: 329, w: 106, h: 107 }
      - { id: z32, label: "Zeile 4, Spalte 3", x: 219, y: 329, w: 106, h: 107 }
      - { id: z33, label: "Zeile 4, Spalte 4", x: 325, y: 329, w: 106, h: 107 }
      - { id: z34, label: "Zeile 4, Spalte 5", x: 431, y: 329, w: 106, h: 107 }
      - { id: z40, label: "Zeile 5, Spalte 1", x: 7, y: 436, w: 106, h: 107 }
      - { id: z41, label: "Zeile 5, Spalte 2", x: 113, y: 436, w: 106, h: 107 }
      - { id: z42, label: "Zeile 5, Spalte 3", x: 219, y: 436, w: 106, h: 107 }
      - { id: z43, label: "Zeile 5, Spalte 4", x: 325, y: 436, w: 106, h: 107 }
      - { id: z44, label: "Zeile 5, Spalte 5", x: 431, y: 436, w: 106, h: 107 }
    items:
      - { id: b1, image: ./img/item1.png, alt: "Biber 1 (oranger Biber, steht im Wald oben)" }
      - { id: b2, image: ./img/item2.png, alt: "Biber 2 (sitzender brauner Biber)" }
      - { id: b3, image: ./img/item3.png, alt: "Biber 3 (winkender Biber)" }
source:
  type: original
  work: Informatik-Biber 2015
  year: 2015
  page: 41
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2015/Biberheft2015-mit-Loesungen.pdf
  country: UA
  license: CC BY-SA 3.0
---
Drei Biber stehen im Wald. Jeder will zu einer Stelle kommen, wo es Pilze gibt.

Dieses Bild zeigt für jeden Biber mit drei Pfeilen, wie er gehen wird. Jeder Pfeil bedeutet einen Schritt auf das nächste Feld in diese Richtung.

![Pfeile der drei Biber. Biber 1 (oben): nach rechts unten, nach rechts oben, nach rechts unten. Biber 2 (sitzend): nach links unten, nach links oben, nach unten. Biber 3 (winkend): nach links oben, nach unten, nach links unten.](./img/arrows.png)

**Wo kommen die Biber an?** Ziehe jeden Biber zu der richtigen Stelle im Wald. Biber 1 steht in Zeile 1, Spalte 2, Biber 2 in Zeile 4, Spalte 5 und Biber 3 in Zeile 3, Spalte 3. Pilze gibt es in Zeile 2 Spalte 1, Zeile 2 Spalte 5, Zeile 3 Spalte 4, Zeile 4 Spalte 1 und Zeile 5 Spalte 3.
