---
short: L5Le
title: Trainingstour
summary: Ein Fahrradkurier will alle sieben Zielorte genau einmal anfahren und dabei möglichst weit fahren. Wie lang ist die längste Tour?
grades:
  "11-13": hard
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [graphs, optimization]
methods: [hamilton-path, brute-force]
mascot: beaver
interaction:
  format: choice
  props:
    columns: 5
    options:
      - { id: a, label: 22 km }
      - { id: b, label: 23 km }
      - { id: c, label: 24 km }
      - { id: d, label: 25 km }
      - { id: e, label: 26 km }
source:
  type: original
  work: Informatik-Biber 2019
  year: 2019
  page: 54
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2019/Biberheft2019-mit-Loesungen.pdf
  country: CA
  license: CC BY-SA 4.0
---
Ben arbeitet als Fahrradkurier. Jeden Tag fährt er eine Tour. Er startet am Lager A und fährt zu allen Zielorten. Jeden Zielort fährt er aber nur einmal an. Beim letzten Zielort ist die Tour zu Ende.

Ben ist auch Radsportler. Aus jeder Tour macht er eine Trainingstour. Das ist eine Tour mit maximaler Länge (in Kilometern).

Heute hat Bens Tour sieben Zielorte. Das Bild zeigt die Längen der Strecken, die Ben fahren kann.

![Karte mit dem Lager A oben links und sieben Zielorten in zwei Reihen. Obere Reihe von links: A, Ort 1, Ort 2, Ort 3; untere Reihe: Ort 4, Ort 5, Ort 6, Ort 7. Strecken: A–Ort 1 3 km, Ort 1–Ort 2 3 km, Ort 2–Ort 3 4 km, A–Ort 4 2 km, Ort 4–Ort 5 1 km, Ort 5–Ort 6 3 km, Ort 6–Ort 7 2 km, Ort 1–Ort 5 5 km, Ort 2–Ort 6 1 km, Ort 3–Ort 7 8 km.](./img/map.png)

**Wie lang ist Bens Trainingstour heute?**
