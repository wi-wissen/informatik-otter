---
short: Jhe3
title: Wassermühlen
summary: Müller Mert will bei drei Mühlen ein Mühlrad einbauen und dort das Wasser abstellen. Welche Sperren schließt er?
grades:
  "3-4": hard
  "5-6": medium
  "7-8": easy
gi:
  content: [information-data]
  process: [modelling, reasoning]
topics: [logic, graphs]
methods: [boolean-logic]
mascot: beaver
interaction:
  format: graph-pick
  props:
    pick: nodes
    width: 311
    height: 234
    background: ./img/mills.png
    hideNodes: true
    nodeRadius: 12
    nodes:
      - { id: A, x: 15, y: 45 }
      - { id: B, x: 128, y: 15 }
      - { id: C, x: 94, y: 62 }
      - { id: D, x: 165, y: 65 }
      - { id: E, x: 200, y: 43 }
      - { id: F, x: 87, y: 107 }
      - { id: G, x: 32, y: 127 }
      - { id: H, x: 223, y: 120 }
      - { id: I, x: 30, y: 175 }
source:
  type: original
  work: Informatik-Biber 2021
  year: 2021
  page: 61
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2021/Biberheft_2021_mit_Loesungen_web.pdf
  country: TR
  license: CC BY-SA 4.0
---
Müller Mert hat sechs Mühlen. Das Wasser fließt vom Berg zu den Mühlen, wie die Pfeile zeigen. Auf dem Weg gibt es einige Wassersperren. Wenn der Müller eine Sperre schließt, fließt das Wasser dort nicht mehr weiter.

Bei drei Mühlen muss der Müller noch das Mühlrad einbauen. Zu diesen Mühlen soll deshalb kein Wasser mehr fließen. Zu den drei Mühlen mit Mühlrad soll das Wasser aber weiter fließen.

Im Bild haben die braune, die blaue und die rote Mühle schon ein Mühlrad; bei der grünen, der gelben und der violetten Mühle fehlt es noch.

**Welche Sperren soll der Müller schließen?**
