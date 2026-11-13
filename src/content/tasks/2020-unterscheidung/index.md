---
short: dYQ9
title: Unterscheidung
summary: Eine Farbkarte verrät, an welchen Pixeln sich ein Bild von den anderen unterscheidet. Zu welchem Bild gehört sie?
grades:
  "7-8": hard
  "9-10": medium
  "11-13": easy
gi:
  content: [information-data, systems]
  process: [modelling, representing]
topics: [ai, images]
methods: [neural-network]
mascot: beaver
interaction:
  format: choice
  props:
    columns: 4
    options:
      - { id: a, label: "A", image: ./img/a.png, alt: "Bild A: das Pixel-Bild des Buchstabens T" }
      - { id: b, label: "B", image: ./img/b.png, alt: "Bild B: das Pixel-Bild des Buchstabens O (schwarzer Rahmen, weißes Pixel in der Mitte)" }
      - { id: c, label: "C", image: ./img/c.png, alt: "Bild C: das Pixel-Bild des Buchstabens C" }
      - { id: d, label: "D", image: ./img/d.png, alt: "Bild D: das Pixel-Bild des Buchstabens L" }
source:
  type: original
  work: Informatik-Biber 2020
  year: 2020
  page: 61
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2020/Biberheft_2020_final_mit_Loesungen.pdf
  country: DE
  license: CC BY-SA 4.0
---
Eine Maschine erkennt genau diese Pixel-Bilder, und zwar als Buchstaben I, T, O, C und L:

![Die fünf Pixel-Bilder I, T, O, C und L, jeweils 3 mal 3 Pixel](./img/pic-i.png) ![T](./img/pic-t.png) ![O](./img/pic-o.png) ![C](./img/pic-c.png) ![L](./img/pic-l.png)

Dabei entsteht für jedes der fünf Bilder eine Unterscheidungskarte. Die Unterscheidungskarte zeigt für jedes Bild-Pixel an dessen Position eine Farbe. Die Farbe zeigt, wie viele der anderen Bilder an dieser Position das gleiche Pixel haben. Je heller die Farbe, desto wichtiger ist dieses Pixel für die Unterscheidung:

![Farbtabelle: Weiß bedeutet, keines der anderen Bilder hat das gleiche Pixel, Gelb eines, Grün zwei, Blau drei, Schwarz alle vier](./img/legend.png)

Ein Beispiel: Das Pixel-Bild ![Das Bild I](./img/example-pic.png) hat diese Unterscheidungskarte: ![Die Unterscheidungskarte des Bildes I](./img/example-map.png)

Welches Pixel-Bild hat diese Unterscheidungskarte: ![Die gesuchte Unterscheidungskarte: obere Reihe dunkelblau, grün, grün; Mitte grün, grün, weiß; untere Reihe grün, schwarz, grün](./img/question-map.png) ?

**Welches Pixel-Bild hat diese Unterscheidungskarte?**
