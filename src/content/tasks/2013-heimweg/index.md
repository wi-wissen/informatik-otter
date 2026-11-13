---
short: 7ys8
title: Heimweg
summary: Igodot ruft von irgendeinem Feld im Wegenetz an. Wie lange muss man zu Hause auf ihn warten?
grades:
  "11-13": hard
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [graphs, optimization]
methods: [bfs]
mascot: beaver
interaction:
  format: choice
  props:
    options:
      - { id: a, label: mindestens 20 Minuten und höchstens 24 Minuten }
      - { id: b, label: genau 20 Minuten }
      - { id: c, label: mindestens 21 Minuten und höchstens 25 Minuten }
      - { id: d, label: genau 25 Minuten }
source:
  type: original
  work: Informatik-Biber 2013
  year: 2013
  page: 21
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2013/Biberheft2013-mit-Loesungen.pdf
  license: CC BY-NC-SA 3.0
---
Igodots Inseln sind von einem Wegenetz aus quadratischen Platten durchzogen und über Brücken verbunden. Igodot bewegt sich von Platte zu nächster Platte in je einer Minute. Er biegt stets in rechten Winkeln ab und bewegt sich niemals diagonal.

Igodot ist gerade irgendwo auf dem Feld (mit Kreuzen markiert) und ruft zu Hause (mit Ring markiert) an, dass er nun auf dem kürzesten Weg nach Hause kommen wird.

![Karte mit dem Wegenetz aus weißen Platten. Unten ist ein Feld aus 3 mal 6 Platten mit grünen Kreuzen (Igodots möglicher Standort), oben rechts liegt das Zuhause mit einem Ring.](./img/map.png)

**Wie lange muss man zu Hause auf Igodot warten?**
