---
answer: b
---
**Antwort B ist richtig:** Durchläufst du Team 2, kannst du jede Spielernummer in der sortierten Folge der Spielernummern von Team 1 nachschauen. In einer sortierten Folge findet man Werte schneller als in einer nicht sortierten Folge. Dafür gibt es mehrere Gründe. Zum Beispiel kann man die Suche abbrechen, sobald man dem ersten Wert begegnet, der gemäß der Sortierung hinter dem gesuchten Wert liegt (bei Zahlen: der größer ist als die gesuchte Zahl). Der gesuchte Wert kann dann in der sortierten Folge nicht mehr vorkommen. Die Spielernummern in der nicht sortierten Folge von Team 2 nachzuschauen würde also länger dauern. Deshalb dauert die in Antwort A vorgeschlagene Methode länger als die von Antwort B, und deshalb ist auch Antwort C falsch.

Bei der Methode von Antwort D geht die Suche nach nicht doppelt vorkommenden Spielernummern etwa gleich schnell wie die Suche nach doppelt vorkommenden Spielernummern von Antwort B (wenn du Team 2 durchläufst und im sortierten Team 1 nachschaust). Aber die Zeit für die Subtraktion kommt hinzu.

## Das ist Informatik!

Wie lässt sich eine sortierte Folge besonders schnell durchsuchen? Die Informatik kennt die Antwort auf diese Frage. Nimm an, du suchst z. B. die Nummer 9 auf den Trikots von Team 1. Du schaust zuerst auf den mittleren Spieler. Er hat die Nummer 17. Die gesuchte Nummer 9 ist kleiner. Also suchst du in der linken Hälfte der Mannschaft weiter. In deren Mitte steht Nummer 7. Also suchst du rechts von 7 weiter und hast die Nummer 9 rasch gefunden. Der Trick ist, dass du die zu durchsuchende Folge bei jedem Schritt in zwei Teile teilst und dann nur noch in einem der Teile weitersuchst – indem du ihn wieder in zwei Teile teilst, usw. Dieses Verfahren nennt die Informatik binäre Suche. „Binär“ kommt vom lateinischen Wort „bini“, das bedeutet „je zwei“. Mit binärer Suche kann man eine Folge mit z. B. einer Million Werten in 20 Schritten durchsuchen – statt in bis zu einer Million Schritten, die man bräuchte, wenn man einfach von vorne nach hinten sucht.

Das Durchsuchen von Datenmengen ist eine der häufigsten Aufgaben von Computern. Deshalb kennt die Informatik viele Verfahren zum Sortieren und Suchen – und weiß genau, welche Verfahren unter welchen Bedingungen am schnellsten sind.
