---
short: 9jyV
title: Happy Birthday
summary: Johanna hat Geburtstag am 29. Februar. Ihr Entscheidungsplan sagt, ob ein Jahr ein Schaltjahr ist. Kannst du ihn vervollständigen?
grades:
  "7-8": medium
  "9-10": easy
gi:
  content: [algorithms]
  process: [modelling, representing]
topics: [algorithm-analysis, programming]
methods: [conditional]
mascot: beaver
interaction:
  format: hotspots
  props:
    background: ./img/plan-2-leer.png
    width: 1355
    height: 315
    spots:
      - { id: top, x: 1262, y: 57, w: 84, h: 90, label: "Ergebnis nach „durch 400 teilbar?“ mit ja" }
      - { id: mid, x: 638, y: 252, w: 84, h: 90, label: "Ergebnis nach „durch 100 teilbar?“ mit nein" }
      - { id: low, x: 985, y: 252, w: 84, h: 90, label: "Ergebnis nach „durch 400 teilbar?“ mit nein" }
    states:
      - { id: open, label: "?" }
      - { id: yes, image: ./img/state-yes.png, label: Schaltjahr }
      - { id: no, image: ./img/state-no.png, label: kein Schaltjahr }
source:
  type: original
  work: Informatik-Biber 2024
  year: 2024
  page: 33
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2024/Biberheft_2024_web_komplett.pdf
  country: CH
  license: CC BY-SA 4.0
---
Johanna wurde in einem Schaltjahr an einem 29. Februar geboren. Nur wenn wieder ein Schaltjahr ist, kann sie ihren Geburtstag am 29. Februar feiern. Bisher war das alle vier Jahre. Um schnell bestimmen zu können, ob ein Jahr ein Schaltjahr ist, hat Johanna diesen „Entscheidungsplan“ gemacht:

![Entscheidungsplan: Start, dann die Frage „Jahr teilbar durch 4?“. Bei ja: Schaltjahr (Kalenderblatt 29 mit Partyhut), bei nein: kein Schaltjahr (durchgestrichenes Kalenderblatt 29)](./img/plan-1.png)

Nach einiger Zeit lernt Johanna, dass es doch etwas komplizierter ist, ein Schaltjahr zu bestimmen:

- Wenn das Jahr durch 100 teilbar ist, ist es kein Schaltjahr (zum Beispiel 1900).
- Ist das Jahr aber durch 400 teilbar, dann ist es doch ein Schaltjahr (zum Beispiel 2000).

Johanna erweitert ihren Plan und fügt zwei Fragen hinzu. Nur die Entscheidungen sind noch offen: Schaltjahr (Kalenderblatt 29 mit Partyhut) oder nicht (durchgestrichenes Kalenderblatt 29).

**Hilf Johanna und wähle für jedes Fragezeichen die richtige Entscheidung aus.**

Klicke dazu auf ein Fragezeichen, bis das richtige Kalenderblatt (Schaltjahr oder durchgestrichen für „kein Schaltjahr“) erscheint.
