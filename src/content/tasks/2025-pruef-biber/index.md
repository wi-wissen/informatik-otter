---
short: MEn2
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
  format: choice
  props:
    columns: 7
    options:
      - { id: "1", label: "1" }
      - { id: "2", label: "2" }
      - { id: "3", label: "3" }
      - { id: "4", label: "4" }
      - { id: "5", label: "5" }
      - { id: "6", label: "6" }
      - { id: "7", label: "7" }
source:
  type: original
  work: Informatik-Biber 2025
  year: 2025
  page: 66
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2025/Biberheft_2025_web_komplett.pdf
  country: RU
  license: CC BY-SA 4.0
---
Der Biber-Boss setzt vier sogenannte *Nachrichten-Biber* ein: Sie halten Flaggen hoch, um Nachrichten zu senden. Jeder Nachrichten-Biber hält entweder eine **rote** oder eine **gelbe** Flagge hoch.

Manchmal passiert es, dass ein Biber die falsche Flagge hochhält. Das möchte der Biber-Boss erkennen können. Deshalb bestimmt er zusätzlich drei *Prüf-Biber*.

Jeder Prüf-Biber prüft drei Nachrichten-Biber. Wenn diese drei eine ungerade Anzahl an roten Flaggen hochhalten sollen, dann soll ihr Prüf-Biber auch eine rote Flagge hochhalten, sonst eine gelbe. Wenn alle die richtigen Flaggen hochhalten, dann halten ein Prüf-Biber und seine Nachrichten-Biber zusammen eine gerade Anzahl von roten Flaggen hoch.

Der Boss nummeriert die Nachrichten- und Prüf-Biber und ordnet sie so einander zu:

| Nachrichten-Biber | Prüf-Biber |
|-------------------|-----------:|
| 1, 2, 3           | 5          |
| 1, 2, 4           | 6          |
| 2, 3, 4           | 7          |

Insgesamt werden in einer Nachricht nun sieben Flaggen hochgehalten. Der Biber-Boss sieht die Nachricht unten. Er bemerkt, dass genau einer der sieben Biber die falsche Flagge hochhält.

![Sieben Biber mit Flaggen, von links: 1 rot, 2 gelb, 3 gelb, 4 rot, 5 gelb, 6 rot, 7 rot](./img/flags.png)

**Welcher Biber hält die falsche Flagge hoch?**
