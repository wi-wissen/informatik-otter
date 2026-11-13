---
short: yHH6
title: Kleiner Teich
summary: Die Biber fluten Tag für Tag jedes Waldstück neben dem Wasser. Wann steht der ganze Wald unter Wasser?
grades:
  "5-6": hard
  "7-8": medium
  "9-10": easy
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [graphs, searching]
methods: [bfs, flood-fill]
mascot: beaver
interaction:
  format: input
  props:
    kind: number
    suffix: Tage
source:
  type: original
  work: Informatik-Biber 2018
  year: 2018
  page: 43
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2018/Biberheft2018-mit-Loesungen.pdf
  country: LT
  license: CC BY-SA 4.0
---
In einem Tal liegt ein kleiner Teich. Er ist umgeben von Landstücken mit Wald oder mit Felsen. Im Teich leben einige Biber. Eines Tages wird den Bibern der Teich zu klein, und nun fluten sie den Wald. An jedem Tag fluten sie alle Waldstücke, die an bereits geflutete Waldstücke angrenzen. Nach einem Tag sind drei Waldstücke geflutet.

![Links der Teich im Tal, umgeben von Wald- und Felsstücken; rechts derselbe Teich nach einem Tag, mit drei zusätzlich gefluteten Waldstücken](./img/pond.png)

**Nach wie vielen Tagen sind alle Waldstücke geflutet?**
