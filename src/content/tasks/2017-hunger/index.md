---
short: 7oXS
title: Hunger!
summary: Zehn hungrige Biber müssen durch enge Gänge zum Futterraum. Wie schnell können alle dort sein?
grades:
  "9-10": hard
  "11-13": medium
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [graphs, optimization]
methods: [max-flow, scheduling]
mascot: beaver
interaction:
  format: input
  props:
    kind: number
    suffix: Minuten
source:
  type: original
  work: Informatik-Biber 2017
  year: 2017
  page: 27
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2017/Biberheft2017-mit-Loesungen.pdf
  country: CH
  license: CC BY-SA 4.0
---
10 Biber befinden sich in Raum A ihrer Burg. Sie wollen möglichst rasch in den Raum F zum Fressen kommen.

![Querschnitt durch die Biberburg mit den Räumen A (oben, hier sind die Biber), B (rechts), C (links) und F (unten, mit dem Futter). Von A nach B führen 4 Gänge, von A nach C 1 Gang, von B nach C 2 Gänge, von B nach F 1 Gang und von C nach F 3 Gänge.](./img/burrow.png)

Ein Biber braucht 1 Minute, um durch einen Gang zu laufen. Leider kann durch jeden Gang immer nur ein Biber gleichzeitig laufen. Es können also nicht mehrere Biber direkt hintereinander durch einen Gang laufen. In den Räumen A, B, C und F ist genug Platz für alle Biber, und das Durchqueren eines Raums kostet keine Zeit.

**Nach wie vielen Minuten können alle 10 Biber in Raum F sein? Gib die kürzest mögliche Zeit an!**
