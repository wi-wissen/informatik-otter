---
short: QjT3
title: Zauberschule
summary: Zwei Stockwerke voller Wände, Treppen kosten extra Zeit. Wie schnell kommt Ron von A nach B?
grades:
  "9-10": hard
  "11-13": medium
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [graphs, optimization]
methods: [dijkstra]
mascot: beaver
interaction:
  format: choice
  props:
    columns: 4
    options:
      - { id: a, label: "6" }
      - { id: b, label: "16" }
      - { id: c, label: "18" }
      - { id: d, label: "20" }
source:
  type: original
  work: Informatik-Biber 2022
  year: 2022
  page: 65
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2022/Biberheft_2022_mit_Loesungen_web.pdf
  country: UZ
  license: CC BY-SA 4.0
---
Die Zauberschule hat zwei Stockwerke. Die Stockwerke liegen genau übereinander. Beide sind in Felder eingeteilt, und es gibt Wände zwischen einigen Feldern:

![Zwei Grundrisse mit je 6 mal 6 Feldern und Wänden dazwischen. Im linken Stockwerk liegen Feld A (links oben) und Feld B (rechts unten)](./img/school.png)

Zauberschüler Ron braucht 1 Sekunde, um auf dem gleichen Stockwerk von einem Feld zum nächsten zu gehen. Leider hat Ron vergessen, wie er durch Wände gehen kann. Er kann aber von einem Stockwerk zum entsprechenden Feld des anderen Stockwerks gelangen; dazu braucht er 5 Sekunden.

Ron möchte von Feld A zu Feld B gelangen, und zwar so schnell wie möglich.

**Wie viele Sekunden braucht Ron dazu mindestens?**
