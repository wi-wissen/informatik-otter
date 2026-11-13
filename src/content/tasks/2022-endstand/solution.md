---
answer: c
---
Antwort C ist richtig.

Antwort C zeigt einen Endstand. Beide Spieler haben vier Zeichen gesetzt. Der zweite Spieler hat mit seinem vierten O drei gleiche Zeichen in einer Diagonale und damit gewonnen. Damit war das Spiel beendet, keine weiteren Zeichen wurden gesetzt.

Antwort A zeigt keinen Endstand. Spieler X hat das Spiel gewonnen, aber Spieler O hat weitere Os in leere Felder gesetzt. Da der Gewinner immer das letzte Zeichen setzt, kann er niemals weniger Zeichen als der Verlierer setzen.

Antwort B zeigt keinen Endstand. Der Spielstand enthält 5 X, aber nur 3 O. Die Anzahlen der O und X können sich bei regelmäßigem Spielverlauf aber höchstens um 1 unterscheiden.

Antwort D zeigt keinen Endstand. Beide Spieler haben vier Zeichen gesetzt, aber es gibt noch keinen Gewinner und noch sind nicht alle Felder besetzt. Spieler X kann noch ein Zeichen setzen und wird das Spiel damit gewinnen.

## Das ist Informatik!

Bei der Lösung dieser Biberaufgabe haben wir geprüft, ob die vier Antwort-Bilder einen Endstand des Spiels zeigen. Dabei haben wir Bedingungen für Endstände geprüft, die aus den Spielregeln von Tic-Tac-Toe logisch abgeleitet werden können:

- Die Differenz zwischen den Anzahlen von X und O muss 0, −1 oder 1 sein.
- Wenn kein Spieler gewonnen hat, müssen alle Felder gefüllt sein.
- Der Verlierer kann höchstens so viele Zeichen setzen wie der Gewinner.
- Ein Endstand kann höchstens eine Folge von drei gleichen Zeichen in einer Zeile, Spalte oder Diagonalen enthalten.

So wie diese „Endstand-Bedingungen“ lässt sich auch ein Endstand und insbesondere auch ein Gewinn-Spielstand aus den Spielregeln und dem Anfangs-Spielstand (das leere Raster) logisch ableiten. Das funktioniert, weil die Spielregeln von Tic-Tac-Toe als Logik-Regeln formuliert werden können. Wenn man diese Regeln mit Hilfe der Programmiersprache Prolog, in die logisches Ableiten sozusagen eingebaut ist, formuliert, erhält man ein Programm, das Tic-Tac-Toe spielen kann.

In den frühen Zeiten der Forschung zur „Künstlichen Intelligenz“ wurde logisches Ableiten als wichtiges Werkzeug gesehen, „intelligentes“ Verhalten mit Informatik-Systemen zu implementieren. Heute verwenden KI-Systeme vor allem statistische Verfahren, zu denen letztlich auch die „künstlichen neuronalen Netze“ gehören. Logisches Ableiten bzw. das „logische Programmieren“ mit Sprachen wie Prolog hat aber auch heute noch Anwendungen.
