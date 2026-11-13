---
short: uE24
title: Leben der Pflanzen
summary: In einer Programmiersprache fürs Pflanzenwachstum verdoppeln, teilen und löschen sich Rechtecke. Welches Programm führt zum Zielbild?
grades:
  "9-10": hard
  "11-13": medium
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [programming]
methods: [sequence]
mascot: beaver
interaction:
  format: choice
  props:
    options:
      - { id: a, label: "a.dopple(rechts); a.dopple(rechts); [b,c] ← a.teile(); b.stirb();" }
      - { id: b, label: "a.dopple(hoch); a.dopple(rechts); a.dopple(rechts); [b,c] ← a.teile(); b.stirb();" }
      - { id: c, label: "a.dopple(rechts); a.dopple(rechts); a.dopple (hoch); a.stirb();" }
      - { id: d, label: "a.dopple(rechts); [b,c] ← a.teile(); c.dopple(hoch); c.dopple(rechts); b.stirb();" }
source:
  type: original
  work: Informatik-Biber 2011
  year: 2011
  page: 20
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2011/Biberheft2011-mit-Loesungen.pdf
  license: CC BY-NC-SA 3.0 DE
---
Der Biber liebt die Vegetation. Er hat eine Programmiersprache erfunden, die mit der Idee pflanzlichen Wachsens spielt. Man programmiert aus visuellen Objekten Bilder. Ein visuelles Objekt kennt drei Operationen: „dopple“, „teile“ und „stirb“. Jedes Bild beginnt mit einem quadratischen Objekt „a“.

Zum Beispiel: Das folgende Programm mit den fünf Operationen

`a.dopple(rechts); a.dopple(rechts); [b,c] ← a.teile(); c.dopple(hoch); b.stirb();`

erzeugt diese Folge von Bildern:

![Sechs Bilder nacheinander: Ein kleines grünes Quadrat in der linken unteren Ecke eines großen Quadrats; es wird nach rechts verdoppelt zu einem Rechteck aus zwei Einheiten, dann zu drei Einheiten; das Rechteck wird in zwei Teile geteilt; das rechte Teil wächst nach oben zu einem Quadrat; das linke Teil verschwindet und es bleibt ein grünes Quadrat übrig](./img/beispiel.png)

Nur ein Objekt, das kein Quadrat ist, kann die teile()-Operation ausführen. Dabei wird es quer zur Längsrichtung in zwei neue, kürzere Objekte gespalten.

Der Biber möchte ein Programm schreiben, welches das linke Bild in das rechte Bild überführt:

![Links ein kleines grünes Quadrat in der linken unteren Ecke, rechts ein schmales, hohes grünes Rechteck (zwei Einheiten hoch) weiter rechts unten](./img/aufgabe.png)

**Was könnten die ersten Anweisungen dieses Programms sein?**
