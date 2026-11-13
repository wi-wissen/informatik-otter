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
  format: match
  props:
    left:
      - { id: rot, label: roter Kegel }
      - { id: blau, label: blauer Kegel }
      - { id: gelb, label: gelber Kegel }
    right:
      - { id: "1", label: "Karte 1" }
      - { id: "3", label: "Karte 3" }
      - { id: "5", label: "Karte 5" }
      - { id: "6", label: "Karte 6" }
      - { id: "8", label: "Karte 8" }
source:
  type: original
  work: Informatik-Biber 2016
  year: 2016
  page: 36
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2016/Biberheft2016-mit-Loesungen.pdf
  country: FR
  license: CC BY-SA 3.0
---
![Ein roter, ein blauer und ein gelber Kegel und ein Stapel Karten](./img/cones.png)

Der Biber spielt mit Karten, auf die er Zahlen schreibt. Die Karten stapelt er unter farbigen Kegeln. Wenn er einen Kegel anhebt, sieht er nur die oberste Karte des Stapels.

Der Biber schreibt in dieser Form auf, was er tut:

![Aufschrieb „rot <--- 5; rot <--- 3;“: Zuerst liegt unter dem roten Kegel die Karte 5, danach liegt dort ein Stapel mit der Karte 3 obenauf](./img/example.png)

Nun bist du dran. Der Biber schreibt:

`rot <--- 3; gelb <--- 5; rot <--- 6; gelb <--- 8; blau <--- 1; gelb <--- 3;`

**Welche Karten sieht der Biber, wenn er die Kegel anhebt?**
