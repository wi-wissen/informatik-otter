---
short: ss6U
title: Zahlenmaschine
summary: Vier Zahlen wandern durch fünf Vergleichsschalter. Was macht die Maschine mit ihnen?
grades:
  "5-6": medium
  "7-8": easy
gi:
  content: [algorithms]
  process: [reasoning, modelling]
topics: [sorting]
methods: [sorting-network]
mascot: beaver
interaction:
  format: choice
  props:
    options:
      - { id: a, label: "Sie gibt die Zahlen in unveränderter Reihenfolge aus. Im Beispiel: 3, 4, 2, 1" }
      - { id: b, label: "Sie sortiert die Zahlen in absteigender Reihenfolge. Im Beispiel: 4, 3, 2, 1" }
      - { id: c, label: "Sie gibt die Zahlen in umgekehrter Reihenfolge aus. Im Beispiel: 1, 2, 4, 3" }
      - { id: d, label: "Sie sortiert die Zahlen in aufsteigender Reihenfolge. Im Beispiel: 1, 2, 3, 4" }
source:
  type: original
  work: Informatik-Biber 2025
  year: 2025
  page: 78
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2025/Biberheft_2025_web_komplett.pdf
  country: DE
  license: CC BY-SA 4.0
---
Die Biber haben eine Zahlenmaschine.

Vier Zahlen werden unten in die Eingabefelder eingegeben, zum Beispiel 3, 4, 2 und 1.

Entlang von Pfeilen und Schaltern (gelbe Kästchen mit „<“) wandern die Zahlen durch die Maschine nach oben bis zu den Ausgabefeldern.

![Die Zahlenmaschine mit den Eingaben 3, 4, 2, 1 unten. Die Zahlen laufen durch fünf Schalter nach oben zu vier leeren Ausgabefeldern. Die Schalter sind in drei Stufen angeordnet: unten zwei, in der Mitte zwei, oben einer. Von den unteren Schaltern führen Pfeile gekreuzt zu den mittleren Schaltern; von den mittleren führen Pfeile an den linken und rechten Ausgang und zum oberen Schalter, der die beiden mittleren Ausgänge belegt](./img/machine.png)

Jeder der fünf Schalter vergleicht die beiden eingehenden Zahlen und leitet …

- … die kleinere Zahl nach links und
- … die größere Zahl nach rechts weiter.

Etwa so:

![Ein Schalter, in den von unten 3 und 2 laufen. Nach oben geht die 2 nach links und die 3 nach rechts](./img/switch.png)

**Welche Aufgabe führt die Maschine aus?**
