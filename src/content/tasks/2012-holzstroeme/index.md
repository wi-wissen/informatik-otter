---
short: o7ET
title: Holzströme
summary: Baumstämme treiben durch ein Netz aus Kanälen mit begrenzter Kapazität zum Staudamm. Wie viele schaffen es pro Minute?
grades:
  "11-13": hard
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [graphs, optimization]
methods: [max-flow]
mascot: beaver
interaction:
  format: input
  props:
    kind: number
    suffix: Baumstämme pro Minute
source:
  type: original
  work: Informatik-Biber 2012
  year: 2012
  page: 25
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2012/Biberheft2012-mit-Loesungen.pdf
  license: CC BY-NC-SA 3.0
---
Im Wald (A) liegt ein Gebiet, wo die Biber Bäume für ihre Dämme fällen. Die Stämme transportieren sie auf dem Wasserweg über ein System von Kanälen zu ihrem neuen Projekt, dem größten Staudamm aller Zeiten (D). Die Pfeile stellen die Kanäle dar, die Punkte sind Verzweigungen beziehungsweise Zusammenflüsse. Jeder Kanal hat eine begrenzte Kapazität.

Pro Minute kann nur eine bestimmte Höchstzahl von Stämmen transportiert werden. Das bezeichnen die Zahlen an den Pfeilen.

![Ein Kanalnetz von A nach D mit je drei Knoten in zwei Spalten; an den Pfeilen stehen die Kapazitäten](./img/canals.png)

**Wie viele Baumstämme können den Damm pro Minute höchstens erreichen?**
