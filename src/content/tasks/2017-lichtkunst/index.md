---
short: 4hjt
title: Lichtkunst
summary: Ein Hochhaus hat nur Schalter für ganze Stockwerke und Fensterspalten. Wie entsteht das gewünschte Lichtmuster?
grades:
  "7-8": medium
  "9-10": easy
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [programming]
methods: [sequence]
mascot: beaver
interaction:
  format: custom
  props:
    floors: 7
    columns: [A, B, C, D]
    doors: [[0, 1], [0, 2]]
source:
  type: original
  work: Informatik-Biber 2017
  year: 2017
  page: 40
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2017/Biberheft2017-mit-Loesungen.pdf
  country: IT
  license: CC BY-SA 4.0
---
Das neue Hochhaus der Stadt hat 26 Fenster, hinter denen das Licht ein- und ausgeschaltet werden kann. Leider kann man das Licht jedes Fensters nicht einzeln ein- und ausschalten, sondern muss immer alle Lichter eines Stockwerks oder einer Fensterspalte vollständig an- oder ausschalten.

Die Lichter des Hochhauses sollen so leuchten wie im Bild (gelb = Licht an):

![Das Hochhaus mit 7 Stockwerken (0 unten bis 6 oben) und 4 Fensterspalten. Licht an: Stockwerk 5 und Stockwerk 3 komplett; in den Stockwerken 4 und 2 nur die Fenster ganz links und ganz rechts. In den Stockwerken 6, 1 und 0 sind alle Lichter aus.](./img/target.png)

**Schalte die Lichter so, dass sie wie im Bild leuchten!** Klicke dazu auf die Nummern der Stockwerke bzw. die Buchstaben der Fensterspalten, um deren Lichter zu schalten.
