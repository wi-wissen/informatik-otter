---
short: Zk6P
title: Ferienhaus 29
summary: Milo soll ein Ferienhaus ohne Nummer finden und ihm die Nummer 29 geben. An jeder Kreuzung entscheidet ein einfacher Vergleich.
grades:
  "7-8": hard
  "9-10": easy
gi:
  content: [information-data]
  process: [structuring, reasoning]
topics: [trees, searching, data-structures]
methods: [binary-tree, binary-search]
mascot: beaver
interaction:
  format: graph-pick
  props:
    pick: nodes
    width: 523
    height: 241
    background: ./img/map.png
    hideNodes: true
    nodeRadius: 20
    nodes:
      - { id: n17, x: 55, y: 96 }
      - { id: n24, x: 141, y: 117 }
      - { id: n34, x: 186, y: 71 }
      - { id: n50, x: 273, y: 142 }
      - { id: n59, x: 331, y: 76 }
      - { id: n61, x: 374, y: 121 }
      - { id: n64, x: 455, y: 91 }
      - { id: u1, x: 37, y: 24 }
      - { id: u2, x: 90, y: 55 }
      - { id: u3, x: 140, y: 17 }
      - { id: u4, x: 226, y: 27 }
      - { id: u5, x: 287, y: 44 }
      - { id: u6, x: 361, y: 16 }
      - { id: u7, x: 423, y: 46 }
      - { id: u8, x: 482, y: 18 }
    edges: []
source:
  type: original
  work: Informatik-Biber 2018
  year: 2018
  page: 30
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2018/Biberheft2018-mit-Loesungen.pdf
  country: SK
  license: CC BY-SA 4.0
---
Milo arbeitet in einer Ferienhaus-Siedlung. Einige Ferienhäuser haben noch keine Nummern. Eines davon soll die neue Nummer 29 bekommen. Das soll Milo erledigen.

Milo startet bei Haus 50. Von einem Haus mit Nummer geht er

- nach links, wenn dessen Nummer größer ist als die neue Nummer.
- nach rechts, wenn dessen Nummer kleiner ist als die neue Nummer.

Sobald er zu einem Haus ohne Nummer gelangt, bekommt dieses die neue Nummer 29.

**Welches Ferienhaus bekommt die Nummer 29?**

![Eine Siedlung mit Wegen, die sich wie ein Baum verzweigen: Haus 50 unten in der Mitte, links davon 24 und 17, rechts 61, 59 und 64, dazu Haus 34; alle anderen Häuser haben noch keine Nummer](./img/map.png)

Klicke auf das richtige Haus.
