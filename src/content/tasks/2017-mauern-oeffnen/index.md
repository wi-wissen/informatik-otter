---
short: DmW3
title: Mauern öffnen
summary: Peter will zum Schatz und muss dafür Mauern öffnen. Wie wenige Mauern genügen?
grades:
  "3-4": hard
  "7-8": medium
  "9-10": easy
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [graphs, optimization]
methods: [bfs]
mascot: beaver
interaction:
  format: custom
  props:
    map: ["#.####.", ".#..##.", ".##..##", "#.##...", ".##.#.#"]
    start: [4, 0]
    treasure: [0, 6]
source:
  type: original
  work: Informatik-Biber 2017
  year: 2017
  page: 41
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2017/Biberheft2017-mit-Loesungen.pdf
  country: SK
  license: CC BY-SA 4.0
---
Eine Schatzkarte ist in Felder eingeteilt. Peter ist im Feld links unten und will zum Schatz rechts oben. Er kann immer zum nächsten Nachbarfeld gehen: nach oben, unten, rechts und links – aber nicht schräg.

Peter muss alle Mauern auf seinem Weg zum Schatz öffnen. Das ist anstrengend! Er sucht deshalb einen Weg, auf dem er möglichst wenige Mauern öffnen muss.

**Finde diesen Weg!** Entferne möglichst wenige Mauern, so dass ein Weg zum Schatz frei wird. Klicke auf ein Mauerfeld, um die Mauer zu öffnen. Klicke erneut auf das Mauerfeld, um die Mauer wieder zu schließen.
