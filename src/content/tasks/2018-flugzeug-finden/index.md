---
short: tvd9
title: Flugzeug finden
summary: Mit zwei Schildern zeigt Jana, wohin Robin laufen soll – doch manche Schilderfolgen lassen sich auf mehrere Arten lesen. Welcher Code ist eindeutig?
grades:
  "11-13": medium
gi:
  content: [information-data]
  process: [reasoning, representing]
topics: [encoding]
methods: []
mascot: beaver
interaction:
  format: choice
  props:
    columns: 1
    options:
      - { id: a, image: ./img/option-a.png, alt: "Code A: links = X, rechts = X O, vor = X O O X, zurück = O X O" }
      - { id: b, image: ./img/option-b.png, alt: "Code B: links = O, rechts = X, vor = O X, zurück = X O" }
      - { id: c, image: ./img/option-c.png, alt: "Code C: links = X O O, rechts = X O O O, vor = X, zurück = X O" }
      - { id: d, image: ./img/option-d.png, alt: "Code D: links = X O O, rechts = O X, vor = X O O X, zurück = X" }
source:
  type: original
  work: Informatik-Biber 2018
  year: 2018
  page: 34
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2018/Biberheft2018-mit-Loesungen.pdf
  country: BE
  license: CC BY-SA 4.0
---
Jana und Robin spielen mit ihrem Modellflugzeug. Sie lassen es von einem Hügel aus starten und weit weg im Gras landen. Dann geht Robin das Flugzeug holen. Aber das Gras ist hoch, und nur vom Hügel aus kann man das Flugzeug sehen.

Jana zeigt vom Hügel aus, wohin Robin laufen muss, um das Flugzeug zu finden. Dazu haben sie zwei Schilder mitgebracht (ein Schild mit blauem X und eines mit rotem O) und diesen Code vereinbart:

![Code: links = X, rechts = X O, vor = X O X, zurück = O X O](./img/code.png)

Leider gibt es ein Problem mit diesem Code. Ein Beispiel:

![Die Schilderfolge X X O X X](./img/example.png)

Diese Schilderfolge kann bedeuten: links, vor, links. Sie kann aber auch bedeuten: links, rechts, links, links.

Jana und Robin überlegen sich deshalb einen neuen Code. Damit kann es keine Schilderfolge geben, die mehrere Bedeutungen hat.

**Welcher ist der neue Code?**
