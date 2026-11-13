---
short: 4p8R
title: Rasensprenger
summary: Wie wenige Rasensprenger braucht Bob, um alle Blumen in seinem Garten zu gießen?
grades:
  "3-4": medium
  "5-6": easy
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [optimization]
methods: []
mascot: beaver
interaction:
  format: pixel-grid
  props:
    rows: 4
    cols: 5
    palette: ["#dff3a0", "#e91e8c", "#0e7490"]
    initial: [[0, 0, 1, 0, 0], [1, 0, 0, 0, 1], [0, 1, 0, 0, 0], [0, 0, 1, 0, 0]]
    locked: [[false, false, true, false, false], [true, false, false, false, true], [false, true, false, false, false], [false, false, true, false, false]]
source:
  type: original
  work: Informatik-Biber 2020
  year: 2020
  page: 46
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2020/Biberheft_2020_final_mit_Loesungen.pdf
  country: SK
  license: CC BY-SA 4.0
---
Unten siehst du Bobs Garten. Der Garten ist in Felder eingeteilt. In einigen Feldern sind Blumen (im Raster rosa gefärbt, fest vorgegeben).

![Bobs Garten: ein Raster aus 4 Zeilen und 5 Spalten mit Blumen in einigen Feldern](./img/garden.png)

Bob möchte die Blumen mit Rasensprengern gießen. Ein Sprenger kann nur auf ein leeres Feld gestellt werden. Er gießt dann die 8 Felder rundherum.

Wähle im Raster die blaue Farbe und tippe die Felder an, auf die du Sprenger stellen willst. Die Felder mit den Blumen sind rosa.

**Stelle Sprenger im Garten auf, die alle Blumen gießen. Benutze so wenige Sprenger wie möglich!**
