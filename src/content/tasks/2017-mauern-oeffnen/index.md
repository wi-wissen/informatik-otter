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
  format: pixel-grid
  props:
    rows: 5
    cols: 7
    palette: ["#d0d0d0", "#7a4a35"]
    initial:
      - [1, 0, 1, 1, 1, 1, 0]
      - [0, 1, 0, 0, 1, 1, 0]
      - [0, 1, 1, 0, 0, 1, 1]
      - [1, 0, 1, 1, 0, 0, 0]
      - [0, 1, 1, 0, 1, 0, 1]
    locked:
      - [false, false, false, false, false, false, true]
      - [false, false, false, false, false, false, false]
      - [false, false, false, false, false, false, false]
      - [false, false, false, false, false, false, false]
      - [true, false, false, false, false, false, false]
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

![Die Schatzkarte mit 7 Spalten und 5 Zeilen. Braune Felder sind Mauern, graue Felder sind frei. Peter steht unten links, der Schatz liegt oben rechts.](./img/map.png)

Peter muss alle Mauern auf seinem Weg zum Schatz öffnen. Das ist anstrengend! Er sucht deshalb einen Weg, auf dem er möglichst wenige Mauern öffnen muss.

**Finde diesen Weg!** Entferne möglichst wenige Mauern, so dass ein Weg zum Schatz frei wird. Klicke auf ein braunes Mauerfeld im Raster unten, um die Mauer zu öffnen. Klicke erneut auf das Feld, um die Mauer wieder zu schließen. Das Raster entspricht der Karte; Peters Feld (unten links) und das Schatzfeld (oben rechts) sind gesperrt.
