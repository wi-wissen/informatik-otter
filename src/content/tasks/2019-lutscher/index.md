---
short: av8g
title: Lutscher
summary: Vier Biber stehen Schlange und bekommen nacheinander den nächsten Lutscher. Wer erhält das rote Dreieck?
grades:
  "3-4": easy
gi:
  content: [information-data]
  process: [modelling]
topics: [data-structures]
methods: [queue]
mascot: beaver
interaction:
  format: graph-pick
  props:
    pick: nodes
    width: 523
    height: 171
    background: ./img/queue.png
    hideNodes: true
    nodeRadius: 36
    nodes:
      - { id: b1, x: 231, y: 92, label: Erster Biber }
      - { id: b2, x: 311, y: 92, label: Zweiter Biber }
      - { id: b3, x: 387, y: 92, label: Dritter Biber }
      - { id: b4, x: 463, y: 96, label: Vierter Biber }
    edges: []
source:
  type: original
  work: Informatik-Biber 2019
  year: 2019
  page: 29
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2019/Biberheft2019-mit-Loesungen.pdf
  country: PK
  license: CC BY-SA 4.0
---
Es gibt Lutscher, umsonst! Vier Biber stellen sich an. Wer an der Reihe ist, bekommt den Lutscher, der am nächsten ist. Der erste Biber bekommt also den Lutscher mit dem grünen Quadrat.

![Links ein Stand mit vier Lutschern in einer Reihe (Stern, Dreieck, Kreis, Quadrat), rechts davon stehen vier Biber in einer Schlange. Der Biber ganz links ist der erste.](./img/queue.png)

**Wer bekommt den Lutscher mit dem roten Dreieck?** Klicke den Biber an.
