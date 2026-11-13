---
short: 5RSV
title: QB-Code
summary: Zahlen als schwarz-weiße Bilder aus 3 mal 3 Feldern. Wie muss man den Code drehen, damit sein Wert am größten wird?
grades:
  "5-6": hard
gi:
  content: [information-data]
  process: [representing, reasoning]
topics: [encoding, images]
methods: [binary-numbers]
mascot: beaver
interaction:
  format: pixel-grid
  props:
    rows: 3
    cols: 3
    palette: ["#ffffff", "#000000"]
    initial: [[0, 1, 0], [1, 0, 0], [0, 0, 1]]
source:
  type: original
  work: Informatik-Biber 2015
  year: 2015
  page: 44
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2015/Biberheft2015-mit-Loesungen.pdf
  country: DE
  license: CC BY-SA 3.0
---
Die Biber stellen Zahlen als Bilder dar, und zwar mit dem „Quick Beaver Code“, kurz: QB-Code. Ein QB-Code ist ein Bild mit 3 mal 3 Feldern, die schwarz oder weiß sein können.

Wenn ein Feld schwarz ist, hat es einen Wert. Das Bild zeigt die Werte für die schwarzen Felder:

![Die Werte der Felder: oben 256, 128, 64; Mitte 32, 16, 8; unten 4, 2, 1](./img/values.png)

Den Gesamtwert eines QB-Codes bekommt man heraus, indem man die Werte der schwarzen Felder addiert.

Zum Beispiel hat dieser QB-Code den Gesamtwert 16 + 1 = 17.

![Ein QB-Code mit schwarzen Feldern in der Mitte und unten rechts](./img/example.png)

Die Biber müssen aber aufpassen, wenn sie einen QB-Code drehen. Dann könnte er nämlich einen anderen Gesamtwert bekommen.

Im Raster unten siehst du einen QB-Code mit den schwarzen Feldern oben Mitte, Mitte links und unten rechts.

**Drehe diesen QB-Code so, dass sein Gesamtwert am größten wird.** Male dazu den gedrehten QB-Code in das Raster.
