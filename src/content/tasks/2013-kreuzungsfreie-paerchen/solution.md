---
answers:
  - [t0b1, t2b2, t4b3, t6b4, t8b5]
  - [t2b0, t4b1, t6b2, t7b3, t8b5]
---
Es sind höchstens 5 Pärchen möglich. Dafür gibt es zwei Möglichkeiten:

- Pärchen A(oben 1)–A(unten 2), B(oben 3)–B(unten 3), A(oben 5)–A(unten 4), B(oben 7)–B(unten 5), E(oben 9)–E(unten 6).
- Pärchen B(oben 3)–B(unten 1), A(oben 5)–A(unten 2), B(oben 7)–B(unten 3), A(oben 8)–A(unten 4), E(oben 9)–E(unten 6).

Mehr als 5 Verbindungen sind nicht möglich. Man kann den Kreis E links oben als Teil eines Pärchens ausschließen, weil sonst oben links nur noch ein Kreis A und unten rechts nur eines der zwei Quadrate D und C für Pärchen in Frage kämen. Das wären dann zusammen aber nur 3 Pärchen. Auf die gleiche Art kann man die Kreise C oben und D oben als Teile von Pärchen ausschließen. Ohne die 3 Kreise E links oben, C oben und D oben bleibt nicht mehr viel auszuprobieren.

## Das ist Informatik!

Aus den Buchstaben oben und unten muss ein möglichst langes, gleiches Wort gebildet werden (die Reihenfolge der Buchstaben muss gleich bleiben). Dieses Problem ist bekannt unter dem Namen längste gemeinsame Teilfolge (LGT). Die Lösung für dieses Problem wird verwendet, um zum Beispiel zwei Textdateien auf Gemeinsamkeiten zu prüfen. Das nutzen Programmierer, wenn Sie gemeinsam an großen Programmen arbeiten, um sofort zu sehen, wo im Programm gearbeitet wurde, wo etwas gelöscht, verändert und eingefügt wurde. Um die längste gemeinsame Teilfolge zu finden, werden Konzepte der dynamischen Programmierung angewandt. Dabei wird ein Problem schrittweise gelöst, indem jeweils kleinere Varianten des Problems gelöst werden.
