---
short: s4Vw
title: Zufallsbilder
summary: Eine Druckmaschine bedruckt Geschenkpapier mit zufälligen Kreisen und Quadraten. Welcher Bogen kann nicht von ihr stammen?
grades:
  "9-10": medium
  "11-13": medium
gi:
  content: [algorithms]
  process: [reasoning]
topics: [programming, algorithm-analysis]
methods: [loop]
mascot: beaver
interaction:
  format: choice
  props:
    columns: 2
    options:
      - { id: a, image: ./img/a.png, alt: "Papierbogen A: ein großes rotes Quadrat mit schwarzem Kreis, ein cyanfarbenes Quadrat mit gelbem Kreis" }
      - { id: b, image: ./img/b.png, alt: "Papierbogen B: ein rosa Quadrat und ein blaues Quadrat" }
      - { id: c, image: ./img/c.png, alt: "Papierbogen C: zwei rosa Kreise, drei blaue Quadrate, einer der Kreise überdeckt ein Quadrat" }
      - { id: d, image: ./img/d.png, alt: "Papierbogen D: ein grüner großer Kreis, ein grüner kleiner Kreis, ein blaues und ein gelbes Quadrat" }
source:
  type: original
  work: Informatik-Biber 2013
  year: 2013
  page: 48
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2013/Biberheft2013-mit-Loesungen.pdf
  license: CC BY-NC-SA 3.0
---
Eine Fabrik produziert Geschenkpapier. Der Druck eines Papierbogens funktioniert so: Die Druckmaschine plant farbige Kreise und Quadrate und druckt sie auf den Papierbogen.

Im Einzelnen führt die Druckmaschine folgende Anweisungen aus:

1. Plane einen Kreis mit einer zufälligen Farbe und nenne ihn K.
2. Wiederhole den folgenden Block aus vier Anweisungen zufällig oft:
   - 2a. Plane ein Quadrat zufälliger Farbe und Größe und nenne es Q.
   - 2b. Setze die Größe von K nach dem Zufallsprinzip auf KLEIN oder GROSS.
   - 2c. Drucke K an einer zufälligen Position auf den Papierbogen.
   - 2d. Drucke Q an einer zufälligen Position auf den Papierbogen.

**Welcher Papierbogen wurde NICHT von der Druckmaschine gedruckt?**
