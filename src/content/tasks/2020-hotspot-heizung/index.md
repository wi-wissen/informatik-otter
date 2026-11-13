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
methods: []
mascot: beaver
interaction:
  format: pixel-grid
  props:
    rows: 5
    cols: 15
    palette: ["#68c3b3", "#e53935", "#ffffff"]
    initial: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2], [2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2]]
    locked: [[false, false, false, false, false, false, false, false, false, true, true, true, true, true, true], [true, true, true, true, true, false, false, false, false, false, false, false, false, false, false], [true, true, true, true, true, false, false, false, false, false, false, false, false, false, false], [true, true, true, true, true, false, false, false, false, false, false, false, false, false, false], [false, false, false, false, false, false, false, false, false, true, true, true, true, true, true]]
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

Hier ist das neue Bad (die weißen Felder gehören nicht zum Bad). Wähle die rote Farbe und tippe die Fliesen an, unter denen du einen Hotspot montieren willst.

![Das Bad: oben und unten je ein Gang aus 9 Fliesen, dazwischen rechts ein Block aus 3 mal 10 Fliesen](./img/bath.png)

**Montiere die 4 Hotspots so, dass Luis' Wunsch erfüllt wird.**
