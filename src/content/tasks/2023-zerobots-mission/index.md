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
  format: custom
  props:
    size: 5
    start: { row: 4, col: 2, fuel: 9 }
    base: { row: 1, col: 0 }
    tanks:
      - { row: 3, col: 4, fuel: 3, color: "#f28c28" }
      - { row: 0, col: 4, fuel: 3, color: "#5b8c3a" }
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

**Wie muss Zerobot sich bewegen, um seine Mission zu erfüllen?**

Fahre Zerobot mit den Pfeiltasten (oder den Pfeilen unter dem Raster) zur Basisstation. Mit „Einen Schritt zurück“ nimmst du die letzte Bewegung zurück.
