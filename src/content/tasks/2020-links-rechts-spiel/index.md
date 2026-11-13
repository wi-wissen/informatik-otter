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
  format: choice
  props:
    columns: 8
    options:
      - { id: "1", label: "1" }
      - { id: "2", label: "2" }
      - { id: "3", label: "3" }
      - { id: "4", label: "4" }
      - { id: "5", label: "5" }
      - { id: "6", label: "6" }
      - { id: "7", label: "7" }
      - { id: "8", label: "8" }
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

![Das Startfeld unten, darüber drei Ebenen von Verzweigungen und acht Depots mit Spiel-Chips (von links gezählt: 2, 7, 5, 4, 8, 6, 1 und 3 Chips)](./img/depots.png)

**Welches Depot wird die Spielfigur erreichen?** (Die Depots sind von links nach rechts von 1 bis 8 nummeriert.)
