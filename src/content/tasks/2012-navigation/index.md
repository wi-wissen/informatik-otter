---
short: K9WT
title: Navigation
summary: Piratenbiber steuern ihr Schiff mit Windrosen-Befehlen zur schwarzen Flagge. Welches Programm ist kollisionsfrei und am kürzesten?
grades:
  "5-6": medium
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [programming, optimization]
methods: [sequence]
mascot: beaver
interaction:
  format: choice
  props:
    options:
      - { id: a, label: 4NW ; 1W }
      - { id: b, label: 2NW ; 2W ; 2N ; 1W }
      - { id: c, label: 2NW ; 2N ; 1NW ; 1W ; 1SW }
      - { id: d, label: 2NW ; 2W ; 1NW ; 1N }
source:
  type: original
  work: Informatik-Biber 2012
  year: 2012
  page: 29
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2012/Biberheft2012-mit-Loesungen.pdf
  license: CC BY-NC-SA 3.0
---
Die Piratenbiber segeln durch ein Inselgebiet. Ihr Ziel ist auf einem der Rasterpunkte ihrer Seekarte durch eine schwarze Flagge markiert. Eine programmierbare Steuerung kann das Segelschiff von Punkt zu Punkt bewegen. Dabei hält sie stets Kurs in einer der acht Richtungen der Windrose. Zum Beispiel bedeutet „1N“ eine Bewegung zum nächsten Punkt in nördlicher Richtung. Und „2SW ; 1S“ bedeutet zwei Bewegungen zum übernächsten Punkt in südwestlicher Richtung und dann eine dritte Bewegung in südlicher Richtung.

![Seekarte mit Rasterpunkten und drei Inseln. Oben links wartet die schwarze Flagge, unten rechts liegt das Segelschiff](./img/map.png) ![Windrose mit den Richtungen N, NO, O, SO, S, SW, W und NW](./img/compass.png)

**Welches Steuerprogramm führt ohne Zusammenstoß mit einer Insel und mit möglichst wenigen Bewegungen zum Zielpunkt?**
