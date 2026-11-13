---
short: g4tg
title: Bemalte Böden
summary: Ein Roboter bemalt Böden nach vier Regeln mit Symbolen – welcher Boden gehört zu welcher Regel?
grades:
  "11-13": hard
gi:
  content: [algorithms]
  process: [reasoning, modelling]
topics: [algorithm-analysis]
methods: []
mascot: beaver
interaction:
  format: match
  props:
    left:
      - { id: a, image: ./img/floor-a.png, alt: Boden A (oben links) }
      - { id: b, image: ./img/floor-b.png, alt: Boden B (oben rechts) }
      - { id: c, image: ./img/floor-c.png, alt: Boden C (unten links) }
      - { id: d, image: ./img/floor-d.png, alt: Boden D (unten rechts) }
    right:
      - { id: r1, label: Regel 1 }
      - { id: r2, label: Regel 2 }
      - { id: r3, label: Regel 3 }
      - { id: r4, label: Regel 4 }
source:
  type: original
  work: Informatik-Biber 2022
  year: 2022
  page: 11
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2022/Biberheft_2022_mit_Loesungen_web.pdf
  country: AT
  license: CC BY-SA 4.0
---
Der Boden eines quadratischen Raumes ist in 30 × 30 Felder unterteilt. Auf zehn Feldern liegen solche Chips mit farbigen Symbolen (rot: Punkt, blau: Kreuz, grün: Quadrat, lila: Stern, orange: Dreieck):

![Die fünf Symbole: roter Punkt, blaues Kreuz, grünes Quadrat, lila Stern, orangefarbenes Dreieck](./img/chips.png)

Ein Roboter soll den Boden mit diesen Symbolen bemalen, Feld für Feld. Er hat dafür vier verschiedene Regeln.

Auf einem Feld, auf dem kein Chip liegt, malt er …

1. … das Symbol des Chips, der ihm am nächsten ist.
2. … das Symbol des Chips, der am weitesten von ihm entfernt ist.
3. … das Symbol des Chips, der ihm am zweitnächsten ist.
4. … das Symbol, das bei den 6 am nächsten liegenden Chips am häufigsten vorkommt.

Der Roboter bemalt alle Felder nach derselben Regel. Wenn die Regel für ein Feld mehrere mögliche Symbole ergibt, sucht der Roboter sich zufällig eines davon aus.

Unten siehst du für jede Regel, wie der Boden am Ende bemalt ist.

**Welcher Boden passt zu welcher Regel?**
