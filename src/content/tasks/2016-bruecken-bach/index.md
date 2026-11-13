---
short: imX4
title: Brücken-Bach
summary: Biber blockieren gern Bäche mit einem Damm. Aber in welchem Revier kann man das ohne Folgen tun, egal welchen Bach man wählt?
grades:
  "5-6": hard
  "7-8": medium
gi:
  content: [information-data, algorithms]
  process: [modelling, reasoning]
topics: [graphs]
methods: [graph-connectivity]
mascot: beaver
interaction:
  format: choice
  props:
    columns: 2
    options:
      - { id: a, image: ./img/a.png, alt: "Revier A", label: A }
      - { id: b, image: ./img/b.png, alt: "Revier B", label: B }
      - { id: c, image: ./img/c.png, alt: "Revier C", label: C }
      - { id: d, image: ./img/d.png, alt: "Revier D", label: D }
source:
  type: original
  work: Informatik-Biber 2016
  year: 2016
  page: 16
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2016/Biberheft2016-mit-Loesungen.pdf
  country: US
  license: CC BY-SA 3.0
---
Im Biberrevier leben die Biber in Teichen. Jeder Teich hat mindestens einen Bach, durch den die Biber zum nächsten Teich schwimmen können. Die Biber schaffen aber auch Schwimmstrecken durch mehrere Bäche. So können sie zu jedem Teich schwimmen, egal wo sie starten.

Gerne blockieren die Biber einen Bach mit einem Damm. Aber sie müssen aufpassen: Wenn die Biber den falschen Bach blockieren, werden manche Teiche vom Rest des Biberreviers abgetrennt. Die Biber können dann nicht mehr zu jedem Teich schwimmen. Solch einen Bach nennen die Biber „Brücken-Bach“. Ein Brücken-Bach ist die einzige Verbindung zwischen zwei Teilen des Reviers.

Auf den Bildern sind einige Biberreviere zu sehen.

**Nur ein Biberrevier hat keinen Brücken-Bach. Welches?**
