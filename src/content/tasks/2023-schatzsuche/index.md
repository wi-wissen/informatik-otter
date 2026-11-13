---
short: iWp4
title: Schatzsuche
summary: Nach jedem Schritt verrät Nina nur, ob Daniel dem Schatz näher gekommen ist. Reicht das, um den Schatz zu finden?
grades:
  "5-6": hard
  "7-8": medium
  "9-10": easy
gi:
  content: [information-data]
  process: [modelling, reasoning]
topics: [modelling, logic]
methods: []
mascot: beaver
interaction:
  format: graph-pick
  props:
    pick: nodes
    width: 345
    height: 199
    nodeRadius: 20
    background: ./img/brett.png
    hideNodes: true
    nodes:
      - { id: A1, x: 26, y: 26 }
      - { id: B1, x: 75, y: 26 }
      - { id: C1, x: 124, y: 26 }
      - { id: A2, x: 26, y: 75 }
      - { id: C2, x: 124, y: 75 }
source:
  type: original
  work: Informatik-Biber 2023
  year: 2023
  page: 54
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2023/Biberheft_2023_web_komplett.pdf
  country: SK
  license: CC BY-SA 4.0
---
Nina und Daniel spielen Schatzsuche. Auf einem Spielbrett mit quadratischen Feldern wählt Nina im Kopf ein Feld aus. Dort ist der Schatz versteckt.

Daniel wählt ein Startfeld aus. Von dort geht er schrittweise mit seiner Spielfigur um je ein Feld weiter: nach links, rechts, oben oder unten.

Beim ersten Versuch nehmen sie ein kleines Spielbrett. Nina versteckt den Schatz auf dem Feld mit dem Stern. Daniel startet rechts oben und macht zwei Schritte entlang der Pfeile. Nach jedem Schritt sagt Nina, ob Daniel nun näher (Flamme) am Schatz oder weiter weg (Schneeflocke) vom Schatz ist als vor dem Schritt – siehe Bild. Die Zahlen zeigen Daniels Entfernungen vom Schatz: jeweils die kleinste Anzahl Schritte, mit denen Daniel aktuell zum Schatz gehen könnte.

![Kleines Spielbrett mit 3 mal 3 Feldern: Der Stern liegt links in der mittleren Zeile. Daniel startet rechts oben (Entfernung 3), geht ein Feld nach unten (Entfernung 2, Flamme) und noch eins nach unten (Entfernung 3, Schneeflocke)](./img/beispiel.png)

Nun nehmen sie ein größeres Spielbrett. Nina versteckt den Schatz auf einem der blau markierten Felder. Das Bild zeigt Daniels Schritte und was Nina nach jedem Schritt sagt.

**Wo ist der Schatz versteckt? Klicke das Feld an.**

(Hinweis: Im Heft sind die Symbole in der Aufgabe vertauscht beschrieben. Nach dem Beispiel und der Lösung steht die Flamme für „näher“ und die Schneeflocke für „weiter weg“.)
