---
short: vPu8
title: Parkplätze
summary: Neun Autos, drei Parkspuren und eine feste Abfahrtsreihenfolge. In welcher Spur muss wer parken?
grades:
  "11-13": hard
gi:
  content: [languages-automata]
  process: [modelling, reasoning]
topics: [automata, data-structures]
methods: [stack, pushdown-automaton]
mascot: beaver
interaction:
  format: custom
  props:
    background: ./img/lot.png
    width: 177.3
    height: 225.3
    lanes:
      - { id: s1, label: "Spur 1", x: 18, y: 124, w: 20, h: 40, capacity: 1 }
      - { id: s2, label: "Spur 2", x: 42.5, y: 80.5, w: 20, h: 83.5, capacity: 2 }
      - { id: s3, label: "Spur 3", x: 67.5, y: 37, w: 20, h: 127, capacity: 3 }
    items:
      - { id: d, image: ./img/car-d.png, alt: Auto D (David) }
      - { id: e, image: ./img/car-e.png, alt: Auto E (Emir) }
      - { id: f, image: ./img/car-f.png, alt: Auto F (Frank) }
      - { id: g, image: ./img/car-g.png, alt: Auto G (Gabi) }
      - { id: h, image: ./img/car-h.png, alt: Auto H (Harald) }
      - { id: j, image: ./img/car-j.png, alt: Auto J (Julia) }
source:
  type: original
  work: Informatik-Biber 2025
  year: 2025
  page: 64
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2025/Biberheft_2025_web_komplett.pdf
  country: SI
  license: CC BY-SA 4.0
---
Zur Party kommen 9 Gäste mit ihren Autos. Vor dem Haus können 9 Autos so parken, dass in 3 Parkspuren jeweils 3 Autos hintereinander stehen. Die Gäste kommen in dieser Reihenfolge:

**A**na, **B**eata, **C**lara, **D**avid, **E**mir, **F**rank, **G**abi, **H**arald und zuletzt **J**ulia.

Beim Einparken wählt jeder eine Parkspur aus und fährt darin so weit wie möglich nach vorne.

Die Gäste wollen in dieser Reihenfolge von der Party wegfahren:

**G**abi, **D**avid, **B**eata, **E**mir, **J**ulia, **C**lara, **H**arald, **A**na und zuletzt **F**rank.

Die Autos von Ana, Beata und Clara sind bereits geparkt. Nun parken die anderen Gäste nach und nach ein. Sie wollen so parken, dass beim Wegfahren kein Auto von einem anderen blockiert ist, das später wegfährt.

**Zeige den Gästen, wie sie so parken können!**
Platziere die restlichen 6 Autos in den Parkspuren.
Du musst die Reihenfolgen beim Ankommen und beim Wegfahren berücksichtigen.
