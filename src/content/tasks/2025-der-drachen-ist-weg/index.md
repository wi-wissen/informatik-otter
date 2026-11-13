---
short: 4dqJ
title: Der Drachen ist weg!
summary: Die Schnur verrät, wo der Drachen im hohen Gras liegt. Welches eine Feld muss Asterios noch durchsuchen?
grades:
  "7-8": hard
  "9-10": medium
  "11-13": easy
gi:
  content: [algorithms]
  process: [reasoning]
topics: [searching, logic]
methods: []
mascot: beaver
interaction:
  format: graph-pick
  props:
    pick: nodes
    width: 555
    height: 103
    background: ./img/field.png
    hideNodes: true
    nodeRadius: 15
    nodes:
      - { id: f1, x: 65, y: 55 }
      - { id: f2, x: 96, y: 55 }
      - { id: f3, x: 127, y: 55 }
      - { id: f4, x: 189, y: 55 }
      - { id: f5, x: 220, y: 55 }
      - { id: f6, x: 251, y: 55 }
      - { id: f7, x: 314, y: 55 }
      - { id: f8, x: 345, y: 55 }
      - { id: f9, x: 377, y: 55 }
      - { id: f10, x: 439, y: 55 }
      - { id: f11, x: 469, y: 55 }
      - { id: f12, x: 501, y: 55 }
    edges: []
source:
  type: original
  work: Informatik-Biber 2025
  year: 2025
  page: 33
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2025/Biberheft_2025_web_komplett.pdf
  country: GR
  license: CC BY-SA 4.0
---
So ein Pech! Asterios hat seinen Drachen auf der Wiese verloren. Die Drachenschnur hat sich im hohen Gras verfangen, und es ist gar nicht so einfach, den Drachen wiederzufinden.

![Asterios mit der Drachenschnur in der Hand, der Drachen hängt hinter hohem Gras](./img/kite.png)

Die Wiese ist in 15 Felder unterteilt, die man einzeln durchsuchen kann.

Asterios hat schon 3 Felder der Wiese durchsucht (die hellgrünen Felder, in denen man die Schnur sieht). Er schaut sich genau an, wie die Schnur in diesen Feldern verläuft, und erkennt: Jetzt muss er nur noch ein weiteres Feld durchsuchen, um sicher zu wissen, wo der Drachen ist.

![Die Wiese von links nach rechts: Die Schnur beginnt links am Griff und geht in die erste Gruppe aus drei dunkelgrünen Feldern. Zwischen den vier Gruppen sind hellgrüne, durchsuchte Felder, in denen die Schnur zu sehen ist](./img/field.png)

**Welches Feld ist das?**
