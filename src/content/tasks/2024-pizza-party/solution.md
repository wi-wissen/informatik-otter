---
answer: { pizza: [kaese, pilze, zwiebeln] }
---
Um die richtige Antwort zu finden, könnte man alle Kombinationen von drei Belägen ausprobieren und für jede Kombination zählen, wie viele Wünsche sie erfüllt. Es gibt aber 20 solcher Kombinationen, sodass dieses Vorgehen mühsam und fehleranfällig ist.

Man muss aber gar nicht über Kombinationen nachdenken. Die Kombination, die die meisten Wünsche erfüllt, besteht aus den drei Belägen, die einzeln am meisten gewünscht werden. Diese Beläge kann man herausfinden, indem man die Tabelle aus der Aufgabenstellung anders organisiert. Für jeden Belag gibt es nun eine eigene Spalte. In der Spalte steht eine 1, wenn der Belag von einem Gast gewünscht wird, und sonst eine 0. Dann addiert man die Zahlen in jeder Spalte.

| | Chili | Pilze | Ananas | Kräuter | Käse | Zwiebeln |
|---|---|---|---|---|---|---|
| Alice | 1 | 1 | 0 | 0 | 1 | 0 |
| Bob | 0 | 1 | 1 | 0 | 0 | 1 |
| Cem | 0 | 1 | 0 | 1 | 1 | 0 |
| Dana | 0 | 1 | 0 | 0 | 1 | 1 |
| **Summe** | 1 | **4** | 1 | 1 | **3** | **2** |

Pilze sind am beliebtesten (4), dann kommen Käse (3) und Zwiebeln (2). Wenn John diese beliebtesten drei Beläge auf die Pizza legt, erfüllt er die meisten Wünsche, nämlich insgesamt 9. Mit keiner anderen Zusammenstellung von Belägen kann er mehr Wünsche erfüllen.

## Das ist Informatik!

Das Pizza-Belag-Auswahl-Problem in dieser Biberaufgabe ist ein Optimierungsproblem. John sucht nicht irgendeine Belag-Kombination für seine Pizza, sondern die beste – oder, besser gesagt: eine beste, denn es wäre ja denkbar, dass es mehrere Belag-Kombination gibt, welche die meisten Wünsche erfüllen.

Um die beste Lösung eines Optimierungsproblems zu finden, muss man

- Daten erfassen (hier: die Wünsche der Freunde),

- neue Daten berechnen (die Häufigkeiten der Wünsche),

- Bedingungen berücksichtigen (es soll nur eine Pizza mit genau drei Belägen gebacken werden) und

- eine Entscheidung fällen (die Auswahl der Beläge).

Für die Entscheidung bei der Lösung eines Optimierungsproblems muss man mögliche Antworten bzw. Lösungen miteinander vergleichen können. Dazu benötigt man ein Maß dafür, wie gut eine Lösung ist. In dieser Biberaufgabe ist die Anzahl der erfüllten Wünsche das Optimierungsmaß: Je mehr Wünsche erfüllt sind, desto besser. Der Optimierungsalgorithmus konnte die Lösung mit dem besten Wert für das Optimierungsmaß direkt auswählen, durch Addition der Wünsche für die einzelnen Beläge. In diesem Fall war es also nicht nötig, unterschiedliche Lösungen miteinander zu vergleichen.

Optimierungsalgorithmen werden in der Informatik für viele Zwecke entwickelt, zum Beispiel für Produktionsprozesse in der Industrie oder zur Berechnung von Routen für die Auslieferungsfahrzeuge von Paket- oder anderen Lieferdiensten. Dabei kann es ganz unterschiedliche Optimierungsmaße geben, etwa die Geschwindigkeit des Produktionsprozesses oder die Länge der Route. Eines ist aber immer gleich: Man muss sich überlegen, wie man möglichst geschickt aus der Menge der möglichen Lösungen eine beste Lösung auswählt. So leicht wie in dieser Biberaufgabe geht das nur selten.
