---
answer: { s1: blue, s2: red, s3: red, s4: blue, s5: blue, s6: blue, s7: red, s8: red }
---
![Die gesuchte Bälle-Folge: blau, rot, rot, blau, blau, blau, rot, rot](./img/solution.png)

Es gibt mehrere Wege, die richtige Bälle-Folge zu bestimmen. Ein Weg besteht darin, die Beschreibung von rechts nach links durchzugehen und dabei jeweils zu überlegen, ob der Ball an der entsprechenden Position rot oder blau sein muss.

Wir beginnen ganz rechts. Die 0 an dieser Stelle legt fest, dass der Ball rot sein muss: Nur bei einem roten Ball bleibt die Anzahl der blauen Bälle rechts ab dieser Stelle gerade (nämlich 0). An der zweiten Stelle von rechts steht wieder eine 0, also muss auch dieser Ball rot sein.

An der dritten Stelle von rechts steht eine 1. Der Ball muss blau sein, um von einer geraden (0) zu einer ungeraden (1) Anzahl blauer Bälle zu kommen. An der vierten Stelle von rechts steht eine 0. Der Ball muss blau sein, um von der ungeraden (1) zu einer geraden (2) Anzahl zu kommen. An der fünften Stelle von rechts steht eine 1. Der Ball muss blau sein, um von der geraden (2) zu einer ungeraden (3) Anzahl zu kommen.

An der sechsten und siebten Stelle von rechts steht jeweils eine 1. Die Bälle müssen rot sein, damit die Anzahl blauer Bälle ungerade (3) bleibt. An der ersten Stelle von links steht eine 0. Der Ball muss blau sein, um von der ungeraden (3) zu einer geraden (4) Anzahl zu kommen.

Zusammenfassend: Wenn es bei einem Schritt nach links einen Wechsel von 0 zu 1 oder von 1 zu 0 gibt, dann muss ein blauer Ball hinzukommen. Gibt es keinen Wechsel, ändert sich die Parität der Anzahl blauer Bälle nicht, so dass dort ein roter Ball liegen muss.

| Beschreibung | 0 | 1 | 1 | 1 | 0 | 1 | 0 | 0 |
|---|---|---|---|---|---|---|---|---|
| blaue Bälle rechts | 4 | 3 | 3 | 3 | 2 | 1 | 0 | 0 |

## Das ist Informatik!

Emil beschreibt die Bälle-Folge mit den Ziffern 0 und 1, und zwar so, dass man aus der Beschreibung die Bälle-Folge wieder erstellen kann. Eine Bälle-Folge und ihre Beschreibung sind also eindeutig einander zugeordnet. Für die Informatik sind solche eindeutigen Zuordnungen zwischen Folgen aus verschiedenen Elementemengen essenziell und heißen Kodierungen. Weil die technischen Bausteine der Computerhardware mit binären Werten arbeiten (0 und 1, wahr und falsch, …), muss es für jede Information, die von Computern verarbeitet werden soll, eine Kodierung mit binären Werten geben.

Bei der Kodierung von Information für die Speicherung in Informatiksystemen kann man versuchen, die Darstellung in binären Werten so kompakt wie möglich zu halten, um Speicherplatz zu sparen. Dann kann aus der Kodierung eine Kompression von Daten werden. Wenn aus dem Ergebnis der Kompression die Ausgangsinformation komplett und exakt wieder rekonstruiert werden kann, wird die Kompression als verlustfrei bezeichnet. In vielen Fällen sind aber auch verlustbehaftete Kompressionen akzeptabel. Bekannte Beispiele sind die Datenformate MP3 und JPEG. In beiden Formaten wird unwichtige Information reduziert, nämlich vom Menschen ohnehin schlecht wahrgenommene Frequenzbereiche oder Farbwerte.

Emil bestimmt für jede Bälle-Folge eine (verlustfreie) Kodierung in binären Werten. Wäre es ihm nur darum gegangen, Folgen von roten und blauen Bällen mit binären Werten zu kodieren, hätte er einfach für die roten Bälle eine 0 und für die blauen eine 1 schreiben können. Aber dann wäre diese Biberaufgabe deutlich weniger interessant gewesen, nicht wahr?
