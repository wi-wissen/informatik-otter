---
short: 4n1c
title: Neues Haus
summary: Ein neues Haus bekommt die Farbe der meisten Nachbarhäuser. Wie viele Nachbarn müssen betrachtet werden, damit es rot wird?
grades:
  "7-8": hard
  "11-13": easy
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [ai, algorithm-analysis]
methods: [k-nearest-neighbors]
mascot: beaver
interaction:
  format: input
  props:
    kind: number
    prefix: "k ="
source:
  type: original
  work: Informatik-Biber 2020
  year: 2020
  page: 39
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2020/Biberheft_2020_final_mit_Loesungen.pdf
  country: KR
  license: CC BY-SA 4.0
---
In einem Dorf werden alle Häuser entweder blau oder rot angestrichen. Um über die Farbe eines neuen Hauses zu entscheiden, haben die Bewohner eine Zahl *k* und diese Regel festgelegt:

- Ein neues Haus muss die Farbe bekommen, welche die Mehrheit der *k* nächstgelegenen Häuser hat. Wenn es keine Mehrheit gibt, entscheidet die Mehrheit der *k* + 1 nächstgelegenen Häuser.

Nun wurde wieder ein neues Haus gebaut. Das Bild zeigt die Lage aller Häuser im Dorf (blaue Häuser, rote Häuser und das neue Haus, nur als grüner Umriss gezeichnet).

![Karte des Dorfes mit blauen und roten Häusern und dem neuen Haus (grüner Umriss)](./img/village.png)

Die Regel entscheidet, dass das neue Haus die Farbe Rot bekommt.

**Wie lautet die kleinste Zahl *k*, die zu dieser Entscheidung führt?**
