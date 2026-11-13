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
  format: match
  props:
    left:
      - { id: d1, label: "1. Dotti (4 Punkte)" }
      - { id: d2, label: "2. Dotti (2 Punkte)" }
      - { id: d3, label: "3. Dotti (3 Punkte)" }
      - { id: d4, label: "4. Dotti (1 Punkt)" }
      - { id: d5, label: "5. Dotti (5 Punkte)" }
    right:
      - { id: n-left, label: "Nest ganz links" }
      - { id: n-lowleft, label: "Nest links vom Stamm, zweites von links" }
      - { id: n-bottom, label: "unterstes Nest am Stamm" }
      - { id: n-top, label: "höchstes Nest oben in der Mitte" }
      - { id: n-right, label: "Nest ganz rechts" }
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

![Ein Baum mit fünf Nestern: eines unten am Stamm, links davon ein zweites, von diesem aus ein Nest ganz links und ein Nest oben in der Mitte, rechts vom untersten Nest ein weiteres Nest. Rechts neben dem Baum stehen fünf Dottis mit 4, 2, 3, 1 und 5 Punkten.](./img/tree.png)

**In welche Nester klettern die Dottis?**
