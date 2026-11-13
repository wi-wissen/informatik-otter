---
answer: d
---
Antwort D ist richtig: 39 bis 1521 Schritte.

Beim Baumstämme-Sortieren macht Hamid Schritte nach links und nach rechts. Einen Schritt nach rechts macht er, wenn er die beiden Stämme, deren Längen er verglichen hat, nicht vertauschen muss, weil sie schon richtig liegen: kürzer links von länger. Im besten Fall sind alle 40 Stämme bereits von kurz nach lang sortiert. Dann muss Hamid niemals vertauschen und geht nur nach rechts. Er startet dabei rechts vom ersten Stamm und stoppt rechts vom 40. Stamm. Im besten Fall muss Hamid bei 40 Stämmen also 39 Schritte machen; allgemein bei n Stämmen sind es n – 1 Schritte. Die Antworten A und B können also nicht richtig sein.

Etwas schwieriger ist zu verstehen, wie viele Schritte Hamid im ungünstigsten Fall machen muss. Dazu kann man sich überlegen, dass alle Baumstämme links von Hamid bereits in sich sortiert sind, wenn Hamid an einer bestimmten Stelle einen Schritt nach rechts gemacht hat. (Am Anfang ist das jedenfalls so: Wenn Hamid startet, vertauscht er die ersten beiden Stämme, die danach in sich sortiert sind, und macht einen Schritt nach rechts.)

Der Baumstamm rechts von Hamid ist dann kürzer als alle links von Hamid liegenden Baumstämme, und Hamid muss ihn nach ganz links „durchtauschen“: Weil die beiden Stämme, die er aktuell vergleicht, falsch liegen, vertauscht er sie und geht einen Schritt nach links; auch die dann verglichenen Stämme liegen falsch usw. bis Hamid ganz links angekommen ist und dann wieder die Stämme vertauscht.

Danach ist die Menge der in sich sortierten Baumstämme um 1 gewachsen; Hamid geht dann wieder soweit nach rechts, bis zum ersten Mal zwei Stämme falsch liegen und muss dann wieder ganz nach links durchtauschen – und so weiter.

Bei n umgekehrt sortierten Baumstämmen geht Hamid also immer wieder ein Stück nach rechts und gleich viele Schritte wieder zurück: erst 1 Schritt, dann 2 usw. bis n – 2; dann sind alle Baumstämme richtig sortiert, und Hamid muss nur noch n – 1 Schritte nach rechts machen, bis er aufhören kann. Man kann ausrechnen, dass dies insgesamt (n – 1)² Schritte sind; für n = 40 also 1.521 Schritte. Damit ist Antwort D richtig, Antwort C aber nicht.

## Das ist Informatik!

Hamid sortiert die Baumstämme nach einer genauen Vorschrift: Er vergleicht zwei benachbarte Stämme, vertauscht sie bei Bedarf und geht dann nach links oder rechts weiter. Eine solche eindeutige Handlungsvorschrift ist ein Algorithmus. Das Verfahren heißt in der Informatik Gnome Sort und ist eng mit dem Sortieren durch Einfügen (Insertionsort) verwandt: Der Bereich links von Hamid ist immer schon in sich sortiert, und der nächste Stamm wird so weit nach links getauscht, bis er an der richtigen Stelle liegt.

Die Aufgabe fragt nicht nach dem Ergebnis, sondern danach, wie viel Arbeit das Verfahren kostet. Die Zahl der Schritte hängt von der Anordnung der Stämme ab. Im besten Fall, wenn schon alles sortiert ist, braucht Hamid nur n – 1 Schritte für n Stämme. Im schlechtesten Fall, bei umgekehrter Reihenfolge, sind es (n – 1)² Schritte. Verdoppelt man die Zahl der Stämme, vervierfacht sich im schlechtesten Fall also ungefähr der Aufwand. Man sagt, der Aufwand wächst quadratisch. Die Informatik untersucht auf diese Weise, wie sich der Aufwand eines Algorithmus mit der Größe der Eingabe verändert (Laufzeitanalyse), und unterscheidet dabei den besten, den schlechtesten und den durchschnittlichen Fall.

Bei 40 Stämmen ist der Unterschied zwischen 39 und 1.521 Schritten noch harmlos. Bei einer Million Datensätze wäre das quadratische Wachstum aber ein ernstes Problem. Deshalb benutzt man für große Datenmengen schnellere Verfahren wie Mergesort oder Quicksort, deren Aufwand nur wenig stärker als die Zahl der Elemente wächst, nämlich etwa wie n · log n.

*Dieser Abschnitt wurde für den Informatik-Otter ergänzt und steht nicht im Biberheft.*
