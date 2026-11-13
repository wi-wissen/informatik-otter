---
short: jn6f
title: Flughafen
summary: Ein Arbeiter legt Koffer immer auf den drittnächsten leeren Platz eines Förderbands. Wie sieht es am Ende aus?
grades:
  "7-8": medium
  "9-10": easy
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [algorithm-analysis]
methods: [loop]
mascot: beaver
interaction:
  format: choice
  props:
    columns: 2
    options:
      - { id: a, image: ./img/a.png, alt: "Förderband A" }
      - { id: b, image: ./img/b.png, alt: "Förderband B" }
      - { id: c, image: ./img/c.png, alt: "Förderband C" }
      - { id: d, image: ./img/d.png, alt: "Förderband D" }
source:
  type: original
  work: Informatik-Biber 2013
  year: 2013
  page: 15
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2013/Biberheft2013-mit-Loesungen.pdf
  license: CC BY-NC-SA 3.0
---
Das Förderband des Flughafens hat 8 Plätze und es dreht sich im Kreis (in Pfeilrichtung). Ein Arbeiter legt 5 Koffer der Reihe nach auf das Förderband.

![Ein Arbeiter steht am leeren Förderband mit 8 Plätzen. In einer Reihe warten (von unten nach oben) ein grüner Koffer mit Kreis, ein oranger mit senkrechtem Strich, ein violetter mit Kreuz, ein gelber mit Punkt und ein blauer ohne Zeichen.](./img/belt.png)

Er legt den nächsten Koffer immer auf den drittnächsten leeren Platz. Er lässt also die schon belegten Plätze und auch zwei leere Plätze vorbei drehen.

Der Arbeiter ist fertig, wenn alle 5 Koffer auf dem Förderband liegen.

**Wie schaut das Förderband am Ende seiner Arbeit aus?**
