---
answer: 23
---
Der Damm ist frühestens nach 23 Stunden fertig. Ein solcher Plan: Biber 1 macht A, C, E, H; Biber 2 macht B, D, F, G.

Im Arbeitsplan aus der Aufgabe hat der erste Biber eine lange Pause (10 Stunden), und der zweite Biber hat insgesamt 8 Stunden lang Leerlauf. Die beiden wären schneller fertig, wenn sie ständig arbeiteten.

Man kommt zu einem insgesamt schnelleren Arbeitsplan, wenn man darauf achtet, dass die beiden größten Aufgaben E(10) und F(9) nicht vom selben Biber ausgeführt werden. Hier ist ein Arbeitsplan, der mit 23 Stunden auskommt. Schneller geht es nicht, denn die beiden Biber arbeiten ohne Pause.

![Arbeitsplan: Biber 1 macht A, C, E, H (0 bis 23 Stunden); Biber 2 macht B, D, F, G (0 bis 23 Stunden)](./img/solution.png)

## Das ist Informatik!

Die beiden Biber müssen acht Aufgaben auf sich verteilen. Manche Aufgaben können sie nur nacheinander erledigen, weil eine das Ergebnis der anderen braucht, andere können sie gleichzeitig angehen. Das Pfeilbild der Aufgabe stellt diese Abhängigkeiten als gerichteten Graphen dar. Aufgaben so auf mehrere Arbeitende zu verteilen und zeitlich zu ordnen, nennt man Scheduling oder Ablaufplanung.

Zwei Überlegungen helfen bei der Planung. Erstens setzt die längste Kette von Aufgaben, die nacheinander erledigt werden müssen, eine untere Grenze für die Dauer. Man nennt sie den kritischen Pfad. Hier ist das A oder B, dann E, dann H, mit 19 Stunden. Zweitens muss die gesamte Arbeit von 46 Stunden auf zwei Biber verteilt werden. Selbst wenn beide nie Pause machen, dauert es also 23 Stunden. Der Plan aus der Lösung erreicht genau diese Grenze, deshalb kann es nicht schneller gehen.

Die Informatik braucht Ablaufplanung an vielen Stellen. Moderne Prozessoren haben mehrere Kerne, und das Betriebssystem verteilt die Programmteile so auf sie, dass möglichst kein Kern untätig wartet. Build-Werkzeuge für Software und Projektplanungen auf Baustellen nutzen die Netzplantechnik mit dem kritischen Pfad. Allgemein ist es schwer, einen bestmöglichen Plan zu finden: Schon bei der Verteilung unabhängiger Aufgaben auf zwei Arbeitende ist kein schnelles Verfahren bekannt, das immer die beste Lösung liefert. Deshalb verwendet man in der Praxis oft Faustregeln, die gute, aber nicht immer optimale Pläne liefern.

*Dieser Abschnitt wurde für den Informatik-Otter ergänzt und steht nicht im Biberheft.*
