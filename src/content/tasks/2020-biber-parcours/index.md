---
short: 8DMZ
title: Biber-Parcours
summary: Sieben Gegenstände liegen auf Tischen im Klassenraum, doch die Zeit reicht nur für einen Teil. Wie viele schaffst du?
grades:
  "9-10": hard
  "11-13": medium
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [optimization, graphs]
methods: [backtracking]
mascot: beaver
interaction:
  format: input
  props:
    kind: number
source:
  type: original
  work: Informatik-Biber 2020
  year: 2020
  page: 14
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2020/Biberheft_2020_final_mit_Loesungen.pdf
  country: NZ
  license: CC BY-SA 4.0
---
Die Informatik-Lehrerin hat für den Unterrichtsbeginn ein Bewegungsspiel eingeführt: den Biber-Parcours. Das Spiel geht so:

Auf dem Tischplan des Klassenraums sind sieben Tische mit Zahlen markiert. Auf jedem dieser Tische liegt ein kleiner Gegenstand.

Du sollst innerhalb von 16 Sekunden möglichst viele Gegenstände zum Lehrertisch (der Tisch mit dem weißen Kreuz, zweite Reihe von oben ganz rechts) bringen.

Du kannst an einem beliebigen Tisch starten und dich dann entlang der Linien von Tisch zu Tisch bewegen. Du darfst jede Linie nur einmal entlang gehen. Du brauchst genau 1 Sekunde, um von einem Tisch zum nächsten zu gehen und, falls vorhanden, einen Gegenstand zu nehmen.

Die Zahl auf einem Tisch sagt dir, nach wie vielen Sekunden du frühestens bei diesem Tisch sein darfst.

Hier ist der Tischplan. Je zwei benachbarte Tische sind durch eine Linie verbunden.

![Tischplan: ein Raster aus 5 mal 5 Tischen, benachbarte Tische sind verbunden. Obere Reihe: 2, leer, 8, leer, 15. Zweite Reihe: leer, leer, leer, 3, Lehrertisch. Vierte Reihe: leer, 1, leer, leer, leer. Untere Reihe: leer, 6, leer, 12, leer](./img/plan.png)

**Wie viele Gegenstände kannst du innerhalb von 16 Sekunden höchstens zum Lehrertisch bringen?**
