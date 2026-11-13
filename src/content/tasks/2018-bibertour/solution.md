---
answers:
  - { s1: b, s2: e, s3: c, s4: a, s5: d }
  - { s1: d, s2: a, s3: c, s4: e, s5: b }
---
Es gibt zwei Bibertouren, die möglichst wenig kosten:

- Bau → B → E → C → A → D → Bau
- Bau → D → A → C → E → B → Bau

Die zweite Bibertour ist wie die erste Tour, nur rückwärts gefahren. Beide Bibertouren kosten jeweils neun Bibertaler.

Eine Bibertour, die noch weniger kostet, gibt es nicht: Die Fahrten vom Bau zum ersten Dorf und vom letzten Dorf (das nicht das gleiche sein kann wie das erste Dorf) zum Bau zurück kosten mindestens fünf Bibertaler. Die vier Fahrten vom ersten Dorf über die anderen drei Dörfer zum letzten Dorf kosten jeweils mindestens einen Bibertaler. Und 5 + 4 = 9.

## Das ist Informatik!

Kommt uns dieses Problem nicht irgendwie bekannt vor? Es geht um eine Rundtour, bei der alle gegebenen Stationen genau einmal besucht werden müssen und die möglichst kurz ist (wenn man die in Münzen gegebenen Kosten eines Weges als Weglänge versteht). Wenn man das Problem so allgemein beschreibt, wird offensichtlich: Diese Biberaufgabe ist ein Beispiel für das Problem des Handlungsreisenden, im Englischen auch als „Traveling Salesman Problem" bzw. kurz TSP bekannt.

Das TSP ist eines der bekanntermaßen sehr schwierigen Probleme der Informatik. Im schlimmsten Fall muss man alle möglichen Wege bestimmen und daraus den kürzesten Weg auswählen. Die Anzahl der möglichen Wege liegt für *n* Stationen aber in der Größenordnung von *n*! – das ist schon für *n* = 20 eine Zahl mit 19 Ziffern. Die Informatik kennt aber Verfahren, die mit sehr viel weniger Aufwand zu optimalen oder zumindest sehr guten Ergebnissen für größere Werte kommen. Das ist gut, denn das TSP hat viele wichtige Anwendungen, unter anderem beim Design von Mikrochips.
