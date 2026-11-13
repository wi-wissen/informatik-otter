---
short: aek5
title: Passwörter
summary: Ein Diagramm aus Kreisen und Pfeilen legt fest, welche Passwörter gültig sind. Welches der vier passt?
grades:
  "9-10": hard
  "11-13": medium
gi:
  content: [languages-automata]
  process: [modelling, reasoning]
topics: [automata]
methods: [finite-automaton]
mascot: beaver
interaction:
  format: choice
  props:
    columns: 1
    options:
      - { id: a, image: ./img/a.png, alt: "Passwort A: Ast, Ast, Baumscheibe, Baumscheibe, Ast, Ast, Ast, Baumscheibe, Ast" }
      - { id: b, image: ./img/b.png, alt: "Passwort B: Baumscheibe, Ast, Ast, Baumscheibe, Ast, Ast" }
      - { id: c, image: ./img/c.png, alt: "Passwort C: Ast, Baumscheibe, Ast, Baumscheibe, Ast, Ast, Baumscheibe" }
      - { id: d, image: ./img/d.png, alt: "Passwort D: Ast, Ast, Baumscheibe, Baumscheibe, Ast, Ast, Baumscheibe, Ast, Baumscheibe" }
source:
  type: original
  work: Informatik-Biber 2020
  year: 2020
  page: 42
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2020/Biberheft_2020_final_mit_Loesungen.pdf
  country: DE
  license: CC BY-SA 4.0
---
Die Biber haben eigene Regeln für Passwörter.

Die Passwörter sind aus den beiden Symbolen *Ast* (eine Astgabel) und *Baumscheibe* (eine runde Holzscheibe) aufgebaut.

Ein Diagramm legt die gültigen Passwörter fest. Ein Passwort ist dann gültig, wenn es im Diagramm einen Pfad vom Kreis S entlang der Pfeile zum Kreis E gibt, der der Reihe nach die Symbole des Passworts enthält. Andere Passwörter sind nicht gültig.

Ein Beispiel: Nach diesem Diagramm …

![Diagramm mit Kreis S, einem Pfeil mit Ast zu einem Kreis, von dort Pfeile mit Baumscheibe und Ast im Dreieck zurück und ein Pfeil mit Baumscheibe zum Kreis E](./img/example-diagram.png)

… sind unendlich viele Passwörter gültig, z. B.:

![Drei gültige Passwörter aus Ast- und Baumscheiben-Symbolen](./img/example-words.png)

Die Biber erfinden ein neues Diagramm:

![Das neue Diagramm mit Kreis S, einem Kreis in der Mitte, Kreis E und weiteren Kreisen, verbunden durch Pfeile mit Ast- und Baumscheiben-Symbolen](./img/diagram.png)

**Welches der folgenden Passwörter ist nach dem neuen Diagramm gültig?**
