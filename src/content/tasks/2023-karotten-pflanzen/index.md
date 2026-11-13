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
  format: place
  props:
    background: ./img/huegel-gross.png
    width: 888
    height: 204
    trayLabel: Karottensamen
    zones:
      - { id: A, label: "Hügel 1", x: 10, y: 15, w: 205, h: 180 }
      - { id: B, label: "Hügel 2", x: 227, y: 15, w: 205, h: 180 }
      - { id: C, label: "Hügel 3", x: 444, y: 15, w: 205, h: 180 }
      - { id: D, label: "Hügel 4", x: 662, y: 15, w: 205, h: 180 }
    items:
      - { id: s1, image: ./img/samen.png, alt: Karottensamen }
      - { id: s2, image: ./img/samen.png, alt: Karottensamen }
      - { id: s3, image: ./img/samen.png, alt: Karottensamen }
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

**Auf welche Hügel hat der Roboter die Karottensamen gepflanzt?**

Ziehe dazu die drei Karottensamen auf die Hügel.
