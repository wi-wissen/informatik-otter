---
short: tS7a
title: Kreiselstadt
summary: In Kreiselstadt gibt es nur Kreisverkehre. Wohin führt die Wegbeschreibung „3 1 3 2 3“?
grades:
  "5-6": hard
  "9-10": easy
gi:
  content: [algorithms]
  process: [modelling, representing]
topics: [programming, graphs]
methods: [sequence]
mascot: beaver
interaction:
  format: choice
  props:
    columns: 4
    options:
      - { id: a, label: Sie führt zu A. }
      - { id: b, label: Sie führt zu B. }
      - { id: c, label: Sie führt zu C. }
      - { id: d, label: Sie führt zu D. }
source:
  type: original
  work: Informatik-Biber 2017
  year: 2017
  page: 32
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2017/Biberheft2017-mit-Loesungen.pdf
  country: SI
  license: CC BY-SA 4.0
---
In Kreiselstadt gibt es nur Kreisverkehre und sonst keine anderen Kreuzungen. An vier Stellen A, B, C und D kann man in die Stadt hineinfahren. Unten siehst du einen Plan.

Wenn die Kreiselstädter einen Weg beschreiben, sagen sie zum Beispiel:

- Beim nächsten Kreisverkehr nimm die 4. Ausfahrt.
- Beim dann folgenden Kreisverkehr nimm die 1. Ausfahrt.
- Beim dann folgenden Kreisverkehr nimm die 2. Ausfahrt.

Einem einheimischen Fahrer sagen sie stattdessen nur kurz die Wegbeschreibung „4 1 2“. Von A aus führt diese Wegbeschreibung zu einem Kreisverkehr in der Stadtmitte (grün eingezeichnet):

![Plan von Kreiselstadt mit vielen durch Straßen verbundenen Kreisverkehren und den vier Einfahrten A (unten links), B (rechts unten), C (oben rechts) und D (oben links). Der grüne Weg von A nach „4 1 2“ führt zu einem Kreisverkehr in der Mitte.](./img/map.png)

**Wohin führt die Wegbeschreibung „3 1 3 2 3“ von A aus?**
