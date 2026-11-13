---
answer: "14"
---
Es können maximal **14** Punkte gesammelt werden. Das lässt sich mit der folgenden Hilfstabelle nachweisen. Die Hilfstabelle soll in jedem Feld die maximal erreichbare Punktzahl enthalten für den Fall, dass dieses Feld das Zielfeld wäre. Die Zahl im Feld rechts oben, dem eigentlichen Zielfeld, ist dann das richtige Ergebnis.

Man erhält diese Hilfstabelle so: An der Stelle des Startfeldes trägt man eine 0 ein; denn wenn das Startfeld auch das Zielfeld wäre, könnte man genau 0 Punkte sammeln. Für jedes andere Feld ermittelt man das Maximum der beiden Zahlen, die im links davon und darunter liegenden Feld (jeweils: falls vorhanden) eingetragen sind. Nur von diesen beiden Feldern aus kann man in einem Schritt zum aktuellen Feld gelangen. Zu diesem Maximum addiert man die Punktzahl, die man in der Spieltabelle für das aktuelle Feld sammeln kann. Damit enthält auch das aktuelle Feld die maximale Punktzahl, die auf einem Weg vom Start zum aktuellen Feld gesammelt werden kann.

Hier ist die Hilfstabelle:

| 8 | 9 | 10 | 12 | **14** |
|---|---|---|---|---|
| 6 | 9 | 9 | 11 | 14 |
| 5 | 7 | 7 | 9 | 10 |
| 3 | 4 | 4 | 6 | 6 |
| 0 | 0 | 1 | 4 | 4 |

Ein Weg, auf dem 14 Punkte gesammelt werden können, führt über die Felder mit den Hilfswerten 0, 3, 5, 6, 9, 11 und 14 (von unten links nach oben rechts).

## Das ist Informatik!

Das menschliche Gehirn ist sehr geschickt und effizient im Lösen von anschaulichen Aufgaben. So mancher sieht die Lösung dieser Biberaufgabe nahezu auf einen Blick, eventuell nach kurzem Prüfen weniger Alternativen. Diese intuitive Methode arbeitet aber nicht fehlerfrei und funktioniert nur für Tabellen von überschaubarer Größe. Die oben beschriebene Methode hingegen funktioniert, falls die Einzelschritte richtig ausgeführt werden, immer. Sie kann auch von einem Programm ausgeführt werden und ist auf Tabellen beliebiger Größe anwendbar. Die letztere Eigenschaft nennt man *Skalierbarkeit* und ist ein Kriterium für einen guten Algorithmus.

Das beschriebene Verfahren mit der Hilfstabelle arbeitet nach dem Prinzip der *dynamischen Programmierung*. Es kann angewandt werden, wenn ein Problem (hier: Finde den optimalen Weg!) aus Teilproblemen besteht (hier: Finde einen optimalen Teilweg!) und sich die Lösung des gesamten Problems aus Lösungen von Teilproblemen berechnen lassen kann. Dann berechnet man zunächst die Lösungen der kleinsten Teilprobleme und dann nach und nach die Lösungen größerer Teilprobleme aus den Lösungen passender kleinerer Teilprobleme. Die Lösung eines Teilproblems wird gespeichert und muss deshalb nur einmal berechnet werden.
