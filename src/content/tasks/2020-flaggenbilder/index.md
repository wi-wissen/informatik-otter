---
short: a3dm
title: Flaggenbilder
summary: Ein erfundenes Bildformat speichert gleichfarbige Pixel zusammen. Welche Flagge braucht die größte Datei?
grades:
  "11-13": hard
gi:
  content: [information-data]
  process: [modelling, reasoning]
topics: [compression, images]
methods: [run-length-encoding]
mascot: beaver
interaction:
  format: custom
  props:
    background: ./img/wedge.png
    width: 1298
    height: 203
    trayLabel: Flaggenbilder
    zones:
      - { id: s1, label: Platz 1, x: 69, y: 18, w: 262, h: 168 }
      - { id: s2, label: Platz 2, x: 350, y: 18, w: 262, h: 168 }
      - { id: s3, label: Platz 3, x: 629, y: 18, w: 262, h: 168 }
      - { id: s4, label: Platz 4, x: 911, y: 18, w: 262, h: 168 }
    items:
      - { id: sl, image: ./img/sierra-leone.png, alt: "Flagge von Sierra Leone: drei waagerechte Streifen in Grün, Weiß und Blau" }
      - { id: cz, image: ./img/czechia.png, alt: "Flagge von Tschechien: oben Weiß, unten Rot, links ein blaues Dreieck" }
      - { id: fr, image: ./img/france.png, alt: "Flagge von Frankreich: drei senkrechte Streifen in Blau, Weiß und Rot" }
      - { id: se, image: ./img/sweden.png, alt: "Flagge von Schweden: blau mit gelbem Kreuz" }
source:
  type: original
  work: Informatik-Biber 2020
  year: 2020
  page: 27
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2020/Biberheft_2020_final_mit_Loesungen.pdf
  country: CZ
  license: CC BY-SA 4.0
---
Computerbilder bestehen aus Zeilen von Bildpunkten, genannt Pixel. Wenn Computerbilder als Dateien gespeichert werden, wird im einfachsten Fall die Farbe jedes Pixels einzeln beschrieben.

Mit dem (erfundenen) Dateiformat GIW werden Computerbilder komprimiert, also mit geringerer Dateigröße gespeichert. Das funktioniert so:

- Jede Pixelzeile wird einzeln beschrieben.
- Jede Farbe wird durch ein Kürzel aus drei Buchstaben beschrieben.
- Eine Folge gleichfarbiger Pixel wird durch ein Klammerpaar beschrieben, das ein Farbkürzel und die Anzahl der gleichfarbigen Pixel enthält.

Ein Beispiel: Eine Pixelzeile, die durch die beiden Klammerpaare (grü,20)(wei,13) beschrieben wird, enthält zuerst 20 grüne und danach 13 weiße Pixel.

Unten siehst du vier Computerbilder von Flaggen: Sierra Leone, Tschechien, Frankreich und Schweden. Die Bilder bestehen alle aus gleich vielen Pixelzeilen mit jeweils gleich vielen Pixeln. Sie wurden als Dateien im GIW-Format gespeichert. Die Größe einer GIW-Datei ergibt sich aus der Anzahl der darin enthaltenen Klammerpaare.

**Ordne die Bilder nach der Größe ihrer GIW-Datei!** Ziehe sie auf die Plätze: links die größte Datei, rechts die kleinste.
