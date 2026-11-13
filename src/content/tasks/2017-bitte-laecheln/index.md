---
short: Sf58
title: Bitte lächeln!
summary: Eine App prüft mit einem Lächelmuster, ob ein Gesicht lächelt. Bei welchem Gesicht schlägt sie an?
grades:
  "3-4": medium
  "5-6": easy
gi:
  content: [systems]
  process: [reasoning, modelling]
topics: [ai]
methods: []
mascot: beaver
interaction:
  format: choice
  props:
    columns: 4
    options:
      - { id: a, image: ./img/a.png, alt: "Gesicht A: zwei Punkte als Augen, ein schräg nach rechts oben verlaufender flacher Strich als Mund" }
      - { id: b, image: ./img/b.png, alt: "Gesicht B: zwei dicht beieinander liegende Augenpunkte, ein kleiner Bogen als Mund" }
      - { id: c, image: ./img/c.png, alt: "Gesicht C: zwei Punkte als Augen, ein kurzer Wellenstrich als Mund" }
      - { id: d, image: ./img/d.png, alt: "Gesicht D: zwei Punkte als Augen, ein großer lächelnder Bogen als Mund" }
source:
  type: original
  work: Informatik-Biber 2017
  year: 2017
  page: 15
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2017/Biberheft2017-mit-Loesungen.pdf
  country: DE
  license: CC BY-SA 4.0
---
Eine App soll entscheiden, ob ein gezeichnetes Gesicht lächelt. Sie benutzt dazu ein „Lächelmuster“ mit Bereichen für Augen und Mund. Ein Gesicht lächelt, wenn Augen und Mund ins Lächelmuster passen: Augen und Mund müssen komplett in den Bereichen des Musters liegen.

![Links: Lächeln, denn Augen und Mund passen ins Lächelmuster (zwei runde Augenbereiche, ein Mundbereich in Form einer Schale). Rechts: Kein Lächeln, denn der Mund passt nicht ins Lächelmuster.](./img/pattern.png)

Hier sind vier Gesichter.

**Bei welchem Gesicht entscheidet die App, dass es lächelt?**
