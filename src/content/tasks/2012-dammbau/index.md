---
short: 8pYP
title: Dammbau
summary: Drei Biber tauschen auf Anweisung des Chefs ihre Aufgaben. Welche Anweisungen führen zum gewünschten Ergebnis?
grades:
  "5-6": hard
  "7-8": medium
  "9-10": easy
gi:
  content: [systems]
  process: [modelling, reasoning]
topics: [computer-architecture, modelling]
methods: []
mascot: beaver
interaction:
  format: choice
  props:
    options:
      - { id: a, label: "pausieren → bauen ; essen → tragen ; bauen → essen" }
      - { id: b, label: "bauen → tragen ; essen → bauen ; pausieren → essen" }
      - { id: c, label: "essen → tragen ; bauen → essen ; pausieren → bauen" }
      - { id: d, label: "pausieren → tragen ; bauen → pausieren ; essen → bauen ; pausieren → essen" }
source:
  type: original
  work: Informatik-Biber 2012
  year: 2012
  page: 10
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2012/Biberheft2012-mit-Loesungen.pdf
  license: CC BY-NC-SA 3.0
---
Drei Biber, mit „a“, „b“ und „c“ auf dem Bauch, bauen einen Damm, angeführt von ihrem Chef. Sie können mit je einer der vier Aufgaben „tragen“, „bauen“, „essen“ und „pausieren“ beschäftigt sein. Immer nur ein Biber kann mit einer dieser Aufgaben beschäftigt sein.

Anfangs sind die Biber mit den folgenden Aufgaben beschäftigt:

![Tragen: Biber a, Bauen: Biber b, Essen: Biber c, Pausieren: keiner](./img/start.png)

Nun gibt der Chef die Anweisung „tragen → pausieren“. Damit meint er, dass der Biber, der gerade am Tragen war, nun pausieren soll. Nach dieser Anweisung sind die Biber mit den folgenden Aufgaben beschäftigt:

![Tragen: keiner, Bauen: Biber b, Essen: Biber c, Pausieren: Biber a](./img/after-first.png)

Der Chef gibt nun einige weitere Anweisungen, die von den Bibern gewissenhaft ausgeführt werden. Danach sind die Biber mit den folgenden Aufgaben beschäftigt:

![Tragen: Biber c, Bauen: Biber a, Essen: Biber b, Pausieren: keiner](./img/goal.png)

**Welche weiteren Anweisungen hat der Chef gegeben?**
