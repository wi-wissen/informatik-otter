---
short: 4UqJ
title: Zugleich
summary: Drei Roboter bekommen gemeinsam dieselben Richtungsbefehle. Welche Befehlsfolge führt sie zu Ball, Ring und Kegel?
grades:
  "5-6": medium
  "7-8": easy
gi:
  content: [systems]
  process: [modelling, reasoning]
topics: [parallelism]
methods: [sequence]
mascot: beaver
interaction:
  format: choice
  props:
    options:
      - { id: a, label: "A) N, O, O, O" }
      - { id: b, label: "B) N, O, O, S, O" }
      - { id: c, label: "C) N, N, S, O, N" }
      - { id: d, label: "D) N, O, O, S, W" }
source:
  type: original
  work: Informatik-Biber 2016
  year: 2016
  page: 64
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2016/Biberheft2016-mit-Loesungen.pdf
  country: IE
  license: CC BY-SA 3.0
---
Drei Roboter arbeiten als Team zusammen. Du kannst das Team mit Richtungsbefehlen steuern: N, S, O oder W (Norden oben, Osten rechts). Mit einem Richtungsbefehl steuerst du alle drei Roboter gleich: um ein Feld weiter in diese Richtung.

Du sollst die Roboter zu den Dingen steuern, die sie am Ende nehmen sollen. Damit sie nichts Falsches nehmen, musst du sie vorher um andere Dinge herum steuern.

Ein Beispiel: Du steuerst die Roboter mit diesen Befehlen: N, N, S, S, O. Dann nehmen die Roboter am Ende zwei Kegel und einen Ring.

![Ein Spielfeld mit sechs Spalten und sechs Zeilen. Es enthält drei Roboter (zwei in Spalte 3, einer unten links), Bälle, Ringe und Kegel](./img/board.png)

Die Roboter sollen einen Ball, einen Ring und einen Kegel nehmen.

**Mit welchen Befehlen musst du sie steuern?**
