---
short: L4px
title: Viele Freunde
summary: Tobi schwimmt vier Tage lang von Teich zu Teich und besucht Freunde. Wie viele kann er höchstens treffen?
grades:
  "5-6": hard
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [graphs, optimization]
methods: [brute-force]
mascot: beaver
interaction:
  format: choice
  props:
    columns: 4
    options:
      - { id: a, label: 21 Freunde }
      - { id: b, label: 24 Freunde }
      - { id: c, label: 25 Freunde }
      - { id: d, label: 30 Freunde }
source:
  type: original
  work: Informatik-Biber 2014
  year: 2014
  page: 51
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2014/Biberheft2014-mit-Loesungen.pdf
  license: CC BY-NC-SA 3.0
---
Im Bild siehst du neun Teiche. Sie sind durch Kanäle verbunden. Tobi Biber lebt im mittleren Teich, seine Freunde leben in den anderen Teichen. Die Zahlen zeigen an, wie viele Freunde in jedem Teich leben.

![Neun Teiche in drei mal drei Feldern, durch Kanäle verbunden. Oben 9, 3, 4; in der Mitte 5, Tobi, 8; unten 2, 7, 6](./img/ponds.png)

Tobi möchte seine Freunde besuchen. Er startet zuhause, schwimmt jeden Tag durch einen Kanal in einen anderen Teich, besucht dort seine Freunde und bleibt über Nacht. Am nächsten Tag schwimmt er weiter.

**Wie viele verschiedene Freunde kann Tobi innerhalb von vier Tagen höchstens besuchen?** Es ist ihm egal, in welchem Teich er nach den vier Tagen ankommt.
