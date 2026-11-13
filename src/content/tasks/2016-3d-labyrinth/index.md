---
short: qyB6
title: 3D-Labyrinth
summary: Eine Kugel fällt durch vier Ebenen. Mit einer Folge von Richtungsbefehlen steuerst du sie bis ins Ziel.
grades:
  "5-6": medium
  "7-8": easy
gi:
  content: [algorithms]
  process: [modelling, structuring]
topics: [programming]
methods: [sequence]
mascot: beaver
interaction:
  format: custom
  props:
    holes:
      - [1, 0]
      - [0, 0]
      - [1, 1]
    goal: [0, 1]
    start: [0, 0]
source:
  type: original
  work: Informatik-Biber 2016
  year: 2016
  page: 7
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2016/Biberheft2016-mit-Loesungen.pdf
  country: JP
  license: CC BY-SA 3.0
---
Ein 3D-Labyrinth hat vier Ebenen mit jeweils vier Feldern. Eine Kugel liegt auf der obersten Ebene. Auf der untersten Ebene ist das Ziel: das gelbe Feld.

Du kannst die Kugel mit den Richtungsbefehlen N, O, S und W steuern (Norden ist nach hinten, Osten nach rechts). Auf einem weißen Feld fällt die Kugel eine Ebene nach unten. Das Labyrinth ist geschlossen; du kannst die Kugel also nicht nach außen steuern.

![Das 3D-Labyrinth mit vier Ebenen. Die Kugel liegt oben vorne links; Löcher: Ebene 1 vorne rechts, Ebene 2 vorne links, Ebene 3 hinten rechts; das Ziel auf Ebene 4 liegt hinten links.](./img/maze.png)

**Steuere die Kugel ins Ziel!**

Gib dazu eine Folge von Richtungsbefehlen ein, zum Beispiel NOS, um die Kugel nach N, O und dann nach S zu bewegen.
