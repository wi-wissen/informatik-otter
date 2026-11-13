---
short: aTk6
title: Drawbot
summary: Ein Zeichenroboter kennt vier Befehle. Mit welcher Befehlsfolge entsteht das gezeigte Bild?
grades:
  "5-6": hard
  "7-8": medium
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [programming]
methods: [sequence]
mascot: beaver
interaction:
  format: choice
  props:
    options:
      - { id: a, label: "quadrat, drehen, vor, dreieck" }
      - { id: b, label: "dreieck, drehen, vor, quadrat" }
      - { id: c, label: "dreieck, drehen, quadrat" }
      - { id: d, label: "quadrat, vor, quadrat, drehen, dreieck" }
source:
  type: original
  work: Informatik-Biber 2014
  year: 2014
  page: 16
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2014/Biberheft2014-mit-Loesungen.pdf
  license: CC BY-NC-SA 3.0
---
Der Roboter Drawbot kann fahren und dabei zeichnen! Man kann Drawbot die folgenden Befehle eingeben: **quadrat, dreieck, vor, drehen**

Die Wirkung der Befehle ist so:

**quadrat:** Drawbot zeichnet ein Quadrat. An den Ecken dreht er sich nach rechts.

![Der Roboter zeichnet mit dem Befehl quadrat ein Quadrat](./img/cmd-quadrat.png)

**dreieck:** Drawbot zeichnet ein Dreieck. An den Ecken dreht er sich nach rechts.

![Der Roboter zeichnet mit dem Befehl dreieck ein Dreieck](./img/cmd-dreieck.png)

**vor:** Drawbot fährt auf einer vorher gezeichneten Linie bis zur nächsten Ecke.

![Der Roboter fährt auf einer Quadratseite bis zur nächsten Ecke](./img/cmd-vor.png)

**drehen:** Drawbot dreht sich nach rechts bis zur nächsten gezeichneten Linie.

![Der Roboter dreht sich zweimal auf der Stelle, bis er an einer anderen gezeichneten Linie steht](./img/cmd-drehen.png)

Man kann Drawbot auch eine Folge von Befehlen eingeben. Ein Beispiel: quadrat, vor, dreieck. Die Wirkung dieser Befehlsfolge ist so:

![Beispiel: Nach quadrat, vor, dreieck sitzt ein Dreieck auf einer Ecke des Quadrats](./img/example.png)


![Gesucht: Ein Dreieck und ein Quadrat, die sich in einer Ecke berühren](./img/target.png)

**Welche Befehlsfolge hat diese Wirkung?**
