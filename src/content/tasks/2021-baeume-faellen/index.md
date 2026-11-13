---
short: 15k3
title: Bäume fällen
summary: Ein Biber fällt nur Bäume, die zwischen einem kleineren und einem größeren Baum stehen. Welche sind das?
grades:
  "3-4": medium
  "5-6": easy
gi:
  content: [algorithms]
  process: [reasoning]
topics: [sorting]
methods: []
mascot: beaver
interaction:
  format: graph-pick
  props:
    pick: nodes
    width: 1050
    height: 233
    background: ./img/trees.png
    hideNodes: true
    nodeRadius: 40
    nodes:
      - { id: "1", x: 42, y: 150, label: "Baum 1" }
      - { id: "2", x: 136, y: 150, label: "Baum 2" }
      - { id: "3", x: 247, y: 150, label: "Baum 3" }
      - { id: "4", x: 328, y: 150, label: "Baum 4" }
      - { id: "5", x: 413, y: 150, label: "Baum 5" }
      - { id: "6", x: 504, y: 150, label: "Baum 6" }
      - { id: "7", x: 589, y: 150, label: "Baum 7" }
      - { id: "8", x: 713, y: 150, label: "Baum 8" }
      - { id: "9", x: 852, y: 150, label: "Baum 9" }
      - { id: "10", x: 985, y: 150, label: "Baum 10" }
source:
  type: original
  work: Informatik-Biber 2021
  year: 2021
  page: 7
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2021/Biberheft_2021_mit_Loesungen_web.pdf
  country: UY
  license: CC BY-SA 4.0
---
Ein Biber möchte einen Damm bauen. Damit er immer die richtigen Bäume fällt, hat er sich zwei Bedingungen überlegt. Er wird einen Baum genau dann fällen, wenn

- direkt links daneben ein kleinerer Baum steht und
- direkt rechts daneben ein größerer Baum steht.

**Welche Bäume wird der Biber fällen?**
