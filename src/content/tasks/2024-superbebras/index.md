---
short: H48K
title: Superbebras
summary: Im Computerspiel Superbebras folgen die Hintergrundkacheln einem Pfeil-Diagramm. Welcher Hintergrund passt nicht dazu?
grades:
  "5-6": hard
  "7-8": medium
  "9-10": easy
gi:
  content: [languages-automata]
  process: [modelling, reasoning]
topics: [automata, graphs]
methods: [finite-automaton]
mascot: beaver
interaction:
  format: choice
  props:
    columns: 2
    options:
      - { id: a, label: A, image: ./img/opt-a.png, alt: "Hintergrund A aus sechs Kacheln" }
      - { id: b, label: B, image: ./img/opt-b.png, alt: "Hintergrund B aus sechs Kacheln" }
      - { id: c, label: C, image: ./img/opt-c.png, alt: "Hintergrund C aus sechs Kacheln" }
      - { id: d, label: D, image: ./img/opt-d.png, alt: "Hintergrund D aus sechs Kacheln" }
source:
  type: original
  work: Informatik-Biber 2024
  year: 2024
  page: 67
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2024/Biberheft_2024_web_komplett.pdf
  country: DE
  license: CC BY-SA 4.0
---
Im Computerspiel „Superbebras“ besteht der Hintergrund aus einer Folge von Kacheln. Der Computer fügt ständig eine neue Kachel auf der rechten Seite der Folge hinzu und entfernt gleichzeitig eine Kachel auf der linken Seite. Das sieht dann wie eine Bewegung aus.

![Eine Folge von sechs Kacheln; rechts davon eine neue Kachel mit Mauerstreifen, die rechts angefügt wird](./img/strip.png)

Um die nächste neue Kachel auszuwählen, verwendet der Computer das folgende Diagramm. Im Diagramm sucht er die vorige neue Kachel (auf der rechten Seite) und die Pfeile, die davon ausgehen. Dann wählt er zufällig eine Kachel aus, auf die einer dieser Pfeile zeigt.

![Das Diagramm mit vier Kacheln: Kachel mit Diamant, normale Kachel, Kachel mit Mauer, Kachel mit Loch im Boden. Pfeile: Diamant-Kachel zeigt zur normalen Kachel; die normale Kachel zeigt zur Diamant-Kachel, zur Mauer-Kachel, zur Loch-Kachel und auf sich selbst; die Mauer-Kachel zeigt zur normalen Kachel und auf sich selbst; die Loch-Kachel zeigt zur normalen Kachel](./img/diagram.png)

Zum Beispiel kann der Computer nach einer Kachel mit Mauer entweder wieder eine Kachel mit Mauer oder eine normale Kachel auswählen.

In einem Superbebras-Hintergrund muss also die Reihenfolge der Kacheln zu obigem Diagramm passen.

**Eines dieser Bilder ist KEIN Superbebras-Hintergrund. Welches?**
