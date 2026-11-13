---
short: 6FSX
title: Entdecke Seoul!
summary: Mit einer Fahrkarte für höchstens 10 Kilometer möglichst viele Sterne sammeln.
grades:
  "7-8": hard
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [graphs, optimization]
methods: [dfs, brute-force]
mascot: beaver
interaction:
  format: graph-pick
  props:
    pick: edges
    width: 421
    height: 232
    background: ./img/map.png
    hideNodes: true
    nodes:
      - { id: A, x: 38, y: 126, label: Palast }
      - { id: B, x: 124, y: 52, label: Hanok-Dorf }
      - { id: C, x: 124, y: 206, label: Rathaus }
      - { id: D, x: 202, y: 132, label: Museum }
      - { id: E, x: 294, y: 48, label: Markt }
      - { id: F, x: 288, y: 200, label: Stadttor }
      - { id: G, x: 375, y: 138, label: Fernsehturm }
    edges:
      - { id: AB, from: A, to: B }
      - { id: AD, from: A, to: D }
      - { id: AC, from: A, to: C }
      - { id: BE, from: B, to: E }
      - { id: DG, from: D, to: G }
      - { id: DF, from: D, to: F }
      - { id: CF, from: C, to: F }
      - { id: EG, from: E, to: G }
      - { id: FG, from: F, to: G }
source:
  type: original
  work: Informatik-Biber 2025
  year: 2025
  page: 35
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2025/Biberheft_2025_web_komplett.pdf
  country: KR
  license: CC BY-SA 4.0
---
In Seoul in Korea gibt es Busse für Touristen, die Sehenswürdigkeiten miteinander verbinden. Das Bild zeigt die wichtigsten Sehenswürdigkeiten. Die Sterne sagen, wie beliebt die Sehenswürdigkeiten sind. Die Linien zeigen die Busverbindungen. An jeder Linie steht, wie viele Kilometer die Verbindung lang ist.

Lotte besucht zuerst den **Palast** (ganz links). Von dort aus möchte sie mit den Bussen weitere Sehenswürdigkeiten besuchen. Lotte hat eine Fahrkarte, mit der sie höchstens **10 Kilometer** weit fahren kann. Damit möchte sie über die Verbindungen Sehenswürdigkeiten erreichen, die insgesamt möglichst viele Sterne haben! Sie besucht eine Sehenswürdigkeit natürlich nur einmal und muss nicht zum Palast zurück.

**Welche Verbindungen muss Lotte mit ihrer Fahrkarte fahren, um möglichst viele Sterne zu sammeln?**
