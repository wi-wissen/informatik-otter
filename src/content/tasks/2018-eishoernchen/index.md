---
short: Fm9t
title: Eishörnchen
summary: In der Eisdiele „Al Goritmo“ folgen die Kugeln einer strengen Vorschrift. Welches Hörnchen kann unmöglich von dort stammen?
grades:
  "5-6": medium
  "7-8": easy
gi:
  content: [algorithms]
  process: [reasoning, modelling]
topics: [programming, formal-languages]
methods: [loop]
mascot: beaver
interaction:
  format: choice
  props:
    columns: 4
    options:
      - { id: a, image: ./img/cone-a.png, alt: Eishörnchen A }
      - { id: b, image: ./img/cone-b.png, alt: Eishörnchen B }
      - { id: c, image: ./img/cone-c.png, alt: Eishörnchen C }
      - { id: d, image: ./img/cone-d.png, alt: Eishörnchen D }
source:
  type: original
  work: Informatik-Biber 2018
  year: 2018
  page: 27
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2018/Biberheft2018-mit-Loesungen.pdf
  country: IE
  license: CC BY-SA 4.0
---
Die Eisdiele „Al Goritmo“ bietet diese vier Eissorten an:

![Vier Eissorten: rosa mit Sternen, gelb mit Spirale, violett mit Punkten und türkis mit Blattmuster](./img/flavors.png)

Bei Al Goritmo werden die Eishörnchen streng nach dieser Vorschrift hergestellt:

- Schritt 0: Nimm ein leeres Hörnchen.
- Schritt 1: Wähle zufällig eine Eissorte und gib zwei Kugeln dieser Eissorte hinzu.
- Schritt 2: Gib eine Kugel mit irgendeiner anderen Eissorte als in Schritt 1 hinzu.
- Schritt 3: Wenn die gewünschte Kugelzahl erreicht ist, höre auf. Ansonsten mache mit Schritt 1 weiter.

Unten siehst du einige Eishörnchen mit ihren unteren Kugeln.

**Welches Eishörnchen stammt mit Sicherheit NICHT von Al Goritmo?**
