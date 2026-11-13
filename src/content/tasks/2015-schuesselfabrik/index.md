---
short: 2pcE
title: Schüsselfabrik
summary: Arbeiter vertauschen Schüsseln auf einem Fließband, bis sie nach Größe sortiert sind. Wie viele braucht man mindestens?
grades:
  "9-10": hard
  "11-13": medium
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [sorting]
methods: [bubble-sort]
mascot: beaver
interaction:
  format: input
  props:
    kind: number
    suffix: Arbeiter
source:
  type: original
  work: Informatik-Biber 2015
  year: 2015
  page: 50
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2015/Biberheft2015-mit-Loesungen.pdf
  country: MY
  license: CC BY-SA 3.0
---
In einer Fabrik werden Schüssel-Sets gefertigt, die aus 6 Schüsseln unterschiedlicher Größe bestehen. Die Produktionsmaschine stellt die Schüsseln eines Sets direkt hintereinander auf ein Fließband, jedoch in beliebiger Reihenfolge. Ein Set muss zum Verpacken aber sortiert sein. Die Schüsseln müssen also in dieser Reihenfolge auf dem Band stehen:

![Sechs Schüsseln von klein bis groß, nummeriert 1 bis 6](./img/sorted.png)

Einige Arbeiter werden ans Fließband gestellt, um die Sets zu sortieren, also in die richtige Reihenfolge zu bringen. Jeder einzelne Arbeiter vertauscht zwei nebeneinander stehende Schüsseln, wenn sie die falsche Reihenfolge haben.

**Beispiel:** Dieser Arbeiter vertauscht die Schüsseln der Größe 5 und 6. Später vertauscht er noch 1 mit 4 und danach 1 mit 3. Die Schüsseln stehen dann so auf dem Band: 1, 3, 4, 2, 5, 6.

![Ein Arbeiter am Band mit den Schüsseln 3, 4, 1, 2, 6, 5 vertauscht gerade die Schüsseln 6 und 5](./img/example.png)

Ein Schüssel-Set wird so auf das Band gestellt: 5, 6, 3, 2, 4, 1

![Das Band mit den Schüsseln in der Reihenfolge 5, 6, 3, 2, 4, 1 und mehreren Arbeitern](./img/start.png)

**Wie viele Arbeiter werden mindestens benötigt, um das Set zu sortieren?**
