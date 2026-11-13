---
short: 5PXo
title: Julias Turm
summary: Julia baut Türme aus vier Sorten Bauklötzen und hält sich an Pfeilregeln. Welcher Turm ist nach den Regeln gebaut?
grades:
  "3-4": hard
gi:
  content: [information-data]
  process: [modelling, reasoning]
topics: [modelling, automata]
methods: [finite-automaton]
mascot: beaver
interaction:
  format: choice
  props:
    columns: 4
    options:
      - { id: a, label: A, image: ./img/a.png, alt: "Turm A: unten zwei blaue Quader, darauf ein türkiser Würfel, oben eine rote Pyramide" }
      - { id: b, label: B, image: ./img/b.png, alt: "Turm B: unten zwei grüne Zylinder, oben eine rote Pyramide" }
      - { id: c, label: C, image: ./img/c.png, alt: "Turm C: unten zwei blaue Quader, darauf ein grüner Zylinder, oben eine rote Pyramide" }
      - { id: d, label: D, image: ./img/d.png, alt: "Turm D: unten ein blauer Quader, darauf ein grüner Zylinder, dann ein türkiser Würfel, oben eine rote Pyramide" }
source:
  type: original
  work: Informatik-Biber 2019
  year: 2019
  page: 19
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2019/Biberheft2019-mit-Loesungen.pdf
  country: SK
  license: CC BY-SA 4.0
---
In ihrem neuen Baukasten findet Julia vier Sorten Bauklötze. Sie erfindet Regeln, wie sie mit den Klötzen Türme bauen möchte. Das Bild zeigt Julias Regeln: Julia setzt nur dann einen Klotz auf einen anderen, wenn ein Pfeil vom unteren zum oberen Klotz zeigt.

![Julias Regeln als Pfeildiagramm: Vom blauen Quader zeigt ein Pfeil auf sich selbst, einer zum grünen Zylinder und einer zur roten Pyramide. Vom grünen Zylinder zeigt ein Pfeil zur roten Pyramide. Vom türkisen Würfel zeigen Pfeile zum blauen Quader und zur roten Pyramide.](./img/rules.png)

Ein Beispiel: Auf einen blauen Quader darf sie einen grünen Zylinder setzen, eine rote Pyramide, viele andere blaue Quader, aber keinen türkisen Würfel.

Wenn Julia einen Turm baut, fängt sie mit irgendeinem Klotz an und hält sich dann genau an ihre Regeln. Sie hört auf, wenn sie keine Lust mehr hat – oder wenn es nach den Regeln nicht mehr weitergeht.

**Welchen Turm hat Julia gebaut?**
