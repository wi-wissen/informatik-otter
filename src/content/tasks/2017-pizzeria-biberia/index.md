---
short: ecp4
title: Pizzeria Biberia
summary: Ein kleiner Pizzaofen, sieben bestellte Gerichte und hungrige Gäste. Wie schnell sind alle fertig?
grades:
  "7-8": hard
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [optimization]
methods: [greedy, scheduling]
mascot: beaver
interaction:
  format: input
  props:
    kind: number
    suffix: Minuten
source:
  type: original
  work: Informatik-Biber 2017
  year: 2017
  page: 47
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2017/Biberheft2017-mit-Loesungen.pdf
  country: CH
  license: CC BY-SA 4.0
---
Die Pizzeria Biberia hat nur einen kleinen Pizzaofen. Deshalb kann der Pizzabäcker nur wenige Gerichte gleichzeitig backen, nämlich:

![Die drei möglichen Ofenfüllungen: drei Ciabatta-Brote, oder ein Ciabatta-Brot und eine große Pizza, oder eine kleine Pizza und zwei Ciabatta-Brote](./img/ovens.png)

Der Pizzabäcker kann aber Gerichte einzeln in den Ofen legen oder aus dem Ofen holen. Die Gerichte müssen unterschiedlich lange im Ofen sein: eine kleine Pizza 10 Minuten, eine große Pizza 15 Minuten und ein Ciabatta-Brot 20 Minuten.

Heute ist viel los: Die Gäste bestellen

- eine kleine Pizza,
- zwei große Pizzen und
- vier Ciabatta-Brote.

Die Gäste sind hungrig. Der Pizzabäcker soll die bestellten Gerichte so schnell wie möglich backen.

**In wie vielen Minuten kann der Pizzabäcker die bestellten Gerichte so schnell wie möglich backen?**
