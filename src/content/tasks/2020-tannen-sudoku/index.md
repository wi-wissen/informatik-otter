---
short: tJs3
title: Tannen-Sudoku
summary: Drei Tannenhöhen, Sichtschilder am Rand und eine Sudoku-Regel. Wie müssen die neun Tannen stehen?
grades:
  "5-6": hard
  "7-8": medium
  "9-10": easy
gi:
  content: [information-data]
  process: [reasoning, modelling]
topics: [compression, logic]
methods: []
mascot: beaver
interaction:
  format: custom
  props:
    background: ./img/board.png
    width: 662
    height: 563
    trayLabel: Tannen
    zones:
      - { id: z00, label: "Reihe 1, Platz 1", x: 127, y: 120, w: 111, h: 111 }
      - { id: z01, label: "Reihe 1, Platz 2", x: 240, y: 120, w: 111, h: 111 }
      - { id: z02, label: "Reihe 1, Platz 3", x: 353, y: 120, w: 111, h: 111 }
      - { id: z10, label: "Reihe 2, Platz 1", x: 127, y: 233, w: 111, h: 111 }
      - { id: z11, label: "Reihe 2, Platz 2", x: 240, y: 233, w: 111, h: 111 }
      - { id: z12, label: "Reihe 2, Platz 3", x: 353, y: 233, w: 111, h: 111 }
      - { id: z20, label: "Reihe 3, Platz 1", x: 127, y: 346, w: 111, h: 111 }
      - { id: z21, label: "Reihe 3, Platz 2", x: 240, y: 346, w: 111, h: 111 }
      - { id: z22, label: "Reihe 3, Platz 3", x: 353, y: 346, w: 111, h: 111 }
    items:
      - { id: s1, image: ./img/tree-small.png, alt: kleine Tanne }
      - { id: s2, image: ./img/tree-small.png, alt: kleine Tanne }
      - { id: s3, image: ./img/tree-small.png, alt: kleine Tanne }
      - { id: m1, image: ./img/tree-medium.png, alt: mittlere Tanne }
      - { id: m2, image: ./img/tree-medium.png, alt: mittlere Tanne }
      - { id: m3, image: ./img/tree-medium.png, alt: mittlere Tanne }
      - { id: l1, image: ./img/tree-large.png, alt: große Tanne }
      - { id: l2, image: ./img/tree-large.png, alt: große Tanne }
      - { id: l3, image: ./img/tree-large.png, alt: große Tanne }
source:
  type: original
  work: Informatik-Biber 2020
  year: 2020
  page: 56
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2020/Biberheft_2020_final_mit_Loesungen.pdf
  country: CH
  license: CC BY-SA 4.0
---
Die Biber möchten Tannen auf ein Feld setzen. Die Tannen haben drei unterschiedliche Höhen. Wenn eine Tanne hinter einer größeren Tanne steht, kann man sie nicht sehen.

![Drei Tannen: klein, mittel, groß](./img/trees.png)

Das Feld hat Reihen mit je 3 Plätzen für Tannen: Drei Reihen waagerecht (von links nach rechts), drei Reihen senkrecht (von oben nach unten).

Am Ende einer Reihe steht manchmal ein Schild. Darauf steht, wie viele Tannen in dieser Reihe man vom Schild aus sehen soll. Die Tannen müssen so gesetzt werden, dass alle Schilder stimmen. Und: In jeder Reihe (waagerecht und senkrecht) müssen alle Tannenhöhen vorkommen.

Hier ist ein Beispiel mit einer Reihe. Alle Tannen stehen richtig.

![Eine Reihe mit drei Plätzen: von links mittel, klein, groß. Das Schild links zeigt 2, das Schild rechts zeigt 1](./img/example.png)

**Setze alle Tannen auf das Feld.** Am Ende müssen alle Tannen richtig stehen.
