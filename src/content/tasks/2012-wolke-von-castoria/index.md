---
short: h8f4
title: Wolke von Castoria
summary: Die Castorianer speichern ihre Daten in einer Wolke aus vier Servern. Welche Aussage über Ausfälle ist falsch?
grades:
  "9-10": hard
  "11-13": medium
gi:
  content: [systems]
  process: [reasoning, modelling]
topics: [networks, security]
methods: []
mascot: beaver
interaction:
  format: choice
  props:
    options:
      - { id: a, label: Falls STORE-1 und PORT-2 zerstört werden, sind alle Daten der Castorianer unzugänglich. }
      - { id: b, label: Falls STORE-1 und STORE-2 zerstört werden, sind alle Daten der Castorianer vernichtet. }
      - { id: c, label: Falls PORT-1 und PORT-2 zerstört werden, sind alle Daten der Castorianer unzugänglich. }
      - { id: d, label: Falls PORT-1 und PORT-2 zerstört werden, sind alle Daten der Castorianer vernichtet. }
source:
  type: original
  work: Informatik-Biber 2012
  year: 2012
  page: 45
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2012/Biberheft2012-mit-Loesungen.pdf
  license: CC BY-NC-SA 3.0
---
Die Castorianer speichern ihre Daten in einer Wolke mit vier Server-Computern. Das Bild zeigt alle Datenwege zwischen diesen Servern.

![Eine Wolke mit vier Servern: STORE-1 ist mit STORE-2, PORT-1 und PORT-2 verbunden, STORE-2 mit PORT-2. Von PORT-1 und PORT-2 führen Datenwege zu den Biber-Nutzern außerhalb der Wolke](./img/cloud.png)

Für eine bessere Daten-Sicherheit sind alle Daten sowohl auf dem Speicher-Server STORE-1 als auch auf dem STORE-2 komplett gespeichert.

Für eine bessere Daten-Zugänglichkeit sind alle Daten sowohl über den Zugangs-Server PORT-1 als auch über den PORT-2 zugänglich.

Die Zugangs-Server speichern keine Daten der Castorianer.

**Welche Aussage ist FALSCH?**
