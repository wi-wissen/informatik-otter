---
short: 8v7c
title: Matrosenketten
summary: Perlenketten wachsen an den Enden. Welche der vier Ketten kann Monika nicht gemacht haben?
grades:
  "3-4": hard
  "5-6": medium
  "7-8": easy
gi:
  content: [information-data]
  process: [modelling, reasoning]
topics: [data-structures]
methods: [invariant]
mascot: beaver
interaction:
  format: choice
  props:
    columns: 1
    options:
      - { id: a, image: ./img/chain-a.png, alt: "Kette A: blau, Welle, blau, blau, Welle, Welle, Welle, Welle" }
      - { id: b, image: ./img/chain-b.png, alt: "Kette B: blau, blau, Welle, blau, blau, blau, Welle, Welle" }
      - { id: c, image: ./img/chain-c.png, alt: "Kette C: blau, Welle, blau, Welle, Welle, blau, Welle, Welle" }
      - { id: d, image: ./img/chain-d.png, alt: "Kette D: blau, Welle, blau, blau, blau, Welle, Welle, Welle" }
source:
  type: original
  work: Informatik-Biber 2022
  year: 2022
  page: 40
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2022/Biberheft_2022_mit_Loesungen_web.pdf
  country: SK
  license: CC BY-SA 4.0
---
Monika macht Matrosenketten mit weiß-roten Wellenperlen und einfarbigen blauen Perlen. Sie beginnt immer mit einer Wellenperle links und einer blauen Perle rechts:

![Eine Wellenperle links, eine blaue Perle rechts](./img/start.png)

Dann verlängert sie die Matrosenkette mehrmals. Jedesmal fügt sie

- entweder an beiden Enden der Schnur jeweils eine blaue Perle hinzu
- oder zwei Wellenperlen am rechten Ende der Schnur hinzu.

![Aus der Startkette entsteht entweder eine Kette mit je einer blauen Perle an beiden Enden oder eine Kette mit zwei zusätzlichen Wellenperlen rechts](./img/steps.png)

**Welche dieser Ketten ist keine von Monikas Matrosenketten?**
