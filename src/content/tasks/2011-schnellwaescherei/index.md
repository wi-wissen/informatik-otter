---
short: vHq7
title: Schnellwäscherei
summary: Drei Kunden, drei Maschinen mit je 30 Minuten – wie schnell sind alle fertig, wenn die Maschinen gleichzeitig laufen?
grades:
  "5-6": medium
  "7-8": easy
gi:
  content: [systems]
  process: [modelling, reasoning]
topics: [parallelism, optimization]
methods: [scheduling]
mascot: beaver
interaction:
  format: choice
  props:
    options:
      - { id: a, label: 90 Minuten }
      - { id: b, label: 120 Minuten }
      - { id: c, label: 150 Minuten }
      - { id: d, label: 270 Minuten }
source:
  type: original
  work: Informatik-Biber 2011
  year: 2011
  page: 27
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2011/Biberheft2011-mit-Loesungen.pdf
  license: CC BY-NC-SA 3.0 DE
---
Johannes Biber hat eine neue Wäscherei eröffnet. Er hat drei Maschinen: eine Waschmaschine, einen Wäschetrockner und eine Bügelmaschine. Jede Maschine braucht genau 30 Minuten für ihren Arbeitsgang. Ein Kunde, der allein in der Wäscherei ist, benötigt also 90 Minuten, um seine Wäsche komplett mit allen drei Arbeitsgängen (Waschen, Trocknen, Bügeln) zu erledigen.

Drei Kunden kommen gleichzeitig und möchten ihre Wäsche möglichst schnell erledigen. Sie könnten die Maschinen so benutzen, wie im Bild gezeigt: Erst wenn ein Kunde seine Wäsche komplett erledigt hat, ist der nächste dran. Aber es geht schneller; schließlich können die Maschinen gleichzeitig laufen.

![Zeitleiste in neun Abschnitten zu je 30 Minuten: Kunde 1 nutzt nacheinander Waschmaschine, Trockner und Bügelmaschine (Abschnitte 1 bis 3), danach Kunde 2 (Abschnitte 4 bis 6), danach Kunde 3 (Abschnitte 7 bis 9)](./img/ablauf.png)

**Wie viele Minuten dauert es wenigstens, bis alle drei ihre Wäsche komplett erledigt haben?**
