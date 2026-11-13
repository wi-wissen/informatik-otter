---
short: 4nqo
title: Insel-Falle
summary: Ein autonomes Boot fährt nur nach Norden oder Westen. Welche Insel wird ihm zur Falle?
grades:
  "7-8": medium
  "9-10": easy
gi:
  content: [algorithms]
  process: [reasoning, modelling]
topics: [programming, security]
methods: [conditional]
mascot: beaver
interaction:
  format: choice
  props:
    columns: 4
    options:
      - { id: a, label: A, image: ./img/a.png, alt: Insel A }
      - { id: b, label: B, image: ./img/b.png, alt: Insel B }
      - { id: c, label: C, image: ./img/c.png, alt: Insel C }
      - { id: d, label: D, image: ./img/d.png, alt: Insel D }
source:
  type: original
  work: Informatik-Biber 2019
  year: 2019
  page: 17
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2019/Biberheft2019-mit-Loesungen.pdf
  country: DE
  license: CC BY-SA 4.0
---
Ein autonomes Boot fährt vom Südufer des Flusses zum Nordufer. Dabei muss es die Inseln im Fluss umfahren.

Die digitale Landkarte des Boots ist in Quadrate eingeteilt. Das autonome Boot fährt immer von einem Quadrat zum nächsten Quadrat im Norden oder Westen. Es kann nur dann zum nächsten Quadrat fahren, wenn dieses völlig frei und nicht zum Teil von einer Insel belegt ist.

![Eine Landkarte mit Rasterquadraten: Südufer unten, Nordufer oben, dazwischen drei Inseln. Eine gepunktete Linie zeigt den Weg des Boots nach Norden und Westen um die Inseln herum.](./img/map.png)

Das autonome Boot fährt also nach diesen Anweisungen:

![Flussdiagramm. Start. Ist das Nordufer erreicht? Ja: Halt. Nein: Ist das nächste Quadrat im Norden frei? Ja: Fahre ein Quadrat nach Norden, dann zurück zur ersten Frage. Nein: Ist das nächste Quadrat im Westen frei? Ja: Fahre ein Quadrat nach Westen, dann zurück zur ersten Frage. Nein: Halt.](./img/flow.png)

Piraten haben eine künstliche Insel angelegt, als Falle für das autonome Boot. Das heißt: Je nachdem, wie sich das Boot der Insel nähert, kann es passieren, dass es stehen bleibt und nicht weiterfahren kann. Es ist gefangen.

**Welche dieser Inseln ist eine Falle für das autonome Boot?**
