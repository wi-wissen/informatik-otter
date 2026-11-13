---
short: iJX2
title: Kugelkästchen-Spiel
summary: Kästchen mit Kugeln und kleine Zuweisungen – welches Spiel macht aus den Kugelzahlen vorher die Kugelzahlen nachher?
grades:
  "9-10": hard
  "11-13": medium
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [programming]
methods: [variable-assignment]
mascot: beaver
interaction:
  format: choice
  props:
    options:
      - { id: a, image: ./img/spiel-a.png, alt: "Spiel A: rot := blau; gelb := blau; blau := rot;" }
      - { id: b, image: ./img/spiel-b.png, alt: "Spiel B: rot := gelb; gelb := blau; blau := 7;" }
      - { id: c, image: ./img/spiel-c.png, alt: "Spiel C: gelb := rot; rot := blau; blau := gelb; gelb := rot;" }
      - { id: d, image: ./img/spiel-d.png, alt: "Spiel D: rot := 6; blau := 7; gelb := rot; rot := blau;" }
source:
  type: original
  work: Informatik-Biber 2011
  year: 2011
  page: 19
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2011/Biberheft2011-mit-Loesungen.pdf
  license: CC BY-NC-SA 3.0 DE
---
Für das Kugelkästchen-Spiel brauchst du etliche Kästchen mit unterschiedlichen Namen und viele, viele Kugeln, die alle gleich aussehen. Das Spiel ist leicht zu lernen. Es bedeutet:

![Ein Befehl und seine Bedeutung. [Stern := 3;] bedeutet: Ändere die Anzahl der Kugeln im Kästchen mit dem Namen Stern (grün-roter Stern) in drei Kugeln! [Herz := Mond;] bedeutet: Ändere die Anzahl der Kugeln im Kästchen mit dem Namen Herz (rosa Herz) in die Anzahl der Kugeln, die gerade im Kästchen mit dem Namen Mond (blauer Halbmond) liegen.](./img/regeln.png)

Und nach dem Spiel liegen in den benutzten Kästchen die folgenden Kugeln:

![Das Spiel [Herz := 1; Mond := 2; Stern := 3; Mond := Stern;] ergibt ⟨Herz 1, Mond 3, Stern 3⟩, also 1 Kugel im Herz-Kästchen, 3 im Mond-Kästchen und 3 im Stern-Kästchen.](./img/nachher.png)

![Die Kästchen heißen rot (roter Kreis), gelb (gelbes Dreieck) und blau (blaues Quadrat). Vorher: ⟨rot 7, gelb 0, blau 6⟩, nachher: ⟨rot 6, gelb 6, blau 7⟩.](./img/aufgabe.png)

**Welches Kugelkästchen-Spiel ändert die Kugeln in den Kästchen von ⟨rot 7, gelb 0, blau 6⟩ in ⟨rot 6, gelb 6, blau 7⟩?**
