---
short: 5KVD
title: Magische Tunnel
summary: Vier Biber fahren in einem Waggon durch schwarze und weiße Tunnel, die sie umsortieren. Wie sitzen sie am Ende?
grades:
  "5-6": medium
  "7-8": easy
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [algorithm-analysis, sorting]
methods: [sequence]
mascot: beaver
interaction:
  format: choice
  props:
    columns: 2
    options:
      - { id: a, image: ./img/a.png, alt: "Reihenfolge A: 1-2-3-4 (großer Biber, Biber mit roter Schleife, mittlerer Biber, kleiner Biber mit gelber Blume)" }
      - { id: b, image: ./img/b.png, alt: "Reihenfolge B: 4-3-2-1" }
      - { id: c, image: ./img/c.png, alt: "Reihenfolge C: 4-2-3-1" }
      - { id: d, image: ./img/d.png, alt: "Reihenfolge D: 1-3-2-4" }
source:
  type: original
  work: Informatik-Biber 2013
  year: 2013
  page: 32
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2013/Biberheft2013-mit-Loesungen.pdf
  license: CC BY-NC-SA 3.0
---
Die Biber-Bahn kennt zwei Sorten Tunnel. Fährt ein Waggon durch einen schwarzen Tunnel, kommen die Passagiere in umgekehrter Reihenfolge wieder heraus:

![Vier Biber im Waggon (1 groß, 2 mit roter Schleife, 3 mittel, 4 klein mit gelber Blume) fahren durch einen schwarzen Tunnel und kommen in der Reihenfolge 4-3-2-1 heraus](./img/black.png)

Fährt ein Waggon durch einen weißen Tunnel, sind der erste und der letzte Passagier vertauscht:

![Die vier Biber fahren durch einen weißen Tunnel und kommen in der Reihenfolge 4-2-3-1 heraus](./img/white.png)

Dieser Waggon fährt jetzt durch drei Tunnel:

![Der Waggon mit den Bibern 1-2-3-4 fährt nacheinander durch einen schwarzen, einen weißen und einen schwarzen Tunnel](./img/three.png)

**In welcher Reihenfolge kommen die Passagiere aus dem letzten Tunnel?**
