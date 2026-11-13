---
short: Pr4b
title: Zweige
summary: Vier Tiere sitzen auf vier Zweigen mit unterschiedlich vielen Blättern. Welches Tier sitzt wo?
grades:
  "3-4": medium
  "5-6": easy
gi:
  content: [algorithms]
  process: [reasoning, modelling]
topics: [sorting, logic]
methods: []
mascot: beaver
interaction:
  format: custom
  props:
    background: ./img/board.png
    width: 416
    height: 570
    trayLabel: Tiere
    zones:
      - { id: z1, label: Zweig 1, x: 2, y: 0, w: 168, h: 132 }
      - { id: z2, label: Zweig 2, x: 2, y: 146, w: 168, h: 132 }
      - { id: z3, label: Zweig 3, x: 2, y: 292, w: 168, h: 132 }
      - { id: z4, label: Zweig 4, x: 2, y: 438, w: 168, h: 132 }
    items:
      - { id: butterfly, image: ./img/butterfly.png, alt: Schmetterling }
      - { id: caterpillar, image: ./img/caterpillar.png, alt: Raupe }
      - { id: ladybug, image: ./img/ladybug.png, alt: Marienkäfer }
      - { id: snail, image: ./img/snail.png, alt: Schnecke }
source:
  type: original
  work: Informatik-Biber 2020
  year: 2020
  page: 65
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2020/Biberheft_2020_final_mit_Loesungen.pdf
  country: TR
  license: CC BY-SA 4.0
---
Emma und Felix entdecken in einem Busch vier Tiere. Die Tiere sitzen auf vier verschiedenen Zweigen:

- Der Zweig mit der Raupe hat die meisten Blätter.
- Der Zweig mit dem Schmetterling hat mehr Blätter als der Zweig mit der Schnecke.
- Der Zweig mit dem Marienkäfer hat genau ein Blatt.

**Verbinde jedes Tier mit seinem Zweig.** Ziehe dazu jedes Tier neben seinen Zweig.
