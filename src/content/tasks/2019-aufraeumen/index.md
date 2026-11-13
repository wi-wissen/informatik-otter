---
short: y75k
title: Aufräumen
summary: Ein Roboter sammelt Müll im Park immer das nächstgelegene Ding auf. Was kommt zum Schluss dran?
grades:
  "3-4": medium
  "5-6": easy
gi:
  content: [algorithms]
  process: [modelling]
topics: [programming, graphs]
methods: [greedy]
mascot: beaver
interaction:
  format: graph-pick
  props:
    pick: nodes
    width: 545
    height: 422
    background: ./img/meadow.png
    hideNodes: true
    nodeRadius: 24
    nodes:
      - { id: paper1, x: 129, y: 129, label: Papier oben links }
      - { id: apple1, x: 228, y: 129, label: Apfelrest oben }
      - { id: cup1, x: 467, y: 207, label: Becher rechts }
      - { id: cup2, x: 131, y: 254, label: Becher neben dem Roboter }
      - { id: cup3, x: 204, y: 257, label: Becher in der Mitte }
      - { id: apple2, x: 294, y: 261, label: Apfelrest in der Mitte }
      - { id: paper2, x: 372, y: 301, label: Papier unten rechts }
      - { id: cup4, x: 133, y: 374, label: Becher unten links }
    edges: []
source:
  type: original
  work: Informatik-Biber 2019
  year: 2019
  page: 10
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2019/Biberheft2019-mit-Loesungen.pdf
  country: DE
  license: CC BY-SA 4.0
---
Nach dem Freilichtkonzert im Park sammelt der Roboter den Müll auf, den das Publikum auf dem Rasen zurückgelassen hat.

Der Roboter geht zu dem nächstgelegenen Ding, das auf dem Rasen herumliegt, und sammelt es auf. Dann geht er zu dem Ding, das jetzt am nächsten liegt, und sammelt es auf. So macht der Roboter immer weiter, bis er allen Müll aufgesammelt hat.

**Welches Ding sammelt der Roboter als letztes auf?** Klicke es an.
