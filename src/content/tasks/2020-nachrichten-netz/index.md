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
  format: graph-pick
  props:
    pick: nodes
    width: 618
    height: 416
    background: ./img/network.png
    hideNodes: true
    nodeRadius: 30
    nodes:
      - { id: l, x: 185, y: 40, label: "Biber L" }
      - { id: i, x: 385, y: 38, label: "Biber I" }
      - { id: d, x: 527, y: 78, label: "Biber D" }
      - { id: g, x: 90, y: 112, label: "Biber G" }
      - { id: j, x: 243, y: 145, label: "Biber J" }
      - { id: b, x: 388, y: 177, label: "Biber B" }
      - { id: k, x: 518, y: 222, label: "Biber K" }
      - { id: f, x: 90, y: 245, label: "Biber F" }
      - { id: e, x: 243, y: 298, label: "Biber E" }
      - { id: a, x: 410, y: 298, label: "Biber A" }
      - { id: c, x: 170, y: 327, label: "Biber C" }
      - { id: h, x: 493, y: 328, label: "Biber H" }
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

Sie haben dazu ein Nachrichten-Netz (siehe Bild unten). Im Netz gibt es Nachbarn; sie sind durch eine Leitung miteinander verbunden. Zum Beispiel hat Biber F die Nachbarn G und J.


Die Nachrichten werden in Runden verbreitet: In einer Runde leitet jeder Biber, der eine Nachricht hat, diese gleichzeitig an alle seine Netz-Nachbarn weiter.

**Welcher Biber kann eine Nachricht in der kleinsten Anzahl Runden an alle anderen Biber im Netz verbreiten?** Klicke auf den Biber.
