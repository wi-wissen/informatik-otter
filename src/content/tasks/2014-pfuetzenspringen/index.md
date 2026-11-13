---
short: kiV8
title: Pfützenspringen
summary: Fünf Kinder springen von Pfütze zu Pfütze, und in jeder Pfütze entscheidet das Alter über den Weiterweg. Wo landet wer?
grades:
  "9-10": hard
  "11-13": medium
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [sorting]
methods: [sorting-network]
mascot: beaver
interaction:
  format: place
  props:
    background: ./img/network.png
    width: 766
    height: 400
    zones:
      - { id: s1, label: "Feld 1", x: 655, y: 15, w: 97, h: 60 }
      - { id: s2, label: "Feld 2", x: 655, y: 92, w: 97, h: 60 }
      - { id: s3, label: "Feld 3", x: 655, y: 170, w: 97, h: 60 }
      - { id: s4, label: "Feld 4", x: 655, y: 248, w: 97, h: 60 }
      - { id: s5, label: "Feld 5", x: 655, y: 326, w: 97, h: 60 }
    items:
      - { id: anna, label: Anna }
      - { id: bert, label: Bert }
      - { id: carl, label: Carl }
      - { id: dora, label: Dora }
      - { id: ella, label: Ella }
source:
  type: original
  work: Informatik-Biber 2014
  year: 2014
  page: 41
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2014/Biberheft2014-mit-Loesungen.pdf
  license: CC BY-NC-SA 3.0
---
Anna (7 Jahre), Bert (8 Jahre), Carl (9 Jahre), Dora (10 Jahre) und Ella (11 Jahre) spielen ein Spiel, bei dem sie von Pfütze zu Pfütze springen. Dazu haben sie Pfeile auf den Boden gemalt.

Am Anfang stehen die Kinder auf den Feldern links und springen entlang der Pfeile jeweils zu einer Pfütze. Ein Kind, das zuerst in einer Pfütze ist, wartet, bis ein zweites dazu kommt. Das ältere Kind springt dann weiter entlang des dicken Pfeiles, das jüngere entlang des dünnen Pfeiles.

**Ziehe die Namen der Kinder auf die Felder rechts, auf denen sie am Ende ankommen.**
