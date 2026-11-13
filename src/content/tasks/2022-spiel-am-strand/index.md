---
short: Uk3d
title: Spiel am Strand
summary: Ann und Bob setzen Muscheln und Steine in Mulden. Wer zuerst zwei verbundene Mulden besetzt, verliert – wohin muss Ann setzen?
grades:
  "9-10": hard
  "11-13": medium
gi:
  content: [algorithms]
  process: [reasoning, modelling]
topics: [games, graphs]
methods: [game-tree]
mascot: beaver
interaction:
  format: graph-pick
  props:
    pick: nodes
    width: 292
    height: 162
    background: ./img/beach.png
    nodeImage: ./img/none.png
    nodeRadius: 13
    nodes:
      - { id: m1, x: 81.3, y: 57.3 }
      - { id: m2, x: 116.7, y: 86.5 }
      - { id: m3, x: 81.3, y: 111.5 }
      - { id: m4, x: 177.1, y: 86.5 }
      - { id: m5, x: 143.8, y: 128.1 }
      - { id: m6, x: 210.4, y: 15.6 }
      - { id: m7, x: 272.9, y: 63.6 }
    edges: []
source:
  type: original
  work: Informatik-Biber 2022
  year: 2022
  page: 52
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2022/Biberheft_2022_mit_Loesungen_web.pdf
  country: IT
  license: CC BY-SA 4.0
---
Ann und Bob spielen am Strand. Sie graben einige Mulden und verbinden manche davon mit Furchen. Anns Spielfiguren sind Muscheln. Bobs Spielfiguren sind Steine.

Abwechselnd setzen sie eine ihrer Spielfiguren in eine freie Mulde. Verloren hat, wer als erstes zwei eigene Figuren in zwei direkt verbundene Mulden gesetzt hat.

Unten siehst du den Spielstand nach einigen Zügen (zwei Muscheln von Ann, zwei Steine von Bob). Ann ist an der Reihe.

**In welche Mulde muss Ann ihre nächste Muschel setzen, um sich den Sieg zu sichern?** Tippe auf die freie Mulde.
