---
short: V8sA
title: Geschäfte
summary: Jedes Dorf soll ein Geschäft erreichen, ohne durch ein anderes Dorf zu fahren. Wie wenige Geschäfte reichen?
grades:
  "7-8": medium
  "9-10": easy
gi:
  content: [information-data, algorithms]
  process: [modelling, reasoning]
topics: [graphs, optimization]
methods: []
mascot: beaver
interaction:
  format: graph-pick
  props:
    pick: nodes
    width: 174.8
    height: 193.6
    background: ./img/map.png
    nodeRadius: 9
    nodes:
      - { id: s1, x: 68.0, y: 30.8, label: "1" }
      - { id: s2, x: 106.0, y: 30.4, label: "2" }
      - { id: s3, x: 87.2, y: 49.2, label: "3" }
      - { id: s4, x: 68.0, y: 68.0, label: "4" }
      - { id: s5, x: 106.0, y: 68.0, label: "5" }
      - { id: s6, x: 68.0, y: 106.0, label: "6" }
      - { id: s7, x: 106.0, y: 106.0, label: "7" }
      - { id: s8, x: 30.8, y: 143.2, label: "8" }
      - { id: s9, x: 144.0, y: 143.2, label: "9" }
      - { id: s10, x: 49.2, y: 152.8, label: "10" }
      - { id: s11, x: 124.8, y: 152.4, label: "11" }
      - { id: s12, x: 87.2, y: 182.4, label: "12" }
source:
  type: original
  work: Informatik-Biber 2020
  year: 2020
  page: 29
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2020/Biberheft_2020_final_mit_Loesungen.pdf
  country: AT
  license: CC BY-SA 4.0
---
Eine Landgemeinde will die Versorgung ihrer Dörfer verbessern und dazu Geschäfte bauen.

Die Karte zeigt die Dörfer als grüne Punkte. An den Straßen zwischen den Dörfern (Linien) liegen Bauplätze für Geschäfte (Quadrate). Von jedem Dorf aus soll man ein Geschäft erreichen können, ohne durch ein anderes Dorf zu fahren. Diese Bedingung muss mit so wenig Geschäften wie möglich erfüllt werden.

**Auf welchen Bauplätzen müssen Geschäfte gebaut werden?** Tippe die Bauplätze an (nummeriert von oben nach unten).
