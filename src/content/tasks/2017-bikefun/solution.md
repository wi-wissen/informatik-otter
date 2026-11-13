---
answer: c
---
Antwort **C** ist richtig: C ist der einzige nach den Regeln befahrbare Parcours.

Um Parcours C zu befahren, kann man auf den flachen Abschnitten die Geschwindigkeit so verändern: + − − (also erhöhen, verringern und wieder verringern). Damit beträgt die Geschwindigkeit am Ziel 0 km/h. Das gilt auch, wenn die Geschwindigkeit so verändert wird: − + − oder − − +.

Die anderen Parcours sind nicht nach den Regeln befahrbar:

- Parcours A: Selbst wenn du auf dem flachen Abschnitt die Geschwindigkeit erhöhst, ist die Fahrt nach vier Abschnitten zu Ende.
- Parcours B: Selbst wenn du auf beiden flachen Abschnitten die Geschwindigkeit verringerst, beträgt sie am Ziel mehr als 0 km/h.
- Parcours D: Auf dem letzten Abschnitt wird die Geschwindigkeit automatisch um 10 km/h erhöht. Um am Ziel 0 km/h zu betragen, müsste die Geschwindigkeit zu Beginn des letzten Abschnitts negativ sein; aber das ist unmöglich.

## Das ist Informatik!

Klammern – ob rund, eckig oder geschweift – kennt man aus der Mathematik. In Ausdrücken wie [n(n − 1)] / 2 oder (a + b)(a − b) beschreiben Klammern, in welcher Reihenfolge die Teilausdrücke auszuwerten sind. Dabei treten Klammern immer paarweise auf, mit einer öffnenden und einer schließenden Klammer. Klammerausdrücke müssen wohlgeformt sein: Jede öffnende Klammer muss eindeutig genau einer darauf folgenden schließenden Klammer und jede schließende Klammer nur einer öffnenden Klammer zugeordnet sein.

So wie in der Mathematik gibt es auch in der Informatik Notationen (bzw. „Sprachen“, wie es in der Informatik heißt) mit Klammern. Ein Beispiel ist HTML, die Beschreibungssprache für Webseiten. In HTML wird z. B. ein Textabsatz von den Markierungen `<p>` und `</p>` umschlossen, und alle HTML-Markierungen selbst haben ein Klammerpaar `<` und `>`. Klammerpaare sind in der Informatik sehr beliebt – und das hat seinen Grund: Sie können von Computern leicht verarbeitet werden, und zwar mit Hilfe der einfachen und effizienten Datenstruktur „Stapel“.

Die Abschnitte in den BikeFun-Parcours sind wie Klammern: Ein Bergab-Abschnitt ist eine öffnende Klammer, und ein Bergauf-Abschnitt ist eine schließende Klammer. Ein flacher Abschnitt ist ein Platzhalter, der durch eine öffnende oder schließende Klammer ersetzt werden kann. Ein BikeFun-Parcours ist befahrbar genau dann, wenn es mindestens eine Ersetzung gibt, durch die ein wohlgeformter Klammerausdruck entsteht. Parcours C kann also auch so beschrieben werden: `(?(??)`. Er ist befahrbar, weil daraus sogar mehrere wohlgeformte Klammerausdrücke entstehen können: `((()))` oder `()(())` oder `()()()`. In der Theoretischen Informatik wird eine Sprache, die nur wohlgeformte Klammerausdrücke enthält, als „Dyck-Sprache“ bezeichnet.
