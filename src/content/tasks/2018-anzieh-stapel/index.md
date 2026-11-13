---
short: ZYK4
title: Anzieh-Stapel
summary: Bruno legt abends seine Kleidung auf einen Stapel. Nur eine Reihenfolge lässt ihn morgens alles richtig anziehen.
grades:
  "3-4": easy
gi:
  content: [algorithms]
  process: [structuring]
topics: [graphs, data-structures]
methods: [topological-sort, stack]
mascot: beaver
interaction:
  format: choice
  props:
    columns: 4
    options:
      - { id: a, image: ./img/stack-a.png, alt: "Stapel A, von oben nach unten: Hemd, Unterhose, Hose, Schuhe, Socken" }
      - { id: b, image: ./img/stack-b.png, alt: "Stapel B, von oben nach unten: Hose, Hemd, Unterhose, Socken, Schuhe" }
      - { id: c, image: ./img/stack-c.png, alt: "Stapel C, von oben nach unten: Hemd, Socken, Hose, Unterhose, Schuhe" }
      - { id: d, image: ./img/stack-d.png, alt: "Stapel D, von oben nach unten: Socken, Unterhose, Hose, Hemd, Schuhe" }
source:
  type: original
  work: Informatik-Biber 2018
  year: 2018
  page: 10
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2018/Biberheft2018-mit-Loesungen.pdf
  country: CH
  license: CC BY-SA 4.0
---
Das sind Brunos Anziehsachen:

![Hemd, Hose, Unterhose, Socken und Schuhe](./img/items.png)

Abends legt Bruno seine Sachen auf einen Stapel. Dann geht es morgens schnell: Er zieht zuerst die oberste Sache an, dann die nächste – schön der Reihe nach.

Aber manchmal ist der Stapel falsch: Dann sind am Ende die Socken über den Schuhen oder die Unterhose über der Hose. Oh je!

Diese Stapel sind fast alle falsch. Nur einer ist richtig.

**Welcher?**
