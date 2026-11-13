---
short: VN2u
title: Leiterspiel
summary: Mit Leitern und Schlangen zum Ziel auf Feld 49. Wie viele Runden brauchst du mindestens von Feld 19 aus?
grades:
  "9-10": medium
  "11-13": easy
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [graphs, optimization]
methods: [bfs, dijkstra]
mascot: beaver
interaction:
  format: choice
  props:
    columns: 4
    options:
      - { id: a, label: "2 Runden" }
      - { id: b, label: "3 Runden" }
      - { id: c, label: "4 Runden" }
      - { id: d, label: "5 Runden" }
source:
  type: original
  work: Informatik-Biber 2020
  year: 2020
  page: 36
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2020/Biberheft_2020_final_mit_Loesungen.pdf
  country: IN
  license: CC BY-SA 4.0
---
Beim Leiterspiel starten alle Spieler auf Feld 1. Wer zuerst Feld 49 erreicht, gewinnt.

In jeder Runde würfelt man eine Zahl zwischen 1 und 6 und zieht mit seiner Figur entsprechende viele Felder vor. Endet man dabei auf einem Feld mit dem Kopf einer Schlange, schlittert man hinab bis zum Feld mit ihrem Schwanzende. Endet man aber am Fuß einer Leiter, darf man diese sofort ganz hinaufklettern.

![Das Spielbrett mit 49 Feldern, Leitern und Schlangen](./img/board.png)

Ein Beispiel: Du stehst auf Feld 26 und würfelst eine 3. Du ziehst also auf Feld 29 und darfst über die Leiter sofort zum Feld 42 vorrücken. In der nächsten Runde würfelst du eine 5, landest auf dem Schlangenkopf des Feldes 47 und musst sofort zurück zum Feld 32.

Deine Figur steht auf Feld 19.

**Wie viele Runden brauchst du mindestens noch, um das Feld 49 zu erreichen?**
