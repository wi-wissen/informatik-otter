---
short: 81xZ
title: Nachbarn
summary: Neun Kreise tragen Bedingungen wie „= 3“ oder „< 4“ über ihre Nachbarn. Welche Kreise musst du auswählen, damit alle stimmen?
grades:
  "7-8": hard
  "9-10": medium
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [graphs, logic]
methods: [brute-force]
mascot: beaver
interaction:
  format: graph-pick
  props:
    pick: nodes
    width: 290
    height: 290
    nodeRadius: 24
    nodes:
      - { id: a, x: 45, y: 45, label: "< 2" }
      - { id: b, x: 145, y: 45, label: "= 4" }
      - { id: c, x: 245, y: 45, label: "= 1" }
      - { id: d, x: 45, y: 145, label: "= 3" }
      - { id: e, x: 145, y: 145, label: "< 4" }
      - { id: f, x: 245, y: 145, label: "< 4" }
      - { id: g, x: 45, y: 245, label: "= 1" }
      - { id: h, x: 145, y: 245, label: "< 4" }
      - { id: i, x: 245, y: 245, label: "= 2" }
    edges:
      - { from: a, to: b }
      - { from: b, to: c }
      - { from: a, to: d }
      - { from: a, to: e }
      - { from: b, to: e }
      - { from: b, to: f }
      - { from: c, to: f }
      - { from: d, to: e }
      - { from: e, to: f }
      - { from: d, to: g }
      - { from: d, to: h }
      - { from: e, to: h }
      - { from: f, to: h }
      - { from: f, to: i }
      - { from: g, to: h }
      - { from: h, to: i }
source:
  type: original
  work: Informatik-Biber 2018
  year: 2018
  page: 46
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2018/Biberheft2018-mit-Loesungen.pdf
  country: CA
  license: CC BY-SA 4.0
---
Das Bild unten zeigt neun Kreise. Wenn zwei Kreise durch eine Linie verbunden sind, sind sie Nachbarn.

Du sollst einige Kreise auswählen. Dazu steht in jedem Kreis eine Bedingung. Sie sagt, wie viele Nachbarn des Kreises ausgewählt werden sollen. Zum Beispiel bedeutet „= 3“, dass genau drei Nachbarn ausgewählt werden sollen. „< 4“ bedeutet, dass weniger als vier Nachbarn ausgewählt werden sollen.

**Wähle nun Kreise so aus, dass alle Bedingungen erfüllt sind.**

Klicke einen Kreis an, um ihn auszuwählen.
