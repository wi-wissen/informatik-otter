---
short: b9Bh
title: Superstar
summary: Im sozialen Netzwerk TeeniGram folgt jeder dem Superstar, und der Superstar folgt niemandem. Gibt es in dieser Gruppe einen?
grades:
  "5-6": hard
  "7-8": easy
gi:
  content: [information-data, algorithms]
  process: [modelling, reasoning]
topics: [graphs, modelling]
methods: []
mascot: beaver
interaction:
  format: choice
  props:
    columns: 2
    options:
      - { id: a, label: "Ja, Alan ist ein Superstar in dieser Gruppe." }
      - { id: b, label: "Ja, Frances und Robin sind Superstars in dieser Gruppe." }
      - { id: c, label: "Ja, Grace ist ein Superstar in dieser Gruppe." }
      - { id: d, label: "Nein, es gibt keinen Superstar in dieser Gruppe." }
source:
  type: original
  work: Informatik-Biber 2019
  year: 2019
  page: 51
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2019/Biberheft2019-mit-Loesungen.pdf
  country: DE
  license: CC BY-SA 4.0
---
Im sozialen Netzwerk „TeeniGram“ können Mitglieder anderen Mitgliedern „folgen“. In TeeniGram gibt es außerdem Mitglieder-Gruppen. In einer Gruppe nennt man ein Mitglied „Superstar“, wenn

- jedes andere Mitglied der Gruppe ihm folgt und
- es selbst keinem anderen Mitglied der Gruppe folgt.

*Ein Beispiel:* Eine TeeniGram-Gruppe hat drei Mitglieder, nämlich Hailey, Selena und Justin.

- Hailey folgt Justin und Selena.
- Selena folgt Justin.
- Justin folgt keinem Mitglied der Gruppe.

Justin ist ein Superstar in dieser Gruppe.

![Die Gruppe als Pfeildiagramm: Pfeile von Hailey zu Justin, von Hailey zu Selena und von Selena zu Justin. Justin trägt einen Stern.](./img/example.png)

Eine andere TeeniGram-Gruppe hat diese Mitglieder: Alan, Don, Frances, Grace und Robin.

- Alan folgt Don und Grace.
- Don folgt Grace und Robin.
- Frances folgt Alan, Grace und Robin.
- Robin folgt Alan und Grace.

**Gibt es einen Superstar in dieser Gruppe?**
