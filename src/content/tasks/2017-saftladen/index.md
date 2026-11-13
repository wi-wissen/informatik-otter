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
  format: match
  props:
    left:
      - { id: anna, label: Anna }
      - { id: bernard, label: Bernard }
      - { id: christine, label: Christine }
      - { id: daniel, label: Daniel }
    right:
      - { id: apple, image: ./img/apple.png, alt: Apfelsaft }
      - { id: pear, image: ./img/pear.png, alt: Birnensaft }
      - { id: orange, image: ./img/orange.png, alt: Orangensaft }
      - { id: currant, image: ./img/currant.png, alt: Johannisbeersaft }
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

| | 4 Herzen | 3 Herzen | 2 Herzen | 1 Herz |
|---|---|---|---|---|
| Anna | Apfelsaft | Birnensaft | Orangensaft | Johannisbeersaft |
| Bernard | Apfelsaft | Orangensaft | Birnensaft | Johannisbeersaft |
| Christine | Apfelsaft | Orangensaft | Birnensaft | Johannisbeersaft |
| Daniel | Johannisbeersaft | Apfelsaft | Orangensaft | Birnensaft |

Der Saftladen ist sehr beliebt und hat von jedem Saft nur noch je ein Glas übrig. Jeder muss also einen anderen Saft bestellen. Die Freunde wollen so bestellen, dass sie insgesamt möglichst zufrieden sind – also möglichst viele Herzen sammeln.

**Bestelle für die vier Freunde so, dass sie insgesamt möglichst viele Herzen sammeln!** Wähle für jede Person ein Glas Saft aus.
