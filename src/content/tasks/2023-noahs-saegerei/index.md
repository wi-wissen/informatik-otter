---
short: K4Vm
title: Noahs Sägerei
summary: Noah legt jeden Stamm in die erste passende Lücke. In welcher Reihenfolge passen alle vier Stämme auf den Weg?
grades:
  "5-6": medium
  "7-8": easy
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [optimization, algorithm-analysis]
methods: [greedy]
mascot: beaver
interaction:
  format: sort-list
  props:
    direction: horizontal
    startLabel: zuerst
    endLabel: zuletzt
    items:
      - { id: l2, image: ./img/l2.png, alt: 2-Meter-Stamm }
      - { id: l1, image: ./img/l1.png, alt: 1-Meter-Stamm }
      - { id: l3, image: ./img/l3.png, alt: 3-Meter-Stamm }
      - { id: l4, image: ./img/l4.png, alt: 4-Meter-Stamm }
source:
  type: original
  work: Informatik-Biber 2023
  year: 2023
  page: 42
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2023/Biberheft_2023_web_komplett.pdf
  country: CH
  license: CC BY-SA 4.0
---
Biber Noah schneidet Holzstämme in verschiedenen Längen zu und verkauft sie dann. Sobald er einen Stamm zugeschnitten hat, legt er ihn auf dem 18 Meter langen Weg ab. Dabei beachtet Noah folgende Regel: Er legt den Stamm in die erste Lücke von links, in die der Stamm passt.

Noah verkauft einige Stämme. Danach gibt es drei Lücken auf dem Weg:

![Der Weg mit drei Lücken von links nach rechts: 3 m, 6 m und 1 m. Dazwischen liegen Stämme von 4 m, 3 m und 1 m Länge](./img/weg.png)

Nun will Noah vier Stämme zuschneiden, mit Längen von 1, 2, 3 und 4 Metern.

**In welcher Reihenfolge muss Noah die Stämme zuschneiden, damit er alle vier in die Lücken legen kann?**
