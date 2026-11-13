---
short: 1tCY
title: Eins-zwei-drei Kuchen
summary: Tim stapelt Kuchenschachteln, Tom verkauft immer die oberste. Wie viele Kuchen sind schon weg?
grades:
  "5-6": hard
gi:
  content: [information-data]
  process: [modelling, reasoning]
topics: [data-structures]
methods: [stack]
mascot: beaver
interaction:
  format: choice
  props:
    options:
      - { id: a, label: 4 Kuchen }
      - { id: b, label: 5 Kuchen }
      - { id: c, label: 6 Kuchen }
      - { id: d, label: 7 Kuchen }
source:
  type: original
  work: Informatik-Biber 2013
  year: 2013
  page: 12
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2013/Biberheft2013-mit-Loesungen.pdf
  license: CC BY-NC-SA 3.0
---
Tim ist Kuchenbäcker. Er backt immer drei Kuchen gleichzeitig. Sobald die drei Kuchen fertig sind, packt Tim sie in drei bunte Schachteln.

Die stapelt er immer gleich. Das siehst du auf dem Bild:

![Dreierstapel: oben eine rot gepunktete Schachtel, in der Mitte eine grüne, unten eine blau-weiß gestreifte](./img/stack3.png)

Den Dreierstapel bringt er sofort zum Verkäufer Tom. Der stellt den Dreierstapel zuoberst auf seinen Verkaufsstapel. Wenn Tom einen Kuchen verkauft, nimmt er immer die oberste Schachtel vom Verkaufsstapel.

Tim backt schneller als Tom verkaufen kann.

![Der Verkaufsstapel, von oben nach unten: gestreift, grün, gestreift, rot gepunktet, grün, gestreift, gestreift](./img/stack.png)

**Wie viele Kuchen hat Tom mindestens verkauft, wenn der Verkaufsstapel so aussieht?**
