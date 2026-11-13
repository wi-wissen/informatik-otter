---
answer: a
---
Antwort A ist richtig.

Im Raster von Antwort A sind alle Felder gemäß der Regel angekreuzt:

- Von Endpunkt 1 führt genau ein Faden, und zwar zu Endpunkt 4.
- Von Endpunkt 2 führen genau zwei Fäden, und zwar zu den Endpunkten 3 und 5.
- Von Endpunkt 3 führen genau drei Fäden, und zwar zu den Endpunkten 2, 4 und 5.
- Von Endpunkt 4 führen genau zwei Fäden, und zwar zu den Endpunkten 1 und 3.
- Von Endpunkt 5 führen ebenfalls genau zwei Fäden, und zwar zu den Endpunkten 2 und 3.

Die Raster der anderen Antworten unterscheiden sich von dem von Antwort A. Deshalb sind dort nicht alle Felder gemäß der Regel angekreuzt:

- Antwort B: Hier sind Felder für einen Faden von Endpunkt 1 nach Endpunkt 2 (und umgekehrt) angekreuzt, den es in Theklas Netz aber nicht gibt. Dafür wurden die Felder für den Faden von Endpunkt 2 nach Endpunkt 5 nicht angekreuzt.
- Antwort C: In diesem Raster sind Felder in der Diagonale von links oben nach rechts unten angekreuzt. Das kann es aber nur geben, wenn ein Faden an einem Endpunkt eine Schleife bildet, also zum selben Endpunkt zurückführt. Eine solche Schleife gibt es in Theklas Netz nicht, erst recht nicht bei den Endpunkten 1 und 4, wie die Kreuze in Antwort C anzeigen.
- Antwort D: Die Kreuze im Raster sollten ein Muster bilden, das symmetrisch ist zur Diagonale von links oben nach rechts unten: Jeder Faden von Endpunkt A zu B führt auch von B zu A, und deshalb gibt es für jedes Kreuz in Spalte A und Zeile B auch eines in Spalte B und Zeile A. In diesem Raster gibt es ein Kreuz in Spalte 2 und Zeile 5, aber keines in Zeile 5 und Spalte 2.

## Das ist Informatik!

Thekla beschreibt ein Netz durch eine Tabelle: Für jedes Paar von Endpunkten steht dort ein Kreuz, wenn die beiden durch einen Faden verbunden sind. In der Informatik nennt man das eine Adjazenzmatrix des Graphen. Die Endpunkte sind die Knoten, die Fäden sind die Kanten. Man kann an der Matrix Eigenschaften des Graphen ablesen: Weil jeder Faden in beide Richtungen führt, ist sie symmetrisch zur Diagonalen. Weil es keine Schleifen gibt, bleibt die Diagonale leer. Die Zahl der Kreuze in einer Zeile sagt, wie viele Fäden an einem Endpunkt ankommen.

Die Matrix ist eine Datenstruktur, mit der ein Computer Graphen speichern und bearbeiten kann. Sie hat Vorteile und Nachteile. Man kann sofort nachschauen, ob zwei Knoten verbunden sind. Bei vielen Knoten und wenig Kanten verbraucht sie aber viel Speicher, weil die meisten Felder leer bleiben. Dann speichert man lieber für jeden Knoten nur eine Liste seiner Nachbarn. Es kommt also darauf an, welche Darstellung für die jeweilige Anwendung am besten geeignet ist.

Die Matrix hat noch eine weitere nützliche Eigenschaft: Wenn man sie mit sich selbst multipliziert, kann man daran ablesen, auf wie vielen Wegen man von einem Knoten zu einem anderen kommt. Mit solchen Rechnungen untersucht man zum Beispiel soziale Netzwerke, Straßennetze und Rechnernetze.

*Dieser Abschnitt wurde für den Informatik-Otter ergänzt und steht nicht im Biberheft.*
