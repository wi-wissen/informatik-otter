---
short: So4k
title: Brückenbau
summary: Biber Bob will Inseln und Ufer mit möglichst wenigen Arbeitstagen durch Brücken verbinden.
grades:
  "5-6": hard
  "11-13": easy
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [graphs, optimization]
methods: [kruskal]
mascot: beaver
interaction:
  format: graph-pick
  props:
    pick: edges
    width: 341.2
    height: 199.6
    background: ./img/map.png
    hideNodes: true
    nodes:
      - { id: b1a, x: 75, y: 34 }
      - { id: b1b, x: 65, y: 52 }
      - { id: b2a, x: 58, y: 65 }
      - { id: b2b, x: 45, y: 82 }
      - { id: b3a, x: 47, y: 102 }
      - { id: b3b, x: 43, y: 120 }
      - { id: b4a, x: 41, y: 140 }
      - { id: b4b, x: 45, y: 160 }
      - { id: b5a, x: 93, y: 132 }
      - { id: b5b, x: 101, y: 154 }
      - { id: b6a, x: 143, y: 64 }
      - { id: b6b, x: 153, y: 90 }
      - { id: b7a, x: 135, y: 118 }
      - { id: b7b, x: 133, y: 148 }
      - { id: b8a, x: 193, y: 40 }
      - { id: b8b, x: 189, y: 56 }
      - { id: b9a, x: 171, y: 90 }
      - { id: b9b, x: 187, y: 108 }
      - { id: b10a, x: 191, y: 136 }
      - { id: b10b, x: 195, y: 160 }
      - { id: b11a, x: 213, y: 82 }
      - { id: b11b, x: 203, y: 110 }
      - { id: b12a, x: 275, y: 28 }
      - { id: b12b, x: 275, y: 44 }
      - { id: b13a, x: 303, y: 58 }
      - { id: b13b, x: 309, y: 80 }
      - { id: b14a, x: 321, y: 90 }
      - { id: b14b, x: 323, y: 116 }
      - { id: b15a, x: 275, y: 128 }
      - { id: b15b, x: 275, y: 146 }
    edges:
      - { id: b1, from: b1a, to: b1b }
      - { id: b2, from: b2a, to: b2b }
      - { id: b3, from: b3a, to: b3b }
      - { id: b4, from: b4a, to: b4b }
      - { id: b5, from: b5a, to: b5b }
      - { id: b6, from: b6a, to: b6b }
      - { id: b7, from: b7a, to: b7b }
      - { id: b8, from: b8a, to: b8b }
      - { id: b9, from: b9a, to: b9b }
      - { id: b10, from: b10a, to: b10b }
      - { id: b11, from: b11a, to: b11b }
      - { id: b12, from: b12a, to: b12b }
      - { id: b13, from: b13a, to: b13b }
      - { id: b14, from: b14a, to: b14b }
      - { id: b15, from: b15a, to: b15b }
source:
  type: original
  work: Informatik-Biber 2013
  year: 2013
  page: 6
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2013/Biberheft2013-mit-Loesungen.pdf
  license: CC BY-NC-SA 3.0
---
Im Fluss liegen viele Inseln. Biber Bob will Brücken bauen. Mit folgendem Ziel: Von beiden Flussufern aus soll man alle Inseln über Brücken und Uferwege erreichen können.

Bob will insgesamt möglichst wenige Tage arbeiten.

Im Plan hat Bob alle Stellen eingezeichnet, wo er eine Brücke bauen kann. Neben jeder Stelle steht, wie viele Arbeitstage er für den Bau dieser Brücke braucht.

![Plan des Flusses mit acht Inseln, dem oberen und dem unteren Ufer und 15 möglichen Brückenstellen mit Arbeitstagen: 6, 7, 4, 8, 5, 5, 8, 4, 4, 6, 7, 3, 5, 3, 7](./img/map.png)

**Zeige Bob, wie er mit möglichst wenigen Arbeitstagen sein Ziel erreichen kann!** Klicke im Plan auf die Stellen, wo Bob eine Brücke bauen soll. Klicke auf geplante Brücken, um sie wieder zu entfernen.
