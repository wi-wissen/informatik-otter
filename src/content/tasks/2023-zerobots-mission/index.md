---
short: 6ysA
title: Zerobots Mission
summary: Zerobot tauscht unterwegs seine Treibstofftanks aus. Am Ende müssen alle Tanks leer sein. Wie fährt er?
grades:
  "9-10": hard
  "11-13": medium
gi:
  content: [systems, algorithms]
  process: [modelling, reasoning]
topics: [optimization, programming]
methods: [sequence]
mascot: beaver
interaction:
  format: command-sequence
  props:
    maxLength: 15
    commands:
      - { id: up, label: "↑ hoch" }
      - { id: down, label: "↓ runter" }
      - { id: left, label: "← links" }
      - { id: right, label: "→ rechts" }
source:
  type: original
  work: Informatik-Biber 2023
  year: 2023
  page: 64
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2023/Biberheft_2023_web_komplett.pdf
  country: DE
  license: CC BY-SA 4.0
---
Zerobot hat einen austauschbaren Treibstofftank. Zerobot bewegt sich damit in einem Raster: nach oben, unten, rechts und links. Bei jeder Bewegung von einem Rasterfeld zum nächsten sinkt der Füllstand des Tanks um 1.

Auf einigen Feldern sind Austauschtanks; die Zahl darauf zeigt den Füllstand an. Wenn Zerobot ein solches Feld erreicht, tauscht er seinen Tank, egal wie voll der ist: Er nimmt den Austauschtank auf, setzt seinen bisherigen Tank auf dem Feld ab und fährt weiter.

Zerobots aktuelle Position und der Füllstand seines Tanks werden im Bild als Roboter mit einem Tank angezeigt, auf dem die Zahl steht.

Alarm: Die Tanks sind fehlerhaft und könnten explodieren!

Das ist Zerobots Mission: Er soll so zur Basisstation (Funkmast) fahren, dass am Ende alle Tanks leer sind (Füllstand 0).

![Raster mit 5 mal 5 Feldern: Zerobot mit Füllstand 9 steht unten in der Mitte (dritte Spalte), ein Austauschtank mit Füllstand 3 steht in der vierten Zeile ganz rechts, ein weiterer mit Füllstand 3 in der ersten Zeile ganz rechts, die Basisstation in der zweiten Zeile ganz links](./img/raster.png)

**Wie muss Zerobot sich bewegen, um seine Mission zu erfüllen? Gib die Bewegungen nacheinander ein.**
