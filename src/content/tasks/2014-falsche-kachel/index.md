---
short: dYv9
title: Falsche Kachel
summary: Ein Kachelplan mit Kontrollfeldern enthält einen Fehler. Welche Kachel ist falsch?
grades:
  "9-10": easy
  "11-13": easy
gi:
  content: [information-data]
  process: [reasoning, modelling]
topics: [error-detection]
methods: [parity-bit]
mascot: beaver
interaction:
  format: choice
  props:
    options:
      - { id: a, label: "Die Kachel A; sie muss schwarz sein." }
      - { id: b, label: "Die Kachel B; sie muss weiß sein." }
      - { id: c, label: "Die Kachel C; sie muss weiß sein." }
      - { id: d, label: "Die Kachel D; sie muss schwarz sein." }
source:
  type: original
  work: Informatik-Biber 2014
  year: 2014
  page: 21
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2014/Biberheft2014-mit-Loesungen.pdf
  license: CC BY-NC-SA 3.0
---
Der Platz vor dem Computer-Clubhaus soll einen neuen Belag aus 9 mal 9 schwarzen und weißen Kacheln bekommen. Ein Designer entwirft den Plan. Er fügt dem Plan rechts und unten je einen Streifen von Kontrollfeldern hinzu.

Wenn die Anzahl der schwarzen Kacheln in einer Zeile gerade ist, dann ist das Kontrollfeld rechts daneben schwarz. Sonst ist es weiß.

Wenn die Anzahl der schwarzen Kacheln in einer Spalte gerade ist, dann ist das Kontrollfeld darunter schwarz. Sonst ist es weiß.

![Der 9 mal 9 große Plan mit den Kacheln A, B, C und D, rechts der Streifen der Zeilen-Kontrollfelder, unten der Streifen der Spalten-Kontrollfelder](./img/plan.png)

Leider hat sich ein Fehler eingeschlichen. Die Kontrollfelder sind in Ordnung, aber eine Kachel ist falsch.

**Welche Kachel ist falsch?**
