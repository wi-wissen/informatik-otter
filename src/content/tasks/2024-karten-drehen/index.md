---
short: Y1E1
title: Karten drehen
summary: Karten werden von rechts nach links aufgedeckt oder umgedreht. Wie viele sind nach 16 Spielzügen aufgedeckt?
grades:
  "11-13": hard
gi:
  content: [information-data]
  process: [reasoning, modelling]
topics: [encoding, algorithm-analysis]
methods: [binary-numbers]
mascot: beaver
interaction:
  format: input
  props:
    kind: number
    placeholder: Anzahl
source:
  type: original
  work: Informatik-Biber 2024
  year: 2024
  page: 37
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2024/Biberheft_2024_web_komplett.pdf
  country: BE
  license: CC BY-SA 4.0
---
Jemand schenkt dir einen Satz gleicher Karten. Die Karten sehen so aus:

**Aufgedeckt:** ![Aufgedeckte Karte mit einem Biber](./img/card-up.png) **Verdeckt:** ![Verdeckte blaue Karte](./img/card-down.png)

Mit diesen Karten kannst du „Drehen“ spielen. Eine Reihe von Karten liegt vor dir. In einem Spielzug gehst du diese Karten von rechts nach links so durch:

- Ist die aktuelle Karte verdeckt, decke sie auf. Damit ist der Spielzug beendet, die übrigen Karten bleiben unverändert.
- Ist die aktuelle Karte aufgedeckt, drehe sie um.

Das Beispiel zeigt, wie sich die Karten in einem Spielzug verändern können:

**Vorher:**

![Vorher von links nach rechts: verdeckt, …, verdeckt, aufgedeckt, verdeckt, aufgedeckt, aufgedeckt](./img/before.png)

**Nachher:**

![Nachher von links nach rechts: verdeckt, …, verdeckt, aufgedeckt, aufgedeckt, verdeckt, verdeckt](./img/after.png)

- Die beiden rechten Karten sind aufgedeckt und werden umgedreht.
- Die dritte Karte von rechts ist verdeckt und wird aufgedeckt.

Damit ist der Spielzug beendet, die übrigen Karten bleiben unverändert.

Diesmal beginnt das Spiel mit 16 verdeckten Karten.

![Eine Reihe aus lauter verdeckten Karten, mit Auslassungspunkten in der Mitte](./img/start.png)

**Wie viele Karten sind nach 16 Spielzügen aufgedeckt?**
