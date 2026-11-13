---
answer: ok
---
Durch das Verlegen zweier weiterer Kabel kann dafür gesorgt werden, dass Honomakato eine robuste Verbindung mit dem Internet bekommt. Dabei gibt es sechs verschiedene Möglichkeiten. Die einzelnen Kabel schützen jeweils bestimmte Inseln davor, durch die Beschädigung eines Kabels nicht mehr mit dem Internet verbunden zu sein.

- Ho–Ma und No–To: Ho–Ma schützt Ma und Ka, No–To schützt No und To.
- Ho–To und No–Ma: Ho–To schützt To und Ka, No–Ma schützt Ma, No und Ka.
- No–To und No–Ma: No–To schützt No, To und Ka, No–Ma schützt Ma, No und Ka.
- No–To und Ma–To: No–To schützt No, To und Ka, Ma–To schützt Ma und To.
- No–Ka und Ma–To: No–Ka schützt No und Ka, Ma–To schützt Ma und To.
- No–Ma und Ma–To: No–Ma schützt Ma, No und Ka, Ma–To schützt Ma und To.

Für die Lösungen gilt jeweils: Jede Insel ist mit mindestens zwei Verbindungen ausgestattet, und Honomakato lässt sich nicht in zwei Teile gruppieren, zwischen denen nur eine Verbindung existiert.

## Das ist Informatik!

Das Kabelnetzwerk, mit dem die Inseln von Honomakato mit dem Internet verbunden wurden, ist einerseits ein kleiner Teil des Internet. Andererseits ist sein Aufbau aber auch ein Beispiel für den Aufbau des gesamten Internet. Die Router, Server und anderen Geräte mit fester Internetadresse sind Knoten im großen Netzwerk „Internet“, genauso wie hier die Inseln im Netzwerk von Honomakato.

Das Internet wurde in den 1960er Jahren als robustes Netzwerk erfunden. Der Ausfall von Verbindungen zwischen einzelnen Netzwerkknoten sollte nicht zum Ausfall des gesamten Netzwerks führen. Daher verbindet man die Knoten mehrfach miteinander und konfiguriert sie so, dass beim Ausfall oder der Überlastung einer Leitung einfach eine andere Leitung verwendet wird. Auch für andere Netzwerkarten wie Verkehrsnetze oder Versorgungsnetzwerke ist es wichtig, dass es keine einzelne Verbindung oder auch einzelnen Knoten gibt, deren Ausfall ein komplettes Netzwerk außer Gefecht setzt.

Die Informatik setzt Graphentheorie ein, um Berechnungen über Netzwerke durchzuführen. Ein Graph ist (theoretisch) ein Netzwerk aus Knoten und Verbindungen (Kanten genannt) zwischen Knoten. Ein Graph heißt „zusammenhängend“, wenn für jedes Paar von Knoten A und B gilt, dass B mit A durch einen Weg über eine oder mehrere Kanten verbunden ist. Eine Kante in einem Graphen, die vorhanden sein muss, damit der Graph zusammenhängend ist, wird als Brücke bezeichnet. Die Informatik kennt Verfahren, um Brücken in Graphen zu finden. Von Robert Tarjan stammt ein solcher (effizienter) Algorithmus – sowie viele andere Algorithmen auf Graphen.
