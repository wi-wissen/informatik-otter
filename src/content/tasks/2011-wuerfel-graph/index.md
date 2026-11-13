---
short: 9sML
title: Würfel-Graph
summary: Ein Spielwürfel soll als Graph gezeichnet werden. Welcher der vier Graphen passt?
grades:
  "7-8": hard
  "9-10": medium
gi:
  content: [information-data, algorithms]
  process: [modelling, representing]
topics: [graphs, modelling]
methods: []
mascot: beaver
interaction:
  format: choice
  props:
    columns: 4
    options:
      - { id: a, image: ./img/graph-a.png, alt: "Graph A: sechs Knoten 1 bis 6, verbunden zu einem Sechsstern" }
      - { id: b, image: ./img/graph-b.png, alt: "Graph B: sechs Knoten 1 bis 6 mit mehreren Verbindungslinien" }
      - { id: c, image: ./img/graph-c.png, alt: "Graph C: sechs Knoten 1 bis 6 mit mehreren Verbindungslinien" }
      - { id: d, image: ./img/graph-d.png, alt: "Graph D: sechs Knoten 1 bis 6 mit mehreren Verbindungslinien" }
source:
  type: original
  work: Informatik-Biber 2011
  year: 2011
  page: 41
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2011/Biberheft2011-mit-Loesungen.pdf
  license: CC BY-NC-SA 3.0 DE
---
Ein Spielwürfel hat 6 Seiten. Auf den Würfelseiten sind schwarze Punkte, die Würfelaugen. Die Augenzahlen gehen von 1 bis 6, jede kommt nur einmal vor.

Die Summe von gegenüberliegenden Augenzahlen ist stets 7.

Ein Spielwürfel kann als „Graph“ dargestellt werden. Ein Graph hat Knoten und Kanten. Die Knoten stellen die Seiten des Würfels dar, mit den Augenzahlen in kleinen Kreisen. Die Kanten stellen mit Linien dar, welche Seiten des Würfels aneinander grenzen.

![Ein Spielwürfel mit den sichtbaren Seiten 1 (oben), 3 (links) und 5 (rechts)](./img/wuerfel.png)

**Welcher Graph entspricht einem Spielwürfel?**
