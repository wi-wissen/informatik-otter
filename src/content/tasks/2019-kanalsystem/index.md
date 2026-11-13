---
short: mqK4
title: Kanalsystem
summary: An jeder Kreuzung schwimmt der grüne Biber nach links und der blaue nach rechts. In welcher Reihenfolge müssen sie starten?
grades:
  "7-8": hard
  "9-10": medium
  "11-13": easy
gi:
  content: [algorithms]
  process: [reasoning, modelling]
topics: [sorting]
methods: [sorting-network]
mascot: beaver
interaction:
  format: command-sequence
  props:
    maxLength: 6
    commands:
      - { id: B, label: Blau }
      - { id: G, label: Grün }
source:
  type: original
  work: Informatik-Biber 2019
  year: 2019
  page: 20
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2019/Biberheft2019-mit-Loesungen.pdf
  country: TH
  license: CC BY-SA 4.0
---
Die blauen und die grünen Biber haben zusammen ein Kanalsystem gebaut. Es hat sechs Eingänge (unten) und sechs Ausgänge (oben), und es gibt Kreuzungen.

Für die Kreuzungen gibt es eine Regel: Wenn sich ein grüner und ein blauer Biber treffen, schwimmt der grüne nach links und der blaue nach rechts.

![Eine Kreuzung: Der grüne Biber schwimmt nach links oben, der blaue nach rechts oben.](./img/rule.png)

Drei blaue und drei grüne Biber schwimmen gleichzeitig an den Eingängen los.

An den Ausgängen sollen sie so ankommen (von links nach rechts, B = blau und G = grün): B G B G B G

![Das Kanalsystem mit sechs Eingängen unten und sechs Ausgängen oben, an denen abwechselnd ein blauer und ein grüner Biber stehen. Die Kanäle kreuzen sich in drei Reihen.](./img/canal.png)

**Wie müssen sie an den Eingängen los schwimmen?** Wähle die Farben der Biber von links nach rechts.
