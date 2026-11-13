---
short: a5HY
title: Saftladen
summary: Vier Freunde mögen Säfte unterschiedlich gern, aber jeder Saft ist nur einmal da. Wie werden alle am glücklichsten?
grades:
  "7-8": medium
  "9-10": medium
  "11-13": easy
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [optimization, graphs]
methods: [matching]
mascot: beaver
interaction:
  format: custom
  props:
    names: [Anna, Bernard, Christine, Daniel]
    hearts: [4, 3, 2, 1]
    juices:
      - { id: apple, label: Apfelsaft, image: ./img/apple.png }
      - { id: pear, label: Birnensaft, image: ./img/pear.png }
      - { id: orange, label: Orangensaft, image: ./img/orange.png }
      - { id: currant, label: Johannisbeersaft, image: ./img/currant.png }
    table:
      - [apple, pear, orange, currant]
      - [apple, orange, pear, currant]
      - [apple, orange, pear, currant]
      - [currant, apple, orange, pear]
source:
  type: original
  work: Informatik-Biber 2017
  year: 2017
  page: 52
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2017/Biberheft2017-mit-Loesungen.pdf
  country: CA
  license: CC BY-SA 4.0
---
Vier Freunde halten bei einem Laden. Dort möchte jeder ein Glas Saft trinken. Die Tabelle zeigt, welchen Saft jeder wie gerne trinkt: je mehr Herzen, desto lieber.

Der Saftladen ist sehr beliebt und hat von jedem Saft nur noch je ein Glas übrig. Jeder muss also einen anderen Saft bestellen. Die Freunde wollen so bestellen, dass sie insgesamt möglichst zufrieden sind – also möglichst viele Herzen sammeln.

**Bestelle für die vier Freunde so, dass sie insgesamt möglichst viele Herzen sammeln!** Klicke jeweils ein Glas in der Tabelle an, um für eine Person ein Glas Saft zu bestellen.
