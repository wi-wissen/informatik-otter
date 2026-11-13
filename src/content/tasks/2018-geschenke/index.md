---
short: 9iZR
title: Geschenke
summary: Zu jedem Freundespaar soll ein Kind ein Geschenk besorgen, aber niemand kann beliebig viele. Wer schenkt wem?
grades:
  "9-10": medium
  "11-13": easy
gi:
  content: [information-data, algorithms]
  process: [modelling, reasoning]
topics: [graphs, optimization]
methods: [max-flow]
mascot: beaver
interaction:
  format: custom
  props:
    kids:
      - { id: can, name: Can, max: 1, x: 259, y: 402 }
      - { id: tom, name: Tom, max: 2, x: 153, y: 465 }
      - { id: kim, name: Kim, max: 1, x: 410, y: 465 }
      - { id: eva, name: Eva, max: 2, x: 280, y: 530 }
      - { id: ada, name: Ada, max: 1, x: 165, y: 595 }
      - { id: lea, name: Lea, max: 3, x: 416, y: 595 }
      - { id: ben, name: Ben, max: 0, x: 307, y: 658 }
    pairs: [[can, kim], [can, eva], [tom, eva], [tom, ada], [kim, eva], [kim, lea], [eva, ada], [eva, lea], [ada, ben], [lea, ben]]
source:
  type: original
  work: Informatik-Biber 2018
  year: 2018
  page: 38
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2018/Biberheft2018-mit-Loesungen.pdf
  country: DE
  license: CC BY-SA 4.0
---
Die Freundschaften zwischen den Kindern in einem Haus sind als Bild dargestellt. Eine Linie zwischen zwei Namen bedeutet: Diese Kinder sind ein Freundespaar.

Die Hausbewohner planen ein Kinderfest mit Geschenken. Bei allen Freundespaaren soll ein Kind dem anderen Kind ein Geschenk besorgen. Im Bild steht hinter jedem Namen, wie viele Geschenke das Kind besorgen kann.

**Entscheide für jedes Freundespaar, wer das Geschenk besorgt. Kein Kind soll mehr Geschenke besorgen müssen, als es besorgen kann.**

Klicke dazu auf die Linie zwischen den beiden Namen. Dann erscheint ein Pfeil. Klicke noch einmal, um die Richtung des Pfeils zu ändern. Der Pfeil zeigt die „Schenkrichtung“ an: Zeigt er z. B. von Lea zu Eva, bedeutet das, dass Lea ein Geschenk für Eva besorgt.
