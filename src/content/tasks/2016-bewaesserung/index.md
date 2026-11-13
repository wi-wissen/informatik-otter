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
  format: hotspots
  props:
    background: ./img/valves.png
    width: 385
    height: 470
    spotSize: 56
    spots:
      - { id: links, x: 68, y: 436, label: linke Blume }
      - { id: mitte, x: 205, y: 436, label: mittlere Blume }
      - { id: rechts, x: 338, y: 436, label: rechte Blume }
    states:
      - { id: trocken, label: bekommt kein Wasser, image: ./img/flower-dry.png }
      - { id: nass, label: bekommt Wasser, image: ./img/flower-wet.png }
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

Blumen, die Wasser bekommen, sollen rosa aussehen. Blumen, die kein Wasser bekommen, sollen violett aussehen.

**Welche der drei durstigen Blumen bekommen Wasser bei dieser Stellung der Ventile?** Klicke auf die Blumen! Im Bild sieht man zwei gefüllte Wasserbehälter und einen leeren Behälter oben, darunter Rohre mit Ventilen, die zu den drei Blumen führen.
