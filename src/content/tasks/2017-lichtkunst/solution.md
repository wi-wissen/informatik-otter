---
answer:
  - [0, 0, 0, 0]
  - [1, 1, 1, 1]
  - [1, 0, 0, 1]
  - [1, 1, 1, 1]
  - [1, 0, 0, 1]
  - [0, 0, 0, 0]
  - [0, 0, 0, 0]
---
Die Lichter leuchten so wie im Bild, wenn man zunächst die Stockwerke 3 und 5 anschaltet, danach die Fensterspalten A und D anschaltet und zuletzt die Stockwerke 6, 1 und 0 wieder ausschaltet. Natürlich gibt es noch viele andere Möglichkeiten, die im Kern aber auf dieselbe Abfolge zurückgehen.

## Das ist Informatik!

Die Lichtschalter in dieser Biberaufgabe sind wie Anweisungen in einem Computerprogramm, und die Lichter in den Fenstern sind wie Speicherplätze im Computer, die durch diese Anweisungen verändert werden. Dabei teilen sich die Anweisungen (also die Schalter) einige Speicherplätze (also die Lichter): Zum Beispiel wird das Licht im Fenster links oben sowohl vom Schalter für Fensterspalte A als auch vom Schalter für Stockwerk 6 geschaltet.

Wenn in einem Computerprogramm verschiedene Anweisungen die gleichen Speicherplätze verändern, ist es besonders wichtig, dass sie in der richtigen Reihenfolge ausgeführt werden. Sonst entstehen leicht Fehler. Werden z. B. die Lichter in Fensterspalte A eingeschaltet und wieder ausgeschaltet und danach die Lichter in Stockwerk 6 eingeschaltet, ist das Licht im Fenster links oben am Ende an. Wird Stockwerk 6 aber zwischen dem Ein- und Ausschalten von Spalte A angeschaltet, ist dieses Licht am Ende aus.

Programmiererinnen und Programmierer müssen die Auswirkungen von Programmanweisungen sehr genau bedenken.
