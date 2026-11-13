---
short: 3rqR
title: Verflixte Tische
summary: Eine umprogrammierte Fernbedienung verstellt die Höhen von vier Tischen auf überraschende Weise. Wie kommen alle auf 60 cm?
grades:
  "7-8": hard
  "9-10": medium
  "11-13": easy
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [optimization, modelling]
methods: []
mascot: beaver
interaction:
  format: choice
  props:
    columns: 1
    options:
      - { id: a, label: "4 × gelbe Taste (T), 5 × rote Taste (O) und 1 × blaue Taste (M)" }
      - { id: b, label: "5 × gelbe Taste (T), 1 × rote Taste (O) und 0 × blaue Taste (M)" }
      - { id: c, label: "3 × gelbe Taste (T), 4 × rote Taste (O) und 2 × blaue Taste (M)" }
      - { id: d, label: "2 × gelbe Taste (T), 4 × rote Taste (O) und 6 × blaue Taste (M)" }
source:
  type: original
  work: Informatik-Biber 2021
  year: 2021
  page: 57
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2021/Biberheft_2021_mit_Loesungen_web.pdf
  license: CC BY-SA 4.0
---
Toll: Im Klassenraum gibt es vier Tische mit elektrisch einstellbarer Höhe! Die Höhe kann mit einer Fernbedienung verändert werden. Sie hat dazu drei Tasten: eine gelbe Taste (T), eine rote Taste (O) und eine blaue Taste (M).

Jemand hat die Fernbedienung umprogrammiert. Jedesmal, wenn die Tasten gedrückt werden, passiert nun Folgendes:

- Die gelbe Taste (T) erhöht die Tische 1, 2 und 3 um jeweils 10 cm.
- Die rote Taste (O) senkt die Tische 2, 3 und 4 um jeweils 10 cm.
- Die blaue Taste (M) erhöht die Tische 1, 3 und 4 um jeweils 10 cm.

Momentan sind die Tische 1, 2, 3 und 4 auf 10 cm, 70 cm, 50 cm und 80 cm eingestellt.

![Vier Tische mit den Höhen 10 cm (Tisch 1), 70 cm (Tisch 2), 50 cm (Tisch 3) und 80 cm (Tisch 4) und die Fernbedienung mit den drei Tasten T, O und M](./img/tables.png)

Für den Unterricht sollen alle vier Tische auf 60 cm eingestellt werden.

**Wie muss man dazu die Tasten drücken?**
