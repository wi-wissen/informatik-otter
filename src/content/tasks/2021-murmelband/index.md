---
short: T4Bg
title: Murmelband
summary: Ein Biber läuft über ein Band mit Murmeln und trägt sie nach einer festen Regel weiter. Wo liegen sie am Ende?
grades:
  "9-10": hard
  "11-13": medium
gi:
  content: [languages-automata]
  process: [modelling, reasoning]
topics: [automata]
methods: [turing-machine]
mascot: beaver
interaction:
  format: choice
  props:
    columns: 1
    options:
      - { id: a, image: ./img/opt-a.png, alt: "Murmelband A: Murmeln auf Feld 3, 5 und 6 von 8" }
      - { id: b, image: ./img/opt-b.png, alt: "Murmelband B: Murmeln auf Feld 4, 5 und 6 von 8" }
      - { id: c, image: ./img/opt-c.png, alt: "Murmelband C: Murmeln auf Feld 4, 5 und 7 von 8" }
      - { id: d, image: ./img/opt-d.png, alt: "Murmelband D: Murmeln auf Feld 5, 6 und 7 von 8" }
      - { id: e, image: ./img/opt-e.png, alt: "Murmelband E: Murmeln auf Feld 4, 6 und 7 von 8" }
source:
  type: original
  work: Informatik-Biber 2021
  year: 2021
  page: 40
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2021/Biberheft_2021_mit_Loesungen_web.pdf
  country: CH
  license: CC BY-SA 4.0
---
Der Biber spielt gerne mit dem Murmelband. Das Band hat Felder, und darauf können Murmeln liegen, und zwar höchstens eine Murmel pro Feld. Der Biber überquert das Band von links nach rechts. Dabei trägt er manche Murmeln auf andere Felder. Er kann aber immer nur eine Murmel tragen. Wenn der Biber auf ein Feld mit einer Murmel kommt, …

… und keine Murmel trägt, dann hebt er die Murmel auf, trägt sie zum nächsten freien Feld und legt sie dort ab.

![Der Biber steht auf einem Feld mit Murmel, nimmt sie auf, trägt sie zum nächsten freien Feld und legt sie dort ab.](./img/rule1.png)

… und schon eine Murmel trägt, dann trägt er sie weiter zum nächsten freien Feld und legt sie dort ab.

![Der Biber trägt eine Murmel, kommt auf ein Feld mit einer weiteren Murmel, legt seine Murmel auf dem nächsten freien Feld ab und trägt die andere weiter.](./img/rule2.png)

Heute liegen drei Murmeln so auf dem Murmelband:

![Der Biber steht links vom Band. Das Band hat acht Felder; drei Murmeln liegen auf dem dritten, vierten und sechsten Feld.](./img/start.png)

**Wie liegen die Murmeln, nachdem der Biber das Murmelband überquert hat?**
