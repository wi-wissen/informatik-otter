---
short: BM79
title: Spaß im Zoo
summary: Ali möchte im Zoo möglichst viele Vorführungen nacheinander sehen. Wie viele passen in seinen Tag?
grades:
  "3-4": medium
  "5-6": easy
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [optimization]
methods: [scheduling, greedy]
mascot: beaver
interaction:
  format: choice
  props:
    multiple: true
    columns: 2
    options:
      - { id: a, label: "A: 10:00–11:15 Uhr" }
      - { id: b, label: "B: 10:15–11:00 Uhr" }
      - { id: c, label: "C: 11:00–11:30 Uhr" }
      - { id: d, label: "D: 11:15–12:00 Uhr" }
      - { id: e, label: "E: 11:30–12:15 Uhr" }
      - { id: f, label: "F: 11:30–12:30 Uhr" }
      - { id: g, label: "G: 12:00–13:30 Uhr" }
      - { id: h, label: "H: 12:30–13:30 Uhr" }
      - { id: i, label: "I: 13:15–14:00 Uhr" }
      - { id: j, label: "J: 13:45–14:45 Uhr" }
source:
  type: original
  work: Informatik-Biber 2023
  year: 2023
  page: 56
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2023/Biberheft_2023_web_komplett.pdf
  country: AT
  license: CC BY-SA 4.0
---
Heute ist Ali im Zoo. Er will möglichst viele verschiedene Vorführungen besuchen.

Hier ist ein Plan mit allen Vorführungen. Zum Beispiel siehst du ganz unten: Die Vorführung der Affen beginnt um 13:45 Uhr und endet um 14:45 Uhr.

![Zeitplan der Vorführungen von 10:00 bis 14:45 Uhr. Jede Zeile gehört zu einer Tierart und ist mit einem Buchstaben von A (Fische) bis J (Affen) beschriftet; die farbigen Balken zeigen Beginn und Ende](./img/plan.png)

Ali besucht eine Vorführung immer ganz, von Anfang bis Ende. Kannst du Ali helfen?

**Wähle so viele Vorführungen wie möglich aus, die Ali nacheinander besuchen kann.**

(Die Buchstaben A bis J wurden hier zur Orientierung ergänzt.)
