---
short: L5Aw
title: Lefty 2
summary: Lefty kann nur geradeaus fahren oder nach links abbiegen und soll durch ein Labyrinth das Ziel erreichen. Welche Felder braucht er?
grades:
  "5-6": hard
  "7-8": medium
gi:
  content: [systems]
  process: [modelling, reasoning]
topics: [computer-architecture, programming]
methods: [instruction-set]
mascot: beaver
interaction:
  format: graph-pick
  props:
    pick: nodes
    width: 150
    height: 150
    background: ./img/grid.png
    nodeImage: ./img/hit.png
    nodeRadius: 7
    nodes:
      - { id: r1c1, x: 15, y: 15 }
      - { id: r1c2, x: 45, y: 15 }
      - { id: r1c3, x: 75, y: 15 }
      - { id: r1c4, x: 105, y: 15 }
      - { id: r1c5, x: 135, y: 15 }
      - { id: r2c1, x: 15, y: 45 }
      - { id: r2c2, x: 45, y: 45 }
      - { id: r2c3, x: 75, y: 45 }
      - { id: r2c4, x: 105, y: 45 }
      - { id: r2c5, x: 135, y: 45 }
      - { id: r3c1, x: 15, y: 75 }
      - { id: r3c2, x: 45, y: 75 }
      - { id: r3c3, x: 75, y: 75 }
      - { id: r3c4, x: 105, y: 75 }
      - { id: r3c5, x: 135, y: 75 }
      - { id: r4c1, x: 15, y: 105 }
      - { id: r4c2, x: 45, y: 105 }
      - { id: r4c3, x: 75, y: 105 }
      - { id: r4c4, x: 105, y: 105 }
      - { id: r4c5, x: 135, y: 105 }
      - { id: r5c1, x: 15, y: 135 }
      - { id: r5c3, x: 75, y: 135 }
      - { id: r5c5, x: 135, y: 135 }
    edges: []
source:
  type: original
  work: Informatik-Biber 2025
  year: 2025
  page: 52
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2025/Biberheft_2025_web_komplett.pdf
  country: DE
  license: CC BY-SA 4.0
---
Roboter Lefty (blauer Kreis mit rosa Pfeil) bewegt sich über ein Raster mit quadratischen Feldern. Zwischen Feldern kann es rote Mauern geben. Lefty soll das grüne Ziel erreichen. Lefty kann sich auf genau zwei Arten bewegen:

**Ein Feld vorwärts fahren**

![Lefty fährt ein Feld in Pfeilrichtung nach oben](./img/move-forward.png)

**Nach links drehen und dann sofort ein Feld vorwärts fahren**

![Lefty zeigt nach oben, dreht nach links und fährt sofort ein Feld nach links](./img/move-left.png)

Lefty kann aber nicht alles. Zum Beispiel kann er …

**… nicht einfach rechts abbiegen und …**

![Lefty fährt nach oben und kann dann nicht nach rechts abbiegen (durchgestrichener Pfeil)](./img/no-right.png)

**… nicht durch Mauern fahren.**

![Lefty zeigt nach rechts, eine Mauer versperrt den Weg (durchgestrichener Pfeil)](./img/no-wall.png)

![Raster aus 5×5 Feldern. Lefty steht unten in der zweiten Spalte und zeigt nach oben, das Ziel liegt unten in der vierten Spalte. Mauern: rechts von Zeile 1 Spalte 2; über und rechts von Zeile 3 Spalte 3; rechts von Zeile 4 Spalte 2; über Zeile 4 Spalte 5; links vom Ziel](./img/grid.png)

**Über welche Felder muss Lefty fahren, um das Ziel zu erreichen?** Tippe die Felder an, über die Lefty fährt (Start- und Zielfeld nicht mitgezählt).
