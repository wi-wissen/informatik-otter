---
short: dq1k
title: Hotspot-Heizung
summary: Luis lässt vier Heizungs-Hotspots in den Boden seines Bades einbauen. Wo sollen sie sitzen, damit es schnell warm wird?
grades:
  "7-8": hard
  "9-10": medium
  "11-13": easy
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [graphs, optimization]
methods: [dominating-set]
mascot: beaver
interaction:
  format: graph-pick
  props:
    pick: nodes
    width: 471.1
    height: 158.7
    background: ./img/bath.png
    nodeRadius: 9
    nodes:
      - { id: r0c0, x: 17.6, y: 17.5 }
      - { id: r0c1, x: 48.7, y: 17.5 }
      - { id: r0c2, x: 79.8, y: 17.5 }
      - { id: r0c3, x: 111.0, y: 17.5 }
      - { id: r0c4, x: 142.1, y: 17.5 }
      - { id: r0c5, x: 173.3, y: 17.5 }
      - { id: r0c6, x: 204.4, y: 17.5 }
      - { id: r0c7, x: 235.6, y: 17.5 }
      - { id: r0c8, x: 266.7, y: 17.5 }
      - { id: r1c5, x: 173.3, y: 48.4 }
      - { id: r1c6, x: 204.4, y: 48.4 }
      - { id: r1c7, x: 235.6, y: 48.4 }
      - { id: r1c8, x: 266.7, y: 48.4 }
      - { id: r1c9, x: 297.8, y: 48.4 }
      - { id: r1c10, x: 329.0, y: 48.4 }
      - { id: r1c11, x: 360.1, y: 48.4 }
      - { id: r1c12, x: 391.2, y: 48.4 }
      - { id: r1c13, x: 422.4, y: 48.4 }
      - { id: r1c14, x: 453.5, y: 48.4 }
      - { id: r2c5, x: 173.3, y: 79.3 }
      - { id: r2c6, x: 204.4, y: 79.3 }
      - { id: r2c7, x: 235.6, y: 79.3 }
      - { id: r2c8, x: 266.7, y: 79.3 }
      - { id: r2c9, x: 297.8, y: 79.3 }
      - { id: r2c10, x: 329.0, y: 79.3 }
      - { id: r2c11, x: 360.1, y: 79.3 }
      - { id: r2c12, x: 391.2, y: 79.3 }
      - { id: r2c13, x: 422.4, y: 79.3 }
      - { id: r2c14, x: 453.5, y: 79.3 }
      - { id: r3c5, x: 173.3, y: 110.3 }
      - { id: r3c6, x: 204.4, y: 110.3 }
      - { id: r3c7, x: 235.6, y: 110.3 }
      - { id: r3c8, x: 266.7, y: 110.3 }
      - { id: r3c9, x: 297.8, y: 110.3 }
      - { id: r3c10, x: 329.0, y: 110.3 }
      - { id: r3c11, x: 360.1, y: 110.3 }
      - { id: r3c12, x: 391.2, y: 110.3 }
      - { id: r3c13, x: 422.4, y: 110.3 }
      - { id: r3c14, x: 453.5, y: 110.3 }
      - { id: r4c0, x: 17.6, y: 141.2 }
      - { id: r4c1, x: 48.7, y: 141.2 }
      - { id: r4c2, x: 79.8, y: 141.2 }
      - { id: r4c3, x: 111.0, y: 141.2 }
      - { id: r4c4, x: 142.1, y: 141.2 }
      - { id: r4c5, x: 173.3, y: 141.2 }
      - { id: r4c6, x: 204.4, y: 141.2 }
      - { id: r4c7, x: 235.6, y: 141.2 }
      - { id: r4c8, x: 266.7, y: 141.2 }
source:
  type: original
  work: Informatik-Biber 2020
  year: 2020
  page: 30
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2020/Biberheft_2020_final_mit_Loesungen.pdf
  country: PK
  license: CC BY-SA 4.0
---
Luis mag es warm im Bad. In sein neues Haus lässt er eine Bodenheizung mit Hotspots einbauen.

Ein Hotspot wird direkt unter einer Fliese montiert. Schaltet man den Hotspot ein, wird diese Fliese sofort warm. Von einer warmen Fliese breitet sich die Wärme in einer Minute auf alle benachbarten Fliesen aus – seitlich und über Eck.

Hier ist ein Beispiel. Die Zahlen sagen für jede Fliese, nach wie vielen Minuten sie warm ist.

![Beispiel: Ein Hotspot unten rechts. Die Fliesen daneben zeigen 1, die übernächsten 2, die weiter entfernten 3 Minuten](./img/example.png)

Luis kann sich 4 Hotspots leisten. Luis wünscht, dass nach möglichst wenigen Minuten alle Fliesen im Bad warm sind. Die Hotspots werden gleichzeitig angeschaltet.

Hier ist das neue Bad. Tippe die Fliesen an, unter denen du einen Hotspot montieren willst.

**Montiere die 4 Hotspots so, dass Luis' Wunsch erfüllt wird.**
