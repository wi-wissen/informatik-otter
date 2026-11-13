---
answer: d
---
Antwort **D** ist richtig.

Die Kugeln 1, 2 und 3 fallen in Loch A, die Kugeln 4 bis 10 rollen über sie hinweg. Kugeln 4 und 5 fallen in Loch B und Kugeln 6 bis 10 rollen über sie hinweg. Schließlich fällt Kugel 6 in Loch C und die Kugeln 7 bis 10 rollen in dieser Reihenfolge bis an das Ende der Rampe. Nach Lösen der Feder in Loch A werden die Kugeln in der Reihenfolge 3, 2, 1 hinausgeschoben und rollen weiter bis an das Ende der Rampe. Nun sind die Kugeln in der Reihenfolge 7, 8, 9, 10, 3, 2, 1 am Ende der Rampe.

Dann wird die Feder in Loch B gelöst, sodass 5 und 4 an das Ende rollen. Zuletzt wird Kugel 6 aus Loch C hinausbefördert. Dadurch sind die Kugeln zum Schluss in der Reihenfolge 7, 8, 9, 10, 3, 2, 1, 5, 4, 6 am Ende der Rampe angekommen.

## Das ist Informatik!

Die Löcher in dieser Biberaufgabe funktionieren nach dem Prinzip Last-In First-Out (LIFO): Die letzte Kugel, die hineinfällt, wird zuerst wieder ausgeworfen. Nach dem gleichen Prinzip funktioniert die Datenstruktur Stapel (engl. stack): das zuletzt gespeicherte Datenelement wird zuerst wieder entfernt.

Auch wenn dieses Prinzip sehr einfach erscheint, ist es doch in vielen Situationen sehr nützlich. Will man beispielsweise automatisch feststellen, ob die Klammern in einem arithmetischen Ausdruck richtig gesetzt sind (in „((1 + 2) * 3)“ sind sie richtig, in „((4 + 5) * (6 − 7)“ sind sie falsch), geht man von links nach rechts so vor: Eine öffnende Klammer wird im Stack gespeichert (mit der Operation „push“); wenn eine passende schließende Klammer gefunden wird, wird die öffnende Klammer wieder aus dem Stack entfernt (mit der Operation „pop“). Wird eine schließende Klammer gefunden, ohne dass eine öffnende Klammer im Stack ist, ist ein Fehler im Ausdruck. Ist der Stapel am Ende leer, gab es zu jeder öffnenden Klammer auch eine passende schließende Klammer.

Mehr zum Zusammenhang zwischen der Datenstruktur Stapel und Klammern in der Informatik ist bei der Aufgabe „BikeFun“ zu finden.
