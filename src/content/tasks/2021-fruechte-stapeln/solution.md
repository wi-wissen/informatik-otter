---
answer: [strawberry, apple, pear, orange]
---
Von oben nach unten: Erdbeere, Apfel, Birne, Orange. Es gibt nur diese eine Möglichkeit, die Früchte wie gewünscht zu verteilen.

Vater mag nur Orangen und geht als Letzter. Also kommt die Orange in die unterste Box.

Ron geht als erster, zweiter oder dritter. Mutter geht außerdem vor Dorie. Die Gesamtreihenfolge ist klar, wenn man weiß, wann Ron den Bau verlässt. Insgesamt sind diese Reihenfolgen möglich:

| | Möglichkeit 1 | Möglichkeit 2 | Möglichkeit 3 |
|---|---|---|---|
| 1. | Mutter | Mutter | Ron |
| 2. | Dorie | Ron | Mutter |
| 3. | Ron | Dorie | Dorie |
| 4. | Vater | Vater | Vater |

Als zweite können also Mutter, Dorie oder Ron gehen. In die entsprechende Box muss daher eine Frucht, die alle drei mögen; das gilt nur für den Apfel.

Für die oberste Box bleiben Birne und Erdbeere. Da Mutter Birnen nicht mag, kommt also die Erdbeere in die oberste Box. Für die dritte Box gibt es nur noch die Birne. Wie gut, dass Dorie und Ron beide Birne mögen!

## Das ist Informatik!

Die Boxen der Familie Biber bilden einen Stapel, bei dem man nur an die oberste Box herankommt. Was zuletzt daraufgelegt wurde, wird zuerst weggenommen. Dieses Prinzip heißt „last in, first out“ (LIFO), und die Datenstruktur dazu nennt man Stapel (englisch Stack). Auf einem Stapel gibt es nur zwei Grundoperationen: etwas oben darauflegen (push) und das oberste Element wegnehmen (pop).

Weil die Reihenfolge, in der die Bibers gehen, nicht feststeht, muss man in der Aufgabe alle möglichen Reihenfolgen berücksichtigen und eine Belegung finden, die für jede passt. Dazu hilft eine logische Überlegung wie bei einem Rätsel: Man sucht die Box, für die es nur eine Möglichkeit gibt, und schließt der Reihe nach die übrigen aus. Aufgaben, bei denen man Werte so auswählen muss, dass bestimmte Bedingungen erfüllt sind, nennt man Constraint-Probleme. Auch Stundenpläne oder Sudokus gehören dazu.

Stapel sind in der Informatik allgegenwärtig. Jedes laufende Programm legt seine Funktionsaufrufe auf einem Stapel ab, dem Aufrufstapel: Die zuletzt aufgerufene Funktion muss zuerst fertig werden. Auch die Rückgängig-Funktion eines Textprogramms und der Zurück-Knopf im Browser arbeiten mit einem Stapel, denn der zuletzt gemachte Schritt wird als erstes zurückgenommen.

*Dieser Abschnitt wurde für den Informatik-Otter ergänzt und steht nicht im Biberheft.*
