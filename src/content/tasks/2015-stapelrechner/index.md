---
short: XQF5
title: Stapelrechner
summary: Der Stapelrechner will seine Rechnungen ohne Klammern, dafür mit den Zahlen vor dem Rechenzeichen. Wie schreibt man 4 * (8 + 3) – 2?
grades:
  "7-8": hard
  "9-10": medium
  "11-13": easy
gi:
  content: [algorithms]
  process: [representing, modelling]
topics: [programming, data-structures]
methods: [postfix-notation, stack]
mascot: beaver
interaction:
  format: custom
  props: {}
source:
  type: original
  work: Informatik-Biber 2015
  year: 2015
  page: 55
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2015/Biberheft2015-mit-Loesungen.pdf
  country: CH
  license: CC BY-SA 3.0
---
Beim Stapelrechner kommen auf einem Fließband von rechts Kisten mit Zahlen oder Rechenzeichen (+, –, * oder /) zu einem Stapel. Der Rechner legt so lange Kisten auf den Stapel, bis die oberste Kiste ein Rechenzeichen hat. Dieses Rechenzeichen wird auf die beiden Kisten darunter angewandt. Die drei Kisten werden dann durch eine Kiste mit dem Ergebnis ersetzt.

Für den Stapelrechner wird eine Rechnung auf ungewöhnliche Art beschrieben – nämlich so, wie die Kisten auf das Fließband gesetzt werden müssen. Hier einige Beispiele:

| Rechnung | Beschreibung für den Stapelrechner |
|---|---|
| 2 + 3 | 2 3 + |
| 10 – 2 | 10 2 – |
| 5 * 2 + 3 | 5 2 * 3 + |
| 5 + 2 * 3 | 5 2 3 * + |
| (8 – 2) * (3 + 4) | 8 2 – 3 4 + * |

**Wie wird die Rechnung 4 * (8 + 3) – 2 für den Stapelrechner beschrieben?** Gib die Beschreibung unten ein (mit Leerzeichen zwischen den Zeichen; für das Minus kannst du „-“ oder „–“ schreiben). Klicke auf die Knöpfe, um den Stapelrechner auszuprobieren.
