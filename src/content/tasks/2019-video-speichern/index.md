---
short: ieM9
title: Video speichern
summary: Ein kleines Video, in dem ein grünes Quadrat wandert, soll Platz sparen. Wie viele Bildpunkte muss man speichern?
grades:
  "9-10": hard
  "11-13": medium
gi:
  content: [information-data]
  process: [modelling, reasoning]
topics: [compression, images]
methods: [delta-encoding]
mascot: beaver
interaction:
  format: choice
  props:
    columns: 4
    options:
      - { id: a, label: "100" }
      - { id: b, label: "135" }
      - { id: c, label: "140" }
      - { id: d, label: "170" }
      - { id: e, label: "180" }
      - { id: f, label: "700" }
      - { id: g, label: "800" }
      - { id: h, label: "1000" }
source:
  type: original
  work: Informatik-Biber 2019
  year: 2019
  page: 59
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2019/Biberheft2019-mit-Loesungen.pdf
  country: RU
  license: CC BY-SA 4.0
---
Videos benötigen viel Speicherplatz: Sie bestehen aus vielen Einzelbildern, und jedes Einzelbild besteht aus vielen Bildpunkten. Mit dem folgenden Verfahren kann man aber Speicherplatz sparen.

Dabei speichert man

- beim ersten Einzelbild alle Bildpunkte und
- bei allen weiteren Einzelbildern nur die Bildpunkte, die sich im Vergleich zum vorherigen Einzelbild geändert haben.

Hier ist ein (sehr kleines) Video. Seine Einzelbilder haben 10×10 Bildpunkte. Das grüne Quadrat in der unteren linken Ecke des ersten Einzelbildes ist 3×3 Bildpunkte groß.

Das grüne Quadrat bewegt sich von einem Einzelbild zum nächsten diagonal um einen Bildpunkt nach rechts und nach oben, bis es im letzten Einzelbild in der oberen rechten Ecke landet.

| Erstes Einzelbild | Zweites Einzelbild | … | Letztes Einzelbild |
|:-:|:-:|:-:|:-:|
| ![Erstes Einzelbild: ein Bild aus braunen Pixeln, unten links das grüne Quadrat](./img/f1.png) | ![Zweites Einzelbild: das grüne Quadrat ist einen Bildpunkt nach rechts oben gewandert](./img/f2.png) | … | ![Letztes Einzelbild: das grüne Quadrat in der oberen rechten Ecke](./img/f8.png) |

Nun wird dieses Video mit dem oben beschriebenen Verfahren gespeichert.

**Wie viele Bildpunkte müssen dabei für das gesamte Video gespeichert werden?**
