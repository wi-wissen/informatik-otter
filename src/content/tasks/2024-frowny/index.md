---
short: c8rs
title: Frowny
summary: Cleo und Dan nehmen abwechselnd Kekse aus einer Schachtel. Wer den traurigen Keks nehmen muss, hat verloren. Mit welchem Zug gewinnt Cleo?
grades:
  "11-13": hard
gi:
  content: [algorithms]
  process: [reasoning, modelling]
topics: [games, optimization]
methods: [game-tree, dynamic-programming]
mascot: beaver
interaction:
  format: choice
  props:
    columns: 4
    options:
      - { id: a, label: A, image: ./img/opt-a.png, alt: "Gewählt ist der Keks unten in der Mitte; genommen werden die Kekse der mittleren und rechten Spalte" }
      - { id: b, label: B, image: ./img/opt-b.png, alt: "Gewählt ist der Keks in der Mitte des 3×3-Feldes; genommen werden die vier Kekse oben in der mittleren und rechten Spalte" }
      - { id: c, label: C, image: ./img/opt-c.png, alt: "Gewählt ist der Keks unten rechts; genommen werden die drei Kekse der rechten Spalte" }
      - { id: d, label: D, image: ./img/opt-d.png, alt: "Gewählt ist der Keks links in der Mitte; genommen werden die sechs Kekse der oberen beiden Zeilen" }
source:
  type: original
  work: Informatik-Biber 2024
  year: 2024
  page: 29
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2024/Biberheft_2024_web_komplett.pdf
  country: PT
  license: CC BY-SA 4.0
---
In einer Schachtel sind neun Kekse. Alle sind lecker, bis auf den Frowny unten links.

![Die Schachtel mit neun Keksen in drei Reihen und drei Spalten; der traurige Frowny-Keks liegt unten links](./img/box.png)

Cleo und Dan nehmen abwechselnd Kekse aus der Schachtel, bis sie leer ist. Cleo darf immer anfangen.

Man darf die Kekse nur so aus der Schachtel nehmen:

- Man wählt zuerst einen beliebigen Keks aus.
- Dann muss man diesen Keks nehmen und zusätzlich alle Kekse aus dem rechteckigen Bereich **darüber und rechts** davon.

Hier ist ein Beispiel. Der ausgewählte Keks ist jeweils blau oder rot markiert. Dummerweise muss Cleo am Ende den Frowny nehmen, um die Schachtel zu leeren.

![Fünf Bilder eines Beispielspiels: Cleo und Dan nehmen abwechselnd Kekse; am Ende bleibt nur der Frowny übrig, den Cleo nehmen muss](./img/example.png)

Cleos Ziel ist, dass Dan auf jeden Fall den Frowny nehmen muss, egal welche Kekse Dan zwischendurch nimmt. Sie überlegt, welche Kekse sie am Anfang nehmen soll, um ihr Ziel sicher zu erreichen. Auch wenn Cleo zwischendurch weitere Kekse nimmt, verfolgt sie ihr Ziel.

Hier sind vier Möglichkeiten, welche Kekse Cleo am Anfang nehmen kann.

**Mit einer davon kann sie ihr Ziel sicher erreichen. Mit welcher?**
