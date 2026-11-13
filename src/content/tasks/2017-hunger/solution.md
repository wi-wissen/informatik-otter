---
answer: "4"
---
**4** ist die richtige Antwort: Alle 10 Biber können bereits nach 4 Minuten in Raum F sein.

Im Biberbau gibt es zwei kürzeste Wege zum Raum F. Beide Wege können innerhalb von 2 Minuten nur jeweils einen Biber ans Ziel bringen, in 3 Minuten sind es jeweils 2 Biber:

- A – B – F
- A – C – F

Der Weg A – B – C – F bietet Platz für 2 Biber, dauert aber 3 Minuten. Nach 3 Minuten haben wir dann insgesamt erst 6 Biber in Raum F. Wir brauchen also noch eine 4. Minute. Wie z. B. alle 10 Biber in 4 Minuten ans Ziel kommen können, zeigt folgende Tabelle:

| Aktion / Situation | A | B | C | F |
|---|--:|--:|--:|--:|
| Situation zu Beginn | 10 | 0 | 0 | 0 |
| 3 Biber gehen von A nach B (weniger als möglich ist); 1 Biber geht von A nach C | | | | |
| Situation nach 1 Minute | 6 | 3 | 1 | 0 |
| 3 Biber gehen von A nach B (weniger als möglich ist); 1 Biber geht von B nach F; 2 Biber gehen von B nach C; 1 Biber geht von C nach F; 1 Biber geht von A nach C | | | | |
| Situation nach 2 Minuten | 2 | 3 | 3 | 2 |
| 1 Biber geht von A nach B (kürzester Weg); 1 Biber geht von B nach F; 2 Biber gehen von B nach C; 1 Biber geht von A nach C (kürzester Weg); 3 Biber gehen von C nach F | | | | |
| Situation nach 3 Minuten | 0 | 1 | 3 | 6 |
| 1 Biber geht von B nach F; 3 Biber gehen von C nach F | | | | |
| Situation nach 4 Minuten | 0 | 0 | 0 | 10 |

Es gibt verschiedene Möglichkeiten, wie die Biber innerhalb von 4 Minuten in Raum F kommen können. Bei der hier gezeigten Möglichkeit müssen die Biber in keinem Raum auf das Weitergehen warten.

## Das ist Informatik!

Das Netzwerk der Gänge kann als sogenanntes Fluss-Netzwerk aufgefasst werden. Die Anzahl der Gänge zwischen zwei Räumen bestimmt, wie viele Biber innerhalb einer Minute von einem zum anderen Raum gehen können. Es ist die sogenannte Kapazität der Verbindung zwischen zwei Räumen, die den Fluss zwischen diesen Räumen begrenzt.

Ein Fluss-Netzwerk ist in der Graphentheorie ein gerichteter Graph, bei dem jede Kante eine Kapazität hat (die Anzahl der Gänge in unserer Aufgabe). Ein Fluss, der durch die Kanten des Graphen fließt, ist durch die Kapazität der Kanten begrenzt. Mit Hilfe von Flüssen in Netzwerken kann ein Computernetzwerk oder ein Verkehrsnetzwerk simuliert werden und die Engpässe in den Verkehrsströmen aufgedeckt werden.

In Fluss-Netzwerken ist insbesondere der maximal mögliche Fluss zwischen zwei Knoten interessant. In unserer Aufgabe wären das 4 Biber, die pro Minute von Raum A zum Raum F ohne Wartezeit in einem der Räume laufen können. Der sogenannte Ford-Fulkerson-Algorithmus kann so einen maximalen Fluss berechnen.
