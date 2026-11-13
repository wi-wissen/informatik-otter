---
short: QX8A
title: Bunte Perlenketten
summary: Welche der vier Perlenketten lässt sich aus den Syntaxdiagrammen von Biberdame Grace bauen?
grades:
  "11-13": hard
gi:
  content: [languages-automata]
  process: [modelling, representing]
topics: [formal-languages]
methods: [context-free-grammar]
mascot: beaver
interaction:
  format: choice
  props:
    columns: 1
    options:
      - { id: a, image: ./img/a.png, alt: "Kette A" }
      - { id: b, image: ./img/b.png, alt: "Kette B" }
      - { id: c, image: ./img/c.png, alt: "Kette C" }
      - { id: d, image: ./img/d.png, alt: "Kette D" }
source:
  type: original
  work: Informatik-Biber 2013
  year: 2013
  page: 7
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2013/Biberheft2013-mit-Loesungen.pdf
  license: CC BY-NC-SA 3.0
---
Die Kinder der kreativen Biberdame Grace basteln Perlenketten. Sie haben verschiedene Holzperlen (quadratisch und kreisförmig), die sie rot oder blau einfärben können. So können sie beispielsweise die folgende Kette basteln:

![Kette aus sechs Perlen: roter Kreis, gelbes Quadrat, blauer Kreis, blauer Kreis, gelbes Quadrat, roter Kreis](./img/example.png)

Grace erklärt den Kindern, dass diese Kette die folgende Kettenbeschreibung hat:

![Kettenbeschreibung: rot ( Kreis ( Quadrat blau ( Kreis Kreis ) Quadrat ) Kreis )](./img/description.png)

Grace fertigt nun zwei Zeichnungen an, die „kette“ und „teil“ heißen. Sie möchte nur Ketten haben, deren Kettenbeschreibung man erhalten kann, wenn man den Pfeilen in den Zeichnungen folgt:

![Zwei Syntaxdiagramme. kette: wahlweise rot oder blau, dann Klammer auf, teil, Klammer zu. teil: entweder Kreis, teil, Kreis, oder Quadrat, teil, Quadrat, oder kette](./img/diagrams.png)

Die kleinen Biber basteln vier Ketten. Leider passt nur eine zu Graces Zeichnungen.

**Welche?**
