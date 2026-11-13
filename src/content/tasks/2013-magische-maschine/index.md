---
short: 13Xg
title: Magische Maschine
summary: "Kugeln, Münzen und Knöpfe: Welche Folge von Knopfdrücken bringt die Maschine in einen stabilen Zustand?"
grades:
  "11-13": hard
gi:
  content: [systems, languages-automata]
  process: [modelling, reasoning]
topics: [automata, parallelism]
methods: [finite-automaton]
mascot: beaver
interaction:
  format: choice
  props:
    options:
      - { id: a, label: B – B – C – A – B – A }
      - { id: b, label: B – C – B – C – B – A }
      - { id: c, label: B – B – C – B – C – C }
      - { id: d, label: B – C – B – B – A – A }
source:
  type: original
  work: Informatik-Biber 2013
  year: 2013
  page: 31
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2013/Biberheft2013-mit-Loesungen.pdf
  license: CC BY-NC-SA 3.0
---
Die magische Maschine besteht aus Kugeln und Knöpfen. Die Kugeln können Münzen enthalten. Kugeln und Knöpfe sind durch Pfeile verbunden. Eine Kugel, von der aus ein Pfeil zu einem Knopf hinführt, ist eine „Quelle“ dieses Knopfes. Eine Kugel, zu der von einem Knopf aus ein Pfeil hinführt, ist ein „Ziel“ dieses Knopfes.

Drückt man einen Knopf, passieren nacheinander zwei Dinge:

1. Die Maschine prüft, ob in jeder Quelle des Knopfes wenigstens eine Münze liegt.
2. Wenn dies der Fall ist, verschwindet aus allen Quellen des Knopfes jeweils eine Münze und allen Zielen des Knopfes wird jeweils eine Münze hinzugefügt.

![Die Maschine: Drei Kugeln (links, oben rechts mit 3 Münzen, unten) und die Knöpfe A, B, C. Knopf A hat die Quellen linke und untere Kugel und die Ziele linke und obere rechte Kugel. Knopf B hat die Quelle obere rechte Kugel und das Ziel untere Kugel. Knopf C hat die Quelle untere Kugel und das Ziel linke Kugel.](./img/machine.png)

Beispiel: Wenn man den Knopf B drückt, wird eine Münze aus der Kugel oben rechts entfernt und eine Münze wird der Kugel unten hinzugefügt. Wenn man bestimmte Knöpfe in einer bestimmten Reihenfolge drückt, kommt die Maschine in einen stabilen Zustand, der sich nicht mehr ändert, gleichgültig welche Knöpfe dann noch gedrückt werden.

**Welche Folge von Knopfdrücken erzeugt einen stabilen Zustand?**
