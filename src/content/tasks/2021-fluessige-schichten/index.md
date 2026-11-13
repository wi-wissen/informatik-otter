---
short: 6mPZ
title: Flüssige Schichten
summary: Drei Flaschen zeigen, wie sich je drei Flüssigkeiten schichten. In welcher Reihenfolge liegen alle fünf in einer Flasche?
grades:
  "7-8": hard
  "9-10": medium
  "11-13": easy
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [sorting, graphs]
methods: [topological-sort]
mascot: beaver
interaction:
  format: sort-list
  props:
    direction: vertical
    startLabel: oben in der Flasche
    endLabel: unten in der Flasche
    items:
      - { id: yellow, image: ./img/yellow.png, alt: gelbe Flüssigkeit mit schwarzen Punkten }
      - { id: red, image: ./img/red.png, alt: rote Flüssigkeit }
      - { id: green, image: ./img/green.png, alt: grüne Flüssigkeit mit Kreisen }
      - { id: blue, image: ./img/blue.png, alt: blaue Flüssigkeit }
      - { id: purple, image: ./img/purple.png, alt: violette Flüssigkeit }
source:
  type: original
  work: Informatik-Biber 2021
  year: 2021
  page: 27
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2021/Biberheft_2021_mit_Loesungen_web.pdf
  country: ID
  license: CC BY-SA 4.0
---
Maria experimentiert mit fünf farbigen Flüssigkeiten. Die Flüssigkeiten haben alle eine andere Dichte und ordnen sich in Schichten an. In drei Flaschen gibt Maria nun jeweils drei Flüssigkeiten – immer gleich viel. Am Ende sind die Flüssigkeiten so angeordnet:

![Drei Flaschen. Flasche 1 von oben nach unten: gelb, rot, blau. Flasche 2: grün, gelb, rot. Flasche 3: violett, grün, blau.](./img/bottles.png)

Nun gibt Maria alle fünf Flüssigkeiten in eine Flasche.

**Bringe alle Flüssigkeiten in die Reihenfolge, in der sie am Ende in der Flasche angeordnet sind – von oben nach unten!**
