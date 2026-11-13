---
short: 4M3X
title: Möglichst bald!
summary: Zwei Freunde auf einer Karte mit Wasser, Fahrrädern und Autos wollen sich so schnell wie möglich treffen.
grades:
  "7-8": hard
  "9-10": medium
  "11-13": easy
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [graphs, searching]
methods: [bfs]
mascot: beaver
interaction:
  format: choice
  props:
    columns: 6
    options:
      - { id: a, label: 1 Minute }
      - { id: b, label: 2 Minuten }
      - { id: c, label: 3 Minuten }
      - { id: d, label: 4 Minuten }
      - { id: e, label: 5 Minuten }
      - { id: f, label: 6 Minuten }
source:
  type: original
  work: Informatik-Biber 2021
  year: 2021
  page: 38
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2021/Biberheft_2021_mit_Loesungen_web.pdf
  country: LT
  license: CC BY-SA 4.0
---
Zwei Freunde wollen sich möglichst bald treffen.

In einem Schritt bewegen sie sich von einem Feld zum nächsten: nach links, rechts, oben oder unten. Nach jedem Schritt können sie die Richtung wechseln.

Zuerst gehen die Freunde zu Fuß. Aber wenn sie auf ein Feld mit einem Fahrzeug kommen, können sie es benutzen. Wasserflächen können sie nicht überqueren.

In einer Minute schaffen sie:

| zu Fuß | mit dem Fahrrad | mit dem Auto |
|---|---|---|
| 1 Schritt | 2 Schritte | 5 Schritte |

![Eine Karte aus 10 Spalten und 6 Zeilen. Der Junge steht in Zeile 2, Spalte 10; direkt über ihm in Zeile 1, Spalte 10 liegt ein Fahrrad. Das Mädchen steht in Zeile 5, Spalte 2; direkt unter ihr in Zeile 6, Spalte 2 liegt ein Fahrrad. Autos stehen in Zeile 3, Spalte 1 und Zeile 3, Spalte 5. Wasserfelder: Zeile 2 Spalten 2 und 3, Zeile 3 Spalte 3, Zeile 4 Spalte 7, Zeile 5 Spalten 6 bis 8, Zeile 6 Spalte 8.](./img/map.png)

**Wie viele Minuten benötigen die beiden Freunde mindestens, um sich auf einem Feld zu treffen?**
