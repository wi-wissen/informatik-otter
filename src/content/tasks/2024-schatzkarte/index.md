---
short: 2D96
title: Schatzkarte
summary: Die Biberkönigin hat ihr Reich als Netz aus Kreisen und Linien gezeichnet. Welche der fünf Schatzkarten passt zur Landkarte?
grades:
  "9-10": hard
  "11-13": medium
gi:
  content: [information-data, algorithms]
  process: [modelling, representing]
topics: [graphs, modelling]
methods: []
mascot: beaver
interaction:
  format: choice
  props:
    columns: 5
    options:
      - { id: a, label: A, image: ./img/map-a.png, alt: "Schatzkarte A: Graph mit sieben Kreisen" }
      - { id: b, label: B, image: ./img/map-b.png, alt: "Schatzkarte B: Graph mit sechs Kreisen" }
      - { id: c, label: C, image: ./img/map-c.png, alt: "Schatzkarte C: Graph mit sieben Kreisen" }
      - { id: d, label: D, image: ./img/map-d.png, alt: "Schatzkarte D: Graph mit sieben Kreisen" }
      - { id: e, label: E, image: ./img/map-e.png, alt: "Schatzkarte E: Graph mit sieben Kreisen" }
source:
  type: original
  work: Informatik-Biber 2024
  year: 2024
  page: 57
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2024/Biberheft_2024_web_komplett.pdf
  country: VN
  license: CC BY-SA 4.0
---
Die Landkarte zeigt das Reich der Biberkönigin mit seinen sieben Provinzen. In einer Provinz hat die Königin ihren Schatz versteckt.

![Die Landkarte mit sieben Provinzen; in einer Provinz oben in der Mitte liegt eine Schatzkiste](./img/map.png)

Die Königin will die Lage des Schatzes geheim halten. Deshalb hat sie eine besondere Schatzkarte gezeichnet.

Für jede Provinz ist darin ein Kreis eingezeichnet. Eine Linie zwischen zwei Provinz-Kreisen zeigt, dass die beiden Provinzen aneinander angrenzen. Der Kreis für die Provinz mit dem Schatz ist markiert.

Um mögliche Räuber zu verwirren, hat die Königin zusätzlich vier falsche Schatzkarten gezeichnet.

**Welche ist die richtige Schatzkarte?**
