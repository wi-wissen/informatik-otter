---
short: 2LWe
title: Ziffernschloss
summary: Bobs Zifferncode ist verschleiert notiert. Aus der Anzahl größerer Ziffern links davon soll der Code rekonstruiert werden.
grades:
  "9-10": hard
  "11-13": medium
gi:
  content: [algorithms]
  process: [reasoning, modelling]
topics: [algorithm-analysis, sorting]
methods: []
mascot: beaver
interaction:
  format: sort-list
  props:
    direction: horizontal
    startLabel: erste Stelle
    endLabel: letzte Stelle
    items:
      - { id: d0, label: "0" }
      - { id: d1, label: "1" }
      - { id: d2, label: "2" }
      - { id: d3, label: "3" }
      - { id: d4, label: "4" }
      - { id: d5, label: "5" }
      - { id: d6, label: "6" }
      - { id: d7, label: "7" }
source:
  type: original
  work: Informatik-Biber 2023
  year: 2023
  page: 67
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2023/Biberheft_2023_web_komplett.pdf
  country: UA
  license: CC BY-SA 4.0
---
Bob hat ein Ziffernschloss an seiner Haustür. Um es zu öffnen, muss man einen Zifferncode eingeben. Alle Ziffern im Code müssen verschieden sein. Aktuell hat der Code fünf Stellen und lautet so: **0 2 4 3 1**

Bob hat sich den Code notiert, aber ein wenig verschleiert: n >> c bedeutet, dass links von Ziffer c im Code genau n Ziffern stehen, die größer sind als c. Zum Beispiel notiert Bob mit

1 >> 3

dass links von Ziffer 3 genau eine Ziffer steht (nämlich die 4), die größer ist als 3. Den aktuellen Zifferncode hat er sich insgesamt so notiert:

0 >> 0 ; 3 >> 1 ; 0 >> 2 ; 1 >> 3 ; 0 >> 4

Ein Code aus nur fünf Ziffern ist Bob zu unsicher. Deshalb überlegt er sich einen neuen Code, aus den Ziffern 0 bis 7. Den neuen Code notiert er sich so:

3 >> 0 ; 2 >> 1 ; 4 >> 2 ; 4 >> 3 ; 1 >> 4 ; 1 >> 5 ; 1 >> 6 ; 0 >> 7

**Wie lautet der neue Code? Bringe die Ziffern an die richtigen Stellen.**
