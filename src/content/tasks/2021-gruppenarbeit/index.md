---
short: H9py
title: Gruppenarbeit
summary: Acht Personen sollen in zwei Gruppen arbeiten, aber manche vertragen sich nicht. Welcher Blitz muss weg?
grades:
  "11-13": hard
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [graphs]
methods: [graph-coloring]
mascot: beaver
interaction:
  format: graph-pick
  props:
    pick: edges
    width: 331
    height: 185
    background: ./img/people.png
    hideNodes: true
    nodes:
      - { id: P1, x: 15, y: 70, label: Person ganz links }
      - { id: P2, x: 107, y: 46, label: Person oben links }
      - { id: P3, x: 190, y: 74, label: Person in der Mitte }
      - { id: P4, x: 270, y: 12, label: Person ganz oben }
      - { id: P5, x: 311, y: 100, label: Person rechts }
      - { id: P6, x: 92, y: 110, label: Person unten links }
      - { id: P7, x: 166, y: 159, label: Person unten Mitte }
      - { id: P8, x: 268, y: 169, label: Person unten rechts }
    edges:
      - { id: P1-P2, from: P1, to: P2 }
      - { id: P2-P3, from: P2, to: P3 }
      - { id: P3-P4, from: P3, to: P4 }
      - { id: P4-P5, from: P4, to: P5 }
      - { id: P3-P5, from: P3, to: P5 }
      - { id: P5-P8, from: P5, to: P8 }
      - { id: P8-P7, from: P8, to: P7 }
      - { id: P7-P6, from: P7, to: P6 }
      - { id: P6-P3, from: P6, to: P3 }
      - { id: P6-P1, from: P6, to: P1 }
source:
  type: original
  work: Informatik-Biber 2021
  year: 2021
  page: 32
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2021/Biberheft_2021_mit_Loesungen_web.pdf
  country: CH
  license: CC BY-SA 4.0
---
Für ein Projekt sollst du acht Personen in Gruppen aufteilen. Ein Blitz zwischen zwei Personen zeigt: Diese beiden wollen nicht zusammenarbeiten. Zwischen zwei Personen derselben Gruppe darf also kein Blitz sein. Damit ist eine Aufteilung in drei Gruppen möglich: rot, blau und violett.

![Acht Personen, farbig in drei Gruppen eingeteilt (rot, blau, violett), mit zehn Blitzen zwischen ihnen](./img/groups3.png)

Nun willst du die Personen in zwei Gruppen aufteilen. Das ist möglich, wenn du die richtigen beiden Personen zur Zusammenarbeit überzeugst – also den richtigen Blitz entfernst.

**Entferne den richtigen Blitz! Tippe ihn im Bild an.**
