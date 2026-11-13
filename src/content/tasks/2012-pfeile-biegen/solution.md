---
answer: d
---
Antwort D ist richtig.

Anfangszustand (Bild links): W zeigt auf X, X zeigt auf Y, Y zeigt auf Z, Z zeigt auf X.

- Nach Anweisung `Z <- X`: W zeigt auf X, X zeigt auf Y, Y zeigt auf Z, Z zeigt auf Y.
- Nach Anweisung `X <- Y`: W zeigt auf X, X zeigt auf Z, Y zeigt auf Z, Z zeigt auf Y.
- Nach Anweisung `Y <- W`: W zeigt auf X, X zeigt auf Z, Y zeigt auf X, Z zeigt auf Y.

Das ist der Endzustand (Bild rechts).

Die anderen Anweisungsfolgen erzeugen nicht das Bild rechts:

- Endzustand Antwort A: W zeigt auf X, X zeigt auf Z, Y zeigt auf X, Z zeigt auf Z.
- Endzustand Antwort B: W zeigt auf X, X zeigt auf X, Y zeigt auf X, Z zeigt auf X.
- Endzustand Antwort C: W zeigt auf X, X zeigt auf Z, Y zeigt auf X, Z zeigt auf Z.

## Das ist Informatik!

Für Informationen, die uns sagen, wo sich bestimmte andere Informationen befinden, hat die Informatik viele Namen: Zeiger, Pointer, Link, Pfad, Verweis, Index usw. Solche Informationen können ganz verschieden aussehen, zum Beispiel so: http://www.bundeswettbewerb-informatik.de/

Programmierer haben es mit ganzen Netzen von Informations-Objekten zu tun, deren Verzeigerung sich laufend ändert. Um sich klar zu machen, was da passiert, ist eine Darstellung mit Kästchen und Pfeilen ganz praktisch – wenn es nur wenige Informations-Objekte sind. Sonst, z. B. beim World-Wide Web, braucht es stärkere Darstellungs-Werkzeuge, um den Überblick zu behalten. Informationen über Informationen sind etwas ganz Alltägliches. Wir alle waren schon mal in der Situation: „Ich weiß zwar die Antwort nicht, aber ich weiß, wo ich sie nachlesen kann“.
