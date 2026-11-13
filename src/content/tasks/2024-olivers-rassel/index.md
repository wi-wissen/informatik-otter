---
short: EC78
title: Olivers Rassel
summary: Olivers Rassel hat bunte Kugeln, die beim Schütteln verrutschen. Wie liegen sie nach dem nächsten Schütteln?
grades:
  "3-4": medium
gi:
  content: [information-data]
  process: [modelling, reasoning]
topics: [data-structures]
methods: [linked-list]
mascot: beaver
interaction:
  format: place
  props:
    background: ./img/rassel.png
    width: 412
    height: 409
    trayLabel: Kugeln
    zones:
      - { id: p1, label: "Platz 1 (rechts von der violetten Kugel)", x: 104, y: 320, w: 60, h: 60 }
      - { id: p2, label: "Platz 2 (in der Mitte)", x: 162, y: 338, w: 60, h: 60 }
      - { id: p3, label: "Platz 3 (rechts von der grünen Kugel)", x: 276, y: 305, w: 60, h: 60 }
    items:
      - { id: red, image: ./img/ball-red.png, alt: rote Kugel }
      - { id: yellow, image: ./img/ball-yellow.png, alt: gelbe Kugel }
      - { id: blue, image: ./img/ball-blue.png, alt: blaue Kugel }
source:
  type: original
  work: Informatik-Biber 2024
  year: 2024
  page: 43
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2024/Biberheft_2024_web_komplett.pdf
  country: SK
  license: CC BY-SA 4.0
---
Oliver hat eine durchsichtige Rassel mit bunten Kugeln. Wenn er die Rassel schüttelt, bewegen sich einige Kugeln. Danach liegen die Kugeln anders in der Rassel als vorher.

![Die Rassel vor dem Schütteln, beim Schütteln und danach. Die Kugeln liegen unten in der Rassel: zuerst rot, gelb, grün, blau, violett, danach in anderer Folge und an anderen Stellen](./img/shake.png)

Oliver schüttelt die Rassel noch einmal.

**Wie liegen die Kugeln nun? Fülle die leeren Plätze in der Rassel.**

Ziehe dazu die Kugeln auf die leeren Plätze. (Von links nach rechts liegen unten in der Rassel: violette Kugel, Platz 1, Platz 2, grüne Kugel, Platz 3.)
