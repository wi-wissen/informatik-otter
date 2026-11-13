---
short: 9pVf
title: Richtige Rechtecke?
summary: Ein Roboter zeichnet mit Anweisungen und Wiederholungen ein Rechteck. Welches Programm ist falsch?
grades:
  "11-13": hard
gi:
  content: [algorithms]
  process: [reasoning, modelling]
topics: [programming]
methods: [loop]
mascot: beaver
interaction:
  format: choice
  props:
    options:
      - { id: a, label: "4×(2×(Orange, Turn), Orange, 3×(Black), Orange, Turn)" }
      - { id: b, label: "4×(3×Black, 3×(Orange, Turn), Orange)" }
      - { id: c, label: "4×(2×(Orange, Turn), 3×(Black), 2×(Orange, Turn))" }
      - { id: d, label: "4×(Black, 3×(Orange, Turn), Orange, 2×(Black))" }
source:
  type: original
  work: Informatik-Biber 2014
  year: 2014
  page: 42
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2014/Biberheft2014-mit-Loesungen.pdf
  license: CC BY-NC-SA 3.0
---
Ein Roboter ist darauf spezialisiert, Rechtecke zu zeichnen. Er kann die folgenden einfachen Anweisungen ausführen:

| Anweisung | Wirkung |
|---|---|
| `Orange` | zeichne eine orange Linie der Länge 1 |
| `Black` | zeichne eine schwarze Linie der Länge 1 |
| `Turn` | drehe dich um 90° im Uhrzeigersinn |

Außerdem kann der Roboter die folgenden Anweisungen ausführen, die aus anderen Anweisungen A und B zusammengesetzt werden; A und B selbst können einfache oder zusammengesetzte Anweisungen sein:

| Anweisung | Wirkung |
|---|---|
| `A, B` | führe A aus und führe danach B aus |
| `n×(B)` | führe B n-mal aus |

Der Roboter soll die folgende Zeichnung erstellen.

![Ein schwarzes Quadrat der Seitenlänge 3, an jeder Ecke ein orangefarbenes Quadrat der Seitenlänge 1 außen](./img/target.png)

**Welche Anweisung ergibt NICHT die gewünschte Zeichnung?**
