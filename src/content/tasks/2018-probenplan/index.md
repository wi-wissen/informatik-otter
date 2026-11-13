---
short: AZ4H
title: Probenplan
summary: Fünf Tänzer proben paarweise nacheinander, immer mit einem Tänzer des vorigen Paars. Wer kann nicht im ersten Paar sein?
grades:
  "11-13": hard
gi:
  content: [information-data, algorithms]
  process: [modelling, reasoning]
topics: [graphs, modelling]
methods: [euler-path]
mascot: beaver
interaction:
  format: choice
  props:
    columns: 5
    options:
      - { id: a, label: Alex }
      - { id: b, label: Bojan }
      - { id: c, label: Coco }
      - { id: d, label: Deniz }
      - { id: e, label: Emil }
source:
  type: original
  work: Informatik-Biber 2018
  year: 2018
  page: 53
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2018/Biberheft2018-mit-Loesungen.pdf
  country: BE
  license: CC BY-SA 4.0
---
Fünf Tänzer proben für einen Auftritt: Alex, Bojan, Coco, Deniz und Emil. Beim Auftritt bilden die Tänzer diese verschiedenen Paare:

- Alex – Bojan
- Coco – Alex
- Emil – Deniz
- Alex – Emil
- Coco – Deniz
- Bojan – Coco
- Deniz – Alex
- Coco – Emil

Morgen sollen die Paare hintereinander proben. Dazu macht die Trainerin zwei Ansagen:

1. Der Probenplan wird so gestaltet, dass immer ein Mitglied eines Paares auch zum nächsten Paar gehört und direkt weitermachen kann. Ein Beispiel: Nach der Probe des Paars Alex–Bojan probt ein anderes Paar, zu dem entweder Alex oder Bojan gehört: Coco–Alex, Alex–Emil, Bojan–Coco oder Deniz–Alex.
2. Jeder Tänzer muss höchstens zweimal direkt hintereinander proben.

Einer der Tänzer kann später zur Probe kommen: Wenn die Ansagen der Trainerin gelten, wird er auf keinen Fall zum ersten Paar auf dem Probenplan gehören.

**Welcher Tänzer ist das?**
