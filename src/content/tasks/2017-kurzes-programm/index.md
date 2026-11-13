---
short: E8Mq
title: Kurzes Programm
summary: Ein Roboter soll mit einem ganz kurzen Programm von einem Startfeld an der Wand zum Zielfeld gelangen.
grades:
  "5-6": medium
  "7-8": easy
gi:
  content: [algorithms]
  process: [modelling]
topics: [programming]
methods: [loop, conditional]
mascot: beaver
interaction:
  format: match
  props:
    left:
      - { id: free, label: "Wenn der Weg vorne frei ist, dann:" }
      - { id: blocked, label: "Sonst:" }
    right:
      - { id: forward, label: gehe vorwärts }
      - { id: left, label: drehe nach links }
      - { id: right, label: drehe nach rechts }
source:
  type: original
  work: Informatik-Biber 2017
  year: 2017
  page: 35
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2017/Biberheft2017-mit-Loesungen.pdf
  country: GB
  license: CC BY-SA 4.0
---
Der dreieckige Roboter soll vom roten Startfeld zum grünen Zielfeld gehen. Der Roboter kann nur sehr kurze Programme verarbeiten: Du darfst höchstens vier Bausteine für dein Programm benutzen.

![Der Raum: Ein Rechteck mit 8 mal 5 Feldern. Der Roboter steht auf dem roten Startfeld unten links an der Wand und schaut nach rechts, das grüne Zielfeld liegt oben rechts an der Wand.](./img/room.png)

Das Programm besteht aus diesen vier Bausteinen: **wiederhole** – darin **wenn der Weg vorne frei ist, mache …, sonst mache …**. Der Roboter kennt die Befehle „gehe vorwärts“, „drehe nach links“ und „drehe nach rechts“.

**Programmiere den Roboter! Welcher Befehl muss im Programm jeweils stehen?**
