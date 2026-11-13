---
short: CP4C
title: Schildkröten
summary: Ein Schildkrötenroboter wiederholt eine Folge von Anweisungen. Welche Folge lässt ihn ein Quadrat fahren?
grades:
  "5-6": medium
  "7-8": easy
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [programming]
methods: [loop]
mascot: beaver
interaction:
  format: choice
  props:
    columns: 1
    options:
      - { id: a, image: ./img/folge-a.png, alt: "vorwärts, rechts drehen, vorwärts, rechts drehen" }
      - { id: b, image: ./img/folge-b.png, alt: "vorwärts, rechts drehen, vorwärts, links drehen" }
      - { id: c, image: ./img/folge-c.png, alt: "rechts drehen, vorwärts, rechts drehen, vorwärts, vorwärts" }
      - { id: d, image: ./img/folge-d.png, alt: "rechts drehen, vorwärts, vorwärts, rechts drehen" }
source:
  type: original
  work: Informatik-Biber 2011
  year: 2011
  page: 26
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2011/Biberheft2011-mit-Loesungen.pdf
  license: CC BY-NC-SA 3.0 DE
---
Du hast einen Schildkrötenroboter zum Geburtstag bekommen, der folgende einfache Anweisungen ausführen kann:

![Symbol: Schildkröte mit rotem Pfeil nach rechts](./img/rechts.png) Drehe dich um 90 Grad nach rechts

![Symbol: Schildkröte mit rotem Pfeil nach links](./img/links.png) Drehe dich um 90 Grad nach links

![Symbol: Schildkröte mit Geschwindigkeitsstrichen](./img/vor.png) Fahre 30 Zentimeter vorwärts

Der Schildkrötenroboter ist so gemacht, dass er eine ihm gegebene Folge von Anweisungen solange wiederholt, bis man ihn ausschaltet.

**Welche Folge von Anweisungen lässt den Schildkrötenroboter ein Quadrat fahren?**
