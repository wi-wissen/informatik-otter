---
short: p9Z6
title: Muttern und Schrauben
summary: Ben schraubt am Fließband Muttern auf Schrauben und lagert Muttern im Eimer. Welche Folge geht ohne Fehler auf?
grades:
  "5-6": hard
  "7-8": medium
  "9-10": easy
gi:
  content: [languages-automata]
  process: [modelling, reasoning]
topics: [automata, data-structures]
methods: [pushdown-automaton, stack]
mascot: beaver
interaction:
  format: choice
  props:
    columns: 1
    options:
      - { id: a, image: ./img/seq-a.png, alt: "Folge A: Mutter, Schraube, Schraube, Mutter, Mutter, Mutter, Mutter, Schraube, Schraube, Schraube" }
      - { id: b, image: ./img/seq-b.png, alt: "Folge B: Mutter, Mutter, Schraube, Mutter, Mutter, Schraube, Schraube, Schraube, Schraube, Mutter" }
      - { id: c, image: ./img/seq-c.png, alt: "Folge C: Mutter, Schraube, Mutter, Mutter, Schraube, Mutter, Mutter, Schraube, Schraube, Schraube" }
      - { id: d, image: ./img/seq-d.png, alt: "Folge D: Mutter, Mutter, Schraube, Schraube, Mutter, Schraube, Mutter, Mutter, Mutter, Schraube" }
source:
  type: original
  work: Informatik-Biber 2022
  year: 2022
  page: 42
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2022/Biberheft_2022_mit_Loesungen_web.pdf
  country: CA
  license: CC BY-SA 4.0
---
Ben steht am Fließband und verarbeitet Bauteile: Muttern und Schrauben.

![Biber Ben am Fließband mit Eimer für die Muttern und Kasten für die fertigen Teile](./img/ben.png)

Ben geht strikt nach folgendem Verfahren vor:

- Ben nimmt das nächste Bauteil vom Fließband herunter.
- Wenn Ben eine Mutter vom Fließband genommen hat, legt er sie in den Eimer.
- Wenn Ben eine Schraube vom Fließband genommen hat, nimmt er eine Mutter aus dem Eimer, schraubt sie auf die Schraube und legt das fertige Teil in den Kasten.

Bei diesem Verfahren können zwei Fehler auftreten:

1. Ben nimmt eine Schraube vom Fließband, aber es ist keine Mutter im Eimer, die er aufschrauben könnte.
2. Ben hat alle Bauteile vom Fließband verarbeitet, aber es sind immer noch Muttern im Eimer.

Der Eimer für die Muttern ist ausreichend groß und zu Beginn leer.

**Welche Folge von Muttern und Schrauben kann Ben ohne Fehler von links nach rechts verarbeiten?**
