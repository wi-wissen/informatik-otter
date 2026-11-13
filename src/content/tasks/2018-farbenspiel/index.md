---
short: MnZ5
title: Farbenspiel
summary: Ein Knopfdruck schiebt vier farbige Quadrate eine Ecke weiter. Wo landen die Farben beim zweiten Druck?
grades:
  "3-4": easy
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [programming]
methods: [sequence]
mascot: beaver
interaction:
  format: place
  props:
    background: ./img/field.png
    width: 526
    height: 263
    zones:
      - { id: tl, label: "oben links", x: 136, y: 5, w: 123, h: 123 }
      - { id: tr, label: "oben rechts", x: 267, y: 5, w: 123, h: 123 }
      - { id: bl, label: "unten links", x: 136, y: 136, w: 123, h: 123 }
      - { id: br, label: "unten rechts", x: 267, y: 136, w: 123, h: 123 }
    items:
      - { id: red, image: ./img/c-red.png, alt: Rot }
      - { id: green, image: ./img/c-green.png, alt: Grün }
      - { id: blue, image: ./img/c-blue.png, alt: Blau }
      - { id: yellow, image: ./img/c-yellow.png, alt: Gelb }
source:
  type: original
  work: Informatik-Biber 2018
  year: 2018
  page: 29
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2018/Biberheft2018-mit-Loesungen.pdf
  country: CA
  license: CC BY-SA 4.0
---
Simon hat ein Spiel mit vier Farben.

Wenn Simon den Knopf drückt, bewegen sich die Quadrate um eins weiter, wie die Pfeile zeigen.

![Vier Quadrate: Rot oben links, Grün oben rechts, Gelb unten rechts, Blau unten links; Pfeile zeigen im Uhrzeigersinn](./img/rule.png)

Simon hat den Knopf einmal gedrückt. Jetzt liegen die Farben so:

![Blau oben links, Rot oben rechts, Gelb unten links, Grün unten rechts](./img/after-one.png)

Simon drückt den Knopf noch einmal.

**Wo liegen danach die Farben?**

Ziehe die Farben auf den richtigen Platz.
