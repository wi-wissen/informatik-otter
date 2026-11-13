---
short: 9pti
title: Schneemann-Hüte
summary: Fünf Schneemänner in einer Reihe und ein Stapel Hüte. Welcher Stapel gehört zu welcher Reihe?
grades:
  "3-4": hard
  "5-6": easy
gi:
  content: [information-data]
  process: [modelling, reasoning]
topics: [data-structures, modelling]
methods: [stack, queue]
mascot: beaver
interaction:
  format: custom
  props:
    background: ./img/board.png
    width: 552
    height: 898
    trayLabel: Hutstapel
    zones:
      - { id: z1, label: Reihe 1, x: 2, y: 0, w: 120, h: 221 }
      - { id: z2, label: Reihe 2, x: 2, y: 227, w: 120, h: 221 }
      - { id: z3, label: Reihe 3, x: 2, y: 454, w: 120, h: 221 }
      - { id: z4, label: Reihe 4, x: 2, y: 681, w: 120, h: 221 }
    items:
      - { id: s1, image: ./img/stack1.png, alt: "Hutstapel 1: fünf Hüte, oben der kleinste, nach unten immer größer" }
      - { id: s2, image: ./img/stack2.png, alt: "Hutstapel 2: fünf Hüte, oben der größte, nach unten immer kleiner" }
      - { id: s3, image: ./img/stack3.png, alt: "Hutstapel 3: fünf Hüte, von oben: mittel, klein, ganz klein, ganz groß, groß" }
      - { id: s4, image: ./img/stack4.png, alt: "Hutstapel 4: fünf Hüte, von oben: groß, mittel, ganz groß, ganz klein, klein" }
source:
  type: original
  work: Informatik-Biber 2019
  year: 2019
  page: 44
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2019/Biberheft2019-mit-Loesungen.pdf
  country: LT
  license: CC BY-SA 4.0
---
Die Schneemänner bekommen Hüte. Sie stellen sich in vier Reihen an. Jede Reihe sucht sich den passenden Hutstapel aus. Dann nimmt der erste Schneemann (links) den obersten Hut vom Stapel, der zweite den nächsten Hut – und so weiter. Am Ende hat jeder den passenden Hut: Der kleinste Schneemann hat den kleinsten Hut, der zweitkleinste Schneemann den zweitkleinsten Hut – und so weiter.

**Verbinde jede Schneemann-Reihe mit dem passenden Hutstapel.** Ziehe dazu jeden Hutstapel neben seine Reihe.
