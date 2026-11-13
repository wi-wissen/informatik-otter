---
short: 6VZS
title: BikeFun
summary: Welcher der Parcours mit Bergen, Tälern und flachen Stücken lässt sich mit den Spaßrädern befahren?
grades:
  "9-10": hard
  "11-13": medium
gi:
  content: [languages-automata]
  process: [modelling, reasoning]
topics: [formal-languages]
methods: [stack]
mascot: beaver
interaction:
  format: choice
  props:
    columns: 2
    options:
      - { id: a, image: ./img/a.png, alt: "Parcours A" }
      - { id: b, image: ./img/b.png, alt: "Parcours B" }
      - { id: c, image: ./img/c.png, alt: "Parcours C" }
      - { id: d, image: ./img/d.png, alt: "Parcours D" }
source:
  type: original
  work: Informatik-Biber 2017
  year: 2017
  page: 13
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2017/Biberheft2017-mit-Loesungen.pdf
  country: DE
  license: CC BY-SA 4.0
---
BikeFun ist ein Riesenspaß! Mit speziellen Spaßrädern kann man verschiedene Parcours befahren. Jeder Parcours besteht aus einer Reihe von Abschnitten. Ein Abschnitt verläuft entweder bergab, bergauf oder flach.

**Das Befahren eines Parcours funktioniert nach diesen Regeln:**

- Am Start beträgt die Geschwindigkeit 0 km/h.
- Auf einem Bergab-Abschnitt erhöht das Rad automatisch die Geschwindigkeit um 10 km/h.
- Auf einem Bergauf-Abschnitt verringert das Rad automatisch die Geschwindigkeit um 10 km/h.
- Auf einem flachen Abschnitt kannst du selbst entscheiden und die Geschwindigkeit um 10 km/h entweder erhöhen oder verringern.
- Am Ziel muss die Geschwindigkeit wieder 0 km/h betragen. Auch zwischendurch kann die Geschwindigkeit 0 km/h betragen, aber dann muss sie sofort wieder erhöht werden – sonst ist die Fahrt zu Ende!

Hier ist ein Parcours skizziert, der nach den Regeln befahrbar ist. Dazu kann die Geschwindigkeit auf den flachen Abschnitten so verändert werden, wie in den Kreisen angegeben (+ erhöhen, − verringern).

![Beispiel-Parcours mit den Geschwindigkeiten 10, 0, 20, 10, 10, 0, 10, 0 an den Abschnittsgrenzen: Start oben links, dann bergab, flach, flach, bergauf, bergab, flach, flach, bergauf zum Ziel](./img/example.png)

Hier sind weitere BikeFun-Parcours skizziert. Nur einer von ihnen ist nach den Regeln befahrbar.

**Welcher?**
