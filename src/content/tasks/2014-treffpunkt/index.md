---
short: 1prM
title: Treffpunkt
summary: Drei Freunde wohnen an verschiedenen U-Bahn-Haltestellen und wollen sich treffen – jeder mit höchstens 15 Minuten Fahrzeit. Wo?
grades:
  "9-10": hard
  "11-13": medium
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [graphs]
methods: [dijkstra]
mascot: beaver
interaction:
  format: graph-pick
  props:
    pick: nodes
    width: 307.2
    height: 182
    background: ./img/map.png
    hideNodes: true
    nodeRadius: 11
    nodes:
      - { id: upleft, x: 44.0, y: 38.8 }
      - { id: n1, x: 16.0, y: 64.0 }
      - { id: ashborn, x: 115.2, y: 64.0 }
      - { id: north, x: 184.0, y: 42.8 }
      - { id: upton, x: 219.2, y: 48.4 }
      - { id: central, x: 195.6, y: 68.0 }
      - { id: best, x: 259.6, y: 62.8 }
      - { id: west, x: 24.0, y: 108.0 }
      - { id: market, x: 80.0, y: 112.0 }
      - { id: park, x: 148.0, y: 108.0 }
      - { id: n2, x: 210.8, y: 115.6 }
      - { id: outbound, x: 255.6, y: 104.8 }
      - { id: corner, x: 72.0, y: 160.0 }
      - { id: downing, x: 95.6, y: 146.8 }
      - { id: middlebottom, x: 159.6, y: 152.0 }
      - { id: lowright, x: 209.2, y: 144.4 }
    edges: []
source:
  type: original
  work: Informatik-Biber 2014
  year: 2014
  page: 50
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2014/Biberheft2014-mit-Loesungen.pdf
  license: CC BY-NC-SA 3.0
---
Anne, Bernie und Clara wohnen in einer Stadt mit einem gut ausgebauten U-Bahn-Netz. Der Netzplan (siehe Bild) zeigt Haltestellen und die Strecken zwischen den Haltestellen. Für jede Strecke ist angegeben, wie viele Minuten reine Fahrzeit man für die Strecke benötigt.

Anne wohnt bei der Haltestelle Ashborn, Bernie bei Best und Clara bei Corner. Sie wollen sich an irgendeiner Haltestelle treffen, aber jeder möchte höchstens 15 Minuten reine Fahrzeit benötigen.

**Welche Haltestellen kommen als Treffpunkt in Frage? Klicke alle diese Haltestellen im Netzplan an.**
