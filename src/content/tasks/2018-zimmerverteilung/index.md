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
  format: custom
  props:
    girls:
      - { id: alina, name: Alina, plus: [], minus: [elli] }
      - { id: elli, name: Elli, plus: [], minus: [lara] }
      - { id: lara, name: Lara, plus: [pinar], minus: [] }
      - { id: mia, name: Mia, plus: [elli, zoe], minus: [] }
      - { id: pinar, name: Pinar, plus: [], minus: [alina] }
      - { id: zoe, name: Zoe, plus: [mia], minus: [lara] }
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

Die Club-Vorsitzende muss die Mädchen auf die Zimmer verteilen. Sie will alle Zimmer-Wünsche erfüllen.

**Hilf ihr und verteile die Mädchen auf die Zimmer!**

Ziehe dazu ihre Wunsch-Karten so auf die drei „Zimmer“, dass alle Wünsche erfüllt werden. Zum Glück ist das möglich. (Im Informatik-Biber 2018 wurde diese Aufgabe mit teils anderen Namen verwendet.)
