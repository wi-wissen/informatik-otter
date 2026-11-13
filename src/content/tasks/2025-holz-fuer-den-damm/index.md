---
short: UVN8
title: Holz für den Damm
summary: Sechs Bäume, zwei Fällregeln. Mit welchen Bäumen bekommen die Biber am meisten Holz für ihren Damm?
grades:
  "3-4": hard
  "5-6": medium
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [optimization]
methods: [dynamic-programming]
mascot: beaver
interaction:
  format: graph-pick
  props:
    pick: nodes
    width: 460
    height: 130
    background: ./img/trees.png
    nodeImage: ./img/hit.png
    nodeRadius: 22
    nodes:
      - { id: t8, x: 95, y: 90 }
      - { id: t6, x: 149, y: 95 }
      - { id: t9, x: 220, y: 88 }
      - { id: t7, x: 284, y: 92 }
      - { id: t10, x: 344, y: 85 }
      - { id: t5, x: 420, y: 95 }
    edges: []
source:
  type: original
  work: Informatik-Biber 2025
  year: 2025
  page: 44
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2025/Biberheft_2025_web_komplett.pdf
  country: CY
  license: CC BY-SA 4.0
---
Für ihren nächsten Dammbau müssen die Biber einige Bäume fällen.

Sechs Bäume kommen in Frage. Die Biber wissen, wieviele Meter Holz jeder Baum hat. Sie wollen insgesamt möglichst viele Meter Holz haben. Den ersten Baum können sie frei wählen. Immer wenn sie danach einen nächsten Baum fällen wollen, müssen sie zwei Regeln befolgen:

- Regel 1: Der nächste Baum muss weiter rechts stehen als der vorherige.
- Regel 2: Der nächste Baum muss kleiner sein, also weniger Meter Holz haben als der vorherige.

Ein Beispiel: Wenn sie den 6m-Baum fällen, dürfen sie danach nur noch den 5m-Baum fällen. Dann haben sie am Ende insgesamt 11 Meter Holz.

![Sechs Bäume von links nach rechts mit 8 m, 6 m, 9 m, 7 m, 10 m und 5 m Holz; ganz links steht ein Biber mit Axt](./img/trees.png)

**Welche Bäume können die Biber nach ihren Regeln fällen, damit sie am Ende möglichst viele Meter Holz haben? Tippe die Bäume an.**
