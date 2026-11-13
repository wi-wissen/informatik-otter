---
short: sz5Y
title: Ausweg im Dunkeln
summary: Mit einem Zähler und vier einfachen Regeln findet der Biber im dunklen Keller den Ausgang.
grades:
  "7-8": hard
  "9-10": hard
  "11-13": medium
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [algorithm-analysis, graphs]
methods: [pledge-algorithm]
mascot: beaver
interaction:
  format: choice
  props:
    options:
      - { id: a, label: "0, 1, 0, 1, 2, 3, 4, 3, 2, 3, 4, 5, 4" }
      - { id: b, label: "0, -1, 0, 1, 0" }
      - { id: c, label: "0, 1, 0, 1, 2, 3, 4, 3, 4, 5, 4" }
      - { id: d, label: "0, 1, 0, -1, 0" }
source:
  type: original
  work: Informatik-Biber 2011
  year: 2011
  page: 5
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2011/Biberheft2011-mit-Loesungen.pdf
  license: CC BY-NC-SA 3.0 DE
---
Mitten in der Nacht muss der Biber den Weg aus einem unbekannten Keller finden. Er weiß nur, dass die Wände und alle anderen Hindernisse in rechten Winkeln angeordnet sind.

Der Biber hat folgende Regeln gelernt, wie man einen Ausweg findet. Die Regeln arbeiten mit einem Zähler, der zu Beginn Null ist:

- Drehst du dich 90 Grad nach rechts, dann erhöhe den Zähler um eins.
- Drehst du dich 90 Grad nach links, dann erniedrige den Zähler um eins.
- Ist der Zähler Null, dann gehe solange geradeaus, bis du auf ein Hindernis stößt.
- Stößt du auf ein Hindernis, dann drehe dich 90 Grad nach rechts und gehe solange an dem Hindernis entlang (auch um Ecken herum), bis der Zähler Null ist.

![Grundriss des Kellers von oben: Der Biber steht oben in der Mitte und blickt nach unten. Links oben steht eine Kiste mit Äpfeln, in der Mitte eine große Kiste mit Kartoffeln, rechts oben ein Regal mit Gläsern. Der Ausgang ist unten zwischen zwei Mauerstücken.](./img/keller.png)

**Welches sind die Werte des Zählers auf dem Weg des Bibers nach draußen?**
