---
short: v4Wm
title: Berukone
summary: Zahlenpaare im Raster mit Linien verbinden, ohne dass sich Linien kreuzen. Welches der vier Rätsel ist nicht lösbar?
grades:
  "5-6": medium
  "7-8": easy
gi:
  content: [algorithms]
  process: [reasoning, modelling]
topics: [searching, optimization]
methods: [backtracking]
mascot: beaver
interaction:
  format: choice
  props:
    columns: 4
    options:
      - { id: a, label: A, image: ./img/opt-a.png, alt: "4×4-Raster. Zeile 1: 3 in Spalte 4. Zeile 2: 3 in Spalte 1. Zeile 3: 2, 1, 2 in den Spalten 2 bis 4. Zeile 4: 1 in Spalte 1." }
      - { id: b, label: B, image: ./img/opt-b.png, alt: "4×4-Raster. Zeile 1: 3 in Spalte 1 und 4. Zeile 2: 1 in Spalte 3. Zeile 3: 2 in Spalte 2 und 4. Zeile 4: 1 in Spalte 1." }
      - { id: c, label: C, image: ./img/opt-c.png, alt: "4×4-Raster. Zeile 1: 3 in Spalte 1. Zeile 2: 1 in Spalte 3, 3 in Spalte 4. Zeile 3: 2 in Spalte 2. Zeile 4: 1 in Spalte 1, 2 in Spalte 4." }
      - { id: d, label: D, image: ./img/opt-d.png, alt: "4×4-Raster. Zeile 1: 3 in Spalte 4. Zeile 2: 3 in Spalte 1, 1 in Spalte 3. Zeile 3: 2 in Spalte 2 und 4. Zeile 4: 1 in Spalte 1." }
source:
  type: original
  work: Informatik-Biber 2024
  year: 2024
  page: 19
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2024/Biberheft_2024_web_komplett.pdf
  country: DE
  license: CC BY-SA 4.0
---
Lasst uns Berukone spielen!

Ein Berukone-Rätsel besteht aus einem Raster mit Zahlen auf den Feldern. Zwei gleiche Zahlen bilden ein Paar.

Um das Rätsel zu lösen, musst du für alle Paare die beiden Zahlen durch eine Linie verbinden. Diese Verbindungslinie muss waagrecht oder senkrecht von Feld zu Feld gehen, darf sich aber auf einem Feld um 90 Grad drehen. Eine Linie darf nicht durch eine andere Zahl und nicht durch eine andere Linie gehen.

Leider gibt es Berukone-Rätsel, die nicht gelöst werden können:

**Dieses Berukone kann gelöst werden.**

![3×3-Raster mit den Paaren 1 und 2; beide Paare sind durch rote Linien verbunden, ohne dass sich Linien kreuzen](./img/solvable.png)

**Dieses Berukone kann nicht gelöst werden.**

![3×3-Raster. Zeile 1: 2 in Spalte 1, 1 in Spalte 2. Zeile 2: 2 in Spalte 3. Zeile 3: 1 in Spalte 2. Die 1en sind durch eine senkrechte Linie verbunden, die 2en können dann nicht mehr verbunden werden](./img/unsolvable.png)

**Genau eines der Berukones A bis D kann nicht gelöst werden. Welches?**
