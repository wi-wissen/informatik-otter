---
short: 3ECv
title: Links um!
summary: Ein Spielzeugroboter kennt nur „vorwärts“ und „nach rechts drehen“. Wie bringt man ihn dazu, sich nach links zu drehen?
grades:
  "3-4": easy
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [programming]
methods: [sequence]
mascot: beaver
interaction:
  format: choice
  props:
    columns: 2
    options:
      - { id: a, image: ./img/a.png, alt: "Zweimal vorwärts" }
      - { id: b, image: ./img/b.png, alt: "Zweimal nach rechts drehen" }
      - { id: c, image: ./img/c.png, alt: "Dreimal nach rechts drehen" }
      - { id: d, image: ./img/d.png, alt: "Vorwärts, nach rechts drehen, vorwärts" }
source:
  type: original
  work: Informatik-Biber 2015
  year: 2015
  page: 37
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2015/Biberheft2015-mit-Loesungen.pdf
  country: DE
  license: CC BY-SA 3.0
---
Du hast einen Spielzeugroboter mit zwei Knöpfen. Das passiert, wenn du die Knöpfe drückst:

![Blauer Knopf mit Pfeil nach oben](./img/forward.png) Der Roboter fährt ein Stück nach vorne.

![Oranger Knopf mit Pfeil, der nach rechts abbiegt](./img/turn.png) Der Roboter dreht sich auf der Stelle um ein Viertel nach rechts.

**Wie musst du die Knöpfe drücken, damit der Roboter am Ende um ein Viertel nach links gedreht ist?**
