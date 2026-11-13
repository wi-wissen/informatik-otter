---
short: S5Hz
title: Bebrasien
summary: Ein Forschungsteam will mit Fähren und Hubschrauber alle sieben Inseln erkunden. Wie viele Ausflüge braucht es?
grades:
  "5-6": hard
  "7-8": medium
  "9-10": easy
gi:
  content: [information-data, algorithms]
  process: [modelling, reasoning]
topics: [graphs, modelling]
methods: [strongly-connected-components]
mascot: beaver
interaction:
  format: choice
  props:
    columns: 3
    options:
      - { id: "2", label: 2 Ausflüge }
      - { id: "3", label: 3 Ausflüge }
      - { id: "4", label: 4 Ausflüge }
      - { id: "5", label: 5 Ausflüge }
      - { id: "6", label: 6 Ausflüge }
      - { id: "7", label: 7 Ausflüge }
source:
  type: original
  work: Informatik-Biber 2025
  year: 2025
  page: 13
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2025/Biberheft_2025_web_komplett.pdf
  country: AT
  license: CC BY-SA 4.0
---
Vor der Küste von Bebrasien liegen sieben Inseln.

Zwischen den Inseln kann man mit Fähren fahren, aber nur in Richtung der Pfeile (gestrichelte Pfeile mit Schiff-Symbol).

![Sieben Inseln, verbunden durch gestrichelte Pfeile, die Fährverbindungen in einer Richtung oder in beide Richtungen zeigen](./img/map.png)

Ein Forschungsteam möchte die Tierwelt auf allen sieben Inseln erkunden. Ein einzelner Ausflug des Teams zu den Inseln läuft so ab:
Das Team …

1. … fliegt mit einem Hubschrauber zu irgendeiner Insel,
2. benutzt die Fähren, um weitere Inseln zu besuchen, und
3. kehrt zum Schluss zur Insel mit dem Hubschrauber zurück, um zurückzufliegen.

Das Team stellt fest: Ein einziger Ausflug reicht nicht, um alle Inseln zu besuchen.

**Wie viele Ausflüge muss das Team dazu mindestens machen?**
