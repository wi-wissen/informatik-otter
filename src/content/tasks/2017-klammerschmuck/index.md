---
short: 6L7p
title: Klammerschmuck
summary: Welches Armband aus geschwungenen Klammer-Spangen kann die Firma Klammerschmuck herstellen?
grades:
  "5-6": hard
  "7-8": medium
gi:
  content: [languages-automata]
  process: [modelling, reasoning]
topics: [formal-languages]
methods: [stack]
mascot: beaver
interaction:
  format: choice
  props:
    columns: 2
    options:
      - { id: a, image: ./img/a.png, alt: "Armband A: geschweifte Klammer auf, eckige Klammer auf, geschweifte Klammer zu, eckige Klammer zu" }
      - { id: b, image: ./img/b.png, alt: "Armband B: drei eckige Klammern auf, danach drei geschweifte Klammern zu" }
      - { id: c, image: ./img/c.png, alt: "Armband C: eckige Klammer zu, geschweifte Klammer zu, eckige Klammer zu, eckige Klammer auf, geschweifte Klammer auf, eckige Klammer auf" }
      - { id: d, image: ./img/d.png, alt: "Armband D: eckige Klammer auf, geschweifte Klammer auf, eckige Klammer auf, eckige Klammer zu, geschweifte Klammer zu, eckige Klammer zu" }
source:
  type: original
  work: Informatik-Biber 2017
  year: 2017
  page: 29
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2017/Biberheft2017-mit-Loesungen.pdf
  country: AT
  license: CC BY-SA 4.0
---
Die Firma „Klammerschmuck“ stellt Armbänder aus klammerförmigen Spangen her. Die Firma verwendet die Spangen immer paarweise, und immer in der gleichen Anordnung. Die Herstellung eines Armbands beginnt mit einem dieser Paare:

![Ein Paar aus einer öffnenden und einer schließenden eckigen Klammer (grau), oder ein Paar aus einer öffnenden und einer schließenden geschweiften Klammer (orange)](./img/pairs.png)

Danach werden wiederholt weitere Paare an beliebigen Stellen eingefügt. Hier sind Beispiele für drei verschiedene Armbänder (die Pfeile zeigen, wo ein Paar eingefügt wurde):

![Drei Beispiel-Armbänder: „{ { } } { }“, „{ [ { } ] }“ und „[ { } { { } } ]“ mit eckigen (grau) und geschweiften (orange) Klammern](./img/examples.png)

**Welches der folgenden Armbänder wurde von der Firma „Klammerschmuck“ hergestellt?**
