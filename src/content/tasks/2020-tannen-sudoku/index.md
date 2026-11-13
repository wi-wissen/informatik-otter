---
short: tJs3
title: Tannen-Sudoku
summary: Drei Tannenhöhen, Sichtschilder am Rand und eine Sudoku-Regel. Wie müssen die neun Tannen stehen?
grades:
  "5-6": hard
  "7-8": medium
  "9-10": easy
gi:
  content: [information-data]
  process: [reasoning, modelling]
topics: [compression, logic]
methods: []
mascot: beaver
interaction:
  format: pixel-grid
  props:
    rows: 3
    cols: 3
    palette: ["#ffffff", "#a3c93a", "#5a7a14", "#1c2a0c"]
source:
  type: original
  work: Informatik-Biber 2020
  year: 2020
  page: 56
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2020/Biberheft_2020_final_mit_Loesungen.pdf
  country: CH
  license: CC BY-SA 4.0
---
Die Biber möchten Tannen auf ein Feld setzen. Die Tannen haben drei unterschiedliche Höhen (klein, mittel und groß). Wenn eine Tanne hinter einer größeren Tanne steht, kann man sie nicht sehen.

![Drei Tannen: klein, mittel, groß](./img/trees.png)

Das Feld hat Reihen mit je 3 Plätzen für Tannen: Drei Reihen waagerecht (von links nach rechts), drei Reihen senkrecht (von oben nach unten).

Am Ende einer Reihe steht manchmal ein Schild. Darauf steht, wie viele Tannen in dieser Reihe man vom Schild aus sehen soll. Die Tannen müssen so gesetzt werden, dass alle Schilder stimmen. Und: In jeder Reihe (waagerecht und senkrecht) müssen alle Tannenhöhen vorkommen.

Hier ist ein Beispiel mit einer Reihe. Alle Tannen stehen richtig.

![Eine Reihe mit drei Plätzen: von links mittel, klein, groß. Das Schild links zeigt 2, das Schild rechts zeigt 1](./img/example.png)

Setze alle Tannen auf das Feld. Am Ende müssen alle Tannen richtig stehen.

![Das Feld mit 3 mal 3 Plätzen. Schilder: links neben der oberen Reihe die 3, rechts neben der mittleren Reihe die 2, über der linken Spalte die 3, unter der linken Spalte die 1](./img/board.png)

Im Raster stehen die Farben von links nach rechts für: leerer Platz (weiß), kleine Tanne (hellgrün), mittlere Tanne (grün), große Tanne (dunkelgrün).

**Setze alle Tannen auf das Feld.**
