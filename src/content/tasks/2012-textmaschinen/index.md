---
short: 88vV
title: Textmaschinen
summary: Zwei Arten von Textmaschinen schreiben Texte zusammen oder rückwärts. Welche drei Textstückchen ergeben INFORMATION?
grades:
  "5-6": hard
  "7-8": hard
  "9-10": medium
  "11-13": medium
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [programming, modelling]
methods: []
mascot: beaver
interaction:
  format: choice
  props:
    options:
      - { id: a, label: FNI  AMRO  NOIT }
      - { id: b, label: AMR  OFNI  NOIT }
      - { id: c, label: AMR  OFNI  TION }
      - { id: d, label: INF  ORMA  TION }
source:
  type: original
  work: Informatik-Biber 2012
  year: 2012
  page: 38
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2012/Biberheft2012-mit-Loesungen.pdf
  license: CC BY-NC-SA 3.0
---
Wir haben hier zwei Arten von Textmaschinen: Eine +-Maschine (links) nimmt zwei Stückchen Text und schreibt sie hintereinander. Eine <-Maschine (rechts) nimmt ein Stückchen Text und schreibt es rückwärts.

![+-Maschine: aus „abc“ und „DE“ wird „abcDE“](./img/plus.png) ![<-Maschine: aus „abc“ wird „cba“](./img/reverse.png)

Mit der Kopplung von zwei +-Maschinen und einer <-Maschine erhalten wir eine komplexere Textmaschine. Sie braucht drei Textstückchen (in den grauen Ellipsen) und schreibt Texte in die weißen Ellipsen.

![Die gekoppelte Textmaschine: Zwei graue Ellipsen (oben) gehen in eine +-Maschine, deren Ergebnis in eine <-Maschine geht. Deren Ergebnis geht zusammen mit einer dritten grauen Ellipse (rechts) in eine zweite +-Maschine, die unten das Ergebnis schreibt](./img/machine.png)

**Welche drei Textstückchen braucht diese Textmaschine, um den Text INFORMATION in die unterste Ellipse zu schreiben?**
