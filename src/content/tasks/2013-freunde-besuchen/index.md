---
short: jth6
title: Freunde besuchen
summary: Herr Biber dreht an jeder Abzweigung den Pfeil um. Welchen Freund besucht er am Tag 30?
grades:
  "9-10": hard
  "11-13": medium
gi:
  content: [information-data, algorithms]
  process: [modelling, reasoning]
topics: [trees, algorithm-analysis]
methods: [binary-numbers, parity-bit]
mascot: beaver
interaction:
  format: choice
  props:
    options:
      - { id: a, label: Den Freund W }
      - { id: b, label: Den Freund X }
      - { id: c, label: Den Freund Y }
      - { id: d, label: Den Freund Z }
source:
  type: original
  work: Informatik-Biber 2013
  year: 2013
  page: 19
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2013/Biberheft2013-mit-Loesungen.pdf
  license: CC BY-NC-SA 3.0
---
Herr Biber hat vier Freunde. Sie wohnen in verschiedenen Häusern. Jeden Tag besucht er einen Freund. Wenn Herr Biber auf dem Hinweg an eine Abzweigung kommt, folgt er zwar dem Pfeil, dreht ihn aber für das nächste Mal in die Gegenrichtung.

Am Tag 1 besucht er den Freund W. Und weil er dabei zwei Pfeile in die Gegenrichtung gedreht hat, besucht er am Tag 2 den Freund Y. Und so weiter.

![Tag 1 und Tag 2: Der Weg von Herrn Biber verzweigt sich unten in zwei Wege und jeder davon oben noch einmal zu den Häusern W, X, Y, Z (von links nach rechts). An Tag 1 zeigen alle drei Pfeile nach links. An Tag 2 zeigen der untere Pfeil und der Pfeil bei W und X nach rechts, der Pfeil bei Y und Z nach links.](./img/days.png)

**Welchen Freund besucht Herr Biber am Tag 30?**
