---
short: 4n2E
title: Vertauschen
summary: Murmel, Edelstein und Papier wandern durch drei Vertauschungen zwischen drei Beuteln. Wo landet was?
grades:
  "3-4": medium
  "5-6": easy
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [sorting]
methods: []
mascot: beaver
interaction:
  format: match
  props:
    left:
      - { id: marble, image: ./img/marble.png, alt: Murmel }
      - { id: gem, image: ./img/gem.png, alt: Edelstein }
      - { id: paper, image: ./img/paper.png, alt: Stück Papier }
    right:
      - { id: a, label: Beutel A }
      - { id: b, label: Beutel B }
      - { id: c, label: Beutel C }
source:
  type: original
  work: Informatik-Biber 2022
  year: 2022
  page: 60
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2022/Biberheft_2022_mit_Loesungen_web.pdf
  country: CH
  license: CC BY-SA 4.0
---
Lila legt eine Murmel in Beutel A, einen Edelstein in Beutel B und ein Stück Papier in Beutel C.

![Drei Beutel A, B und C; über Beutel A schwebt die Murmel, über B der Edelstein, über C das Stück Papier](./img/start.png)

Dann vertauscht sie die Inhalte: zuerst die von Beutel A und Beutel B, danach die von A und C, und zuletzt die von B und C.

![Drei Beutel mit Pfeilen: 1 zwischen A und B, 2 zwischen A und C, 3 zwischen B und C](./img/swaps.png)

**Wo sind die drei Dinge dann?** Ordne jedem Ding den Beutel zu, in dem es am Ende liegt.
