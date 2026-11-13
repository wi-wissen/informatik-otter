---
answer: [links, mitte]
---
Das Geschäft links verkauft zwei von Bellas Brücken-Bau-Sachen: den Hammer und die Nägel. Den Hammer hat Bella schon, aber sie kann hier die Nägel einkaufen.

Im Geschäft in der Mitte kann Bella die Bretter einkaufen.

Das Geschäft rechts verkauft das Seil. Aber das hat Bella schon.

![Das linke und das mittlere Geschäft sind markiert](./img/solution.png)

## Das ist Informatik!

Bella braucht für ihre Brücke vier Dinge und kennt die Angebote von drei Geschäften. Sie muss dazu zwei Mengen vergleichen: die Menge der fehlenden Dinge und die Menge der Dinge, die ein Geschäft anbietet. Danach wählt sie Geschäfte aus, deren Angebote zusammen alles abdecken, was ihr fehlt. Dass Hammer und Seil bei ihr schon im Keller liegen, spielt dann keine Rolle mehr. Zum Modellieren der Aufgabe gehört also, Angaben wegzulassen, die für die Frage nicht wichtig sind.

In der Informatik heißt diese Fragestellung Mengenüberdeckung (englisch Set Cover): Gegeben ist eine Menge von Anforderungen und eine Sammlung von Mengen, die jeweils einen Teil davon abdecken. Gesucht sind möglichst wenige dieser Mengen, die zusammen alles abdecken. Bei Bella sind es zwei Geschäfte. Bei sehr vielen Anforderungen und Angeboten wird es schwierig, die kleinste Auswahl zu finden. Oft setzt man dann ein einfaches Verfahren ein: Man wählt immer das Angebot, das die meisten noch fehlenden Dinge abdeckt.

Ähnliche Aufgaben begegnen uns überall. Ein Mobilfunkanbieter möchte mit möglichst wenigen Sendemasten alle Orte versorgen. Eine Schulleitung sucht möglichst wenige Lehrkräfte, die zusammen alle Fächer abdecken. Und ein Online-Händler überlegt, aus welchen Lagern er eine Bestellung mit möglichst wenigen Paketen verschickt.

*Dieser Abschnitt wurde für den Informatik-Otter ergänzt und steht nicht im Biberheft.*
