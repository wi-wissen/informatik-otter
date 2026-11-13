---
answer: [vater, mutter, mutter]
---
Die richtige Gleichung ist `Vater(Mutter(Annika)) = Vater(Mutter(Mutter(Daniel)))`.

Zuerst betrachten wir die linke Seite der Gleichung und entdecken, dass Emil der Vater von Annikas Mutter ist, also: `Vater(Mutter(Annika)) = Emil`. Um die Lücken auf der rechten Seite zu füllen, muss man herausfinden, wie Daniel mit Emil verwandt ist. Dazu betrachten wir den Stammbaum und gehen von Daniel aus schrittweise in Richtung Emil:

1. Daniels Mutter, also `Mutter(Daniel)`, ist mit Emil verwandt; Daniels Vater nicht.
2. Die Mutter von Daniels Mutter, also Daniels Großmutter bzw. `Mutter(Mutter(Daniel))`, ist mit Emil verwandt, denn …
3. … Emil ist der Vater dieser Großmutter: `Emil = Vater(Mutter(Mutter(Daniel)))`

## Das ist Informatik!

Annika verwendet ihre Kurzschreibweise für die Vater- und Mutter-Beziehungen im Stammbaum, nämlich `Vater()` und `Mutter()` wie mathematische *Funktionen*, die für ein *Argument* (hier: eine Person im Stammbaum) einen *Wert* haben (eine andere Person). Auch in Computerprogrammen gibt es Funktionen; das sind eigenständige Module des Programm-Codes, mit denen man mathematische Funktionen direkt umsetzen kann: Eine solche Funktion wird mit einem oder mehreren Argumenten (in der Informatik häufig auch: *Parameter*) aufgerufen und liefert, nach Ausführung des Codes, einen Wert als Ergebnis.

Diese Biberaufgabe zeigt, wie Funktionsaufrufe für komplexere Berechnungen zusammengesetzt (oder: „verschachtelt“) werden können. In einem *verschachtelten Funktionsaufruf* dienen die Ergebnisse der inneren Funktionsaufrufe als Eingabe für äußere Aufrufe. Ein verschachtelter Funktionsaufruf wird von innen nach außen ausgewertet: Zum Beispiel wird bei der Auswertung von `Vater(Mutter(Mutter(Daniel)))` zuerst die Mutter von Daniel ermittelt, dann die Mutter seiner Mutter und schließlich der Vater der Mutter seiner Mutter. Die Zusammensetzung von Funktionen bzw. Funktionsaufrufen (auch *Funktionskomposition* genannt) steht in den meisten Programmiersprachen zur Verfügung, ist aber besonders wichtig für sogenannte *funktionale Programmiersprachen*.
