---
short: 5hvN
title: Wörterkette
summary: Jedes neue Wort muss mit dem letzten Buchstaben des vorigen beginnen. Wie lang kann die Kette aus neun Wörtern höchstens werden?
grades:
  "11-13": medium
gi:
  content: [information-data, algorithms]
  process: [modelling, reasoning]
topics: [graphs, optimization]
methods: [hamilton-path]
mascot: beaver
interaction:
  format: input
  props:
    kind: number
    suffix: Wörter
source:
  type: original
  work: Informatik-Biber 2018
  year: 2018
  page: 63
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2018/Biberheft2018-mit-Loesungen.pdf
  country: CZ
  license: CC BY-SA 4.0
---
Die Biber spielen „Wörterkette“.

Aus einer Menge von Wörtern wählen sie ein beliebiges Anfangswort aus. Danach verlängern sie nach und nach die Wörterkette um ein Wort, welches mit dem letzten Buchstaben des vorigen Worts beginnt. Jedes Wort darf höchstens einmal verwendet werden.

Heute spielen die Biber mit der Wörtermenge, die im Bild gezeigt ist.

![Neun Wörter in Kästchen: sand, strand, gras, lehmig, luchs, reisigbündel, seelachs, strudel, laubhölzer. Ein Pfeil führt von einem Wort zu einem anderen, wenn dieses mit dem letzten Buchstaben des ersten beginnt.](./img/words.png)

Eine Wörterkette aus dieser Menge ist zum Beispiel: strudel → luchs. Sie besteht aus zwei Wörtern.

**Aus wie vielen Wörtern kann eine Wörterkette aus dieser Menge höchstens bestehen?**
