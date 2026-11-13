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
  format: match
  props:
    left:
      - { id: zweite, label: zweite Blume von links }
      - { id: vierte, label: vierte Blume von links }
    right:
      - { id: pink, label: pink }
      - { id: blau, label: blau }
      - { id: orange, label: orange }
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

Für die falschen Blumen rät sie andere Farben. Nun ist noch eine Blume richtig:

![Janas zweite Tipps von links: pink (die erste Blume geht auf), orange (geschlossen), blau (offen), blau (geschlossen), orange (offen)](./img/second.png)

**Rate die Farben der beiden anderen Blumen.**
