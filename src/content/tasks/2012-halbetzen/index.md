---
short: 5cAz
title: Halbetzen
summary: Ein Papierstreifen wird immer wieder halbiert und die rechte Hälfte nach oben versetzt. Welche Figur entsteht?
grades:
  "11-13": medium
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [recursion]
methods: [divide-and-conquer]
mascot: beaver
interaction:
  format: choice
  props:
    columns: 2
    options:
      - { id: a, image: ./img/a.png, alt: Figur A }
      - { id: b, image: ./img/b.png, alt: Figur B }
      - { id: c, image: ./img/c.png, alt: Figur C }
      - { id: d, image: ./img/d.png, alt: Figur D }
source:
  type: original
  work: Informatik-Biber 2012
  year: 2012
  page: 24
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2012/Biberheft2012-mit-Loesungen.pdf
  license: CC BY-NC-SA 3.0
---
Ein Papierstreifen ist in 16 gleich lange Stücke eingeteilt:

![Ein Streifen aus 16 gleich langen Stücken](./img/strip.png)

So einen 16er-Streifen kann man wunderbar „halbetzen“. Dazu muss man den Streifen halbieren und dann die rechte Hälfte um eine Streifenbreite nach oben versetzen:

![Der Streifen ist halbiert, die rechte Hälfte (8 Stücke) liegt eine Streifenbreite höher](./img/step1.png)

Nun geht es weiter, und man muss die beiden entstandenen 8er-Streifen selbst wieder halbetzen. Der nächste Schritt ist also:

![Beide 8er-Streifen sind halbiert; jeweils die rechte Hälfte (4 Stücke) ist um eine Streifenbreite nach oben versetzt](./img/step2.png)

Danach werden zuerst die 4er-Streifen und anschließend die entstandenen 2er-Streifen halbetzt. Dann ist Schluss, denn 1er-Streifen sind nicht halbetzbar.

**Was ist am Schluss aus dem 16er-Streifen geworden?**
