---
short: 4p8R
title: Rasensprenger
summary: Wie wenige Rasensprenger braucht Bob, um alle Blumen in seinem Garten zu gießen?
grades:
  "3-4": medium
  "5-6": easy
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [optimization]
methods: [set-cover]
mascot: beaver
interaction:
  format: custom
  props:
    background: ./img/garden.png
    width: 469
    height: 376
    reusable: true
    trayLabel: Rasensprenger
    flowers: ["02", "10", "14", "21", "32"]
    minimum: 2
    zones:
      - { id: z00, label: "Zeile 1, Spalte 1", x: 7, y: 7, w: 86, h: 86 }
      - { id: z01, label: "Zeile 1, Spalte 2", x: 99, y: 7, w: 86, h: 86 }
      - { id: z03, label: "Zeile 1, Spalte 4", x: 282, y: 7, w: 86, h: 86 }
      - { id: z04, label: "Zeile 1, Spalte 5", x: 372, y: 7, w: 86, h: 86 }
      - { id: z11, label: "Zeile 2, Spalte 2", x: 99, y: 99, w: 86, h: 86 }
      - { id: z12, label: "Zeile 2, Spalte 3", x: 190, y: 99, w: 86, h: 86 }
      - { id: z13, label: "Zeile 2, Spalte 4", x: 282, y: 99, w: 86, h: 86 }
      - { id: z20, label: "Zeile 3, Spalte 1", x: 7, y: 189, w: 86, h: 86 }
      - { id: z22, label: "Zeile 3, Spalte 3", x: 190, y: 189, w: 86, h: 86 }
      - { id: z23, label: "Zeile 3, Spalte 4", x: 282, y: 189, w: 86, h: 86 }
      - { id: z24, label: "Zeile 3, Spalte 5", x: 372, y: 189, w: 86, h: 86 }
      - { id: z30, label: "Zeile 4, Spalte 1", x: 7, y: 280, w: 86, h: 86 }
      - { id: z31, label: "Zeile 4, Spalte 2", x: 99, y: 280, w: 86, h: 86 }
      - { id: z33, label: "Zeile 4, Spalte 4", x: 282, y: 280, w: 86, h: 86 }
      - { id: z34, label: "Zeile 4, Spalte 5", x: 372, y: 280, w: 86, h: 86 }
    items:
      - { id: sprinkler, image: ./img/sprinkler.png, alt: Rasensprenger }
source:
  type: original
  work: Informatik-Biber 2020
  year: 2020
  page: 46
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2020/Biberheft_2020_final_mit_Loesungen.pdf
  country: SK
  license: CC BY-SA 4.0
---
Unten siehst du Bobs Garten. Der Garten ist in Felder eingeteilt. In einigen Feldern sind Blumen.

Bob möchte die Blumen mit Rasensprengern gießen. Ein Sprenger kann nur auf ein leeres Feld gestellt werden. Er gießt dann die 8 Felder rundherum.

**Stelle Sprenger im Garten auf, die alle Blumen gießen. Benutze so wenige Sprenger wie möglich!** Ziehe die Sprenger auf leere Felder.
