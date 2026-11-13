---
short: Je5N
title: Schwarzweißbilder
summary: Ein Schwarzweißbild ist nur durch Zahlenreihen beschrieben. Welchen Buchstaben zeigt es?
grades:
  "5-6": medium
  "7-8": easy
gi:
  content: [information-data]
  process: [representing, reasoning]
topics: [compression, images]
methods: [run-length-encoding]
mascot: beaver
interaction:
  format: choice
  props:
    options:
      - { id: a, label: Ein „B“ }
      - { id: b, label: Ein „U“ }
      - { id: c, label: Ein „H“ }
      - { id: d, label: Ein „E“ }
source:
  type: original
  work: Informatik-Biber 2011
  year: 2011
  page: 29
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2011/Biberheft2011-mit-Loesungen.pdf
  license: CC BY-NC-SA 3.0 DE
---
In einem Computer gespeicherte Bilder werden normalerweise durch ein Raster von Punktinformationen beschrieben: den „Pixeln“. Die Pixel von Schwarzweißbildern sind entweder „schwarz“ oder „weiß“.

Schwarzweißbilder können auch zeilenweise von links nach rechts mit Zahlen beschrieben werden. Zuerst kommt die Anzahl zusammenhängender weißer Pixel, dann die Anzahl der darauf folgenden zusammenhängenden schwarzen Pixel, dann wieder der weißen Pixel, usw.

Ein Beispiel: Das Bild von „T“ hat in seiner ersten Zeile 0 weiße Pixel und dann 5 schwarze Pixel. Die weiteren Bildzeilen beginnen mit 2 weißen Pixeln, es folgen 1 schwarzes und 2 weiße Pixel.

![Das Bild eines „T“ in einem Raster aus 5 Spalten und 5 Zeilen, daneben die Zahlen 0,5 und viermal 2,1,2](./img/t.png)

Auch die folgenden Zahlen beschreiben ein Schwarzweißbild:

```
0, 1, 3, 1
0, 1, 3, 1
0, 5
0, 1, 3, 1
0, 1, 3, 1
```

**Welchen Buchstaben zeigt dieses Bild?**
