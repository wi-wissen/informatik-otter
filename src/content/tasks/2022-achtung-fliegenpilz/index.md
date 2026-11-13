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
  format: choice
  props:
    multiple: true
    columns: 2
    options:
      - { id: a, label: oben links }
      - { id: b, label: oben (dritte Spalte) }
      - { id: c, label: oben rechts }
      - { id: d, label: unten links }
      - { id: e, label: Mitte rechts }
      - { id: f, label: unten rechts }
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

![Spielbrett mit 3 Zeilen und 4 Spalten. Zeile 1: zugedeckt, 1, zugedeckt, zugedeckt. Zeile 2: 1, 2, 1, zugedeckt. Zeile 3: zugedeckt, 1, Pilz, zugedeckt](./img/board.png)

**Auf welchen der übrigen (zugedeckten) Felder ist sicher kein Fliegenpilz?** Wähle alle diese Felder aus. Die zugedeckten Felder heißen A bis F: A ist oben links, B und C stehen rechts daneben (in der obersten Zeile), D ist unten links, E steht rechts in der mittleren Zeile und F unten rechts.
