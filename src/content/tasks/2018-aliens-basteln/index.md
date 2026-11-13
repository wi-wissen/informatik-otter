---
short: 97xr
title: Aliens basteln
summary: Welche Befehle zählen, wenn spätere Befehle frühere überschreiben? Finde das Alien, das am Ende entsteht.
grades:
  "7-8": medium
  "9-10": easy
gi:
  content: [algorithms]
  process: [reasoning, modelling]
topics: [programming]
methods: [sequence]
mascot: beaver
interaction:
  format: choice
  props:
    columns: 4
    options:
      - { id: a, image: ./img/alien-a.png, alt: Alien A }
      - { id: b, image: ./img/alien-b.png, alt: Alien B }
      - { id: c, image: ./img/alien-c.png, alt: Alien C }
      - { id: d, image: ./img/alien-d.png, alt: Alien D }
source:
  type: original
  work: Informatik-Biber 2018
  year: 2018
  page: 8
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2018/Biberheft2018-mit-Loesungen.pdf
  country: TR
  license: CC BY-SA 4.0
---
In einem Computerspiel kann man sich Aliens basteln. Mit diesen Befehlen erstellt man die einzelnen Körperteile:

![Tabelle der Befehle: K(r) runder Kopf, K(3) und K(4) eckige Köpfe, R(r) runder Rumpf, R(3) und R(4) eckige Rümpfe, A(+) lange und A(–) kurze Arme, B(+) lange und B(–) kurze Beine](./img/table.png)

Werden mehrere Befehle für einen Körperteil verwendet, gilt der letzte.

Ein Beispiel: Mit den Befehlen K(r), R(4), K(4), A(–), B(–) bastelt man sich dieses Alien:

![Alien mit eckigem Kopf, eckigem Rumpf, kurzen Armen und kurzen Beinen](./img/example.png)

**Welches Alien bastelt man sich mit diesen Befehlen: K(3), B(+), R(3), A(+), K(r), A(–), R(r)?**
