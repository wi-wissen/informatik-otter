---
short: rT6m
title: Spielernummern
summary: Zwei Teams, eines sortiert und eines nicht. Wie findest du am schnellsten heraus, welche Spielernummern in beiden Teams vorkommen?
grades:
  "9-10": medium
  "11-13": easy
gi:
  content: [algorithms]
  process: [reasoning, modelling]
topics: [searching, algorithm-analysis]
methods: [binary-search]
mascot: beaver
interaction:
  format: choice
  props:
    options:
      - { id: a, label: "A) Du durchläufst Team 1 von links nach rechts. Bei jeder Spielernummer (1, 4, 5, …) schaust du bei Team 2 nach, ob die Spielernummer auch dort vorkommt." }
      - { id: b, label: "B) Du durchläufst Team 2 von links nach rechts. Bei jeder Spielernummer (8, 28, 12, …) schaust du bei Team 1 nach, ob die Spielernummer auch dort vorkommt." }
      - { id: c, label: "C) Es ist egal, welches Team du durchläufst und bei welchem du nachschaust. Beides geht gleich schnell." }
      - { id: d, label: "D) Zuerst stellst du fest, wie viele Spielernummern nicht in beiden Teams vorkommen. Dann ziehst du diese Zahl von 15 ab und erhältst die gesuchte Zahl." }
source:
  type: original
  work: Informatik-Biber 2016
  year: 2016
  page: 58
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2016/Biberheft2016-mit-Loesungen.pdf
  country: IE
  license: CC BY-SA 3.0
---
Die Bilder zeigen zwei Teams mit je 15 Spielern. Die Trikots der Spieler sind mit den Spielernummern bedruckt.

Die Spieler von Team 1 stehen nach ihren Spielernummern sortiert:

![Team 1 mit den Spielernummern 1, 4, 5, 7, 9, 14, 15, 17, 18, 19, 21, 22, 23, 25, 26](./img/team1.png)

Die Spieler von Team 2 stehen nicht sortiert:

![Team 2 mit den Spielernummern 8, 28, 12, 3, 24, 16, 23, 19, 14, 2, 11, 29, 27, 6, 13](./img/team2.png)

Nun erhältst du den Auftrag festzustellen, wie viele Spielernummern sowohl in Team 1 als auch in Team 2 vorkommen.

**Wie kannst du den Auftrag möglichst schnell erledigen?**
