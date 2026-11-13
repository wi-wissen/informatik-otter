---
short: 8xWP
title: Hotelschlüssel
summary: Eine symmetrische 7-mal-7-Plastikkarte hat in jedem Punkt ein Loch oder keins. Wie viele verschiedene Karten gibt es?
grades:
  "11-13": hard
gi:
  content: [information-data]
  process: [modelling, reasoning]
topics: [encoding, modelling]
methods: [binary-numbers]
mascot: beaver
interaction:
  format: choice
  props:
    columns: 4
    options:
      - { id: a, label: "16" }
      - { id: b, label: "49" }
      - { id: c, label: "1024" }
      - { id: d, label: "65536" }
source:
  type: original
  work: Informatik-Biber 2013
  year: 2013
  page: 25
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2013/Biberheft2013-mit-Loesungen.pdf
  license: CC BY-NC-SA 3.0
---
Ein neues Schließsystem wird im Hotel Biber eingeführt. Der Gast erhält eine quadratische Plastikkarte mit 7 mal 7 Codepunkten. An jedem Codepunkt ist entweder ein Loch oder kein Loch.

Hier ist ein Beispiel einer Plastikkarte:

![Quadratische gelbe Plastikkarte mit 7 mal 7 Codepunkten; Löcher sind als weiße Kreise, Punkte ohne Loch als blaue Kreise dargestellt](./img/card.png)

Im Zimmerschloss ist ein Codeleser. Die Codierung der Plastikkarte ist vorne und hinten, längs und quer symmetrisch. Es ist also egal, mit welcher Ausrichtung der Gast die Plastikkarte ins Zimmerschloss steckt.

**Wie viele verschiedene Plastikkarten kann es geben?**
