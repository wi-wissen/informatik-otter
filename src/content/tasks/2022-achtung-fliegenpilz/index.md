---
short: 2d8N
title: Achtung Fliegenpilz
summary: Bei einem Aufdeckspiel mit versteckten Fliegenpilzen sollst du sichere Felder aus den Zahlen erschließen.
grades:
  "7-8": easy
  "9-10": easy
gi:
  content: [algorithms]
  process: [reasoning, modelling]
topics: [logic]
methods: []
mascot: beaver
interaction:
  format: graph-pick
  props:
    pick: nodes
    width: 338
    height: 257
    background: ./img/board.png
    hideNodes: true
    nodeRadius: 38
    nodes:
      - { id: a, x: 42, y: 42, label: "zugedecktes Feld oben links" }
      - { id: b, x: 212, y: 42, label: "zugedecktes Feld oben, dritte Spalte" }
      - { id: c, x: 297, y: 42, label: "zugedecktes Feld oben rechts" }
      - { id: d, x: 42, y: 213, label: "zugedecktes Feld unten links" }
      - { id: e, x: 297, y: 128, label: "zugedecktes Feld Mitte rechts" }
      - { id: f, x: 297, y: 213, label: "zugedecktes Feld unten rechts" }
source:
  type: original
  work: Informatik-Biber 2022
  year: 2022
  page: 7
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2022/Biberheft_2022_mit_Loesungen_web.pdf
  country: HU
  license: CC BY-SA 4.0
---
Beim Spiel „Achtung Fliegenpilz“ ist zu Beginn genau ein Fliegenpilz zu sehen. Alle anderen Felder des Spielbretts sind zugedeckt. Deckst du ein Feld auf, erscheint entweder ein weiterer Fliegenpilz oder die Anzahl der Fliegenpilze auf den Nachbarfeldern. Wenn du alle Felder aufdeckst, auf denen kein Fliegenpilz versteckt ist, hast du gewonnen.

Hier ist ein Beispiel für ein vollständig aufgedecktes Spielbrett:

![Vollständig aufgedecktes Spielbrett mit 4 mal 4 Feldern: Zeile 1: 0, 1, 1, 1. Zeile 2: 1, 3, Pilz, 2. Zeile 3: 1, Pilz, Pilz, 2. Zeile 4: 1, 2, 2, 1](./img/example.png)

Du hast ein neues Spiel begonnen und bereits einige Felder aufgedeckt – siehe unten.

**Auf welchen der übrigen Felder ist sicher kein Fliegenpilz?**
