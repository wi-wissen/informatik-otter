---
short: oXt6
title: Genau einmal
summary: Eine Spielfigur folgt Anweisungen von Feld zu Feld und soll jedes Feld genau einmal besuchen. Wo muss sie starten?
grades:
  "9-10": medium
  "11-13": easy
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [searching, graphs]
methods: [backtracking]
mascot: beaver
interaction:
  format: graph-pick
  props:
    pick: nodes
    width: 526
    height: 72
    background: ./img/board.png
    hideNodes: true
    nodeRadius: 22
    nodes:
      - { id: f1, x: 27, y: 18 }
      - { id: f2, x: 94, y: 18 }
      - { id: f3, x: 160, y: 18 }
      - { id: f4, x: 227, y: 18 }
      - { id: f5, x: 294, y: 18 }
      - { id: f6, x: 361, y: 18 }
      - { id: f7, x: 428, y: 18 }
      - { id: f8, x: 495, y: 18 }
    edges: []
source:
  type: original
  work: Informatik-Biber 2018
  year: 2018
  page: 36
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2018/Biberheft2018-mit-Loesungen.pdf
  country: CA
  license: CC BY-SA 4.0
---
In einem Spiel zieht die Spielfigur über eine Reihe von Feldern. Bei jedem Feld steht eine Anweisung. Sie sagt, wohin die Figur von dem Feld aus ziehen soll.

Es gibt drei Arten von Anweisungen:

- *n* L bedeutet: Ziehe *n* Felder nach links. Ein Beispiel:

![Die Spielfigur steht auf einem Feld mit „2L“ und zieht zwei Felder nach links](./img/left.png)

- *n* R bedeutet: Ziehe *n* Felder nach rechts. Ein Beispiel:

![Die Spielfigur steht auf einem Feld mit „3R“ und zieht drei Felder nach rechts](./img/right.png)

- 0 bedeutet: Bleib stehen.

Unten siehst du das gesamte Spiel mit allen Anweisungen. Die Spielfigur soll so ziehen, dass sie am Ende auf jedem Feld genau einmal gewesen ist.

**Auf welchem Feld muss die Spielfigur starten?**

Klicke auf ein Feld, um es als Startfeld auszuwählen.

![Acht Felder in einer Reihe mit den Anweisungen 1R, 3R, 2L, 0, 3R, 1R, 3L, 2L](./img/board.png)
