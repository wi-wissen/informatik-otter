---
answer: ok
---
Die Schalter bei den Leuchten 1, 2, 3 und 7 können nacheinander gedrückt werden, um alle Leuchten anzuschalten.

Bei der Suche nach der richtigen Schalterreihenfolge hilft es, vom Ziel her zu denken. Damit beim letzten Schalterdruck die mit dem Schalter verbundenen Leuchten alle angehen, müssen sie vorher aus sein. Deshalb ist es wichtig, zunächst Lampen auszuschalten. Mit Hilfe der Schalter bei den Leuchten 1 und 2 kann man die Leuchten 7 sowie 1, 2 und 3 ausschalten. Dann ist nur noch Leuchte 5 an, und sechs nebeneinander liegende Leuchten sind aus. Die kann man in zwei Dreiergruppen einteilen, die man mit dem Schalter jeweils in der Mitte (also mit den Schaltern 3 und 7) anschalten kann.

Für das Leuchten-Schalter-Netz dieser Biberaufgabe kann man beobachten:

1. Die Reihenfolge, in der man zwei Schalter drückt, ist egal; das Resultat ist gleich.
2. Wenn man einen Schalter zweimal drückt, ändert sich nichts; das zweite Drücken macht das Resultat des ersten Drückens rückgängig.

Damit stellt sich letztlich nur die Frage, welcher Schalter gedrückt werden muss und welcher nicht. Bei sieben Schaltern gibt es immerhin 2<sup>7</sup> (= 128) verschiedene Möglichkeiten. Eine davon kann man aber von vornherein ausschließen: Keinen Schalter zu drücken, bringt nichts – es sei denn, alle Leuchten sind ohnehin schon an.

## Das ist Informatik!

In dieser Biberaufgabe ist ein Weg gesucht, nämlich von einem Start-Zustand (Leuchten 3, 5 und 7 sind angeschaltet) zu einem Ziel-Zustand (alle Leuchten sind angeschaltet). Ein „Schritt“ auf diesem Weg besteht darin, die gegebene Operation (das Drücken eines Schalters, mit den beschriebenen Auswirkungen) anzuwenden und damit zu einem nächsten Zustand zu kommen. Der gesuchte Weg führt also durch die Menge (die Informatik sagt auch: Raum) der möglichen Zustände vom Start zum Ziel. Die Suche eines Wegs durch einen Zustandsraum zu einem Ziel-Zustand ist in der Informatik ein bekanntes Problem und wurde besonders intensiv im Bereich der „Künstlichen Intelligenz“ untersucht.

Wenn zum Beispiel ein Staubsauger-Roboter plant, welche Operationen er ausführen muss, um eine Wohnung zu säubern und am Ende wieder an seiner Ladestation zu stehen, kann er eine Zustandsraum-Suche durchführen. Ist der Ziel-Zustand klar beschrieben, kann die Suche deutlich beschleunigt werden, indem nicht nur ein Weg vom Start zum Ziel, sondern auch ein Weg vom Ziel zum Start gesucht wird. Diese bidirektionale Suche ist erfolgreich, wenn beide Suchen den gleichen Zustand erreichen.
