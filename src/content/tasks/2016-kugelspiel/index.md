---
short: g8Eb
title: Kugelspiel
summary: Aus einer Röhre fallen Kugeln, neue fallen nach. Finde eine Anfangsfolge aus drei Kugeln, bei der das Spiel nie endet.
grades:
  "9-10": hard
  "11-13": medium
gi:
  content: [languages-automata]
  process: [modelling, reasoning]
topics: [formal-languages]
methods: []
mascot: beaver
interaction:
  format: pixel-grid
  props:
    rows: 3
    cols: 1
    palette: ["#d8d8d8", "#e53a26", "#1f4fe0"]
source:
  type: original
  work: Informatik-Biber 2016
  year: 2016
  page: 44
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2016/Biberheft2016-mit-Loesungen.pdf
  country: IT
  license: CC BY-SA 3.0
---
Emil hat ein neues Spiel auf seinem Computer. Das Spiel beginnt mit einer Folge aus mindestens drei farbigen Kugeln (rot oder blau), die sich in einer Röhre befinden.

Nach einem Klick auf eine Taste fallen immer die beiden unteren Kugeln aus der Röhre. Außerdem fallen von oben neue Kugeln in die Röhre. Dabei gibt es zwei Möglichkeiten, abhängig von der Farbe der untersten Kugel vor dem Klick:

![Links: Falls die unterste Kugel rot war, fällt von oben eine blaue Kugel in die Röhre (Beispiel: vorher blau, rot, blau, rot von oben nach unten; nachher blau, blau, rot). Rechts: Falls die unterste Kugel blau war, fallen drei Kugeln mit den Farben rot, blau und rot von oben in die Röhre (Beispiel: vorher blau, rot, blau, rot, blau; nachher rot, blau, rot, blau, rot, blau)](./img/rules.png)

Solange mindestens drei Kugeln in der Röhre sind, klickt Emil immer wieder auf die Taste. Das Spiel endet, wenn sich weniger als drei Kugeln in der Röhre befinden.

Ein Beispiel: Wenn Emil mit dieser Kugelfolge beginnt, bleiben nach fünf Klicks nur zwei blaue Kugeln übrig, und das Spiel ist beendet.

![Eine Röhre mit fünf Kugeln von oben nach unten: rot, rot, blau, blau, rot](./img/example.png)

Emil findet heraus, dass es zu Spielbeginn Kugelfolgen geben kann, so dass das Spiel niemals endet, egal wie oft er klickt. Er nennt solche Kugelfolgen „Endlos-Folgen“.

**Bilde eine Endlos-Folge aus drei Kugeln.** Wähle eine Farbe und klicke auf die drei Kugelplätze (oben, Mitte, unten).
