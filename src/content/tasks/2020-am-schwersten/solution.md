---
answer: pentagon
---
Die Kiste mit dem Fünfeck ist am schwersten.

Das ergeben die Vergleiche: Die Kiste mit dem Fünfeck ist schwerer als die Kiste mit dem Quadrat. Die Kiste mit dem Quadrat ist schwerer als die Kiste mit dem Stern. Die Kiste mit dem Stern ist schwerer als die Kiste mit dem Herz. Und die Kiste mit dem Herz ist schwerer als die Kiste mit dem Kreis. Indirekt ist die Kiste mit dem Fünfeck also schwerer als alle anderen Kisten.

Wer clever ist, kann bei dieser Aufgabe abkürzen: Die schwerste Kiste kann nicht leichter als eine andere Kiste sein und deshalb beim Vergleich mit der Waage nur unten und niemals oben landen. Das gilt für genau eine Kiste, und zwar für die mit dem Fünfeck.

## Das ist Informatik!

Aus einer Menge von Dingen kann man das schwerste (oder größte oder längste oder …) bestimmen, indem man die Dinge dem Gewicht (oder der Größe oder der Länge oder …) nach sortiert und dann an das Ende der Sortierung schaut. Auch die Frage in dieser Biberaufgabe kann also durch Sortieren beantwortet werden.

Die Ergebnisse von fünf Vergleichen sind bekannt. Man kann sie als Pfeile aufzeichnen: Von einer Kiste zu einer anderen zeigt ein Pfeil, wenn die beiden Kisten verglichen wurden und die eine Kiste leichter ist als die andere. Daraus bildet man die Sortierung; sie ist zu Beginn leer. Jetzt nimmt man nach und nach eine Kiste weg (und die Pfeile, die von ihr ausgehen), auf die kein Pfeil zeigt, und stellt sie an das Ende der Sortierung. Unter den danach noch vorhandenen Kisten gibt es nämlich keine, die leichter als die weggenommene Kiste ist. Wenn man auf diese Weise alle Kisten weggenommen hat, erhält man eine Sortierung. An deren Ende steht die schwerste Kiste: die mit dem Fünfeck.

Dieses Verfahren, aus einer Menge einzelner Vergleiche eine Sortierung zu bilden, ist in der Informatik als topologische Sortierung bekannt. Aber Achtung, es funktioniert nicht immer. Wenn einige Kisten und Pfeile einen Kreis bilden, gibt es in diesem Kreis keine Kiste, auf die kein Pfeil zeigt, und man muss abbrechen. Außerdem muss jede Kiste an mindestens einem Vergleich beteiligt sein, sonst weiß man nichts über sie.
