---
answer: b
---
Antwort B ist richtig: Einer der drei Freunde hat das Eis bezahlt, aber Nosy weiß nicht wer.

Bei drei Münzwürfen gibt es genau zwei Möglichkeiten, wie die Ergebnisse ausfallen können:

1. Alle drei Würfe haben das gleiche Ergebnis.
2. Ein Wurf hat ein anderes Ergebnis als die beiden anderen Würfe.

Wenn alle Biber die Wahrheit sagen (weil jemand anderes das Eis bezahlt hat), gilt für diese beiden Möglichkeiten:

1. Alle drei Freunde sagen „gleich“.
2. Einer der Freunde sagt „gleich“ und die zwei anderen sagen „verschieden“.

Das bedeutet: Wenn zwei Freunde „gleich“ und einer „verschieden“ sagt, sagen nicht alle drei Freunde die Wahrheit. Einer von ihnen muss also das Eis bezahlt haben. Wer das ist, kann Nosy aber nicht wissen, ohne die Ergebnisse der Münzwürfe zu kennen.

## Das ist Informatik!

Der amerikanische Informatiker David Chaum hat sich in Theorie und Praxis damit beschäftigt, wie Anonymität im Zusammenhang mit Einsatz und Benutzung von Informatiksystemen funktionieren kann. Unter anderem beschrieb er Anfang der 1980er Jahre das „Dining Cryptographers Problem“. Es stellt die Frage, ob Information so übertragen werden kann, dass sowohl der Absender anonym bleibt als auch der Empfänger nicht identifizierbar ist.

Als Lösung schlägt er genau die Vorgehensweise vor, an die sich die drei Freunde in dieser Biberaufgabe halten. So kann einer der drei als Absender ein Bit an Information übertragen: ob er das Eis bezahlt hat oder nicht. Das tut er, indem er als einziger nicht die logische XOR-Funktion (die sagt, ob zwei Bits gleich oder verschieden sind) auf die beiden ihm bekannten Münzwurf-Bits („Kopf“ oder „Zahl“) anwendet, sondern deren Negation. Damit am Ende aus den drei von den Freunden mitgeteilten Bits („gleich“ oder „verschieden“) wieder ein Bit wird, muss abschließend noch einmal die XOR-Funktion angewendet werden. Das Gesamtergebnis ist genau dann 1 (oder „wahr“ oder „Kopf“ oder …), wenn der Absender das Eis bezahlt hat, also auch das Ausgangsbit 1 ist. Aber der Absender bleibt anonym, denn das Ergebnis hängt nicht davon ab, wer das Eis bezahlt hat. Auch einen besonderen Empfänger gibt es nicht, da alle, einschließlich Außenstehender wie Nosy, die Nachricht gleichermaßen erhalten.
