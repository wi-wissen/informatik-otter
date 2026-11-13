---
short: 36Us
title: Bunte Straße
summary: Alle Häuser einer Straße sollen bunt werden, aber gleiche Farben dürfen sich nicht berühren.
grades:
  "3-4": medium
  "5-6": easy
gi:
  content: [information-data, algorithms]
  process: [modelling, reasoning]
topics: [graphs, modelling]
methods: [graph-coloring]
mascot: beaver
interaction:
  format: custom
  props:
    background: ./img/street.png
    width: 979
    height: 407
    spots:
      - { id: t2, x: 315, y: 150, w: 140, h: 150, label: "Oberes Haus 2" }
      - { id: t4, x: 680, y: 150, w: 140, h: 150, label: "Oberes Haus 4" }
      - { id: b2, x: 315, y: 320, w: 140, h: 150, label: "Unteres Haus 2" }
      - { id: b3, x: 500, y: 325, w: 140, h: 150, label: "Unteres Haus 3" }
      - { id: b4, x: 685, y: 320, w: 140, h: 150, label: "Unteres Haus 4" }
    states:
      - { id: white, image: ./img/house-white.png, label: Weiß }
      - { id: red, image: ./img/house-red.png, label: Rot }
      - { id: blue, image: ./img/house-blue.png, label: Blau }
      - { id: green, image: ./img/house-green.png, label: Grün }
source:
  type: original
  work: Informatik-Biber 2020
  year: 2020
  page: 21
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2020/Biberheft_2020_final_mit_Loesungen.pdf
  country: JP
  license: CC BY-SA 4.0
---
An einer Straße sollen alle Häuser bunt angestrichen werden: in Rot, Blau oder Grün. Damit es nicht langweilig aussieht, gibt es diese Regeln:

- Zwei Häuser, die auf einer Straßenseite direkt nebeneinander stehen, dürfen nicht dieselbe Farbe haben.
- Zwei Häuser, die sich auf zwei Straßenseiten direkt gegenüber stehen, dürfen nicht dieselbe Farbe haben.

Einige Häuser sind schon fertig.

**Streiche auch die weißen Häuser nach den Regeln an!** Klicke auf ein weißes Haus, bis es die richtige Farbe hat.
