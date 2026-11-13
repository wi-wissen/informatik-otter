---
short: 2gCn
title: Gleiche Buchstaben
summary: Drei Buchstaben einer Reihe dürfen ersetzt werden. Wie bekommt man die meisten Punkte für Gruppen gleicher Buchstaben?
grades:
  "9-10": medium
  "11-13": easy
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [optimization, searching]
methods: [brute-force]
mascot: beaver
interaction:
  format: input
  props:
    kind: text
    placeholder: "z. B. AAAAAAAAAAAA"
source:
  type: original
  work: Informatik-Biber 2024
  year: 2024
  page: 31
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2024/Biberheft_2024_web_komplett.pdf
  country: SK
  license: CC BY-SA 4.0
---
Lege Buchstaben in eine Reihe und bekomme Punkte: Wenn 2 gleiche Buchstaben direkt nebeneinander liegen, bekommst du 2 Punkte, bei 3 gleichen Buchstaben 3, und so weiter.

Ein Beispiel: Die Reihe **B C A C B** bringt 0 Punkte, denn es liegen nirgendwo gleiche Buchstaben direkt nebeneinander.

Nun ersetzt du das erste C durch ein A und das zweite C durch ein B. Das Ergebnis ist **B A A B B**. Dafür bekommst du 4 Punkte: 2 für die beiden A’s und 2 für die beiden B’s hintereinander.

Jetzt hast du eine neue Reihe gelegt, mit 12 Buchstaben. Du kannst darin drei beliebige Buchstaben ersetzen, und zwar durch die Buchstaben B, B und C.

![Die Reihe A B B C A B C A B A A A](./img/row.png)

![Die Ersatzbuchstaben B, B und C](./img/tiles.png)

**Ersetze so, dass du für das Ergebnis so viele Punkte bekommst wie möglich. Schreibe die neue Reihe aus 12 Buchstaben ohne Leerzeichen auf.**
