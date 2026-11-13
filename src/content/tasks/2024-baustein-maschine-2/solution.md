---
answer: d
---
Antwort D ist richtig:

Um die richtige Antwort zu bestimmen, könnte man für jede Startkonfiguration die Arbeit der Maschine bis zum Stopp simulieren und dabei die Schritte der Markierung zählen. Einfacher ist, die vier Startkonfigurationen bzgl. der Anzahl der Schritte zu vergleichen, ohne diese zu zählen.

Zur Vereinfachung stellen wir die Konfigurationen nur durch Zahlen (die Höhen der Bausteine) dar. In dieser Darstellung sehen die Startkonfigurationen so aus:

| A | B | C | D |
|---|---|---|---|
| 1 2 6 5 3 4 | 1 6 2 5 3 4 | 1 5 6 2 3 4 | 1 2 5 6 3 4 |

Wenn die Maschine mit der Konfiguration von Antwort B (kurz: Konfiguration B) startet, ist nach zwei Schritten Konfiguration A erreicht: 1 6 2 5 3 4 → 1 6 2 5 3 4 (Markierung ein Schritt weiter) → 1 2 6 5 3 4.

Für Konfiguration B macht die Markierung also mehr Schritte als für Konfiguration A. Damit kann Antwort B nicht richtig sein.

Wenn die Maschine mit Konfiguration A startet, macht die Markierung zuerst drei Schritte und erreicht dabei die Konfiguration 1 2 5 6 3 4. Diese Konfiguration wird von Konfiguration D aus in einem Schritt erreicht. Für Konfiguration A macht die Markierung also mehr Schritte als für Konfiguration D. Damit kann Antwort A nicht richtig sein.

Wenn die Maschine mit Konfiguration C startet, ist nach vier Schritten Konfiguration D erreicht: 1 5 6 2 3 4 → (zwei Schritte nach rechts) → 1 5 2 6 3 4 → 1 2 5 6 3 4. Also macht die Markierung auch für Konfiguration C mehr Schritte als für Konfiguration D. Insgesamt macht sie für Konfiguration D die wenigsten Schritte.

## Das ist Informatik!

Computer verarbeiten Daten – häufig sehr viele Daten. Dabei ist es wichtig, dass in den Daten Ordnung herrscht. In der Informatik sagt man statt ordnen meist sortieren: Zum Beispiel können Zahlen nach aufsteigender Größe, Daten über Personen nach dem Geburtsdatum oder Daten über Bücher nach der ISBN-Nummer sortiert werden. Am Ende eines Sortiervorgangs stehen die Daten in der gewünschten Reihenfolge. Weil Computer ständig große Datenmengen sortieren müssen, beschäftigen sich Informatikerinnen und Informatiker unter anderem mit möglichst effizienten Sortierverfahren, die wenig Zeit und auch wenig Speicherplatz für ihre Arbeit benötigen.

Wenn die Maschine in dieser Biberaufgabe stoppt, sind die Steine der Größe nach sortiert. Das Verfahren, das die „Baustein-Sortier-Maschine“ verwendet, heißt Gnomesort. Es ähnelt dem deutlich bekannteren Bubblesort (auch „Sortieren durch Aufsteigen“). Gnomesort ist, wie Bubblesort auch, nicht besonders effizient – insbesondere, wenn die Daten stark durcheinander sind. Für die Startkonfiguration, bei der die Steine in der falschen Reihenfolge stehen (im Beispiel dieser Biberaufgabe also: 6 5 4 3 2 1), würde die Maschine (genau genommen: die Markierung) mehr Schritte machen als für jede andere Startkonfiguration.

Sind die Daten aber bereits annähernd sortiert, sind Gnomesort wie auch Bubblesort sehr schnell – und vielleicht schneller als Verfahren wie Quicksort oder Mergesort, die im Allgemeinen deutlich effizienter, aber auch deutlich komplizierter sind. Gnomesort hingegen ist einfach zu verstehen und zu programmieren und sortiert zudem „in-place“: Für die zu sortierenden Daten wird kein zusätzlicher Speicherplatz benötigt. Wegen dieser positiven Eigenschaften ist das Verfahren für bestimmte Anwendungen durchaus interessant.
