---
short: E4Vm
title: Bilder verschlüsseln
summary: Leo verschlüsselt Bilder, indem er Pixel zeilen- und spaltenweise verschiebt. Wie sieht das Ergebnis aus?
grades:
  "9-10": hard
  "11-13": medium
gi:
  content: [information-data]
  process: [reasoning, modelling]
topics: [cryptography, images]
methods: []
mascot: beaver
interaction:
  format: choice
  props:
    columns: 5
    options:
      - { id: a, label: A, image: ./img/opt-a.png, alt: "Blau-gelbes Bild mit zwei gelben Parallelogrammen, die von links unten nach rechts oben ansteigen" }
      - { id: b, label: B, image: ./img/opt-b.png, alt: "Blau-gelbes Bild mit schmalen, nach rechts geneigten gelben und blauen Streifen" }
      - { id: c, label: C, image: ./img/opt-c.png, alt: "Blau-gelbes Bild aus zwei nebeneinanderliegenden Hälften mit je einem gelben und einem blauen Dreieck" }
      - { id: d, label: D, image: ./img/opt-d.png, alt: "Blau-gelbes Bild mit zwei gelben Dreiecken, die von links nach rechts spitz zulaufen" }
      - { id: e, label: E, image: ./img/opt-e.png, alt: "Blau-gelbes Bild mit mehreren gelben und blauen Dreiecken, die von links oben nach rechts unten geneigt sind" }
source:
  type: original
  work: Informatik-Biber 2024
  year: 2024
  page: 21
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2024/Biberheft_2024_web_komplett.pdf
  country: AU
  license: CC BY-SA 4.0
---
Ein Bild ist ein Rechteck, das sich aus Zeilen und Spalten von Pixeln (Farbpunkten) zusammensetzt.

![Links ein Beispielbild aus 3×3 Pixeln, nummeriert 1 bis 9 zeilenweise; rechts ein Bild der Mona Lisa aus 25×25 Pixeln](./img/basics.png)

Leo hat sich ein Verfahren zur Verschlüsselung von Bildern überlegt. Er verwendet dabei diese zwei Operationen:

**Operation H (für horizontal)**

In Zeile 1 bleiben die Pixel unverändert. In Zeile 2 rückt jedes Pixel um 1 nach rechts. In Zeile 3 rückt jedes Pixel um 2 nach rechts. *Jedes Pixel in der n-ten Zeile rückt um n-1 Spalten nach rechts.* Pixel, die dabei über den rechten Bildrand hinausrücken, werden in derselben Zeile links wieder eingefügt. Die Pixelreihenfolge wird dabei nicht verändert.

![Operation H am 3×3-Beispiel: aus 1 2 3 / 4 5 6 / 7 8 9 wird 1 2 3 / 6 4 5 / 8 9 7; rechts das verzerrte Mona-Lisa-Bild](./img/op-h.png)

**Operation V (für vertikal)**

*Jedes Pixel in der n-ten Spalte rückt um n-1 Zeilen nach unten.* Pixel, die über den unteren Bildrand hinausrücken, werden in derselben Spalte oben wieder eingefügt.

![Operation V am 3×3-Beispiel: aus 1 2 3 / 4 5 6 / 7 8 9 wird 1 9 5 / 4 2 7 / 7 8 3 mit den entsprechenden Verschiebungen; rechts das verzerrte Mona-Lisa-Bild](./img/op-v.png)

Die Operationen können hintereinander durchgeführt werden, als Folge. Im Beispiel hat Leo das Bild (25×25 Pixel) mit der Folge HV verschlüsselt. Unmittelbar oberhalb rechts siehst du das Ergebnis.

Leo verschlüsselt das folgende Bild (1000×1000 Pixel) mit der Folge **VH**:

![Ein Bild aus vier Quadraten: oben links gelb, oben rechts blau, unten links blau, unten rechts gelb](./img/original.png)

**Wie sieht das Ergebnis aus?**
