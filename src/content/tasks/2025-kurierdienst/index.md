---
short: 1gkx
title: Kurierdienst
summary: Zwei durchsichtige Folien verraten ein geheimes Bild nur, wenn man sie übereinanderlegt. Kannst du Folie 2 erstellen?
grades:
  "7-8": hard
  "9-10": medium
  "11-13": easy
gi:
  content: [information-data]
  process: [modelling, reasoning]
topics: [cryptography, images]
methods: [visual-cryptography, xor]
mascot: beaver
interaction:
  format: pixel-grid
  props:
    rows: 5
    cols: 5
    palette: ["#e6e6e6", "#2b2b2b"]
source:
  type: original
  work: Informatik-Biber 2025
  year: 2025
  page: 48
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2025/Biberheft_2025_web_komplett.pdf
  country: DE
  license: CC BY-SA 4.0
---
Ein geheimes Bild, das aus schwarzen und weißen Pixeln besteht, soll sicher übertragen werden. Hierfür erstellt der Kurierdienst auf transparenten Folien zwei Bilder aus dunklen und hellen (dicht bzw. locker schraffierten) Pixeln. Das geheime Bild wird erst dann erkennbar, wenn die beiden Folien übereinander gelegt werden.

![Beispiel mit einem 3×3-Bild: Das geheime Bild ist ein schwarzes Kreuz. Folie 1 ist ein Zufallsmuster aus dunklen und hellen Pixeln, Folie 2 ein weiteres Muster. Übereinandergelegt erscheint das Kreuz tiefschwarz](./img/example.png)

Die Bilder für die beiden Folien werden so erstellt: Zuerst wird für Folie 1 ein zufälliges Muster aus dunklen und hellen Pixeln erzeugt. Die Pixel im Bild für Folie 2 werden dann nach der folgenden Regel gesetzt, abhängig von den Pixeln an der gleichen Stelle im geheimen Bild und in Folie 1:

- Ist das Pixel im geheimen Bild **schwarz**, dann müssen die Pixel in Folie 1 und Folie 2 **verschieden** sein (das eine dunkel, das andere hell).
- Ist das Pixel im geheimen Bild **weiß**, dann müssen die Pixel in Folie 1 und Folie 2 **gleich** sein (beide hell oder beide dunkel).

Für das folgende geheime Bild wurde Folie 1 bereits erzeugt.

![Geheimes Bild aus 5×5 Pixeln: In den Spalten 2 bis 4 schwarze Pixel in den Zeilen 1, 3 und 5, in Spalte 2 durchgehend schwarz (ein „E“); die übrigen Pixel sind weiß](./img/secret.png)

![Folie 1 aus 5×5 Pixeln, dunkle Pixel (Zeile für Zeile, 1 = dunkel): 01100, 01101, 11010, 01111, 10000](./img/foil1.png)

**Erstelle nun Folie 2. Tippe die Pixel an, die dunkel sein sollen.**
