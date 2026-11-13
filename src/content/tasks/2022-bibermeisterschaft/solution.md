---
answer: { team: [d, f, g] }
---
Die Biber **D, F und G** waren in Adas Team in Runde 1.

In Runde 3 wird einzeln gegeneinander gespielt. Biber G ist der einzige, der in Runde 3 weniger Punkte als Ada hat. In Runde 3 hat Ada also gegen ihn gespielt, und in Runde 2 müssen sie demnach im selben Team gewesen sein.

In Runde 2 haben sie zusammen 50 Punkte erreicht. Dieser Wert muss höher sein als die Gesamtpunktzahl des Zweierteams, gegen das sie in Runde 2 gespielt haben. Die beiden Biber D und F sind das einzige Paar, dessen Punktsumme kleiner als 50 ist. Deshalb müssen sie in Runde 1 in demselben Team gewesen sein wie Ada und Biber G.

## Das ist Informatik!

Um diese Aufgabe zu lösen, könnten wir so vorgehen: Zuerst zählen wir alle möglichen Teams in der ersten Runde systematisch auf. Dazu genügt es, alle (7 über 3) = 35 Möglichkeiten zu betrachten, aus den sieben Bibern ohne Ada die drei freien Plätze in Adas Team zu besetzen; die jeweils verbleibenden vier Biber bilden das andere Team. Für jede dieser Team-Paarungen betrachten wir die Ergebnisse in Runde 1, in Runde 2 und im Finale, bevor wir entscheiden können, welche drei Biber in Runde 1 tatsächlich in Adas Team waren. Das dauert, und die Buchführung über alle möglichen Ergebnisse ist aufwändig.

Wenn in der Informatik ein Problem gelöst werden soll, ist es meist keine gute Idee, eine solche „Brute-Force-Strategie“ anzuwenden, also alle Möglichkeiten aufzuzählen, die eine Lösung des Problems sein könnten, und jeweils zu überprüfen, ob es sich auch wirklich um eine bzw. die beste Lösung handelt. Für die meisten Probleme und Eingabedaten dauert das viel zu lange, und es werden effizientere Ansätze benötigt. Wie die obige Erklärung zeigt, lässt sich diese Biberaufgabe effizienter lösen, wenn die Lösung nicht vorwärts (von Runde 1 aus), sondern rückwärts gesucht wird, also von Runde 3 aus. Eine Rückwärtssuche ist besonders geeignet, wenn eine Lösung gesucht wird, die bestimmte Bedingungen erfüllen muss.
