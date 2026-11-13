---
answer: [purple, green, yellow, red, blue]
---
Von oben nach unten liegen die Flüssigkeiten so in der großen Flasche: violett, grün, gelb, rot, blau.

![Die drei kleinen Flaschen und rechts die große Flasche mit allen fünf Schichten](./img/solution.png)

Zunächst kann man sich überlegen: Die Flüssigkeit, die ganz unten in die große Flasche gehört, darf in keiner der drei kleinen Flaschen über einer anderen Flüssigkeit sein.

Nun kann man die Anordnung so herstellen: Schritt für Schritt bestimmt man die Flüssigkeit, die in keiner der drei kleinen Flaschen über einer anderen ist, gibt sie an die unterste freie Stelle in der großen Flasche und entfernt sie dann in Gedanken aus den drei kleinen Flaschen. Im ersten Schritt ist die blaue Flüssigkeit an der Reihe: Sie ist in Flasche 1 und 3 ganz unten und ist in keiner auf einer anderen Flüssigkeitsschicht. Sie kommt ganz unten in die große Flasche und wird danach nicht mehr beachtet. Damit ist im zweiten Schritt die rote Flüssigkeit die einzige, die nicht über einer anderen Flüssigkeit ist, kommt also als nächstes in die große Flasche, direkt über die blaue Flüssigkeit. In den verbleibenden Schritten kommen auf die gleiche Weise nacheinander die gelbe, die grüne und zum Schluss die violette Flüssigkeit in die große Flasche.

## Das ist Informatik!

Maria kennt aus jeder kleinen Flasche nur einen Teil der Ordnung: Gelb liegt über Rot, Rot über Blau und so weiter. Aus diesen Teilinformationen, die nur für manche Paare sagen, was oben und was unten liegt, soll sie eine vollständige Reihenfolge aller fünf Flüssigkeiten bestimmen. Das nennt man in der Informatik topologisches Sortieren. Es ist ein Verfahren, mit dem man Dinge in eine Reihenfolge bringt, die alle Vorgaben der Form „A kommt vor B“ erfüllt.

Das Vorgehen in der Lösung ist der Kern des Algorithmus: Man sucht ein Element, vor dem nichts anderes mehr stehen muss, setzt es an die nächste freie Stelle und streicht es aus allen Vorgaben. Das wiederholt man, bis nichts mehr übrig ist. Hier fängt man unten an, bei der Flüssigkeit, über der alle anderen liegen. Man kann das Problem als Graph darstellen, in dem jeder Pfeil von einer Flüssigkeit zu der darunterliegenden zeigt. Die Reihenfolge ist nur möglich, wenn es keinen Kreis gibt, also keine Vorgaben, die sich im Kreis widersprechen.

Topologisches Sortieren wird oft gebraucht. Beim Installieren von Software muss ein Programm erst die Pakete installieren, von denen es abhängt. In Tabellenkalkulationen müssen Zellen, die andere Zellen verwenden, danach berechnet werden. Auch Studienpläne mit Voraussetzungen („Modul B setzt Modul A voraus“) und Ablaufpläne in Projekten benötigen eine solche Reihenfolge.

*Dieser Abschnitt wurde für den Informatik-Otter ergänzt und steht nicht im Biberheft.*
