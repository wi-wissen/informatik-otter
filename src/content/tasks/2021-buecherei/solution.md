---
answer: b
---
Antwort B ist richtig: Susi hat fast alles richtig gemacht. Sie hat immer die richtigen Positionswerte addiert, und sie hat die Zwischenergebnisse immer mit 3 multipliziert – mit einer Ausnahme: In Antwort B hat sie Letzteres einmal vergessen.

## Das ist Informatik!

In der Biber-Bücherei muss niemand lange suchen. Aus dem Titel wird mit einer Rechenvorschrift ausgerechnet, wo das Buch steht. Eine Vorschrift, die aus beliebigen Daten, hier einem Titel, einen Wert in einem festen Bereich macht, heißt Hashfunktion, und das Verfahren, damit Daten abzulegen und wiederzufinden, nennt man Hashing. Das Ergebnis, hier 136, ist der Hashwert. Er sagt, in welchem Regal, in welcher Reihe und in welchem Fach das Buch zu finden ist.

Der große Vorteil: Man muss nicht Regal für Regal durchsuchen, weil man den Platz direkt berechnen kann. Allerdings können zwei verschiedene Titel denselben Hashwert bekommen, denn es gibt viel mehr mögliche Titel als Plätze im Regal. Man nennt das eine Kollision. Man braucht dann eine Regel, wie damit umgegangen wird, zum Beispiel ein Ausweichfach in der Nähe. Eine gute Hashfunktion verteilt die Daten möglichst gleichmäßig, damit es nur selten Kollisionen gibt. Das wiederholte Multiplizieren mit 3 vor dem Addieren sorgt in der Aufgabe dafür, dass auch die Reihenfolge der Buchstaben den Wert beeinflusst.

Hashing wird in der Informatik sehr oft benutzt. Hashtabellen sind in vielen Programmiersprachen eine eingebaute Datenstruktur, zum Beispiel als Dictionary oder Map, und ermöglichen es, einen Eintrag fast unabhängig von der Anzahl der Einträge zu finden. Auch Datenbanken verwenden Hashing, um Datensätze schnell zu finden. Daneben gibt es kryptografische Hashfunktionen, die zum Beispiel beim sicheren Speichern von Passwörtern eingesetzt werden.

*Dieser Abschnitt wurde für den Informatik-Otter ergänzt und steht nicht im Biberheft.*
