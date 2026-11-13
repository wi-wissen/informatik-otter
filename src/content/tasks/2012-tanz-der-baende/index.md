---
short: aN7A
title: Tanz der Bände
summary: Ein Bibliothekar sortiert neun Bände einer Enzyklopädie, indem er immer einen Band herausnimmt und neu einsetzt. Wie viele Schritte braucht er?
grades:
  "9-10": medium
  "11-13": easy
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [sorting, algorithm-analysis]
methods: [insertion-sort]
mascot: beaver
interaction:
  format: input
  props:
    kind: number
    suffix: Schritte
source:
  type: original
  work: Informatik-Biber 2012
  year: 2012
  page: 37
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2012/Biberheft2012-mit-Loesungen.pdf
  license: CC BY-NC-SA 3.0
---
Ein Bibliothekar möchte die Bände einer Enzyklopädie in die richtige Reihenfolge bringen, mit so wenig Schritten wie möglich.

Ein Schritt geht so: Er nimmt einen Band aus dem Regal, verschiebt einige Bände zusammen nach links oder rechts und stellt den herausgenommenen Band ins Regal zurück. Im folgenden Beispiel werden fünf Bände in einem Schritt in die richtige Reihenfolge gebracht:

![Vier Fotos eines Regals: Die Bände stehen als 1, 3, 4, 2, 5. Band 2 wird herausgenommen, die Bände 3 und 4 rücken nach rechts, Band 2 wird links davon eingesetzt. Ergebnis: 1, 2, 3, 4, 5](./img/example.png)

Eines Tages findet der Bibliothekar neun Bände in einer falschen Reihenfolge vor.

![Neun Bände im Regal in der Reihenfolge 1, 6, 7, 4, 8, 5, 3, 2, 9](./img/books.png)

**Wie viele Schritte benötigt er mindestens, um diese Bände in die richtige Reihenfolge zu bringen?**
