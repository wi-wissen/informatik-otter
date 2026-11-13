---
short: 1MAd
title: Biber-Arbeit
summary: Zwei Biber müssen acht Aufgaben für einen Damm verteilen, und manche Aufgaben warten auf andere. Geht es schneller als in 32 Stunden?
grades:
  "9-10": medium
  "11-13": easy
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [optimization, parallelism]
methods: [scheduling]
mascot: beaver
interaction:
  format: custom
  props:
    workers: 2
    best: 23
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
  work: Informatik-Biber 2018
  year: 2018
  page: 15
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2018/Biberheft2018-mit-Loesungen.pdf
  country: LT
  license: CC BY-SA 4.0
---
Zwei Biber bauen einen Damm. Dazu müssen sie acht Aufgaben erledigen: Bäume fällen, Äste entfernen, Stämme ins Wasser bringen usw.

Die Biber machen sich erstmal ein Bild. Für jede Aufgabe gibt es einen Buchstaben. In Klammern steht, wie viele Stunden es dauert, die Aufgabe zu erledigen. Ein Pfeil sagt, dass eine Aufgabe vor einer anderen erledigt werden muss. Zum Beispiel kann E erst begonnen werden, wenn A und B beide erledigt sind.

![Aufgabengraph: A(2) und B(3) vor E(10), E vor H(6); C(5) vor F(9); D(7) vor G(4); H, F und G vor Fertig](./img/graph.png)

Die Biber können gleichzeitig arbeiten, aber an unterschiedlichen Aufgaben. Hier ist ihr Arbeitsplan. Damit wird der Damm in 32 Stunden fertig. Es geht aber schneller!

![Arbeitsplan über 32 Stunden: Biber 1 arbeitet an D, G, B, A, dann H; Biber 2 an C, F, dann E; dazwischen gibt es Leerlauf](./img/plan32.png)

**Erstelle einen Arbeitsplan, mit dem der Damm so schnell wie möglich fertig wird!**

Füge dazu die Aufgaben nacheinander zu einem Biber hinzu. Aufgaben, die noch nicht begonnen werden können, sind grau hinterlegt. Wenn du mit dem Plan noch nicht zufrieden bist, nimm Aufgaben wieder heraus.
