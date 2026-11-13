---
short: 3EhY
title: In einem Zug
summary: Ohne den Stift abzusetzen zeichnen und keinen Strich doppelt. Welche der Figuren geht so?
grades:
  "5-6": medium
  "7-8": easy
gi:
  content: [information-data, algorithms]
  process: [modelling, reasoning]
topics: [graphs]
methods: [euler-path]
mascot: beaver
interaction:
  format: choice
  props:
    columns: 4
    options:
      - { id: a, image: ./img/a.png, alt: "Zeichnung A" }
      - { id: b, image: ./img/b.png, alt: "Zeichnung B" }
      - { id: c, image: ./img/c.png, alt: "Zeichnung C" }
      - { id: d, image: ./img/d.png, alt: "Zeichnung D" }
source:
  type: original
  work: Informatik-Biber 2020
  year: 2020
  page: 34
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2020/Biberheft_2020_final_mit_Loesungen.pdf
  country: MK
  license: CC BY-SA 4.0
---
Eine Strichzeichnung besteht aus Punkten und Strichen. Jeder Strich verbindet zwei Punkte miteinander.

Manche Strichzeichnungen können in einem Zug gezeichnet werden. Das heißt:

- Der Stift wird erst vom Blatt abgehoben, wenn die Zeichnung fertig ist.
- Jeder Strich wird nur einmal gezeichnet.

Ein Beispiel:

![Eine Zeichnung wird in acht Schritten in einem Zug gezeichnet](./img/example.png)

**Welche dieser Strichzeichnungen kann in einem Zug gezeichnet werden?**
