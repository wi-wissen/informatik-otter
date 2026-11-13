---
short: AMt8
title: Turniersieger
summary: Pfeile zeigen, wer gegen wen gewonnen hat. Welche Spieler können nach der neuen Regel noch Turniersieger werden?
grades:
  "11-13": medium
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [sorting, graphs]
methods: [topological-sort]
mascot: beaver
interaction:
  format: choice
  props:
    multiple: true
    columns: 3
    options:
      - { id: alice, label: "Alice" }
      - { id: bob, label: "Bob" }
      - { id: chris, label: "Chris" }
      - { id: david, label: "David" }
      - { id: emma, label: "Emma" }
      - { id: fred, label: "Fred" }
      - { id: gerald, label: "Gerald" }
      - { id: henry, label: "Henry" }
      - { id: ivo, label: "Ivo" }
source:
  type: original
  work: Informatik-Biber 2020
  year: 2020
  page: 60
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2020/Biberheft_2020_final_mit_Loesungen.pdf
  country: VN
  license: CC BY-SA 4.0
---
In einem Freiluft-Sportturnier wurden schon einige Partien gespielt. Im Bild unten zeigen die Pfeile, wer dabei gegen wen gewonnen hat. Zum Beispiel hat Bob gegen Alice gewonnen und Alice gegen David.

![Neun Spieler als Kästchen, Pfeile zeigen vom Gewinner zum Verlierer](./img/games.png)

Leider wird das Wetter schlecht. Um die Anzahl der noch nötigen Partien zu verringern, wird eine neue Regel aufgestellt: Es soll derjenige Turniersieger werden, der besser ist als alle anderen.

Wenn A gegen B gewonnen hat, dann gilt:

- A ist besser als B.
- Wenn B besser ist als einige andere Spieler, ist auch A besser als diese Spieler.

Jetzt sollen nur noch die Spieler weitermachen, die nach der neuen Regel noch Turniersieger werden können.

**Welche Spieler können noch Turniersieger werden?** Wähle alle richtigen Namen aus.
