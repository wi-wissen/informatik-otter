---
short: 2gCn
title: Gleiche Buchstaben
summary: Drei Buchstaben einer Reihe dürfen ersetzt werden. Wie bekommt man die meisten Punkte für Gruppen gleicher Buchstaben?
grades:
  "9-10": medium
  "11-13": easy
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [optimization, searching]
methods: [brute-force]
mascot: beaver
interaction:
  format: place
  props:
    background: ./img/row.png
    width: 998
    height: 133
    trayLabel: Ersatzbuchstaben
    zones:
      - { id: p1, label: "Buchstabe 1", x: 4, y: 4, w: 78, h: 125 }
      - { id: p2, label: "Buchstabe 2", x: 86, y: 4, w: 78, h: 125 }
      - { id: p3, label: "Buchstabe 3", x: 169, y: 4, w: 78, h: 125 }
      - { id: p4, label: "Buchstabe 4", x: 251, y: 4, w: 78, h: 125 }
      - { id: p5, label: "Buchstabe 5", x: 333, y: 4, w: 78, h: 125 }
      - { id: p6, label: "Buchstabe 6", x: 416, y: 4, w: 78, h: 125 }
      - { id: p7, label: "Buchstabe 7", x: 498, y: 4, w: 78, h: 125 }
      - { id: p8, label: "Buchstabe 8", x: 580, y: 4, w: 78, h: 125 }
      - { id: p9, label: "Buchstabe 9", x: 662, y: 4, w: 78, h: 125 }
      - { id: p10, label: "Buchstabe 10", x: 745, y: 4, w: 78, h: 125 }
      - { id: p11, label: "Buchstabe 11", x: 827, y: 4, w: 78, h: 125 }
      - { id: p12, label: "Buchstabe 12", x: 909, y: 4, w: 78, h: 125 }
    items:
      - { id: b1, image: ./img/tile-b1.png, alt: Ersatzbuchstabe B }
      - { id: b2, image: ./img/tile-b2.png, alt: Ersatzbuchstabe B }
      - { id: c, image: ./img/tile-c.png, alt: Ersatzbuchstabe C }
source:
  type: original
  work: Informatik-Biber 2024
  year: 2024
  page: 31
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2024/Biberheft_2024_web_komplett.pdf
  country: SK
  license: CC BY-SA 4.0
---
Lege Buchstaben in eine Reihe und bekomme Punkte: Wenn 2 gleiche Buchstaben direkt nebeneinander liegen, bekommst du 2 Punkte, bei 3 gleichen Buchstaben 3, und so weiter.

Ein Beispiel: Die Reihe **B C A C B** bringt 0 Punkte, denn es liegen nirgendwo gleiche Buchstaben direkt nebeneinander.

Nun ersetzt du das erste C durch ein A und das zweite C durch ein B. Das Ergebnis ist **B A A B B**. Dafür bekommst du 4 Punkte: 2 für die beiden A’s und 2 für die beiden B’s hintereinander.

Jetzt hast du eine neue Reihe gelegt, mit 12 Buchstaben. Du kannst darin drei beliebige Buchstaben ersetzen, und zwar durch die Buchstaben B, B und C.

Die Reihe lautet **A B B C A B C A B A A A**.

**Ersetze so, dass du für das Ergebnis so viele Punkte bekommst wie möglich.**

Ziehe dazu die Ersatzbuchstaben auf die Buchstaben, die du ersetzen willst.
