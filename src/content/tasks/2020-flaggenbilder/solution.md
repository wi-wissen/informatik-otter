---
answer: { s1: fr, s2: se, s3: cz, s4: sl }
---
Von der größten zur kleinsten Datei: Frankreich, Schweden, Tschechien, Sierra Leone.

![Die Flaggen von Frankreich, Schweden, Tschechien und Sierra Leone, von der größten zur kleinsten GIW-Datei](./img/solution.png)

Eine Zeile, deren Pixel alle die gleiche Farbe haben, kann mit einem einzigen Klammerpaar beschrieben werden. Bei der Flagge von Sierra Leone ist das in allen Zeilen so. Die GIW-Datei enthält also ein Klammerpaar pro Zeile.

In Bildern, bei denen die Farben in einer Pixelzeile wechseln, wird nach jedem Farbwechsel ein neues Klammerpaar benötigt. Bei der Flagge von Tschechien gibt es in jeder Zeile genau einen Farbwechsel, von Blau nach Weiß bzw. Blau nach Rot. Die GIW-Datei enthält also zwei Klammerpaare pro Zeile.

Bei der schwedischen Flagge gibt es in den meisten Zeilen zwei Farbwechsel. Die GIW-Datei enthält also für diese Zeilen je drei Klammerpaare. In der Mitte sind einige Zeilen, die keinen Farbwechsel enthalten; für jede dieser Zeilen enthält die Datei nur ein Klammerpaar. Es gibt aber viel mehr Zeilen mit zwei Farbwechseln als Zeilen ohne Farbwechsel. Deshalb enthält die GIW-Datei im Mittel mehr als zwei, aber weniger als drei Klammerpaare pro Zeile.

Bei der französischen Flagge gibt es in jeder Zeile zwei Farbwechsel. Die GIW-Datei enthält also drei Klammerpaare pro Zeile.

## Das ist Informatik!

Datenkompression ist ein wichtiger Bereich der Informatik. Je geringer die Datenmenge ist, mit der digitale Daten (Bilder, Audiodaten, Videos, …) beschrieben werden können, desto geringer ist der zur Speicherung der Daten benötigte Platz, und desto schneller lassen sich die Daten durch ein Netzwerk transportieren. Kompressionsverfahren können den Transferaufwand innerhalb eines Netzwerks also deutlich verringern. Würde beispielsweise die Musik eines Webradios ohne Kompression versendet, so würde die zehnfache Datenmenge anfallen als bei heutzutage typischer Kompression. Da die Menge der Daten, die durch Netzwerke transportiert werden sollen, immer weiter steigt (zum Beispiel Sprachnachrichten in Messenger-Anwendungen), forscht die Informatik weiter im Bereich der Datenkompression.

Das in dieser Aufgabe vorgestellte Kompressionsverfahren arbeitet nach dem Prinzip der Lauflängenkodierung.
