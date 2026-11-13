---
short: 4rwd
title: Schneepflug-Roboter
summary: Ein Roboter räumt Wege zu drei Iglus frei und fährt zurück. Geräumte Felder sind schneller. Wie lange dauert es mindestens?
grades:
  "9-10": hard
  "11-13": medium
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [graphs, optimization]
methods: []
mascot: beaver
interaction:
  format: input
  props:
    kind: number
    suffix: Minuten
source:
  type: original
  work: Informatik-Biber 2019
  year: 2019
  page: 46
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2019/Biberheft2019-mit-Loesungen.pdf
  country: CZ
  license: CC BY-SA 4.0
---
Nach einem Schneesturm sind drei Iglus von der Hauptstraße abgeschnitten. Ein Schneepflug-Roboter soll einen Weg zu allen drei Iglus freiräumen. Anschließend soll er zu seiner Startposition zurückkehren. Die interne Landkarte des Roboters ist in Quadrate eingeteilt. Von einem Quadrat kann der Roboter immer nur zum nächsten waagerecht oder senkrecht benachbarten Quadrat fahren.

![Die Landkarte als Raster mit sechs Spalten und fünf Reihen. Der Roboter startet in der untersten Reihe in der zweiten Spalte. Die Iglus liegen in der obersten Reihe in der ersten Spalte, in der zweiten Reihe in der letzten Spalte und in der vierten Reihe in der vierten Spalte.](./img/grid.png)

Der Roboter benötigt:

- **2 Minuten** für die Fahrt zum nächsten Quadrat, wenn dort noch Schnee liegt.
- **1 Minute** für die Fahrt zum nächsten Quadrat, wenn dieses bereits geräumt ist.
- **0 Minuten**, um sich auf einem Quadrat zu drehen.

Der Roboter muss nicht auf die Quadrate mit den Iglus fahren. Es genügt, einen Weg bis zu den Eingängen zu räumen.

Sein Steuercomputer lässt den Roboter so fahren, dass er einen Weg zu allen drei Iglus räumt und dafür so wenig Zeit wie möglich benötigt.

**Wie viele Minuten dauert die Fahrt des Roboters insgesamt?**
