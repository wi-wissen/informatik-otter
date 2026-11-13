---
short: f4KC
title: Bewässerung
summary: Wasser fließt durch Rohre und Ventile. Welche Blumen werden gegossen?
grades:
  "5-6": easy
gi:
  content: [information-data]
  process: [modelling, reasoning]
topics: [logic]
methods: [boolean-logic]
mascot: beaver
interaction:
  format: hotspots
  props:
    background: ./img/system.png
    width: 388
    height: 460
    spots:
      - { id: a, label: linke Blume, x: 50, y: 414, w: 60, h: 62 }
      - { id: b, label: mittlere Blume, x: 192, y: 414, w: 60, h: 62 }
      - { id: c, label: rechte Blume, x: 336, y: 414, w: 60, h: 62 }
    states:
      - { id: dry, label: durstig, image: ./img/flower-dry.png }
      - { id: wet, label: bekommt Wasser, image: ./img/flower-wet.png }
source:
  type: original
  work: Informatik-Biber 2014
  year: 2014
  page: 10
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2014/Biberheft2014-mit-Loesungen.pdf
  license: CC BY-NC-SA 3.0
---
Ein Ventil lässt Wasser nur durch, wenn es offen ist.

| Ventil zu | Ventil offen |
|---|---|
| ![Geschlossenes Ventil: der rote Balken liegt quer im Rohr](./img/valve-closed.png) | ![Offenes Ventil: der rote Balken liegt längs im Rohr](./img/valve-open.png) |
| Wenn das Ventil zu ist, fließt kein Wasser. | Wenn das Ventil offen ist, fließt Wasser durch. |

Im Bild unten geben drei Trichter, von denen zwei Wasser enthalten, ihr Wasser in ein Rohrsystem mit Ventilen. Unten stehen drei durstige Blumen.

**Welche der drei durstigen Blumen bekommen Wasser bei dieser Stellung der Ventile?**

Blumen, die Wasser bekommen, sollen so aussehen: ![Eine aufrechte, blühende Blume](./img/flower-wet.png) Blumen, die kein Wasser bekommen, sollen so aussehen: ![Eine hängende, durstige Blume](./img/flower-dry.png) Klicke auf die Blumen, um ihr Aussehen zu ändern.
