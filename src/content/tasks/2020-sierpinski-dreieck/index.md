---
short: 3zA6
title: Sierpinski-Dreieck
summary: In jedem Schritt wird jedes weiße Dreieck geteilt und das mittlere schwarz gefärbt. Wie sieht es nach drei Schritten aus?
grades:
  "9-10": medium
  "11-13": easy
gi:
  content: [algorithms]
  process: [modelling, representing]
topics: [recursion]
methods: []
mascot: beaver
interaction:
  format: graph-pick
  props:
    pick: nodes
    width: 400.3
    height: 347.9
    background: ./img/grid.png
    nodeRadius: 7
    nodes:
      - { id: t00u, x: 200.2, y: 30.7 }
      - { id: t10u, x: 175.4, y: 73.6 }
      - { id: t10d, x: 200.2, y: 59.3 }
      - { id: t11u, x: 224.9, y: 73.6 }
      - { id: t20u, x: 150.6, y: 116.6 }
      - { id: t20d, x: 175.4, y: 102.3 }
      - { id: t21u, x: 200.2, y: 116.6 }
      - { id: t21d, x: 224.9, y: 102.3 }
      - { id: t22u, x: 249.7, y: 116.6 }
      - { id: t30u, x: 125.8, y: 159.6 }
      - { id: t30d, x: 150.6, y: 145.3 }
      - { id: t31u, x: 175.4, y: 159.6 }
      - { id: t31d, x: 200.2, y: 145.3 }
      - { id: t32u, x: 224.9, y: 159.6 }
      - { id: t32d, x: 249.7, y: 145.3 }
      - { id: t33u, x: 274.5, y: 159.6 }
      - { id: t40u, x: 101.1, y: 202.6 }
      - { id: t44u, x: 299.2, y: 202.6 }
      - { id: t50u, x: 76.3, y: 245.6 }
      - { id: t50d, x: 101.1, y: 231.3 }
      - { id: t51u, x: 125.8, y: 245.6 }
      - { id: t54u, x: 274.5, y: 245.6 }
      - { id: t54d, x: 299.2, y: 231.3 }
      - { id: t55u, x: 324.0, y: 245.6 }
      - { id: t60u, x: 51.5, y: 288.6 }
      - { id: t60d, x: 76.3, y: 274.3 }
      - { id: t61u, x: 101.1, y: 288.6 }
      - { id: t61d, x: 125.8, y: 274.3 }
      - { id: t62u, x: 150.6, y: 288.6 }
      - { id: t64u, x: 249.7, y: 288.6 }
      - { id: t64d, x: 274.5, y: 274.3 }
      - { id: t65u, x: 299.2, y: 288.6 }
      - { id: t65d, x: 324.0, y: 274.3 }
      - { id: t66u, x: 348.8, y: 288.6 }
      - { id: t70u, x: 26.8, y: 331.6 }
      - { id: t70d, x: 51.5, y: 317.2 }
      - { id: t71u, x: 76.3, y: 331.6 }
      - { id: t71d, x: 101.1, y: 317.2 }
      - { id: t72u, x: 125.8, y: 331.6 }
      - { id: t72d, x: 150.6, y: 317.2 }
      - { id: t73u, x: 175.4, y: 331.6 }
      - { id: t74u, x: 224.9, y: 331.6 }
      - { id: t74d, x: 249.7, y: 317.2 }
      - { id: t75u, x: 274.5, y: 331.6 }
      - { id: t75d, x: 299.2, y: 317.2 }
      - { id: t76u, x: 324.0, y: 331.6 }
      - { id: t76d, x: 348.8, y: 317.2 }
      - { id: t77u, x: 373.5, y: 331.6 }
source:
  type: original
  work: Informatik-Biber 2020
  year: 2020
  page: 52
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2020/Biberheft_2020_final_mit_Loesungen.pdf
  country: HU
  license: CC BY-SA 4.0
---
Ein Sierpinski-Dreieck zeichnet man so: Zuerst zeichnet man ein gleichseitiges weißes Dreieck. Dann geht es schrittweise weiter.

In jedem Schritt wird jedes weiße Dreieck in vier kleinere unterteilt und das mittlere davon schwarz gefärbt:

![Ein weißes Dreieck wird in vier kleinere unterteilt, das mittlere (auf der Spitze stehende) wird schwarz](./img/step.png)

Unten siehst du ein Dreieck, das in 64 kleine Teildreiecke unterteilt ist. Für den ersten Schritt ist das große schwarze Dreieck in der Mitte schon erledigt.

**Wie sieht ein Sierpinski-Dreieck nach drei Schritten aus? Markiere die richtigen Teildreiecke, die schwarz gefärbt werden müssen.** Tippe dazu auf die kleinen Kreise in den Teildreiecken.
