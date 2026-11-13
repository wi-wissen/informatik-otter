---
short: vbc3
title: Bonbon-Spender
summary: Anna füllt Bonbons in einen Spender und möchte sie in genau einer bestimmten Reihenfolge essen.
grades:
  "3-4": easy
gi:
  content: [information-data]
  process: [modelling]
topics: [data-structures]
methods: [stack]
mascot: beaver
interaction:
  format: place
  props:
    background: ./img/dispenser-board.png
    width: 330
    height: 458
    trayLabel: Die fünf Bonbons
    zones:
      - { id: s1, label: "Platz 1 von oben", x: 110, y: 138, w: 76, h: 50 }
      - { id: s2, label: "Platz 2 von oben", x: 110, y: 188, w: 76, h: 50 }
      - { id: s3, label: "Platz 3 von oben", x: 110, y: 238, w: 76, h: 50 }
      - { id: s4, label: "Platz 4 von oben", x: 110, y: 288, w: 76, h: 50 }
      - { id: s5, label: "Platz 5 von oben", x: 110, y: 338, w: 76, h: 50 }
    items:
      - { id: c2, image: ./img/candy-2.png, alt: Bonbon 2 (rot mit Kirsche) }
      - { id: c3, image: ./img/candy-3.png, alt: Bonbon 3 (gelb mit Ananas) }
      - { id: c1, image: ./img/candy-1.png, alt: Bonbon 1 (grün mit Birne) }
      - { id: c4, image: ./img/candy-4.png, alt: Bonbon 4 (lila mit Trauben) }
      - { id: c5, image: ./img/candy-5.png, alt: Bonbon 5 (orange mit Apfel) }
source:
  type: original
  work: Informatik-Biber 2022
  year: 2022
  page: 19
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2022/Biberheft_2022_mit_Loesungen_web.pdf
  country: GB
  license: CC BY-SA 4.0
---
Anna füllt fünf Bonbons in einen Spender. Danach isst sie die Bonbons so nacheinander, wie sie oben aus dem Spender kommen. Sie möchte die Bonbons in dieser Reihenfolge essen: erst Bonbon 1, dann 2, 3, 4 und zuletzt 5.

![Die fünf Bonbons in der Reihenfolge, in der Anna sie essen möchte: 1 grün mit Birne, 2 rot mit Kirsche, 3 gelb mit Ananas, 4 lila mit Trauben, 5 orange mit Apfel](./img/order.png)

**Wie muss Anna die Bonbons in den Spender füllen?**
Ziehe die Bonbons richtig in den Spender.
