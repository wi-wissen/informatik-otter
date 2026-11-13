---
short: Gf8j
title: Zeichenroboter
summary: Ein Roboter kennt nur drei Zahlen und wiederholt sie endlos. Welches Bild zeichnet er aus 2, 2, 3?
grades:
  "3-4": hard
  "5-6": medium
  "7-8": easy
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [programming]
methods: [loop, sequence]
mascot: beaver
interaction:
  format: choice
  props:
    columns: 4
    options:
      - { id: a, label: A, image: ./img/a.png, alt: "Bild A: ein Kreuz aus fünf Quadraten" }
      - { id: b, label: B, image: ./img/b.png, alt: "Bild B: ein Gitter aus 3 mal 3 Quadraten" }
      - { id: c, label: C, image: ./img/c.png, alt: "Bild C: ein großes Quadrat aus 3 mal 3 Feldern ohne Innenlinien" }
      - { id: d, label: D, image: ./img/d.png, alt: "Bild D: vier Quadrate in den Ecken und eines in der Mitte, die sich berühren" }
source:
  type: original
  work: Informatik-Biber 2019
  year: 2019
  page: 63
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2019/Biberheft2019-mit-Loesungen.pdf
  country: SK
  license: CC BY-SA 4.0
---
Ein Roboter bewegt sich über ein Raster und zeichnet dabei Linien. Mit drei Zahlen kann man den Roboter steuern. Die Zahlen geben dem Roboter drei Schritte an, die er beliebig oft wiederholt. So entsteht aus den Zahlen ein Bild.

Ein Beispiel: Aus den Zahlen 3, 1, 5 entsteht das Bild rechts, und zwar so:

- gehe 3 Felder vor und drehe nach rechts (Schritt 1),
- gehe 1 Feld vor und drehe nach rechts (Schritt 2) und
- gehe 5 Felder vor und drehe nach rechts (Schritt 3).

![Vier Raster nebeneinander: Schritt 1 zeigt eine Linie von 3 Feldern nach unten, Schritt 2 eine weitere Linie von 1 Feld nach rechts, Schritt 3 eine Linie von 5 Feldern nach oben. Das Bild rechts zeigt, was nach mehreren Wiederholungen der drei Schritte entsteht: eine Spirale aus Rechtecken.](./img/example.png)

**Welches Bild entsteht aus den Zahlen 2, 2, 3?**
