---
short: 4BmH
title: Punktemuster
summary: Mit vier Befehlen entstehen Punktmuster auf einem 3-mal-3-Feld. Welche Befehlsfolge ergibt das gezeigte Muster?
grades:
  "9-10": medium
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [programming]
methods: [sequence]
mascot: beaver
interaction:
  format: choice
  props:
    options:
      - { id: a, label: "draw-2b, turn90 , draw-2a, draw-1" }
      - { id: b, label: "draw-2b, draw-2a, turn90 , draw-2a" }
      - { id: c, label: "draw-2a, draw-2b, turn90 , draw-2a" }
      - { id: d, label: "draw-2a, turn90 , draw-2a, draw-2b" }
source:
  type: original
  work: Informatik-Biber 2013
  year: 2013
  page: 37
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2013/Biberheft2013-mit-Loesungen.pdf
  license: CC BY-NC-SA 3.0
---
Die drei Befehle „draw-1“, „draw-2a“ und „draw-2b“ lassen diese Punktemuster entstehen:

![Drei Quadrate mit Punkten. draw-1: ein Punkt in der Mitte. draw-2a: zwei Punkte, einer oben rechts und einer unten links. draw-2b: zwei Punkte, einer links und einer rechts in der mittleren Zeile.](./img/commands.png)

Der Befehl „turn90“ dreht das bisher entstandene Punktmuster um 90 Grad im Uhrzeigersinn. Indem mehrere Befehle hintereinander ausgeführt werden, können viele unterschiedliche Punktmuster entstehen. Zum Beispiel lässt die Befehlsfolge „draw-2b, turn90“ dieses Punktemuster entstehen:

![Quadrat mit zwei Punkten, einer oben in der Mitte und einer unten in der Mitte](./img/ex1.png)

Und die Befehlsfolge „draw-1, draw-2a, turn90“ lässt dieses Punktemuster entstehen:

![Quadrat mit drei Punkten auf der Diagonalen von oben links nach unten rechts](./img/ex2.png)

![Quadrat mit sechs Punkten in zwei Spalten (links und rechts) und drei Zeilen; die mittlere Spalte ist leer](./img/target.png)

**Welche Befehlsfolge lässt dieses Punktemuster entstehen?**
