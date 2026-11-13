---
short: 8z2t
title: Aufzüge
summary: Zwei Aufzüge, je 30 kg Tragkraft und neun Biber unterschiedlichen Gewichts. Wie kommen die meisten gleichzeitig hinein?
grades:
  "5-6": hard
  "7-8": medium
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
      - { id: w2, image: ./img/b2.png, alt: Biber 2 kg }
      - { id: w3, image: ./img/b3.png, alt: Biber 3 kg }
      - { id: w5, image: ./img/b5.png, alt: Biber 5 kg }
      - { id: w8, image: ./img/b8.png, alt: Biber 8 kg }
      - { id: w9a, image: ./img/b9a.png, alt: Erster Biber mit 9 kg }
      - { id: w9b, image: ./img/b9b.png, alt: Zweiter Biber mit 9 kg }
      - { id: w12a, image: ./img/b12a.png, alt: Erster Biber mit 12 kg }
      - { id: w12b, image: ./img/b12b.png, alt: Zweiter Biber mit 12 kg }
      - { id: w22, image: ./img/b22.png, alt: Biber 22 kg }
    right:
      - { id: l1, label: Aufzug 1 }
      - { id: l2, label: Aufzug 2 }
      - { id: out, label: Wartet draußen }
source:
  type: original
  work: Informatik-Biber 2018
  year: 2018
  page: 12
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2018/Biberheft2018-mit-Loesungen.pdf
  country: CH
  license: CC BY-SA 4.0
---
Auf einer Reise sind die Biber an einem Aussichtsturm angekommen. Der Turm hat zwei Aufzüge. Jeder Aufzug kann höchstens 30 kg transportieren.

Die Biber wollen schnell auf den Turm. Es gibt neun Biber mit diesen Gewichten: 2 kg, 3 kg, 5 kg, 8 kg, 9 kg, 9 kg, 12 kg, 12 kg und 22 kg.

**Verteile die Biber so auf die Aufzüge, dass möglichst viele Biber gleichzeitig hineinpassen.** Biber, die nicht mitfahren, bleiben draußen.
