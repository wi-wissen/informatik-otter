---
short: WvX2
title: Bienenstock
summary: Eine Biene soll mit genau fünf Bewegungen durch den Bienenstock zur Larve finden.
grades:
  "5-6": easy
gi:
  content: [algorithms]
  process: [modelling]
topics: [graphs, optimization]
methods: []
mascot: beaver
interaction:
  format: command-sequence
  props:
    maxLength: 5
    commands:
      - { id: r, label: "→ rechts" }
      - { id: l, label: "← links" }
      - { id: ur, label: "↗ rechts oben" }
      - { id: ul, label: "↖ links oben" }
      - { id: dr, label: "↘ rechts unten" }
      - { id: dl, label: "↙ links unten" }
source:
  type: original
  work: Informatik-Biber 2013
  year: 2013
  page: 5
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2013/Biberheft2013-mit-Loesungen.pdf
  license: CC BY-NC-SA 3.0
---
Die Biene soll der Larve Futter bringen.

Im Bienenstock kann die Biene sich von einer Wabe (Sechseck) zur nächsten bewegen. An manchen Stellen versperren ihr dicke braune Wände den Weg.

![Der Bienenstock: Die Biene sitzt in der obersten Reihe ganz links, die Larve in der untersten Reihe ganz rechts. Dicke braune Wände trennen einige Waben.](./img/grid.png)

Die Biene braucht 5 Bewegungen, um zur Larve zu kommen. Die vierte Bewegung steht schon fest: Sie führt nach rechts unten.

**Zeige der Biene mit den Pfeilen einen Weg zur Larve!** Wähle fünf Pfeile; der vierte muss „rechts unten“ sein.
