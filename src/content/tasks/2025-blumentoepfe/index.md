---
short: Sc8E
title: Blumentöpfe
summary: Florian versteckt einen Schlüssel in einem von acht Töpfen und verrät ihn nur durch die Blumen in den Töpfen.
grades:
  "7-8": medium
  "9-10": easy
gi:
  content: [information-data]
  process: [modelling, reasoning]
topics: [encoding, searching]
methods: [binary-search]
mascot: beaver
interaction:
  format: choice
  props:
    multiple: true
    columns: 8
    options:
      - { id: a, label: A }
      - { id: b, label: B }
      - { id: c, label: C }
      - { id: d, label: D }
      - { id: e, label: E }
      - { id: f, label: F }
      - { id: g, label: G }
      - { id: h, label: H }
source:
  type: original
  work: Informatik-Biber 2025
  year: 2025
  page: 29
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2025/Biberheft_2025_web_komplett.pdf
  country: DE
  license: CC BY-SA 4.0
---
Biber Florian dekoriert den Eingang seines Baus mit Blumentöpfen. In manchen Töpfen ist **je eine Blume** gepflanzt, die anderen sind **leer**.

In einem Topf ist ein Schlüssel versteckt. Florian erklärt seine Methode, wie man den Schlüssel finden kann.

„Zuerst betrachtet man alle Töpfe und zählt, wie viele Blumen insgesamt in den Töpfen gepflanzt sind. Wenn die Anzahl an Blumen gerade ist, ist der Schlüssel in der linken Hälfte der Töpfe, sonst ist er in der rechten Hälfte. Jetzt betrachtet man nur die Hälfte, in der der Schlüssel ist, und wiederholt das Verfahren, bis nur noch ein Topf übrig ist. Dort ist der Schlüssel versteckt.“

Florian zeigt ein Beispiel, wie man den Schlüssel in 4 Töpfen A, B, C, D finden kann.

![Vier Töpfe A bis D, Blumen in A und D, Schlüssel in B; die linke Hälfte A und B ist durch eine gestrichelte Linie von der rechten getrennt](./img/ex1.png)

Betrachte die Töpfe A, B, C und D. Es gibt insgesamt 2 Blumen, also eine **gerade** Anzahl. Das heißt, der Schlüssel ist in der **linken** Hälfte, also in Topf A oder B.

![Nur die Töpfe A und B, mit einer Blume in A und dem Schlüssel in B](./img/ex2.png)

Betrachte die Töpfe A und B. Es gibt insgesamt 1 Blume, also eine **ungerade** Anzahl. Das heißt, der Schlüssel ist in der **rechten** Hälfte, also in Topf B.

Florian hat acht Blumentöpfe (A bis H) und versteckt den Schlüssel in Topf C.

**In welche Töpfe sollte er eine Blume pflanzen, damit man den Schlüssel mit seiner Methode finden kann?** Es gibt mehrere richtige Antworten. Auch 0 ist eine gerade Zahl.
