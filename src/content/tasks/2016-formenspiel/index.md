---
short: s7At
title: Formenspiel
summary: Alice ersetzt Formen durch Formenreihen. Aus welchen Ersetzungsregeln kann die gezeigte Formenreihe entstanden sein?
grades:
  "11-13": hard
gi:
  content: [languages-automata]
  process: [modelling, reasoning]
topics: [formal-languages]
methods: []
mascot: beaver
interaction:
  format: choice
  props:
    columns: 4
    options:
      - { id: a, label: A, image: ./img/rules-a.png, alt: "Regeln A: Quadrat wird zu Quadrat, Kreis, Kreis; Dreieck wird zu Dreieck, Quadrat; Kreis wird zu Quadrat, Dreieck" }
      - { id: b, label: B, image: ./img/rules-b.png, alt: "Regeln B: Quadrat wird zu Dreieck, Quadrat, Quadrat; Dreieck wird zu Kreis; Kreis wird zu Dreieck, Dreieck" }
      - { id: c, label: C, image: ./img/rules-c.png, alt: "Regeln C: Dreieck wird zu Dreieck, Dreieck; Quadrat wird zu Kreis, Kreis; Kreis wird zu Dreieck, Quadrat, Dreieck" }
      - { id: d, label: D, image: ./img/rules-d.png, alt: "Regeln D: Dreieck wird zu Quadrat, Kreis; Quadrat wird zu Dreieck, Dreieck, Dreieck; Kreis wird zu Quadrat, Dreieck" }
source:
  type: original
  work: Informatik-Biber 2016
  year: 2016
  page: 28
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2016/Biberheft2016-mit-Loesungen.pdf
  country: CA
  license: CC BY-SA 3.0
---
Alice spielt mit geometrischen Formen. In einer Reihe von Formen ersetzt sie nach und nach einzelne Formen durch eine Reihe anderer Formen.

Für jede Spielrunde überlegt sich Alice einige Ersetzungsregeln. Bei jeder Ersetzung wendet sie die Regeln so oft wie möglich an. Sie beginnt jede Spielrunde mit einer einzigen Form.

In einer ersten Spielrunde beginnt Alice mit einem Quadrat und hat sich diese Ersetzungsregeln überlegt:

![Regeln: Ein Quadrat wird durch zwei Dreiecke ersetzt; ein Dreieck wird durch Quadrat, Dreieck, Quadrat ersetzt](./img/rules.png)

Mit drei Ersetzungen produziert sie die Formenreihe rechts:

![Aus einem Quadrat entstehen nacheinander: zwei Dreiecke; Quadrat, Dreieck, Quadrat, Quadrat, Dreieck, Quadrat; und eine Reihe aus 14 Formen](./img/three-steps.png)

In einer anderen Spielrunde produziert Alice diese Formenreihe:

![Formenreihe: Dreieck, Quadrat, Quadrat, Kreis, Kreis, Quadrat, Kreis, Kreis, Quadrat, Dreieck, Quadrat, Dreieck](./img/target.png)

**Welche Ersetzungsregeln hat sie sich für diese Spielrunde überlegt?**
