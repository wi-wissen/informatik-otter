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
  format: custom
  props:
    background: ./img/boats-only.png
    width: 440
    height: 116.6
    limit: 300
    best: 590
    zones:
      - { id: b1, label: "Lisa 1", x: 28, y: 1, w: 138, h: 78, capacity: 7 }
      - { id: b2, label: "Lisa 2", x: 243, y: 1, w: 138, h: 78, capacity: 7 }
    barrels:
      - { id: f220, image: ./img/f220.png, alt: "Fass mit 220 Kilogramm", kg: 220 }
      - { id: f130, image: ./img/f130.png, alt: "Fass mit 130 Kilogramm", kg: 130 }
      - { id: f120, image: ./img/f120.png, alt: "Fass mit 120 Kilogramm", kg: 120 }
      - { id: f100, image: ./img/f100.png, alt: "Fass mit 100 Kilogramm", kg: 100 }
      - { id: f90a, image: ./img/f90a.png, alt: "Fass mit 90 Kilogramm", kg: 90 }
      - { id: f90b, image: ./img/f90b.png, alt: "Fass mit 90 Kilogramm", kg: 90 }
      - { id: f60, image: ./img/f60.png, alt: "Fass mit 60 Kilogramm", kg: 60 }
source:
  type: original
  work: Informatik-Biber 2014
  year: 2014
  page: 36
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2014/Biberheft2014-mit-Loesungen.pdf
  license: CC BY-NC-SA 3.0
---
Falke und Folke, den beiden Fischern, gehören die Boote „Lisa 1“ und „Lisa 2“ – die beiden Lisas. Jedes der Boote kann mit höchstens 300 Kilogramm beladen werden. Falke und Folke sollen mit den beiden Lisas einige Fässer mit verschiedenen Sorten Fisch transportieren. Die Fischer werden nach dem transportierten Gewicht bezahlt.

**Belade die beiden Lisas mit so viel Kilogramm Fisch wie möglich!**

Hier siehst du die Fässer, die zur Verfügung stehen: sieben Fässer mit 220, 130, 120, 100, 90, 90 und 60 Kilogramm. Jedes Fass ist mit seinem Gewicht (in Kilogramm) beschriftet. Ziehe nun einzelne Fässer jeweils auf eines der Boote. Du kannst jedes Boot mit höchstens 300 Kilogramm beladen.
