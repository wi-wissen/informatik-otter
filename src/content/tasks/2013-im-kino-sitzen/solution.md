---
answers:
  - [alfie, charlie, berta, eddie, dora]
  - [alfie, charlie, berta, dora, eddie]
  - [dora, eddie, berta, charlie, alfie]
  - [eddie, dora, berta, charlie, alfie]
---
Die vier Reihenfolgen

- Alfie (2) Charlie (3) Berta (2) Eddie (3) Dora
- Alfie (2) Charlie (3) Berta (2) Dora (3) Eddie
- Dora (3) Eddie (2) Berta (3) Charlie (2) Alfie
- Eddie (3) Dora (2) Berta (3) Charlie (2) Alfie

ergeben ein maximal mögliches Gruppen-Wohlsein von jeweils 10. Für ein noch höheres Gruppen-Wohlsein wären mindestens 3 Liebespaare nötig, im Netz gibt es aber nur zwei Beziehungen „verliebt“.

## Das ist Informatik!

Für die Informatik ist das „Netz der Beziehungen“ ein gewichteter Graph: Die Freunde sind die Knoten des Graphen, und die Beziehungen sind die Kanten. Die Werte für das „Paar-Wohlsein“ geben jeder Kante ein Gewicht. Das Gewicht kann man auch als Länge der Kante interpretieren. Damit wird hier ein besonderer Weg durch den Graphen gesucht, nämlich der längste Hamiltonpfad. Ein Hamiltonpfad ist ein Pfad, der jeden Knoten genau einmal enthält. <http://de.wikipedia.org/wiki/Hamiltonpfad>
