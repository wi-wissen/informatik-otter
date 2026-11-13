---
short: c7G8
title: Baumstammbilder
summary: Aus einem Baumstamm wird Schritt für Schritt ein Muster. Welches Bild gehörte zum ersten Schritt?
grades:
  "7-8": hard
  "9-10": medium
  "11-13": easy
gi:
  content: [algorithms]
  process: [reasoning, modelling]
topics: [recursion]
methods: [recursion]
mascot: beaver
interaction:
  format: choice
  props:
    columns: 2
    options:
      - { id: a, image: ./img/a.png, alt: "Antwort A: Zickzack aus vier Stämmen, erst nach unten, dann nach oben, dann nach unten" }
      - { id: b, image: ./img/b.png, alt: "Antwort B: Zwei Stämme schräg nach unten, dann zwei waagerechte Stämme, dann schräg nach oben" }
      - { id: c, image: ./img/c.png, alt: "Antwort C: Zickzack aus vier gleich langen Stämmen: runter, hoch, runter, hoch" }
      - { id: d, image: ./img/d.png, alt: "Antwort D: Ein Stamm waagerecht, dann runter, waagerecht, hoch, waagerecht" }
source:
  type: original
  work: Informatik-Biber 2014
  year: 2014
  page: 6
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2014/Biberheft2014-mit-Loesungen.pdf
  license: CC BY-NC-SA 3.0
---
Wenn die Biber Baumstämme zerteilen, legen sie die Teile auf eine besonders kunstvolle Art aus. Am Anfang liegt nur ein einfacher großer Baumstamm da. Der wird dann auf eine bestimmte Art durch kürzere Baumstämme ersetzt. Diese kürzeren Baumstämme werden wiederum auf dieselbe Art durch noch kürzere Baumstämme ersetzt.

Hier sieht man drei verschiedene Beispiele:

![Drei Beispiele: Anfang, nach dem ersten und nach dem zweiten Ersetzen](./img/examples.png)

Wenn es nach dem zweiten Ersetzen so aussieht:

![Das Bild nach dem zweiten Ersetzen](./img/start.png)

**Wie sah es nach dem ersten Ersetzen aus?**
