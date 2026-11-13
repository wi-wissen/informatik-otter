---
short: Q63j
title: Liniennetz
summary: Vier Bahnlinien, eine führt zum Zoo, einmal Umsteigen. Mit welcher Linie muss Johannes losfahren?
grades:
  "3-4": hard
  "5-6": medium
  "7-8": easy
gi:
  content: [information-data]
  process: [modelling, representing]
topics: [graphs, modelling]
methods: []
mascot: beaver
interaction:
  format: graph-pick
  props:
    pick: nodes
    width: 394
    height: 252
    background: ./img/network.png
    hideNodes: true
    nodeRadius: 24
    nodes:
      - { id: l1, x: 70, y: 22 }
      - { id: l2, x: 70, y: 85 }
      - { id: l3, x: 70, y: 149 }
      - { id: l4, x: 70, y: 212 }
    edges: []
source:
  type: original
  work: Informatik-Biber 2018
  year: 2018
  page: 45
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2018/Biberheft2018-mit-Loesungen.pdf
  country: TW
  license: CC BY-SA 4.0
---
In Biberstadt gibt es vier Bahnlinien. Eine Linie fährt zum Zoo. An den Stationen, an denen zwei Kreise durch eine Linie verbunden sind, kann man von einer Linie zu einer anderen wechseln. Johannes fährt zum Zoo. Er muss nur einmal die Linie wechseln.

![Das Liniennetz von Biberstadt: Linie 1 (grün) führt zum Zoo, Linie 2 (orange), Linie 3 (pink) und Linie 4 (dunkelblau); Umsteigestationen sind durch verbundene Kreise markiert](./img/network.png)

**Mit welcher Linie fährt er los?** Klicke links die richtige Linie an.
