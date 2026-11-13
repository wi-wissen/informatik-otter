---
short: jE6C
title: Alarm im Museum!
summary: Ein Sicherheitssystem zählt Personen in vier Räumen. Wann muss ein Eindringling im Museum sein?
grades:
  "7-8": hard
  "9-10": medium
  "11-13": easy
gi:
  content: [information-data]
  process: [reasoning]
topics: [modelling, ai]
methods: []
mascot: beaver
interaction:
  format: choice
  props:
    columns: 7
    options:
      - { id: "1001", label: "10:01" }
      - { id: "1002", label: "10:02" }
      - { id: "1003", label: "10:03" }
      - { id: "1004", label: "10:04" }
      - { id: "1005", label: "10:05" }
      - { id: "1006", label: "10:06" }
      - { id: "1007", label: "10:07" }
source:
  type: original
  work: Informatik-Biber 2017
  year: 2017
  page: 8
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2017/Biberheft2017-mit-Loesungen.pdf
  country: DE
  license: CC BY-SA 4.0
---
Im Museum für moderne Holzplastiken gibt es ein intelligentes Sicherheitssystem. Das System ermittelt jede Minute, wie viele Personen in jedem Raum sind, und trägt die Zahlen in eine Tabelle ein. Außerdem prüft es anhand der Zahlen, ob ein Eindringling im Museum ist. Ein Eindringling ist eine Person, die in das Museum gelangt ist, aber nicht die Eingangstür benutzt hat.

Sobald das System meint, dass ein Eindringling im Museum ist, schlägt es Alarm.

Unten siehst du die Tabelle des Systems für die Minuten 10:01 bis 10:07. Danach siehst du den Raumplan des Museums mit den Nummern der Räume. Das Museum ist groß: Von einer Minute zur nächsten kann man es höchstens durch eine Tür schaffen.

| Zeit  | Raum 1 | Raum 2 | Raum 3 | Raum 4 |
|-------|-------:|-------:|-------:|-------:|
| 10:01 | 2 | 0 | 0 | 0 |
| 10:02 | 3 | 0 | 0 | 0 |
| 10:03 | 2 | 1 | 0 | 0 |
| 10:04 | 4 | 1 | 1 | 0 |
| 10:05 | 2 | 2 | 3 | 0 |
| 10:06 | 5 | 2 | 2 | 1 |
| 10:07 | 4 | 1 | 2 | 2 |

![Raumplan: Vier Räume im Quadrat, oben links Raum 1 (mit der Eingangstür), oben rechts Raum 2, unten rechts Raum 3, unten links Raum 4. Zwischen benachbarten Räumen gibt es Türen.](./img/plan.png)

**In einer der Minuten in der Tabelle schlägt das System Alarm. In welcher?**
