---
short: j7qv
title: Schalter und Lampen
summary: Sechs Drehschalter, sechs Lampen und vier Versuche. Welcher Schalter gehört zu welcher Lampe?
grades:
  "7-8": hard
  "9-10": medium
  "11-13": easy
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [logic, computer-architecture]
methods: [boolean-logic]
mascot: beaver
interaction:
  format: choice
  props:
    options:
      - { id: a, label: "A-4, B-6, C-1, D-5, E-3, F-2" }
      - { id: b, label: "A-4, B-6, C-1, D-3, E-2, F-5" }
      - { id: c, label: "A-5, B-6, C-1, D-3, E-4, F-2" }
      - { id: d, label: "A-4, B-3, C-1, D-5, E-6, F-2" }
source:
  type: original
  work: Informatik-Biber 2018
  year: 2018
  page: 54
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2018/Biberheft2018-mit-Loesungen.pdf
  country: HU
  license: CC BY-SA 4.0
---
Die sechs Schalter A bis F sind jeweils mit genau einer der Lampen 1 bis 6 verbunden. Aber welcher Schalter schaltet welche Lampe? Um das herauszufinden, wurden diese Versuche durchgeführt:

![Vier Versuche. Jede Zeile zeigt links die Pfeilrichtung der Schalter A bis F und rechts, welche der Lampen 1 bis 6 leuchten. Versuch 1: A ↑, B ↓, C ↓, D ↑, E ↓, F ↑; Lampen 3, 5 und 6 leuchten. Versuch 2: A ↑, B ↓, C ↑, D ↑, E ↑, F ↑; Lampen 1, 5 und 6 leuchten. Versuch 3: A ↓, B ↓, C ↑, D ↓, E ↑, F ↑; Lampen 1, 4 und 6 leuchten. Versuch 4: A ↑, B ↓, C ↓, D ↓, E ↑, F ↓; Lampen 2 und 6 leuchten.](./img/tests.png)

Leider weiß man bei den alten Drehschaltern nicht so genau, wie sie funktionieren: Einige Schalter sind „an“, wenn der Pfeil nach oben zeigt, bei den anderen Schaltern ist es genau umgekehrt.

**Welcher Schalter schaltet welche Lampe?**
