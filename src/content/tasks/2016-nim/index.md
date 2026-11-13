---
short: 7qXt
title: Nim
summary: 13 Hölzchen, zwei Spieler, jeder nimmt 1 bis 3 Hölzchen. Wer das letzte nimmt, gewinnt. Wie fängt Beat an?
grades:
  "9-10": medium
  "11-13": easy
gi:
  content: [algorithms]
  process: [reasoning, modelling]
topics: [games]
methods: [winning-strategy]
mascot: beaver
interaction:
  format: choice
  props:
    options:
      - { id: a, label: "A) 1 Hölzchen" }
      - { id: b, label: "B) 2 Hölzchen" }
      - { id: c, label: "C) 3 Hölzchen" }
      - { id: d, label: "D) Das spielt keine Rolle." }
source:
  type: original
  work: Informatik-Biber 2016
  year: 2016
  page: 50
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2016/Biberheft2016-mit-Loesungen.pdf
  country: CH
  license: CC BY-SA 3.0
---
Beat und sein Freund spielen das Nim-Spiel. 13 Hölzchen liegen auf dem Tisch. Die beiden Spieler nehmen abwechselnd 1, 2 oder 3 Hölzchen weg. Wer das letzte Hölzchen nimmt, hat gewonnen.

![13 Streichhölzer liegen nebeneinander auf dem Tisch](./img/matches.png)

Hinweis: Wenn noch vier Hölzchen auf dem Tisch liegen, kann Beat nicht mehr gewinnen. Diese Situation möchte er vermeiden.

**Beat fängt an. Wie viele Hölzchen muss er wegnehmen, um das Spiel zu gewinnen?**
