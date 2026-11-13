---
short: r22B
title: Von A nach C
summary: Ein kleiner Roboter versteht nur Vorwärts- und Drehbefehle mit Wiederholungen. Welches Programm führt ihn von A nach C?
grades:
  "9-10": hard
  "11-13": medium
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [programming]
methods: [loop, sequence]
mascot: beaver
interaction:
  format: choice
  props:
    options:
      - { id: a, label: "90*(V+L(1)+V+R(1))" }
      - { id: b, label: "90*(V+L(1))+90*(V+R(1))" }
      - { id: c, label: "90*(V+L(1))+R(30)+90*(V+R(1))" }
      - { id: d, label: "L(90)+90*(V+L(1))+R(90)+90*(V+R(1))" }
source:
  type: original
  work: Informatik-Biber 2013
  year: 2013
  page: 46
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2013/Biberheft2013-mit-Loesungen.pdf
  license: CC BY-NC-SA 3.0
---
Du hast einen kleinen Roboter, der kann diese Befehle ausführen:

| Befehl | Bedeutung |
|---|---|
| V | einen Schritt vorwärts gehen |
| L (Winkel) | Linksdrehung, die Größe des Winkels steht in den Klammern |
| R (Winkel) | Rechtsdrehung, die Größe des Winkels steht in den Klammern |

Zu Beginn steht der kleine Roboter immer am Punkt A. Er ist nach rechts ausgerichtet und wartet auf sein Programm. Soll der kleine Roboter mehrere Befehle hintereinander ausführen, werden sie mit + aneinander gereiht. Zum Beispiel bedeutet das Programm V+L(20)+V+R(2), der Roboter soll einen Schritt vorwärts gehen, sich dann 20° nach links drehen, dann einen Schritt vorwärts gehen und sich abschließend 2° nach rechts drehen. Soll der kleine Roboter etwas mehrmals tun, wird das mit * ausgedrückt. Zum Beispiel bedeutet das Programm 180*(V+L(1)), dass der Roboter 180 mal nacheinander die zwei Befehle V und L(1) ausführen soll. Das Bild zeigt ungefähr seinen Weg von A nach B:

![Ein Halbkreis von A unten nach B oben, der nach rechts ausgebuchtet ist](./img/ab.png)

![Ein leicht welliger Weg von A links unten nach C rechts oben: erst eine Linkskurve, dann eine Rechtskurve](./img/ac.png)

**Mit welchem Programm geht der kleine Roboter ungefähr diesen Weg von A nach C?**
