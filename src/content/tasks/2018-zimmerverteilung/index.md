---
short: kJH8
title: Zimmerverteilung
summary: Sechs Mädchen schreiben auf Wunsch-Karten, mit wem sie unbedingt oder auf keinen Fall im Zimmer sein wollen. Wer schläft wo?
grades:
  "7-8": hard
  "9-10": easy
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [optimization, logic]
methods: [backtracking]
mascot: beaver
interaction:
  format: match
  props:
    left:
      - { id: alina, label: Alina }
      - { id: elli, label: Elli }
      - { id: lara, label: Lara }
      - { id: mia, label: Mia }
      - { id: pinar, label: Pinar }
      - { id: zoe, label: Zoe }
    right:
      - { id: r1, label: Zimmer 1 }
      - { id: r2, label: Zimmer 2 }
      - { id: r3, label: Zimmer 3 }
source:
  type: original
  work: Informatik-Biber 2018
  year: 2018
  page: 65
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2018/Biberheft2018-mit-Loesungen.pdf
  country: DE
  license: CC BY-SA 4.0
---
Die „Hacking Girls“, ein Computer-Club für Mädchen, planen einen Ausflug mit Übernachtung. Die Jugendherberge hat große Mehrbettzimmer. Aber wer soll mit wem auf ein Zimmer?

Jedes Clubmitglied schreibt auf eine Wunsch-Karte,

- mit welchen Mädchen sie unbedingt (+) und
- mit welchen Mädchen sie absolut nicht (–)

im gleichen Zimmer sein möchte.

![Sechs Wunsch-Karten. Alina: +: nichts, –: Elli. Elli: +: nichts, –: Lara. Lara: +: Pinar, –: nichts. Mia: +: Elli, Zoe, –: nichts. Pinar: +: nichts, –: Alina. Zoe: +: Mia, –: Lara.](./img/cards.png)

Die Club-Vorsitzende muss die Mädchen auf die Zimmer verteilen. Sie will alle Zimmer-Wünsche erfüllen.

**Hilf ihr und verteile die Mädchen auf die Zimmer!**

Ordne dazu jedes Mädchen einem der drei Zimmer zu, so dass alle Wünsche erfüllt werden. Zum Glück ist das möglich. (Im Informatik-Biber 2018 wurde diese Aufgabe mit teils anderen Namen verwendet.)
