---
short: H52A
title: Umstapeln
summary: Bob baut einen Ziegelsteinstapel Stein für Stein an anderer Stelle neu auf. Wie kann der neue Stapel aussehen?
grades:
  "11-13": hard
gi:
  content: [algorithms]
  process: [reasoning, modelling]
topics: [sorting, graphs]
methods: [topological-sort]
mascot: beaver
interaction:
  format: choice
  props:
    columns: 2
    options:
      - { id: a, label: A, image: ./img/opt-a.png, alt: "Stapel A: untere Reihe mit Stern-Stein und drei Kreis-Steinen" }
      - { id: b, label: B, image: ./img/opt-b.png, alt: "Stapel B: untere Reihe mit zwei Stern-Steinen, einem Wellen-Stein und einem Stern-Stein" }
      - { id: c, label: C, image: ./img/opt-c.png, alt: "Stapel C: untere Reihe mit vier Wellen-Steinen" }
      - { id: d, label: D, image: ./img/opt-d.png, alt: "Stapel D: untere Reihe mit Stern-Stein, Wellen-Stein, Stern-Stein und Wellen-Stein" }
source:
  type: original
  work: Informatik-Biber 2024
  year: 2024
  page: 69
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2024/Biberheft_2024_web_komplett.pdf
  country: FI
  license: CC BY-SA 4.0
---
Bob hat einige Ziegelsteine ordentlich gestapelt. Nun soll er den Stapel woanders neu aufbauen. Damit auch der neue Stapel ordentlich wird, arbeitet Bob nach dieser Methode, Stein für Stein, bis alle Steine umgestapelt sind:

- Er nimmt irgendeinen Stein, auf dem kein anderer Stein liegt, vom Stapel und
- legt ihn auf den neuen Stapel, entweder auf den Boden oder auf einen oder zwei andere Steine, keinesfalls aber unter einen anderen Stein.

Links siehst du Bobs ersten Stapel. Rechts ist der Platz für den neuen Stapel.

![Links Bobs Stapel aus fünf Reihen (von oben nach unten 4, 3, 4, 3 und 4 Steine) mit Stern-, Wellen- und Kreis-Steinen, rechts der leere Platz für den neuen Stapel](./img/start.png)

**Wie kann Bobs neuer Stapel aussehen, wenn er fertig ist?**
