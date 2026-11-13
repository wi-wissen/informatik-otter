---
short: 6LYY
title: Wackelig
summary: 13 Kugeln liegen im dreieckigen Kasten. Wenn man ihn kippt, rollen manche weg. Welche bleiben sicher liegen?
grades:
  "7-8": hard
  "9-10": medium
  "11-13": easy
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [recursion]
methods: []
mascot: beaver
interaction:
  format: graph-pick
  props:
    pick: nodes
    width: 243
    height: 179
    background: ./img/box.png
    hideNodes: true
    nodeRadius: 17
    nodes:
      - { id: s1, x: 84, y: 153, label: Unterste Reihe, erste Kugel }
      - { id: s2, x: 123, y: 153, label: Unterste Reihe, zweite Kugel }
      - { id: s3, x: 162, y: 153, label: Unterste Reihe, dritte Kugel }
      - { id: s4, x: 201, y: 153, label: Unterste Reihe, vierte Kugel }
      - { id: t1, x: 65, y: 122, label: Zweite Reihe, erste Kugel }
      - { id: t2, x: 104, y: 122, label: Zweite Reihe, zweite Kugel }
      - { id: t3, x: 143, y: 122, label: Zweite Reihe, dritte Kugel }
      - { id: t4, x: 182, y: 122, label: Zweite Reihe, vierte Kugel }
      - { id: u1, x: 84, y: 93, label: Dritte Reihe, erste Kugel }
      - { id: u2, x: 123, y: 93, label: Dritte Reihe, zweite Kugel }
      - { id: v1, x: 102, y: 65, label: Vierte Reihe, erste Kugel }
      - { id: v2, x: 141, y: 65, label: Vierte Reihe, zweite Kugel }
      - { id: w1, x: 122, y: 37, label: Oberste Kugel }
    edges: []
source:
  type: original
  work: Informatik-Biber 2019
  year: 2019
  page: 61
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2019/Biberheft2019-mit-Loesungen.pdf
  country: BE
  license: CC BY-SA 4.0
---
13 Kugeln liegen in einem dreieckigen Kasten (siehe unten). Wenn wir den Kasten an der Spitze anheben und nach vorne kippen, drohen einige Kugeln nach unten zu rollen. Diese Kugeln nennen wir wackelig.

Eine Kugel ist wackelig, wenn (mindestens) eine der beiden folgenden Bedingungen erfüllt ist:

- Es gibt eine Lücke links oder rechts unterhalb der Kugel.
- Es gibt zumindest eine wackelige Kugel links oder rechts unterhalb der Kugel.

![Eine Kugel mit den beiden Plätzen links und rechts unterhalb von ihr](./img/rule.png)

![Ein dreieckiger Kasten mit 13 Kugeln: Die unterste Reihe hat vier Kugeln, die Reihen darüber haben vier, zwei, zwei und eine Kugel.](./img/box.png)

**Welche Kugeln sind NICHT wackelig?** Klicke sie an.
