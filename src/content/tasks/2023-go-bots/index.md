---
short: 6MxB
title: Go-Bots
summary: Einfache Roboter rollen geradeaus bis zum Hindernis. Mit nur vier Pfeilen soll Go-Bot 1 aufs Ziel kommen.
grades:
  "7-8": hard
  "9-10": medium
  "11-13": easy
gi:
  content: [systems, algorithms]
  process: [modelling, reasoning]
topics: [programming, parallelism]
methods: [sequence]
mascot: beaver
interaction:
  format: command-sequence
  props:
    maxLength: 8
    commands:
      - { id: b1, label: Go-Bot 1, image: ./img/bot1.png }
      - { id: b2, label: Go-Bot 2, image: ./img/bot2.png }
      - { id: b3, label: Go-Bot 3, image: ./img/bot3.png }
      - { id: b4, label: Go-Bot 4, image: ./img/bot4.png }
      - { id: up, label: "↑ hoch" }
      - { id: down, label: "↓ runter" }
      - { id: left, label: "← links" }
      - { id: right, label: "→ rechts" }
source:
  type: original
  work: Informatik-Biber 2023
  year: 2023
  page: 32
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2023/Biberheft_2023_web_komplett.pdf
  country: CZ
  license: CC BY-SA 4.0
---
Die Go-Bots sind sehr einfache Roboter. Sie fahren über ein Spielbrett mit Feldern.

Um sie zu steuern, wählt man zunächst einen der Go-Bots aus. Den schickt man dann mit einem Pfeil-Befehl in eine Richtung: hoch, runter, links oder rechts.

Der Go-Bot fährt dann stur geradeaus, bis er direkt vor einem Hindernis (orangefarbenes Feld) oder einem anderen Roboter ankommt. Dort bleibt er stehen, bis er einen neuen Befehl bekommt.

Mit einer geschickten Folge von Befehlen sollst du dafür sorgen, dass Go-Bot 1 das Ziel (grüner Stern) erreicht, also genau dort stehen bleibt.

Unten links ist ein Spielbrett mit zwei Go-Bots. Mit dieser Befehlsfolge erreicht Go-Bot 1 das Ziel – siehe unten rechts. Die Befehlsfolge lautet: Go-Bot 3 rechts, Go-Bot 1 hoch, Go-Bot 1 links.

![Die Befehlsfolge: Go-Bot 3 rechts, Go-Bot 1 hoch, Go-Bot 1 links](./img/example-commands.png)

![Spielbrett am Anfang: Go-Bot 3 oben, Go-Bot 1 unten, das Ziel ganz links in der zweiten Zeile](./img/example-start.png) ![Spielbrett am Ende: Go-Bot 3 ist nach rechts gefahren, Go-Bot 1 fährt hoch und dann links zum Ziel](./img/example-end.png)

Unten ist ein anderes Spielbrett mit vier Go-Bots.

![Spielbrett mit den Go-Bots 1 bis 4, mehreren Hindernissen und dem Ziel](./img/board.png)

**Erstelle eine Befehlsfolge mit vier Pfeilen, mit der Go-Bot 1 das Ziel erreicht!**

Wähle immer abwechselnd einen Go-Bot und einen Pfeil aus, um die Befehlsfolge zu erstellen.
