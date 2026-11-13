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
  format: place
  props:
    reusable: true
    trayLabel: Farben
    zones:
      - { id: m1, label: Minute 1 }
      - { id: m2, label: Minute 2 }
      - { id: m3, label: Minute 3 }
      - { id: m4, label: Minute 4 }
    items:
      - { id: schwarz, label: Schwarz, image: ./img/c-schwarz.png, alt: Schwarz }
      - { id: blau, label: Blau, image: ./img/c-blau.png, alt: Blau }
      - { id: gruen, label: Grün, image: ./img/c-gruen.png, alt: Grün }
      - { id: cyan, label: Cyan, image: ./img/c-cyan.png, alt: Cyan }
      - { id: rot, label: Rot, image: ./img/c-rot.png, alt: Rot }
      - { id: magenta, label: Magenta, image: ./img/c-magenta.png, alt: Magenta }
      - { id: gelb, label: Gelb, image: ./img/c-gelb.png, alt: Gelb }
      - { id: weiss, label: Weiß, image: ./img/c-weiss.png, alt: Weiß }
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

**Welche Farben hat das Bühnenlicht in den ersten vier Minuten der Vorstellung?** Schiebe die richtigen Farben über die Minuten (ziehe sie auf die Felder oder tippe erst die Farbe und dann die Minute an). Eine Farbe kann mehrfach vorkommen.
