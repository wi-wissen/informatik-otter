---
short: 25hd
title: Lichterstern
summary: Rote, blaue und gelbe Lichter bilden einen Stern. Wenn alle roten leuchten, welche der anderen sind dann an?
grades:
  "7-8": easy
gi:
  content: [information-data]
  process: [modelling, reasoning]
topics: [logic]
methods: [boolean-logic, xor]
mascot: beaver
interaction:
  format: graph-pick
  props:
    pick: nodes
    width: 228
    height: 217
    background: ./img/star.png
    hideNodes: true
    nodeRadius: 11
    nodes:
      - { id: m1, x: 72, y: 61 }
      - { id: m2, x: 151, y: 61 }
      - { id: m3, x: 48, y: 136 }
      - { id: m4, x: 176, y: 136 }
      - { id: m5, x: 113, y: 188 }
      - { id: i1, x: 112, y: 76 }
      - { id: i2, x: 150, y: 103 }
      - { id: i3, x: 138, y: 145 }
      - { id: i4, x: 90, y: 152 }
      - { id: i5, x: 80, y: 102 }
    edges: []
source:
  type: original
  work: Informatik-Biber 2025
  year: 2025
  page: 54
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2025/Biberheft_2025_web_komplett.pdf
  country: CA
  license: CC BY-SA 4.0
---
In ihrem Elektronikkasten hat Sophie drei Sorten Lichter: runde rote, quadratische blaue und fünfeckige gelbe. Sie hat einige Lichter zu einem Lichterstern verkabelt. Die Pfeile zeigen, wie die Kabel liegen.

Die blauen und gelben Lichter werden über die Kabel gesteuert, in Pfeilrichtung. Jedes blaue oder gelbe Licht hat also genau zwei „Steuer-Lichter“.

So funktionieren die Lichter:

- Die roten Lichter kann Sophie selbst an- und ausschalten.
- Ein blaues Licht ist an, wenn beide Steuer-Lichter an sind; sonst ist es aus.
- Ein gelbes Licht ist an, wenn genau eines der beiden Steuer-Lichter an ist; sonst ist es aus.

Sophie schaltet alle roten Lichter an.

![Der Lichterstern: fünf rote Lichter außen, die an sind; dazwischen ein Ring aus fünf und innen ein Ring aus fünf blauen und gelben Lichtern, verbunden durch Pfeile](./img/star.png)

**Welche anderen Lichter sind dann auch an?**
