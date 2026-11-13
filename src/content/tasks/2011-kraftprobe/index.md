---
short: 2eFc
title: Kraftprobe
summary: Schülerpasswörter müssen eine bestimmte Struktur haben, die ein Pfeil-Diagramm beschreibt. Welches Passwort passt nicht?
grades:
  "9-10": medium
  "11-13": easy
gi:
  content: [languages-automata]
  process: [modelling, reasoning]
topics: [automata, formal-languages, security]
methods: [finite-automaton]
mascot: beaver
interaction:
  format: choice
  props:
    options:
      - { id: a, label: 842aNNNa }
      - { id: b, label: Peter3PANt }
      - { id: c, label: 6579Beaver4EVEr }
      - { id: d, label: bENNYZzz }
source:
  type: original
  work: Informatik-Biber 2011
  year: 2011
  page: 18
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2011/Biberheft2011-mit-Loesungen.pdf
  license: CC BY-NC-SA 3.0 DE
---
Für ihre Zugänge zu den Schulcomputern sollen die Schüler stärkere Passwörter wählen. Um allzu schwache Passwörter auszuschließen, sollen die neuen Passwörter mindestens 8 Zeichen lang sein und eine vorgeschriebene Struktur haben.

Diese Struktur ist durch ein Diagramm aus Pfeilen und Knotenpunkten beschrieben. Kann man das Diagramm von „START“ bis „OK“ durchlaufen und dabei das neue Passwort vollständig schreiben, dann hat das Passwort die vorgeschriebene Struktur.

![Diagramm mit START, zwei mittleren Knoten (oben und unten) und OK. START hat eine Schleife 0-9, einen Pfeil A-Z zum oberen Knoten und einen Pfeil a-z zum unteren Knoten. Der obere Knoten hat eine Schleife a-z, einen Pfeil 0-9 nach unten zum unteren Knoten und einen Pfeil 0-9 zu OK. Der untere Knoten hat eine Schleife A-Z und einen Pfeil a-z zu OK.](./img/diagramm.png)

- „A-Z“ bedeutet „schreibe irgendeinen Großbuchstaben“.
- „0-9“ bedeutet „schreibe irgendeine Ziffer“.
- „a-z“ bedeutet „schreibe irgendeinen Kleinbuchstaben“.
- Ein „Pfeil mit Beschriftung“ bedeutet „führe die Beschriftung aus und mache an dem Knotenpunkt weiter, zu dem der Pfeil hinzeigt“.

**Welches Passwort hat NICHT die vorgeschriebene Struktur?**
