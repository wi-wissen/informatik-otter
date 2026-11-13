---
short: 2CaR
title: Lieblingsgeschenk a
summary: Drei Geschenke für drei Kinder, die jeweils ihre Lieblings- und zweitliebste Wahl nennen. Wer bekommt was?
grades:
  "3-4": medium
  "5-6": easy
  "7-8": easy
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
      - { id: k1, image: ./img/kid1.png, alt: "Kind 1: Lieblingsgeschenk Ahornblatt, zweitliebstes Birkenblatt" }
      - { id: k2, image: ./img/kid2.png, alt: "Kind 2: Lieblingsgeschenk Birkenblatt, zweitliebstes Weidenblatt" }
      - { id: k3, image: ./img/kid3.png, alt: "Kind 3: Lieblingsgeschenk Birkenblatt, zweitliebstes Ahornblatt" }
    right:
      - { id: g1, image: ./img/gift1.png, alt: Geschenk mit Ahornblatt }
      - { id: g2, image: ./img/gift2.png, alt: Geschenk mit Birkenblatt }
      - { id: g3, image: ./img/gift3.png, alt: Geschenk mit Weidenblatt }
source:
  type: original
  work: Informatik-Biber 2021
  year: 2021
  page: 36
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2021/Biberheft_2021_mit_Loesungen_web.pdf
  country: DE
  license: CC BY-SA 4.0
---
Die Biberfamilie hat drei Geschenke für ihre drei Kinder. Jedes Kind nennt zuerst sein Lieblingsgeschenk und dann das zweitliebste. Die Geschenke sollen richtig zugeteilt werden:

1. Möglichst viele Kinder sollen ihr Lieblingsgeschenk bekommen.
2. Die übrigen sollen das zweitliebste bekommen.

**Ordne jedem Kind das richtige Geschenk zu.**
