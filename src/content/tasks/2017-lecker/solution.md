---
answer: { s1: c, s2: e, s3: a, s4: d, s5: b }
---
Die richtige Reihenfolge ist: Stamm C (5 Blätter), Stamm E (4 Blätter), Stamm A (3 Blätter), Stamm D (2 Blätter), Stamm B (1 Blatt).

Sortieraufgaben lassen sich immer mit Vertauschungen erledigen. Allerdings kann man sich viele verschiedene Vorgehensweisen überlegen, welche Dinge wann und wie vertauscht werden.

Da immer nur ein Stamm bewegt werden kann, wird zum Vertauschen eine Ablage benötigt. Damit kann man z. B. so vorgehen:

1. Bewege den Stamm vom ersten Platz auf die Ablage.
2. Bewege den „besten“ Stamm (also den mit den meisten Blättern) auf den – frei gewordenen – ersten Platz.
3. Bewege den Stamm von der Ablage auf den nun freien Platz.

Damit ist der erste Platz nun mit dem richtigen Stamm belegt. Auf die gleiche Weise werden der zweite Platz mit dem richtigen Stamm belegt, der dritte Platz mit dem richtigen Stamm belegt usw.

## Das ist Informatik!

Sortieren ist eine der Hauptbeschäftigungen von Computern. Sie sortieren Daten ganz nach Wunsch: Zahlen nach Größe, Farben nach Helligkeit, Fotos nach dem Zeitpunkt der Aufnahme usw. Damit eine Menge von Daten umsortiert werden kann, müssen die einzelnen Daten ihren „Platz“ tauschen: eine kleinere Zahl muss vor eine größere gesetzt werden, eine hellere Farbe vor eine dunklere, ein älteres Foto vor ein neueres.

Die „Plätze“ im Computer werden in Programmen mit so genannten Variablen adressiert. Wenn man den Wert zweier Variablen tauschen möchte, benötigt man eine dritte Variable, um einen Wert zwischendurch abzulegen – als Tauschhilfe, sozusagen. Denn wenn man ohne nachzudenken den Platz 1 mit dem Wert von Platz 2 belegt, ist der Wert von Platz 1 verschwunden. Die Vertauschung zweier Daten an den Plätzen (Variablen) a und b mit Tauschhilfsplatz t kann so beschrieben werden:

- t ← a (Die Hilfsvariable t wird mit dem Wert der Variable a belegt.)
- a ← b (Die Variable a wird mit dem Wert der Variable b belegt.)
- b ← t (Die Variable b wird mit dem Wert der Hilfsvariable t belegt.)

Die Informatik kennt viele Verfahren zum Sortieren von Daten. Wie gut sie funktionieren, wird u. a. an der Anzahl der Vertauschungen gemessen, die zum Sortieren benötigt werden. Bei der Erklärung der Lösung wird übrigens das Verfahren Selection Sort angewendet.
