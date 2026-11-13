---
short: c42g
title: Blumen pflanzen
summary: Ein großer und ein kleiner Biber pflanzen mit denselben Anweisungen Blumen. Wie sieht der Rasen danach aus?
grades:
  "7-8": medium
gi:
  content: [algorithms]
  process: [reasoning, modelling]
topics: [programming]
methods: [loop, sequence]
mascot: beaver
interaction:
  format: choice
  props:
    columns: 2
    options:
      - { id: a, image: ./img/a.png, alt: "Rasen A mit acht Blumen" }
      - { id: b, image: ./img/b.png, alt: "Rasen B mit acht Blumen" }
      - { id: c, image: ./img/c.png, alt: "Rasen C mit acht Blumen" }
      - { id: d, image: ./img/d.png, alt: "Rasen D mit acht Blumen" }
source:
  type: original
  work: Informatik-Biber 2012
  year: 2012
  page: 9
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2012/Biberheft2012-mit-Loesungen.pdf
  license: CC BY-NC-SA 3.0
---
Ein großer und ein kleiner Biber pflanzen Blumen im Garten. Der kleine Biber hat kürzere Arme und kürzere Beine als der große Biber. Deshalb macht der kleine Biber auch kürzere Schritte als der große Biber, und er pflanzt auch die Blumen näher beieinander.

![Der kleine und der große Biber stehen Rücken an Rücken auf dem Rasen](./img/beavers.png)

Am Anfang stehen sie Rücken an Rücken auf dem Rasen und schauen in entgegengesetzte Richtungen. Dann bewegen sich beide nach diesen Anweisungen:

```
wiederhole zwei Mal:
    pflanze eine Blume auf deiner rechten Seite
    gehe einen Schritt vorwärts
    pflanze eine Blume auf deiner linken Seite
    gehe einen Schritt vorwärts
```

**Wie sieht anschließend der Rasen aus?**
