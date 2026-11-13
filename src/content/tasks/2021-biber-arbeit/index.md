---
short: 27NS
title: Biber-Arbeit
summary: Zwei Biber teilen sich acht Aufgaben beim Dammbau. Wie wird der Damm am schnellsten fertig?
grades:
  "11-13": hard
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [optimization]
methods: [scheduling]
mascot: beaver
interaction:
  format: custom
  props:
    jobs:
      - { id: A, hours: 2, after: [] }
      - { id: B, hours: 3, after: [] }
      - { id: C, hours: 5, after: [] }
      - { id: D, hours: 7, after: [] }
      - { id: E, hours: 10, after: [A, B] }
      - { id: F, hours: 9, after: [C] }
      - { id: G, hours: 4, after: [D] }
      - { id: H, hours: 6, after: [E] }
source:
  type: original
  work: Informatik-Biber 2021
  year: 2021
  page: 10
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2021/Biberheft_2021_mit_Loesungen_web.pdf
  country: LT
  license: CC BY-SA 4.0
---
Zwei Biber bauen einen Damm. Dazu müssen sie acht Aufgaben erledigen: Bäume fällen, Äste entfernen, Stämme ins Wasser bringen usw.

Die Biber machen sich erstmal ein Bild. Für jede Aufgabe gibt es einen Buchstaben. In Klammern steht, wie viele Stunden es dauert, die Aufgabe zu erledigen. Ein Pfeil sagt, dass eine Aufgabe vor einer anderen erledigt werden muss. Zum Beispiel kann E erst begonnen werden, wenn A und B beide erledigt sind.

![Abhängigkeitsgraph: A(2), B(3), C(5), D(7) beginnen sofort; A und B führen zu E(10), E zu H(6); C führt zu F(9); D führt zu G(4); H, F und G führen zu Fertig](./img/graph.png)

Die Biber können gleichzeitig arbeiten, aber an unterschiedlichen Aufgaben. Ein möglicher Arbeitsplan: Biber 1 macht D, G, B, A, dann (nach einer Pause) H; Biber 2 macht C, F, dann (nach einer Pause) E. Damit wird der Damm in 32 Stunden fertig. Es geht aber schneller!

**Erstelle einen Arbeitsplan, mit dem der Damm so schnell wie möglich fertig wird!**

Wähle dazu für jede Aufgabe einen Biber. Jeder Biber erledigt seine Aufgaben in der Reihenfolge, in der du sie gewählt hast. Aufgaben, die noch auf andere warten müssen, beginnt er erst, wenn deren Vorgänger fertig sind. Wenn du mit dem Plan noch nicht zufrieden bist, nimm Aufgaben wieder aus dem Plan heraus.
