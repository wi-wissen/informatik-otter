---
short: awt2
title: Digitale Bäume
summary: Aus einem einzigen Stück wächst in vier Schritten ein Baum. Nach welcher Wachstumsregel ist er entstanden?
grades:
  "11-13": hard
gi:
  content: [languages-automata]
  process: [modelling, reasoning]
topics: [formal-languages, recursion]
methods: []
mascot: beaver
interaction:
  format: choice
  props:
    columns: 4
    options:
      - { id: a, image: ./img/a.png, alt: "Regel A" }
      - { id: b, image: ./img/b.png, alt: "Regel B" }
      - { id: c, image: ./img/c.png, alt: "Regel C" }
      - { id: d, image: ./img/d.png, alt: "Regel D" }
source:
  type: original
  work: Informatik-Biber 2020
  year: 2020
  page: 23
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2020/Biberheft_2020_final_mit_Loesungen.pdf
  country: AT
  license: CC BY-SA 4.0
---
Digitale Bäume wachsen schrittweise, nach vorgegebenen Regeln.

Ein digitaler Baum besteht zuerst aus einem Stück: ![Ein einzelnes senkrechtes Baumstück](./img/start.png)

Eine Wachstumsregel gibt an, wie ein Baumstück durch eine Struktur von Stücken ersetzt wird. In jedem Wachstumsschritt wird die Regel gleichzeitig auf jedes Baumstück angewendet. Zwei Beispiele:

![Zwei Beispiele für Wachstumsregeln mit den ersten zwei Wachstumsschritten](./img/rules.png)

Die Pfeilspitzen geben an, wo und in welche Richtung dabei die Strukturen aneinander gesetzt werden.

Hier ist ein digitaler Baum. Er ist in 4 Schritten gewachsen. Unten siehst du verschiedene Wachstumsregeln.

![Ein digitaler Baum, der sich nach links krümmt](./img/tree.png)

**Nach welcher Regel ist der Baum gewachsen?**
