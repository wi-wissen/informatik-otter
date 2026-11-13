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
  format: custom
  props:
    background: ./img/hive.png
    width: 382
    height: 396
    cellSize: 124
    cells:
      - { id: top, x: 192, y: 70, label: oben }
      - { id: ul, x: 77, y: 133, label: links oben }
      - { id: ur, x: 300, y: 133, label: rechts oben }
      - { id: mid, x: 192, y: 198, label: Mitte }
      - { id: ll, x: 77, y: 262, label: links unten }
      - { id: lr, x: 300, y: 262, label: rechts unten }
      - { id: bot, x: 192, y: 326, label: unten }
    bees:
      - { id: b1, image: ./img/bee-1.png, icon: ./img/bee-1-icon.png, alt: "Biene 1 mit ihrem Hinweis" }
      - { id: b2, image: ./img/bee-2.png, icon: ./img/bee-2-icon.png, alt: "Biene 2 mit ihrem Hinweis" }
      - { id: b3, image: ./img/bee-3.png, icon: ./img/bee-3-icon.png, alt: "Biene 3 mit ihrem Hinweis" }
      - { id: b4, image: ./img/bee-4.png, icon: ./img/bee-4-icon.png, alt: "Biene 4 mit ihrem Hinweis" }
      - { id: b5, image: ./img/bee-5.png, icon: ./img/bee-5-icon.png, alt: "Biene 5 mit ihrem Hinweis" }
      - { id: b6, image: ./img/bee-6.png, icon: ./img/bee-6-icon.png, alt: "Biene 6 mit ihrem Hinweis" }
      - { id: b7, image: ./img/bee-7.png, icon: ./img/bee-7-icon.png, alt: "Biene 7 mit ihrem Hinweis" }
source:
  type: original
  work: Informatik-Biber 2022
  year: 2022
  page: 17
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2022/Biberheft_2022_mit_Loesungen_web.pdf
  country: FR
  license: CC BY-SA 4.0
---
Die Bienen wollen auf die sieben Waben. Unter jeder Biene zeigt ein Hinweis, wann eine Wabe für sie richtig ist. Die dunkle Wabe im Hinweis ist die Wabe der Biene, die hellen Waben zeigen, wie die übrigen Waben dazu liegen müssen.

**Ziehe jede Biene auf eine richtige Wabe!** Jede Wabe darf nur einmal vergeben werden.
