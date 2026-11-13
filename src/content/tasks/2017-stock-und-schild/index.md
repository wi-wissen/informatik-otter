---
short: G5eJ
title: Stock und Schild
summary: Sieben Biber stellen sich für ein Foto auf, so dass jeder Stock auf ein Schild zeigt.
grades:
  "5-6": hard
  "7-8": medium
  "9-10": easy
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [optimization, logic]
methods: [backtracking]
mascot: beaver
interaction:
  format: sort-list
  props:
    direction: horizontal
    startLabel: Feld 1 (oben links)
    endLabel: Feld 7 (unten, drittes Feld)
    items:
      - { id: t1, image: ./img/t1.png, alt: "Biber 1: Stock nach links, Schild nach rechts" }
      - { id: t2, image: ./img/t2.png, alt: "Biber 2: schlafend, Schild nach rechts" }
      - { id: t3, image: ./img/t3.png, alt: "Biber 3: Stock nach links, Schild nach unten" }
      - { id: t4, image: ./img/t4.png, alt: "Biber 4: Stock nach unten, Schild nach rechts" }
      - { id: t5, image: ./img/t5.png, alt: "Biber 5: Stock nach links, Schild nach oben" }
      - { id: t6, image: ./img/t6.png, alt: "Biber 6: Schild nach oben und Schild nach rechts, kein Stock" }
      - { id: t7, image: ./img/t7.png, alt: "Biber 7: Stock nach unten, kein Schild" }
source:
  type: original
  work: Informatik-Biber 2017
  year: 2017
  page: 56
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2017/Biberheft2017-mit-Loesungen.pdf
  country: JP
  license: CC BY-SA 4.0
---
Lucia und ihre Freunde sind Anhänger eines japanischen Spiels mit Stock und Schild. Für ein Foto möchten sie sich auf dem Schulhof so aufstellen, dass jeder Stock auf ein Schild zeigt. Dafür wurden Felder auf den Schulhof gezeichnet (zwei Reihen mit je vier Feldern). Lucia hat sich bereits in Pose gestellt: Sie steht im letzten Feld der unteren Reihe.

![Der Schulhof mit zwei Reihen zu je vier Feldern. Lucia steht im letzten Feld der unteren Reihe; alle anderen Felder sind leer.](./img/field.png)

Die Bilder der sieben Freunde zeigen sie in ihren Lieblingsposen. Am Ende muss jeder Stock auf ein Schild zeigen.

**Bringe die Bilder der Freunde in die Reihenfolge, in der sie auf die Felder gehören.** Die Felder werden von links nach rechts gezählt, zuerst die obere Reihe (Feld 1 bis 4), dann die untere Reihe (Feld 5 bis 7 – das achte Feld gehört Lucia).
