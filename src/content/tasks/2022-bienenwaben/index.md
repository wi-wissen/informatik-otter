---
short: f84L
title: Bienenwaben
summary: Sieben Bienen suchen ihre Wabe – jede Biene kennt nur einen Hinweis, wie die Nachbarwaben liegen.
grades:
  "3-4": medium
gi:
  content: [algorithms]
  process: [reasoning, modelling]
topics: [optimization]
methods: [backtracking]
mascot: beaver
interaction:
  format: match
  props:
    left:
      - { id: b1, image: ./img/bee-1.png, alt: Biene 1 }
      - { id: b2, image: ./img/bee-2.png, alt: Biene 2 }
      - { id: b3, image: ./img/bee-3.png, alt: Biene 3 }
      - { id: b4, image: ./img/bee-4.png, alt: Biene 4 }
      - { id: b5, image: ./img/bee-5.png, alt: Biene 5 }
      - { id: b6, image: ./img/bee-6.png, alt: Biene 6 }
      - { id: b7, image: ./img/bee-7.png, alt: Biene 7 }
    right:
      - { id: top, label: oben }
      - { id: ul, label: links oben }
      - { id: ur, label: rechts oben }
      - { id: mid, label: Mitte }
      - { id: ll, label: links unten }
      - { id: lr, label: rechts unten }
      - { id: bot, label: unten }
source:
  type: original
  work: Informatik-Biber 2022
  year: 2022
  page: 17
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2022/Biberheft_2022_mit_Loesungen_web.pdf
  country: FR
  license: CC BY-SA 4.0
---
Die Bienen wollen auf die sieben Waben. Unter jeder Biene zeigt ein Hinweis, wann eine Wabe für sie richtig ist: Die dunkle Wabe im Hinweis ist die Wabe der Biene, die hellen Waben zeigen, wie die übrigen Waben dazu liegen müssen.

![Der Bienenstock aus sieben Waben: eine oben, zwei links, eine in der Mitte, zwei rechts und eine unten](./img/hive.png)

**Ordne jeder Biene eine richtige Wabe zu!** Jede Wabe darf nur einmal vergeben werden.
