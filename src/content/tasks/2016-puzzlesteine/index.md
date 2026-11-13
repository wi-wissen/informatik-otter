---
short: G8Mc
title: Puzzlesteine
summary: Fünf Puzzlesteine mit besonderen Seitenformen lassen sich zu Pärchen zusammenschieben. Wie viele Pärchen gehen gleichzeitig?
grades:
  "3-4": medium
  "5-6": easy
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [optimization]
methods: [greedy, brute-force]
mascot: beaver
interaction:
  format: custom
  props:
    target: 2
    fits: [[1, 2], [1, 4], [2, 5], [1, 3], [2, 4]]
    stones:
      - { id: 1, image: ./img/stone-1.png, alt: "links eine dreieckige Kerbe, rechts eine rechteckige Kerbe" }
      - { id: 2, image: ./img/stone-2.png, alt: "links ein rechteckiger Zapfen, rechts ein halbrunder Zapfen" }
      - { id: 3, image: ./img/stone-3.png, alt: "links eine dreieckige Kerbe, rechts ein dreieckiger Zapfen" }
      - { id: 4, image: ./img/stone-4.png, alt: "links ein rechteckiger Zapfen, rechts eine rechteckige Kerbe" }
      - { id: 5, image: ./img/stone-5.png, alt: "links eine halbrunde Kerbe, rechts ein rechteckiger Zapfen" }
source:
  type: original
  work: Informatik-Biber 2016
  year: 2016
  page: 52
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2016/Biberheft2016-mit-Loesungen.pdf
  country: DE
  license: CC BY-SA 3.0
---
Die Biber haben ein neues Puzzle. Die fünf Puzzlesteine haben an den Seiten besondere Formen.

![Fünf rote Puzzlesteine nebeneinander. Stein 1: links dreieckige Kerbe, rechts rechteckige Kerbe. Stein 2: links rechteckiger Zapfen, rechts halbrunder Zapfen. Stein 3: links dreieckige Kerbe, rechts dreieckiger Zapfen. Stein 4: links rechteckiger Zapfen, rechts rechteckige Kerbe. Stein 5: links halbrunde Kerbe, rechts rechteckiger Zapfen.](./img/overview.png)

Du kannst die Steine zu Pärchen zusammenschieben, wenn ihre Formen ineinander passen. Wie viele Pärchen kannst du gleichzeitig bilden?

**Bilde so viele Pärchen wie möglich!**
