---
short: B9vH
title: Pizza-Party
summary: John möchte eine Pizza mit drei Belägen backen, die möglichst viele Wünsche seiner Gäste erfüllt. Welche drei sind es?
grades:
  "3-4": hard
  "7-8": easy
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [optimization]
methods: [greedy]
mascot: beaver
interaction:
  format: place
  props:
    background: ./img/pizza.png
    width: 504
    height: 486
    trayLabel: Beläge
    zones:
      - { id: p1, label: "Belag 1", x: 104, y: 195, w: 100, h: 100 }
      - { id: p2, label: "Belag 2", x: 204, y: 195, w: 100, h: 100 }
      - { id: p3, label: "Belag 3", x: 304, y: 195, w: 100, h: 100 }
    items:
      - { id: chili, image: ./img/chili.png, alt: Chili }
      - { id: pilze, image: ./img/pilze.png, alt: Pilze }
      - { id: kaese, image: ./img/kaese.png, alt: Käse }
      - { id: ananas, image: ./img/ananas.png, alt: Ananas }
      - { id: zwiebeln, image: ./img/zwiebeln.png, alt: Zwiebelringe }
      - { id: kraeuter, image: ./img/kraeuter.png, alt: Kräuter }
source:
  type: original
  work: Informatik-Biber 2024
  year: 2024
  page: 47
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2024/Biberheft_2024_web_komplett.pdf
  country: DE
  license: CC BY-SA 4.0
---
John feiert eine Pizzaparty. Er weiß, welche Beläge sich seine Gäste auf der Pizza wünschen.

| Gast | Wunsch 1 | Wunsch 2 | Wunsch 3 |
|---|---|---|---|
| Alice | ![Chili](./img/chili.png) | ![Pilze](./img/pilze.png) | ![Käse](./img/kaese.png) |
| Bob | ![Pilze](./img/pilze.png) | ![Ananas](./img/ananas.png) | ![Zwiebeln](./img/zwiebeln.png) |
| Cem | ![Pilze](./img/pilze.png) | ![Kräuter](./img/kraeuter.png) | ![Käse](./img/kaese.png) |
| Dana | ![Pilze](./img/pilze.png) | ![Käse](./img/kaese.png) | ![Zwiebeln](./img/zwiebeln.png) |

John möchte eine Pizza mit insgesamt drei Belägen backen. Er wählt drei Beläge so aus, dass er möglichst viele Wünsche seiner Gäste erfüllt.

**Mit welchen drei Belägen erfüllt John die meisten Wünsche?**

Ziehe dazu drei Beläge auf die Pizza.
