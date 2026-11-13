---
short: EWd3
title: Verlorene _nf_rmat_on
summary: Ein Baumkennzeichen mit 6×6 Feldern ist verschmutzt, aber in jeder Zeile und Spalte ist die Zahl schwarzer Felder gerade. Was war unter dem Schmutz?
grades:
  "7-8": hard
  "11-13": medium
gi:
  content: [information-data]
  process: [reasoning, modelling]
topics: [error-detection, encoding]
methods: [parity-bit]
mascot: beaver
interaction:
  format: choice
  props:
    columns: 4
    options:
      - { id: a, image: ./img/a.png, alt: "Variante A: links oben schwarz, die anderen drei Felder weiß" }
      - { id: b, image: ./img/b.png, alt: "Variante B: oben beide Felder schwarz, unten links schwarz, unten rechts weiß" }
      - { id: c, image: ./img/c.png, alt: "Variante C: oben beide Felder schwarz, unten links weiß, unten rechts schwarz" }
      - { id: d, image: ./img/d.png, alt: "Variante D: alle vier Felder weiß" }
source:
  type: original
  work: Informatik-Biber 2012
  year: 2012
  page: 40
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2012/Biberheft2012-mit-Loesungen.pdf
  license: CC BY-NC-SA 3.0
---
Die Informatik-Biber kennzeichnen ihre gefällten Bäume. Ein Kennzeichen besteht aus einer Matrix von 6 mal 6 Feldern, die schwarz oder weiß sein können.

Bei jedem Kennzeichen ist in jeder Reihe und in jeder Spalte die Anzahl der schwarzen Felder immer gerade. So ist das Kennzeichen in der rauen Umgebung etwas robuster.

Dieses Kennzeichen wurde beim Baumtransport verschmutzt:

![Matrix aus 6 mal 6 Feldern; die vier mittleren Felder in Zeile 3 und 4, Spalte 3 und 4 sind rot. Zeile 1: schwarz, schwarz, weiß, weiß, schwarz, schwarz. Zeile 2: alle weiß. Zeile 3: weiß, schwarz, rot, rot, schwarz, weiß. Zeile 4: schwarz, schwarz, rot, rot, weiß, schwarz. Zeile 5: weiß, weiß, weiß, weiß, schwarz, schwarz. Zeile 6: weiß, schwarz, weiß, schwarz, schwarz, schwarz](./img/label.png)

**Wie sahen die vier roten Felder vorher aus?**
