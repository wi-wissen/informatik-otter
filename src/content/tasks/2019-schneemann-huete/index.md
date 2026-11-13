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
  format: match
  props:
    left:
      - { id: l1, image: ./img/row1.png, alt: "Reihe 1: fünf Schneemänner, von links nach rechts immer größer" }
      - { id: l2, image: ./img/row2.png, alt: "Reihe 2: fünf Schneemänner, von links nach rechts: mittel, klein, ganz klein, ganz groß, groß" }
      - { id: l3, image: ./img/row3.png, alt: "Reihe 3: fünf Schneemänner, von links nach rechts immer kleiner" }
      - { id: l4, image: ./img/row4.png, alt: "Reihe 4: fünf Schneemänner, von links nach rechts: groß, mittel, ganz groß, ganz klein, klein" }
    right:
      - { id: r1, image: ./img/stack1.png, alt: "Hutstapel 1: fünf Hüte, oben der kleinste, nach unten immer größer" }
      - { id: r2, image: ./img/stack2.png, alt: "Hutstapel 2: fünf Hüte, oben der größte, nach unten immer kleiner" }
      - { id: r3, image: ./img/stack3.png, alt: "Hutstapel 3: fünf Hüte, von oben: mittel, klein, ganz klein, ganz groß, groß" }
      - { id: r4, image: ./img/stack4.png, alt: "Hutstapel 4: fünf Hüte, von oben: groß, mittel, ganz groß, ganz klein, klein" }
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

![Ein Schneemann mit rotem Hut](./img/snowman.png)

**Verbinde jede Schneemann-Reihe mit dem passenden Hutstapel.**
