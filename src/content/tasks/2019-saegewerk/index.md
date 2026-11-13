---
short: 2hcw
title: Sägewerk
summary: Holzstücke rollen durch Weichen, Säge und Kameras. Wie viele Stücke zählen die Kameras, wenn drei Stämme verarbeitet sind?
grades:
  "9-10": hard
  "11-13": hard
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [programming]
methods: [conditional, loop]
mascot: beaver
interaction:
  format: choice
  props:
    columns: 2
    options:
      - { id: a, label: "Kamera 1: 3 Stücke, Kamera 2: 1 Stück" }
      - { id: b, label: "Kamera 1: 1 Stück, Kamera 2: 3 Stücke" }
      - { id: c, label: "Kamera 1: 2 Stück, Kamera 2: 2 Stück" }
      - { id: d, label: "Kamera 1: 4 Stücke, Kamera 2: 0 Stücke" }
source:
  type: original
  work: Informatik-Biber 2019
  year: 2019
  page: 39
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2019/Biberheft2019-mit-Loesungen.pdf
  country: BE
  license: CC BY-SA 4.0
---
Das Sägewerk verarbeitet Holzstücke. Verladen und ausgeliefert werden nur Stücke zwischen 60 cm und 160 cm Länge. Das funktioniert so wie im Bild gezeigt:

- Bei **START** werden die Stücke angeliefert.
- Bei **Weiche A** werden Stücke kürzer als 60 cm aussortiert.
- Bei **Weiche B** gehen Stücke bis zu 160 cm Länge zur Verladung.
- Die **Säge** schneidet ein 160 cm langes Stück ab.
- Bei **Weiche C** gehen 160 cm lange Stücke zur Verladung. Andere Stücke bleiben im Sägewerk.
- **Kamera 1** und **Kamera 2** zählen die Stücke, die an ihnen vorbei kommen.

![Plan des Sägewerks: Die Straße führt von START im Kreis. Weiche A (rechts oben) sortiert Stücke unter 60 cm aus. Hinter Weiche B (rechts unten) gehen Stücke bis 160 cm zum Lastwagen zur Verladung, Kamera 2 steht hier. Längere Stücke gehen weiter zur Säge, die 160 cm abschneidet. Weiche C (links unten) schickt 160 cm lange Stücke zum Lastwagen, Kamera 1 steht hier; andere Stücke laufen zurück zum Anfang des Kreises.](./img/plant.png)

Früh morgens öffnet das Sägewerk. Als erstes werden drei Holzstücke neu angeliefert. Sie sind 60 cm, 140 cm und 360 cm lang. Das Sägewerk verarbeitet diese Stücke komplett, bevor weitere Stücke angeliefert werden.

**Wie viele Stücke haben die beiden Kameras bis dahin gezählt?**
