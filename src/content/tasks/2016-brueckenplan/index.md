---
short: k1tz
title: Brückenplan
summary: Opa Biber will von seiner Burg zu allen anderen Burgen gehen, aber über höchstens zwei Brücken. Zeichne den Brückenplan.
grades:
  "7-8": medium
  "9-10": easy
gi:
  content: [information-data]
  process: [modelling, structuring]
topics: [trees, data-structures]
methods: [binary-tree]
mascot: beaver
interaction:
  format: custom
  props:
    root: r
    nodes:
      - { id: r, x: 76, y: 11 }
      - { id: a, x: 10, y: 49 }
      - { id: b, x: 115, y: 70 }
      - { id: c, x: 51, y: 88 }
      - { id: d, x: 10, y: 126 }
      - { id: e, x: 97, y: 138 }
      - { id: f, x: 176, y: 128 }
    fixed: [[r, a]]
source:
  type: original
  work: Informatik-Biber 2016
  year: 2016
  page: 18
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2016/Biberheft2016-mit-Loesungen.pdf
  country: FR
  license: CC BY-SA 3.0
---
Der Biber-Opa ist ein wenig wasserscheu geworden. Er möchte von seiner Burg aus zu allen anderen Burgen der Biber-Familie über Brücken gehen können. Die Biber meinen es gut mit Opa und wollen beim Brückenbauen diese beiden Bedingungen beachten:

- Opa soll von seiner Burg aus höchstens über zwei Brücken gehen müssen.
- Von jeder Burg aus sollen höchstens zwei Brücken weiterführen.

Die Biber beginnen mit einem Brückenplan. Sie zeichnen alle Burgen als Kreise. Opas Burg ist ein roter Kreis. Eine erste Brücke von Opas Burg aus zeichnen sie ein. Aber dann wissen sie nicht mehr weiter.

**Vervollständige den Plan so, dass er beide Bedingungen erfüllt.**

Dazu gibt es mehrere richtige Möglichkeiten. Auf jeden Fall werden fünf weitere Brücken benötigt.
