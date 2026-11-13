---
short: Y7Cw
title: Stern-Mobiles
summary: Eine Klammerschreibweise beschreibt ein Mobile aus Fäden, Stäben und Sternen. Welches Mobile ist gemeint?
grades:
  "11-13": hard
gi:
  content: [algorithms]
  process: [representing, modelling]
topics: [recursion, trees]
methods: [recursion]
mascot: beaver
interaction:
  format: choice
  props:
    columns: 2
    options:
      - { id: a, label: A, image: ./img/a.png, alt: Stern-Mobile A }
      - { id: b, label: B, image: ./img/b.png, alt: Stern-Mobile B }
      - { id: c, label: C, image: ./img/c.png, alt: Stern-Mobile C }
      - { id: d, label: D, image: ./img/d.png, alt: Stern-Mobile D }
source:
  type: original
  work: Informatik-Biber 2019
  year: 2019
  page: 49
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2019/Biberheft2019-mit-Loesungen.pdf
  country: DE
  license: CC BY-SA 4.0
---
Stern-Mobiles sind kunstvolle Gebilde aus Fäden, Stäben und Sternen. An einem Faden kann eine Anzahl von Sternen hängen; oder ein Stab, an dessen beiden Enden jeweils wieder ein Stern-Mobile hängt.

Das Bild zeigt ein einfaches Stern-Mobile. Mit Zahlen und Klammern kann man es so beschreiben: `(-3 (-1 1) (1 1)) (2 3)`

![Ein einfaches Stern-Mobile: An einem Stab hängt links ein kleineres Mobile mit einem Stab, an dem zwei einzelne Sterne hängen, und rechts ein Faden mit drei Sternen.](./img/example.png)

Die Zahlen geben jeweils an: entweder den Abstand eines Stab-Endes zum Faden, an dem der Stab hängt, oder eine Anzahl an Sternen.

Die Klammern geben die Struktur des Stern-Mobiles an.

**Welches der folgenden Stern-Mobiles kann man so beschreiben:** `(-3 (-1 4) (2 (-1 1) (1 1))) (2 (-1 6) (2 3))`
