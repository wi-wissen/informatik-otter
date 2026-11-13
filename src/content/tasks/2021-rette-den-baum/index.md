---
short: nYE8
title: Rette den Baum!
summary: Brunos kranker Baum muss alle Blätter verlieren. Welche Äste sägt er ab, um möglichst schnell fertig zu sein?
grades:
  "7-8": medium
  "9-10": easy
gi:
  content: [algorithms, information-data]
  process: [modelling, reasoning]
topics: [trees, optimization]
methods: [dynamic-programming]
mascot: beaver
interaction:
  format: graph-pick
  props:
    pick: edges
    width: 469
    height: 306
    background: ./img/tree.png
    hideNodes: true
    nodes:
      - { id: T, x: 196, y: 180 }
      - { id: TR, x: 232, y: 221 }
      - { id: J1, x: 109, y: 147 }
      - { id: J2, x: 97, y: 93 }
      - { id: J3, x: 247, y: 107 }
      - { id: J4, x: 216, y: 77 }
      - { id: J5, x: 315, y: 91 }
      - { id: J6, x: 370, y: 202 }
      - { id: La, x: 25, y: 128 }
      - { id: Lb, x: 57, y: 176 }
      - { id: Lc, x: 39, y: 73 }
      - { id: Ld, x: 89, y: 40 }
      - { id: Le, x: 166, y: 81 }
      - { id: Lf, x: 216, y: 29 }
      - { id: Lg, x: 297, y: 37 }
      - { id: Lh, x: 355, y: 85 }
      - { id: Li, x: 389, y: 142 }
      - { id: Lj, x: 446, y: 166 }
      - { id: Lk, x: 435, y: 235 }
    edges:
      - { id: e9, from: T, to: J1 }
      - { id: e8, from: T, to: J3 }
      - { id: e5r, from: TR, to: J6 }
      - { id: e5a, from: J1, to: J2 }
      - { id: e3a, from: J1, to: La }
      - { id: e1a, from: J1, to: Lb }
      - { id: e1b, from: J2, to: Lc }
      - { id: e3b, from: J2, to: Ld }
      - { id: e4, from: J3, to: J4 }
      - { id: e5b, from: J3, to: J5 }
      - { id: e3c, from: J4, to: Le }
      - { id: e5c, from: J4, to: Lf }
      - { id: e2a, from: J5, to: Lg }
      - { id: e1c, from: J5, to: Lh }
      - { id: e3d, from: J6, to: Li }
      - { id: e2b, from: J6, to: Lj }
      - { id: e1d, from: J6, to: Lk, label: "1" }
source:
  type: original
  work: Informatik-Biber 2021
  year: 2021
  page: 44
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2021/Biberheft_2021_mit_Loesungen_web.pdf
  country: UZ
  license: CC BY-SA 4.0
---
Ein Baum in Brunos Garten ist krank, alle Blätter sind vertrocknet. Bruno will den Baum retten. Dazu muss er einige Äste absägen, so dass am Ende alle Blätter entfernt sind. Dann können neue Äste mit neuen Blättern wachsen.

Bruno möchte so schnell wie möglich fertig sein.

Das Bild zeigt ein Beispiel: Um die beiden Blätter zu entfernen, kann Bruno entweder die beiden Äste mit den Blättern absägen oder nur den einen Ast, von dem die beiden anderen abzweigen. Die Zahlen geben für jeden Ast an, wie lange das Absägen dauert. Bruno wird also die beiden Äste mit den Blättern absägen, da 3 + 1 < 5.

![Ein Ast mit der Zahl 5, von dem zwei Äste mit Blättern abzweigen; sie haben die Zahlen 3 und 1](./img/example.png)

Unten siehst du den gesamten Baum. (Der Ast zum untersten Blatt rechts hat die Zahl 1; sie ist im Bild nicht eingetragen.)

![Der ganze Baum. Links am Stamm der Ast 9: Von ihm gehen zwei Blattäste mit 3 und 1 sowie ein Ast 5 ab, an dem zwei Blattäste mit 1 und 3 hängen. In der Mitte der Ast 8: Von ihm gehen ein Ast 4 mit zwei Blattästen 3 und 5 sowie ein Ast 5 mit zwei Blattästen 2 und 1 ab. Rechts unten der Ast 5: Von ihm gehen drei Blattäste mit 3, 2 und 1 ab.](./img/tree.png)

**Welche Äste wird Bruno absägen, um so schnell wie möglich fertig zu sein? Tippe die Äste im Bild an.**
