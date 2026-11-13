---
short: kcx7
title: Zahlendreher
summary: Vier Knöpfe verdrehen die Zahlen eines 3×3-Bretts im Uhrzeigersinn. Wo steht die 4 nach D, C, B, B?
grades:
  "5-6": medium
  "7-8": easy
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [programming, modelling]
methods: [sequence]
mascot: beaver
interaction:
  format: choice
  props:
    columns: 4
    options:
      - { id: a, image: ./img/a.png, alt: "Die 4 steht in der Mitte der linken Spalte" }
      - { id: b, image: ./img/b.png, alt: "Die 4 steht oben in der Mitte" }
      - { id: c, image: ./img/c.png, alt: "Die 4 steht in der Mitte der rechten Spalte" }
      - { id: d, image: ./img/d.png, alt: "Die 4 steht unten in der Mitte" }
source:
  type: original
  work: Informatik-Biber 2012
  year: 2012
  page: 46
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2012/Biberheft2012-mit-Loesungen.pdf
  license: CC BY-NC-SA 3.0
---
Im Spiel „Zahlendreher“ kann man die Zahlen 1 bis 9 durcheinander bringen. Zu Beginn einer Spielrunde sind die Zahlen immer wie im linken Bild platziert. Wenn man einen der Knöpfe A, B, C oder D drückt, werden die Zahlen rund um den Knopf im Uhrzeigersinn verdreht. Drückt man z. B. Knopf A, dann sind danach die Zahlen wie im rechten Bild platziert.

![Ausgangsstellung: 1 2 3 / 4 5 6 / 7 8 9. Die Knöpfe A, B, C und D sitzen in den vier Ecken des mittleren Feldes: A oben links, B oben rechts, C unten rechts, D unten links](./img/start.png) ![Nach Knopf A: 4 1 3 / 5 2 6 / 7 8 9](./img/after-a.png)

Du beginnst eine neue Spielrunde und drückst nun nacheinander folgende Knöpfe: **D, C, B, B.**

**Wo ist anschließend die Zahl 4 platziert?**
