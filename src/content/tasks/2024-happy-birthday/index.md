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
  format: match
  props:
    left:
      - { id: mid, label: "? unten Mitte (nach „durch 100 teilbar?“ mit nein)" }
      - { id: low, label: "? unten rechts (nach „durch 400 teilbar?“ mit nein)" }
      - { id: top, label: "? ganz rechts (nach „durch 400 teilbar?“ mit ja)" }
    right:
      - { id: yes, label: Schaltjahr }
      - { id: no, label: kein Schaltjahr }
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

![Der erweiterte Plan: Start, „Jahr teilbar durch 4?“ (nein: kein Schaltjahr), ja: „Jahr teilbar durch 100?“ (nein: ?), ja: „Jahr teilbar durch 400?“ (nein: ?, ja: ?)](./img/plan-2.png)

**Hilf Johanna und wähle für jedes Fragezeichen die richtige Entscheidung aus.**
