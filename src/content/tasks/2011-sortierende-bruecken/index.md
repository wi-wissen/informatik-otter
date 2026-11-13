---
short: H9fE
title: Sortierende Brücken
summary: Vier Biber laufen über ein Netz aus Brettern und Steinen und kommen am Ziel sortiert an. Welches Netzwerk funktioniert?
grades:
  "11-13": hard
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [sorting, parallelism]
methods: [sorting-network]
mascot: beaver
interaction:
  format: choice
  props:
    columns: 4
    options:
      - { id: a, image: ./img/netz-a.png, alt: "Netzwerk A: vier Startplätze unten, vier Zielplätze oben, mit Steinen im Fluss" }
      - { id: b, image: ./img/netz-b.png, alt: "Netzwerk B" }
      - { id: c, image: ./img/netz-c.png, alt: "Netzwerk C" }
      - { id: d, image: ./img/netz-d.png, alt: "Netzwerk D" }
source:
  type: original
  work: Informatik-Biber 2011
  year: 2011
  page: 30
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2011/Biberheft2011-mit-Loesungen.pdf
  license: CC BY-NC-SA 3.0 DE
---
Unten am Fluss spielen drei Biber das Spiel „Sortierende Brücken“. Sie haben sich ein Netzwerk gebaut – siehe das Bild. Das Netzwerk besteht aus Plätzen: den grünen Startplätzen am unteren Ufer, den roten Zielplätzen am oberen Ufer und den Steinen im Fluss. Diese Plätze sind durch einige Bretter verbunden.

![Netzwerk für drei Biber: drei grüne Startplätze unten, drei rote Zielplätze oben und zwei Steine im Fluss, durch braune Bretter verbunden](./img/beispiel.png)

Anfangs steht jeder Biber auf einem Startplatz. Von einem Platz aus darf er nur in Richtung Ziel über das Brett zu einem benachbarten Platz gehen. Wenn ein Biber als erster auf einen Stein kommt, wartet er dort auf einen weiteren Biber. Wenn dann zwei Biber auf dem Stein stehen, geht der kleinere Biber über das linke Brett weiter, der größere Biber nimmt das rechte Brett.

Egal wie die Biber sich am Start aufgestellt haben, am Ziel sind sie immer der Größe nach sortiert. Links steht der kleinste Biber und rechts steht der größte. Das finden sie lustig.

Da kommt ein vierter Biber und will mitspielen. Nun brauchen sie ein neues Netzwerk, mit dem vier Biber sortiert werden können. Die Biber probieren vier verschiedene Netzwerke aus.

**Aber nur eines funktioniert richtig. Welches?**
