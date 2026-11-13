---
short: 21KE
title: Kugeln ordnen
summary: Blaue und orange Kugeln stecken durcheinander in Gläsern. Sortiere sie, indem du immer nur die oberste Kugel bewegst.
grades:
  "3-4": hard
  "7-8": easy
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [algorithm-analysis, games]
methods: [stack, backtracking]
mascot: beaver
interaction:
  format: custom
  props:
    capacity: 3
    glasses:
      - [a, b, a]
      - [b, a, b]
      - []
source:
  type: original
  work: Informatik-Biber 2021
  year: 2021
  page: 34
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2021/Biberheft_2021_mit_Loesungen_web.pdf
  country: KR
  license: CC BY-SA 4.0
---
In einem Spiel gibt es Kugeln in zwei Farben; die Kugeln sind in Gläsern. Nun sollst du die Kugeln nach Farbe ordnen: Am Ende sollen alle Kugeln in zwei Gläsern sein, und in einem Glas sollen alle Kugeln die gleiche Farbe haben.

Das Spiel hat drei Regeln:

- Du darfst nur die oberste Kugel eines Glases nehmen.
- Du darfst eine Kugel in ein leeres Glas legen.
- Du darfst eine Kugel in ein Glas legen, wenn dort noch Platz frei ist und die oberste Kugel die gleiche Farbe hat.

Hier ist ein Beispiel, wie du Kugeln nach diesen Regeln ordnen kannst:

![Beispiel: Die Kugeln werden in mehreren Schritten umgelegt, bis zwei Gläser nur gleichfarbige Kugeln enthalten und ein Glas leer ist.](./img/example.png)

**Ordne diese Kugeln!** Glas 1 enthält von oben nach unten: blau, orange, blau. Glas 2 enthält von oben nach unten: orange, blau, orange. Glas 3 ist leer. In jedes Glas passen drei Kugeln.
