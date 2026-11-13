---
short: LKa3
title: Lecker!
summary: Biber Ben liebt Blätter. Die Stämme sollen so liegen, dass der blätterreichste ganz nah bei ihm liegt.
grades:
  "3-4": hard
  "5-6": medium
gi:
  content: [algorithms]
  process: [modelling]
topics: [sorting]
methods: [selection-sort]
mascot: beaver
interaction:
  format: place
  props:
    trayLabel: Stämme
    zones:
      - { id: ablage, label: "Ablage neben Ben" }
      - { id: s1, label: "Platz 1 (direkt bei Ben)" }
      - { id: s2, label: "Platz 2" }
      - { id: s3, label: "Platz 3" }
      - { id: s4, label: "Platz 4" }
      - { id: s5, label: "Platz 5 (am weitesten weg)" }
    initial: { s1: a, s2: b, s3: c, s4: d, s5: e }
    items:
      - { id: a, image: ./img/stem-a.png, alt: "Stamm A mit 3 Blättern" }
      - { id: b, image: ./img/stem-b.png, alt: "Stamm B mit 1 Blatt" }
      - { id: c, image: ./img/stem-c.png, alt: "Stamm C mit 5 Blättern" }
      - { id: d, image: ./img/stem-d.png, alt: "Stamm D mit 2 Blättern" }
      - { id: e, image: ./img/stem-e.png, alt: "Stamm E mit 4 Blättern" }
source:
  type: original
  work: Informatik-Biber 2017
  year: 2017
  page: 38
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2017/Biberheft2017-mit-Loesungen.pdf
  country: CH
  license: CC BY-SA 4.0
---
Biber Ben hat auf einem Brett fünf Stämme gesammelt. An den Stämmen wachsen Zweige mit Blättern. Ben liebt Blätter: je mehr Blätter, desto leckerer! Ben möchte, dass die Stämme auf dem Brett anders liegen: je leckerer, desto näher bei ihm. Der Stamm mit den meisten Blättern soll direkt bei ihm liegen.

**Lege die Stämme so auf das Brett, wie Ben das möchte!**

Bewege dazu die Stämme mit der Maus (oder tippe einen Stamm und dann einen Platz an). Du kannst einen Stamm auf die Ablage neben Ben legen oder auf einen leeren Platz auf dem Brett. Ben steht links neben dem Brett: Platz 1 ist direkt bei ihm.
