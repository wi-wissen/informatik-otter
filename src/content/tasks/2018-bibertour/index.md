---
short: a9FH
title: Bibertour
summary: Livia besucht fünf Freunde mit dem Bus und will dabei möglichst wenig Fahrgeld ausgeben. Welche Rundreise ist die billigste?
grades:
  "7-8": hard
  "9-10": medium
  "11-13": easy
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [graphs, optimization]
methods: [brute-force, hamilton-path]
mascot: beaver
interaction:
  format: sort-list
  props:
    direction: horizontal
    startLabel: Bau
    endLabel: Bau
    items:
      - { id: a, label: A }
      - { id: b, label: B }
      - { id: c, label: C }
      - { id: d, label: D }
      - { id: e, label: E }
source:
  type: original
  work: Informatik-Biber 2018
  year: 2018
  page: 17
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2018/Biberheft2018-mit-Loesungen.pdf
  country: CH
  license: CC BY-SA 4.0
---
Biber Livia will ihre Freunde mit dem Bus besuchen. Die Freunde leben in den Dörfern A, B, C, D und E. Zwischen den Dörfern gibt es Busverbindungen. Das Bild zeigt, wie viel die einfache Fahrt jeweils kostet. Livia plant eine Bibertour: Sie startet an ihrem Bau, besucht jedes Dorf genau einmal und kehrt dann zu ihrem Bau zurück.

![Livias Bau und die Dörfer A bis E mit Busverbindungen; die Münzen an den Linien zeigen die Kosten: Bau–A 3, Bau–B 3, Bau–C 3, Bau–D 2, A–C 1, A–D 1, A–E 2, B–C 1, B–E 1, C–D 1, C–E 1](./img/map.png)

Zum Beispiel ist das eine Bibertour: Bau → B → E → A → D → C → Bau. Diese Bibertour kostet 11 Bibertaler.

**Finde eine Bibertour, die so wenig wie möglich kostet.**

Bringe die Dorf-Buchstaben A bis E in die richtige Reihenfolge, um die Bibertour zu beschreiben. Gibt es mehrere Bibertouren, die gleich wenig kosten, kannst du irgendeine davon beschreiben.
