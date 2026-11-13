---
short: 8ucj
title: Prüf-Biber
summary: Sieben Biber halten Flaggen hoch, einer davon die falsche. Prüf-Biber verraten, welcher.
grades:
  "11-13": hard
gi:
  content: [information-data]
  process: [reasoning]
topics: [error-detection, encoding]
methods: [hamming-code, parity-bit]
mascot: beaver
interaction:
  format: graph-pick
  props:
    pick: nodes
    width: 1319
    height: 376
    background: ./img/flags.png
    hideNodes: true
    nodeRadius: 90
    nodes:
      - { id: b1, x: 95, y: 170, label: "Biber 1" }
      - { id: b2, x: 285, y: 170, label: "Biber 2" }
      - { id: b3, x: 450, y: 170, label: "Biber 3" }
      - { id: b4, x: 625, y: 170, label: "Biber 4" }
      - { id: b5, x: 800, y: 170, label: "Biber 5" }
      - { id: b6, x: 975, y: 170, label: "Biber 6" }
      - { id: b7, x: 1160, y: 170, label: "Biber 7" }
source:
  type: original
  work: Informatik-Biber 2020
  year: 2020
  page: 44
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2020/Biberheft_2020_final_mit_Loesungen.pdf
  country: RU
  license: CC BY-SA 4.0
---
Der Biber-Boss setzt vier Biber ein, um den anderen Bibern Flaggen-Nachrichten zu senden. Jeder dieser Nachrichten-Biber hält entweder eine **rote** oder eine **gelbe** Flagge hoch.

Es kann passieren, dass ein Biber die falsche Flagge hochhält. Das möchte der Biber-Boss erkennen können. Deshalb bestimmt er drei Prüf-Biber.

Jeder Prüf-Biber prüft drei Nachrichten-Biber. Wenn diese drei eine ungerade Anzahl an roten Flaggen hochhalten sollen, dann soll ihr Prüf-Biber auch eine rote Flagge hochhalten, sonst eine gelbe. Wenn alle die richtigen Flaggen hochhalten, dann halten ein Prüf-Biber und seine Nachrichten-Biber zusammen eine gerade Anzahl an roten Flaggen hoch.

Insgesamt werden in einer Nachricht nun sieben Flaggen hochgehalten.

Der Boss gibt Nachrichten-Bibern und Prüf-Bibern Nummern und ordnet sie so einander zu:

| Nachrichten-Biber | Prüf-Biber |
|-------------------|-----------:|
| 1, 2, 3           | 5          |
| 1, 2, 4           | 6          |
| 2, 3, 4           | 7          |

Der Biber-Boss sieht die Nachricht unten. Er weiß sofort, dass genau einer der sieben Biber die falsche Flagge hochhält.

**Welcher Biber hält die falsche Flagge hoch?** Klicke auf den Biber.
