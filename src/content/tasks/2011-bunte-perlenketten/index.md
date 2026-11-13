---
short: jV4X
title: Bunte Perlenketten
summary: Welche der vier Perlenketten lässt sich mit Graces Syntaxdiagrammen beschreiben?
grades:
  "9-10": hard
  "11-13": hard
gi:
  content: [languages-automata]
  process: [modelling, reasoning]
topics: [formal-languages]
methods: [syntax-diagram]
mascot: beaver
interaction:
  format: choice
  props:
    options:
      - { id: a, image: ./img/kette-a.png, alt: "Kette A: rot, rot, gelb, blau Quadrat, rot Quadrat, blau, blau, blau Quadrat, rot Quadrat, gelb, rot, rot" }
      - { id: b, image: ./img/kette-b.png, alt: "Kette B" }
      - { id: c, image: ./img/kette-c.png, alt: "Kette C" }
      - { id: d, image: ./img/kette-d.png, alt: "Kette D" }
source:
  type: original
  work: Informatik-Biber 2011
  year: 2011
  page: 8
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2011/Biberheft2011-mit-Loesungen.pdf
  license: CC BY-NC-SA 3.0 DE
---
Die Kinder der kreativen Biberdame Grace basteln Perlenketten. Sie haben verschiedene Holzperlen (quadratisch und kreisförmig), die sie rot oder blau einfärben können. So können sie beispielsweise die folgende Kette basteln:

![Beispielkette: roter Kreis, gelbes Quadrat, blauer Kreis, blauer Kreis, gelbes Quadrat, roter Kreis](./img/beispiel.png)

Grace erklärt den Kindern, dass diese Kette die folgende Kettenbeschreibung hat:

![Kettenbeschreibung: rot ( Kreis ( Quadrat blau ( Kreis Kreis ) Quadrat ) Kreis )](./img/beschreibung.png)

Grace fertigt nun zwei Zeichnungen an, die „kette“ und „teil“ heißen. Sie möchte nur Ketten haben, deren Kettenbeschreibung man erhalten kann, wenn man den Pfeilen in den Zeichnungen folgt:

![Die Syntaxdiagramme „kette“ und „teil“. kette: optional die Farbe rot oder blau, dann eine öffnende Klammer, dann teil, dann eine schließende Klammer. teil: entweder Kreis, teil, Kreis; oder Quadrat, teil, Quadrat; oder kette.](./img/diagramme.png)

Die kleinen Biber basteln vier Ketten. Leider passt nur eine zu Graces Zeichnungen.

**Welche?**
