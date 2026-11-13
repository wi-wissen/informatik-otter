---
answer: { ab: q, ac: "no", ad: q, cd: "no", cg: "no", bg: q, be: "no", ef: "no", fg: ok, dg: q, dh: ok }
---
Die Karte zeigt, was wir über die Verbindungen im Straßennetz wissen: Befahrbar sind nur die Straßen zwischen G und F sowie zwischen D und H. Nicht befahrbar sind alle fünf Straßen, die zu den Dörfern C und E führen. Bei den vier Straßen zwischen A, B, G und D kann man es nicht sagen.

![Die Karte mit Dörfern A bis H; Straßen sind mit Zeichen für „nicht befahrbar“, „befahrbar“ und „unklar“ versehen](./img/solution.png)

Zuerst stellen wir fest: Alle Straßen, die zu den nicht erreichbaren Dörfern C und E führen, müssen nicht befahrbar sein – sonst könnte man die Dörfer doch erreichen.

Als nächstes suchen wir die Straßen, die befahrbar sein müssen. Die Straße zwischen den Dörfern G und F ist nun die einzige, über die F noch erreichbar ist; sie muss also befahrbar sein. Auch die Straße zwischen D und H muss befahrbar sein, da H nur über diese Straße erreichbar ist.

Nun ist noch der „Straßenkreis“ A – B – G – D – A übrig (wobei man auch bei einem anderen Dorf anfangen könnte). Für jede einzelne der vier Straßen in diesem Kreis gilt: Sie könnte nicht befahrbar sein – dann wären die vier Dörfer A, B, D und G über die drei anderen Straßen erreichbar – oder befahrbar. Ohne weitere Information kann man also nicht sagen, ob die Straße befahrbar ist oder nicht.

## Das ist Informatik!

Aus der Information, dass zwei Dörfer nicht mehr erreichbar sind, schließt man auf den Zustand von Straßen, die man gar nicht gesehen hat. Dazu hilft es, das Straßennetz als Graphen zu betrachten: Die Dörfer sind Knoten, die Straßen sind Kanten. Alle Kanten zu einem unerreichbaren Knoten müssen ausfallen. Ein Dorf, das nur eine einzige Straße hat, ist dagegen nur dann erreichbar, wenn diese Straße befahrbar ist. Eine Kante, ohne die ein Teil des Graphen nicht mehr erreichbar wäre, nennt man Brücke.

Bei den Straßen im Kreis A – B – G – D bleibt es unklar, denn jede einzelne Straße könnte ausfallen, und die anderen Dörfer wären immer noch über die übrigen Straßen zu erreichen. Das zeigt eine wichtige Eigenschaft von Netzen: Wenn es mehrere Wege gibt, nennt man das Redundanz. Sie macht ein Netz robust, weil der Ausfall einer Verbindung nicht gleich alles lahmlegt. Sie macht es aber auch schwieriger, aus der Beobachtung eines Ausfalls die Ursache zu erkennen.

Dasselbe Prinzip nutzt man im Internet. Datenpakete finden bei einem Leitungsausfall einen anderen Weg, wenn das Netz an der Stelle redundant ist. Wer ein Netzwerk überwacht, muss aus Messungen an wenigen Stellen schließen, wo ein Fehler liegt, und überlegt dabei genau wie in dieser Aufgabe, welche Verbindungen defekt sein müssen, welche in Ordnung sein müssen und worüber man nichts sagen kann.

*Dieser Abschnitt wurde für den Informatik-Otter ergänzt und steht nicht im Biberheft.*
