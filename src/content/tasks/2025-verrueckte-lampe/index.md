---
short: 4cVy
title: Verrückte Lampe
summary: Ein geheimer dritter Schalter, das Bild an der Wand, bestimmt, wie die beiden Lichtschalter zusammenarbeiten.
grades:
  "3-4": hard
  "5-6": medium
gi:
  content: [information-data]
  process: [modelling, reasoning]
topics: [logic]
methods: [boolean-logic, xor]
mascot: beaver
interaction:
  format: choice
  props:
    columns: 3
    options:
      - { id: straight, image: ./img/pic-straight.png, alt: Bild hängt gerade }
      - { id: right, image: ./img/pic-right.png, alt: Bild hängt nach rechts gekippt }
      - { id: left, image: ./img/pic-left.png, alt: Bild hängt nach links gekippt }
source:
  type: original
  work: Informatik-Biber 2025
  year: 2025
  page: 76
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2025/Biberheft_2025_web_komplett.pdf
  country: HU
  license: CC BY-SA 4.0
---
Viktoria Volt hat eine verrückte Lampe gebaut. Die Lampe hat zwei Lichtschalter: einer links und einer rechts. Jeder Lichtschalter kann entweder **an** (Schalter oben) oder **aus** (Schalter unten) sein.

![Eine Lampe an der Decke mit einem Biber-Bild an der Wand; links und rechts neben dem Bild je ein Lichtschalter](./img/lamp.png)

Die verrückte Lampe hat aber noch einen dritten, geheimen Schalter: ein Bild! Je nachdem, wie das Bild hängt (gerade, nach links oder nach rechts gekippt), funktionieren die Lichtschalter anders.

Diese Tabelle sagt, wie die Schalter jeweils das Licht an oder aus machen:

![Tabelle: Bild gerade: Licht an, wenn genau einer der Schalter an ist, sonst aus. Bild nach rechts gekippt: Licht aus, wenn beide Schalter aus sind, sonst an. Bild nach links gekippt: Licht an, wenn beide Schalter an sind, sonst aus](./img/table.png)

Der linke Lichtschalter ist **aus**, der rechte Lichtschalter ist **an**.

**Wie muss das Bild hängen, damit das Licht aus ist?**
