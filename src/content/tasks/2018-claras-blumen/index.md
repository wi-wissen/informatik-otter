---
short: VH6m
title: Claras Blumen
summary: Clara will einen Strauß mit genau passender Mischung aus Blumensorten und Farben. Welcher der vier erfüllt alle ihre Wünsche?
grades:
  "3-4": hard
  "5-6": medium
gi:
  content: [information-data]
  process: [reasoning, modelling]
topics: [databases, logic]
methods: [database-query, boolean-logic]
mascot: beaver
interaction:
  format: choice
  props:
    columns: 4
    options:
      - { id: a, image: ./img/bouquet-a.png, alt: Blumenstrauß A }
      - { id: b, image: ./img/bouquet-b.png, alt: Blumenstrauß B }
      - { id: c, image: ./img/bouquet-c.png, alt: Blumenstrauß C }
      - { id: d, image: ./img/bouquet-d.png, alt: Blumenstrauß D }
source:
  type: original
  work: Informatik-Biber 2018
  year: 2018
  page: 22
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2018/Biberheft2018-mit-Loesungen.pdf
  country: CH
  license: CC BY-SA 4.0
---
Clara liebt Blumen! Im Blumenladen gibt es diese Sorten:

![Die vier Sorten: Gladiolen, Lilien, Tulpen und Rosen](./img/flowers.png)

Jede Sorte ist in diesen Farben erhältlich: **Weiß**, **Blau** und **Gelb**.

Clara möchte einen Blumenstrauß kaufen. Aber sie hat besondere Wünsche:

1. Jede Farbe soll genau zweimal vorkommen,
2. Blumen der gleichen Sorte sollen nicht die gleiche Farbe haben und
3. jede Sorte darf höchstens zweimal vorkommen.

**Welchen Blumenstrauß wird Clara kaufen?**
