---
short: j18Q
title: Herr Biber kauft ein
summary: Auf einer Karte mit unterschiedlich schnellem Gelände soll Herr Biber den schnellsten Weg zu einem Geschäft finden.
grades:
  "7-8": medium
  "9-10": easy
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [graphs, optimization]
methods: [dynamic-programming]
mascot: beaver
interaction:
  format: choice
  props:
    options:
      - { id: a, label: "auf dem blauen Weg (gestrichelte Linie)" }
      - { id: b, label: "auf dem grünen Weg (durchgezogene Linie)" }
      - { id: c, label: "auf dem schwarzen Weg (kurz gestrichelte Linie)" }
      - { id: d, label: "auf dem roten Weg (lang/kurz gestrichelte Linie)" }
source:
  type: original
  work: Informatik-Biber 2011
  year: 2011
  page: 15
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2011/Biberheft2011-mit-Loesungen.pdf
  license: CC BY-NC-SA 3.0 DE
---
Herr Biber ist oft hungrig. Dann möchte er schnell mit dem Fahrrad in ein Geschäft fahren, um ein paar Nüsse zu kaufen.

Dazu hat er eine besondere Karte. Deren Planquadrate sind auf verschiedene Weise markiert. In einigen sind die Geschäfte eingezeichnet, zu denen Herr Biber fahren kann. Für andere Planquadrate gibt deren Farbe an, wie lange Herr Biber benötigt, um das Quadrat zu durchfahren – wegen des unterschiedlichen Geländes kommt er nicht überall gleich schnell voran.

Hier siehst du die Karte und die Bedeutung der Markierungen:

![Karte aus Planquadraten mit Herrn Biber links, drei Geschäften rechts und vier eingezeichneten Wegen (blau gestrichelt, grün durchgezogen, schwarz kurz gestrichelt, rot lang/kurz gestrichelt)](./img/karte.png)

![Legende: Einkaufswagen-Symbol = ein Geschäft; graues Quadrat = Durchfahrzeit 1 Minute; hellgelbes Quadrat = Durchfahrzeit 2 Minuten; oranges Quadrat = Durchfahrzeit 5 Minuten](./img/legende.png)

**Auf welchem Weg kommt Herr Biber am schnellsten zu einem Geschäft?**
