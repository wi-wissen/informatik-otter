---
short: BPA1
title: Viertel
summary: Ein Pixelbild wird durch immer neues Vierteln verlustfrei kürzer aufgeschrieben. Was kommt bei diesem Bild heraus?
grades:
  "11-13": hard
gi:
  content: [information-data]
  process: [modelling, representing]
topics: [compression, trees, images]
methods: []
mascot: beaver
interaction:
  format: choice
  props:
    columns: 1
    options:
      - { id: a, label: "( 1 1 1 0 )" }
      - { id: b, label: "( 1 1 ( 1 0 1 1 ) 1 )" }
      - { id: c, label: "( 1 1 1 ( 1 ( 1 1 0 1 ) 1 1 ) )" }
      - { id: d, label: "( 1 1 1 ( 1 ( 1 0 1 1 ) 1 1 ) )" }
source:
  type: original
  work: Informatik-Biber 2017
  year: 2017
  page: 57
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2017/Biberheft2017-mit-Loesungen.pdf
  country: KR
  license: CC BY-SA 4.0
---
Schwarz-weiße Pixelbilder können mit den Binärzeichen 0 und 1 so dargestellt werden: Eine 0 steht für ein weißes Pixel, eine 1 für ein schwarzes Pixel. Ein Bild mit 4 mal 4 Pixeln wird so mit 16 Zeichen dargestellt.

Viele Bilder kann man mit weniger Zeichen darstellen, wenn man das Verfahren *Viertel* anwendet. Dazu werden die Zeichen in einem quadratischen Raster angeordnet. Das Verfahren Viertel wird auf das Raster so angewendet:

- Falls alle Zeichen im Raster 0 sind, ist das Ergebnis das Zeichen 0 (siehe Bild links).
- Falls alle Zeichen im Raster 1 sind, ist das Ergebnis das Zeichen 1.
- Andernfalls wird das Raster in vier gleich große Teil-Raster aufgeteilt. Das Verfahren Viertel wird dann der Reihe nach auf diese Teil-Raster angewendet, von links oben aus im Uhrzeigersinn. Das (Gesamt-)Ergebnis entsteht so: Die vier (Teil-)Ergebnisse werden hintereinander geschrieben, zwischen die Klammerzeichen ( und ) (siehe Bild Mitte und rechts).

Beachte: Wenn ein Raster aus nur einem Zeichen besteht, ist das Ergebnis genau dieses Zeichen.

![Drei Beispiele. Links: ein 4×4-Raster nur aus Nullen hat das Ergebnis 0. Mitte: ein 4×4-Raster mit 1 1 0 0 / 1 1 0 0 / 1 1 1 1 / 1 1 1 1 hat das Ergebnis (1 0 1 1). Rechts: ein 4×4-Raster mit 1 1 0 0 / 1 1 0 0 / 1 1 0 1 / 1 1 0 1 hat das Ergebnis (1 0 (0 1 1 0) 1).](./img/examples.png)

Hier ist das Zeichen-Raster für ein Bild mit 8 mal 8 Pixeln:

```
1 1 1 1 1 1 1 1
1 1 1 1 1 1 1 1
1 1 1 1 1 1 1 1
1 1 1 1 1 1 1 1
1 1 1 0 1 1 1 1
1 1 1 1 1 1 1 1
1 1 1 1 1 1 1 1
1 1 1 1 1 1 1 1
```

**Wende das Verfahren Viertel auf dieses Raster an. Was ist das Ergebnis?**
