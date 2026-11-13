---
short: uYu7
title: Formenspiel
summary: Fünf Knöpfe ersetzen Formen durch andere Formen. Kannst du aus zwei Quadraten genau drei Kreise machen?
grades:
  "11-13": medium
gi:
  content: [languages-automata]
  process: [modelling, reasoning]
topics: [formal-languages]
methods: [rewriting-system]
mascot: beaver
interaction:
  format: custom
  props:
    start: qq
    goal: ccc
    rules:
      - { from: t, to: cc }
      - { from: q, to: tt }
      - { from: tc, to: q }
      - { from: qq, to: tcc }
      - { from: ccc, to: "" }
source:
  type: original
  work: Informatik-Biber 2019
  year: 2019
  page: 13
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2019/Biberheft2019-mit-Loesungen.pdf
  country: UA
  license: CC BY-SA 4.0
---
Unten findest du ein Spiel. Auf dem Spielfeld liegt immer eine Reihe von Formen.

Wenn du einen der Knöpfe über dem Spielfeld drückst, wird auf dem Spielfeld das erste Auftreten (von links) einer oder mehrerer Formen durch eine oder mehrere andere Formen ersetzt.

Ein Beispiel: Wenn du Knopf 1 drückst, wird das erste Dreieck durch zwei Kreise ersetzt. Die anderen Knöpfe funktionieren analog. Aber: Wenn du Knopf 5 drückst, werden die ersten drei Kreise durch nichts ersetzt; sie werden also entfernt.

Die Knöpfe ersetzen: 1: Dreieck → zwei Kreise; 2: Quadrat → zwei Dreiecke; 3: Dreieck und Kreis (nebeneinander) → Quadrat; 4: zwei Quadrate → Dreieck und zwei Kreise; 5: drei Kreise → nichts.

**Drücke die Knöpfe so, dass zum Schluss genau drei Kreise auf dem Spielfeld liegen.** Am Anfang liegen zwei Quadrate auf dem Spielfeld.
