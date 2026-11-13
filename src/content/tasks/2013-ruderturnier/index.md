---
short: 1gPf
title: Ruderturnier
summary: Vier Boote für 8, 4, 2 und 1 Biber, und dreizehn Biber wollen rudern. Welche Zahl schreibt der Trainer auf?
grades:
  "7-8": medium
  "9-10": easy
gi:
  content: [information-data]
  process: [modelling, representing]
topics: [encoding]
methods: [binary-numbers]
mascot: beaver
interaction:
  format: choice
  props:
    columns: 4
    options:
      - { id: a, label: "0111" }
      - { id: b, label: "1011" }
      - { id: c, label: "1101" }
      - { id: d, label: "1110" }
source:
  type: original
  work: Informatik-Biber 2013
  year: 2013
  page: 40
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2013/Biberheft2013-mit-Loesungen.pdf
  license: CC BY-NC-SA 3.0
---
Einige Biber möchten an einem Ruderturnier teilnehmen. Sie haben vier Boote, eins für jede Bootsklasse: eins für acht Biber, eins für vier Biber, eins für zwei Biber und eins für einen einzelnen Biber.

![Vier Boote: ein rotes für acht Biber, ein oranges für vier Biber, ein grünes für zwei Biber und ein blaues für einen Biber](./img/boats.png)

Die Regeln des Ruderturniers legen fest, dass jeder Biber nur in einer Bootsklasse teilnehmen darf.

Der Trainer der Biber muss nun für jedes Boot aufschreiben, ob seine Biber in dieser Bootsklasse teilnehmen (1) oder nicht (0).

Er fängt mit dem größten Boot an, dann mit dem zweitgrößten, usw. Wenn zum Beispiel zehn Biber teilnehmen möchten, würde er 1010 aufschreiben.

Diesmal sind es dreizehn Biber, die teilnehmen möchten.

**Was muss der Trainer aufschreiben?**
