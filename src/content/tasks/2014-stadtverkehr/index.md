---
short: 1R1z
title: Stadtverkehr
summary: Ein Taxifahrer merkt sich in einer Tabelle, wo er welche Straße befahren darf. Wie sieht die Tabelle für Beavertown aus?
grades:
  "5-6": hard
gi:
  content: [information-data]
  process: [modelling, representing]
topics: [graphs, modelling]
methods: [adjacency-matrix]
mascot: beaver
interaction:
  format: hotspots
  props:
    background: ./img/empty-table.png
    width: 141.3
    height: 142.5
    spotSize: 20
    spots:
      - { id: ab, label: "Von A nach B", x: 60.4, y: 37.1, w: 21, h: 21 }
      - { id: ac, label: "Von A nach C", x: 83.1, y: 37.1, w: 21, h: 21 }
      - { id: ad, label: "Von A nach D", x: 105.9, y: 37.1, w: 21, h: 21 }
      - { id: ae, label: "Von A nach E", x: 128.6, y: 37.1, w: 21, h: 21 }
      - { id: ba, label: "Von B nach A", x: 37.6, y: 59.9, w: 21, h: 21 }
      - { id: bc, label: "Von B nach C", x: 83.1, y: 59.9, w: 21, h: 21 }
      - { id: bd, label: "Von B nach D", x: 105.9, y: 59.9, w: 21, h: 21 }
      - { id: be, label: "Von B nach E", x: 128.6, y: 59.9, w: 21, h: 21 }
      - { id: ca, label: "Von C nach A", x: 37.6, y: 82.6, w: 21, h: 21 }
      - { id: cb, label: "Von C nach B", x: 60.4, y: 82.6, w: 21, h: 21 }
      - { id: cd, label: "Von C nach D", x: 105.9, y: 82.6, w: 21, h: 21 }
      - { id: ce, label: "Von C nach E", x: 128.6, y: 82.6, w: 21, h: 21 }
      - { id: da, label: "Von D nach A", x: 37.6, y: 105.4, w: 21, h: 21 }
      - { id: db, label: "Von D nach B", x: 60.4, y: 105.4, w: 21, h: 21 }
      - { id: dc, label: "Von D nach C", x: 83.1, y: 105.4, w: 21, h: 21 }
      - { id: de, label: "Von D nach E", x: 128.6, y: 105.4, w: 21, h: 21 }
      - { id: ea, label: "Von E nach A", x: 37.6, y: 128.1, w: 21, h: 21 }
      - { id: eb, label: "Von E nach B", x: 60.4, y: 128.1, w: 21, h: 21 }
      - { id: ec, label: "Von E nach C", x: 83.1, y: 128.1, w: 21, h: 21 }
      - { id: ed, label: "Von E nach D", x: 105.9, y: 128.1, w: 21, h: 21 }
    states:
      - { id: empty, label: "" }
      - { id: check, label: Häkchen, image: ./img/check.png }
source:
  type: original
  work: Informatik-Biber 2014
  year: 2014
  page: 44
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2014/Biberheft2014-mit-Loesungen.pdf
  license: CC BY-NC-SA 3.0
---
In Beaver Springs wurde neulich die Pine Street zur Einbahnstraße gemacht. Nun muss Jack, der einzige Taxifahrer in der Gegend, sich neu merken, wie er von einem Ort zum anderen kommt. Für die drei Knotenpunkte 1, 2 und 3 legt Jack die folgende Tabelle an. Er setzt Häkchen in einige Felder der Tabelle, um sich zu merken, in welche Richtungen er welche Straßen befahren darf.

![Die Orte 1, 2 und 3: Beaver Ave verbindet 1 und 2 in beiden Richtungen, die Pine St führt als Einbahnstraße von 2 nach 3](./img/springs.png)

![Tabelle mit Häkchen in den Feldern (1,2), (2,1) und (2,3)](./img/example-table.png)

Auch im Nachbarort Beavertown wurden einige Straßen zu Einbahnstraßen gemacht.

![Karte von Beavertown mit den Knotenpunkten A bis E. E Walnut St führt als Einbahnstraße von B nach A, N Sassafras St als Einbahnstraße von B nach D, Plum Ln als Einbahnstraße von B nach C. Center St (A–E) und Mulberry Alley (E–D–C) sind in beiden Richtungen befahrbar](./img/town.png)

Jack braucht also auch für Beavertown eine Tabelle mit Häkchen.

Hier siehst du die leere Tabelle für Beavertown.

**Setze die Häkchen in die richtigen Felder!** Klicke dazu auf die Felder.
