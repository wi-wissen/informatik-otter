---
short: 9KDC
title: Biber-Ausweis
summary: "Eine Prüfziffern-Regel für Ausweisnummern: Welcher Prüfbuchstabe gehört zu 4517?"
grades:
  "5-6": medium
gi:
  content: [information-data]
  process: [modelling, reasoning]
topics: [error-detection]
methods: [checksum]
mascot: beaver
interaction:
  format: input
  props:
    kind: text
    placeholder: Prüfbuchstabe
source:
  type: original
  work: Informatik-Biber 2014
  year: 2014
  page: 11
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2014/Biberheft2014-mit-Loesungen.pdf
  license: CC BY-NC-SA 3.0
---
Jeder Biber hat einen Ausweis mit einer Ausweisnummer. Um Lesefehlern vorzubeugen, trägt jeder Ausweis noch einen Prüfbuchstaben.

Der Prüfbuchstabe wird so ermittelt:

1. Zähle die Ziffern der Ausweisnummer zusammen.
2. Suche das Ergebnis in der Tabelle.
3. In der gleichen Zeile steht rechts der passende Prüfbuchstabe.

| Ergebnis | Prüfbuchstabe |
|---|:-:|
| 0, 7, 14, 21, 28 | T |
| 1, 8, 15, 22, 29 | R |
| 2, 9, 16, 23, 30 | W |
| 3, 10, 17, 24, 31 | A |
| 4, 11, 18, 25, 32 | G |
| 5, 12, 19, 26, 33 | M |
| 6, 13, 20, 27, 34 | Y |

Der Biber-Ausweis von Erik Musterbiber aus Wasserburg am See trägt die Ausweisnummer 4517.

**Schreibe den passenden Prüfbuchstaben in den Biber-Ausweis!**
