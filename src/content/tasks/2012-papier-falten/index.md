---
short: ode3
title: Papier falten
summary: Die Biber haben eine Sprache zum Papierfalten erfunden. Wie sieht das Papier nach drei Anweisungen aus?
grades:
  "9-10": hard
  "11-13": medium
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [programming]
methods: [sequence]
mascot: beaver
interaction:
  format: choice
  props:
    columns: 4
    options:
      - { id: a, image: ./img/a.png, alt: Faltung A }
      - { id: b, image: ./img/b.png, alt: Faltung B }
      - { id: c, image: ./img/c.png, alt: Faltung C }
      - { id: d, image: ./img/d.png, alt: Faltung D }
source:
  type: original
  work: Informatik-Biber 2012
  year: 2012
  page: 30
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2012/Biberheft2012-mit-Loesungen.pdf
  license: CC BY-NC-SA 3.0
---
Die Biber haben eine Sprache des Papierfaltens entworfen. Mit der Sprache können sie beschreiben, wie man ein Stück Papier mit geraden Kanten falten soll. Die Anweisungen in dieser Sprache heißen FALTE. `z = FALTE(x,y)` bedeutet zum Beispiel: Falte das Stück Papier so, dass seine Kante x genau auf seiner Kante y zu liegen kommt. Auf diese Weise entsteht eine neue Kante. Diese wird z genannt. Ein Beispiel mit zwei Anweisungen hintereinander:

![Ein Rechteck mit den Kanten a (links), b (oben), c (rechts), d (unten); nach e = FALTE(a,b) ist die linke obere Ecke zu einem Dreieck umgeklappt, nach f = FALTE(a,e) ist das Papier noch einmal gefaltet](./img/example.png)

Denk dir nun ein rechteckiges Papier, dessen Kante b zweimal so lang ist wie seine Kante a. Lass das Papier während des Faltens auf dem Tisch liegen (nicht wenden). Führe diese drei Anweisungen nacheinander aus:

`e = FALTE(c,a); f = FALTE(c,d); g = FALTE(a,f)`

![Das rechteckige Papier mit den Kanten a (links), b (oben), c (rechts) und d (unten); b ist doppelt so lang wie a](./img/paper.png)

**Wie sieht das Papier danach aus?**
