---
short: 3hFh
title: Gipfelstürmer
summary: Tom will zur Bergstation und nur in Musikgondeln fahren. Auf welchem Weg kommt er am schnellsten ans Ziel?
grades:
  "11-13": hard
gi:
  content: [systems]
  process: [modelling, reasoning]
topics: [parallelism]
methods: [scheduling]
mascot: beaver
interaction:
  format: choice
  props:
    options:
      - { id: a, label: "Talstation → Mittelstation → Bergstation" }
      - { id: b, label: "Talstation → Mittelstation → Talstation → Bergstation" }
      - { id: c, label: "Talstation → Bergstation" }
      - { id: d, label: "Talstation → Gletscherblick → Bergstation" }
source:
  type: original
  work: Informatik-Biber 2014
  year: 2014
  page: 30
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2014/Biberheft2014-mit-Loesungen.pdf
  license: CC BY-NC-SA 3.0
---
Tom möchte zur Bergstation fahren. Er kann von der Talstation aus mit verschiedenen Gondelbahnen dorthin gelangen. Aber er möchte nur in Gondeln fahren, in denen Musik gespielt wird. Das Bild zeigt die aktuellen Positionen der Gondeln zu dem Zeitpunkt, als Tom von der Talstation wegfahren möchte.

![Berglandschaft mit Talstation unten, Mittelstation links, Gletscherblick rechts und Bergstation oben. Zwischen den Stationen verlaufen Gondelbahnen; in jeder fährt genau eine Musikgondel (rot mit Noten)](./img/map.png)

Alle Gondelbahnen bewegen sich gegen den Uhrzeigersinn. Der Fahrzeitabstand von einer Gondel zur vorigen Gondel ist die Zeit, welche die Gondel braucht, um von ihrer aktuellen Position zur aktuellen Position der vorigen Gondel zu fahren (siehe Bild).

![Zwei hintereinander fahrende Gondeln mit der Uhr als Fahrzeitabstand](./img/interval.png)

Der Fahrzeitabstand ist bei allen Gondelbahnen gleich. Er ändert sich auch nicht, wenn Gondeln durch Stationen fahren. Die Gondeln aller Gondelbahnen fahren immer zu gleichen Zeitpunkten durch die Stationen. Wenn Tom durch eine Station fährt, kann er flink und ohne Zeitverlust in die Gondel einer anderen Gondelbahn umsteigen. Manchmal muss er aber auch auf die nächste Musikgondel warten.

**Auf welchem Weg kommt Tom am schnellsten zur Bergstation?**
