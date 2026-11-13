---
short: 9iLX
title: Sprachkurse
summary: Vier Sprachkurse brauchen je eine passende Lehrperson, aber jede Person kann nur einen Kurs halten. Wie ordnest du zu?
grades:
  "7-8": hard
  "11-13": easy
gi:
  content: [information-data, algorithms]
  process: [modelling, reasoning]
topics: [graphs, modelling]
methods: [matching]
mascot: beaver
interaction:
  format: graph-pick
  props:
    pick: edges
    width: 297
    height: 207
    background: ./img/netz.png
    hideNodes: true
    nodes:
      - { id: eng-A-t, x: 46, y: 57 }
      - { id: eng-A-b, x: 21, y: 157 }
      - { id: eng-B-t, x: 51, y: 59 }
      - { id: eng-B-b, x: 62, y: 157 }
      - { id: eng-C-t, x: 57, y: 59 }
      - { id: eng-C-b, x: 104, y: 157 }
      - { id: eng-D-t, x: 66, y: 56 }
      - { id: eng-D-b, x: 142, y: 161 }
      - { id: eng-F-t, x: 74, y: 52 }
      - { id: eng-F-b, x: 238, y: 157 }
      - { id: spa-D-t, x: 121, y: 60 }
      - { id: spa-D-b, x: 151, y: 157 }
      - { id: spa-E-t, x: 129, y: 59 }
      - { id: spa-E-b, x: 190, y: 157 }
      - { id: ung-D-t, x: 172, y: 56 }
      - { id: ung-D-b, x: 153, y: 157 }
      - { id: ita-B-t, x: 216, y: 56 }
      - { id: ita-B-b, x: 70, y: 157 }
      - { id: ita-D-t, x: 223, y: 56 }
      - { id: ita-D-b, x: 159, y: 161 }
      - { id: ita-E-t, x: 233, y: 56 }
      - { id: ita-E-b, x: 199, y: 157 }
      - { id: ita-F-t, x: 243, y: 59 }
      - { id: ita-F-b, x: 243, y: 157 }
      - { id: ita-G-t, x: 251, y: 56 }
      - { id: ita-G-b, x: 280, y: 157 }
    edges:
      - { id: eng-A, from: eng-A-t, to: eng-A-b }
      - { id: eng-B, from: eng-B-t, to: eng-B-b }
      - { id: eng-C, from: eng-C-t, to: eng-C-b }
      - { id: eng-D, from: eng-D-t, to: eng-D-b }
      - { id: eng-F, from: eng-F-t, to: eng-F-b }
      - { id: spa-D, from: spa-D-t, to: spa-D-b }
      - { id: spa-E, from: spa-E-t, to: spa-E-b }
      - { id: ung-D, from: ung-D-t, to: ung-D-b }
      - { id: ita-B, from: ita-B-t, to: ita-B-b }
      - { id: ita-D, from: ita-D-t, to: ita-D-b }
      - { id: ita-E, from: ita-E-t, to: ita-E-b }
      - { id: ita-F, from: ita-F-t, to: ita-F-b }
      - { id: ita-G, from: ita-G-t, to: ita-G-b }
source:
  type: original
  work: Informatik-Biber 2023
  year: 2023
  page: 58
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2023/Biberheft_2023_web_komplett.pdf
  country: IR
  license: CC BY-SA 4.0
---
Eine Sprachschule plant vier Sommerkurse. Die Linien im Bild zeigen, welche Lehrperson der Schule (unten) für welchen Kurs (oben) geeignet ist.

![Oben die vier Kurse Englisch, Spanisch, Ungarisch und Italienisch, unten sieben Lehrpersonen. Linien verbinden jeden Kurs mit den für ihn geeigneten Lehrpersonen](./img/netz.png)

Eine Lehrperson kann nur einen Kurs halten. Trotzdem gibt es mehrere Möglichkeiten, jedem Kurs eine geeignete Lehrperson zuzuordnen.

**Ordne jedem Kurs eine geeignete Lehrperson zu. Markiere dazu die Linie zwischen Person und Kurs.**
