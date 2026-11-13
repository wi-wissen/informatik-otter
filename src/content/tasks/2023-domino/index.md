---
short: qsj9
title: Domino
summary: Acht Dominosteine sollen in eine lange Reihe gelegt werden. Welche können niemals am Rand liegen?
grades:
  "11-13": hard
gi:
  content: [information-data, algorithms]
  process: [modelling, reasoning]
topics: [graphs, modelling]
methods: [euler-path]
mascot: beaver
interaction:
  format: choice
  props:
    multiple: true
    columns: 4
    options:
      - { id: d1, image: ./img/d1.png, alt: "Stein 5 und 4" }
      - { id: d2, image: ./img/d2.png, alt: "Stein 1 und 5" }
      - { id: d3, image: ./img/d3.png, alt: "Stein 4 und 1" }
      - { id: d4, image: ./img/d4.png, alt: "Stein 5 und 2" }
      - { id: d5, image: ./img/d5.png, alt: "Stein 1 und 2" }
      - { id: d6, image: ./img/d6.png, alt: "Stein 6 und 2" }
      - { id: d7, image: ./img/d7.png, alt: "Stein 5 und 3" }
      - { id: d8, image: ./img/d8.png, alt: "Stein 6 und 3" }
source:
  type: original
  work: Informatik-Biber 2023
  year: 2023
  page: 23
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2023/Biberheft_2023_web_komplett.pdf
  country: DE
  license: CC BY-SA 4.0
---
Jeder Dominostein hat zwei Felder. Auf jedem Feld sind 1 bis 6 Punkte.

Du hast diese acht Steine (von links nach rechts: 5 und 4, 1 und 5, 4 und 1, 5 und 2, 1 und 2, 6 und 2, 5 und 3, 6 und 3 Punkte).

Alle acht Steine sollst du so in eine Reihe legen, dass auf den angrenzenden Feldern zweier benachbarter Steine immer gleich viele Punkte sind.

![Richtig: zwei Steine mit je 4 Punkten nebeneinander](./img/ex-ok.png) ![Falsch: Felder mit 1 und 4 Punkten nebeneinander](./img/ex-bad.png)

Du kannst mehrere solcher Reihen legen. Es gibt aber Steine, die du auf keinen Fall an den Anfang oder das Ende deiner Reihe legen kannst.

![Eine Reihe aus acht Steinen; der erste und der letzte Stein sind markiert](./img/ends.png)

**Welche Steine sind das? Wähle alle aus.**
