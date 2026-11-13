---
short: 2gRK
title: Kugelrampe
summary: Kugeln rollen einen Abhang hinunter und fallen in Löcher, die sie später wieder auswerfen. Wie liegen sie am Ende?
grades:
  "7-8": hard
  "9-10": medium
  "11-13": medium
gi:
  content: [information-data]
  process: [modelling, reasoning]
topics: [data-structures]
methods: [stack]
mascot: beaver
interaction:
  format: choice
  props:
    columns: 1
    options:
      - { id: a, image: ./img/a.png, alt: "7, 8, 9, 10, 1, 2, 3, 4, 5, 6" }
      - { id: b, image: ./img/b.png, alt: "7, 8, 9, 10, 1, 2, 3, 5, 4, 6" }
      - { id: c, image: ./img/c.png, alt: "10, 9, 8, 7, 6, 5, 4, 3, 2, 1" }
      - { id: d, image: ./img/d.png, alt: "7, 8, 9, 10, 3, 2, 1, 5, 4, 6" }
source:
  type: original
  work: Informatik-Biber 2017
  year: 2017
  page: 33
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2017/Biberheft2017-mit-Loesungen.pdf
  country: RS
  license: CC BY-SA 4.0
---
Eine Spielzeugfirma baut Kugelrampen: Nummerierte Kugeln rollen einen Abhang mit Löchern hinunter. Wenn eine Kugel zu einem Loch kommt, fällt sie hinein, wenn noch Platz ist; sonst rollt sie über das Loch. Die Kugeln in einem Loch werden mit einer Feder wieder hinausbefördert – aber nur, wenn gerade keine Kugel rollt. Zum Schluss liegen alle Kugeln am Ende der Rampe.

Hier ist eine Rampe für fünf Kugeln mit einem Loch. Das Loch hat Platz für drei Kugeln. Hier liegen die Kugeln zum Schluss in der Reihenfolge 4, 5, 3, 2, 1 am Ende der Rampe.

![Drei Bilder der Rampe mit einem Loch: Die Kugeln 1 bis 5 rollen hinunter; die Kugeln 1, 2 und 3 liegen im Loch, 4 und 5 sind schon unten; nach dem Auslösen der Feder rollen 3, 2 und 1 hinterher, unten liegen 4, 5, 3, 2, 1.](./img/example.png)

Hier ist eine Rampe für zehn Kugeln mit drei Löchern. Loch A hat Platz für drei Kugeln, Loch B für zwei Kugeln und Loch C für eine Kugel. Wenn die Löcher voll sind, werden die Federn in dieser Reihenfolge betätigt: zuerst an Loch A, dann an Loch B, dann an Loch C.

![Rampe mit den Kugeln 1 bis 10 oben. Von oben nach unten folgen die Löcher A, B und C, danach beginnt die Ablaufbahn.](./img/ramp.png)

**In welcher Reihenfolge liegen die Kugeln zum Schluss?**
