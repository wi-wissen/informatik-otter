---
short: 1mt4
title: Bienenflug
summary: Die Biene startet am Bienenstock und kann nur drei Felder weit fliegen. Welche Blumen erreicht sie?
grades:
  "3-4": easy
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [graphs, optimization]
methods: [bfs, dynamic-programming]
mascot: beaver
interaction:
  format: graph-pick
  props:
    pick: nodes
    width: 283.2
    height: 189.2
    background: ./img/field.png
    nodeImage: ./img/flower.png
    nodeRadius: 12.5
    nodes:
      - { id: f11, x: 25.2, y: 25.0 }
      - { id: f16, x: 257.8, y: 25.0 }
      - { id: f21, x: 25.2, y: 71.2 }
      - { id: f26, x: 257.8, y: 71.2 }
      - { id: f31, x: 25.2, y: 117.4 }
      - { id: f32, x: 71.8, y: 117.4 }
      - { id: f36, x: 257.8, y: 117.4 }
      - { id: f42, x: 71.8, y: 163.6 }
      - { id: f43, x: 118.2, y: 163.6 }
      - { id: f45, x: 211.2, y: 163.6 }
      - { id: f46, x: 257.8, y: 163.6 }
source:
  type: original
  work: Informatik-Biber 2020
  year: 2020
  page: 16
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2020/Biberheft_2020_final_mit_Loesungen.pdf
  country: SK
  license: CC BY-SA 4.0
---
Vom Bienenstock aus können die Bienen drei Felder weit fliegen. Von einem Feld zum nächsten fliegen sie nach links, rechts, oben oder unten.

**Zu welchen Blumen können die Bienen vom Bienenstock aus fliegen?** Tippe die Blumen an.
