---
short: y4Rj
title: Signalfeuer
summary: Die Samurai entzünden Signalfeuer, die sich von Station zu Station ausbreiten. Wie lange dauert es bis ans Ende?
grades:
  "5-6": medium
  "7-8": medium
  "9-10": easy
  "11-13": easy
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [graphs]
methods: [bfs]
mascot: beaver
interaction:
  format: choice
  props:
    options:
      - { id: a, label: Nach 4 Minuten }
      - { id: b, label: Nach 5 Minuten }
      - { id: c, label: Nach 6 Minuten }
      - { id: d, label: Nach 8 Minuten }
source:
  type: original
  work: Informatik-Biber 2013
  year: 2013
  page: 43
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2013/Biberheft2013-mit-Loesungen.pdf
  license: CC BY-NC-SA 3.0
---
Vor langer Zeit hatten die Samurai in Japan ein Netz von Signalstationen aufgebaut. Um im Notfall das ganze Land zu alarmieren, konnten auf den Stationen Signalfeuer entzündet werden. Im Bild sind die Signalstationen als Kreise gezeichnet. Stationen, die mit einer Linie verbunden sind, sind Nachbarn.

![Netz aus Signalstationen (Kreise) mit Verbindungslinien. Das Hauptquartier ist der größere schwarze Kreis rechts in der Mitte; daneben steht ein Samurai-Biber vor einer Burg.](./img/map.png)

Wird auf einer Station ein Signalfeuer entzündet, sehen die Nachbarn das Feuer nach einer Minute und zünden selbst sofort ein Signalfeuer an. Nach einer weiteren Minute zünden also auch die Nachbarn der Nachbarn ein Signalfeuer an. Und so geht es weiter, bis auf allen Stationen ein Signalfeuer entzündet ist. Eines Tages wird auf der Station im Hauptquartier (der größere schwarze Kreis) ein Signalfeuer entzündet.

**Nach wie vielen Minuten ist auf allen Signalstationen ein Signalfeuer entzündet?**
