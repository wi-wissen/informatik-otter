---
answer: c
---
Antwort C ist richtig:

Die Vorschrift des Hotels zur Zimmervergabe bedeutet, dass die Zimmernummern zuerst nach der zweiten Ziffer und dann nach der ersten Ziffer sortiert werden müssen. Um die Zimmer in der richtigen Reihenfolge zu vergeben, kann man die einzelnen Zimmernummern also von rechts nach links lesen und dann wie üblich nach kleinerem Wert sortieren. Beispiel: aus 32 wird 23, aus 15 wird 51, und weil 23 < 51, muss Zimmer 32 vor Zimmer 15 vergeben werden. Liest man die Nummern auf diese Weise, so liefert nur Antwort C eine aufsteigende Zahlenfolge (11, 13, 21, …, 52, 81).

Antwort A ist falsch: Die Reihenfolge der ersten beiden Nummern (18, 15) gehorcht nicht der Vergabevorschrift (81 > 51). Antwort B ist falsch: Die Reihenfolge der dritten und vierten Nummer (44, 31) gehorcht nicht der Vergabevorschrift (44 > 13). Antwort D ist falsch: Die Reihenfolge der vierten und fünften Nummer (18, 22) gehorcht nicht der Vergabevorschrift (81 > 22). Hier wurde erst nach Stockwerken und dann nach Abstand vom Aufzug sortiert.

## Das ist Informatik!

Die Sortierung der im Hotel Comfort zu vergebenden Zimmernummern ist speziell. Aber sie hat eine besondere Eigenschaft: Wenn normal sortierte Zimmernummern – zum Beispiel 11, 12, 18, 22, 25 – für das Hotel Comfort umsortiert werden, bleiben die Zimmernummern eines Stockwerks untereinander weiterhin sortiert: 11, 12, 22, 25, 18. Der Grund: Die Reihenfolge zweier Nummern wird nur geändert, wenn es nach dem neuen vorrangigen Sortierkriterium (also der zweiten Ziffer, die die Entfernung vom Aufzug angibt) nötig ist.

Sortierverfahren, die beim Umsortieren die Reihenfolge nach der bisherigen Sortierpriorität beibehalten, heißen in der Informatik „stabile Sortierverfahren“. Die sind in der Praxis recht nützlich, zum Beispiel in einem E-Mail-Programm: Dort können die E-Mails etwa nach Datum, Absender oder Betreff sortiert werden. Sind die E-Mails erst nach Datum sortiert, und ordnet man sie dann nach Betreff an, so bleiben die E-Mails mit demselben Betreff untereinander immer noch nach Datum sortiert. Das scheint selbstverständlich, funktioniert aber nur mit einem stabilen Sortierverfahren.
