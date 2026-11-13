---
short: Ryd4
title: Baumtouren
summary: Försterin Flora will beliebtere Bäume erst später vorstellen. Aus drei früheren Touren muss eine gute Reihenfolge entstehen.
grades:
  "7-8": medium
  "9-10": easy
gi:
  content: [algorithms]
  process: [modelling, structuring]
topics: [sorting, graphs]
methods: [topological-sort]
mascot: beaver
interaction:
  format: sort-list
  props:
    direction: horizontal
    startLabel: zuerst
    endLabel: zuletzt
    items:
      - { id: oak, image: ./img/oak.png, alt: Eiche mit breiter dunkelgrüner Krone }
      - { id: round, image: ./img/round.png, alt: Laubbaum mit hellgrüner runder Krone und braunem Stamm }
      - { id: fir, image: ./img/fir.png, alt: Tanne }
      - { id: birch, image: ./img/birch.png, alt: Birke mit weißem Stamm }
      - { id: apple, image: ./img/apple.png, alt: Apfelbaum mit roten Äpfeln }
source:
  type: original
  work: Informatik-Biber 2024
  year: 2024
  page: 13
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2024/Biberheft_2024_web_komplett.pdf
  country: DE
  license: CC BY-SA 4.0
---
Försterin Flora bietet Baumtouren an. Dabei stellt sie einige Bäume im Wald näher vor. Von drei früheren Touren weiß sie, wie beliebt die Bäume bei ihren Gästen waren.

![Tour 1: Eiche < Laubbaum < Tanne < Apfelbaum. Tour 2: Laubbaum < Birke < Tanne < hellgrüner Laubbaum. Tour 3: Apfelbaum < Kiefer < hellgrüner Laubbaum](./img/tours.png)

*Baum 1 < Baum 2* bedeutet, dass Baum 1 weniger beliebt war als Baum 2.

Bei ihren nächsten Touren möchte Flora beliebtere Bäume erst später vorstellen – das Beste kommt zum Schluss. Sie will die Bäume immer in einer guten Reihenfolge vorstellen, die mit der Beliebtheit der Bäume bei allen drei früheren Touren übereinstimmt.

Ein Beispiel: Falls Flora zwei Bäume in einer guten Reihenfolge vorstellen will, von denen auf Tour 1 der eine weniger beliebt war als der andere, dann muss sie den weniger beliebten zuerst vorstellen.

Auf ihrer nächsten Tour möchte Flora die fünf Bäume unten vorstellen: Eiche, hellgrüner Laubbaum, Tanne, Birke und Apfelbaum.

**Bestimme eine gute Reihenfolge dieser Bäume!**
