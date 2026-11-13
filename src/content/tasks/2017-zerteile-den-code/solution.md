---
answer: "1 21 1 22 33 321"
---
Die richtige Aufteilung ist: **1 21 1 22 33 321**

Wir betrachten die Ziffernfolge von links. Falls B durch 12 kodiert würde, wäre die folgende 1 das Codewort für E. Direkt dahinter käme nämlich wieder 12 für das zweite B. Doch das ist gegen die Regel: Das Codewort für B würde mit dem für E beginnen. Längere Anfangsstücke der Ziffernfolge (z. B. 121, 1211 etc.) können auch nicht Codewörter für B sein, weil sie alle nur einmal in der Ziffernfolge enthalten sind. Folglich ist das Codewort für B die Ziffer 1.

Nun muss das Codewort für E folgen. Die 2 alleine ist es nicht, denn dann müsste der Anfang der Ziffernfolge zu BEBB dekodiert werden. Das Codewort 21 hingegen ist richtig: Erstens wird der Anfang so zu BEB, und zweitens ist ein längeres Codewort nicht möglich, da sonst nur noch die letzte 1 das zweite B sein kann – aber BEBRAS hört nicht mit B auf. Nun wissen wir, dass 1 21 1 die Kodierung für BEB ist.

Wir machen mit dem Rest weiter: 2233321 ist die Kodierung für RAS. Die 2 alleine kann also nicht das Codewort für R sein, sonst hätten wir RR zu Beginn. Das Codewort für R ist also mindestens die 22. Am Ende wiederum sind 1 und 21 schon als Codewörter vergeben. Das Codewort für S muss also mindestens die Folge 321 sein. Zwischen 22 und 321 steht 33. Das muss das Codewort für A sein: Das einzig andere noch mögliche Codewort wäre 3. Dann müsste 3321 das Codewort für S sein – und würde mit dem Codewort für A beginnen; das ist gegen die Regel. Die Aufteilung des hinteren Teils ist also 22 33 321.

## Das ist Informatik!

Der Code, der in dieser Biberaufgabe beschrieben wird, ist ein Beispiel für einen Präfixcode. Ein Präfix ist eine Zeichenfolge zu Beginn einer anderen Zeichenfolge. Bei einem Präfixcode darf kein Codewort Präfix eines anderen Codeworts sein. Das heißt: kein Codewort darf mit einem anderen Codewort beginnen. Bei Präfixcodes haben die Codewörter unterschiedliche Länge. Der Vorteil der Präfix-Regel ist, dass man keine Trennsymbole zwischen Codewörtern benötigt. Man kann immer erkennen, an welcher Stelle das nächste Codewort beginnt. Wenn man kurze Codewörter für häufig vorkommende Buchstaben wählt, kann man Texte sehr effizient kodieren und große Textmengen platzsparend speichern.

Die Huffman-Kodierung ist eine Methode, einen optimalen Präfixcode zu finden. Sie ist weit verbreitet und steckt z. B. hinter bekannten Datenformaten wie JPEG und MP3.
