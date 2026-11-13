---
short: Pmw6
title: Pfeile biegen
summary: Mit Zeigeranweisungen biegt man Pfeile zwischen Kästen um. Welche Folge verwandelt das linke Bild in das rechte?
grades:
  "9-10": hard
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [programming, data-structures]
methods: [sequence]
mascot: beaver
interaction:
  format: choice
  props:
    options:
      - { id: a, label: "X <- Y, Y <- Z, Z <- X" }
      - { id: b, label: "X <- Z, Z <- X, Y <- W" }
      - { id: c, label: "Z <- Y, X <- Z, Y <- W" }
      - { id: d, label: "Z <- X, X <- Y, Y <- W" }
source:
  type: original
  work: Informatik-Biber 2012
  year: 2012
  page: 31
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2012/Biberheft2012-mit-Loesungen.pdf
  license: CC BY-NC-SA 3.0
---
Die Anweisung `A <- B` ändert ein Bild mit Kästen und Pfeilen wie folgt: Der Pfeil von Kasten A zeigt nun auf denselben Kasten, auf den der Pfeil von Kasten B zeigt.

![Vorher: Der Pfeil von A zeigt auf Kasten D, der Pfeil von B auf Kasten C](./img/example-before.png) ![Nachher: Der Pfeil von A zeigt nun auf Kasten C, auf den auch der Pfeil von B zeigt](./img/example-after.png)

**Welche Folge von Anweisungen, nacheinander ausgeführt, ändert das linke Bild in das rechte Bild?**

![Links: W zeigt auf X, X zeigt auf Y, Y zeigt auf Z, Z zeigt auf X. Rechts: W zeigt auf X, X zeigt auf Z, Y zeigt auf X, Z zeigt auf Y](./img/task.png)
