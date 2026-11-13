---
short: ko59
title: Domino
summary: Aus neun Dominosteinen soll ein Ring mit möglichst vielen Steinen entstehen. Welche Steine bleiben übrig?
grades:
  "9-10": medium
  "11-13": easy
gi:
  content: [information-data, algorithms]
  process: [modelling, reasoning]
topics: [graphs, modelling]
methods: [euler-path]
mascot: beaver
interaction:
  format: custom
  props:
    best: 7
    stones:
      - { id: a, image: ./img/s1.png, pips: [1, 3], alt: "Stein 1|3" }
      - { id: b, image: ./img/s2.png, pips: [1, 4], alt: "Stein 1|4" }
      - { id: c, image: ./img/s3.png, pips: [1, 5], alt: "Stein 1|5" }
      - { id: d, image: ./img/s4.png, pips: [2, 3], alt: "Stein 2|3" }
      - { id: e, image: ./img/s5.png, pips: [2, 5], alt: "Stein 2|5 (erster)" }
      - { id: f, image: ./img/s6.png, pips: [2, 5], alt: "Stein 2|5 (zweiter)" }
      - { id: g, image: ./img/s7.png, pips: [3, 4], alt: "Stein 3|4" }
      - { id: h, image: ./img/s8.png, pips: [3, 5], alt: "Stein 3|5" }
      - { id: i, image: ./img/s9.png, pips: [4, 5], alt: "Stein 4|5" }
source:
  type: original
  work: Informatik-Biber 2013
  year: 2013
  page: 8
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2013/Biberheft2013-mit-Loesungen.pdf
  license: CC BY-NC-SA 3.0
---
Hier siehst du einige Dominosteine und einen Kreis. Ein Dominostein hat zwei Hälften mit je einer Augenzahl. Mit den Dominosteinen kannst du einen Dominoring legen. Im Dominoring müssen alle Dominosteine dicht aneinander liegen. Das tun sie aber nur, wenn gleiche Augenzahlen aufeinander treffen.

**Lege einen Dominoring mit möglichst vielen Steinen.**

Schiebe Dominosteine auf den Kreis, um einen Dominoring zu legen. Klicke auf einen Dominostein, um ihn zu drehen. Du kannst unpassende Dominosteine wieder zurückschieben. Es gibt mehrere richtige Lösungen. Es ist gleich, welche davon du findest.
