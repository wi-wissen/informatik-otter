---
answer: a
---
**Antwort A** ist richtig.

Die linke Malanweisungskarte besagt, dass die linke Hälfte des Bodens mit einer Halbkreisfläche gefüllt werden soll, deren runde Seite bei normaler Orientierung nach links zeigt. Für die rechte Hälfte soll dieselbe Malanweisungskarte zwei Mal verwendet werden. Die Orientierungen der Bildelemente muss den Orientierungen der Einsen entsprechen.

In beiden Hinweisen auf Karte 1 ist die 1 um 180° gedreht, nach unten. Deshalb müssen die dort eingesetzten Bildelemente ebenfalls so gedreht werden, so dass die Rundung der dann gemalten Halbkreisflächen genau in die Gegenrichtung zeigt. Bei der ersten Verwendung der linken Karte 1 (bei der Breite 16 m) zeigt die Rundung der Halbkreisfläche nach links, bei 8 m nach rechts, bei 4 m wieder nach links usw. Bei 0,5 m wird die zweite Karte 1 verwendet: Tom und Tina malen die verbleibende freie Fläche noch aus und können danach aufhören.

Auf diese Weise entsteht genau das Bild von Antwort A.

## Das ist Informatik!

Die erste Malanweisungskarte 1 in dieser Biberaufgabe verweist auf sich selbst. Sie ruft Tom und Tina sozusagen dazu auf, sie selbst erneut anzuwenden, mit einer geringeren Breite. In der Informatik werden Anweisungen, die sich selbst aufrufen, als *rekursiv* bezeichnet. Der Begriff kommt von lateinisch „recurrere“ (deutsch: zurücklaufen). Rekursion ist ein mächtiges Konzept. Für manche komplexen Aufgaben kann man kurz und überschaubar eine rekursive Anweisung zu ihrer Lösung formulieren.

Eine rekursive Anweisung muss eine Bedingung enthalten, die festlegt, wann die Rekursion abgebrochen werden soll. Sonst arbeitet die Rekursion solange weiter, bis irgendeine Ressource erschöpft ist. Etwa der Computerspeicher oder die Geduld des Benutzers. In dieser Biberaufgabe hat die zweite Karte 1 diese Funktion: Unter der Bedingung, dass noch eine Fläche der Breite 0,5 m bemalt werden soll, wird sie „aufgerufen“. Da sie keinen Verweis auf eine andere Karte enthält, bricht sie die Rekursion ab.
