---
short: b6yY
title: Fliesenmuster
summary: Mit acht Regeln legt Tina Reihe für Reihe ein Fliesenmuster. Welche Regeln lassen unten Schwarz und Weiß abwechseln?
grades:
  "11-13": hard
gi:
  content: [languages-automata]
  process: [modelling, reasoning]
topics: [automata]
methods: [cellular-automaton]
mascot: beaver
interaction:
  format: custom
  props:
    cols: 31
    rows: 16
    target: "1010101010101010101010101010101"
source:
  type: original
  work: Informatik-Biber 2018
  year: 2018
  page: 32
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2018/Biberheft2018-mit-Loesungen.pdf
  country: US
  license: CC BY-SA 4.0
---
Tina möchte schwarze und weiße Fliesen legen, auf einer Fläche von 31 mal 16 Fliesen.

Tina liebt es, Fliesen nach festen Regeln zu verlegen. Für jedes mögliche Muster von drei Fliesen in einer Reihe legt sie fest, ob die Fliese in der Mitte darunter weiß oder schwarz sein soll.

Ein Beispiel:

![Regel: schwarz, weiß, schwarz nebeneinander; darunter in der Mitte eine weiße Fliese](./img/example.png)

Wenn eine schwarze, eine weiße und eine schwarze Fliese nebeneinander liegen, soll die Fliese in der Mitte darunter weiß sein.

Damit sie ihre Regeln auch am Rand der Fläche anwenden kann, tut Tina so, als lägen außen um die Fläche weiße Fliesen.

In die oberste Reihe legt Tina genau eine schwarze Fliese in die Mitte. In der untersten Reihe sollen sich schwarze und weiße Fliesen schön abwechseln:

![Unterste Reihe: 31 Fliesen, abwechselnd schwarz und weiß, erste und letzte sind schwarz](./img/target.png)

**Wie müssen Tinas Regeln aussehen, damit das klappt?**

Klicke in die unteren Fliesen der acht Regeln, um sie auf weiß oder schwarz zu setzen. Es wird sofort angezeigt, wie eine Regeländerung sich auswirkt.
