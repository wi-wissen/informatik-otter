---
short: 4gbw
title: Niemals links
summary: Ein Auto darf nie links abbiegen und will möglichst schnell nach Hause. Wie lange braucht es mindestens?
grades:
  "9-10": hard
  "11-13": medium
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [graphs, optimization]
methods: [dijkstra]
mascot: beaver
interaction:
  format: choice
  props:
    options:
      - { id: a, label: 35 Minuten }
      - { id: b, label: 33 Minuten }
      - { id: c, label: 32 Minuten }
      - { id: d, label: 30 Minuten }
source:
  type: original
  work: Informatik-Biber 2013
  year: 2013
  page: 35
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2013/Biberheft2013-mit-Loesungen.pdf
  license: CC BY-NC-SA 3.0
---
Endloser Gegenverkehr – und es ist praktisch unmöglich, bei irgendeiner Kreuzung links abzubiegen.

Will das Auto möglichst schnell nach Hause kommen, muss es eine Strecke fahren, bei der es niemals links abbiegen muss.

Im Bild ist die Dauer in Minuten angegeben, die das Auto für den jeweiligen Streckenabschnitt braucht.

![Straßennetz mit drei waagerechten und vier senkrechten Straßen. An jedem Abschnitt steht die Fahrzeit in Minuten. Das Haus liegt links an der mittleren waagerechten Straße (Abschnitt 3), das Auto unten links am Ende der ersten senkrechten Straße (Abschnitt 5).](./img/map.png)

**Wie lange braucht das Auto mindestens, um nach Hause zu kommen, wenn es niemals links abbiegt?**
