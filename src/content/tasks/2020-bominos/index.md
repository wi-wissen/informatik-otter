---
short: 6XXx
title: Bominos
summary: Bominos sind Figuren aus Quadraten mit einer besonderen Regel. Finde alle drei verschiedenen 3-Bominos.
grades:
  "7-8": medium
  "9-10": easy
gi:
  content: [information-data]
  process: [modelling, reasoning]
topics: [modelling, logic]
methods: []
mascot: beaver
interaction:
  format: custom
  props: {}
source:
  type: original
  work: Informatik-Biber 2020
  year: 2020
  page: 19
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2020/Biberheft_2020_final_mit_Loesungen.pdf
  country: DE
  license: CC BY-SA 4.0
---
Bominos sind 2D-Figuren. Ein Bomino besteht aus farbigen Quadraten, die in einem Raster liegen. Die Quadrate müssen folgende Bedingungen erfüllen:

1. Jedes Quadrat berührt mindestens ein anderes Quadrat (oben, unten, links, rechts oder diagonal).
2. Für mindestens ein Paar von Quadraten des Bominos gilt:
   - Die beiden Quadrate berühren sich diagonal.
   - Kein weiteres Quadrat des Bominos berührt gleichzeitig diese beiden Quadrate.

Ein Bomino mit n Quadraten heißt auch n-Bomino. Einige Beispiele:

![Das einzig mögliche 2-Bomino: zwei Quadrate, die sich nur an einer Ecke berühren](./img/example2.png)

Dies ist das einzig mögliche Bomino aus 2 Quadraten (also: 2-Bomino).

![Ein 4-Bomino aus vier Quadraten](./img/example4a.png) ![Vier Quadrate, die kein Bomino bilden](./img/example4b.png)

Die linke Figur ist ein 4-Bomino. Die rechte Figur ist kein Bomino; Bedingung 2 ist nicht erfüllt.

Zwei Bominos gelten als gleich, wenn das eine durch Drehen oder Spiegeln (oder beides) aus dem anderen entsteht.

**Es gibt drei verschiedene 3-Bominos. Zeichne sie in die Raster.** Jedes 3-Bomino passt in ein Raster.
