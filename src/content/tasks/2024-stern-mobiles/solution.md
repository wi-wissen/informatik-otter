---
answer: a
---
Aus dem Beispiel und seiner Beschreibung kann man Folgendes erkennen:

- Ein Stern-Mobile mit Stab wird durch zwei Klammerpaare beschrieben: (A1 M1) (A2 M2). Die Klammerpaare sind von links nach rechts so angeordnet wie die Teil-Mobiles, die am Stab des Stern-Mobiles hängen.

- A1 und A2 geben jeweils einen Abstand zum Aufhängefaden des Stabs an; an diesen Stellen hängen die Stern-Mobiles M1 und M2.

- Ein einfaches Stern-Mobile (ein Faden mit Sternen) wird durch eine Zahl S beschrieben. Das ist die Anzahl der Sterne, die an dem Faden hängt.

Konkret gilt für das Beispiel:

- Die beiden Klammerpaare (-3 …) (2 3) beschreiben ein Stern-Mobile mit Stab.

- Das rechte Klammerpaar (2 3) bedeutet, dass mit Abstand 2 nach rechts vom Aufhängefaden ein einfaches Stern-Mobile mit 3 Sternen hängt.

- Das linke Klammerpaar (-3 (-1 1) (1 1)) bedeutet, dass mit Abstand 3 vom Aufhängefaden (und zwar nach links, deshalb -3) ein Stern-Mobile mit Stab hängt; an dem Stab hängen wiederum zwei einfache Stern-Mobiles mit jeweils einem Stern.

Der Ausdruck aus der Frage (-3 (-1 4) (2 (-1 1) (1 1))) (2 (-1 6) (2 3)) beschreibt also ein Stern-Mobile mit Stab und zwei Teil-Mobiles:

- Die Teil-Mobiles am obersten Stab hängen links mit Abstand 3 und rechts mit Abstand 2.

- Am Stab des linken Teil-Mobiles hängt links (Abstand 1) ein Faden mit 4 Sternen und rechts ein Stern-Mobile mit Stab, mit jeweils einem Stern links und rechts (jeweils mit Abstand 1).

- Am Stab des rechten Teil-Mobiles hängt links (Abstand 1) ein Faden mit 6 Sternen und rechts (Abstand 2) ein Faden mit 3 Sternen.

Das ist genau das Mobile aus Antwort A. Beim Mobile aus Antwort B hat das linke Teil-Mobile selbst kein Teil-Mobile. Beim Mobile aus Antwort C gibt es keinen Faden mit 6 Sternen. Beim Mobile aus Antwort D ist alles spiegelverkehrt.

## Das ist Informatik!

Ein Stern-Mobile hat eine interessante Struktur: An jedem Stab hängen nämlich stets wieder (etwas kleinere) Stern-Mobiles. Dabei ist ein Faden mit einem oder mehreren Sternen auch ein (ganz einfaches) Stern-Mobile. Ein Stern-Mobile ist also:

- entweder ein Faden mit einigen Sternen oder ...

- ... ein Faden mit einem Stab, an dessen Enden je ein Stern-Mobile hängt.

Diese Definition benennt Stern-Mobiles als mögliche Bestandteile eines Stern-Mobiles. Strukturen, die kleinere Exemplare des gleichen Strukturtyps als Bestandteil haben, nennt man rekursiv. In der Computerprogrammierung können rekursive Strukturen mit sehr kurzen Programmen bearbeitet werden. Die Programme haben dabei eine ähnlich rekursive Programmstruktur wie die rekursive Definition der Strukturen: Sie bearbeiten entweder den Basisfall (bei den Stern-Mobiles: Faden mit Sternen) oder rufen sich selbst auf, um Teilstrukturen zu bearbeiten, die nicht dem Basisfall entsprechen.
