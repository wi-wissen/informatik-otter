---
short: f6R5
title: Martinas Dorf
summary: Martina hat nur die schnellsten Wege zu allen Häusern eingezeichnet. Welche vollständige Dorfkarte passt nicht dazu?
grades:
  "5-6": hard
  "7-8": medium
  "9-10": easy
gi:
  content: [information-data, algorithms]
  process: [modelling, reasoning]
topics: [graphs, trees]
methods: [bfs]
mascot: beaver
interaction:
  format: choice
  props:
    columns: 2
    options:
      - { id: a, label: A, image: ./img/a.png, alt: "Karte A" }
      - { id: b, label: B, image: ./img/b.png, alt: "Karte B" }
      - { id: c, label: C, image: ./img/c.png, alt: "Karte C" }
      - { id: d, label: D, image: ./img/d.png, alt: "Karte D" }
source:
  type: original
  work: Informatik-Biber 2023
  year: 2023
  page: 39
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2023/Biberheft_2023_web_komplett.pdf
  country: AT
  license: CC BY-SA 4.0
---
In Martinas Dorf gibt es sechs Häuser. Außerdem gibt es Wege, über die man von einem Haus zum nächsten gehen kann. Für alle diese Wege benötigt Martina die gleiche Zeit.

Martina hat eine besondere Karte des Dorfs gezeichnet. Sie hat darin Wege eingezeichnet, über die sie am schnellsten zu den anderen Häusern gehen kann.

![Martinas besondere Karte: Von Martinas Haus gehen zwei Wege ab, einer zu einem Haus unten und einer zu einem Haus oben, von dem ein Weg zu einem Haus rechts oben und einer zu einem weiteren Haus führt, das wiederum mit einem Haus ganz rechts verbunden ist](./img/karte.png)

Natürlich gibt es auch eine richtige Karte des Dorfs, mit allen Wegen.

**Welche dieser Zeichnungen kann nicht die richtige Karte sein?**
