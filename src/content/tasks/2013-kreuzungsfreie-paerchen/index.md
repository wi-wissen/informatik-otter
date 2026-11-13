---
short: t5WB
title: Kreuzungsfreie Pärchen
summary: Kreise und Quadrate mit gleichem Buchstaben sollen zu Pärchen verbunden werden, ohne dass sich Linien kreuzen.
grades:
  "5-6": easy
  "7-8": easy
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [algorithm-analysis, optimization]
methods: [dynamic-programming]
mascot: beaver
interaction:
  format: graph-pick
  props:
    pick: edges
    width: 500
    height: 140
    nodes:
      - { id: t0, x: 30, y: 25, label: A }
      - { id: t1, x: 85, y: 25, label: E }
      - { id: t2, x: 140, y: 25, label: B }
      - { id: t3, x: 195, y: 25, label: C }
      - { id: t4, x: 250, y: 25, label: A }
      - { id: t5, x: 305, y: 25, label: D }
      - { id: t6, x: 360, y: 25, label: B }
      - { id: t7, x: 415, y: 25, label: A }
      - { id: t8, x: 470, y: 25, label: E }
      - { id: b0, x: 57, y: 115, label: B }
      - { id: b1, x: 112, y: 115, label: A }
      - { id: b2, x: 167, y: 115, label: B }
      - { id: b3, x: 222, y: 115, label: A }
      - { id: b4, x: 277, y: 115, label: B }
      - { id: b5, x: 332, y: 115, label: E }
      - { id: b6, x: 387, y: 115, label: D }
      - { id: b7, x: 442, y: 115, label: C }
    edges:
      - { id: t0b1, from: t0, to: b1 }
      - { id: t0b3, from: t0, to: b3 }
      - { id: t1b5, from: t1, to: b5 }
      - { id: t2b0, from: t2, to: b0 }
      - { id: t2b2, from: t2, to: b2 }
      - { id: t2b4, from: t2, to: b4 }
      - { id: t3b7, from: t3, to: b7 }
      - { id: t4b1, from: t4, to: b1 }
      - { id: t4b3, from: t4, to: b3 }
      - { id: t5b6, from: t5, to: b6 }
      - { id: t6b0, from: t6, to: b0 }
      - { id: t6b2, from: t6, to: b2 }
      - { id: t6b4, from: t6, to: b4 }
      - { id: t7b1, from: t7, to: b1 }
      - { id: t7b3, from: t7, to: b3 }
      - { id: t8b5, from: t8, to: b5 }
source:
  type: original
  work: Informatik-Biber 2013
  year: 2013
  page: 30
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2013/Biberheft2013-mit-Loesungen.pdf
  license: CC BY-NC-SA 3.0
---
Ein Kreis und ein Quadrat mit dem gleichen Buchstaben können ein Pärchen sein. Du kannst mit der Maus eine Linie zeichnen, um ein Pärchen zu bilden.

Wenn du Pärchen bildest, musst du zwei Regeln beachten:

1. Jeder Kreis und jedes Quadrat darf nur zu einem Pärchen gehören.
2. Die Linien dürfen nicht überkreuz liegen.

In der oberen Reihe stehen von links nach rechts die Kreise A, E, B, C, A, D, B, A, E. In der unteren Reihe stehen die Quadrate B, A, B, A, B, E, D, C. Mögliche Pärchen sind als Linien eingezeichnet; klicke auf eine Linie, um sie zu wählen oder wieder abzuwählen.

**Bilde so viele Pärchen wie möglich! Beachte dabei die zwei Regeln!** Es gibt mehrere richtige Lösungen. Es ist gleich, welche davon du findest.
