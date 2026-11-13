---
short: 19fD
title: Gemüsebeet
summary: Fünf Gemüsesorten sollen so in sechseckige Beete gepflanzt werden, dass sich keine unverträglichen Nachbarn berühren.
grades:
  "5-6": hard
  "7-8": medium
  "9-10": easy
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [optimization, graphs]
methods: [backtracking, brute-force]
mascot: beaver
interaction:
  format: custom
  props:
    rows: 3
    cols: 5
    vegetables:
      - { id: tomate, label: Tomate, image: ./img/tomate.png, count: 3 }
      - { id: salat, label: Salat, image: ./img/salat.png, count: 3 }
      - { id: fenchel, label: Fenchel, image: ./img/fenchel.png, count: 2 }
      - { id: erbse, label: Erbsen, image: ./img/erbse.png, count: 4 }
      - { id: lauch, label: Lauch, image: ./img/lauch.png, count: 0 }
    fixed:
      "0,2": lauch
      "1,1": lauch
      "1,2": lauch
    conflicts:
      - [tomate, fenchel]
      - [tomate, erbse]
      - [lauch, erbse]
source:
  type: original
  work: Informatik-Biber 2023
  year: 2023
  page: 30
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2023/Biberheft_2023_web_komplett.pdf
  country: AU
  license: CC BY-SA 4.0
---
Lisa legt ein Gemüsebeet an, mit sechseckigen Bereichen. Darauf will sie Gemüse pflanzen, in jeden Bereich eines. Es gibt fünf Sorten Gemüse. Manche Gemüse vertragen sich gut miteinander (Haken), andere nicht (Blitz):

![Verträglich sind: Salat und Erbsen, Salat und Fenchel, Fenchel und Erbsen, Tomaten und Lauch, Tomaten und Salat](./img/vertraeglich.png)

![Nicht verträglich sind: Tomaten und Fenchel, Tomaten und Erbsen, Lauch und Erbsen](./img/unvertraeglich.png)

Beim Pflanzen beachtet Lisa folgende Regel: Gemüse, die sich nicht vertragen, dürfen nicht in Bereiche gepflanzt werden, die sich berühren.

In drei Bereiche hat Lisa schon Lauch gepflanzt. Du hast noch 3 Tomaten, 3 Salate, 2 Fenchel und 4 Erbsen.

**Bepflanze alle noch freien Bereiche und beachte Lisas Regel!**
