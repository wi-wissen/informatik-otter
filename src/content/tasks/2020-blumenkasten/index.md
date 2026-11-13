---
short: 2xeH
title: Blumenkasten
summary: Peter hat rote, gelbe und orange Blumen und einen Kasten für neun. Welche Anordnung gibt die meisten Punkte?
grades:
  "7-8": medium
  "9-10": easy
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [optimization]
methods: []
mascot: beaver
interaction:
  format: custom
  props:
    background: ./img/box.png
    width: 562
    height: 564
    trayLabel: Blumen
    zones:
      - { id: z0, label: "Zeile 1, Platz 1", x: 57, y: 56, w: 112, h: 112 }
      - { id: z1, label: "Zeile 1, Platz 2", x: 226, y: 56, w: 112, h: 112 }
      - { id: z2, label: "Zeile 1, Platz 3", x: 395, y: 56, w: 112, h: 112 }
      - { id: z3, label: "Zeile 2, Platz 1", x: 57, y: 225, w: 112, h: 112 }
      - { id: z4, label: "Zeile 2, Platz 2", x: 226, y: 225, w: 112, h: 112 }
      - { id: z5, label: "Zeile 2, Platz 3", x: 395, y: 225, w: 112, h: 112 }
      - { id: z6, label: "Zeile 3, Platz 1", x: 57, y: 394, w: 112, h: 112 }
      - { id: z7, label: "Zeile 3, Platz 2", x: 226, y: 394, w: 112, h: 112 }
      - { id: z8, label: "Zeile 3, Platz 3", x: 395, y: 394, w: 112, h: 112 }
    items:
      - { id: r1, image: ./img/flower-red.png, alt: rote Blume }
      - { id: r2, image: ./img/flower-red.png, alt: rote Blume }
      - { id: r3, image: ./img/flower-red.png, alt: rote Blume }
      - { id: r4, image: ./img/flower-red.png, alt: rote Blume }
      - { id: r5, image: ./img/flower-red.png, alt: rote Blume }
      - { id: y1, image: ./img/flower-yellow.png, alt: gelbe Blume }
      - { id: y2, image: ./img/flower-yellow.png, alt: gelbe Blume }
      - { id: y3, image: ./img/flower-yellow.png, alt: gelbe Blume }
      - { id: y4, image: ./img/flower-yellow.png, alt: gelbe Blume }
      - { id: y5, image: ./img/flower-yellow.png, alt: gelbe Blume }
      - { id: o1, image: ./img/flower-orange.png, alt: orange Blume }
      - { id: o2, image: ./img/flower-orange.png, alt: orange Blume }
      - { id: o3, image: ./img/flower-orange.png, alt: orange Blume }
      - { id: o4, image: ./img/flower-orange.png, alt: orange Blume }
      - { id: o5, image: ./img/flower-orange.png, alt: orange Blume }
source:
  type: original
  work: Informatik-Biber 2020
  year: 2020
  page: 17
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2020/Biberheft_2020_final_mit_Loesungen.pdf
  country: DE
  license: CC BY-SA 4.0
---
Peter liebt Blumen. Er hat rote, gelbe und orange Blumen (jeweils fünf). Peter hat einen neuen Blumenkasten, mit Platz für 3x3 Blumen. Dafür sucht er die perfekte Bepflanzung.

Um eine Bepflanzung zu bewerten, schaut Peter, welche Blumenfarben direkt nebeneinander sind (gerade, nicht schräg). Dabei vergibt er Punkte:

- Rot neben Gelb gibt 3 Punkte.
- Gelb neben Orange gibt 1 Punkt.
- Ansonsten gibt es keine Punkte.

Am Ende zählt Peter alle Punkte zusammen. Die Bepflanzung ist perfekt, wenn sie so viele Punkte bekommt wie möglich. Außerdem muss jede Blumenfarbe mindestens einmal vorkommen.

**Finde die perfekte Bepflanzung!** Ziehe die Blumen in den Blumenkasten.
