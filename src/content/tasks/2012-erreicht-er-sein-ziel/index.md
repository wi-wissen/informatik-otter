---
short: WC6N
title: Erreicht er sein Ziel?
summary: Ein Roboter läuft geradeaus, biegt rechts ab und hinterlässt Hindernisse. Auf welchem Spielbrett kommt er nie ans Ziel?
grades:
  "5-6": hard
  "7-8": medium
  "9-10": easy
gi:
  content: [algorithms]
  process: [reasoning, modelling]
topics: [programming, algorithm-analysis]
methods: []
mascot: beaver
interaction:
  format: choice
  props:
    columns: 4
    options:
      - { id: a, image: ./img/a.png, alt: Spielbrett A }
      - { id: b, image: ./img/b.png, alt: Spielbrett B }
      - { id: c, image: ./img/c.png, alt: Spielbrett C }
      - { id: d, image: ./img/d.png, alt: Spielbrett D }
source:
  type: original
  work: Informatik-Biber 2012
  year: 2012
  page: 16
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2012/Biberheft2012-mit-Loesungen.pdf
  license: CC BY-NC-SA 3.0
---
Unser Roboter soll auf einem Spielbrett sein Ziel erreichen: das grüne Feld. Das Feld mit dem Pfeil ist sein Startfeld. Die schwarzen Felder sind Hindernisse.

Der Roboter ist so programmiert: Er bewegt sich in Richtung des Pfeils geradeaus, bis er auf ein Hindernis oder den Spielbrettrand trifft. Dann dreht er sich um 90 Grad nach rechts und bewegt sich wieder geradeaus so weit es geht, usw.

Jedes Feld, über das der Roboter kommt, wird sofort zu einem weiteren Hindernis, auch das Startfeld.

**Auf welchem Spielbrett erreicht der Roboter NICHT sein Ziel?**
