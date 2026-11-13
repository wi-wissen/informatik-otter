---
short: 8m1e
title: Piratenjagd
summary: Zwei Polizisten jagen einen Piraten auf einem Ring aus sieben Feldern. Kann die Polizei gewinnen?
grades:
  "9-10": hard
  "11-13": hard
gi:
  content: [algorithms]
  process: [reasoning, modelling]
topics: [games, graphs]
methods: [minimax]
mascot: beaver
interaction:
  format: custom
  props: {}
source:
  type: original
  work: Informatik-Biber 2015
  year: 2015
  page: 42
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2015/Biberheft2015-mit-Loesungen.pdf
  country: SI
  license: CC BY-SA 3.0
---
Das Spiel „Piratenjagd“ geht so: „Polizei“ und „Pirat“ ziehen abwechselnd. Ist die Polizei am Zug, muss sich einer der Polizisten auf ein benachbartes, freies Feld bewegen. Der Pirat bewegt sich in einem Zug immer um zwei Felder weiter. Das Spiel ist zu Ende, wenn der Pirat gezwungen ist, sich auf ein Feld zu bewegen, dass von einem Polizisten besetzt ist.

Wenn der Pirat am Zug ist und das Spiel in der abgebildeten Situation ist, hat der Pirat also verloren – und die Polizei hat gewonnen. Die Polizei versucht also, den Piraten in diese Position zu zwingen.

Das Spiel beginnt in der abgebildeten Situation – aber die Polizei ist am Zug.

![Sieben Felder im Kreis: Der Pirat steht oben, ein Polizist links und ein Polizist rechts, jeweils zwei Felder vom Piraten entfernt. Die drei anderen Felder sind frei.](./img/board.png)

**Wenn der Pirat keine Fehler macht, hat dann die Polizei eine Chance zu gewinnen? Wenn ja, nach wie vielen Zügen?** Du kannst selbst Züge machen, um die Möglichkeiten zu probieren.
