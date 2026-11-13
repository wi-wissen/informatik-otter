---
short: kiV8
title: Pfützenspringen
summary: Fünf Kinder springen von Pfütze zu Pfütze, und in jeder Pfütze entscheidet das Alter über den Weiterweg. Wo landet wer?
grades:
  "9-10": hard
  "11-13": medium
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [sorting]
methods: [sorting-network]
mascot: beaver
interaction:
  format: match
  props:
    left:
      - { id: anna, label: "Anna (7 Jahre)" }
      - { id: bert, label: "Bert (8 Jahre)" }
      - { id: carl, label: "Carl (9 Jahre)" }
      - { id: dora, label: "Dora (10 Jahre)" }
      - { id: ella, label: "Ella (11 Jahre)" }
    right:
      - { id: s1, label: "Feld 1 von oben" }
      - { id: s2, label: "Feld 2 von oben" }
      - { id: s3, label: "Feld 3 von oben" }
      - { id: s4, label: "Feld 4 von oben" }
      - { id: s5, label: "Feld 5 von oben" }
source:
  type: original
  work: Informatik-Biber 2014
  year: 2014
  page: 41
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2014/Biberheft2014-mit-Loesungen.pdf
  license: CC BY-NC-SA 3.0
---
Anna (7 Jahre), Bert (8 Jahre), Carl (9 Jahre), Dora (10 Jahre) und Ella (11 Jahre) spielen ein Spiel, bei dem sie von Pfütze zu Pfütze springen. Dazu haben sie Pfeile auf den Boden gemalt.

![Links die Felder der Kinder Anna, Bert, Carl, Dora und Ella von oben nach unten, in der Mitte zehn Pfützen, rechts fünf leere Zielfelder. Dicke und dünne Pfeile verbinden die Felder und Pfützen](./img/network.png)

Am Anfang stehen die Kinder auf den Feldern links und springen entlang der Pfeile jeweils zu einer Pfütze. Ein Kind, das zuerst in einer Pfütze ist, wartet, bis ein zweites dazu kommt. Das ältere Kind springt dann weiter entlang des dicken Pfeiles, das jüngere entlang des dünnen Pfeiles.

**Ordne jedem Kind das Feld rechts zu, auf dem es am Ende ankommt.** Die fünf Felder rechts sind von oben nach unten durchnummeriert.
