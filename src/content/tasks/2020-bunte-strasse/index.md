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
  format: pixel-grid
  props:
    rows: 2
    cols: 5
    palette: ["#ffffff", "#e53935", "#1a237e", "#66bb6a"]
    initial: [[1, 0, 2, 0, 3], [2, 0, 0, 0, 1]]
    locked: [[true, false, true, false, true], [true, false, false, false, true]]
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

![Eine Straße mit fünf Häusern oben und fünf unten. Oben von links: rot, weiß, blau, weiß, grün. Unten von links: blau, weiß, weiß, weiß, rot](./img/street.png)

Im Raster steht die obere Zeile für die obere Straßenseite und die untere Zeile für die untere. Die fertigen Häuser sind festgelegt. Die Farben zum Auswählen sind von links nach rechts: Weiß, Rot, Blau, Grün.

**Streiche auch die weißen Häuser nach den Regeln an!**
