---
short: z5z7
title: Karotten pflanzen
summary: Ein Kaninchenroboter springt von Hügel zu Hügel und pflanzt Samen. Wo wachsen am Ende Karotten?
grades:
  "3-4": hard
  "7-8": easy
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [programming]
methods: [sequence]
mascot: beaver
interaction:
  format: graph-pick
  props:
    pick: nodes
    width: 296
    height: 38
    nodeRadius: 16
    background: ./img/huegel.png
    hideNodes: true
    nodes:
      - { id: A, x: 36, y: 22, label: A }
      - { id: B, x: 114, y: 22, label: B }
      - { id: C, x: 192, y: 22, label: C }
      - { id: D, x: 270, y: 22, label: D }
source:
  type: original
  work: Informatik-Biber 2023
  year: 2023
  page: 35
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2023/Biberheft_2023_web_komplett.pdf
  country: SK
  license: CC BY-SA 4.0
---
Der Kaninchenroboter kann folgende Anweisungen ausführen:

| Anweisung | Bedeutung |
|---|---|
| ![Pfeil nach links](./img/links.png) | Springe nach **links** auf den nächsten Hügel. |
| ![Pfeil nach rechts](./img/rechts.png) | Springe nach **rechts** auf den nächsten Hügel. |
| ![Ein Karottensamen fällt auf einen Hügel](./img/pflanze.png) | **Pflanze** einen Karottensamen auf dem Hügel, auf dem du stehst. |

Der Kaninchenroboter hat diese Folge von Anweisungen ausgeführt:

![Die Anweisungen nacheinander: rechts, pflanzen, links, pflanzen, links, links, pflanzen](./img/folge.png)

Dabei ist der Roboter auf vier Hügeln gewesen. Wir wissen aber nicht, auf welchem Hügel er angefangen hat.

**Auf welche Hügel hat der Roboter die Karottensamen gepflanzt? Tippe die Hügel A bis D (von links nach rechts) an, auf denen ein Samen liegt.**
