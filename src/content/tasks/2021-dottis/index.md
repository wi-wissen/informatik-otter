---
short: eFJ5
title: Dottis
summary: Fünf gepunktete Vögel suchen sich nach einer festen Regel ein Nest im Baum. In welches klettert jeder?
grades:
  "5-6": hard
  "7-8": medium
  "9-10": easy
gi:
  content: [information-data]
  process: [modelling, representing]
topics: [trees, data-structures]
methods: [binary-tree]
mascot: beaver
interaction:
  format: place
  props:
    background: ./img/tree-only.png
    width: 372
    height: 264
    trayLabel: Die fünf Dottis, von links nach rechts
    zones:
      - { id: n-top, label: "höchstes Nest oben in der Mitte", x: 188, y: 54, w: 48, h: 36 }
      - { id: n-left, label: "Nest ganz links", x: 58, y: 99, w: 48, h: 36 }
      - { id: n-lowleft, label: "Nest links vom Stamm, zweites von links", x: 147, y: 126, w: 48, h: 36 }
      - { id: n-right, label: "Nest rechts", x: 253, y: 108, w: 48, h: 36 }
      - { id: n-bottom, label: "unterstes Nest am Stamm", x: 190, y: 144, w: 48, h: 36 }
    items:
      - { id: d1, image: ./img/dotti-1.png, alt: "1. Dotti (4 Punkte)" }
      - { id: d2, image: ./img/dotti-2.png, alt: "2. Dotti (2 Punkte)" }
      - { id: d3, image: ./img/dotti-3.png, alt: "3. Dotti (3 Punkte)" }
      - { id: d4, image: ./img/dotti-4.png, alt: "4. Dotti (1 Punkt)" }
      - { id: d5, image: ./img/dotti-5.png, alt: "5. Dotti (5 Punkte)" }
source:
  type: original
  work: Informatik-Biber 2021
  year: 2021
  page: 19
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2021/Biberheft_2021_mit_Loesungen_web.pdf
  country: CA
  license: CC BY-SA 4.0
---
Dottis sind Vögel mit Punkten. Neben einem Baum stehen fünf Dottis. Einer nach dem anderen – von links nach rechts – klettern sie in den Baum und ziehen in die leeren Nester. Der mit den vier Punkten ist der erste. Jeder Dotti geht so vor:

Er beginnt unten am Baum. Er führt solange die folgenden Schritte aus, bis er ein leeres Nest gefunden hat:

1. Er klettert hoch, bis er ein Nest findet.
2. Wenn das Nest leer ist, bleibt er in diesem Nest, fertig.
3. Wenn das Nest schon besetzt ist, klettert er weiter: Wenn der Dotti im Nest
   - mehr Punkte hat, klettert er nach links.
   - gleich viele oder weniger Punkte hat, klettert er nach rechts.

**In welche Nester klettern die Dottis?**
