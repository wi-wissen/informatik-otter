---
short: 27eu
title: Fiat Lux
summary: Acht Schalter, Drähte und Bauteile – wie musst du die Schalter stellen, damit das Leuchtschild leuchtet?
grades:
  "5-6": hard
  "7-8": medium
  "9-10": easy
gi:
  content: [systems]
  process: [modelling, reasoning]
topics: [logic, computer-architecture]
methods: [boolean-logic, xor]
mascot: beaver
interaction:
  format: hotspots
  props:
    background: ./img/circuit.png
    width: 885
    height: 501
    spots:
      - { id: a, x: 45, y: 30, w: 78, h: 40, label: "Schalter A" }
      - { id: b, x: 45, y: 92, w: 78, h: 40, label: "Schalter B" }
      - { id: c, x: 45, y: 155, w: 78, h: 40, label: "Schalter C" }
      - { id: d, x: 45, y: 217, w: 78, h: 40, label: "Schalter D" }
      - { id: e, x: 45, y: 282, w: 78, h: 40, label: "Schalter E" }
      - { id: f, x: 45, y: 344, w: 78, h: 40, label: "Schalter F" }
      - { id: g, x: 45, y: 407, w: 78, h: 40, label: "Schalter G" }
      - { id: h, x: 45, y: 470, w: 78, h: 40, label: "Schalter H" }
    states:
      - { id: off, label: aus }
      - { id: on, label: an }
source:
  type: original
  work: Informatik-Biber 2022
  year: 2022
  page: 25
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2022/Biberheft_2022_mit_Loesungen_web.pdf
  country: AU
  license: CC BY-SA 4.0
---
Das Spiel „Fiat Lux“ hat 8 Schalter, die an oder aus sein können. Im Bild heißen sie von oben nach unten A, B, C, D, E, F, G und H.

Von den Schaltern aus gehen Drähte zu Bauteilen, von diesen wieder zu anderen Bauteilen und schließlich zu einem Leuchtschild.

- Der Ausgangsdraht eines Schalters hat Strom, wenn der Schalter an ist.
- Der Ausgangsdraht eines **gelben Bauteils** (flache Rückseite) hat Strom, wenn beide Eingangsdrähte Strom haben.
- Der Ausgangsdraht eines **blauen Bauteils** (geschwungene Rückseite) hat Strom, wenn genau ein Eingangsdraht Strom hat.

Das Leuchtschild leuchtet, wenn sein Eingangsdraht Strom hat.

**Stelle die Schalter so, dass das Leuchtschild leuchtet.**
