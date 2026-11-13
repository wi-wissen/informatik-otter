---
short: mm3L
title: Bergsteiger
summary: Greta klettert immer zum höheren Nachbargipfel. Von welchen Gipfeln aus kommt sie ganz oben an?
grades:
  "5-6": easy
gi:
  content: [algorithms]
  process: [reasoning, modelling]
topics: [optimization, algorithm-analysis]
methods: [greedy]
mascot: beaver
interaction:
  format: graph-pick
  props:
    pick: nodes
    width: 525.2
    height: 131.2
    background: ./img/mountains.png
    hideNodes: true
    nodeRadius: 16
    nodes:
      - { id: g1, x: 39, y: 85, label: "1" }
      - { id: g2, x: 68, y: 98, label: "2" }
      - { id: g3, x: 86, y: 105, label: "3" }
      - { id: g4, x: 149, y: 59, label: "4" }
      - { id: g5, x: 172, y: 79, label: "5" }
      - { id: g6, x: 212, y: 50, label: "6" }
      - { id: g7, x: 289, y: 37, label: "7" }
      - { id: g8, x: 336, y: 58, label: "8" }
      - { id: g9, x: 360, y: 92, label: "9" }
      - { id: g10, x: 433, y: 39, label: "10" }
      - { id: g11, x: 466, y: 85, label: "11" }
source:
  type: original
  work: Informatik-Biber 2020
  year: 2020
  page: 13
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2020/Biberheft_2020_final_mit_Loesungen.pdf
  country: CA
  license: CC BY-SA 4.0
---
Greta klettert am liebsten in den Gipfeln des Bibergebirges.

Sobald sie einen Gipfel erreicht hat, schaut sie sich die beiden Nachbar-Gipfel an:

- Ist nur ein Nachbar-Gipfel höher, klettert sie auf diesen Gipfel.
- Sind beide Nachbar-Gipfel höher, klettert sie auf den höheren der beiden.

Das wiederholt sie so lange, bis sie einen Gipfel erreicht, der keinen höheren Nachbarn hat.

**Von welchen Gipfeln aus erreicht Greta so den höchsten Gipfel?** Klicke die Gipfel an.
