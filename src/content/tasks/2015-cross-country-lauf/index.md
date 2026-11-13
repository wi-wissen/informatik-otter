---
short: LaV1
title: Cross-Country-Lauf
summary: Drei Biber überholen sich je nach Gelände. In welcher Reihenfolge erreichen sie das Ziel?
grades:
  "5-6": medium
  "7-8": easy
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [programming]
methods: [sequence]
mascot: beaver
interaction:
  format: choice
  props:
    options:
      - { id: a, label: "Mrs. Pink, Mr. Brown, Mrs. Green (P B G)" }
      - { id: b, label: "Mr. Brown, Mrs. Green, Mrs. Pink (B G P)" }
      - { id: c, label: "Mrs. Green, Mrs. Pink, Mr. Brown (G P B)" }
      - { id: d, label: "Mr. Brown, Mrs. Pink, Mrs. Green (B P G)" }
source:
  type: original
  work: Informatik-Biber 2015
  year: 2015
  page: 19
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2015/Biberheft2015-mit-Loesungen.pdf
  country: ZA
  license: CC BY-SA 3.0
---
Drei entschlossene Biber treten zum Cross-Country-Lauf an.

- **P:** Jedesmal wenn es bergab geht, überholt Mrs. Pink (P) genau einen Biber.
- **B:** Jedesmal wenn es bergauf geht, überholt Mr. Brown (B) genau einen Biber.
- **G:** Jedesmal wenn es über Felsen geht, überholt Mrs. Green (G) genau einen Biber.

Im Bild sieht man, dass die Strecke erst bergauf führt, dann folgen Felsen. Danach geht es bergab, und schließlich folgen wieder Felsen.

![Die Strecke von rechts nach links: Start rechts mit den drei Bibern P, B, G; dann bergauf, Felsen auf dem Gipfel, bergab, Felsen und links das Ziel mit der Zielflagge](./img/track.png)

Zuerst startet Mrs. Pink, als nächstes Mr. Brown und zuletzt Mrs. Green.

**In welcher Reihenfolge laufen die Biber ins Ziel ein?**
