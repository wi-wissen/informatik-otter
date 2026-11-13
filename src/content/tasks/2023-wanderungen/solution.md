---
answer: "6"
---
**6** ist die richtige Antwort.

Wir benennen die Orte mit Buchstaben:

![Die fünf Übernachtungsorte A bis E von links nach rechts](./img/solution-karte.png)

Zuerst stellen wir fest, dass Mia in B und C übernachten muss, weil die Entfernung zwischen diesen beiden Orten die größte Entfernung (2) ist, die sie an einem einzigen Tag zurücklegen kann. Für den Weg von B nach C hat Mia also nur eine Möglichkeit.

Nun können wir die Möglichkeiten für die anderen Teilstücke ihres Weges ermitteln: Vom Startpunkt bis B kann Mia entweder in einem Stück durchwandern oder zwischendurch in A übernachten; das sind zwei Möglichkeiten (wie in den Wanderungen 1 und 2). Von C zum Ziel muss Mia drei Abschnitte wandern, und sie kann nach jedem Abschnitt übernachten. Deshalb kann sie den gesamten Weg in alle drei Kombinationen von 1 und 2 Abschnitten aufteilen:

C → D → E → Ziel; C → E → Ziel; C → D → Ziel

Die Gesamtzahl aller Wanderungen, die Mia machen kann, ist also 2 · 1 · 3 = 6.

## Das ist Informatik!

Manchmal kann die Zahl aller Möglichkeiten, eine gegebene Aufgabe zu erledigen, sehr groß sein. Zum Beispiel gibt es etwa 14 Millionen Möglichkeiten, 6 verschiedene Zahlen aus den Zahlen 1 bis 49 auszuwählen. Und es gibt etwa eine halbe Milliarde Möglichkeiten, die Zahlen von 1 bis 12 in unterschiedlicher Folge aufzuschreiben. Dafür braucht dann auch ein Computer ein wenig Zeit.

Wie gut, dass es in dieser Biberaufgabe nach dem dritten Abschnitt keinen Übernachtungsort gibt und das Zählen aller Wanderungen, die Mia machen kann, in drei Teile aufgeteilt werden kann. Das Zählproblem wird sozusagen in drei kleinere Zählprobleme zerlegt. In der Informatik wird die Technik der Problemzerlegung (engl.: *decomposition*) beim Entwurf von Algorithmen häufig verwendet. Dieses Lösungsprinzip ist auch als *Divide and Conquer* (auf Deutsch auch „Teile und herrsche“) bekannt.

Nach diesem Prinzip funktionieren zum Beispiel einige wichtige Sortieralgorithmen. Auch die dynamische Programmierung, eine Methode zur algorithmischen Lösung von Optimierungsproblemen (beschrieben 1957 von Richard Bellman), basiert auf diesem Prinzip: Wenn man erkennt, dass die optimalen Lösungen eines Problems sich aus den optimalen Lösungen von Teilproblemen zusammensetzen, kann man dies nutzen, um sozusagen „klein anzufangen“: Zunächst werden die Lösungen für die kleinsten Teilprobleme direkt berechnet und anschließend zu Lösungen für die nächstgrößeren Teilprobleme zusammengesetzt. Dies wird wiederholt, bis die optimale Lösung des vollständigen Problems gefunden ist. Da gefundene Teil-Lösungen häufig zu Lösungen vieler größerer Teile beitragen, werden sie gespeichert, um wiederholte gleiche Berechnungen einzusparen. Auch beim Zählen von Möglichkeiten kann dynamische Programmierung sehr hilfreich sein.
