---
short: 8pY2
title: Theklas Netze
summary: Spinne Thekla notiert die Struktur ihrer Netze in einem Raster mit Kreuzen. Wie sieht das Raster für ihr neues Netz aus?
grades:
  "9-10": hard
  "11-13": medium
gi:
  content: [information-data, algorithms]
  process: [modelling, representing]
topics: [graphs, data-structures]
methods: []
mascot: beaver
interaction:
  format: choice
  props:
    columns: 2
    options:
      - { id: a, image: ./img/grid-a.png, alt: Raster A }
      - { id: b, image: ./img/grid-b.png, alt: Raster B }
      - { id: c, image: ./img/grid-c.png, alt: Raster C }
      - { id: d, image: ./img/grid-d.png, alt: Raster D }
source:
  type: original
  work: Informatik-Biber 2021
  year: 2021
  page: 53
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2021/Biberheft_2021_mit_Loesungen_web.pdf
  country: CA
  license: CC BY-SA 4.0
---
Spinne Thekla möchte möglichst viele verschiedene Netze bbauen. Deshalb notiert sie sich die Struktur jedes ihrer Netze, und zwar so:

Sie nummeriert die Endpunkte des Netzes mit 1, 2, usw. Die Struktur notiert sie dann in einem Raster, das so viele Zeilen und Spalten hat wie das Netz Endpunkte hat. Dann kreuzt sie die Felder im Raster nach dieser Regel an:

Wenn es einen Faden gibt, der von Endpunkt A zu Endpunkt B führt, kreuzt sie das Feld in Spalte A und Zeile B an.

Beachte, dass Thekla für jeden Faden zwei Kreuze macht: Ein Faden von Endpunkt A zu Endpunkt B führt auch von Endpunkt B zu Endpunkt A.

Hier siehst du ein Netz und wie Thekla seine Struktur notiert hat.

![Ein Netz mit vier Endpunkten und daneben ein 4×4-Raster mit Kreuzen](./img/example.png)

Thekla baut nun dieses Netz:

![Ein Netz mit den Endpunkten 1 bis 5. Von 1 führt ein Faden zu 4. Von 2 führen Fäden zu 3 und 5, von 3 zusätzlich zu 4 und 5.](./img/net.png)

**Wie notiert Thekla seine Struktur?**
