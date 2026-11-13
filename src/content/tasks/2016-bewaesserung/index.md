---
short: a9gw
title: Bewässerung
summary: Drei durstige Blumen und ein Röhrensystem mit Ventilen. Welche Blumen bekommen Wasser?
grades:
  "3-4": easy
gi:
  content: [systems]
  process: [modelling, representing]
topics: [computer-architecture, logic]
methods: [boolean-logic]
mascot: beaver
interaction:
  format: graph-pick
  props:
    pick: nodes
    width: 154
    height: 188
    background: ./img/valves.png
    hideNodes: true
    nodeRadius: 20
    nodes:
      - { id: links, x: 27, y: 172, label: linke Blume }
      - { id: mitte, x: 79, y: 172, label: mittlere Blume }
      - { id: rechts, x: 132, y: 172, label: rechte Blume }
source:
  type: original
  work: Informatik-Biber 2016
  year: 2016
  page: 9
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2016/Biberheft2016-mit-Loesungen.pdf
  country: SI
  license: CC BY-SA 3.0
---
Wenn das Ventil zu ist (der rote Strich liegt quer zum Rohr), fließt kein Wasser. Wenn das Ventil offen ist (der rote Strich liegt längs im Rohr), fließt Wasser durch.

**Welche der drei durstigen Blumen bekommen Wasser bei dieser Stellung der Ventile?** Klicke auf die Blumen!

![Zwei gefüllte Wasserbehälter und ein leerer oben, darunter Rohre mit Ventilen, die zu drei Blumen führen](./img/valves.png)
