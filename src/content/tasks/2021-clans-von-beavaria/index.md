---
short: k1a4
title: Clans von Beavaria
summary: Fünf Clans wollen sich zu einem verbünden, aber jedes Bündnis kostet Feierwochen. Wie spart man am meisten?
grades:
  "11-13": hard
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [optimization]
methods: [greedy, huffman]
mascot: beaver
interaction:
  format: choice
  props:
    options:
      - { id: a, label: 15 Wochen }
      - { id: b, label: 33 Wochen }
      - { id: c, label: 35 Wochen }
      - { id: d, label: 50 Wochen }
      - { id: e, label: 120 Wochen }
source:
  type: original
  work: Informatik-Biber 2021
  year: 2021
  page: 15
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2021/Biberheft_2021_mit_Loesungen_web.pdf
  country: PH
  license: CC BY-SA 4.0
---
In Beavaria leben fünf einst verfeindete Clans. Alle Häuser mit gleicher Flagge gehören zu einem Clan.

Da die Zeiten lange schon friedlich sind, beschließen die Clans, sich alle nach und nach zu einem Clan zu verbünden. Die Regeln dafür sind:

- Zu jeder Zeit dürfen sich immer nur zwei Clans verbünden.
- In jedem Haus der beiden sich verbündenden Clans wird nacheinander eine Woche lang gefeiert, um den Pakt zu besiegeln. Das Verbünden dauert also so viele Wochen wie beide Clans zusammen Häuser haben.
- Nach dieser Zeit sind die beiden Clans nur noch ein Clan. Dann kann das Verbünden der Clans fortgesetzt werden.

Die Clans beschließen, sich in der kürzestmöglichen Zeit zu einem Clan zu verbünden. Das geht nur, wenn man die Reihenfolge des Verbündens sorgfältig plant.

![Fünfzehn Häuser mit Flaggen: vier mit grün-weißer Flagge, fünf mit Stern, zwei mit rotem Dreieck, eines mit gelbem Punkt und drei mit blau-weißer Flagge](./img/houses.png)

**Wie viele Wochen dauert es mindestens, bis alle Clans zu einem verbündet sind?**
