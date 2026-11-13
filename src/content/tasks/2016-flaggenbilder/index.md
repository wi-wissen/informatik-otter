---
short: m7se
title: Flaggenbilder
summary: Flaggenbilder werden zeilenweise komprimiert gespeichert. Welche Flagge braucht die größte Datei?
grades:
  "11-13": hard
gi:
  content: [information-data]
  process: [reasoning, modelling]
topics: [compression, images]
methods: [run-length-encoding]
mascot: beaver
interaction:
  format: sort-list
  props:
    direction: horizontal
    startLabel: größte GIW-Datei
    endLabel: kleinste GIW-Datei
    items:
      - { id: a, image: ./img/armenia.png, alt: "Flagge von Armenien (drei waagerechte Streifen: rot, blau, orange)" }
      - { id: b, image: ./img/czechia.png, alt: "Flagge von Tschechien (oben weiß, unten rot, links ein blaues Dreieck)" }
      - { id: c, image: ./img/france.png, alt: "Flagge von Frankreich (drei senkrechte Streifen: blau, weiß, rot)" }
      - { id: d, image: ./img/sweden.png, alt: "Flagge von Schweden (blau mit gelbem Kreuz)" }
source:
  type: original
  work: Informatik-Biber 2016
  year: 2016
  page: 26
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2016/Biberheft2016-mit-Loesungen.pdf
  country: CZ
  license: CC BY-SA 3.0
---
Computerbilder bestehen aus Zeilen von Bildpunkten, genannt Pixel. Wenn Computerbilder als Dateien gespeichert werden, wird im einfachsten Fall die Farbe jedes Pixels einzeln beschrieben.

Mit dem (erfundenen) Dateiformat GIW werden Computerbilder komprimiert, also mit geringerer Dateigröße gespeichert. Das funktioniert so:

- Jede Pixelzeile wird einzeln beschrieben.
- Jede Farbe wird durch ein Kürzel aus drei Buchstaben beschrieben.
- Eine Folge gleichfarbiger Pixel wird durch ein Klammerpaar beschrieben, das ein Farbkürzel und die Anzahl der gleichfarbigen Pixel enthält.

Ein Beispiel: Eine Pixelzeile, die durch die beiden Klammerpaare (grü,20) (wei,13) beschrieben wird, enthält zuerst 20 grüne und danach 13 weiße Pixel.

Unten siehst du vier Computerbilder von Flaggen. Die Bilder bestehen alle aus gleich vielen Pixelzeilen mit jeweils gleich vielen Pixeln. Sie wurden als Dateien im GIW-Format gespeichert.

**Ordne die Bilder nach der Größe ihrer GIW-Datei!** Das Bild mit der größten GIW-Datei soll links liegen.
