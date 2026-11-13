---
answer: d
---
Antwort D ist richtig.

Um festzustellen, ob eine Kette eine von Monikas Matrosenketten ist, kannst du in jeder Kette zuerst die beiden Perlen suchen, mit denen Monika begonnen haben muss. Danach prüfst du, auf welche Weise Monika die Kette verlängert haben kann. Die beiden möglichen Verlängerungsaktionen nennen wir B (zwei Blaue Perlen links und rechts anfügen) und W (zwei Wellenperlen rechts anfügen).

- Bei Kette A hat Monika mit der zweiten und dritten Perle begonnen und mit den Aktionen B, W und W verlängert.
- Bei Kette B hat Monika mit der dritten und vierten Perle begonnen und mit den Aktionen B, B und W verlängert.
- Bei Kette C hat Monika mit der zweiten und dritten Perle begonnen und mit den Aktionen W, B und W verlängert.
- Bei Kette D müssen die zweite und dritte Perle den Anfang bilden. Mit Aktion B kann man die erste und vierte Perle hinzufügen, aber danach gibt es keine Aktionen mehr, um die gesamte Kette zu erhalten.

Wer sich die Verlängerungsaktionen genau ansieht, kann feststellen, dass sowohl die Anzahl der blauen Perlen als auch die der Wellenperlen in einer Matrosenkette immer ungerade sein muss. Kette D hat als einzige eine gerade Anzahl beider Arten von Perlen und kann daher keine von Monikas Matrosenketten sein.

## Das ist Informatik!

Wenn man wie Monika in dieser Biberaufgabe Perlenketten herstellt, muss man beachten: Man kann die Perlen nur an den Enden der Kette auffädeln oder wieder entfernen. Insbesondere kann man keine Perle in der Mitte einfügen und auch keine Perle aus der Mitte herausnehmen, ohne zuerst die Perlen von den beiden Enden der Kette her abzufädeln.

Die Informatik kennt eine Struktur zur Speicherung von Daten, die ähnlich funktioniert wie eine Perlenkette, bei der man also Elemente nur an den Enden hinzufügen und entfernen kann, aber nicht in der Mitte. Sie wird double-ended queue (auf deutsch etwa: Schlange mit zwei Enden) oder kurz deque genannt – und wie „Deck“ ausgesprochen.

Deques können in vielen Fällen gut verwendet werden, etwa um den Zugriffsverlauf eines Web-Browsers oder die in Computersoftware oft eingesetzten Undo-Redo-Listen zu verwalten. Sie können auch nützlich sein, wenn die Gültigkeit mathematischer Ausdrücke geprüft werden soll. Dabei kann die Prüfung, ob es zu jeder öffnenden Klammer auch eine passende schließende Klammer gibt, auf ganz ähnliche Weise erfolgen wie die Prüfung, ob es sich bei einer Perlenkette um eine von Monikas Matrosenketten handelt.
