---
short: ZeD5
title: Teppichmuster
summary: Nach einem Ablaufplan aus Ja-Nein-Fragen werden die Felder eines Teppichs mit Symbolen gefüllt. Wie sieht der Teppich aus?
grades:
  "5-6": hard
  "7-8": medium
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [programming, logic]
methods: [conditional]
mascot: beaver
interaction:
  format: choice
  props:
    columns: 2
    options:
      - { id: a, image: ./img/carpet-a.png, alt: Teppich A }
      - { id: b, image: ./img/carpet-b.png, alt: Teppich B }
      - { id: c, image: ./img/carpet-c.png, alt: Teppich C }
      - { id: d, image: ./img/carpet-d.png, alt: Teppich D }
source:
  type: original
  work: Informatik-Biber 2022
  year: 2022
  page: 56
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2022/Biberheft_2022_mit_Loesungen_web.pdf
  country: TR
  license: CC BY-SA 4.0
---
Hale ist eine türkische Künstlerin. Sie gestaltet ein Teppichmuster. Der Teppich hat Felder, in sechs Zeilen und sechs Spalten. Für jedes Feld gibt es die Nummer der Zeile und die der Spalte.

![Ein Teppich mit sechs Zeilen und sechs Spalten, die Zeilen und Spalten sind von 1 bis 6 nummeriert, die Felder sind noch leer](./img/carpet.png)

Hales Angestellte sollen in jedes Feld ein Symbol setzen. Hale hat ihnen dazu diese Anleitung gegeben:

![Ablaufplan. Start. Frage 1: Ist die Nummer der Zeile oder der Spalte (oder beide) eine 1 oder eine 6? Ja: Symbol Mäander (violett). Nein: Frage 2: Sind die Nummer der Zeile und die Nummer der Spalte gleich? Ja: grüne Blume. Nein: Frage 3: Ist die Nummer der Zeile größer als die Nummer der Spalte? Ja: dreiarmiges Symbol (Y-Form, violett). Nein: rosa Blume](./img/flow.png)

**Wie wird der Teppich aussehen?**
