---
short: kb6J
title: Links-Rechts-Spiel
summary: Alice will möglichst viele Chips, Bob möglichst wenige. In welchem Depot landet die Spielfigur?
grades:
  "7-8": medium
  "9-10": easy
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [games, trees]
methods: [decision-tree]
mascot: beaver
interaction:
  format: graph-pick
  props:
    pick: nodes
    width: 788
    height: 259
    background: ./img/depots.png
    hideNodes: true
    nodeRadius: 40
    nodes:
      - { id: d1, x: 68, y: 62, label: "Depot 1" }
      - { id: d2, x: 160, y: 62, label: "Depot 2" }
      - { id: d3, x: 255, y: 62, label: "Depot 3" }
      - { id: d4, x: 350, y: 62, label: "Depot 4" }
      - { id: d5, x: 448, y: 62, label: "Depot 5" }
      - { id: d6, x: 545, y: 62, label: "Depot 6" }
      - { id: d7, x: 625, y: 62, label: "Depot 7" }
      - { id: d8, x: 720, y: 62, label: "Depot 8" }
source:
  type: original
  work: Informatik-Biber 2020
  year: 2020
  page: 37
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2020/Biberheft_2020_final_mit_Loesungen.pdf
  country: PH
  license: CC BY-SA 4.0
---
Beim Links-Rechts-Spiel gibt es acht Depots, auf die unterschiedlich viele Spiel-Chips verteilt werden. Eine Spielfigur zieht vom Startfeld aus zu einem Depot. Jedes Spielfeld hat eine Verzweigung, nach links oder rechts. Beim Startfeld entscheidet Alice, welchen Weg die Figur nimmt; bei der nächsten Verzweigung entscheidet Bob und schließlich wieder Alice. Alices Ziel ist, dass die Spielfigur ein Depot mit möglichst vielen Chips erreicht. Bobs Ziel ist hingegen, dass die Figur ein Depot mit möglichst wenigen Chips erreicht. Beide wissen voneinander, dass sie gute Spieler sind und sich immer für die Richtung entscheiden, die für ihr Ziel die beste ist.

Ein Beispiel: Wenn Bob die Figur zur Verzweigung ganz links zieht, dann weiß Bob, dass anschließend Alice die Figur auf das Depot mit 7 Spielsteinen zieht.

Ein neues Spiel beginnt, die Spiel-Chips sind verteilt.

**Welches Depot wird die Spielfigur erreichen?** Klicke auf das Depot.
