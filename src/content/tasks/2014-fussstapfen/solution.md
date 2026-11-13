---
answer: a
---
Antwort A ist richtig:

Wenn man das Stapfprogramm für einen 2-Baum mit dem für einen 3-Baum vergleicht, erkennt man das Schema und kann das Stapfprogramm für einen 4-Baum aufschreiben: Gehe 4 Schritte vor, dabei machst du 4 Fußstapfen. Wende dich nach rechts und stapfe einen 3-Baum. Wende dich nach links und stapfe einen 3-Baum. Gehe in deiner Spur wieder zurück.

Nur die Figur in Antwort A entsteht durch dieses Programm. Sie ist deshalb ein 4-Baum, der aus 4 Fußstapfen und zwei 3-Bäumen besteht.

Die Figur in Antwort B besteht aus 4 Fußstapfen und fälschlich vier 3-Bäumen. Die Figur in Antwort C enthält zwar zwei 3-Bäume, beginnt aber mit nur 3 Fußstapfen. Die Figur in Antwort D beginnt mit 4 Fußstapfen, aber die beiden Unterbäume sind keine 3-Bäume.

## Das ist Informatik!

Das Schema funktioniert für alle möglichen Zahlen. N-Bäume stapfen heißt n Schritte vorgehen, dabei n Fußstapfen machen, zwei (n-1)-Bäume stapfen und wieder zurückgehen. Ein (n-1)-Baum wiederum besteht aus n-1 Fußstapfen und zwei (n-2)-Bäumen, und so weiter, bis man beim 1-Baum ankommt, für den es ein spezielles Programm gibt.

In der Informatik spricht man von Rekursion, wenn eine Aufgabe erledigt wird, indem man einfachere Versionen der gleichen Aufgabe erledigt, so lange bis die einfachste(n) Version(en) der Aufgabe auf spezielle Art und Weise erledigt wird. In vielen Fällen kann mit Rekursion elegant beschrieben werden, wie eine Aufgabe zu erledigen ist.

Aber Achtung: Um einen n-Baum zu stapfen muss man 2 (n-1)-Bäume stapfen, also 4 (n-2)-Bäume stapfen, also 8 (n-3)-Bäume stapfen, …, also 2^(n-1) 1-Bäume stapfen. Für eine große Zahl n kann das sehr lange dauern. Rekursion kann also elegant, aber auch mühsam sein.
