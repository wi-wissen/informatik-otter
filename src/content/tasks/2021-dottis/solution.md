---
answer: { d1: n-bottom, d2: n-lowleft, d3: n-top, d4: n-left, d5: n-right }
---
Der erste Dotti, der mit 4 Punkten, bleibt gleich im untersten Nest.

![Der erste Dotti sitzt im untersten Nest.](./img/step1.png)

Der zweite Dotti hat 2 Punkte. Im untersten Nest sitzt der erste Dotti mit 4 Punkten. Weil 4 mehr als 2 ist, klettert der zweite Dotti nach links weiter und bleibt im nächsten leeren Nest.

![Der zweite Dotti klettert nach links.](./img/step2.png)

Der dritte Dotti hat 3 Punkte. Weil 4 mehr als 3 ist, klettert der dritte Dotti am untersten Nest nach links. Im nächsten Nest ist der zweite Dotti mit 2 Punkten. Weil 2 weniger als 3 ist, klettert der dritte Dotti weiter nach rechts und bleibt im höchsten Nest.

![Der dritte Dotti klettert nach links und dann nach rechts oben.](./img/step3.png)

Der vierte Dotti hat einen Punkt. Am untersten Nest klettert er nach links, und auch am nächsten Nest – denn sowohl 4 als auch 2 sind mehr als 1. Er bleibt schließlich in dem leeren Nest ganz links.

![Der vierte Dotti klettert zweimal nach links.](./img/step4.png)

Der letzte Dotti hat fünf Punkte. Er muss beim untersten Nest nach rechts klettern und bleibt dann in dem leeren Nest ganz rechts.

![Der fünfte Dotti klettert nach rechts.](./img/step5.png)

## Das ist Informatik!

Jeder Dotti klettert im Baum nach derselben Regel: Er vergleicht seine Punktzahl mit der des Dottis im Nest und geht nach links, wenn dieser mehr Punkte hat, sonst nach rechts, bis er ein freies Nest findet. Der Nestbaum ist ein binärer Suchbaum. Das ist eine Datenstruktur, bei der jeder Knoten höchstens zwei Nachfolger hat und alle kleineren Werte links und alle größeren oder gleichen Werte rechts davon liegen.

Ein solcher Baum hat zwei nützliche Eigenschaften. Erstens lässt sich ein Wert schnell suchen: Bei jedem Knoten entscheidet ein einziger Vergleich, in welchem Teilbaum man weitersuchen muss, und die Hälfte der Möglichkeiten entfällt, wenn der Baum ausgewogen ist. Zweitens sind die Werte sortiert, wenn man den Baum in der richtigen Reihenfolge durchläuft: erst den linken Teilbaum, dann den Knoten selbst, dann den rechten Teilbaum. Hier gäbe das die Reihenfolge 1, 2, 3, 4, 5 der Dottis. Man kann so Daten sortieren, indem man sie nacheinander in einen Suchbaum einfügt.

Die Form des Baums hängt von der Reihenfolge ab, in der die Dottis einziehen. Kämen sie nach Punkten sortiert, entstünde eine lange Kette ohne Verzweigung, und die Suche würde nicht schneller als bei einer einfachen Liste. Deshalb gibt es ausgleichende Varianten wie AVL-Bäume und Rot-Schwarz-Bäume, die den Baum beim Einfügen immer wieder umbauen. Sie werden zum Beispiel in Datenbanken und in den Standardbibliotheken von Programmiersprachen eingesetzt.

*Dieser Abschnitt wurde für den Informatik-Otter ergänzt und steht nicht im Biberheft.*
