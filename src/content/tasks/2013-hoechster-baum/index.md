---
short: 6aG3
title: Höchster Baum
summary: Ein kurzsichtiger Biber sucht immer den höchsten Baum in Sichtweite. Bei welchem Baum bleibt er stehen?
grades:
  "5-6": hard
  "7-8": medium
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [graphs, optimization]
methods: [greedy]
mascot: beaver
interaction:
  format: choice
  props:
    columns: 4
    options:
      - { id: a, label: "9" }
      - { id: b, label: "10" }
      - { id: c, label: "12" }
      - { id: d, label: "13" }
source:
  type: original
  work: Informatik-Biber 2013
  year: 2013
  page: 23
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2013/Biberheft2013-mit-Loesungen.pdf
  license: CC BY-NC-SA 3.0
---
In der Karte sind einige Bäume als Punkte eingezeichnet. Dazu ist ihre Höhe eingetragen. Der Biber kann nicht weit sehen, weil es viele Felsen gibt. Wenn er von einem Baum aus einen anderen doch sehen kann, ist eine Linie zwischen den zwei Punkten eingezeichnet.

![Karte mit 20 Bäumen als grüne Punkte mit Höhenangaben und gestrichelten Sichtlinien dazwischen. Der Biber steht links unten beim Baum mit der Höhe 5.](./img/map.png)

Der Biber möchte den höchsten Baum fällen, den er finden kann. Er beginnt die Suche beim Baum mit der Höhe 5. Von dort aus sieht er Bäume mit den Höhen 4, 7 und 8. Von seinem Standort aus geht er zum höchsten Baum, den er sehen kann. Zu Beginn ist das ein Baum mit der Höhe 8. Auf die gleiche Weise sucht er weiter nach einem noch höheren Baum. Die Suche endet erst, wenn der Baum an seinem Standort höher ist als alle Bäume, die er von dort aus sehen kann. Diesen Baum fällt er.

**Wie hoch ist der Baum, den der Biber fällt?**
