---
short: YY6F
title: Stern-Mobiles
summary: Stern-Mobiles werden mit Zahlen und Klammern beschrieben. Welches Mobile gehört zur gegebenen Beschreibung?
grades:
  "11-13": hard
gi:
  content: [algorithms]
  process: [representing, modelling]
topics: [recursion, trees]
methods: []
mascot: beaver
interaction:
  format: choice
  props:
    columns: 2
    options:
      - { id: a, image: ./img/a.png, alt: "Mobile A" }
      - { id: b, image: ./img/b.png, alt: "Mobile B" }
      - { id: c, image: ./img/c.png, alt: "Mobile C" }
      - { id: d, image: ./img/d.png, alt: "Mobile D" }
source:
  type: original
  work: Informatik-Biber 2015
  year: 2015
  page: 57
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2015/Biberheft2015-mit-Loesungen.pdf
  country: DE
  license: CC BY-SA 3.0
---
Stern-Mobiles sind kunstvolle Gebilde aus Fäden, Stäben und Sternen. An einem Faden kann eine Anzahl von Sternen hängen; oder ein Stab, an dessen beiden Enden jeweils wieder ein Stern-Mobile hängt.

Das Bild zeigt ein einfaches Stern-Mobile. Mit Zahlen und Klammern kann man es so beschreiben:

**(-3 (-1 1) (1 1)) (2 3)**

![Ein einfaches Stern-Mobile: Am Stab hängt links ein weiterer Stab mit zwei einzelnen Sternen, rechts ein Faden mit drei Sternen](./img/example.png)

Die Zahlen geben an: entweder die Abstände der Stab-Enden zum Faden, an dem der Stab hängt, oder eine Anzahl an Sternen. Die Klammern geben die Struktur des Stern-Mobiles an.

**Welches der folgenden Stern-Mobiles kann man so beschreiben: (-3 (-1 4) (2 (-1 1) (1 1))) (2 (-1 6) (2 3))**
