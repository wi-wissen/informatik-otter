---
answers:
  - { niklaus-6: m, rozsa-6: g }
  - { niklaus-6: m, rozsa-5: m }
  - { niklaus-6: m, rozsa-5: s }
  - { niklaus-6: g, rozsa-6: g }
  - { niklaus-6: g, rozsa-5: m }
  - { niklaus-6: g, rozsa-5: s }
  - { niklaus-4: s, rozsa-6: g }
  - { niklaus-4: s, rozsa-5: m }
  - { niklaus-4: s, rozsa-5: s }
---
Zu Beginn gibt es keinen Favoriten. Für jeden Film findet Ada Freunde, die andere Filme besser bewerten:

| Film | Freunde, die andere Filme besser bewerten |
|------|-------------------------------------------|
| 1 | 4: Nancy, Niklaus, Grace und Rozsa |
| 2 | 3: Niklaus, Edsger und Rozsa |
| 3 | 3: Niklaus, Edsger und Rozsa |
| 4 | 3: Nancy, Edsger und Rozsa |
| 5 | 4: Nancy, Niklaus, Grace und Edsger |
| 6 | 2: Niklaus und Rozsa |
| 7 | 3: Niklaus, Grace und Rozsa |

Bei Film 6 gibt es nur zwei Freunde, die andere Filme besser bewerten. Bei allen anderen Filmen sind es mehr als zwei. Wenn nur ein Freund eine Bewertung ändert, wird es danach immer noch keinen Favoriten geben. Also muss Ada mindestens zwei Freunde überzeugen, ihre Bewertung zu ändern: Wenn Niklaus und Rozsa je eine Bewertung so verändern, dass Film 6 ihre beste Bewertung erhält, wird Film 6 ein Favorit.

Welche Bewertung können Niklaus und Rozsa jeweils ändern, damit Film 6 ihre beste Bewertung erhält? Die beiden haben jeweils drei Möglichkeiten:

- Niklaus kann seine Bewertung von Film 6 verbessern (zu mittel oder gut) oder seine Bewertung von Film 4 verschlechtern (zu schlecht). In allen drei Fällen erhält Film 6 danach seine beste Bewertung.
- Rozsa kann ihre Bewertung von Film 6 verbessern (zu gut) oder ihre Bewertung von Film 5 verschlechtern (zu mittel oder schlecht). In allen drei Fällen erhält Film 6 danach ihre beste Bewertung.

Diese jeweils drei Möglichkeiten können beliebig miteinander kombiniert werden. Insgesamt gibt es also 3 × 3 = 9 Möglichkeiten, nur zwei Bewertungen so zu ändern, dass es einen Favoriten gibt.

## Das ist Informatik!

Wie kann Ada vorgehen, um ihr Problem zu lösen? Eine Idee besteht darin, für jeden Film und für jede Person einzeln zu prüfen, ob diese Person andere Filme besser bewertet hat oder nicht. Dabei entsteht eine Tabelle wie oben. Diese Tabelle hilft herauszufinden, welche Personen ihre Bewertungen ändern müssen, damit man tatsächlich mit der kleinstmöglichen Anzahl von Veränderungen zu einem Favoriten kommt. Ada kann tatsächlich diesen Algorithmus verwenden, um ihr Problem effektiv zu lösen. Ist dieser Algorithmus jedoch auch effizient? Könnte Ada noch schneller sein?

Wir bezeichnen im Folgenden die Anzahl Filme mit M und die Anzahl Freunde mit F. Ada muss alle M · F Einträge einzeln betrachten, und für jeden Eintrag muss sie alle anderen M−1 Bewertungen derselben Person berücksichtigen. Insgesamt muss Ada M · (M − 1) · F Bewertungen betrachten.

Aber: Um zu entdecken, ob eine bestimmte Bewertung problematisch ist, muss Ada diese Bewertung nur mit der besten Bewertung vergleichen, die die bewertende Person vergeben hat. Wenn diese Person einen anderen Film besser findet, dann kann der von Ada gerade betrachtete Film gar kein Favorit sein. Anders gesagt, wenn Ada zunächst die besten Gesamtbewertungen für jede einzelne Person herausfindet (indem sie sich einmal alle M · F Bewertungen betrachtet), kann sie bei einer zweiten Betrachtung aller M · F Bewertungen feststellen, ob sie schlechter ausfallen als die beste Bewertung der jeweiligen Person.

Dieser alternative Algorithmus mit einer gezielten Vorberechnung der besten Bewertungen führt dazu, dass Ada sich 2 · M · F Bewertungen betrachtet. Bei M = 7 und F = 6 wie in dieser Biberaufgabe sind das 84 Tabellenzugriffe, während der erste Algorithmus 252 Tabellenzugriffe erfordert. Der zweite Algorithmus löst Adas Problem ebenfalls korrekt, ist aber effizienter als der erste Algorithmus.

Eine der wichtigsten Aufgaben in der Informatik besteht darin, Probleme nicht nur korrekt, sondern auch so effizient wie möglich zu lösen. Mit schnelleren Computern werden Lösungen schneller berechnet. Sind aber keine effizienten Algorithmen bekannt, um ein Problem zu lösen, werden auch schnellere Computer an ihre Grenzen kommen.
