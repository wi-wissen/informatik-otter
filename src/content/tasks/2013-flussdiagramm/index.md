---
short: N5m5
title: Flussdiagramm
summary: Ein Flussdiagramm halbiert, erhöht und teilt einen Zahlenwert. Mit welcher Zahl endet es, wenn man mit 18 startet?
grades:
  "7-8": hard
  "9-10": hard
gi:
  content: [algorithms]
  process: [reasoning, representing]
topics: [programming]
methods: [conditional, loop]
mascot: beaver
interaction:
  format: input
  props:
    kind: number
source:
  type: original
  work: Informatik-Biber 2013
  year: 2013
  page: 16
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2013/Biberheft2013-mit-Loesungen.pdf
  license: CC BY-NC-SA 3.0
---
In der Schule lernen die Biber, Flussdiagramme zu benutzen. Dabei fließt kein Wasser, sondern mögliche Handlungsfolgen werden beschrieben.

In diesem Flussdiagramm wird in den Handlungen ein Zahlenwert (ZW) verändert. Die Möglichkeiten hängen von Fragen nach den Eigenschaften des Zahlenwerts ab.

![Flussdiagramm. Start mit ZW. Frage: Ist ZW ohne Rest durch 2 teilbar? Ja: Teile ZW durch 2, dann weiter bei der Frage nach Teilbarkeit durch 3. Nein: Erhöhe ZW um 1, dann ebenfalls die Frage nach Teilbarkeit durch 3. Frage: Ist ZW ohne Rest durch 3 teilbar? Ja: Teile ZW durch 3 und zurück zur ersten Frage. Nein: Frage: Ist ZW kleiner als 3? Ja: Nenne ZW. Nein: zurück zur ersten Frage.](./img/flow.png)

**Wenn man mit dem Zahlenwert 18 startet, welcher Zahlenwert wird am Ende genannt?**
