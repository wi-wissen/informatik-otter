---
short: LP8K
title: Überblick
summary: Helfer auf Lichtungen überblicken die Wege bis zur nächsten Lichtung. Wie wenige Lichtungen brauchen sie für alle Wege?
grades:
  "5-6": hard
  "7-8": medium
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [graphs, optimization]
methods: [vertex-cover]
mascot: beaver
interaction:
  format: graph-pick
  props:
    pick: nodes
    width: 454
    height: 238
    background: ./img/forest.png
    hideNodes: true
    nodeRadius: 14
    nodes:
      - { id: T, x: 178, y: 42, label: Lichtung oben Mitte }
      - { id: R, x: 349, y: 40, label: Lichtung oben rechts }
      - { id: L1, x: 59, y: 88, label: Lichtung links oben }
      - { id: L2, x: 54, y: 192, label: Lichtung links unten }
      - { id: M, x: 162, y: 161, label: Lichtung unten Mitte }
      - { id: N, x: 301, y: 154, label: Lichtung unten rechts der Mitte }
      - { id: S, x: 396, y: 184, label: Lichtung ganz rechts unten }
source:
  type: original
  work: Informatik-Biber 2021
  year: 2021
  page: 55
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2021/Biberheft_2021_mit_Loesungen_web.pdf
  country: AT
  license: CC BY-SA 4.0
---
Im Wald gibt es Lichtungen und Wege dazwischen. Von jeder Lichtung aus kann man die von dort ausgehenden Wege genau bis zur nächsten Lichtung überblicken. Eine Gruppe von Helfern soll insgesamt alle Wege überblicken können. Die Försterin will dazu möglichst wenige Lichtungen mit Helfern besetzen.

**Welche Lichtungen soll die Försterin besetzen?**
