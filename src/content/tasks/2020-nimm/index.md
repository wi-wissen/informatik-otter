---
short: UKu2
title: Nim(m)
summary: Susi und Hans nehmen abwechselnd schwarze und weiße Steine weg. Welcher Zug sichert Susi den Sieg?
grades:
  "9-10": hard
  "11-13": hard
gi:
  content: [algorithms]
  process: [reasoning, modelling]
topics: [games, algorithm-analysis]
methods: []
mascot: beaver
interaction:
  format: choice
  props:
    options:
      - { id: a, label: "A) 1 weißen Stein" }
      - { id: b, label: "B) 2 schwarze Steine" }
      - { id: c, label: "C) 3 weiße Steine" }
      - { id: d, label: "D) Das ist egal, Susi gewinnt auf jeden Fall." }
source:
  type: original
  work: Informatik-Biber 2020
  year: 2020
  page: 41
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2020/Biberheft_2020_final_mit_Loesungen.pdf
  country: HU
  license: CC BY-SA 4.0
---
Susi und Hans spielen ein Spiel mit 3 schwarzen und 7 weißen Steinen. Sie nehmen abwechselnd Steine weg. Ein Spieler darf entweder 1 oder 2 schwarze Steine wegnehmen oder 1, 2 oder 3 weiße Steine. Der Spieler, der den letzten Stein einer der beiden Farben wegnimmt, hat gewonnen.

![Drei schwarze und sieben weiße Steine](./img/stones.png)

Susi beginnt.

**Welche Steine soll Susi nun wegnehmen, damit sie sicher das Spiel gewinnt?**
