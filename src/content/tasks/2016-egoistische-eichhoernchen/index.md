---
short: 6BrK
title: Egoistische Eichhörnchen
summary: 16 Eichhörnchen wählen jede Nacht die Höhle mit den wenigsten Mitbewohnern. Wie lange dauert es, bis alle zusammen wohnen?
grades:
  "11-13": hard
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [algorithm-analysis, ai]
methods: []
mascot: beaver
interaction:
  format: choice
  props:
    options:
      - { id: a, label: "A) Nach zwei Tagen." }
      - { id: b, label: "B) Nach drei Tagen." }
      - { id: c, label: "C) Nach vier Tagen." }
      - { id: d, label: "D) Niemals werden alle Eichhörnchen in derselben Höhle sein." }
source:
  type: original
  work: Informatik-Biber 2016
  year: 2016
  page: 21
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2016/Biberheft2016-mit-Loesungen.pdf
  country: RU
  license: CC BY-SA 3.0
---
In einem Baum leben 16 egoistische Eichhörnchen. Nachts bewohnt jedes Eichhörnchen eine von fünf Baumhöhlen.

Die Eichhörnchen, die zusammen eine Höhle bewohnen, müssen sich das dort vorhandene Futter teilen. Jedes einzelne Eichhörnchen möchte deshalb für die nächste Nacht eine „bessere“ Höhle wählen. Es prüft dazu drei Zahlen, nämlich: für die aktuelle Höhle die Zahl seiner Mitbewohner und für die Höhlen unterhalb und oberhalb jeweils die Zahl der Bewohner. Für die nächste Nacht wählt es dann die Höhle mit dem niedrigsten Wert. Sind zwei Werte gleich, wählt das Eichhörnchen die aktuelle Höhle lieber als die Höhle oberhalb und die Höhle oberhalb lieber als die Höhle unterhalb.

Ein Beispiel: In einer Nacht bewohnen 5, 0, 0, 4 bzw. 7 Eichhörnchen die Höhlen (von oben nach unten). Für die nächste Nacht wählen alle 5 Eichhörnchen aus der obersten Höhle die Höhle unterhalb (denn 0 Mitbewohner sind besser als 4). Die 4 Eichhörnchen der zweiten Höhle von unten wählen die Höhle oberhalb (0 Nachbarn sind besser als 3). Auch die 7 Eichhörnchen der untersten Höhle wählen die Höhle oberhalb (4 Nachbarn sind besser als 6).

![Baum mit fünf Höhlen, in denen von oben nach unten 5, 0, 0, 4 und 7 Eichhörnchen wohnen](./img/tree-1.png)
![Dieselben Höhlen in der nächsten Nacht: 0, 5, 4, 7 und 0 Eichhörnchen](./img/tree-2.png)

**In einer Nacht bewohnen 6, 3, 3, 0 und 4 Eichhörnchen die Höhlen (von oben nach unten). Nach wie vielen Tagen werden alle Eichhörnchen in derselben Höhle sein?**
