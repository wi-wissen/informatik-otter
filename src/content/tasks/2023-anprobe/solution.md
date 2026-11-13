---
answer: "2"
---
**2** ist die richtige Antwort.

Natürlich kann Christian Glück haben und direkt bei der ersten Anprobe die Hose in der richtigen Größe erwischen. Aber auf Glück kann er sich nicht verlassen und geht nach dieser Methode vor: Zuerst probiert er die Hose in der Mitte an. Bei der Anprobe prüft er Länge und Breite der Hose.

- Wenn Länge und Breite stimmen, hat er die Hose mit der richtigen Größe gefunden.
- Wenn die Hose zu kurz und zu breit ist, ist die passende Hose in Bereich 1.
- Wenn die Hose zu kurz ist aber die richtige Breite hat, ist die passende Hose in Bereich 2.
- Wenn die Hose zu kurz und zu schmal ist, ist die passende Hose in Bereich 3.
- Dies kann man für die Bereiche 4 bis 8 fortführen.

Nehmen wir an, die Hose mit der richtigen Größe ist in Bereich 1. Christian wählt für die zweite Anprobe die Hose in der Mitte von Bereich 1. Nun gibt es wieder mehrere Möglichkeiten: Passt die Hose, hat er die richtige Größe gefunden. Ist sie immer noch zu kurz und zu breit, ist die Hose an der Ecke dieses Bereichs die richtige, und so weiter für die anderen Positionen rund um die Mitte von Bereich 1.

Weil in jedem nummerierten Bereich das mittlere Regalfach in jeder Richtung nur ein Nachbarfach hat, sind keine weiteren Anproben notwendig. Christian braucht also in jedem Fall höchstens zwei Anproben, um die richtige Größe zu wissen.

## Das ist Informatik!

Die Methode, die Christian bei der Anprobe anwendet, heißt in der Informatik binäre Suche. Der Begriff binär kommt vom lateinischen Wort bis (zweimal). Bei der binären Suche nach einem Objekt in einer Folge sortierter Objekte wird deren mittleres Objekt mit dem gesuchten verglichen. Wenn das mittlere Objekt nicht schon das gesuchte ist, weiß man immerhin, in welcher Hälfte der Folge sich das gesuchte Objekt befindet und durchsucht diese Hälfte wieder binär. In jedem Schritt wird die Folge also in zwei Teile geteilt – deshalb „binär“. Auf diese Weise kommt man sehr schnell beim gesuchten Objekt an. Bei 1.000 Objekten werden etwa 10 Suchschritte benötigt, bei 1.000.000 Objekten etwa 20. Allgemein kann man sagen: Bei n Objekten werden etwa log(n) Schritte benötigt; die Funktion log ist der „Zweier-Logarithmus“ oder der Logarithmus zur Basis 2. Weil die binäre Suche so schnell ist, wird sie in Computerprogrammen häufig für die Suche in sortierten Daten verwendet.

In dieser Biberaufgabe ist der Suchraum, nämlich die Hosen im Regal, in zwei Dimensionen (Länge und Breite) sortiert. Deshalb kann Christian die binäre Suche gleich auf beide Dimensionen anwenden. Dann teilt sich die Suchmenge in einem Schritt nicht in 2, sondern gleich in 8 Teile auf – falls Christian nicht direkt die richtige Größe erwischt hat.
