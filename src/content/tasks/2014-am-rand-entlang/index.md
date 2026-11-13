---
short: z3KW
title: Am Rand entlang
summary: Ein Roboter fährt am Rand der Fahrbahn entlang und führt an Steuermarken Anweisungen aus. Wo bleibt er stehen?
grades:
  "5-6": hard
  "7-8": medium
gi:
  content: [algorithms]
  process: [modelling]
topics: [programming]
methods: [sequence]
mascot: beaver
interaction:
  format: graph-pick
  props:
    pick: nodes
    width: 198.7
    height: 138.7
    background: ./img/road.png
    hideNodes: true
    nodeRadius: 9
    nodes:
      - { id: n1, x: 48.7, y: 16.7 }
      - { id: n2, x: 75.3, y: 16.7 }
      - { id: n3, x: 33.3, y: 66.0 }
      - { id: n4, x: 59.3, y: 66.0 }
      - { id: n5, x: 75.3, y: 76.7 }
      - { id: n6, x: 74.7, y: 102.7 }
      - { id: n7, x: 33.3, y: 109.3 }
      - { id: n8, x: 60.0, y: 109.3 }
      - { id: n9, x: 124.0, y: 95.3 }
      - { id: n10, x: 149.3, y: 95.3 }
      - { id: n11, x: 172.7, y: 46.7 }
      - { id: n12, x: 172.7, y: 71.7 }
    edges: []
source:
  type: original
  work: Informatik-Biber 2014
  year: 2014
  page: 5
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2014/Biberheft2014-mit-Loesungen.pdf
  license: CC BY-NC-SA 3.0
---
Ein Roboter fährt immer am Rand seiner Fahrbahn entlang. Der Roboter kann die folgenden Anweisungen bekommen und ausführen:

| Anweisung | Ausführung |
|---|---|
| **START-GO** | Starte den Motor und fahre in der Startrichtung los. |
| **GO** | Fahre weiter am Rand entlang. |
| **CROSS-GO** | Wechsle zum anderen Rand der Fahrbahn und fahre in der gleichen Richtung weiter. |
| **STOP** | Bleib stehen. |

Wenn der Roboter steht, muss er zuerst die Anweisung **START-GO** bekommen. Auf der Fahrbahn sind Steuermarken. Immer wenn der Roboter über eine Steuermarke fährt, führt er die nächste Anweisung aus. Das Bild darunter zeigt die Fahrbahn des Roboters mit den Steuermarken. Der Roboter steht unten auf der Fahrbahn, seine Startrichtung ist nach oben.

Der Roboter bekommt nun diese Anweisungen: START-GO, CROSS-GO, GO, GO, GO, STOP.

**An welcher Stelle bleibt der Roboter stehen? Klicke auf den grauen Kreis.**
