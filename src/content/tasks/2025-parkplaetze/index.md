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
  format: match
  props:
    left:
      - { id: d, label: "David (D)" }
      - { id: e, label: "Emir (E)" }
      - { id: f, label: "Frank (F)" }
      - { id: g, label: "Gabi (G)" }
      - { id: h, label: "Harald (H)" }
      - { id: j, label: "Julia (J)" }
    right:
      - { id: s1, label: Spur 1 }
      - { id: s2, label: Spur 2 }
      - { id: s3, label: Spur 3 }
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

![Der Parkplatz vor dem Haus mit drei Parkspuren nebeneinander, die vorne (oben) beginnen. Das Auto A steht vorne in der linken Spur, B vorne in der mittleren Spur, C in der linken Spur dahinter. Die rechte Spur ist leer. Die Autos D, E, F, G, H und J warten rechts neben dem Parkplatz. Die Straße verläuft unten](./img/lot.png)

**Zeige den Gästen, wie sie so parken können! Wähle für die restlichen 6 Autos eine der Parkspuren 1 bis 3 (von links nach rechts).** Du musst die Reihenfolgen beim Ankommen und beim Wegfahren berücksichtigen.
