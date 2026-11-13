---
short: 7EDH
title: Brennende Kerzen
summary: Vier Sonntage, vier Kerzen, und am Ende sollen alle gleich weit heruntergebrannt sein. Geht das mit fünf Sonntagen?
grades:
  "7-8": hard
  "9-10": medium
  "11-13": easy
gi:
  content: [algorithms]
  process: [reasoning, modelling]
topics: [algorithm-analysis]
methods: [invariant]
mascot: beaver
interaction:
  format: pixel-grid
  props:
    rows: 5
    cols: 5
    palette: ["#b3261e", "#f5b301"]
    initial: [[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[1,1,1,1,1]]
    locked: [[false,false,false,false,false],[false,false,false,false,false],[false,false,false,false,false],[false,false,false,false,false],[true,true,true,true,true]]
source:
  type: original
  work: Informatik-Biber 2025
  year: 2025
  page: 31
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2025/Biberheft_2025_web_komplett.pdf
  country: DE
  license: CC BY-SA 4.0
---
Es gibt eine Tradition, an den vier Sonntagen vor Weihnachten Kerzen anzuzünden: 1 Kerze am ersten Sonntag, 2 Kerzen am zweiten Sonntag und so weiter.

Chris liebt diese Tradition. Alle seine Kerzen sind gleich lang. Chris‘ Weihnachtsfest wäre wunderschön, wenn auch nach dem letzten Sonntag alle Kerzen noch gleich lang wären. Dafür müsste er jede Kerze insgesamt gleich oft anzünden.

Leider findet Chris keine Möglichkeit, ein wunderschönes Weihnachtsfest zu haben.

Wenn die Tradition nur drei Sonntage (und Kerzen) umfassen würde, wäre es möglich. Dann würde Chris jede Kerze genau zweimal anzünden:

![Drei Zeilen für die Sonntage 1 bis 3 mit je drei Kerzen: Sonntag 1 brennt die linke Kerze, Sonntag 2 die mittlere und die rechte, Sonntag 3 alle drei](./img/ex3.png)

Auch mit fünf Sonntagen (und Kerzen) wäre es möglich.

**Zeige Chris, wie er jede Kerze gleich oft anzünden kann.** Am 1. Sonntag brennt 1 Kerze, am 2. Sonntag 2 Kerzen, und so weiter. Für den fünften Sonntag sind die Kerzen bereits angezündet.
