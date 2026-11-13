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
  format: match
  props:
    left:
      - { id: d1, label: "Grüner Punkt links (Zeile 2, Spalte 2)" }
      - { id: d2, label: "Grüner Punkt rechts unten (Zeile 3, Spalte 5)" }
    right:
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
Der Zug soll zum Bahnhof fahren. Dazu müssen auf die grünen Punkte Schienenstücke gelegt werden.

![Das Gleisnetz: Der Zug steht links in der mittleren Zeile. Oben rechts ist der Bahnhof, in der mittleren Zeile rechts endet ein Gleis an einem Prellbock. Auf die beiden grünen Punkte müssen noch Schienenstücke](./img/board.png)

Zur Auswahl stehen diese sechs Schienenstücke (die Zeilen und Spalten des Gleisnetzes werden von oben links gezählt, die Kurven sind nach den Seiten benannt, die sie verbinden):

1. Kurve von unten nach rechts
2. Kurve von unten nach links
3. Kurve von oben nach rechts
4. Kurve von oben nach links
5. Gerade waagerecht
6. Gerade senkrecht

**Welches Schienenstück musst du auf welchen grünen Punkt legen, so dass der Zug zum Bahnhof fahren kann?**
