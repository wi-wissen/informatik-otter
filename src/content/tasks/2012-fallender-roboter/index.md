---
short: 2Sax
title: Fallender Roboter
summary: Ein Roboter fällt durch ein senkrechtes Labyrinth und ändert nach jeder Landung die Richtung. In welchem Fach landet er?
grades:
  "5-6": easy
  "7-8": easy
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [programming]
methods: [sequence]
mascot: beaver
interaction:
  format: choice
  props:
    columns: 4
    options:
      - { id: a, label: Fach A }
      - { id: b, label: Fach B }
      - { id: c, label: Fach C }
      - { id: d, label: Fach D }
source:
  type: original
  work: Informatik-Biber 2012
  year: 2012
  page: 18
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2012/Biberheft2012-mit-Loesungen.pdf
  license: CC BY-NC-SA 3.0
---
Ein Roboter läuft durch ein senkrecht stehendes Labyrinth. Er fällt dabei von einer Plattform auf eine darunter liegende. Nachdem er dort gelandet ist, ändert er seine Richtung. Am Schluss landet er ganz unten in einem der Fächer (siehe linkes Bild).

![Links: Der Weg des Roboters (rot gepunktet) durch ein Labyrinth aus Plattformen mit vier Fächern unten. Rechts: ein anderes Labyrinth mit den Fächern A bis D](./img/mazes.png)

**In welchem Fach landet der Roboter im rechten Bild?**
