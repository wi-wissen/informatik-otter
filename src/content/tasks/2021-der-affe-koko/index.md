---
short: 1DfL
title: Der Affe Koko
summary: Koko springt von Baum zu Baum, ohne den Boden zu berühren. Welche Bäume bilden die größte Sprunggruppe?
grades:
  "9-10": hard
  "11-13": medium
gi:
  content: [information-data, algorithms]
  process: [modelling]
topics: [graphs]
methods: [bfs, dfs]
mascot: beaver
interaction:
  format: graph-pick
  props:
    pick: nodes
    width: 297
    height: 297
    background: ./img/forest.png
    nodeImage: ./img/none.png
    nodeRadius: 8
    nodes:
      - { id: r0c2, x: 68.5, y: 15.3 }
      - { id: r0c3, x: 95.1, y: 15.3 }
      - { id: r1c0, x: 15.3, y: 41.9 }
      - { id: r1c4, x: 121.7, y: 41.9 }
      - { id: r1c8, x: 228.1, y: 41.9 }
      - { id: r2c1, x: 41.9, y: 68.5 }
      - { id: r2c4, x: 121.7, y: 68.5 }
      - { id: r2c6, x: 174.9, y: 68.5 }
      - { id: r2c9, x: 254.7, y: 68.5 }
      - { id: r3c2, x: 68.5, y: 95.1 }
      - { id: r3c8, x: 228.1, y: 95.1 }
      - { id: r3c10, x: 281.3, y: 95.1 }
      - { id: r4c1, x: 41.9, y: 121.7 }
      - { id: r4c5, x: 148.3, y: 121.7 }
      - { id: r4c6, x: 174.9, y: 121.7 }
      - { id: r4c9, x: 254.7, y: 121.7 }
      - { id: r5c2, x: 68.5, y: 148.3 }
      - { id: r5c5, x: 148.3, y: 148.3 }
      - { id: r6c10, x: 281.3, y: 174.9 }
      - { id: r7c1, x: 41.9, y: 201.5 }
      - { id: r7c10, x: 281.3, y: 201.5 }
      - { id: r8c0, x: 15.3, y: 228.1 }
      - { id: r8c2, x: 68.5, y: 228.1 }
      - { id: r8c4, x: 121.7, y: 228.1 }
      - { id: r8c7, x: 201.5, y: 228.1 }
      - { id: r9c0, x: 15.3, y: 254.7 }
      - { id: r9c5, x: 148.3, y: 254.7 }
      - { id: r9c10, x: 281.3, y: 254.7 }
      - { id: r10c1, x: 41.9, y: 281.3 }
      - { id: r10c8, x: 228.1, y: 281.3 }
      - { id: r10c10, x: 281.3, y: 281.3 }
source:
  type: original
  work: Informatik-Biber 2021
  year: 2021
  page: 17
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2021/Biberheft_2021_mit_Loesungen_web.pdf
  country: SI
  license: CC BY-SA 4.0
---
Der Affe Koko kann von einem Baum soweit springen, wie es der grüne Bereich zeigt.

![Das Bild zeigt Koko auf einem Baum. Grün sind die neun Felder um ihn herum sowie die zwei Felder weiter oben, unten, links und rechts in gerader Linie.](./img/reach.png)

Ein Beispiel: Mit einem Sprung erreicht Koko die farbigen Bäume, die grauen aber nicht.

![Beispiel: Die farbigen Bäume liegen im grünen Bereich, die grauen Bäume außerhalb.](./img/example.png)

Es gibt Gruppen von Bäumen, zwischen denen sich Koko mit mehreren Sprüngen beliebig bewegen kann, ohne jemals den Boden zu berühren. Im Beispiel bilden die farbigen Bäume und die beiden grauen Bäume oben eine solche „Sprunggruppe“; der graue Baum unten gehört nicht dazu.

Unten siehst du Kokos Wald.

**Markiere darin alle Bäume der größten Sprunggruppe!**
