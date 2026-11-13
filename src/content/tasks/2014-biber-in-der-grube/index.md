---
short: 3Ugm
title: Biber in der Grube
summary: Sieben Biber müssen nacheinander drei Gruben überwinden. In welcher Reihenfolge gehen sie danach weiter?
grades:
  "7-8": hard
  "9-10": medium
  "11-13": medium
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [data-structures]
methods: [stack]
mascot: beaver
interaction:
  format: choice
  props:
    options:
      - { id: a, label: 4 7 5 6 1 2 3 }
      - { id: b, label: 2 1 6 5 3 4 7 }
      - { id: c, label: 6 5 7 4 3 2 1 }
      - { id: d, label: 5 7 6 1 4 3 2 }
source:
  type: original
  work: Informatik-Biber 2014
  year: 2014
  page: 12
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2014/Biberheft2014-mit-Loesungen.pdf
  license: CC BY-NC-SA 3.0
---
Die Biber gehen häufig in Gruppen durch den dunklen Wald. Im Wald sind die Pfade sehr schmal. Deshalb gehen sie dort immer in einer Reihe, ohne sich zu überholen.

Auf den Pfaden im Wald gibt es viele Gruben. Die Biber überwinden eine Grube so: Zuerst springen so viele Biber in die Grube, wie dort hinein passen. Danach gehen die anderen aus der Gruppe über die volle Grube. Schließlich klettern die Biber in der Grube der Reihe nach aus der Grube hinaus. Dann kann die Gruppe weitergehen.

Die Bilder zeigen, wie 5 Biber eine Grube überwinden. In diese Grube passen 3 Biber hinein.

![Vier Bilder: 5 Biber vor der Grube, 3 Biber in der Grube und 2 darüber, die 2 sind hinübergegangen, am Ende kommen die Biber in der Reihenfolge 4 5 3 2 1 heraus](./img/example.png)

Eine Gruppe von 7 Bibern geht durch den dunklen Wald. Die Biber müssen drei Gruben überwinden. In die erste Grube passen 4 Biber, in die zweite passen 2 Biber, und in die dritte passen 3 Biber.

![Der Weg mit drei Gruben; rechts stehen die Biber in der Reihenfolge 1 2 3 4 5 6 7](./img/path.png)

**In welcher Reihenfolge gehen die Biber nach der dritten Grube weiter?**
