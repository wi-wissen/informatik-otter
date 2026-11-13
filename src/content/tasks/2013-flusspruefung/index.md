---
short: Vz5H
title: Flussprüfung
summary: Biber schwimmen jeweils einmal von A nach B und müssen dabei jeden Flussarm abdecken. Wie viele braucht man mindestens?
grades:
  "9-10": hard
  "11-13": medium
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [graphs, optimization]
methods: [max-flow]
mascot: beaver
interaction:
  format: choice
  props:
    options:
      - { id: a, label: 3 Biber }
      - { id: b, label: 4 Biber }
      - { id: c, label: 5 Biber }
      - { id: d, label: 6 Biber }
source:
  type: original
  work: Informatik-Biber 2013
  year: 2013
  page: 17
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2013/Biberheft2013-mit-Loesungen.pdf
  license: CC BY-NC-SA 3.0
---
Die Biber veranstalten regelmäßig eine gemeinsame Fluss-Prüfung. Dafür muss durch jeden Flussarm mindestens ein Biber schwimmen. Die Biber starten gemeinsam in A und treffen sich wieder in B. Jeder Biber schwimmt nur einmal mit der Strömung von A nach B.

![Flussplan mit Start A links und Ziel B rechts. Die Flussarme verzweigen und vereinigen sich mehrfach; Pfeile zeigen die Strömungsrichtung von links nach rechts.](./img/river.png)

**Wie viele Biber braucht es dann mindestens für eine gemeinsame Fluss-Prüfung?**
