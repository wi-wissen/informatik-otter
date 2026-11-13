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
  format: match
  props:
    left:
      - { id: p10, image: ./img/d10.png, alt: "Unterschiedsbild nach 10 Sekunden: ein roter Strich links oben in der Mitte" }
      - { id: p20, image: ./img/d20.png, alt: "Unterschiedsbild nach 20 Sekunden: zwei rote Striche nebeneinander in der Mitte" }
      - { id: p30, image: ./img/d30.png, alt: "Unterschiedsbild nach 30 Sekunden: zwei rote Striche links, zwei rote Striche rechts unten" }
      - { id: p40, image: ./img/d40.png, alt: "Unterschiedsbild nach 40 Sekunden: ein roter Strich links, zwei rote Striche rechts unten" }
      - { id: p50, image: ./img/d50.png, alt: "Unterschiedsbild nach 50 Sekunden: fünf verstreute rote Quadrate rechts oben" }
    right:
      - { id: A, label: "A: Tom trifft Tina." }
      - { id: B, label: "B: Jemand öffnet die Rathaustür." }
      - { id: C, label: "C: Tom und Tina gehen Arm in Arm." }
      - { id: D, label: "D: Wind kommt auf." }
      - { id: E, label: "E: Jemand schließt die Rathaustür." }
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

![Das erste Foto: der Marktplatz mit Rathaus und Baum](./img/photo.png)

**Wann wurde welches Ereignis beobachtet?** Ordne jedem Unterschiedsbild das Ereignis zu.
