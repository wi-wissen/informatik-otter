---
short: aN8Y
title: Wanderungen
summary: Mia wandert pro Tag einen oder zwei Abschnitte weit und übernachtet an Hütten. Wie viele Routen sind möglich?
grades:
  "7-8": hard
  "9-10": medium
  "11-13": easy
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [optimization, algorithm-analysis]
methods: [divide-and-conquer, dynamic-programming]
mascot: beaver
interaction:
  format: input
  props:
    kind: number
    placeholder: Anzahl
source:
  type: original
  work: Informatik-Biber 2023
  year: 2023
  page: 60
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2023/Biberheft_2023_web_komplett.pdf
  country: US
  license: CC BY-SA 4.0
---
Mia mag Wanderurlaube, bei denen sie jede Nacht an einem anderen Ort übernachtet. Für ihren nächsten Urlaub hat Mia eine Karte der Region (siehe Bild). Die Karte zeigt Mias Startpunkt (links, gelbes Schild), ihr Ziel (rechts, roter Bus) und alle Orte, an denen sie übernachten kann (fünf Häuser).

Mia hat die Region mit gestrichelten Linien in Abschnitte eingeteilt. Sie kann immer nur einen oder zwei Abschnitte an einem Tag wandern. Zwei verschiedene Wanderungen, die sie machen kann, hat sie bereits in die Karte eingetragen. Wanderung 1 hat 3 Übernachtungsorte; Wanderung 2 hat 4 Übernachtungsorte.

![Karte mit Startschild links, Zielbus rechts, sechs gestrichelten Abschnittsgrenzen und fünf Häusern auf den Grenzen 1, 2, 4, 5 und 6; darüber die Wanderungen 1 und 2 als Pfeile](./img/karte.png)

**Wie viele verschiedene Wanderungen kann Mia insgesamt machen? Zähle die Wanderungen 1 und 2 mit.**
