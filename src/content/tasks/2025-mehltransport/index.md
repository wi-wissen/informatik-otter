---
short: 88qQ
title: Mehltransport
summary: Zwei Bäcker holen abwechselnd Mehl, mit Pausenregel. Unter welcher Bedingung schaffen sie in 8 Stunden am meisten?
grades:
  "9-10": medium
  "11-13": easy
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [optimization]
methods: [scheduling]
mascot: beaver
interaction:
  format: choice
  props:
    options:
      - { id: a, label: Albert muss zuerst gehen. }
      - { id: b, label: Marco muss zuerst gehen. }
      - { id: c, label: Marco muss zuletzt gehen. }
      - { id: d, label: Albert darf nicht zuletzt gehen. }
      - { id: e, label: Marco muss genau einmal gehen. }
source:
  type: original
  work: Informatik-Biber 2025
  year: 2025
  page: 56
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2025/Biberheft_2025_web_komplett.pdf
  country: TH
  license: CC BY-SA 4.0
---
Albert und Marco arbeiten in einer Bäckerei. Sie müssen immer wieder Mehl von der Mühle holen gehen. Es darf aber immer nur einer gehen, damit der andere die Kunden bedienen kann.

![Eine Mühle mit Mehlsäcken und die Bäckerei, verbunden durch einen Weg](./img/mill.png)

Ihre Leistungen beim Mehl holen sind unterschiedlich:

- Albert holt 13 kg Mehl in 1 Stunde.
- Marco holt 5 kg Mehl in 30 Minuten.

Für jeden der beiden gilt aber: Er kann höchstens dreimal direkt hintereinander Mehl holen. Nach dreimal Mehl holen sind 30 Minuten Erholung nötig. In dieser Zeit können Kunden bedient werden.

Albert und Marco möchten zusammen in 8 Stunden so viel Mehl wie möglich holen.

**Unter genau einer der folgenden Bedingungen schaffen sie das. Unter welcher?**
