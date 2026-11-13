---
short: 9PjF
title: ... und du bist raus!
summary: Sechs Biber zählen sich mit einem Abzählreim nach und nach aus dem Kreis. In welcher Reihenfolge scheiden sie aus?
grades:
  "5-6": medium
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [algorithm-analysis, games]
methods: [josephus-problem]
mascot: beaver
interaction:
  format: choice
  props:
    options:
      - { id: a, label: "Biber 3, 1, 2, 6, 4. Biber 5 bleibt übrig." }
      - { id: b, label: "Biber 3, 1, 6, 5, 2. Biber 4 bleibt übrig." }
      - { id: c, label: "Biber 3, 4, 5, 6, 1. Biber 5 bleibt übrig." }
      - { id: d, label: "Biber 3, 5, 1, 2, 4. Biber 6 bleibt übrig." }
source:
  type: original
  work: Informatik-Biber 2011
  year: 2011
  page: 35
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2011/Biberheft2011-mit-Loesungen.pdf
  license: CC BY-NC-SA 3.0 DE
---
Das Abzählen geht bei den Bibern so: Wer mit Abzählen an der Reihe ist, beginnt bei sich selbst und zählt den Kreis im Uhrzeigersinn durch, einen Biber pro Silbe des Abzählreims. Der mit der letzten Silbe erreicht wird, muss den Kreis verlassen. Das neue Abzählen beginnt beim nächsten Biber im Kreis. Wenn der Biber, der gezählt hat, selbst raus muss, kommt der nächste Biber im Kreis mit Abzählen an die Reihe.

Sechs Biber stehen im Kreis und spielen Abzählen. Ihr Abzählreim hat neun Silben. Biber 1 ist mit Abzählen an der Reihe, fängt also bei sich an zu zählen. Biber 3 muss nach neun Silben als erster raus. Das neue Abzählen beginnt also bei Biber 4.

![Sechs Biber im Kreis, im Uhrzeigersinn nummeriert 1 (oben), 2, 3 (rot, scheidet aus), 4, 5, 6](./img/kreis.png)

**In welcher Reihenfolge verlassen die Biber den Kreis?**
