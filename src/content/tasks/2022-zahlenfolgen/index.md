---
short: 4EcG
title: Zahlenfolgen
summary: Zahlen in Folgen sind selbst Positionen in anderen Folgen. Welche Zahl steht am Ende einer verschachtelten Abfrage?
grades:
  "7-8": hard
  "9-10": medium
  "11-13": easy
gi:
  content: [information-data]
  process: [modelling, reasoning]
topics: [data-structures]
methods: []
mascot: beaver
interaction:
  format: input
  props:
    kind: number
    placeholder: Zahl
source:
  type: original
  work: Informatik-Biber 2022
  year: 2022
  page: 62
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2022/Biberheft_2022_mit_Loesungen_web.pdf
  country: AT
  license: CC BY-SA 4.0
---
Hier siehst du eine Folge von Zahlen, mit Namen X. An den Positionen 1 bis 5 in der Folge X stehen diese Zahlen: 5, 3, 2, 4, 1

![Folge X mit den Positionen 1 bis 5: 5, 3, 2, 4, 1](./img/x.png)

Die Zahl an einer bestimmten Position beschreiben wir, indem wir Namen und Position einklammern. Ein Beispiel: Die Zahl an Position 2 von Folge X beschreiben wir so: (X 2). Aktuell ist (X 2) = 3.

Eine so beschriebene Zahl in der Folge kann selbst auch eine Position sein. Zum Beispiel ist (X (X 2)) = (X 3) = 2.

Hier sind drei andere Folgen: A, B und C.

![Folge A: 3, 2, 4, 1, 5. Folge B: 5, 4, 1, 3, 2. Folge C: 2, 5, 4, 3, 1](./img/abc.png)

**Welche Zahl beschreiben wir so: (A (B (C 3))) ?**
