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
      - { id: A, hours: 2, after: [], color: "#477fff" }
      - { id: B, hours: 3, after: [], color: "#9ef552" }
      - { id: C, hours: 5, after: [], color: "#73cce5" }
      - { id: D, hours: 7, after: [], color: "#269ea3" }
      - { id: E, hours: 10, after: [A, B], color: "#d9ed78" }
      - { id: F, hours: 9, after: [C], color: "#e3bd45" }
      - { id: G, hours: 4, after: [D], color: "#52f5b0" }
      - { id: H, hours: 6, after: [E], color: "#21cca1" }
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

Die Biber können gleichzeitig arbeiten, aber an unterschiedlichen Aufgaben. Hier ist ihr Arbeitsplan. Damit wird der Damm in 32 Stunden fertig. Es geht aber schneller!

![Arbeitsplan der beiden Biber über 32 Stunden: Biber 1 macht D, G, B, A (mit Pause) und H; Biber 2 macht C, F (mit Pause) und E](./img/plan32.png)

**Erstelle einen Arbeitsplan, mit dem der Damm so schnell wie möglich fertig wird!**

Ziehe dazu die Aufgaben nach unten in den Plan. Aufgaben, die noch nicht begonnen werden können, sind grau gefärbt. Wenn du mit dem Plan noch nicht zufrieden bist, ziehe Aufgaben zurück nach oben.
