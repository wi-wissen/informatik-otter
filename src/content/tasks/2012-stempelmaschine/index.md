---
short: y1UL
title: Stempelmaschine
summary: Eine Stempelmaschine färbt ein rotes Blatt nach Programm-Karten. Die Karten sind durcheinander geraten. Was kommt heraus?
grades:
  "5-6": medium
  "7-8": easy
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
      - { id: a, image: ./img/a.png, alt: "Blatt A: oben grün, unten rot mit gelber Scheibe links unten" }
      - { id: b, image: ./img/b.png, alt: "Blatt B: oben blau mit gelber Scheibe rechts, unten rot" }
      - { id: c, image: ./img/c.png, alt: "Blatt C: oben grün mit gelber Scheibe rechts, unten blau" }
      - { id: d, image: ./img/d.png, alt: "Blatt D: oben blau mit gelber Scheibe rechts, unten grün" }
source:
  type: original
  work: Informatik-Biber 2012
  year: 2012
  page: 36
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2012/Biberheft2012-mit-Loesungen.pdf
  license: CC BY-NC-SA 3.0
---
Eine einfache Stempelmaschine wird durch Programm-Karten gesteuert. Ein rotes Blatt Papier soll eingefärbt werden. Die Befehle auf den Programm-Karten sollen in der normalen Reihenfolge (1–2–3–4) ausgeführt werden:

1. Stempele die untere Hälfte blau (das wird der Himmel).
2. Drehe das Papier um 180 Grad.
3. Stempele die untere Hälfte grün (das sei das Gras).
4. Stempele oben rechts eine gelbe Scheibe (das sei die Sonne).

So soll sich das rote Papier verändern:

![Rotes Blatt; nach Befehl 1 oben rot, unten blau; nach Befehl 2 oben blau, unten rot; nach Befehl 3 oben blau, unten grün; nach Befehl 4 zusätzlich eine gelbe Scheibe oben rechts](./img/plan.png)

Unglücklicherweise kamen die Programm-Karten durcheinander und die Befehle wurden in der Reihenfolge (3 – 1 – 2 – 4) ausgeführt.

**Wie sah das Blatt Papier danach aus?**
