---
short: nx5C
title: Hotelschlüssel
summary: Die Hotelkarte mit 7 mal 7 Codepunkten ist symmetrisch, damit man sie in jeder Lage einstecken kann. Wie viele Karten gibt es?
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
    options:
      - { id: a, label: "16" }
      - { id: b, label: "49" }
      - { id: c, label: "1024" }
      - { id: d, label: "65536" }
source:
  type: original
  work: Informatik-Biber 2011
  year: 2011
  page: 16
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2011/Biberheft2011-mit-Loesungen.pdf
  license: CC BY-NC-SA 3.0 DE
---
Ein neues Schließsystem wird im Hotel Biber eingeführt. Der Gast erhält eine quadratische Plastikkarte mit 7 mal 7 Codepunkten. An jedem Codepunkt ist entweder ein Loch oder kein Loch.

Hier ist ein Beispiel einer Plastikkarte:

![Gelbe Plastikkarte mit 7 mal 7 Codepunkten, jeder Punkt ist blau (Loch) oder weiß (kein Loch)](./img/karte.png)

Im Zimmerschloss ist ein Codeleser. Die Codierung der Plastikkarte ist vorne und hinten, längs und quer symmetrisch. Es ist also egal, mit welcher Ausrichtung der Gast die Plastikkarte ins Zimmerschloss steckt.

**Wie viele verschiedene Plastikkarten kann es geben?**
