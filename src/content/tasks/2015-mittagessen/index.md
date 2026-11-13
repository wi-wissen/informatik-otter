---
short: Wgz4
title: Mittagessen
summary: Ein Poster zeigt in einem Baumdiagramm, wie man sein Tablett belädt. Welche Mahlzeit passt nicht dazu?
grades:
  "7-8": medium
  "9-10": medium
gi:
  content: [information-data, algorithms]
  process: [modelling, representing]
topics: [trees, modelling]
methods: [decision-tree]
mascot: beaver
interaction:
  format: choice
  props:
    columns: 2
    options:
      - { id: a, image: ./img/a.png, alt: "Tablett mit einer weißen Schüssel mit Fisch und einer Unterlage mit einer Birne" }
      - { id: b, image: ./img/b.png, alt: "Tablett mit einer leeren braunen Schüssel und einer Unterlage mit einer Birne und einem Apfel" }
      - { id: c, image: ./img/c.png, alt: "Tablett mit einer Unterlage mit einer Birne und einem Apfel" }
      - { id: d, image: ./img/d.png, alt: "Tablett mit einer braunen Schüssel mit Karotten und einer weißen Schüssel mit einem Ei" }
source:
  type: original
  work: Informatik-Biber 2015
  year: 2015
  page: 38
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2015/Biberheft2015-mit-Loesungen.pdf
  country: DE
  license: CC BY-SA 3.0
---
Hm, was soll es zum Mittagessen geben? In der Cafeteria hängt ein Poster über ausgewogene Biber-Ernährung. Das Diagramm darauf zeigt, wie man sein Tablett belädt.

Es gibt drei Arten von Schüsseln. Die Zahlen zeigen an, wie viele Schüsseln einer Art man auf das Tablett stellen soll. Für jede Schüssel gibt es zwei Arten von Lebensmitteln. Die Zahlen zeigen an, wie viele davon man in die Schüssel legen soll.

![Baumdiagramm: Vom Tablett gehen drei Schüsseln ab. Braune Schüssel (0, 1, 2 Stück) mit Pflaume (0, 1, 2) und Karotte (0, 1, 2). Weiße Schüssel (0, 1 Stück) mit Fisch (0, 1) und Ei (0, 1). Unterlage (1, 2 Stück) mit Birne (0, 1) und Apfel (0, 1).](./img/diagram.png)

**Welche der folgenden Mahlzeiten passt NICHT zu dem Diagramm?**
