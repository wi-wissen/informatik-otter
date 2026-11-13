---
short: 8DnH
title: Baumstämme sortieren
summary: Roboter Alan rollt Baumstämme nach einer geheimen Vorschrift die Rampe hinunter. Welche Regel steckt dahinter?
grades:
  "11-13": medium
gi:
  content: [algorithms]
  process: [reasoning, modelling]
topics: [sorting]
methods: [selection-sort]
mascot: beaver
interaction:
  format: choice
  props:
    options:
      - { id: a, label: Nimm den längsten Baumstamm. }
      - { id: b, label: Nimm den zweitlängsten Baumstamm. Ist nur noch einer übrig, dann nimm den. }
      - { id: c, label: Nimm den kürzesten Baumstamm. }
      - { id: d, label: Nimm den zweitkürzesten Baumstamm. Ist nur noch einer übrig, dann nimm den. }
source:
  type: original
  work: Informatik-Biber 2012
  year: 2012
  page: 5
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2012/Biberheft2012-mit-Loesungen.pdf
  license: CC BY-NC-SA 3.0
---
Hilfe! Roboter Alan sortiert Baumstämme. Aber wir wissen nicht mehr genau, wie er programmiert wurde.

Auf dem Boden liegen mehrere Baumstämme von unterschiedlicher Länge. Alan wählt nach einer bestimmten Vorschrift einen Baumstamm aus, legt ihn oben auf die Rampe und lässt ihn hinunter rollen. Das wiederholt Alan so lange, bis keine Baumstämme mehr auf dem Boden liegen. Schau dir das Ergebnis an:

![Die Baumstämme liegen auf der Rampe: unten ein langer Stamm, darüber werden sie nach oben hin kürzer, ganz oben liegt der längste Stamm](./img/result.png)

**Nach welcher Vorschrift hat Alan die Baumstämme ausgewählt?**
