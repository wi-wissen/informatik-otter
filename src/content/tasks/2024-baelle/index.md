---
short: bKQ9
title: Bälle
summary: Emil beschreibt Folgen roter und blauer Bälle mit 0en und 1en. Kannst du aus der Beschreibung die Bälle-Folge wiederherstellen?
grades:
  "9-10": hard
  "11-13": medium
gi:
  content: [information-data]
  process: [modelling, reasoning]
topics: [encoding, compression]
methods: [parity-bit]
mascot: beaver
interaction:
  format: pixel-grid
  props:
    rows: 1
    cols: 8
    palette: ["#ffffff", "#d62828", "#1d3a9e"]
source:
  type: original
  work: Informatik-Biber 2024
  year: 2024
  page: 7
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2024/Biberheft_2024_web_komplett.pdf
  country: BG
  license: CC BY-SA 4.0
---
Emil beschreibt Folgen von blauen und roten Bällen nur mit 0en und 1en. Das macht er auf ganz besondere Weise und zeigt das an einem Beispiel:

![Sechs Bälle von links nach rechts: rot, blau, blau, rot, rot, blau](./img/example.png)

Im ersten Schritt zählt Emil für jeden Ball, wie viele **blaue** Bälle sich rechts davon befinden, und zählt den Ball selbst mit, wenn der blau ist. Diese Anzahlen schreibt er als Zwischenfolge auf: `3, 3, 2, 1, 1, 1`

Im zweiten und letzten Schritt formt er die Zwischenfolge so um: Wenn die Zahl **gerade** ist, wird sie zu `0`, wenn sie **ungerade** ist, zu `1`. `0` gilt als gerade Zahl. Emil beschreibt die obige Bälle-Folge also so: `1, 1, 0, 1, 1, 1`

Eine andere Bälle-Folge beschreibt Emil so: `0, 1, 1, 1, 0, 1, 0, 0`

**Erstelle diese Bälle-Folge! Färbe dazu die acht Felder rot oder blau.**
