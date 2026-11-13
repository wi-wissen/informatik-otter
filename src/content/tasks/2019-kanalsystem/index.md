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
  format: custom
  props:
    background: ./img/canal.png
    width: 1052
    height: 608
    spots:
      - { id: e1, x: 240, y: 518, w: 120, h: 150, label: "Eingang 1" }
      - { id: e2, x: 360, y: 518, w: 120, h: 150, label: "Eingang 2" }
      - { id: e3, x: 480, y: 518, w: 120, h: 150, label: "Eingang 3" }
      - { id: e4, x: 600, y: 518, w: 120, h: 150, label: "Eingang 4" }
      - { id: e5, x: 720, y: 518, w: 120, h: 150, label: "Eingang 5" }
      - { id: e6, x: 840, y: 518, w: 120, h: 150, label: "Eingang 6" }
    states:
      - { id: none, label: "" }
      - { id: B, image: ./img/beaver-b.png, label: Blau }
      - { id: G, image: ./img/beaver-g.png, label: Grün }
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

**Wie müssen sie an den Eingängen los schwimmen?** Klicke auf die Biber an den Eingängen (unten), bis sie die richtige Farbe haben: erst blau, dann grün.
