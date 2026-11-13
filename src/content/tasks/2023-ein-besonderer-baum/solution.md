---
answer: b
---
**Antwort B** ist richtig. Nachdem das letzte Eichhörnchen auf den Baum klettert, hängen noch 7 Äpfel am Baum.

Da alle Äpfel sofort verschwinden, wenn eine Schlange den Baum besucht, genügt es, nur die Tiere zu betrachten, die nach der zweiten (und letzten) Schlange den Baum besuchen. Nach dem Besuch dieser Schlange hängen 0 Äpfel am Baum. Dann landen nacheinander vier Vögel auf dem Baum; anschließend hängen am Baum 4 × 2 = 8 Äpfel. Zum Schluss klettert noch ein Eichhörnchen auf den Baum: Ein Apfel fällt herunter, und 8 − 1 = 7 Äpfel bleiben übrig.

## Das ist Informatik!

Der Besuch eines Tieres verändert den Zustand des besonderen Apfelbaums – aber nur auf ganz bestimmte Weise: Nur die Anzahl der Äpfel, die am Baum hängen, wird geändert. Auf andere Eigenschaften des Baumes, etwa die Anzahl der Blätter, die Länge einzelner Äste oder die Form der Baumkrone, hat der Besuch eines Tieres keinen Einfluss. Für diese Biberaufgabe ist es also ausreichend, die Anzahl der Äpfel zu betrachten.

Auch ein Computerprogramm hat einen Zustand, der von den einzelnen Anweisungen des Programms verändert wird. Als Zustand werden meist die von einem Programm gespeicherten Daten betrachtet; diese Daten speichert das Programm in den bei der Programmierung eingeführten *Variablen*.

Die Folge der Tierbesuche auf dem Baum in dieser Biberaufgabe ist wie ein Computerprogramm: Jeder Tierbesuch ist eine Anweisung, die den Zustand des Apfelbaums verändert. Dieser Zustand – also die Anzahl der Äpfel, siehe oben – kann in einer einzigen Variable gespeichert werden.

Beim Lösen der Aufgabe ist dir vielleicht aufgefallen, dass du nicht das ganze „Programm“ anschauen musstest, sondern nur den Teil nach dem letzten Vorkommen der Schlange. Durch genaue Betrachtung der Auswirkungen der einzelnen Anweisungen auf den Zustand des Programms konntest du eine besondere Eigenschaft des Programms herausfinden. Eine solche Analyse von (Computer-)Programmen gehört zu den häufigen Tätigkeiten von Informatikerinnen und Informatikern.
