---
short: 4XvK
title: Früchte stapeln
summary: Vier Frühstücksboxen werden gestapelt, und morgens nimmt jeder blind die oberste. Wie bekommt trotzdem jeder seine Lieblingsfrucht?
grades:
  "9-10": hard
  "11-13": medium
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [data-structures, logic]
methods: [stack]
mascot: beaver
interaction:
  format: sort-list
  props:
    direction: vertical
    startLabel: oberste Box
    endLabel: unterste Box
    items:
      - { id: apple, image: ./img/apple.png, alt: Apfel }
      - { id: pear, image: ./img/pear.png, alt: Birne }
      - { id: orange, image: ./img/orange.png, alt: Orange }
      - { id: strawberry, image: ./img/strawberry.png, alt: Erdbeere }
source:
  type: original
  work: Informatik-Biber 2021
  year: 2021
  page: 28
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2021/Biberheft_2021_mit_Loesungen_web.pdf
  country: CH
  license: CC BY-SA 4.0
---
Vater, Mutter, Dorie und Ron Biber packen abends ihre vier Frühstücksboxen. In jede Box kommt eine andere Frucht, und dann werden die Boxen gestapelt. Morgens sind die Bibers noch sehr müde: Wer den Bau verlässt, nimmt einfach die oberste Box vom Stapel, ohne hinzusehen.

Die Biber wissen nicht genau, in welcher Reihenfolge sie morgens den Bau verlassen. Aber Mutter geht immer vor Dorie, und Vater geht immer als Letzter. Die Biber wünschen sich: Die Früchte sollen so in den Boxenstapel, dass in jedem Fall jeder eine Frucht bekommt, die er mag. Die Tabelle zeigt, welche Früchte jeder Biber mag.

![Tabelle: Vater mag nur Orange. Mutter mag Apfel, Orange und Erdbeere, aber keine Birne. Dorie mag Apfel, Birne und Orange, aber keine Erdbeere. Ron mag Apfel, Birne und Erdbeere, aber keine Orange.](./img/table.png)

**Bringe die Früchte in die gewünschte Reihenfolge im Boxenstapel, von der obersten bis zur untersten Box.**
