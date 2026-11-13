---
short: Hh5k
title: Der neue Song
summary: Ein neuer Song verbreitet sich in der Klasse von Freund zu Freund. Wann haben ihn alle?
grades:
  "11-13": easy
gi:
  content: [information-data, algorithms]
  process: [modelling, reasoning]
topics: [graphs, modelling]
methods: [bfs]
mascot: beaver
interaction:
  format: choice
  props:
    columns: 4
    options:
      - { id: a, label: Mittwoch }
      - { id: b, label: Donnerstag }
      - { id: c, label: Freitag }
      - { id: d, label: Samstag }
source:
  type: original
  work: Informatik-Biber 2017
  year: 2017
  page: 16
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2017/Biberheft2017-mit-Loesungen.pdf
  country: IR
  license: CC BY-SA 4.0
---
Das Diagramm zeigt genau, wer in der Klasse mit wem befreundet ist. Zwei Personen sind Freunde, wenn ihre Namen durch eine Linie verbunden sind; sonst nicht.

![Freundschaftsgraph mit den Personen Ted, Jane, Tom, Bob, Bill, Sara, Joe, Kim und Anna. Linien (Freundschaften): Ted–Jane, Ted–Tom, Ted–Bob, Ted–Bill, Tom–Bill, Jane–Bob, Jane–Joe, Bob–Bill, Bob–Sara, Bill–Sara, Bill–Kim, Sara–Kim, Kim–Anna, Anna–Joe. Bill, Bob und Sara sind mit einer Note markiert.](./img/network.png)

Am Montag veröffentlicht ein Megastar seinen neuen Song. Noch am selben Tag kaufen Bill, Bob und Sara den neuen Song. Ihre Namen sind mit einer Note markiert.

Ab Dienstag passiert jeden Tag Folgendes: Genau die Schüler kaufen den Song, für die gilt, dass mindestens die Hälfte ihrer Freunde den Song schon am Vortag hatte. Am Dienstag kauft also unter anderem Tom den Song, Jane aber nicht.

**An welchem Tag frühestens haben alle in der Klasse den neuen Song?**
