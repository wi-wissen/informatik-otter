---
answer:
  - [1, 0, 1, 1, 1, 1, 0]
  - [0, 0, 0, 0, 1, 1, 0]
  - [0, 1, 1, 0, 0, 1, 0]
  - [0, 0, 1, 1, 0, 0, 0]
  - [0, 1, 1, 0, 1, 0, 1]
---
Es müssen mindestens drei Mauern entfernt werden, damit für Peter ein Weg zum Schatz frei wird: die Mauer direkt über Peters Feld, die Mauer in der zweiten Zeile von oben in der zweiten Spalte von links und die Mauer in der dritten Zeile von oben in der letzten Spalte.

Systematisch kann man das Ergebnis erhalten, wenn man jedes Feld markiert mit der „kleinsten Anzahl an Mauern, die entfernt werden müssen, damit Peter zu diesem Feld kommt“. Wir beginnen mit dem Startfeld links unten und markieren es mit 0 – denn Peter ist schon auf diesem Feld. Weitere freie Felder, die man von dort direkt erreichen kann und deshalb auch mit 0 markiert werden müssten, gibt es nicht.

Dann markieren wir die auf 0 angrenzenden Mauern mit 1, sowie alle freien Felder, die man durch Entfernen einer dieser Mauern nun neu erreichen kann, auch mit 1. Von diesen „1er-Feldern“ aus werden die durch Entfernen irgendeiner weiteren Mauer mit 2 markiert usw. Wenn schließlich das Zielfeld markiert ist, kennt man die kleinste Anzahl an Mauern, die entfernt werden müssen, damit für Peter ein Weg zum Schatz frei wird. Im Zielfeld steht schließlich eine 3.

## Das ist Informatik!

Der oben beschriebene Algorithmus zur Lösung dieser Biberaufgabe funktioniert nach einem Prinzip, das in der Informatik als Breitensuche bekannt ist: Man „sucht“ das Zielfeld und betrachtet dazu zuerst alle Nachbarfelder mit gleicher Anzahl geöffneter Mauern. So geht man, bildlich gesprochen, zuerst in die Breite, bevor man eine weitere Mauer öffnet, sich dadurch etwas weiter vom Startfeld entfernt und damit in die Tiefe des Suchraums abtaucht. Weil immer die gesamte Breite ausprobiert wird, bevor man die Entfernung vergrößert, ist garantiert, dass der kürzeste Weg (gemessen in der Anzahl der zu öffnenden Mauern) zum Ziel gefunden wird. Und weil der Algorithmus die Felder mit der Entfernung vom Startfeld markiert, ist am Ende auch die Länge des kürzesten Weges zum Zielfeld bekannt.

Die Bestimmung kürzester Wege ist – offenkundig – für die Routenplanung eine zentrale Aufgabe. Dabei muss die „Länge“ eines Weges nicht nur durch die Entfernung zwischen Start und Ziel bestimmt sein, sondern kann zusätzlich von weiteren Bedingungen abhängen. Zum Beispiel können Mautgebühren berücksichtigt werden, die auf dem Weg zu zahlen sind – oder Mauern, die auf dem Weg zu öffnen sind.
