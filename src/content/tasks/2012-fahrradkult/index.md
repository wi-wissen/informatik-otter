---
short: vr9C
title: Fahrradkult
summary: Das Stadtparlament von Bebras-City schreibt vor, wie Fahrräder zusammengesetzt werden dürfen. Welches Rad verstößt gegen die Regeln?
grades:
  "5-6": medium
gi:
  content: [information-data]
  process: [reasoning, representing]
topics: [trees, logic]
methods: [decision-tree]
mascot: beaver
interaction:
  format: choice
  props:
    columns: 4
    options:
      - { id: a, image: ./img/a.png, alt: "Fahrrad A: Gestell 1, Lenker 3, Sattel 6" }
      - { id: b, image: ./img/b.png, alt: "Fahrrad B: Gestell 1, Lenker 4 (grau), Sattel 6" }
      - { id: c, image: ./img/c.png, alt: "Fahrrad C: Gestell 1, Lenker 4 (grau), Sattel 9" }
      - { id: d, image: ./img/d.png, alt: "Fahrrad D: Gestell 2, Lenker 4, Sattel 8" }
source:
  type: original
  work: Informatik-Biber 2012
  year: 2012
  page: 17
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2012/Biberheft2012-mit-Loesungen.pdf
  license: CC BY-NC-SA 3.0
---
In Bebras-City ist es gerade Kult, die Fahrräder sehr bunt zu gestalten. Allerdings hat das Stadtparlament die erlaubten Teile durchnummeriert und eine Vorschrift beschlossen, wie Fahrräder zusammengesetzt werden dürfen.

Im Bild ist festgelegt, aus welchen farbigen Teilen du ein Fahrrad zusammensetzen darfst. Du beginnst oben mit den Rädern. Dann entscheidest du dich beim nächsten Teil, einem Pfeil folgend, für eine der Möglichkeiten. Und so weiter.

![Baum der erlaubten Teile: Nach den Rädern folgt Gestell 1 (gelb) oder Gestell 2 (blau). Auf Gestell 1 folgt Lenker 3 (rot) oder Lenker 4 (grau); auf Lenker 3 folgt Sattel 6 (orange) oder 7 (gelb), auf Lenker 4 folgt Sattel 8 (pink) oder 9 (grau). Auf Gestell 2 folgt Lenker 5 (grün) oder Lenker 4 (grau); auf Lenker 5 folgt Sattel 9 (grau) oder 10 (schwarz), auf Lenker 4 folgt Sattel 8 (pink)](./img/rules.png)

**Welches dieser Fahrräder entspricht NICHT der Vorschrift des Stadtparlaments?**
