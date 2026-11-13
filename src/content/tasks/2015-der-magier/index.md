---
short: 1kuD
title: Der Magier
summary: Der Magier verwandelt Kleeblätter in Münzen, Edelsteine und Kronen. Wie viele Kleeblätter braucht er für ein Kätzchen?
grades:
  "11-13": medium
gi:
  content: [information-data, algorithms]
  process: [modelling, representing]
topics: [modelling, graphs]
methods: []
mascot: beaver
interaction:
  format: input
  props:
    kind: number
    suffix: Kleeblätter
source:
  type: original
  work: Informatik-Biber 2015
  year: 2015
  page: 26
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2015/Biberheft2015-mit-Loesungen.pdf
  country: RU
  license: CC BY-SA 3.0
---
Der Magier kann Dinge verwandeln. Bei jeder Verwandlung verschwinden ein oder mehrere Dinge und etwas Neues wird erschaffen. Der Magier beherrscht vier Verwandlungen:

- Aus zwei Kleeblättern wird eine Münze erschaffen.
- Aus einer Münze und zwei Kleeblättern wird ein Edelstein erschaffen.
- Aus einem Edelstein und einem Kleeblatt wird eine Krone erschaffen.
- Aus einer Münze, einem Edelstein und einer Krone wird ein Kätzchen erschaffen.

![Gerichteter Graph: Vom Kleeblatt führen zwei Pfeile zur Münze, zwei zum Edelstein und einer zur Krone. Von der Münze führen Pfeile zum Edelstein und zum Kätzchen, vom Edelstein zur Krone und zum Kätzchen, von der Krone zum Kätzchen.](./img/graph.png)

**Wie viele Kleeblätter verbraucht der Magier, um ein Kätzchen zu erschaffen?**
