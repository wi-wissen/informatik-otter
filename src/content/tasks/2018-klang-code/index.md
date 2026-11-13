---
short: Vj4f
title: Klang-Code
summary: Margaret verwandelt Namen in kurze Codes, damit ähnlich klingende Namen gleich kodiert werden. Wie lautet der Code von HILBERT?
grades:
  "9-10": hard
gi:
  content: [information-data]
  process: [modelling, reasoning]
topics: [searching, encoding]
methods: [soundex]
mascot: beaver
interaction:
  format: choice
  props:
    columns: 4
    options:
      - { id: a, label: I416 }
      - { id: b, label: B540 }
      - { id: c, label: H041 }
      - { id: d, label: H416 }
source:
  type: original
  work: Informatik-Biber 2018
  year: 2018
  page: 42
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2018/Biberheft2018-mit-Loesungen.pdf
  country: PK
  license: CC BY-SA 4.0
---
Margaret möchte Namen so kodieren, dass ähnliche klingende Namen gleich kodiert werden. Sie hat dazu dieses Verfahren entwickelt:

1. Behalte den ersten Buchstaben, streiche aus den restlichen Buchstaben alle H und W.
2. Ersetze die verbleibenden Buchstaben (bis auf den ersten) so durch Ziffern:

   | Ersetze | durch |
   |---|---|
   | A, E, I, O, U oder Y | 0 |
   | B, F, P oder V | 1 |
   | C, G, J, K, Q, S, X oder Z | 2 |
   | D oder T | 3 |
   | L | 4 |
   | M oder N | 5 |
   | R | 6 |

3. Wenn nun mehrere gleiche Ziffern hintereinander stehen, behalte nur eine davon.
4. Entferne alle Nullen (0).
5. Hat das bisherige Ergebnis noch nicht die Form Buchstabe, Ziffer, Ziffer, Ziffer, streiche überschüssige Ziffern oder füge so viele Nullen (0) an wie nötig.

Hier sind einige Beispiele dafür, wie das Verfahren Namen kodiert: ROBERT → R163, RUPERTUS → R163, KNUTH → K530, GAUSS → G200

**Wie kodiert das Verfahren den Namen HILBERT?**
