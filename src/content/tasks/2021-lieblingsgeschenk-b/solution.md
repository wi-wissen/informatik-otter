---
answer: { k1: g1, k2: g3, k3: g4, k4: g2, k5: g5 }
---
Hier ist die einzige Zuteilung der Geschenke, die beide Bedingungen erfüllt.

![Die Zuteilung der fünf Geschenke zu den fünf Kindern](./img/solution.png)

Auf diese Weise bekommen vier Biber ihr Lieblingsgeschenk, und ein Biber bekommt das zweitliebste. Damit bekommen möglichst viele Biber ihr Lieblingsgeschenk. Weil zwei Biber dasselbe Lieblingsgeschenk haben, ist es nämlich nicht möglich, dass alle fünf Biber ihr Lieblingsgeschenk bekommen.

Beachte: Wenn du die Zuteilung von oben nach unten vornimmst und das zweite Geschenk dem zweiten Biber zuteilst, dann bekommt der vierte Biber keines seiner bevorzugten Geschenke. In dieser Aufgabe genügt es also nicht, für jeden einzelnen Biber die jeweils beste aktuelle Auswahl zu treffen.

Eine allgemeine Lösungsstrategie ist, dass du zuerst alle Geschenke zuordnest, die Lieblingsgeschenk nur eines Bibers sind. Danach bleiben zwei Biber mit demselben Lieblingsgeschenk übrig. Bei diesen beiden schaust du, welchem das zweitliebste Geschenk zugeteilt werden kann. Dem anderem teilst du sein Lieblingsgeschenk zu.
