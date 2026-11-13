---
short: 2hQh
title: Stickmuster
summary: Eine programmierbare Stickmaschine wiederholt ein Programm. Welches Programm stickt das gezeigte Muster?
grades:
  "7-8": easy
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [programming]
methods: [sequence, loop]
mascot: beaver
interaction:
  format: choice
  props:
    columns: 1
    options:
      - { id: a, image: ./img/prog-a.png, alt: "Programm A: X, X, X, zurück, Plus, X, Plus, zurück, X, X, X" }
      - { id: b, image: ./img/prog-b.png, alt: "Programm B: X, X, X, zurück, Plus, X, X" }
      - { id: c, image: ./img/prog-c.png, alt: "Programm C: X, X, X, zurück, Plus, X, Plus, zurück, X" }
      - { id: d, image: ./img/prog-d.png, alt: "Programm D: Plus, zurück, X, Plus, zurück, X, X, Plus, zurück, X, X" }
source:
  type: original
  work: Informatik-Biber 2022
  year: 2022
  page: 54
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2022/Biberheft_2022_mit_Loesungen_web.pdf
  country: SK
  license: CC BY-SA 4.0
---
Lana besitzt eine programmierbare Stickmaschine.

Die Maschine kann diese zwei Zeichen sticken: ein Plus (**+**) oder ein Kreuz (**X**). Außerdem kann sie aus diesen Zeichen ein drittes Zeichen zusammensetzen, einen Stern (**✳**). Dazu muss der Stoff zwischen **X** und **+** (oder umgekehrt) um ein Zeichen zurückgeschoben werden.

Lana programmiert die Stickmaschine mit diesen drei Tasten:

![Drei Tasten: Plus-Taste, X-Taste und Pfeil-Taste. Die Plus-Taste stickt ein Plus, die X-Taste stickt ein X, die Pfeil-Taste schiebt den Stoff um ein Zeichen zurück](./img/keys.png)

Die Stickmaschine führt ein Programm so oft hintereinander aus, wie Lana will. So hat Lana dieses Muster

![Muster aus Plus, Stern und X; die Folge Plus, Stern, X wiederholt sich](./img/example-pattern.png)

mit diesem Programm erstellt:

![Programm: Plus, Plus, Pfeil, X, X](./img/example-program.png)

Mit welchem Programm hat Lana nun dieses Muster erstellt?

![Muster aus X und Sternen; die Folge X, X, Stern, X, Stern wiederholt sich](./img/target.png)

**Welches Programm passt?**
