---
short: P2Cq
title: Funknetz im Dorf
summary: Wie viele Funkmasten braucht man mindestens, damit alle Häuser im Dorf Internet bekommen?
grades:
  "5-6": medium
  "7-8": easy
  "9-10": easy
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [optimization]
methods: [brute-force]
mascot: beaver
interaction:
  format: input
  props:
    kind: number
    placeholder: Anzahl Funkmasten
source:
  type: original
  work: Informatik-Biber 2014
  year: 2014
  page: 24
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2014/Biberheft2014-mit-Loesungen.pdf
  license: CC BY-NC-SA 3.0
---
In einem Dorf wird ein Funknetz mit mehreren Funkmasten eingerichtet. Es soll den Einwohnern Zugang zum Internet bieten.

Jeder Funkmast hat ein begrenztes Sende- und Empfangsgebiet. Das ist im Bild zu sehen: Nur auf den zwölf umliegenden Grundstücken (grau) erhält ein Haus Verbindung zum Funkmast in der Mitte (roter Stern).

![Das Sendegebiet eines Funkmasts: das Quadrat um den roten Stern und die zwölf umliegenden Grundstücke sind grau](./img/coverage.png)

Ein Funkmast kann immer nur auf dem Schnittpunkt zweier Grundstücksgrenzen aufgestellt werden. Die Sende- und Empfangsgebiete von Funkmasten dürfen sich überlappen.

Das Bild zeigt die Karte des Dorfes. Jedes Dreieck kennzeichnet ein Haus.

![Karte des Dorfes mit 7 mal 7 Grundstücken; die Häuser sind blaue Dreiecke](./img/map.png)

**Wie viele Funkmasten müssen mindestens aufgestellt werden, damit alle Häuser eine Verbindung zum Funknetz erhalten?**
