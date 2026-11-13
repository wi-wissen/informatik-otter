---
short: jmw6
title: Bergseen
summary: Kanäle sollen das überschüssige Wasser der Bergseen in den Stausee leiten, und der Bau soll möglichst wenig kosten.
grades:
  "9-10": hard
  "11-13": medium
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [graphs, optimization]
methods: [min-cost-flow]
mascot: beaver
interaction:
  format: graph-pick
  props:
    pick: edges
    width: 483
    height: 270
    background: ./img/map.png
    hideNodes: true
    directed: true
    nodes:
      - { id: l4, x: 83, y: 70 }
      - { id: l5, x: 201, y: 90 }
      - { id: l9, x: 341, y: 65 }
      - { id: l1, x: 58, y: 144 }
      - { id: l3, x: 290, y: 128 }
      - { id: l2, x: 191, y: 166 }
      - { id: l6, x: 357, y: 164 }
      - { id: s1, x: 61, y: 218 }
      - { id: s2, x: 189, y: 219 }
      - { id: s3, x: 289, y: 218 }
      - { id: s6, x: 394, y: 215 }
      - { id: s9, x: 425, y: 222 }
    edges:
      - { from: l4, to: l1 }
      - { from: l4, to: l5 }
      - { from: l5, to: l2 }
      - { from: l1, to: l2 }
      - { from: l1, to: s1 }
      - { from: l9, to: l2 }
      - { from: l9, to: l3 }
      - { from: l9, to: s9 }
      - { from: l3, to: l2 }
      - { from: l3, to: s3 }
      - { from: l3, to: l6 }
      - { from: l6, to: s6 }
      - { from: l2, to: s2 }
source:
  type: original
  work: Informatik-Biber 2025
  year: 2025
  page: 15
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2025/Biberheft_2025_web_komplett.pdf
  country: NZ
  license: CC BY-SA 4.0
---
Am Bergmassiv hinter dem Stausee gibt es mehrere kleine Bergseen. Bei starkem Regen könnten sie überlaufen, und das ist gefährlich. Deshalb sollen zwischen einigen Seen Kanäle gebaut werden. Diese Kanäle sollen alles überschüssige Wasser aus den Bergseen in den Stausee ableiten können. Gleichzeitig soll ihr Bau **möglichst wenig kosten**.

Für jeden Bergsee gibt eine Zahl an, wieviel überschüssiges Wasser aus dem See abgeleitet werden muss.

An jeder Stelle zwischen zwei Seen, an der ein Kanal gebaut werden kann, ist ein Pfeil. Er zeigt, in welche Richtung ein Kanal das Wasser dort ableiten würde. Die Zahl an einem Pfeil gibt die Kapazität des Kanals an, also wieviel überschüssiges Wasser er ableiten kann. Die Kapazität bestimmt auch die Kosten für den Bau eines Kanals an dieser Stelle.

Beachte: Wenn ein Kanal Wasser von einem kleinen Bergsee in einen zweiten ableitet, sammelt sich im zweiten See das überschüssige Wasser aus beiden Seen.

**An welchen Stellen sollen Kanäle gebaut werden? Klicke die Pfeile an.**
