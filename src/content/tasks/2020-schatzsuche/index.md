---
short: T19f
title: Schatzsuche
summary: Drei Entdeckerinnen gehen durch drei Gänge mit Toren und Schalter-Steinen. Wer erreicht den Schatz?
grades:
  "5-6": hard
gi:
  content: [systems]
  process: [modelling, reasoning]
topics: [parallelism]
methods: []
mascot: beaver
interaction:
  format: choice
  props:
    options:
      - { id: a, label: "A) Ada" }
      - { id: b, label: "B) Belle" }
      - { id: c, label: "C) Cody" }
      - { id: d, label: "D) Niemand kann den Schatz erreichen." }
source:
  type: original
  work: Informatik-Biber 2020
  year: 2020
  page: 50
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2020/Biberheft_2020_final_mit_Loesungen.pdf
  country: PK
  license: CC BY-SA 4.0
---
Die drei Entdeckerinnen Ada, Belle und Cody wollen einen Schatz erreichen. Jede geht durch einen anderen Gang.

In den Gängen sind Tore und Steine. Darauf sind verschiedene farbige Zeichen. Am Anfang sind alle Tore verschlossen.

Wenn eine Entdeckerin an ein verschlossenes Tor kommt, muss sie warten, bis das Tor geöffnet wird. Wenn eine Entdeckerin auf einen Stein tritt, werden alle Tore mit dem gleichen Zeichen für immer geöffnet.

![Drei Gänge: Ada oben, Belle in der Mitte, Cody unten, ganz rechts der Schatz. Adas Tore (von links): roter Kreis, weißer Kasten, grünes Karo, weißer Kasten. Belles Gang: ein Stein mit rotem Kreis, ein Tor mit gelbem Stern, ein Stein mit blauem Dreieck, ein Tor mit rotem Kreis, ein Tor mit weißem Kasten. Codys Tore: roter Kreis, dann ein Stein mit grünem Karo, ein Stein mit weißem Kasten und zuletzt ein Tor mit blauem Dreieck](./img/tunnels.png)

**Wer kann den Schatz erreichen?**
