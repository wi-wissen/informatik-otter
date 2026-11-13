---
short: v7Ys
title: Biber-Bausteine
summary: Neun Bausteine mit Noppen und Nuten sollen in Dreier-Gruppen sortiert werden, nach Ottos Regel.
grades:
  "7-8": medium
  "9-10": easy
gi:
  content: [information-data]
  process: [modelling]
topics: [databases, modelling]
methods: []
mascot: beaver
interaction:
  format: place
  props:
    trayLabel: Biber-Bausteine
    zones:
      - { id: ga, label: "Gruppe A", capacity: 3 }
      - { id: gb, label: "Gruppe B", capacity: 3 }
      - { id: gc, label: "Gruppe C", capacity: 3 }
    items:
      - { id: s3, image: ./img/s3.png, alt: "breit, klein, 2 Noppen, 2 Nuten" }
      - { id: s7, image: ./img/s7.png, alt: "schmal, groß, 1 Noppe, keine Nuten" }
      - { id: s8, image: ./img/s8.png, alt: "breit, groß, keine Noppen, keine Nuten" }
      - { id: s9, image: ./img/s9.png, alt: "mittel breit, mittel hoch, 2 Noppen, keine Nuten" }
      - { id: s10, image: ./img/s10.png, alt: "mittel breit, mittel hoch, keine Noppen, 1 Nut" }
      - { id: s11, image: ./img/s11.png, alt: "mittel breit, klein, 2 Noppen, keine Nuten" }
      - { id: s12, image: ./img/s12.png, alt: "mittel breit, klein, keine Noppen, 2 Nuten" }
      - { id: s13, image: ./img/s13.png, alt: "schmal, klein, 2 Noppen, 1 Nut" }
      - { id: s14, image: ./img/s14.png, alt: "breit, klein, keine Noppen, keine Nuten" }
source:
  type: original
  work: Informatik-Biber 2023
  year: 2023
  page: 13
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2023/Biberheft_2023_web_komplett.pdf
  country: AU
  license: CC BY-SA 4.0
---
Die Biber-Bausteine unterscheiden sich in vier Eigenschaften:

1. Breite: schmal, mittel, breit
2. Höhe: klein, mittel, groß
3. Anzahl der Noppen oben: null, eins, zwei
4. Anzahl der Nuten unten: null, eins, zwei

Otto teilt die Bausteine in Dreier-Gruppen ein. Er macht das so, dass für jede Gruppe gilt: Die drei Steine haben für jede der vier Eigenschaften ...

- ... entweder alle den gleichen Wert ...
- ... oder drei unterschiedliche Werte.

Hier ist eine von Ottos Gruppen:

![Eine Gruppe aus drei Bausteinen: gleiche Breite, unterschiedliche Höhen, Noppen und Nuten](./img/example.png)

Denn diese drei Steine haben alle

- die gleiche Breite,
- unterschiedliche Höhen,
- unterschiedlich viele Noppen und
- unterschiedlich viele Nuten.

**Teile diese Bausteine in Dreier-Gruppen ein, so wie Otto es machen würde.**

Ziehe dazu jeden Baustein in eine der Gruppen A, B oder C. In jeder Gruppe sind genau drei Steine.
