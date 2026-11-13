---
short: eeQ6
title: Drehzeug
summary: Durch geschicktes Drehen einer Holzscheibe soll eine Glaskugel durch ein Labyrinth aus Nestern zum Ausgang rollen.
grades:
  "5-6": hard
  "7-8": medium
  "9-10": medium
  "11-13": easy
gi:
  content: [information-data, algorithms]
  process: [modelling, representing]
topics: [trees, graphs]
methods: [binary-tree]
mascot: beaver
interaction:
  format: choice
  props:
    options:
      - { id: a, label: LRRLRR }
      - { id: b, label: RRRL }
      - { id: c, label: LRRLRL }
      - { id: d, label: LLLRR }
source:
  type: original
  work: Informatik-Biber 2013
  year: 2013
  page: 9
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2013/Biberheft2013-mit-Loesungen.pdf
  license: CC BY-NC-SA 3.0
---
Würmer haben ein System von Nestern und Verbindungsgängen in eine Holzscheibe gefressen. Die Biber machen sich daraus ein Geschicklichkeitsspiel.

In das Nest in der Scheibenmitte kommt eine rote Glaskugel. Durch geschicktes Drehen der Holzscheibe nach Links (L) oder nach Rechts (R) soll die Glaskugel so bewegt werden: durch einen Verbindungsgang in ein benachbartes Nest.

Es ist das Ziel, die Glaskugel durch eine Folge von Drehungen von Nest zu Nest bis zum Ausgang zu bewegen.

![Die Holzscheibe mit Nestern und Gängen. Die rote Kugel liegt in der Mitte, der Ausgang ist unten. Oben stehen die Drehrichtungen L (links) und R (rechts).](./img/disc.png)

**Welche Folge von Drehungen bewegt die Glaskugel zum Ausgang?**
