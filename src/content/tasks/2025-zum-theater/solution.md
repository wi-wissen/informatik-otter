---
answer: [A, B, E, G, H, J]
---
Die Route führt über die Haltestellen A, B, E, G, H und J. Die früheste Zeit, zu der Marcus das Theater erreichen kann, ist Minute 20.

Wie kommt man auf diese früheste Zeit und damit auf die Route? Die früheste Zeit, zu der Marcus Haltestelle J und damit das Theater erreicht, ist das Minimum von

- der frühesten Zeit, zu der er Haltestelle H erreicht, plus Wartezeit für den von D aus kommenden Bus plus 9 Minuten, und
- der frühesten Zeit, zu der er Haltestelle I erreicht, plus Wartezeit für den von C aus kommenden Bus plus 6 Minuten.

Nun kann man weiter rückwärts diese beiden frühesten Zeiten bestimmen. Alternativ kann man von Marcus' Starthaltestelle A aus für alle erreichbaren Haltestellen diese frühesten Zeiten ermitteln – und sich dabei jeweils die vorherige Haltestelle für diese früheste Zeit merken. Dann weiß man am Ende die früheste Zeit, zu der Marcus das Theater erreicht, und kann die auf der Route liegenden Haltestellen angeben.

- **Haltestelle A:** Marcus erreicht A an Minute 0.
- **Haltestelle B:** Marcus erreicht B an Minute 1 (wir sagen kurz: um 1), von A aus.
- Die Haltestellen C und D kommen für Marcus' Route nicht in Frage.
- **Haltestelle E:** Marcus erreicht E nur von B aus, ohne Wartezeit bei B, um 5.
- **Haltestelle F:** Marcus erreicht F (ohne Umwege) nur von E aus, ohne Wartezeit bei E, um 8.
- **Haltestelle G:** Marcus kann G auf zwei Wegen erreichen, nämlich von B oder E aus. (1) In B ist Marcus um 1, kann um 2 dort losfahren und ist um 9 bei G. (2) In E ist Marcus um 5, kann um 6 dort losfahren (der Bus von C aus fährt um 2, 6, 10, … bei E ab) und ist um 7 bei G. Die früheste Zeit, zu der Marcus G erreichen kann, ist also 7, von E aus.
- **Haltestelle H:** Marcus kann H von F oder G aus erreichen. (1) In F ist er um 8, kann um 11 dort losfahren (der Bus von D aus fährt um 6, 11, 16, … bei F ab) und ist um 16 bei H. (2) In G ist er um 7, kann direkt losfahren (der Bus von B aus fährt um 7, 9, 11, … bei G ab) und ist um 10 bei H. Die früheste Zeit, zu der Marcus H erreichen kann, ist also 10, von G aus.
- **Haltestelle I:** Marcus kann I von H oder G aus erreichen. (1) In H ist Marcus um 10, kann direkt losfahren (der Bus von B aus fährt um 10, 12, 14, … bei H ab) und ist um 12 bei I. (2) In G ist Marcus um 7, kann direkt dort losfahren (der Bus von C aus fährt um 3, 7, 11, … bei G ab) und ist um 15 bei I. Die früheste Zeit, zu der Marcus I erreichen kann, ist also 12, von H aus.
- **Haltestelle J / Theater:** Marcus kann J von H oder I aus erreichen. (1) In H ist Marcus um 10, kann um 11 dort losfahren (der Bus von D aus fährt um 6, 11, 16, … bei H ab) und ist um 20 bei J. (2) In I ist Marcus um 12, kann um 15 dort losfahren (der Bus von C aus fährt um 11, 15, 19, … bei I ab) und ist um 21 bei J. Die früheste Zeit, zu der Marcus J erreichen kann, ist also 20, von H aus.

Da wir uns jeweils gemerkt haben, von wo aus Marcus eine Haltestelle zur frühesten Zeit erreicht, können wir seine Route rückwärts verfolgen: J ← H ← G ← E ← B ← A.

## Das ist Informatik!

Die entscheidende Idee bei der Ermittlung der richtigen Antwort war, das ursprüngliche Problem (nämlich: früheste Ankunft bei J) auf zwei kleinere Probleme (früheste Ankünfte bei I und H) zurückzuführen. Diese Methode hätten wir weiterführen können: Die früheste Ankunft bei I ergibt sich wiederum aus den frühesten Ankünften bei G und H, und so weiter. Diese Strategie, eine Berechnungsfunktion (früheste Ankunft) auf sich selbst zurückzuführen, kennt die Informatik als *Rekursion*.

Bei der Erklärung der richtigen Antwort haben wir aber die Rekursion aufgelöst und die Ergebnisse der Funktion vom einfachsten Fall aus nach und nach (in der Informatik sagt man: *iterativ*) aufgebaut. So konnten wir letztlich nicht nur die Berechnung für J auf die Berechnungen für I und H zurückführen, sondern das Ergebnis für J auf die bereits bekannten Ergebnisse für I und H.

Diese Strategie heißt in der Informatik *Dynamische Programmierung*. Man kann sie für Optimierungsprobleme nutzen, wie für die Suche nach Marcus' frühester Ankunftszeit beim Theater in dieser Biberaufgabe. Dynamische Programmierung funktioniert genau dann, wenn das *Optimalitätsprinzip von Bellman* gilt, wenn man also die optimale Lösung eines Problems aus optimalen Lösungen für Teilprobleme zusammensetzen kann. Sie funktioniert dann häufig gut, weil man beim iterativen Aufbau der (Teil-)Lösungen jede (Teil-)Lösung nur einmal berechnen muss.
