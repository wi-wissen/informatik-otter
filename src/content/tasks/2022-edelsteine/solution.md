---
answer: b
---
Antwort B (10) ist richtig.

Wenn Peter 10 Edelsteine hat, kann Sarah bei den ersten beiden Fragen insgesamt acht verschiedene Edelsteine auswählen. Die beiden „Gewinner“ der einzelnen Fragen (also die Steine, die jeweils die wertvollsten der vier gewählten Steine sind) können auch „Gesamtsieger“ sein, also der insgesamt wertvollste Stein. Die anderen sechs Steine scheiden aus. Bei der letzten Frage wählt sie die beiden Gewinner und die zwei bisher noch nicht gewählten Steine aus. Der Gewinner dieser Frage muss der Gesamtsieger sein.

Für 10 Steine kann Sarah also (unter anderem) so vorgehen, um den wertvollsten Stein zu finden.

Wenn Peter 11 Steine hat, kann sie das leider nicht schaffen: Wenn Sarah, wie oben, bei den ersten beiden Fragen insgesamt acht verschiedene Steine vergleicht, verbleiben die beiden Gewinner und drei weitere Steine, also einer zu viel, um den Gesamtsieger mit der dritten Frage zu ermitteln. Wenn Sarah hingegen den Gewinner der ersten Frage bei der zweiten Frage mit 3 „neuen“ Steinen vergleicht, kennt sie danach den wertvollsten der sieben gewählten Steine. Diesen Stein muss sie mit den vier weiteren Steinen vergleichen. Auch das ist ein Stein zu viel für die dritte Frage.

Wenn Sarah bei 11 Steinen für die ersten beiden Fragen nur sechs oder noch weniger verschiedene Steine auswählt, oder wenn Peter mehr als 12 Steine hat, kann Sarah nach drei Fragen erst recht nicht wissen, welcher Stein der wertvollste ist.

## Das ist Informatik!

Sarahs Vorgehen bei der Bestimmung des wertvollsten Steins sieht zunächst aus wie ein Algorithmus. Aber wenn man genau hinsieht, fehlt noch etwas: nämlich eine Vorschrift, wie sie die vier Steine für ihre Frage auswählt. Dennoch ist es möglich, ihr Vorgehen zu analysieren: In dieser Biberaufgabe wird betrachtet, für wie viele Edelsteine ihr Vorgehen funktionieren kann, und zwar unabhängig von der Auswahl der Steine. Das Ergebnis – nämlich, dass ihr Vorgehen nur für maximal 10 Edelsteine funktioniert – gilt also gleich für eine ganze Klasse von Algorithmen, die sich aus der Kombination von Sarahs grundsätzlichem Vorgehen mit den verschiedenen Möglichkeiten zur Auswahl der Steine ergeben.

Die möglichst genaue Analyse von Algorithmen ist ein wichtiges Gebiet der Informatik. Für einen Algorithmus (bzw. für das in der realen Welt genutzte Informatiksystem, das eine Implementierung des Algorithmus verwendet) wollen wir nicht nur wissen, ob er funktioniert, also ob er ein gegebenes Problem löst, sondern auch, wie gut er funktioniert. Dieses „wie gut“ kann dabei ganz unterschiedliche Bedeutungen haben: Wie gut sind die gefundenen Ergebnisse, etwa in Bezug auf ein Optimierungskriterium? Wie viele Ressourcen benötigt der Algorithmus, z. B. Zeit oder Speicherplatz? Wenn wir nicht wissen, wie lange wir auf die Reaktion eines Informatiksystems warten müssen bzw. mit wie viel Speicher wir es ausstatten müssen, nützt uns eine Lösungsgarantie nicht viel.

Die Analyse von Algorithmen ist nicht einfach. Wenn es also möglich ist, einen Teil eines zu analysierenden Algorithmus‘ zu verallgemeinern – wie bei Sarahs Algorithmus die Auswahl der Steine – und die Analyse dann für eine ganze Klasse von Algorithmen durchführen können, ist das Ergebnis der Analyse noch einmal deutlich wertvoller.
