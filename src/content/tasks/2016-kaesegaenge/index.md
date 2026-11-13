---
short: 1bRN
title: Käsegänge
summary: Eine Maus läuft abwechselnd einen langen Gang hinunter und durch einen Quergang. In welchen Gang muss sie starten, um zum Käse zu kommen?
grades:
  "3-4": hard
  "5-6": easy
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [programming]
methods: [sequence]
mascot: beaver
interaction:
  format: graph-pick
  props:
    pick: nodes
    max: 1
    width: 772
    height: 536
    background: ./img/maze.png
    hideNodes: true
    nodeRadius: 42
    nodes:
      - { id: g1, x: 53, y: 66, label: Gang 1 }
      - { id: g2, x: 214, y: 66, label: Gang 2 }
      - { id: g3, x: 382, y: 66, label: Gang 3 }
      - { id: g4, x: 541, y: 66, label: Gang 4 }
      - { id: g5, x: 710, y: 66, label: Gang 5 }
source:
  type: original
  work: Informatik-Biber 2016
  year: 2016
  page: 38
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2016/Biberheft2016-mit-Loesungen.pdf
  country: AT
  license: CC BY-SA 3.0
---
Eine Maus steht oben vor fünf langen Gängen. Zwischen den langen Gängen gibt es kurze Quergänge. Die Maus möchte zum Käse unten am Ende vom langen Gang ganz rechts.

Auf ihrem Weg durch die Gänge befolgt die Maus immer abwechselnd diese Anweisungen:

1. Laufe durch den langen Gang nach unten, bis ein Quergang kommt.
2. Laufe durch den Quergang.

**In welchen langen Gang muss die Maus hineinlaufen, damit sie zum Käse kommt?** Klicke im Bild auf den Gang. (Es sind fünf nummerierte lange Gänge; der Käse liegt unten im Gang 5.)
