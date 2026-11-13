---
short: z6SA
title: Bücherei
summary: Aus dem Titel eines Buches lässt sich mit einer Rechnung sein Platz im Regal bestimmen. Eine Rechnung ist falsch.
grades:
  "7-8": hard
  "9-10": medium
  "11-13": easy
gi:
  content: [information-data]
  process: [modelling, reasoning]
topics: [data-structures]
methods: [hashing]
mascot: beaver
interaction:
  format: choice
  props:
    columns: 2
    options:
      - { id: a, label: "Gutes gegen Biber-Fieber: ((7 · 3 + 7) · 3 + 2) · 3 + 6" }
      - { id: b, label: "Bäume fällen für Dummies: ((2 · 3 + 6) + 6) · 3 + 4" }
      - { id: c, label: "Der Herr der Dämme: ((4 · 3 + 8) · 3 + 4) · 3 + 4" }
      - { id: d, label: "Bebretti: Der erste Fall: ((2 · 3 + 4) · 3 + 5) · 3 + 6" }
source:
  type: original
  work: Informatik-Biber 2021
  year: 2021
  page: 13
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2021/Biberheft_2021_mit_Loesungen_web.pdf
  country: AT
  license: CC BY-SA 4.0
---
Susi ist mit Tim in der Biber-Bücherei. Sie wollen ein Buch ausleihen: „Dämme bauen, aber gern!“

Tim geht zu Regal 1, greift in Reihe 3, Fach 6 und holt das Buch heraus. Susi ist beeindruckt. Tim erklärt Susi, wie man den Ort eines Buches mit einem Rechenausdruck bestimmt:

Man nimmt von jedem Wort im Titel die Anfangsbuchstaben und bestimmt dessen Position im Alphabet. Nach und nach werden die Positionen addiert; aber vor jedem Addieren wird der bisher erreichte Wert mit 3 multipliziert.

![Tafel mit dem Alphabet, durchnummeriert von a = 1 bis z = 26. Darunter der Titel „Dämme bauen, aber gern!“: Die Anfangsbuchstaben D, b, a und g haben die Positionen 4, 2, 1 und 7. Der Ausdruck lautet ((4 · 3 + 2) · 3 + 1) · 3 + 7.](./img/board.png)

Für das gewünschte Buch ergibt der Ausdruck 136. Schon ist klar, wo das Buch steht.

Nun stellt Susi für ihre vier Lieblingsbücher die Orts-Bestimmungs-Ausdrücke auf. In genau einem Fall hat sie aber einen Fehler gemacht.

**In welchem?**
