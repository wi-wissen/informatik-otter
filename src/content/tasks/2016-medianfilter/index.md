---
short: Te4J
title: Medianfilter
summary: Ein Filter ersetzt jedes Pixel durch den mittleren Grauwert seiner Nachbarschaft. Wie sieht das gefilterte Bild aus?
grades:
  "7-8": hard
  "11-13": medium
gi:
  content: [information-data]
  process: [modelling, reasoning]
topics: [images, algorithm-analysis]
methods: [median-filter]
mascot: beaver
interaction:
  format: choice
  props:
    columns: 4
    options:
      - { id: a, label: A, image: ./img/opt-a.png, alt: "A: sehr helles Bild; die Linien sind nur noch hellgrau" }
      - { id: b, label: B, image: ./img/opt-b.png, alt: "B: weiß mit vielen verstreuten schwarzen und grauen Punkten" }
      - { id: c, label: C, image: ./img/opt-c.png, alt: "C: dicke, dunkle, verschwommene Linien" }
      - { id: d, label: D, image: ./img/opt-d.png, alt: "D: dünne, scharfe schwarze Linien" }
source:
  type: original
  work: Informatik-Biber 2016
  year: 2016
  page: 47
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2016/Biberheft2016-mit-Loesungen.pdf
  country: RU
  license: CC BY-SA 3.0
---
Ein Bild wird als Tabelle gespeichert, mit Grauwerten von 1 bis 5 für jedes Pixel. Der Grauwert 1 steht für Schwarz, der Grauwert 5 steht für Weiß, die Grauwerte von 2 bis 4 stehen für die heller werdenden Grautöne dazwischen.

Ein Algorithmus „Medianfilter“ berechnet aus einem ursprünglichen Bild ein gefiltertes Bild gleicher Größe. Dazu werden für jedes Pixel aus dem ursprünglichen Bild …

- … sein Grauwert und die acht Grauwerte seiner acht Nachbar-Pixel …
- … aufsteigend sortiert in einer Reihe aufgeschrieben …
- … und der mittlere, also fünfte Wert von neun, …
- … als Grauwert des gleichen Pixels im gefilterten Bild genommen.

![Ein Pixel mit dem Grauwert 5 und seinen Nachbarn mit den Werten 1, 1, 2 / 2, 3 / 2, 3, 3; sortiert 1, 1, 2, 2, 2, 3, 3, 3, 5; der mittlere Wert ist 2, der im gefilterten Bild an die gleiche Stelle kommt](./img/example.png)

Das Bild zeigt, wie der Medianfilter aus dem Grauwert 5 eines Pixels im ursprünglichen Bild den Grauwert 2 für das gleiche Pixel im gefilterten Bild berechnet.

**Wie wird das gefilterte Bild aussehen, wenn der Medianfilter dieses ursprüngliche Bild verarbeitet hat?**

![Ursprüngliches Bild: Zwei sich kreuzende, einen Pixel breite schwarze Linien in Form eines X](./img/original.png)
