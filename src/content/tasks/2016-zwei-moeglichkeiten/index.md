---
short: 5yNN
title: Zwei Möglichkeiten
summary: Eine Mondzauberkarte verwandelt zwei Eingabekarten in eine Ausgabekarte. Findest du die Regel und kannst du sie anwenden?
grades:
  "9-10": hard
  "11-13": medium
gi:
  content: [information-data]
  process: [modelling, reasoning]
topics: [logic]
methods: [xor, boolean-logic]
mascot: beaver
interaction:
  format: hotspots
  props:
    background: ./img/question.png
    width: 1014
    height: 252
    spots:
      - { id: c00, x: 812, y: 53, w: 74, h: 74, label: "Feld Zeile 1, Spalte 1" }
      - { id: c01, x: 888, y: 53, w: 74, h: 74, label: "Feld Zeile 1, Spalte 2" }
      - { id: c02, x: 963, y: 53, w: 74, h: 74, label: "Feld Zeile 1, Spalte 3" }
      - { id: c10, x: 812, y: 128, w: 74, h: 74, label: "Feld Zeile 2, Spalte 1" }
      - { id: c11, x: 888, y: 128, w: 74, h: 74, label: "Feld Zeile 2, Spalte 2" }
      - { id: c12, x: 963, y: 128, w: 74, h: 74, label: "Feld Zeile 2, Spalte 3" }
      - { id: c20, x: 812, y: 203, w: 74, h: 74, label: "Feld Zeile 3, Spalte 1" }
      - { id: c21, x: 888, y: 203, w: 74, h: 74, label: "Feld Zeile 3, Spalte 2" }
      - { id: c22, x: 963, y: 203, w: 74, h: 74, label: "Feld Zeile 3, Spalte 3" }
    states:
      - { id: "?", label: "?" }
      - { id: neumond, label: Neumond, image: ./img/neumond.png }
      - { id: vollmond, label: Vollmond, image: ./img/vollmond.png }
source:
  type: original
  work: Informatik-Biber 2016
  year: 2016
  page: 66
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2016/Biberheft2016-mit-Loesungen.pdf
  country: JP
  license: CC BY-SA 3.0
---
Der weiße Anaxagoras besitzt Mondzauberkarten, die für jedes ihrer neun Felder nach einer festen Regel funktionieren. Bei zwei Karten gibt er in jedes Feld ein Mondsymbol ein: Neumond (dunkel) oder Vollmond (hell). Sofort erscheinen auch Mondsymbole auf einer dritten Karte.

Hier ein Beispiel, links die zwei Eingabekarten, rechts die Ausgabekarte:

![Eingabekarte 1: Vollmond links oben, links in der Mitte, in der Mitte und links unten, sonst Neumond. Eingabekarte 2: Vollmond rechts oben, in der Mitte und rechts unten, sonst Neumond. Ausgabekarte: Vollmond links oben, rechts oben, links in der Mitte, links unten und rechts unten, sonst Neumond](./img/example.png)

**Verstehst du die Regel? Dann klicke auf die Felder der Ausgabekarte rechts, bis alle das richtige Mondsymbol zeigen.**

Im Bild sieht man die beiden Eingabekarten. Eingabekarte 1 zeigt Vollmond in den vier Feldern links oben, oben Mitte, links Mitte und Mitte, sonst Neumond. Eingabekarte 2 zeigt Vollmond in der oberen Reihe in der Mitte und rechts sowie in der unteren Reihe links und in der Mitte, sonst Neumond.
