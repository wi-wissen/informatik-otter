---
short: aZt9
title: Die Fabrik
summary: Eine Anleitung beschreibt Teile in einer Fabrik nur über ihre Lage und Verbindungen. Welches Teil soll der Biber ersetzen?
grades:
  "7-8": hard
  "9-10": medium
  "11-13": easy
gi:
  content: [information-data]
  process: [modelling, reasoning]
topics: [data-structures, modelling]
methods: [aggregate]
mascot: beaver
interaction:
  format: choice
  props:
    options:
      - { id: a, label: ein Zylinder }
      - { id: b, label: ein Würfel }
      - { id: c, label: eine Pyramide }
      - { id: d, label: eine Kugel }
source:
  type: original
  work: Informatik-Biber 2011
  year: 2011
  page: 10
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2011/Biberheft2011-mit-Loesungen.pdf
  license: CC BY-NC-SA 3.0 DE
---
Der Biber soll in einer automatischen Fabrik ein defektes Teil auswechseln und bekommt dazu folgende Anleitung:

- Ein WürKu ist ein Würfel, auf dessen Oberseite eine Kugel sitzt.
- Ein VierZyl besteht aus einem großen Würfel, der auf vier Zylindern steht.
- An der vorderen Kante der Plattform sitzt eine Pyramide.
- An derselben Kante der Plattform sitzt ein WürKu.
- Unmittelbar neben diesem WürKu sitzt ein weiterer WürKu.
- Dieser WürKu ist mit einem Ding des Typs X verbunden.
- Es gibt genau einen VierZyl, an dem sich unten ein Ding vom Typ X befindet. Dieser VierZyl heißt vz-1.
- Auf der Oberseite von vz-1 sitzen p-zahl Pyramiden.
- Es gibt noch einen anderen VierZyl, auf dem ebenfalls p-zahl Pyramiden sitzen. Dieser VierZyl heißt vz-2.

Ersetze das Teil, das sich in der höchsten Position über vz-2 befindet.

![Eine Plattform von schräg oben mit grünen VierZyl-Würfeln auf weißen Zylindern, mehreren Pyramiden, Kugeln, einem roten und einem braunen Zylinder sowie kleinen Figuren](./img/fabrik.png)

**Was für ein Teil ist das?**
