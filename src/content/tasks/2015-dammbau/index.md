---
short: P2Fy
title: Dammbau
summary: Die Biber wollen den Fluss mit möglichst wenigen Baumstämmen aufstauen. Wo bauen sie ihre Dämme?
grades:
  "7-8": medium
  "9-10": easy
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [graphs, optimization]
methods: [dijkstra]
mascot: beaver
interaction:
  format: graph-pick
  props:
    pick: edges
    width: 401.6
    height: 198.8
    background: ./img/plan.png
    hideNodes: true
    nodes:
      - { id: nb1a, x: 92, y: 32 }
      - { id: nb1b, x: 84, y: 60 }
      - { id: nb2a, x: 72, y: 74 }
      - { id: nb2b, x: 60, y: 102 }
      - { id: nb3a, x: 62, y: 118 }
      - { id: nb3b, x: 52, y: 142 }
      - { id: nb4a, x: 46, y: 160 }
      - { id: nb4b, x: 54, y: 191 }
      - { id: nb5a, x: 102, y: 130 }
      - { id: nb5b, x: 126, y: 134 }
      - { id: nb6a, x: 106, y: 154 }
      - { id: nb6b, x: 120, y: 176 }
      - { id: nb7a, x: 170, y: 74 }
      - { id: nb7b, x: 184, y: 106 }
      - { id: nb8a, x: 154, y: 138 }
      - { id: nb8b, x: 162, y: 172 }
      - { id: nb9a, x: 206, y: 106 }
      - { id: nb9b, x: 224, y: 128 }
      - { id: nb10a, x: 230, y: 48 }
      - { id: nb10b, x: 226, y: 66 }
      - { id: nb11a, x: 226, y: 76 }
      - { id: nb11b, x: 250, y: 86 }
      - { id: nb12a, x: 256, y: 94 }
      - { id: nb12b, x: 246, y: 124 }
      - { id: nb13a, x: 250, y: 144 }
      - { id: nb13b, x: 284, y: 152 }
      - { id: nb14a, x: 230, y: 158 }
      - { id: nb14b, x: 232, y: 188 }
      - { id: nb15a, x: 332, y: 38 }
      - { id: nb15b, x: 332, y: 56 }
      - { id: nb16a, x: 368, y: 66 }
      - { id: nb16b, x: 374, y: 90 }
      - { id: nb17a, x: 390, y: 112 }
      - { id: nb17b, x: 390, y: 132 }
      - { id: nb18a, x: 332, y: 146 }
      - { id: nb18b, x: 332, y: 176 }
    edges:
      - { id: nb1, from: nb1a, to: nb1b }
      - { id: nb2, from: nb2a, to: nb2b }
      - { id: nb3, from: nb3a, to: nb3b }
      - { id: nb4, from: nb4a, to: nb4b }
      - { id: nb5, from: nb5a, to: nb5b }
      - { id: nb6, from: nb6a, to: nb6b }
      - { id: nb7, from: nb7a, to: nb7b }
      - { id: nb8, from: nb8a, to: nb8b }
      - { id: nb9, from: nb9a, to: nb9b }
      - { id: nb10, from: nb10a, to: nb10b }
      - { id: nb11, from: nb11a, to: nb11b }
      - { id: nb12, from: nb12a, to: nb12b }
      - { id: nb13, from: nb13a, to: nb13b }
      - { id: nb14, from: nb14a, to: nb14b }
      - { id: nb15, from: nb15a, to: nb15b }
      - { id: nb16, from: nb16a, to: nb16b }
      - { id: nb17, from: nb17a, to: nb17b }
      - { id: nb18, from: nb18a, to: nb18b }
source:
  type: original
  work: Informatik-Biber 2015
  year: 2015
  page: 21
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2015/Biberheft2015-mit-Loesungen.pdf
  country: CZ
  license: CC BY-SA 3.0
---
Die Biber wollen den Fluss durch ein System von Dämmen aufstauen, so dass kein Wasser mehr fließt. Dabei helfen ihnen die Inseln, die im Fluss liegen.

Der Plan zeigt alle Stellen, wo ein Damm gebaut werden kann. Neben jeder Stelle steht, wie viele Baumstämme dort für den Damm gebraucht werden.

**Zeige den Bibern, wie sie mit möglichst wenigen Baumstämmen den Fluss aufstauen können!** Klicke im Plan auf die Stellen, wo die Biber einen Damm bauen sollen.
