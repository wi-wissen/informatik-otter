---
short: fmt4
title: Bühnenlicht
summary: Drei Scheinwerfer blinken im eigenen Rhythmus. Welche Farbe hat das Bühnenlicht in den ersten vier Minuten?
grades:
  "7-8": hard
  "9-10": medium
gi:
  content: [information-data]
  process: [modelling, representing]
topics: [encoding, images]
methods: [binary-numbers]
mascot: beaver
interaction:
  format: match
  props:
    left:
      - { id: m1, label: Minute 1 }
      - { id: m2, label: Minute 2 }
      - { id: m3, label: Minute 3 }
      - { id: m4, label: Minute 4 }
    right:
      - { id: schwarz, label: Schwarz }
      - { id: blau, label: Blau }
      - { id: gruen, label: Grün }
      - { id: cyan, label: Cyan }
      - { id: rot, label: Rot }
      - { id: magenta, label: Magenta }
      - { id: gelb, label: Gelb }
      - { id: weiss, label: Weiß }
source:
  type: original
  work: Informatik-Biber 2015
  year: 2015
  page: 16
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2015/Biberheft2015-mit-Loesungen.pdf
  country: SK
  license: CC BY-SA 3.0
---
Drei Scheinwerfer beleuchten die Bühne. Einer strahlt rot, einer grün und einer blau. Die Farbe des Bühnenlichts mischt sich aus den Farben der Scheinwerfer, die gerade eingeschaltet sind. Die Tabelle zeigt alle möglichen Farbmischungen:

| Bühnenlicht | Schwarz | Blau | Grün | Cyan | Rot | Magenta | Gelb | Weiß |
|---|---|---|---|---|---|---|---|---|
| rotes Licht | aus | aus | aus | aus | an | an | an | an |
| grünes Licht | aus | aus | an | an | aus | aus | an | an |
| blaues Licht | aus | an | aus | an | aus | an | aus | an |

Sobald die Vorstellung beginnt, wird jeder Scheinwerfer in einem eigenen Rhythmus ein- und ausgeschaltet:

- Der rote Scheinwerfer strahlt im Rhythmus „zwei Minuten aus, zwei Minuten an“.
- Der grüne Scheinwerfer strahlt im Rhythmus „eine Minute aus, eine Minute an“.
- Der blaue Scheinwerfer strahlt im Rhythmus „vier Minuten an, vier Minuten aus“.

**Welche Farben hat das Bühnenlicht in den ersten vier Minuten der Vorstellung?** Ordne jeder Minute die richtige Farbe zu.
