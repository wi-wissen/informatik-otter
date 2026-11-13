---
short: WvX2
title: Bienenstock
summary: Eine Biene soll mit genau fünf Bewegungen durch den Bienenstock zur Larve finden.
grades:
  "5-6": easy
gi:
  content: [algorithms]
  process: [modelling]
topics: [graphs, optimization]
methods: []
mascot: beaver
interaction:
  format: place
  props:
    reusable: true
    background: ./img/slots.png
    width: 169
    height: 38
    trayLabel: Pfeile
    zones:
      - { id: s1, label: "1. Bewegung", x: 8, y: 8.75, w: 24.5, h: 24.5 }
      - { id: s2, label: "2. Bewegung", x: 39.5, y: 8.75, w: 24.5, h: 24.5 }
      - { id: s3, label: "3. Bewegung", x: 71.25, y: 8.75, w: 24.5, h: 24.5 }
      - { id: s5, label: "5. Bewegung", x: 134.5, y: 8.75, w: 24.5, h: 24.5 }
    items:
      - { id: r, image: ./img/arrow-r.png, alt: "Pfeil nach rechts" }
      - { id: dr, image: ./img/arrow-dr.png, alt: "Pfeil nach rechts unten" }
      - { id: dl, image: ./img/arrow-dl.png, alt: "Pfeil nach links unten" }
      - { id: l, image: ./img/arrow-l.png, alt: "Pfeil nach links" }
      - { id: ul, image: ./img/arrow-ul.png, alt: "Pfeil nach links oben" }
      - { id: ur, image: ./img/arrow-ur.png, alt: "Pfeil nach rechts oben" }
source:
  type: original
  work: Informatik-Biber 2013
  year: 2013
  page: 5
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2013/Biberheft2013-mit-Loesungen.pdf
  license: CC BY-NC-SA 3.0
---
Die Biene soll der Larve Futter bringen.

Im Bienenstock kann die Biene sich von einer Wabe (Sechseck) zur nächsten bewegen. An manchen Stellen versperren ihr dicke braune Wände den Weg.

![Der Bienenstock: Die Biene sitzt in der obersten Reihe ganz links, die Larve in der untersten Reihe ganz rechts. Dicke braune Wände trennen einige Waben.](./img/grid.png)

**Zeige der Biene mit den Pfeilen einen Weg zur Larve!**

Schiebe passende Pfeile auf die grauen Felder. Die Biene braucht 5 Bewegungen, um zur Larve zu kommen. Die vierte Bewegung steht schon fest (rechts unten).
