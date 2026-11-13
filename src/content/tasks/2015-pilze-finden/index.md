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
  format: match
  props:
    left:
      - { id: b1, image: ./img/beaver1.png, alt: "Biber 1 (oben im Bild) mit den Pfeilen: nach rechts unten, nach rechts oben, nach rechts unten" }
      - { id: b2, image: ./img/beaver2.png, alt: "Biber 2 (sitzender Biber) mit den Pfeilen: nach links unten, nach links oben, nach unten" }
      - { id: b3, image: ./img/beaver3.png, alt: "Biber 3 (winkender Biber) mit den Pfeilen: nach links oben, nach unten, nach links unten" }
    right:
      - { id: m1, label: "Zeile 2, Spalte 1", image: ./img/m1.png, alt: Ein einzelner Pilz }
      - { id: m2, label: "Zeile 2, Spalte 5", image: ./img/m2.png, alt: Eine Gruppe von Pilzen }
      - { id: m3, label: "Zeile 3, Spalte 4", image: ./img/m3.png, alt: Zwei Pilze }
      - { id: m4, label: "Zeile 4, Spalte 1", image: ./img/m4.png, alt: Eine Gruppe von Pilzen }
      - { id: m5, label: "Zeile 5, Spalte 3", image: ./img/m5.png, alt: Eine Gruppe von Pilzen }
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

Die Pfeile neben jedem Biber zeigen, wie er geht: Jeder Pfeil bedeutet einen Schritt auf das nächste Feld in diese Richtung.

![Der Wald als Raster aus 5 mal 5 Feldern mit Tannen, Pilzen und den drei Bibern: Biber 1 steht in Zeile 1, Spalte 2, Biber 2 in Zeile 4, Spalte 5 und Biber 3 in Zeile 3, Spalte 3. Pilze gibt es in Zeile 2 Spalte 1, Zeile 2 Spalte 5, Zeile 3 Spalte 4, Zeile 4 Spalte 1 und Zeile 5 Spalte 3.](./img/forest.png)

**Wo kommen die Biber an?** Ordne jedem Biber die Stelle zu, bei der er ankommt.
