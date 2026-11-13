---
answer: c
---
Antwort C ist richtig: Denn alle kleinen Magnete befinden sich rechts von allen großen Magneten.

A ist falsch: Es gibt keinen dunkelblauen Magnet, der sich oberhalb eines hellgelben Magneten befindet. B ist falsch: Es befinden sich nicht alle quadratischen Magnete oberhalb von kreisförmigen Magneten. D ist falsch: Nicht alle hellgelben Magnete befinden sich unterhalb von dunkelblauen Magneten.

## Das ist Informatik!

Bei dieser Biber-Aufgabe geht es darum, für die Behauptungen festzustellen, ob sie wahr oder falsch sind. Die Eigenschaften einzelner Magnete können mit den Prädikaten „quadratisch(X)“, „kreisförmig(X)“, „groß(X)“, „klein(X)“, „dunkelblau(X)“ und „hellgelb(X)“ beschrieben werden. Die Beziehungen zwischen zwei Magneten können mit den Prädikaten „oberhalb-von(X,Y)“, „unterhalb-von(X,Y)“ und „rechts-von(X,Y)“ beschrieben werden. In der formalen Sprache der Prädikatenlogik sehen die Behauptungen dann so aus:

- A) exist X, Y: dunkelblau(X) and hellgelb(Y) and oberhalb-von(X, Y)
- B) forall X, Y: (quadratisch(X) and kreisförmig(Y)) implies oberhalb-von(X, Y)
- C) forall X, Y: (klein(X) and groß(Y)) implies rechts-von(X, Y)
- D) forall X, Y: (hellgelb(X) and dunkelblau(Y)) implies unterhalb-von(X, Y)

Die Informatik kennt Programmiersprachen, mit denen man direkt in Prädikatenlogik programmiert. Die Programmiersprache Prolog ist ein Beispiel für so eine logikorientierte Programmiersprache.
