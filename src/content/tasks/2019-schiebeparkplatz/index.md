---
short: RhA8
title: Schiebeparkplatz
summary: Auf dem Parkplatz stehen manche Wagen quer vor anderen. Welcher Wagen ist gleich doppelt blockiert?
grades:
  "5-6": hard
  "7-8": medium
  "9-10": easy
gi:
  content: [systems]
  process: [modelling, reasoning]
topics: [modelling, ai]
methods: []
mascot: beaver
interaction:
  format: graph-pick
  props:
    pick: nodes
    width: 524
    height: 131
    background: ./img/lot.png
    hideNodes: true
    nodeRadius: 17
    nodes:
      - { id: A, x: 38.6, y: 54, label: Wagen A }
      - { id: B, x: 77, y: 54, label: Wagen B }
      - { id: C, x: 113.7, y: 54, label: Wagen C }
      - { id: D, x: 150.4, y: 54, label: Wagen D }
      - { id: E, x: 187, y: 54, label: Wagen E }
      - { id: F, x: 224, y: 54, label: Wagen F }
      - { id: G, x: 260.6, y: 54, label: Wagen G }
      - { id: H, x: 299, y: 54, label: Wagen H }
      - { id: I, x: 334, y: 54, label: Wagen I }
      - { id: J, x: 371, y: 54, label: Wagen J }
      - { id: K, x: 407, y: 54, label: Wagen K }
      - { id: L, x: 444, y: 54, label: Wagen L }
      - { id: Q, x: 481, y: 54, label: Wagen Q }
      - { id: P, x: 92, y: 100, label: Wagen P }
      - { id: O, x: 240, y: 100, label: Wagen O }
      - { id: N, x: 310, y: 100, label: Wagen N }
      - { id: M, x: 422, y: 100, label: Wagen M }
    edges: []
source:
  type: original
  work: Informatik-Biber 2019
  year: 2019
  page: 43
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2019/Biberheft2019-mit-Loesungen.pdf
  country: DE
  license: CC BY-SA 4.0
---
Auf dem „Schiebeparkplatz“ in Tübingen darf man Wagen auch quer vor den normalen Plätzen abstellen. Ein quer stehender Wagen, der einen anderen Wagen blockiert, wird vorsichtig vorwärts oder rückwärts verschoben. Dann kann der blockierte Wagen ausfahren.

Das Bild zeigt ein Beispiel: Wagen A wird nicht blockiert und kann ausfahren. Wagen L wird blockiert. Wenn Wagen M verschoben wird, kann Wagen L ausfahren. Im Beispiel wird ein Wagen zweifach blockiert: Zwei andere Wagen müssen verschoben werden, damit er ausfahren kann.

![Ein Parkplatz mit den längs stehenden Wagen A, B, C, D, E, F, G, H, I, J, K, L und Q in einer Reihe. Davor stehen quer die Wagen P, O, N und M. P steht vor B und C, O vor F und G, N vor H und I und M vor K und L.](./img/lot.png)

**Welcher Wagen wird zweifach blockiert?** Klicke ihn an.
