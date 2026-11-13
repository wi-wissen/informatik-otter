---
short: 41sU
title: Zahlenmaschine
summary: Eine Maschine reicht Zahlen von Einheit zu Einheit weiter und rechnet dabei. Was gibt sie für die Eingabe 4 aus?
grades:
  "9-10": hard
  "11-13": medium
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [recursion, programming]
methods: [recursion]
mascot: beaver
interaction:
  format: input
  props:
    kind: number
source:
  type: original
  work: Informatik-Biber 2020
  year: 2020
  page: 63
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2020/Biberheft_2020_final_mit_Loesungen.pdf
  country: DE
  license: CC BY-SA 4.0
---
Die mysteriöse Zahlenmaschine erhält eine Zahl als Eingabe und gibt eine andere Zahl aus.

Im Inneren der Maschine arbeiten Einheiten. Jede Einheit erhält drei Zahlen a, b, c als Eingabe und arbeitet nach diesen Anweisungen:

- Wenn a eine 1 ist, gib c an die Zahlenmaschine als Ausgabe weiter.
- Sonst mache Folgendes:
  - Gib a−1 als Eingabe a an die nächste Einheit weiter.
  - Gib B = b+2 als Eingabe b an die nächste Einheit weiter.
  - Gib B+c als Eingabe c an die nächste Einheit weiter.

![Eine Einheit mit den Eingängen a, b und c. Ist a gleich 1 („ja“), geht c als Ausgabe nach unten. Sonst („nein“) werden an die nächste Einheit a−1, b+2 und b+2+c weitergegeben](./img/unit.png)

Die Zahlenmaschine gibt ihre Eingabezahl als Eingabe a an die erste Einheit weiter. Die Eingaben b und c der ersten Einheit sind jeweils 1.

Sobald die Zahlenmaschine von einer Einheit eine Ausgabe erhält, gibt sie diese Zahl als Ergebnis aus.

Das Bild zeigt, wie die Zahlenmaschine die Eingabezahl 2 verarbeitet. In diesem Fall verwendet sie zwei Einheiten. Als Ergebnis gibt sie die Zahl 4 aus.

![Die Eingabe 2 geht als a in die erste Einheit, b und c sind 1. Die erste Einheit gibt 1, 3 und 4 weiter, die zweite Einheit gibt 4 aus](./img/example.png)

**Die Zahlenmaschine verarbeitet die Eingabezahl 4. Welche Zahl gibt sie als Ergebnis aus?**
