---
short: u2U6
title: Flüsse und Dämme
summary: Ein Fluss gabelt sich mehrmals. Wie müssen die Biber die Dämme einstellen, damit möglichst viel Wasser den See erreicht?
grades:
  "7-8": hard
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [graphs, optimization]
methods: [max-flow]
mascot: beaver
interaction:
  format: choice
  props:
    options:
      - { id: a, label: "X=1, Y=0, Z=5" }
      - { id: b, label: "X=2, Y=2, Z=2" }
      - { id: c, label: "X=1, Y=2, Z=3" }
      - { id: d, label: "X=4, Y=3, Z=2" }
source:
  type: original
  work: Informatik-Biber 2012
  year: 2012
  page: 20
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2012/Biberheft2012-mit-Loesungen.pdf
  license: CC BY-NC-SA 3.0
---
Im Bibertal gabelt sich der Fluss auf dem Weg von der Quelle zum See mehrmals. Mit Hilfe von geschickt gebauten Dämmen können die Biber die Wassermengen in den einzelnen Flussarmen regulieren und maximieren.

Bei einer Gabelung wird die durchfließende Wassermenge auf beide Flussarme aufgeteilt. Im Bild steht neben den Flussarmen (Pfeile), welche Wassermenge pro Sekunde maximal durchfließen kann.

![Die Quelle teilt sich in zwei Arme (Kapazität 2 nach oben, 4 nach unten). Der obere Knoten führt mit Kapazität 1 zum mittleren Arm Y und mit X direkt in den See, der untere Knoten führt mit Kapazität 1 zu Y und mit Z in den See. Y führt in den See](./img/network.png)

**Wie müssen die Durchflüsse X, Y und Z reguliert werden, damit eine maximale Wassermenge in den See fließt?**
