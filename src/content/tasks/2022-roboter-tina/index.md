---
short: d38y
title: Roboter Tina
summary: Ein Roboter sieht nur, was links, vor und rechts von ihm liegt. Wo steht er am Ende seines Weges?
grades:
  "7-8": hard
  "9-10": medium
  "11-13": easy
gi:
  content: [systems]
  process: [modelling, reasoning]
topics: [ai, modelling]
methods: []
mascot: beaver
interaction:
  format: graph-pick
  props:
    pick: nodes
    width: 305
    height: 304
    background: ./img/map.png
    nodeImage: ./img/none.png
    nodeRadius: 10
    nodes:
      - { id: a, x: 45.7, y: 45.6 }
      - { id: b, x: 197.9, y: 76.0 }
      - { id: c, x: 228.4, y: 106.4 }
      - { id: d, x: 228.4, y: 228.0 }
      - { id: e, x: 137.0, y: 258.4 }
      - { id: f, x: 197.9, y: 258.4 }
    edges: []
source:
  type: original
  work: Informatik-Biber 2022
  year: 2022
  page: 44
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2022/Biberheft_2022_mit_Loesungen_web.pdf
  country: DE
  license: CC BY-SA 4.0
---
Roboter Tina liefert Post aus. Tina benutzt dazu eine Landkarte, die in Felder eingeteilt ist. Tina bewegt sich der Straße entlang auf ein benachbartes Feld nach links, rechts oder vorne (also nicht diagonal).

Für die Navigation hat Tina drei Sensoren. Sobald Tina ein Feld betritt (und bevor Tina sich drehen kann), erkennen sie, was sich auf den Feldern links, vor und rechts von Tina befindet: Straße (graues Feld), Wiese (hellgrünes Feld), ein Baum oder ein Haus.

Die Tabelle zeigt, was Tinas Sensoren auf jedem Feld ihres Weges erkannt haben. Tina startet auf dem Feld mit dem schwarzen Pfeil (sechste Zeile von oben, dritte Spalte), in Richtung des Pfeiles (nach rechts). Die Landkarte siehst du unten.

![Tabelle mit acht Zeilen (links, vor, rechts). Zeile 1: Baum, Straße, Haus. Zeile 2: Straße, Straße, Wiese. Zeile 3: Baum, Straße, Baum. Zeile 4: Straße, Straße, Straße. Zeile 5: Baum, Straße, Baum. Zeile 6: Baum, Haus, Straße. Zeile 7: Straße, Straße, Baum. Zeile 8: Haus, Straße, Baum](./img/sensors.png)

**An welchem der dunkelblauen Punkte befindet sich Tina am Ende ihres Weges?** Tippe den Punkt an.
