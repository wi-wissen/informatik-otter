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
  format: choice
  props:
    columns: 5
    options:
      - { id: "1", label: Gang 1 }
      - { id: "2", label: Gang 2 }
      - { id: "3", label: Gang 3 }
      - { id: "4", label: Gang 4 }
      - { id: "5", label: Gang 5 }
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

![Fünf nummerierte lange Gänge mit kurzen Quergängen; der Käse liegt unten im Gang 5](./img/maze.png)

**In welchen langen Gang muss die Maus hineinlaufen, damit sie zum Käse kommt?**
