---
short: x7sf
title: Arabot
summary: Ein Roboter folgt Markierungen an den Strecken. Markiere sie so, dass er immer die Ladestation erreicht.
grades:
  "9-10": hard
  "11-13": medium
gi:
  content: [algorithms]
  process: [reasoning, modelling]
topics: [graphs, algorithm-analysis]
methods: []
mascot: beaver
interaction:
  format: custom
  props:
    image: ./img/plan.png
    alt: "Plan mit drei Startpunkten A, B und C, Kreuzungen, einer Ladestation rechts und sechs Strecken mit Fragezeichen"
    states:
      - { id: right, label: "rechts" }
      - { id: left, label: "links" }
    spots:
      - { id: b, x: 18.0, y: 50.7 }
      - { id: c, x: 17.8, y: 86.1 }
      - { id: top, x: 58.6, y: 17.7 }
      - { id: left, x: 48.4, y: 50.7 }
      - { id: right, x: 69.0, y: 50.7 }
      - { id: bottom, x: 59.6, y: 86.1 }
source:
  type: original
  work: Informatik-Biber 2017
  year: 2017
  page: 10
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2017/Biberheft2017-mit-Loesungen.pdf
  country: CZ
  license: CC BY-SA 4.0
---
Arabot ist ein neuer Spiel-Roboter. Er fährt auf einem Plan aus schwarzen Strecken und Kreuzungen (violette Kreise). Ein Plan enthält zudem mindestens einen Startpunkt (grüner Kreis mit Pfeil) und eine Ladestation (roter Kreis).

Jede Strecke muss markiert werden. Die Markierung sagt Arabot, welchen Weg er an der nächsten Kreuzung nehmen soll. Es gibt zwei verschiedene Markierungen:

- **rechts** (grünes Schild): Nimm den am weitesten rechts liegenden Weg!
- **links** (oranges Schild): Nimm den am weitesten links liegenden Weg!

Die Strecken müssen so markiert werden, dass Arabot immer die Ladestation erreicht, egal an welchem Startpunkt er beginnt. Wenn Arabot auf einem Startpunkt landet, schaltet er sich ab.

Janine hat für ihren neuen Arabot einen Plan erstellt mit drei Startpunkten A, B und C. Einige Strecken hat sie bereits markiert.

**Markiere auch alle weiteren Strecken!**
