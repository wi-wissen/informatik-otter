---
short: w5qc
title: Lieblingsgeschenk b
summary: Fünf Geschenke für fünf Kinder, zwei Kinder wollen dasselbe. Wer bekommt was, damit möglichst viele glücklich sind?
grades:
  "7-8": medium
  "9-10": easy
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [optimization, graphs]
methods: [matching]
mascot: beaver
interaction:
  format: match
  props:
    left:
      - { id: k1, image: ./img/kid1.png, alt: "Kind 1: Lieblingsgeschenk Birkenblatt, zweitliebstes Ahornblatt" }
      - { id: k2, image: ./img/kid2.png, alt: "Kind 2: Lieblingsgeschenk Ahornblatt, zweitliebstes Weidenblatt" }
      - { id: k3, image: ./img/kid3.png, alt: "Kind 3: Lieblingsgeschenk gelbes Eichenblatt, zweitliebstes Weidenblatt" }
      - { id: k4, image: ./img/kid4.png, alt: "Kind 4: Lieblingsgeschenk Ahornblatt, zweitliebstes Birkenblatt" }
      - { id: k5, image: ./img/kid5.png, alt: "Kind 5: Lieblingsgeschenk grünes Eichenblatt, zweitliebstes Birkenblatt" }
    right:
      - { id: g1, image: ./img/gift1.png, alt: Geschenk mit Birkenblatt }
      - { id: g2, image: ./img/gift2.png, alt: Geschenk mit Ahornblatt }
      - { id: g3, image: ./img/gift3.png, alt: Geschenk mit Weidenblatt }
      - { id: g4, image: ./img/gift4.png, alt: Geschenk mit gelbem Eichenblatt }
      - { id: g5, image: ./img/gift5.png, alt: Geschenk mit grünem Eichenblatt }
source:
  type: original
  work: Informatik-Biber 2021
  year: 2021
  page: 37
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2021/Biberheft_2021_mit_Loesungen_web.pdf
  country: DE
  license: CC BY-SA 4.0
---
Die Biberfamilie hat fünf Geschenke für ihre fünf Kinder. Jedes Kind nennt zuerst sein Lieblingsgeschenk und dann das zweitliebste. Die Geschenke sollen richtig zugeteilt werden:

1. Möglichst viele Kinder sollen ihr Lieblingsgeschenk bekommen.
2. Die übrigen sollen das zweitliebste bekommen.

**Ordne jedem Kind das richtige Geschenk zu.**
