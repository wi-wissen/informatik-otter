---
short: 2xe4
title: Verlorene _nf_rmat_on
summary: Auf einem verschmutzten Kennzeichen sind vier Felder unlesbar. Welche Farben hatten sie?
grades:
  "7-8": hard
  "9-10": medium
  "11-13": medium
gi:
  content: [information-data]
  process: [reasoning, representing]
topics: [error-detection, encoding]
methods: [parity-bit]
mascot: beaver
interaction:
  format: choice
  props:
    columns: 4
    options:
      - { id: a, image: ./img/felder-a.png, alt: "oben links schwarz, die anderen drei weiß" }
      - { id: b, image: ./img/felder-b.png, alt: "oben links und oben rechts schwarz, unten links schwarz, unten rechts weiß" }
      - { id: c, image: ./img/felder-c.png, alt: "oben links, oben rechts und unten rechts schwarz, unten links weiß" }
      - { id: d, image: ./img/felder-d.png, alt: "alle vier weiß" }
source:
  type: original
  work: Informatik-Biber 2011
  year: 2011
  page: 36
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2011/Biberheft2011-mit-Loesungen.pdf
  license: CC BY-NC-SA 3.0 DE
---
Die Informatik-Biber kennzeichnen ihre gefällten Bäume. Ein Kennzeichen besteht aus einer Matrix von 6 mal 6 Feldern, die schwarz oder weiß sein können.

Bei jedem Kennzeichen ist in jeder Reihe und in jeder Spalte die Anzahl der schwarzen Felder immer gerade. So ist das Kennzeichen in der rauen Umgebung etwas robuster.

Dieses Kennzeichen wurde beim Baumtransport verschmutzt:

![Matrix aus 6 mal 6 Feldern; die vier mittleren Felder (Reihe 3 und 4, Spalte 3 und 4) sind rot und damit unlesbar](./img/kennzeichen.png)

**Wie sahen die vier roten Felder vorher aus?**
