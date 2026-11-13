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
  format: custom
  props:
    background: ./img/plan.png
    width: 860
    height: 810
    xs: [83, 253, 428, 595, 768]
    ys: [67, 225, 385, 550, 710]
    numbers: { "0,0": 2, "0,2": 8, "0,4": 15, "1,3": 3, "3,1": 1, "4,1": 6, "4,3": 12 }
    teacher: "1,4"
    limit: 16
    goal: 5
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

Du sollst innerhalb von 16 Sekunden möglichst viele Gegenstände zum Lehrertisch bringen.

Du kannst an einem beliebigen Tisch starten und dich dann entlang der Linien von Tisch zu Tisch bewegen. Du darfst jede Linie nur einmal entlang gehen. Du brauchst genau 1 Sekunde, um von einem Tisch zum nächsten zu gehen und, falls vorhanden, einen Gegenstand zu nehmen.

Die Zahl auf einem Tisch sagt dir, nach wie vielen Sekunden du frühestens bei diesem Tisch sein darfst.

Hier ist der Tischplan. Du kannst auf die Linien zwischen den Tischen klicken, um Wege durch den Klassenraum auszuprobieren.

**Wie viele Gegenstände kannst du innerhalb von 16 Sekunden höchstens zum Lehrertisch bringen?** Zeige es mit einem Weg auf dem Plan.
