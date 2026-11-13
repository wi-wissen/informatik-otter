---
short: U7b6
title: Kreisch!
summary: Zwei Tänzer bewegen sich je nach Publikumsreaktion über die Tanzfläche. Wann treffen sie sich?
grades:
  "5-6": medium
gi:
  content: [systems]
  process: [modelling, reasoning]
topics: [parallelism]
methods: []
mascot: beaver
interaction:
  format: choice
  props:
    columns: 2
    options:
      - { id: a, label: "Buh! Kreisch!" }
      - { id: b, label: "Wow! Kreisch!" }
      - { id: c, label: "Kreisch! Kreisch!" }
      - { id: d, label: "Klatsch! Kreisch!" }
source:
  type: original
  work: Informatik-Biber 2017
  year: 2017
  page: 30
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2017/Biberheft2017-mit-Loesungen.pdf
  country: CA
  license: CC BY-SA 4.0
---
Elena und Dustin nehmen an einer Tanzshow teil. Je nach Reaktion des Publikums führen sie gleichzeitig bestimmte Tanzschritte aus. Die Tabelle zeigt, wie sie sich über die Felder der Tanzfläche bewegen:

![Tabelle der Tanzschritte. Wow!: Elena ein Feld nach links, dann eins nach oben; Dustin eins nach oben, dann eins nach rechts. Kreisch!: Elena eins nach oben, dann eins nach links; Dustin eins nach rechts, dann eins nach unten. Klatsch!: Elena zwei nach links, dann eins nach oben; Dustin dreimal nach oben. Buh!: Elena zweimal nach unten; Dustin zweimal nach links.](./img/moves.png)

Wenn zum Beispiel das Publikum kreischt, bewegt Elena sich um ein Feld nach oben und danach um ein Feld nach links; gleichzeitig bewegt sich Dustin um ein Feld nach rechts und danach um ein Feld nach unten.

Elena und Dustin starten auf der Tanzfläche auf diesen Feldern:

![Tanzfläche mit 9 Spalten und 6 Zeilen. Dustin steht in der vierten Zeile von oben in der dritten Spalte von links, Elena in derselben Zeile in der siebten Spalte.](./img/board.png)

Das Publikum möchte, dass die beiden am Ende auf dem gleichen Feld stehen.

**Welche Reaktionen muss das Publikum dazu zeigen?**
