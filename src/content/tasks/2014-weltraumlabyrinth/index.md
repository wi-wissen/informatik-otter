---
short: 5Yth
title: Weltraumlabyrinth
summary: Raumfahrer entschlüsseln die Befehle eines Roboters im Labyrinth. Welche Textzeile führt ihn zum Objekt?
grades:
  "7-8": medium
  "9-10": easy
  "11-13": easy
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [cryptography]
methods: [substitution-cipher]
mascot: beaver
interaction:
  format: choice
  props:
    options:
      - { id: a, label: "Ha’ poS poS Ha’ Ha’ nIH" }
      - { id: b, label: "Ha’ Ha’ poS Ha’" }
      - { id: c, label: "Ha’ poS poS Ha’ nIH Ha’" }
      - { id: d, label: "Ha’ poS nIH vI’ogh Ha’ poS" }
source:
  type: original
  work: Informatik-Biber 2014
  year: 2014
  page: 54
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2014/Biberheft2014-mit-Loesungen.pdf
  license: CC BY-NC-SA 3.0
---
Raumfahrer sind auf einem verlassenen Planeten gelandet. Auf ihren Tele-Brillen sehen sie rätselhafte Bilder. Sie folgen den Signalen und machen als Quelle einen Roboter aus. Er steht in einem Labyrinth, das die Raumfahrer von ihrer erhöhten Position gut überblicken und sendet offensichtlich Nahaufnahmen seiner Umgebung.

![Das Labyrinth aus 6 mal 6 Quadraten mit dicken Wänden. Der Roboter steht im vierten Quadrat von oben in der dritten Spalte von links, das unbekannte Objekt liegt im obersten Quadrat in der zweiten Spalte](./img/maze.png)

Das Labyrinth ist in Quadrate eingeteilt. In einem davon befindet sich der Roboter. In einem anderen Quadrat befindet sich ein unbekanntes Objekt. Die Raumfahrer würden den Roboter gerne zum Objekt steuern, um Nahaufnahmen davon zu sehen.

Plötzlich flimmern vier kryptische Textzeilen mit insgesamt vier verschiedenen Wörtern über die Tele-Brillen. Auch der Roboter und das Objekt sind zu erkennen. Nach einigem Grübeln vermuten die Raumfahrer: Die vier Wörter sind Befehle, die den Roboter jeweils in ein benachbartes Quadrat steuern; für jede der vier möglichen Richtungen gibt es einen eigenen Befehl. Außerdem sind die Raumfahrer sicher, dass eine der Textzeilen eine Befehlsfolge ist, die den Roboter zum Objekt steuert.

**Welche der vier Textzeilen steuert den Roboter zum unbekannten Objekt?**
