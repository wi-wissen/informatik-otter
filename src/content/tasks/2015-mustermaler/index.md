---
short: 2U5U
title: Mustermaler
summary: Mit höchstens sieben Anweisungen und einer Wiederholung soll ein Zielmuster gemalt werden.
grades:
  "7-8": medium
gi:
  content: [algorithms]
  process: [modelling, structuring]
topics: [programming]
methods: [sequence, loop]
mascot: beaver
interaction:
  format: command-sequence
  props:
    maxLength: 7
    commands:
      - { id: right, label: Gehe einen Schritt nach rechts }
      - { id: left, label: Gehe einen Schritt nach links }
      - { id: up, label: Gehe einen Schritt nach oben }
      - { id: down, label: Gehe einen Schritt nach unten }
source:
  type: original
  work: Informatik-Biber 2015
  year: 2015
  page: 39
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2015/Biberheft2015-mit-Loesungen.pdf
  country: FR
  license: CC BY-SA 3.0
---
Erstelle ein Programm, das das unten gezeigte Zielmuster malt.

Du wählst Anweisungen aus, die nacheinander in den freien Feldern erscheinen. Dein Programm hat höchstens sieben Anweisungen. Es wird sechs Mal hintereinander wiederholt („Wiederhole sechs mal …“). Das Programm startet in einem Feld, das schon gemalt ist; jede Anweisung bewegt den Stift ein Feld weiter und malt dort das Feld.

**Zielmuster:**

![Zielmuster aus zwei Zeilen. In der oberen Zeile stehen immer drei gemalte Felder nebeneinander, dann eine Lücke, in der unteren Zeile immer zwei, drei, drei, … gemalte Felder. Das Muster wiederholt sich sechsmal.](./img/target.png)
