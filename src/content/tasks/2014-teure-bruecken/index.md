---
short: k1FU
title: Teure Brücken
summary: Sandy will zum Wald und kann sich höchstens zwei Gebühren-Brücken leisten. Wie viele Brücken hat ihr kürzester Weg?
grades:
  "7-8": hard
  "9-10": medium
  "11-13": easy
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [graphs, optimization]
methods: [bfs]
mascot: beaver
interaction:
  format: input
  props:
    kind: number
    placeholder: Anzahl Brücken
    suffix: Brücken
source:
  type: original
  work: Informatik-Biber 2014
  year: 2014
  page: 49
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2014/Biberheft2014-mit-Loesungen.pdf
  license: CC BY-NC-SA 3.0
---
Die Inseln im See sind über öffentliche und private Brücken verbunden. Über eine private Brücke (gestrichelte Linie) zu gehen kostet eine Gebühr. Über eine öffentliche Brücke (durchgezogene Linie) zu gehen kostet nichts.

![Karte mit Inseln, Sandys Haus links und dem Wald rechts. Öffentliche Brücken sind durchgezogene schwarze Linien, private Brücken gestrichelte Linien mit Euro-Zeichen](./img/map.png)

Sandy möchte von ihrem Haus zum Wald gehen. Sandy sucht einen Weg mit möglichst wenigen Brücken. Aber sie ist knapp bei Kasse und kann sich nur Wege mit höchstens zwei privaten Brücken leisten.

Finde unter den Wegen mit höchstens zwei privaten Brücken den mit den insgesamt wenigsten Brücken.

**Wie viele Brücken hat dieser Weg?**
