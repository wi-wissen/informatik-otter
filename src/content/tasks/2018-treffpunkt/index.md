---
short: 7X53
title: Treffpunkt
summary: Roller, Fahrrad und Skateboard wollen sich treffen. An welcher der vier Kreuzungen müssen sie insgesamt die wenigsten Straßen fahren?
grades:
  "9-10": medium
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [graphs, optimization]
methods: [brute-force]
mascot: beaver
interaction:
  format: graph-pick
  props:
    pick: nodes
    width: 258
    height: 253
    background: ./img/map.png
    hideNodes: true
    nodeRadius: 13
    nodes:
      - { id: red, x: 98, y: 97 }
      - { id: blue, x: 129, y: 125 }
      - { id: green, x: 160, y: 126 }
      - { id: yellow, x: 160, y: 157 }
    edges: []
source:
  type: original
  work: Informatik-Biber 2018
  year: 2018
  page: 58
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2018/Biberheft2018-mit-Loesungen.pdf
  country: VN
  license: CC BY-SA 4.0
---
Drei Freunde wollen sich treffen. Sie starten mit ihren Fahrzeugen (Roller, Fahrrad und Skateboard) an verschiedenen Kreuzungen. Zwischen zwei Kreuzungen fahren sie immer den kürzesten Weg, über die Straßen zwischen den Kreuzungen.

Ein Beispiel: Zur Kreuzung mit dem blauen Dreieck muss der Roller 4 Straßen fahren.

Die Freunde können sich an den Kreuzungen mit dem roten Quadrat, dem blauen Dreieck, dem grünen Kreis oder der gelben Raute treffen. Der beste Treffpunkt ist der, zu dem sie insgesamt möglichst wenig Straßen fahren müssen.

![Ein Stadtplan mit Straßengitter: oben der Roller, links das Fahrrad, unten rechts das Skateboard; in der Mitte das rote Quadrat, das blaue Dreieck, der grüne Kreis und die gelbe Raute](./img/map.png)

**Was ist der beste Treffpunkt?**

Klicke auf die richtige Kreuzung.
