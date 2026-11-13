---
short: 2NFZ
title: Stern-Mobiles
summary: Stern-Mobiles aus Fäden, Stäben und Sternen lassen sich mit Zahlen und Klammern beschreiben. Welches Mobile passt zur Beschreibung?
grades:
  "11-13": medium
gi:
  content: [algorithms]
  process: [modelling, representing]
topics: [recursion]
methods: []
mascot: beaver
interaction:
  format: choice
  props:
    columns: 4
    options:
      - { id: a, label: A, image: ./img/opt-a.png, alt: "Stern-Mobile A" }
      - { id: b, label: B, image: ./img/opt-b.png, alt: "Stern-Mobile B" }
      - { id: c, label: C, image: ./img/opt-c.png, alt: "Stern-Mobile C" }
      - { id: d, label: D, image: ./img/opt-d.png, alt: "Stern-Mobile D" }
source:
  type: original
  work: Informatik-Biber 2024
  year: 2024
  page: 65
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2024/Biberheft_2024_web_komplett.pdf
  country: DE
  license: CC BY-SA 4.0
---
Stern-Mobiles sind Gebilde aus Fäden, Stäben und Sternen. An einem Faden kann eine Anzahl von Sternen hängen; oder ein Stab, an dessen beiden Enden jeweils wieder ein Stern-Mobile hängt.

Dies ist ein einfaches Stern-Mobile:

![Ein Stab mit zwei Teil-Mobiles: links ein kleiner Stab mit je einem Stern an beiden Enden, rechts ein Faden mit drei Sternen](./img/example.png)

Mit Zahlen und Klammern kann man es so beschreiben:

`(-3 (-1 1) (1 1)) (2 3)`

Die Zahlen geben jeweils an:

- entweder den Abstand eines Stab-Endes zum Faden, an dem der Stab hängt,
- oder eine Anzahl an Sternen.

Die Klammern geben die Struktur des Stern-Mobiles an.

**Welches der folgenden Stern-Mobiles kann man so beschreiben: `(-3 (-1 4) (2 (-1 1) (1 1))) (2 (-1 6) (2 3))`**
