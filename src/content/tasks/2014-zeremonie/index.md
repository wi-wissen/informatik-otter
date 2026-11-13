---
short: o61R
title: Zeremonie
summary: Acht Programmpunkte einer Feier hängen voneinander ab. Wie plant man die Zeremonie in einer gültigen Reihenfolge?
grades:
  "7-8": hard
  "9-10": medium
  "11-13": easy
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [graphs]
methods: [topological-sort]
mascot: beaver
interaction:
  format: custom
  props:
    mode: insert
    direction: vertical
    startLabel: zuerst
    endLabel: zuletzt
    items:
      - { id: feuerwerk, label: Feuerwerk }
      - { id: preis, label: Preisverleihung }
      - { id: dank, label: Danksagung }
      - { id: rede, label: Lange Rede }
      - { id: trommel, label: Trommelwirbel }
      - { id: chor, label: Chorgesang }
      - { id: fanfare, label: Fanfare }
      - { id: tanz, label: Tanzeinlage }
source:
  type: original
  work: Informatik-Biber 2014
  year: 2014
  page: 57
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2014/Biberheft2014-mit-Loesungen.pdf
  license: CC BY-NC-SA 3.0
---
Eine feierliche Zeremonie besteht aus einzelnen Aktionen, die unbedingt in der richtigen Reihenfolge durchzuführen sind. Das Bild zeigt die Bestandteile einer Zeremonie. Ein Pfeil von einer ersten Aktion zu einer zweiten bedeutet, dass die erste vor der zweiten stattfinden muss. Zum Beispiel muss der Chorgesang vor dem Trommelwirbel und der langen Rede stattfinden.

![Die Aktionen und ihre Vorrang-Pfeile: Chorgesang → Trommelwirbel, Chorgesang → Lange Rede, Trommelwirbel → Tanzeinlage, Lange Rede → Tanzeinlage, Lange Rede → Preisverleihung, Lange Rede → Feuerwerk, Tanzeinlage → Fanfare, Fanfare → Feuerwerk, Preisverleihung → Danksagung, Feuerwerk → Danksagung](./img/plan.png)

**Plane eine Zeremonie!**

Ziehe die einzelnen Aktionen in der Box in eine richtige Reihenfolge. Die erste Aktion der Zeremonie soll oben stehen, darunter kommt die nächste, usw.
