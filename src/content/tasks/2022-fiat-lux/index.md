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
  format: choice
  props:
    multiple: true
    columns: 4
    options:
      - { id: a, label: Schalter A }
      - { id: b, label: Schalter B }
      - { id: c, label: Schalter C }
      - { id: d, label: Schalter D }
      - { id: e, label: Schalter E }
      - { id: f, label: Schalter F }
      - { id: g, label: Schalter G }
      - { id: h, label: Schalter H }
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

![Schaltplan: Schalter A und B führen in ein gelbes Bauteil, C und D in ein blaues; deren Ausgänge führen in ein gelbes Bauteil. E und F führen in ein gelbes Bauteil, G und H in ein blaues; deren Ausgänge führen in ein blaues Bauteil. Die Ausgänge der beiden mittleren Bauteile führen in ein gelbes Bauteil und von dort zum Leuchtschild](./img/circuit.png)

**Stelle die Schalter so, dass das Leuchtschild leuchtet.** Wähle dazu alle Schalter aus, die an sein sollen.
