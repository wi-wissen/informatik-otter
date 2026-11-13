---
short: 9cz3
title: Sechsecke ausmalen
summary: Eine Pyramide aus Sechsecken soll so ausgemalt werden, dass jedes Dreieck aus drei Sechsecken gleiche oder lauter verschiedene Farben hat.
grades:
  "5-6": easy
gi:
  content: [algorithms]
  process: [modelling]
topics: [programming]
methods: [conditional, loop]
mascot: beaver
interaction:
  format: custom
  props:
    colors:
      - { name: grün mit Quadrat, tone: good, symbol: square }
      - { name: gelb mit Punkt, tone: sun, symbol: circle }
      - { name: blau mit Stern, tone: primary, symbol: star }
    rows:
      - [0]
      - [0, 0]
      - [0, 0, 0]
      - [0, 0, 3, 2]
      - [1, 0, 1, 2, 2]
      - [1, 1, 2, 3, 1, 3]
source:
  type: original
  work: Informatik-Biber 2022
  year: 2022
  page: 51
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2022/Biberheft_2022_mit_Loesungen_web.pdf
  country: VN
  license: CC BY-SA 4.0
---
Sami legt weiße Sechsecke aneinander. Dann malt er sie aus, mit drei verschiedenen Farben (hier grün mit Quadrat, gelb mit Punkt und blau mit Stern). Immer wenn drei Sechsecke genau so zusammen liegen (zwei unten und eines oben in der Mitte), müssen sie am Ende …

- alle drei die gleiche Farbe **oder**
- alle drei verschiedene Farben haben.

![Drei zusammenliegende Sechsecke: zwei unten, eines oben in der Mitte](./img/rule.png)

Das gefällt Sami! Sami hat viele Sechsecke aneinander gelegt und schon einige ausgemalt.

**Male alle übrigen Sechsecke aus, so wie es Sami gefällt.**
