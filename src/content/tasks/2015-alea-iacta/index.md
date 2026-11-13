---
short: KV9Y
title: Alea iacta
summary: Drei Würfe entscheiden, wohin die jungen Biber zum Spielen gehen. Welche Wurffolge führt zum Sportplatz?
grades:
  "7-8": hard
  "9-10": medium
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [programming]
methods: [conditional]
mascot: beaver
interaction:
  format: choice
  props:
    options:
      - { id: a, image: ./img/opt-0.png, alt: "Erster Wurf 6, zweiter Wurf 6, dritter Wurf 2" }
      - { id: b, image: ./img/opt-1.png, alt: "Erster Wurf 5, zweiter Wurf 3, dritter Wurf 1" }
      - { id: c, image: ./img/opt-2.png, alt: "Erster Wurf 3, zweiter Wurf 3, dritter Wurf 3" }
      - { id: d, image: ./img/opt-3.png, alt: "Erster Wurf 2, zweiter Wurf 4, dritter Wurf 1" }
source:
  type: original
  work: Informatik-Biber 2015
  year: 2015
  page: 7
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2015/Biberheft2015-mit-Loesungen.pdf
  country: DE
  license: CC BY-SA 3.0
---
Nach der Schule gehen die jungen Biber gerne zusammen spielen. Damit es keinen Streit gibt, wohin sie zum Spielen gehen, wird gewürfelt. Der Würfel hat die Seiten 1 bis 6.

![Die Würfelseiten 1 bis 6](./img/dice.png)

Die Entscheidung fällt nach dieser Regel:

![Die Regel: 1 WENN der erste Wurf größer ist als der zweite Wurf, 2 DANN spielen wir im Wald. 3 ANDERNFALLS WENN der dritte Wurf kleiner ist als der erste Wurf, 4 DANN spielen wir am Fluss. 5 ANDERNFALLS spielen wir auf dem Sportplatz.](./img/rule.png)

**Welche Wurffolge wird die jungen Biber zum Sportplatz schicken?**
