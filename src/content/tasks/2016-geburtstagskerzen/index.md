---
short: 7Wv3
title: Geburtstagskerzen
summary: Bodo wird elf, doch es gibt nur fünf Kerzen. Zum Glück zählen die Kerzen verschieden viel. Welche brennen?
grades:
  "5-6": medium
  "7-8": easy
gi:
  content: [information-data]
  process: [representing, modelling]
topics: [encoding]
methods: [binary-numbers]
mascot: beaver
interaction:
  format: choice
  props:
    columns: 5
    options:
      - { id: a, label: A, image: ./img/opt-a.png, alt: "A: die zweite, vierte und fünfte Kerze von links brennen" }
      - { id: b, label: B, image: ./img/opt-b.png, alt: "B: die zweite, dritte und vierte Kerze von links brennen" }
      - { id: c, label: C, image: ./img/opt-c.png, alt: "C: nur die erste Kerze von links brennt" }
      - { id: d, label: D, image: ./img/opt-d.png, alt: "D: die erste, zweite und vierte Kerze von links brennen" }
      - { id: e, label: E, image: ./img/opt-e.png, alt: "E: alle fünf Kerzen brennen" }
source:
  type: original
  work: Informatik-Biber 2016
  year: 2016
  page: 30
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2016/Biberheft2016-mit-Loesungen.pdf
  country: CH
  license: CC BY-SA 3.0
---
Heute ist Bodos elfter Geburtstag. Bodos Mutter findet aber nur noch fünf Kerzen. Zum Glück weiß sie, wie sie die Zahl elf mit fünf Kerzen darstellen kann. Sie steckt sie alle nebeneinander auf den Kuchen:

- Die Kerze ganz rechts ist 1 wert.
- Jede andere Kerze ist das Doppelte der Kerze rechts daneben wert.
- Die Werte aller brennenden Kerzen werden addiert.

Zum Beispiel:

![Fünf Kerzenreihen. Es brennt jeweils nur die Kerze ganz rechts (Wert 1); nur die zweite von rechts (Wert 2); nur die mittlere (Wert 4); die ersten beiden von rechts: 2 + 1 = 3; die erste, dritte und fünfte von rechts: 16 + 4 + 1 = 21](./img/examples.png)

**Welche Kerzen brennen an Bodos elftem Geburtstag?**
