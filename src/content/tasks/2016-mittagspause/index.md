---
short: u5Vx
title: Mittagspause
summary: In einer Stunde Mittagspause will Alexandra vier Dinge erledigen und dabei die Stoßzeiten meiden. Welche Reihenfolge klappt?
grades:
  "5-6": hard
  "7-8": medium
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [optimization]
methods: [scheduling]
mascot: beaver
interaction:
  format: sort-list
  props:
    direction: horizontal
    startLabel: zuerst
    endLabel: zuletzt
    items:
      - { id: buch, label: Buch kaufen, image: ./img/buch.png, alt: Buch }
      - { id: milch, label: Milch kaufen, image: ./img/milch.png, alt: Milch }
      - { id: brief, label: Brief versenden, image: ./img/brief.png, alt: Brief }
      - { id: kaffee, label: Kaffee trinken, image: ./img/kaffee.png, alt: Kaffee }
source:
  type: original
  work: Informatik-Biber 2016
  year: 2016
  page: 48
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2016/Biberheft2016-mit-Loesungen.pdf
  country: LT
  license: CC BY-SA 3.0
---
Während ihrer Mittagspause (12:00 Uhr–13:00 Uhr) möchte Alexandra Folgendes erledigen:

- ein Buch in der Buchhandlung kaufen
- eine Flasche Milch im Lebensmittelgeschäft kaufen
- einen Brief per Post versenden
- einen Kaffee trinken in der Cafeteria.

Für jede dieser vier Aktivitäten weiß Alexandra, wie lange sie dauern – aber nur außerhalb der Stoßzeiten. Alexandra will die Stoßzeiten vermeiden.

| Aktivität | Dauer | Stoßzeiten |
|---|---|---|
| Buch kaufen | 15 Minuten | 12:40 Uhr–13:00 Uhr |
| Milch kaufen | 10 Minuten | 12:00 Uhr–12:40 Uhr |
| Brief versenden | 15 Minuten | 12:00 Uhr–12:30 Uhr |
| Kaffee trinken | 20 Minuten | 12:30 Uhr–12:50 Uhr |

**Bringe die Aktivitäten in eine Reihenfolge, bei der Alexandra die Stoßzeiten vermeidet.**
