---
short: vXU9
title: Lisas laden
summary: Zwei Boote mit je 300 kg Tragkraft sollen möglichst viel Fisch transportieren. Wie verteilt man die Fässer?
grades:
  "5-6": hard
  "7-8": medium
  "9-10": medium
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [optimization]
methods: [greedy]
mascot: beaver
interaction:
  format: match
  props:
    left:
      - { id: f220, label: "220 kg" }
      - { id: f130, label: "130 kg" }
      - { id: f120, label: "120 kg" }
      - { id: f100, label: "100 kg" }
      - { id: f90a, label: "90 kg (erstes Fass)" }
      - { id: f90b, label: "90 kg (zweites Fass)" }
      - { id: f60, label: "60 kg" }
    right:
      - { id: b1, label: Lisa 1 }
      - { id: b2, label: Lisa 2 }
      - { id: b0, label: bleibt am Hafen }
source:
  type: original
  work: Informatik-Biber 2014
  year: 2014
  page: 36
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2014/Biberheft2014-mit-Loesungen.pdf
  license: CC BY-NC-SA 3.0
---
Falke und Folke, den beiden Fischern, gehören die Boote „Lisa 1“ und „Lisa 2“ – die beiden Lisas. Jedes der Boote kann mit höchstens 300 Kilogramm beladen werden. Falke und Folke sollen mit den beiden Lisas einige Fässer mit verschiedenen Sorten Fisch transportieren. Die Fischer werden nach dem transportierten Gewicht bezahlt.

![Oben sieben Fässer mit den Gewichten 220, 130, 120, 100, 90, 90 und 60 Kilogramm, darunter die beiden Boote Lisa 1 und Lisa 2](./img/boats.png)

Über den Booten siehst du die Fässer, die zur Verfügung stehen. Jedes Fass ist mit seinem Gewicht (in Kilogramm) beschriftet. Du kannst jedes Boot mit höchstens 300 Kilogramm beladen.

**Belade die beiden Lisas mit so viel Kilogramm Fisch wie möglich! Weise dazu jedem Fass ein Boot zu (oder lass es am Hafen).**
