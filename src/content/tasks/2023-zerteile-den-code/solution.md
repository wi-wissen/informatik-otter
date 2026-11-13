---
answer: "1 21 1 22 33 321"
---
Die Codewörter sind **1 21 1 22 33 321**: M = 1, E = 21, O = 22, R = 33, Y = 321.

Man beginnt links am Anfang der Ziffernfolge. Falls M durch 12 kodiert würde, hätte E zwangsläufig das Codewort 1, denn dahinter käme wieder 12 für das zweite M. Das würde jedoch der Regel widersprechen: Das Codewort für M würde dann mit 1 beginnen, dem Codewort für E. Längere Anfangsstücke der Ziffernfolge (121, 1211, 12112 etc.) können auch nicht das Codewort für M sein, weil dieses Codewort zwei Mal vorkommen muss, diese Stücke aber jeweils nur einmal in der Ziffernfolge enthalten sind. Folglich ist das Codewort für M die Ziffer 1.

Nun muss das Codewort für E folgen – und dahinter wieder das für M, also die 1. Somit kann das Codewort für E nur eine der folgenden Ziffernfolgen sein: 2, 21 oder 211223332. Es kann nicht 2 sein; dann würde das Wort mit MEMM beginnen. Es kann nicht 211223332 sein; dann wäre das Wort insgesamt nur MEM. Folglich ist das Codewort für E die Ziffernfolge 21. Nun ist klar, dass 1 21 1 die Kodierung für MEM ist.

Der Rest der Ziffernfolge, also 2233321, kodiert die Buchstaben ORY. Die 2 alleine kann nicht das Codewort für O sein, sonst hätten wir OO zu Beginn. Das Codewort für O muss also mindestens die 22 beinhalten. Am Ende wiederum sind 1 und 21 schon als Codewörter für M bzw. E vergeben. Das Codewort für Y muss also mindestens die Folge 321 sein. Zwischen 22 und 321 steht 33. Das muss das Codewort für R sein: Das einzig andere noch mögliche Codewort für R wäre 3. Dann müsste 3321 das Codewort für Y sein – und würde mit dem Codewort für R beginnen; das ist gegen die Regel. Die Aufteilung des hinteren Teils ist also 22 33 321.

## Das ist Informatik!

Der Code, der in dieser Biberaufgabe beschrieben wird, ist ein Beispiel für einen *Präfixcode*. Ein Präfix ist eine Zeichenfolge zu Beginn einer anderen Zeichenfolge. Bei einem Präfixcode darf kein Codewort Präfix eines anderen Codeworts sein. Das heißt: kein Codewort darf mit einem anderen Codewort beginnen.

Bei Präfixcodes haben die Codewörter unterschiedliche Länge. Der Vorteil der Präfix-Regel ist, dass man keine Trennsymbole zwischen Codewörtern benötigt. Man kann immer erkennen, an welcher Stelle das nächste Codewort beginnt. Wenn man kurze Codewörter für häufig vorkommende Buchstaben wählt, kann man Texte sehr effizient kodieren und große Textmengen platzsparend speichern. Die Huffman-Kodierung ist eine Methode, einen optimalen Präfixcode zu finden. Sie ist weit verbreitet und steckt z. B. hinter bekannten Datenformaten wie JPEG und MP3.
