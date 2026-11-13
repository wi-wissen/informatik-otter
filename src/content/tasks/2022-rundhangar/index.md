---
short: 7oPK
title: Rundhangar
summary: Flugzeuge parken auf einer Drehscheibe. Bei welcher Abholreihenfolge muss man am häufigsten drehen?
grades:
  "7-8": hard
  "9-10": medium
  "11-13": easy
gi:
  content: [algorithms]
  process: [reasoning]
topics: [algorithm-analysis]
methods: []
mascot: beaver
interaction:
  format: sort-list
  props:
    direction: horizontal
    startLabel: zuerst abgeholt
    endLabel: zuletzt abgeholt
    items:
      - { id: "1", label: "1" }
      - { id: "2", label: "2" }
      - { id: "3", label: "3" }
      - { id: "4", label: "4" }
      - { id: "5", label: "5" }
      - { id: "6", label: "6" }
source:
  type: original
  work: Informatik-Biber 2022
  year: 2022
  page: 46
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2022/Biberheft_2022_mit_Loesungen_web.pdf
  country: DE
  license: CC BY-SA 4.0
---
Auf dem Flugplatz von Beavertown parken sechs Flugzeuge in einem Hangar. Sie stehen auf einer Drehscheibe, in sechs Parkpositionen.

Außen gibt es zwei Pfeiltasten (rot nach links, grün nach rechts). Mit einem Tastendruck kann man die Drehscheibe um genau eine Parkposition nach links oder rechts drehen.

![Runde Drehscheibe mit sechs Parkpositionen, auf jeder ein Flugzeug. Die Positionen sind im Uhrzeigersinn von unten (Hangartor) so nummeriert: 1 unten, 2 unten links, 3 oben links, 4 oben, 5 oben rechts, 6 unten rechts. Rechts unten die beiden Pfeiltasten](./img/hangar.png)

Morgens, wenn die Piloten ihre Flugzeuge abholen, ist die Parkposition 1 immer beim Hangartor, und das Flugzeug darauf kann herausrollen. Im besten Fall müssen die Pfeiltasten dann noch fünfmal gedrückt werden, damit auch alle weiteren Flugzeuge herausrollen können. Wenn beispielsweise die Piloten in der Reihenfolge 1, 6, 5, 4, 3, 2 auf die Parkpositionen zugreifen wollen, genügt es, die Taste „nach links“ fünfmal zu drücken.

Aber was ist der schlechteste Fall? Bei welcher Reihenfolge müssen die Tasten am häufigsten gedrückt werden? Natürlich drücken die Piloten die Tasten nur so oft wie unbedingt nötig, damit ihr Flugzeug herausrollen kann.

**Gib ein Beispiel für eine solche Reihenfolge.** Ordne die Positionen 1 bis 6 in der Reihenfolge an, in der die Flugzeuge abgeholt werden.
