---
short: sVp8
title: Hände schütteln
summary: Nach einer Partie Hurling schütteln sich zwei Mannschaften mit je 15 Spielern die Hände. Wie lange dauert das?
grades:
  "7-8": hard
  "9-10": medium
  "11-13": easy
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [algorithm-analysis, parallelism]
methods: []
mascot: beaver
interaction:
  format: input
  props:
    kind: number
    suffix: Sekunden
source:
  type: original
  work: Informatik-Biber 2016
  year: 2016
  page: 32
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2016/Biberheft2016-mit-Loesungen.pdf
  country: IE
  license: CC BY-SA 3.0
---
Biber spielen gerne das irische Spiel Hurling. Am Schluss einer Partie Hurling stellen sich beide Mannschaften hintereinander in einer Reihe auf. Dann laufen die Spieler aneinander vorbei, schütteln sich nach und nach die Hände und sagen „Danke für das Spiel!“.

![Zwei Mannschaften laufen in entgegengesetzte Richtungen aneinander vorbei; die ersten Spieler stehen sich gegenüber](./img/teams.png)

Das Händeschütteln geht so: Zuerst schütteln sich die beiden ersten Spieler die Hände. Dann schütteln die ersten Spieler den zweiten Spielern der jeweils anderen Mannschaft die Hände (siehe Bild). Dies geht so weiter, bis auch die beiden letzten Spieler sich die Hände geschüttelt haben.

Beim Hurling gibt es 15 Spieler pro Mannschaft. Dass zwei Spieler sich die Hände schütteln und zum jeweils nächsten Spieler gehen, dauert 1 Sekunde.

**Wie viele Sekunden dauert das Händeschütteln der beiden Mannschaften insgesamt?**
