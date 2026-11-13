---
short: iHZ9
title: Vier Schildkröten
summary: Vier Schildkröten wollen ihren Garten abgrasen und dabei jedes Grasfeld genau einmal betreten. Eine schafft es nicht.
grades:
  "3-4": hard
  "5-6": medium
  "7-8": easy
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [graphs]
methods: [hamilton-path]
mascot: beaver
interaction:
  format: choice
  props:
    columns: 2
    options:
      - { id: a, image: ./img/garden-a.png, alt: Garten A }
      - { id: b, image: ./img/garden-b.png, alt: Garten B }
      - { id: c, image: ./img/garden-c.png, alt: Garten C }
      - { id: d, image: ./img/garden-d.png, alt: Garten D }
source:
  type: original
  work: Informatik-Biber 2021
  year: 2021
  page: 59
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2021/Biberheft_2021_mit_Loesungen_web.pdf
  country: DE
  license: CC BY-SA 4.0
---
Vier Schildkröten leben in ihren kleinen Gärten. Die Gärten sind in Felder unterteilt. Jedes Feld ist entweder mit Gras oder mit Steinen bedeckt. Die Schildkröten können von einem Grasfeld zum nächsten gehen (siehe Bild). Über Steine können sie nicht gehen.

![Eine Schildkröte auf einem Grasfeld kann zu den Grasfeldern oben, unten, links und rechts gehen (rote Pfeile), nicht aber diagonal.](./img/moves.png)

Jede Schildkröte möchte ihren Garten vollständig abgrasen. Dafür muss sie alle Grasfelder betreten, aber jedes nur genau einmal. Sie startet auf dem Feld, auf dem sie im Bild steht.

Leider kann eine Schildkröte ihren Garten nicht vollständig abgrasen.

**Welcher Garten ist das?**
