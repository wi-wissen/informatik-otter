---
short: 9zoH
title: Der Nächste bitte!
summary: In der Bibliothek von Holzdorf wird immer der Biber mit den wenigsten Büchern zuerst bedient. Wer ist wann an der Reihe?
grades:
  "5-6": hard
  "7-8": medium
  "9-10": easy
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [optimization]
methods: [scheduling]
mascot: beaver
interaction:
  format: sort-list
  props:
    direction: horizontal
    startLabel: zuerst
    endLabel: zuletzt
    items:
      - { id: ada, label: Ada }
      - { id: bina, label: Bina }
      - { id: cora, label: Cora }
      - { id: dan, label: Dan }
      - { id: elia, label: Elia }
source:
  type: original
  work: Informatik-Biber 2024
  year: 2024
  page: 23
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2024/Biberheft_2024_web_komplett.pdf
  country: SI
  license: CC BY-SA 4.0
---
Die Biber in Holzdorf sind fleißige Leserinnen und Leser. In der Bibliothek müssen die Biber deshalb oft warten, wenn sie ihre Bücher zurückgeben wollen.

Wenn ein Biber an der Reihe ist, gibt er alle mitgebrachten Bücher zurück. Die Rückgabe eines Buchs dauert immer genau eine Minute. Ist ein Biber fertig, kommt der nächste Biber aus dem Wartebereich an die Reihe. Das ist immer der Biber mit den wenigsten Büchern.

An einem Morgen kommen nach und nach 5 Biber und wollen ihre Bücher zurückgeben.

Das Bild zeigt für jeden Biber,

- wann er im Wartebereich ankommt und
- wie viele Bücher er mitgebracht hat.

![Zeitleiste: Ada kommt um 9:00 mit 4 Büchern, Bina um 9:02 mit 6 Büchern, Cora um 9:03 mit 2 Büchern, Dan um 9:05 mit 4 Büchern, Elia um 9:11 mit 1 Buch](./img/arrivals.png)

Ada kommt als erste und kann sofort ihre 4 Bücher zurückgeben.

**In welcher Reihenfolge geben die Biber ihre Bücher zurück?**
