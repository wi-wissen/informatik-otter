---
short: 9mmx
title: Raumfahrt
summary: Mit Rakete und Raumschiff von Planet zu Planet. Welcher Reiseplan führt Tine nicht zur Erde?
grades:
  "5-6": medium
  "7-8": easy
gi:
  content: [languages-automata]
  process: [modelling, reasoning]
topics: [automata]
methods: [finite-automaton]
mascot: beaver
interaction:
  format: choice
  props:
    columns: 2
    options:
      - { id: a, label: A, image: ./img/a.png, alt: "Reiseplan A: Raumschiff, Raumschiff, Rakete" }
      - { id: b, label: B, image: ./img/b.png, alt: "Reiseplan B: Rakete, Raumschiff, Rakete, Raumschiff" }
      - { id: c, label: C, image: ./img/c.png, alt: "Reiseplan C: Rakete, Raumschiff, Raumschiff, Raumschiff, Rakete" }
      - { id: d, label: D, image: ./img/d.png, alt: "Reiseplan D: Rakete, Rakete, Raumschiff" }
source:
  type: original
  work: Informatik-Biber 2019
  year: 2019
  page: 37
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2019/Biberheft2019-mit-Loesungen.pdf
  country: SI
  license: CC BY-SA 4.0
---
Im All fliegen Astronauten mit Rakete oder Raumschiff von Planet zu Planet. Das große Bild unten zeigt die Flugmöglichkeiten. Für eine längere Reise benötigt man einen Reiseplan.

Ein Beispiel: Ein Astronaut möchte von der Venus zum Saturn reisen. Er erhält diesen Reiseplan: Rakete, Raumschiff, Raumschiff.

Das bedeutet: Zunächst fliegt der Astronaut mit der Rakete zum Jupiter. Weiter geht es mit dem Raumschiff zum Neptun und von dort mit dem Raumschiff zum Saturn. Angekommen!

![Das Planetensystem mit Sonne in der Mitte und den Planeten Neptun, Saturn, Mars, Erde, Merkur, Venus, Jupiter und Uranus. Pfeile mit einem Raketen- oder Raumschiff-Symbol zeigen, wohin man von einem Planeten aus mit der Rakete oder dem Raumschiff fliegen kann.](./img/map.png)

Astronautin Tine ist auf dem Neptun und möchte zurück zur Erde reisen.

**Mit welchem Reiseplan kommt Tine NICHT auf der Erde an?**
