---
short: B1ps
title: Momos Spiel
summary: Ein Roboter-Programm mit möglichst wenigen Befehlen soll gleich drei Level schaffen. Wie sieht es aus?
grades:
  "5-6": hard
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [programming]
methods: [loop, sequence]
mascot: beaver
interaction:
  format: command-sequence
  props:
    maxLength: 8
    commands:
      - { id: step, label: Fahre ein Feld vorwärts. }
      - { id: run, label: "Fahre vorwärts, bis es nicht mehr weitergeht." }
      - { id: ccw, label: Drehe dich um 90 Grad gegen den Uhrzeigersinn. }
      - { id: cw, label: Drehe dich um 90 Grad im Uhrzeigersinn. }
source:
  type: original
  work: Informatik-Biber 2025
  year: 2025
  page: 58
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2025/Biberheft_2025_web_komplett.pdf
  country: HU
  license: CC BY-SA 4.0
---
In einem von Momos Computerspielen kann ein Roboter (blauer Kreis mit Pfeil) über Felder fahren. Wenn er vor ein Hindernis (braune Kiste) oder die Wand fährt, geht es nicht mehr weiter. Dann muss der Roboter die Richtung wechseln.

In jedem Level des Spiels können die Hindernisse und auch das Ziel (grüne Zielscheibe) woanders sein. Ein Level ist geschafft, wenn der Roboter das Ziel erreicht.

Momo kann den Roboter mit Programmen steuern. Für seine Programme kann er diese vier Befehle benutzen:

1. Fahre ein Feld vorwärts.
2. Fahre vorwärts, bis es nicht mehr weitergeht.
3. Drehe dich um 90 Grad gegen den Uhrzeigersinn.
4. Drehe dich um 90 Grad im Uhrzeigersinn.

Momo kennt die nächsten drei Level. Er möchte ein Programm mit möglichst wenigen Befehlen haben, das alle drei Level schafft.

![Level 1: Der Roboter schaut nach oben, das Ziel liegt rechts oberhalb von ihm; dazwischen einige Hindernisse](./img/level1.png)

![Level 2: Der Roboter steht links und schaut nach rechts, das Ziel liegt rechts unten; auf dem Weg liegen Hindernisse](./img/level2.png)

![Level 3: Der Roboter steht oben und schaut nach unten, das Ziel liegt links unten; dazwischen einige Hindernisse](./img/level3.png)

**Erstelle so ein Programm für Momo!**
