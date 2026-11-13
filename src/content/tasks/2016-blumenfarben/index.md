---
short: 8R7C
title: Blumenfarben
summary: Fünf geschlossene Blumen, drei mögliche Farben und ein paar Hinweise. Kannst du die beiden letzten Farben erschließen?
grades:
  "3-4": hard
  "5-6": medium
  "7-8": easy
gi:
  content: [algorithms]
  process: [reasoning]
topics: [logic]
methods: []
mascot: beaver
interaction:
  format: hotspots
  props:
    background: ./img/second.png
    width: 640
    height: 230
    spots:
      - { id: f2, x: 199, y: 207, w: 110, h: 36, label: zweite Blume von links }
      - { id: f4, x: 451, y: 207, w: 110, h: 36, label: zweite Blume von rechts }
    states:
      - { id: "?", label: "?" }
      - { id: blau, label: blau }
      - { id: orange, label: orange }
      - { id: pink, label: pink }
source:
  type: original
  work: Informatik-Biber 2016
  year: 2016
  page: 13
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2016/Biberheft2016-mit-Loesungen.pdf
  country: SK
  license: CC BY-SA 3.0
---
Jana spielt ein Computerspiel. Sie soll die Farben von fünf Blumen raten. Mögliche Farben sind blau, orange oder pink. Die Blumen sind geschlossen.

Jana rät zuerst die Farben so: orange, pink, blau, orange und orange. Sie hat zweimal richtig geraten. Die richtigen Blumen gehen auf:

![Die fünf Blumen mit Janas Tipps orange, pink, blau, orange, orange; nur die dritte (blau) und die fünfte (orange) sind aufgegangen](./img/first.png)

Für die falschen Blumen rät sie andere Farben. Nun ist noch eine Blume richtig: Die erste Blume (pink) geht auf. Die zweite und die vierte Blume (Tipps: orange und blau) bleiben geschlossen; die dritte (blau) und die fünfte (orange) sind schon offen.

**Rate die Farben der beiden anderen Blumen.** Klicke unter den beiden geschlossenen Blumen, bis die richtige Farbe dort steht.
