---
short: c87v
title: Endstand
summary: Welches der vier Tic-Tac-Toe-Bilder kann am Ende eines Spiels wirklich so aussehen?
grades:
  "7-8": hard
  "9-10": medium
  "11-13": easy
gi:
  content: [algorithms]
  process: [reasoning, modelling]
topics: [logic, games]
methods: []
mascot: beaver
interaction:
  format: choice
  props:
    columns: 4
    options:
      - { id: a, image: ./img/state-a.png, alt: "Spielstand A: Zeile 1: X O X, Zeile 2: O X O, Zeile 3: O O X" }
      - { id: b, image: ./img/state-b.png, alt: "Spielstand B: Zeile 1: X O X, Zeile 2: O X leer, Zeile 3: O X X" }
      - { id: c, image: ./img/state-c.png, alt: "Spielstand C: Zeile 1: X X O, Zeile 2: leer O X, Zeile 3: O O X" }
      - { id: d, image: ./img/state-d.png, alt: "Spielstand D: Zeile 1: X O X, Zeile 2: O X leer, Zeile 3: O X leer" }
source:
  type: original
  work: Informatik-Biber 2022
  year: 2022
  page: 23
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2022/Biberheft_2022_mit_Loesungen_web.pdf
  country: LV
  license: CC BY-SA 4.0
---
Tic-Tac-Toe ist ein Spiel für zwei Personen.

In ein Raster mit 3 × 3 Feldern setzen die Spieler abwechselnd je ein Zeichen in ein freies Feld: immer zuerst der eine Spieler ein blaues **X**, der andere ein rotes **O**.

Wer zuerst drei (gleiche) Zeichen in eine Zeile, Spalte oder Diagonale setzen kann, gewinnt; dann ist das Spiel beendet. Wenn alle Felder besetzt sind und niemand gewonnen hat, endet das Spiel unentschieden.

Hier siehst du die Spielstände aus einem möglichen Spielverlauf: nach den ersten vier Spielzügen und nach dem letzten Zug. Der Spieler mit X gewinnt.

![Fünf Spielstände: X oben rechts; dazu O oben links; dazu X unten links; dazu O in der Mitte; Endstand: X gewinnt mit drei X in der unteren Zeile]](./img/example.png)

Den Spielstand am Ende eines Spiels nennen wir Endstand. Die Spielregeln legen genau fest, wie ein Endstand aussehen kann.

**Nur eines der vier Bilder zeigt einen Endstand von Tic-Tac-Toe. Welches?**
