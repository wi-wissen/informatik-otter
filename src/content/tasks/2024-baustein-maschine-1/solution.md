---
answer: c
---
Antwort C ist richtig:

Natürlich könnte man die Arbeit der Maschine Schritt für Schritt nachvollziehen, für diesen speziellen Fall. Es ist aber einfacher zu erkennen, dass die Maschine grundsätzlich Bausteine der Größe nach sortiert.

Am Anfang steht links von der Markierung nur ein Stein. Man kann sagen, dass dieser eine Stein der Größe nach sortiert ist. Insbesondere sind also alle Steine links von der Markierung der Größe nach sortiert. Man kann überlegen, dass die weiteren Schritte der Maschine an dieser Eigenschaft nichts ändern.

Die Markierung geht nur nach rechts, wenn der Baustein links von der Markierung kleiner ist als der Baustein rechts davon. Sind vor einem solchen Rechtsschritt alle Bausteine links von der Markierung der Größe nach sortiert, ist das nach dem Schritt immer noch der Fall.

Wenn das anders ist, also der linke Baustein größer ist als der rechte, wechselt der kleinere Baustein nach links und der größere nach rechts. Der kleinere Baustein, der nun links von der Markierung steht, könnte kleiner sein als einige Steine weiter links davon. Deshalb geht die Markierung auch nach links. Sind vor einem solchen Linksschritt alle Bausteine links von der Markierung der Größe nach sortiert, ist das nach dem Schritt immer noch der Fall.

Ist der vor einem Linksschritt kleinere Baustein auch kleiner als die Steine weiter links davon, folgen weitere Linksschritte. Dadurch wird der kleinere Baustein so lange weiter nach links getauscht, bis er größer ist als der Baustein links von ihm (und damit als alle anderen links von ihm) – oder bis er ganz links steht, wenn er der kleinste Baustein ist. Dann folgen Rechtsschritte, bis ein weiterer kleinerer Baustein vorkommt, und dann wieder Linksschritte.

Das geht so lange, bis bei den Rechtsschritten kein kleinerer Baustein mehr vorkommt. Dann macht die Markierung so lange Rechtsschritte, bis sie rechts neben den Steinen steht, und die Maschine stoppt. Dann stehen alle Bausteine links von der Markierung, und alle sind der Größe nach aufsteigend sortiert, wie in Antwort C.

## Das ist Informatik!

Computer verarbeiten Daten – häufig sehr viele Daten. Dabei ist es wichtig, dass in den Daten Ordnung herrscht. In der Informatik sagt man statt ordnen meist sortieren: Zum Beispiel können Zahlen nach aufsteigender Größe, Daten über Personen nach dem Geburtsdatum oder Daten über Bücher nach der ISBN-Nummer sortiert werden. Am Ende eines Sortiervorgangs stehen die Daten in der gewünschten Reihenfolge. Weil Computer ständig große Datenmengen sortieren müssen, beschäftigen sich Informatikerinnen und Informatiker unter anderem mit möglichst effizienten Sortierverfahren, die wenig Zeit und auch wenig Speicherplatz für ihre Arbeit benötigen.

Das Sortierverfahren, das die Baustein-Sortier-Maschine in dieser Biberaufgabe verwendet, heißt Gnomesort. Es ähnelt dem deutlich bekannteren Bubblesort (auch „Sortieren durch Aufsteigen“). Gnomesort ist, wie Bubblesort auch, nicht besonders effizient – zumindest dann, wenn die Daten stark durcheinander sind. Sind die Daten hingegen bereits annähernd sortiert, sind beide Verfahren aber sehr schnell – und vielleicht schneller als Sortierverfahren wie Quicksort oder Mergesort, die im Allgemeinen deutlich effizienter sind. Deshalb, und weil Gnomesort einfach zu verstehen und zu programmieren ist, ist das Verfahren für bestimmte Anwendungen durchaus interessant.
