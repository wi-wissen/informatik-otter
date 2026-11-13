---
short: Zpz8
title: Nachrichten-Netz
summary: Biber leiten Nachrichten an alle Nachbarn weiter. Von welchem Biber aus sind alle in möglichst wenigen Runden informiert?
grades:
  "7-8": hard
  "9-10": medium
  "11-13": easy
gi:
  content: [information-data, algorithms]
  process: [modelling, reasoning]
topics: [graphs, networks]
methods: [bfs]
mascot: beaver
interaction:
  format: choice
  props:
    columns: 6
    options:
      - { id: a, label: "A" }
      - { id: b, label: "B" }
      - { id: c, label: "C" }
      - { id: d, label: "D" }
      - { id: e, label: "E" }
      - { id: f, label: "F" }
      - { id: g, label: "G" }
      - { id: h, label: "H" }
      - { id: i, label: "I" }
      - { id: j, label: "J" }
      - { id: k, label: "K" }
      - { id: l, label: "L" }
source:
  type: original
  work: Informatik-Biber 2020
  year: 2020
  page: 38
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2020/Biberheft_2020_final_mit_Loesungen.pdf
  country: MK
  license: CC BY-SA 4.0
---
Biber verbreiten gerne Nachrichten untereinander.

Sie haben dazu ein Nachrichten-Netz (siehe Bild). Im Netz gibt es Nachbarn; sie sind durch eine Leitung miteinander verbunden. Zum Beispiel hat Biber F die Nachbarn G und J.

![Ein Netz aus zwölf Bibern A bis L, die durch Leitungen verbunden sind](./img/network.png)

Die Nachrichten werden in Runden verbreitet: In einer Runde leitet jeder Biber, der eine Nachricht hat, diese gleichzeitig an alle seine Netz-Nachbarn weiter.

**Welcher Biber kann eine Nachricht in der kleinsten Anzahl Runden an alle anderen Biber im Netz verbreiten?**
