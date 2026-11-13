---
short: f2vA
title: Kürzeste Wege
summary: Von Kreuzung S kennt man nur die kürzesten Entfernungen. Was folgt daraus für den Weg zwischen zwei Kreuzungen?
grades:
  "11-13": hard
gi:
  content: [algorithms]
  process: [reasoning]
topics: [graphs]
methods: [dijkstra]
mascot: beaver
interaction:
  format: choice
  props:
    columns: 1
    options:
      - { id: a, label: Die Länge des kürzesten Weges zwischen diesen Kreuzungen ist genau 8. }
      - { id: b, label: Die Länge des kürzesten Weges zwischen diesen Kreuzungen ist 8 oder weniger. }
      - { id: c, label: Die Länge des kürzesten Weges zwischen diesen Kreuzungen ist 8 oder mehr. }
      - { id: d, label: Über die Länge des kürzesten Weges zwischen diesen Kreuzungen kann man nichts sagen. }
source:
  type: original
  work: Informatik-Biber 2017
  year: 2017
  page: 36
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2017/Biberheft2017-mit-Loesungen.pdf
  country: NL
  license: CC BY-SA 4.0
---
Das Bild stellt ein Netzwerk aus Einbahnstraßen (Pfeile) und Kreuzungen (Kreise) dar. Bis auf Kreuzung S ist jede Kreuzung mit einer Zahl markiert. Die Zahl gibt die Länge des kürzesten Weges von S zu dieser Kreuzung an.

![Netzwerk mit Einbahnstraßen: Von S führen Pfeile zu den Kreuzungen 4, 3 und 5. Von 4 und von 3 führt je ein Pfeil zu 7, von 3 und von 5 je einer zu 6. Von 7 und von 6 führt je ein Pfeil zu 11. Die Kreuzungen 3 und 11 haben einen starken Rand.](./img/network.png)

Betrachte die beiden mit starkem Rand abgebildeten Kreuzungen (3 und 11).

**Welche der folgenden Aussagen über diese beiden Kreuzungen ist sicher wahr?**
