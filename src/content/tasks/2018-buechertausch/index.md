---
short: 4snE
title: Büchertausch
summary: Drei Weise sortieren sechs Bücher, indem sie abwechselnd Bücher am Tisch und mit den Nachbarn tauschen. Wie viele Runden brauchen sie?
grades:
  "9-10": hard
  "11-13": hard
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [sorting, parallelism]
methods: [sorting-network]
mascot: beaver
interaction:
  format: choice
  props:
    options:
      - { id: a, label: drei Runden }
      - { id: b, label: vier Runden }
      - { id: c, label: fünf Runden }
      - { id: d, label: sechs Runden }
source:
  type: original
  work: Informatik-Biber 2018
  year: 2018
  page: 20
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2018/Biberheft2018-mit-Loesungen.pdf
  country: CN
  license: CC BY-SA 4.0
---
In einer Bibliothek sitzen drei weise Personen nebeneinander, jede an einem Tisch mit zwei Büchern. Mit einem Spiel wollen sie die Bücher sortieren: Büchertausch. Das Spiel läuft in Runden ab. Es gibt zwei Arten von Runden:

- **A)** Die beiden Bücher auf jedem Tisch dürfen (müssen aber nicht) getauscht werden.
- **B)** Jedes Buch darf (aber muss nicht) mit einem benachbarten Buch von einem Nachbartisch getauscht werden.

A- und B-Runden wechseln sich ab. Das Spiel beginnt mit einer A-Runde. In jeder Runde darf jedes Buch höchstens einmal getauscht werden.

![Drei Tische mit je zwei Büchern: 5 und 1, 6 und 3, 4 und 2. Pfeil A tauscht die Bücher eines Tisches, Pfeil B tauscht Bücher zweier Nachbartische.](./img/start.png)

Am Anfang liegen die Bücher wie im Bild.

**Wie viele Runden sind insgesamt mindestens notwendig, um die Bücher zu sortieren, also in diese Reihenfolge zu bringen: 1, 2, 3, 4, 5, 6?**
