---
short: ZkZ1
title: Blumenstrauß
summary: Florian bindet Sträuße nach einer Anleitung mit Wenn und Solange. Welche Sträuße sind erlaubt?
grades:
  "3-4": medium
  "5-6": easy
gi:
  content: [algorithms]
  process: [modelling]
topics: [programming]
methods: [conditional, loop]
mascot: beaver
interaction:
  format: place
  props:
    background: ./img/strauss.png
    width: 616
    height: 235
    trayLabel: Eimer A und Eimer B
    itemSize: 110
    zones:
      - { id: strauss, label: "Blumenstrauß", x: 60, y: 40, w: 490, h: 115, capacity: 4 }
    items:
      - { id: a1, image: ./img/margarite.png, alt: Margarite }
      - { id: a2, image: ./img/margarite.png, alt: Margarite }
      - { id: a3, image: ./img/tulpe.png, alt: Tulpe }
      - { id: a4, image: ./img/tulpe.png, alt: Tulpe }
      - { id: b1, image: ./img/zweig.png, alt: Zweig }
      - { id: b2, image: ./img/zweig.png, alt: Zweig }
      - { id: b3, image: ./img/zweig.png, alt: Zweig }
source:
  type: original
  work: Informatik-Biber 2023
  year: 2023
  page: 15
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2023/Biberheft_2023_web_komplett.pdf
  country: DE
  license: CC BY-SA 4.0
---
Florian verkauft Blumensträuße. Jeden Blumenstrauß bindet Florian nach dieser Anleitung:

1. Nimm die erste Blume aus Eimer A.
2. Wenn die erste Blume eine Margarite ist, nimm noch eine Margarite.
3. Nun nimm solange einen Zweig aus Eimer B, bis der Blumenstrauß 4 Teile hat. Fertig!

![Eimer A enthält zwei Margariten und zwei Tulpen, Eimer B enthält drei Zweige](./img/eimer.png)

**Hilf Florian: Folge der Anleitung und wähle Blumen und Zweige für einen Strauß aus.**

Ziehe dazu die Blumen und Zweige in den Blumenstrauß.
