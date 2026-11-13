---
short: z6RP
title: Überwacht
summary: Eine Kamera macht alle 10 Sekunden ein Foto. Aus den Unterschiedsbildern kann man ablesen, was auf dem Marktplatz passiert ist.
grades:
  "7-8": hard
  "9-10": medium
  "11-13": easy
gi:
  content: [information-data]
  process: [reasoning, representing]
topics: [images]
methods: []
mascot: beaver
interaction:
  format: place
  props:
    background: ./img/board.png
    width: 709
    height: 526
    trayLabel: Ereignisse
    zones:
      - { id: p10, label: Nach 10 Sekunden, x: 324, y: 192, w: 60, h: 48 }
      - { id: p20, label: Nach 20 Sekunden, x: 557, y: 192, w: 60, h: 48 }
      - { id: p30, label: Nach 30 Sekunden, x: 91, y: 450, w: 60, h: 48 }
      - { id: p40, label: Nach 40 Sekunden, x: 324, y: 450, w: 60, h: 48 }
      - { id: p50, label: Nach 50 Sekunden, x: 557, y: 450, w: 60, h: 48 }
    items:
      - { id: A, label: A, alt: "A: Tom trifft Tina." }
      - { id: B, label: B, alt: "B: Jemand öffnet die Rathaustür." }
      - { id: C, label: C, alt: "C: Tom und Tina gehen Arm in Arm." }
      - { id: D, label: D, alt: "D: Wind kommt auf." }
      - { id: E, label: E, alt: "E: Jemand schließt die Rathaustür." }
source:
  type: original
  work: Informatik-Biber 2019
  year: 2019
  page: 57
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2019/Biberheft2019-mit-Loesungen.pdf
  country: DE
  license: CC BY-SA 4.0
---
Am Marktplatz ist eine Überwachungskamera installiert. Sie macht alle 10 Sekunden ein Foto. Eine Software vergleicht jedes neue Foto mit dem vorherigen und erzeugt ein „Unterschiedsbild“. Dieses Bild enthält rote Pixelquadrate genau dort, wo sich die beiden verglichenen Fotos unterscheiden.

Ein Beispiel: Links sind zwei Fotos vom Marktplatz, rechts ist das Unterschiedsbild des zweiten zum ersten Foto.

![Beispiel: Zwei Fotos vom Marktplatz mit Rathaus und Baum. Auf dem zweiten Foto steht unten vor dem Rathaus eine kleine dunkle Figur. Das Unterschiedsbild zeigt dort ein rotes Pixelquadrat.](./img/example.png)

Nun sollst du über sechs hintereinander aufgenommene Fotos nachdenken. Unten siehst du das erste Foto, aber für die folgenden fünf Fotos jeweils nur das Unterschiedsbild zum vorherigen Foto. Zwischen den Fotos wurde immer ein neues Ereignis beobachtet, und zwar jeweils eines aus dieser Liste:

| | |
|---|---|
| A | Tom trifft Tina. |
| B | Jemand öffnet die Rathaustür. |
| C | Tom und Tina gehen Arm in Arm. |
| D | Wind kommt auf. |
| E | Jemand schließt die Rathaustür. |

**Wann wurde welches Ereignis beobachtet?** Ziehe jeden Ereignis-Buchstaben auf die passende Position.
