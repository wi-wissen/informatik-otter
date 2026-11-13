---
short: uk7t
title: Punkte sammeln
summary: Auf dem Weg durch eine Zahlentabelle nur nach rechts oder oben gehen und möglichst viele Punkte sammeln.
grades:
  "11-13": hard
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [optimization, algorithm-analysis]
methods: [dynamic-programming]
mascot: beaver
interaction:
  format: input
  props:
    kind: number
    suffix: Punkte
source:
  type: original
  work: Informatik-Biber 2017
  year: 2017
  page: 51
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2017/Biberheft2017-mit-Loesungen.pdf
  country: CA
  license: CC BY-SA 4.0
---
In die Felder einer Tabelle sind Zahlen eingetragen. Außerdem gibt es ein Startfeld S (unten links) und ein Zielfeld Z (oben rechts).

| 2 | 0 | 1 | 1 | **Z** |
|---|---|---|---|---|
| 1 | 2 | 0 | 2 | 3 |
| 2 | 2 | 0 | 2 | 1 |
| 3 | 1 | 0 | 2 | 0 |
| **S** | 0 | 1 | 3 | 0 |

Die Aufgabe lautet: Finde einen Weg vom Start zum Ziel, auf dem insgesamt maximal viele Punkte gesammelt werden. In jedem Schritt darfst du nur um ein Feld nach rechts oder nach oben gehen. Die Zahl in jedem Feld gibt an, wie viele Punkte du dort sammeln kannst. Die Punkte aller Felder eines Weges werden beim Sammeln addiert.

**Wie viele Punkte können in der Tabelle oben maximal gesammelt werden?**
