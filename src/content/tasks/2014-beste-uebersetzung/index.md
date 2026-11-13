---
short: MAS3
title: Beste Übersetzung
summary: Welche Folge von Zeichen übersetzt einen Satz am besten? Die Passzahlen zwischen den Zeichen entscheiden.
grades:
  "9-10": hard
  "11-13": hard
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [optimization, graphs]
methods: [dynamic-programming]
mascot: beaver
interaction:
  format: graph-pick
  props:
    pick: nodes
    width: 388.6
    height: 197
    background: ./img/diagram.png
    hideNodes: true
    nodeRadius: 12
    nodes:
      - { id: a1, x: 22, y: 75 }
      - { id: a2, x: 22, y: 112 }
      - { id: a3, x: 22, y: 153 }
      - { id: b1, x: 95, y: 52 }
      - { id: b2, x: 95, y: 91 }
      - { id: b3, x: 95, y: 137 }
      - { id: b4, x: 95, y: 177 }
      - { id: c1, x: 175, y: 70 }
      - { id: c2, x: 175, y: 111 }
      - { id: c3, x: 175, y: 151 }
      - { id: d1, x: 266, y: 40 }
      - { id: d2, x: 266, y: 72 }
      - { id: d3, x: 266, y: 110 }
      - { id: d4, x: 266, y: 145 }
      - { id: d5, x: 266, y: 179 }
      - { id: e1, x: 369, y: 84 }
      - { id: e2, x: 369, y: 159 }
    edges: []
source:
  type: original
  work: Informatik-Biber 2014
  year: 2014
  page: 8
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2014/Biberheft2014-mit-Loesungen.pdf
  license: CC BY-NC-SA 3.0
---
Betty erforscht, wie deutsche Sätze in eine uralte Zeichensprache übersetzt werden. Jedes Wort wird in ein Zeichen übersetzt. Dabei gibt es meist mehrere Möglichkeiten. Deshalb berücksichtigt Betty, welche Zeichen in der Übersetzung aufeinander folgen.

Betty bereitet die Übersetzung eines Satzes gründlich vor: Zunächst malt sie unter jedem Wort auf, in welche Zeichen sie das Wort übersetzen kann. Außerdem verbindet sie Zeichenpaare, die in der Übersetzung aufeinander folgen können, mit Pfeilen und gibt mit „Passzahlen“ an, wie gut die beiden Zeichen zueinander passen.

Die beste Übersetzung ist nun die Folge von Zeichen, bei der die Summe der Passzahlen aller aufeinander folgenden Zeichenpaare möglichst groß ist.

Für die Übersetzung des Satzes „Heute essen wir wieder Fisch.“ hat Betty alles vorbereitet.

**Bestimme die beste Übersetzung! Klicke dazu unter jedem Wort das Zeichen an, das in der besten Übersetzung vorkommt.**
