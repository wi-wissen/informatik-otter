---
short: jG2r
title: Hotel Comfort
summary: Im Hotel Comfort bekommt jeder Gast das komfortabelste freie Zimmer. In welcher Reihenfolge werden die Zimmer vergeben?
grades:
  "7-8": medium
  "9-10": easy
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [sorting]
methods: [lexicographic-order]
mascot: beaver
interaction:
  format: choice
  props:
    options:
      - { id: a, label: "18, 15, 12, 11, 25, 22, 31, 44, 43, 52" }
      - { id: b, label: "52, 43, 44, 31, 22, 25, 11, 12, 15, 18" }
      - { id: c, label: "11, 31, 12, 22, 52, 43, 44, 15, 25, 18" }
      - { id: d, label: "11, 12, 15, 18, 22, 25, 31, 43, 44, 52" }
source:
  type: original
  work: Informatik-Biber 2014
  year: 2014
  page: 33
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2014/Biberheft2014-mit-Loesungen.pdf
  license: CC BY-NC-SA 3.0
---
Im Hotel Comfort sind die Zimmernummern zweistellig:

- Die erste Ziffer gibt das Stockwerk an, in welchem das Zimmer liegt.
- Die zweite Ziffer gibt an, wie weit das Zimmer vom Aufzug entfernt ist. Die Zimmer sind also in jedem Stockwerk so angeordnet wie hier für den zweiten Stock gezeigt:

![Der zweite Stock: Links der Aufzug, oben am Gang die Zimmer 22, 24, 26, 28, unten die Zimmer 21, 23, 25, 27, 29](./img/floor.png)

Die Gäste im Hotel Comfort sollen sich nur wenig anstrengen. Je näher ein Zimmer am Aufzug ist, desto komfortabler liegt es. Sind zwei Zimmer in verschiedenen Stockwerken gleich weit vom Aufzug entfernt, liegt das Zimmer im niedrigeren Stockwerk komfortabler. Zimmer 32 liegt also komfortabler als Zimmer 15, und Zimmer 22 liegt komfortabler als Zimmer 32.

Im Hotel Comfort gilt die Vorschrift: Ein neuer Gast bekommt stets dasjenige freie Zimmer, das am komfortabelsten liegt.

Folgende zehn Zimmer sind derzeit frei: **12, 25, 11, 43, 22, 15, 18, 31, 44, 52**

Nun kommen nach und nach zehn neue Gäste.

**In welcher Reihenfolge müssen die freien Zimmer vergeben werden?**
