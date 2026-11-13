---
short: W2AE
title: Badezimmer kacheln
summary: Kachelfreund darf nur acht Kachelmuster verwenden. An welcher Stelle lassen sich die freien Kacheln nicht mehr füllen?
grades:
  "11-13": hard
gi:
  content: [languages-automata]
  process: [reasoning, modelling]
topics: [automata, logic]
methods: [cellular-automaton]
mascot: beaver
interaction:
  format: choice
  props:
    columns: 2
    options:
      - { id: a, image: ./img/stelle-a.png, alt: "Stelle A: Reihe mit drei Fragezeichen" }
      - { id: b, image: ./img/stelle-b.png, alt: "Stelle B: Reihe mit drei Fragezeichen" }
      - { id: c, image: ./img/stelle-c.png, alt: "Stelle C: Reihe mit drei Fragezeichen" }
      - { id: d, image: ./img/stelle-d.png, alt: "Stelle D: Reihe mit drei Fragezeichen" }
source:
  type: original
  work: Informatik-Biber 2011
  year: 2011
  page: 6
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2011/Biberheft2011-mit-Loesungen.pdf
  license: CC BY-NC-SA 3.0 DE
---
Kachelfreund renoviert sein Badezimmer und verlegt schwarze und weiße Kacheln. Dabei will er je drei nebeneinander liegende Kacheln und die Kachel in der Mitte darunter ausschließlich nach bestimmten Mustern verlegen. Nur die folgenden acht Kachelmuster sind erlaubt:

![Die acht erlaubten Kachelmuster 1 bis 8: je drei Kacheln oben und eine darunter in der Mitte](./img/muster.png)

Der etwas eigenwillige Kachelfreund hat nun an vier Stellen im Bad bereits Kacheln verlegt. Dabei hat er, wie unten zu sehen ist, immer drei Kachelpositionen frei gelassen. Schon jetzt ist klar, dass es an einer Stelle **nicht** mehr möglich ist, die drei freien Positionen so mit Kacheln zu füllen, dass die Kachelmuster eingehalten werden.

**An welcher Stelle?**
