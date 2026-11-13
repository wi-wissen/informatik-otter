---
answers:
  - [l3, l4, l2, l1]
  - [l3, l2, l4, l1]
  - [l4, l3, l2, l1]
---
Schneidet Noah die Stämme in der Reihenfolge (3 m, 4 m, 2 m, 1 m) zu, passen sie alle auf den Weg:

![Der Weg mit allen vier abgelegten Stämmen](./img/solution.png)

Für den 3 m-Stamm ist die 3 m-Lücke ganz links die erste freie Lücke von links, in die der Stamm passt; dort legt Noah den Stamm ab. Der 4 m-Stamm kommt dann in die 6 m-Lücke links. Dann ist die verbleibende 2 m-Lücke die erste freie Lücke von links; da rein passt der nächste Stamm, und den letzten Stamm legt Noah in die 1 m-Lücke ab.

Weitere richtige Reihenfolgen sind (3 m, 2 m, 4 m, 1 m) und (4 m, 3 m, 2 m, 1 m).

Alle anderen Reihenfolgen führen dazu, dass Noah nicht in der Lage ist, alle Baumstämme abzulegen: Der 1 m lange Stamm muss immer als letztes an der Reihe sein, weil nur dieser Stamm den letzten freien Platz ausfüllen kann. Der 2 m-Stamm darf nicht vor dem 3 m-Stamm kommen, weil er sonst in die 3 m-Lücke gelegt würde und dadurch eine zweite 1 m-Lücke entsteht. Außer den drei genannten Reihenfolgen gibt es keine Reihenfolgen, die diese Bedingungen erfüllen.

## Das ist Informatik!

Diese Biberaufgabe ist ein Spezialfall des Behälterproblems (englisch auch *bin packing problem*). Beim Behälterproblem müssen Objekte unterschiedlicher Größen in einer bestimmten Anzahl von Behältern untergebracht werden, die selbst auch wieder unterschiedliche Größen haben können. Die Objekte sind hier die Baumstämme, die Behälter die Lücken auf dem Weg.

Das Behälterproblem kommt in ganz unterschiedlichen Lebensbereichen vor. Einige Beispiele:

(a) In einem Möbellager müssen kleine und große Möbel platzsparend untergebracht werden.

(b) Eine Spedition kann Geld sparen, wenn sie zum Transport von Gütern durch geschicktes Packen weniger Lastwagen braucht.

(c) Das Betriebssystem eines Computers muss Dateien unterschiedlicher Größe auf der Festplatte speichern. Wenn Dateien gelöscht werden, entstehen Lücken auf der Festplatte. Diese Lücken müssen gefüllt werden, damit kein Speicherplatz verschwendet wird, ganz ähnlich wie auf der Straße bei dieser Biberaufgabe.

In der Informatik gilt das Behälterproblem als eines der schwersten Probleme; garantiert optimale Lösungen können auch von Computerprogrammen nur für kleine Fälle mit wenigen Objekten und wenigen Behältern gelöst werden. Es gibt aber verschiedene Verfahren und Strategien, mit denen gute Lösungen des Behälterproblems bestimmt werden können. In dieser Biberaufgabe ist die Strategie durch Noahs Regel vorgegeben. Sie legt jeden Baumstamm immer in die erste Lücke von links, in die er passt. Diese Strategie nennt man *First Fit*. Man sieht am Beispiel dieser Aufgabe, dass diese Strategie zu schlechten Ergebnissen führen kann: Nur wenn die Stämme in einer bestimmten Reihenfolge abgelegt werden, können alle Lücken gefüllt werden.
