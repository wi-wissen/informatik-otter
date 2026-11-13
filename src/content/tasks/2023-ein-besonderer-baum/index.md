---
short: 1PaF
title: Ein besonderer Baum
summary: Vögel, Eichhörnchen und Schlangen besuchen Jonas Apfelbaum und verändern die Zahl der Äpfel. Wie viele bleiben?
grades:
  "3-4": hard
  "5-6": medium
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [programming]
methods: [sequence]
mascot: beaver
interaction:
  format: choice
  props:
    columns: 4
    options:
      - { id: a, label: "3 Äpfel" }
      - { id: b, label: "7 Äpfel" }
      - { id: c, label: "17 Äpfel" }
      - { id: d, label: "31 Äpfel" }
source:
  type: original
  work: Informatik-Biber 2023
  year: 2023
  page: 25
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2023/Biberheft_2023_web_komplett.pdf
  country: CA
  license: CC BY-SA 4.0
---
Jona hat einen besonderen Apfelbaum im Garten:

- Landet ein **Vogel** auf dem Baum, wachsen sofort zwei neue Äpfel.
- Klettert ein **Eichhörnchen** auf den Baum, fällt ein Apfel runter. Wenn kein Apfel am Baum hängt, passiert nichts.
- Besucht eine **Schlange** den Baum, verschwinden alle Äpfel sofort.

Heute Morgen hängen 25 Äpfel am Baum. Dann besuchen einige Tiere nacheinander den Baum, zuletzt ein Eichhörnchen. Jona hat ihre Reihenfolge genau aufgeschrieben:

![Die Reihenfolge der Tiere: Vogel, Vogel, Eichhörnchen, Vogel, Schlange, Eichhörnchen, Eichhörnchen, Vogel, Vogel, Vogel, Eichhörnchen, Vogel, Schlange, Vogel, Vogel, Vogel, Vogel, Eichhörnchen](./img/sequence.png)

**Wie viele Äpfel hängen danach am Baum?**
