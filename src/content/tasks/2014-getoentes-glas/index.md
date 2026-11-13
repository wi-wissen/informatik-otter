---
short: 6tj7
title: Getöntes Glas
summary: Die Gläser auf beiden Seiten einer Yacht überlagern sich. Wie sieht die Durchsicht der Bullaugen aus?
grades:
  "5-6": hard
  "7-8": easy
gi:
  content: [information-data]
  process: [representing, modelling]
topics: [modelling]
methods: []
mascot: beaver
interaction:
  format: hotspots
  props:
    background: ./img/yacht.png
    width: 618
    height: 280
    spots:
      - { id: p1, label: "Bullauge 1", x: 58, y: 156, w: 38, h: 38 }
      - { id: p2, label: "Bullauge 2", x: 120, y: 156, w: 38, h: 38 }
      - { id: p3, label: "Bullauge 3", x: 183, y: 156, w: 38, h: 38 }
      - { id: p4, label: "Bullauge 4", x: 246, y: 156, w: 38, h: 38 }
      - { id: p5, label: "Bullauge 5", x: 308, y: 156, w: 38, h: 38 }
      - { id: p6, label: "Bullauge 6", x: 371, y: 156, w: 38, h: 38 }
      - { id: p7, label: "Bullauge 7", x: 434, y: 156, w: 38, h: 38 }
      - { id: p8, label: "Bullauge 8", x: 496, y: 156, w: 38, h: 38 }
    states:
      - { id: clear, label: klar, image: ./img/glass-clear.png }
      - { id: tint, label: getönt, image: ./img/glass-tint.png }
      - { id: dark, label: stark getönt, image: ./img/glass-dark.png }
source:
  type: original
  work: Informatik-Biber 2014
  year: 2014
  page: 28
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2014/Biberheft2014-mit-Loesungen.pdf
  license: CC BY-NC-SA 3.0
---
Kapitän Schwarz lässt an seiner Yacht die Gläser der Bullaugen erneuern. Jedes neue Glas ist entweder ganz klar oder getönt. Der Glasermeister bekommt folgenden Auftrag:

Bullaugen auf der linken Seite:

![Acht Bullaugen der linken Seite, der Anker ist links. Von links nach rechts: getönt, getönt, klar, getönt, getönt, klar, klar, getönt](./img/left.png)

Bullaugen auf der rechten Seite:

![Acht Bullaugen der rechten Seite, der Anker ist rechts. Von links nach rechts: klar, getönt, klar, klar, getönt, klar, getönt, klar](./img/right.png)

Da sich immer zwei Bullaugen genau gegenüber liegen, kann man von jeder Seite durch die Yacht hindurch sehen. Je nach Tönung der Gläser ist die Durchsicht ganz klar, getönt oder stark getönt (weiß, grau, dunkelgrau):

![Zwei klare Gläser ergeben eine klare Durchsicht, ein getöntes Glas ergibt eine getönte, zwei getönte Gläser eine stark getönte Durchsicht](./img/views.png)

**Klicke auf die Bullaugen.** Ändere die Durchsichten so, dass sie dem Auftrag des Glasermeisters entsprechen. Tipp: Achte auf die Position der Anker.
