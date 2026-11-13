---
short: Xz9T
title: Flipflop
summary: Ein Ball fällt durch einen Baum aus Flipflops, die nach jedem Ball umklappen. Aus welchem Rohr fällt der dritte?
grades:
  "5-6": medium
  "7-8": easy
gi:
  content: [systems]
  process: [modelling, reasoning]
topics: [computer-architecture, automata]
methods: []
mascot: beaver
interaction:
  format: choice
  props:
    options:
      - { id: a, label: aus Rohr A }
      - { id: b, label: aus Rohr B }
      - { id: c, label: aus Rohr C }
      - { id: d, label: aus Rohr D }
source:
  type: original
  work: Informatik-Biber 2013
  year: 2013
  page: 14
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2013/Biberheft2013-mit-Loesungen.pdf
  license: CC BY-NC-SA 3.0
---
Das Flipflop ist ein Ding, das sich immer in einem von zwei möglichen Zuständen befindet. Jedes Mal, wenn es ein Signal erhält, wechselt das Flipflop seinen Zustand. Die Flipflops des Bibers arbeiten so:

Der Ball (das Signal) fällt von oben, und muss dann in eine der beiden möglichen Richtungen, links oder rechts, weiter fallen. Dabei dreht er das Flipflop so, dass der nächste Ball in die andere Richtung fallen wird.

![Links ein Flipflop, das den Ball nach links lenkt. Rechts das umgeklappte Flipflop, nachdem der Ball links unten angekommen ist; der nächste Ball fällt nach rechts.](./img/states.png)

Der Biber konstruiert sich mit solchen Flipflops ein Gerät, das so ausschaut:

![Das Gerät: oben ein Flipflop, darunter links und rechts je ein weiteres Flipflop; unten die Rohre A, B, C und D von links nach rechts. Im oberen Rohr warten ein roter, ein blauer und ein gelber Ball.](./img/device.png)

**Aus welchem Rohr wird der dritte (gelbe) Ball fallen?**
