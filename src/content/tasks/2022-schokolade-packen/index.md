---
short: NZ2u
title: Schokolade packen
summary: Vier verschieden große Schokoladentafeln sollen in eine möglichst kleine Schachtel – wie viel Platz bleibt mindestens frei?
grades:
  "9-10": hard
  "11-13": medium
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [optimization]
methods: [brute-force]
mascot: beaver
interaction:
  format: custom
  props:
    cols: 14
    rows: 9
    pieces:
      - { id: p1, w: 5, h: 1, tone: t1 }
      - { id: p2, w: 3, h: 2, tone: t2 }
      - { id: p3, w: 4, h: 3, tone: t3 }
      - { id: p4, w: 5, h: 3, tone: t4 }
source:
  type: original
  work: Informatik-Biber 2022
  year: 2022
  page: 49
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2022/Biberheft_2022_mit_Loesungen_web.pdf
  country: NL
  license: CC BY-SA 4.0
---
Jeder Kunde einer Schokoladenfabrik soll als Werbung vier Tafeln Schokolade bekommen. Die Tafeln sind unterschiedlich groß (1 × 5, 2 × 3, 3 × 4 und 3 × 5 Stücke), aber ihre Stücke sind alle quadratisch und gleich groß.

Die vier Tafeln müssen nebeneinander in eine Schachtel. In der Schachtel soll so wenig Platz frei bleiben wie möglich. Wenn die Tafeln zum Beispiel so gelegt werden, passen sie in eine Schachtel für 5 × 9 Stücke, mit freiem Platz für 7 Stücke.

![Die vier Tafeln liegen in einem Rechteck aus 5 Zeilen und 9 Spalten; 7 Felder bleiben frei](./img/example.png)

**Lege die Tafeln so, dass sie in eine Schachtel mit möglichst wenig freiem Platz passen.** Die gestrichelte Linie zeigt die kleinste Schachtel um deine Tafeln.
