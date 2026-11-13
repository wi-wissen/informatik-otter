---
short: 2WH2
title: Biber-Burger
summary: Welcher der vier Burger erfüllt alle drei Regeln eines echten Biber-Burgers?
grades:
  "3-4": hard
  "5-6": medium
  "7-8": easy
gi:
  content: [algorithms]
  process: [reasoning]
topics: [logic, optimization]
methods: [boolean-logic]
mascot: beaver
interaction:
  format: choice
  props:
    columns: 4
    options:
      - { id: a, image: ./img/burger-a.png, alt: Burger A }
      - { id: b, image: ./img/burger-b.png, alt: Burger B }
      - { id: c, image: ./img/burger-c.png, alt: Burger C }
      - { id: d, image: ./img/burger-d.png, alt: Burger D }
source:
  type: original
  work: Informatik-Biber 2022
  year: 2022
  page: 13
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2022/Biberheft_2022_mit_Loesungen_web.pdf
  country: KR
  license: CC BY-SA 4.0
---
Für Biber-Burger gibt es diese Zutaten:

![Die Zutaten: Brötchen, Patty, Soße, Gurken, Salat, Zwiebeln, Käse](./img/ingredients.png)

Echte Biber-Burger erfüllen alle diese Bedingungen:

1. Die Soße ist direkt auf dem Patty.
2. Das Patty und der Käse liegen unter den Gurken, dem Salat und den Zwiebeln.
3. Die Zwiebeln berühren nicht das Brötchen.

**Nur einer dieser Burger ist ein echter Biber-Burger. Welcher?**
