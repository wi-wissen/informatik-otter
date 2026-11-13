---
short: 4uBt
title: Klausurenplan
summary: Sieben Klausuren, fünf Tage und Konflikte zwischen Prüfungen. Wie kommt man mit möglichst wenigen Tagen aus?
grades:
  "11-13": hard
gi:
  content: [information-data, algorithms]
  process: [modelling, reasoning]
topics: [graphs, optimization]
methods: [graph-coloring]
mascot: beaver
interaction:
  format: custom
  props:
    days: 5
    minColors: 4
    nodes:
      - { id: A, x: 90, y: 24 }
      - { id: B, x: 200, y: 19 }
      - { id: C, x: 21, y: 138 }
      - { id: D, x: 150, y: 106 }
      - { id: E, x: 277, y: 110 }
      - { id: F, x: 85, y: 213 }
      - { id: G, x: 237, y: 202 }
    edges: [[A, B], [A, C], [A, D], [B, C], [B, D], [B, E], [B, G], [C, D], [C, F], [D, E], [D, F], [D, G]]
source:
  type: original
  work: Informatik-Biber 2025
  year: 2025
  page: 46
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2025/Biberheft_2025_web_komplett.pdf
  country: PR
  license: CC BY-SA 4.0
---
An der Euler-Schule stehen Klausuren an. Sie sollen an möglichst wenigen Tagen geschrieben werden. Weil man nur eine Klausur pro Tag mitschreiben darf, dürfen zwei Klausuren, bei denen mindestens eine Person beide mitschreibt, nicht für den gleichen Tag geplant werden. Solche zwei Klausuren haben einen „Tageskonflikt“.

Um die Planung zu erleichtern, werden die Tageskonflikte in einem Diagramm aus Kreisen und Linien dargestellt:

- Für jede Klausur wird ein Kreis gezeichnet.
- Zwischen zwei Kreisen wird genau dann eine Linie gezeichnet, wenn diese beiden Klausuren einen Tageskonflikt haben, also nicht für den gleichen Tag geplant werden dürfen.

Hier ist ein Beispiel mit drei Klausuren: Die Klausur in der Mitte hat zwei Tageskonflikte, nämlich mit jeder der beiden anderen Klausuren. Die Nummern zeigen eine Möglichkeit, die Klausuren auf zwei Tage (1 und 2) zu verteilen.

![Drei Kreise in einer Reihe, verbunden durch zwei Linien, mit den Tagen 2, 1 und 2](./img/example.png)

Innerhalb der nächsten fünf Tage sollen sieben Klausuren geschrieben werden. Das Diagramm zeigt ihre Tageskonflikte.

**Verteile die Klausuren auf möglichst wenige der fünf Tage und beachte dabei die Tageskonflikte.** Es gibt mehrere richtige Antworten.
