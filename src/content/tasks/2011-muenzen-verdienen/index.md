---
short: Lfp5
title: Münzen verdienen
summary: Benny kann nur 7 Kilo Holz tragen. Welche Hölzer bringen ihm am meisten Münzen?
grades:
  "5-6": hard
  "7-8": medium
  "9-10": easy
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [optimization]
methods: [knapsack, dynamic-programming]
mascot: beaver
interaction:
  format: choice
  props:
    options:
      - { id: a, label: Ein schweres Holz und zwei mittelschwere Hölzer. }
      - { id: b, label: Zwei schwere Hölzer und ein mittelschweres Holz. }
      - { id: c, label: Drei mittelschwere Hölzer und ein leichtes Holz. }
      - { id: d, label: Ein schweres Holz und ein mittelschweres Holz und zwei leichte Hölzer. }
source:
  type: original
  work: Informatik-Biber 2011
  year: 2011
  page: 23
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2011/Biberheft2011-mit-Loesungen.pdf
  license: CC BY-NC-SA 3.0 DE
---
Benny soll Hölzer aus dem Wald holen. Sie werden für den Damm gebraucht.

Für schwere Hölzer mit 3 Kilo Gewicht bekommt Benny am meisten ausbezahlt, nämlich 5 Münzen. Für mittelschwere Hölzer mit 2 Kilo Gewicht bekommt er 3 Münzen. Und leichte Hölzer mit 1 Kilo Gewicht sind nur eine halbe Münze wert.

Benny kann nur einmal in den Wald gehen und nicht mehr als 7 Kilo tragen.

![Ein großer Holzstamm mit 5 Münzen darüber, ein mittlerer Stamm mit 3 Münzen und ein dünner Ast mit einer halben Münze](./img/hoelzer.png)

**Welche Hölzer wird Benny holen, damit er möglichst viele Münzen verdient?**
