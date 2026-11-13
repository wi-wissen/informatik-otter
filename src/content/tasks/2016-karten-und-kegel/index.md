---
short: 412o
title: Karten und Kegel
summary: Ein Biber legt Zahlenkarten unter farbige Kegel. Welche Karte liegt zuletzt jeweils oben?
grades:
  "9-10": easy
gi:
  content: [algorithms]
  process: [modelling, representing]
topics: [programming, data-structures]
methods: [stack]
mascot: beaver
interaction:
  format: hotspots
  props:
    background: ./img/question.png
    width: 625
    height: 400
    spots:
      - { id: rot, x: 83, y: 318, w: 78, h: 90, label: roter Kegel }
      - { id: blau, x: 312, y: 322, w: 78, h: 90, label: blauer Kegel }
      - { id: gelb, x: 550, y: 325, w: 78, h: 90, label: gelber Kegel }
    states:
      - { id: "?", label: "?" }
      - { id: "1", label: "1" }
      - { id: "3", label: "3" }
      - { id: "5", label: "5" }
      - { id: "6", label: "6" }
      - { id: "8", label: "8" }
source:
  type: original
  work: Informatik-Biber 2016
  year: 2016
  page: 36
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2016/Biberheft2016-mit-Loesungen.pdf
  country: FR
  license: CC BY-SA 3.0
---
Der Biber hat drei Kegel (rot, blau, gelb) und einen Stapel Karten.

Der Biber spielt mit Karten, auf die er Zahlen schreibt. Die Karten stapelt er unter farbigen Kegeln. Wenn er einen Kegel anhebt, sieht er nur die oberste Karte des Stapels.

Der Biber schreibt in dieser Form auf, was er tut:

![Aufschrieb „rot <--- 5; rot <--- 3;“: Zuerst liegt unter dem roten Kegel die Karte 5, danach liegt dort ein Stapel mit der Karte 3 obenauf](./img/example.png)

Nun bist du dran. Der Biber schreibt:

`rot <--- 3; gelb <--- 5; rot <--- 6; gelb <--- 8; blau <--- 1; gelb <--- 3;`

**Welche Karten sieht der Biber, wenn er die Kegel anhebt?** Klicke auf die Fragezeichen unter den Kegeln, bis die richtige Zahl dort steht.
