---
short: WQM5
title: Ballon-Maschine 1
summary: Eine Maschine bläst Ballons in einem Rahmen auf. In welcher Reihenfolge muss sie die Buchstaben lesen, um dieses Bild zu erzeugen?
grades:
  "3-4": hard
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [programming]
methods: [sequence]
mascot: beaver
interaction:
  format: command-sequence
  props:
    maxLength: 5
    commands:
      - { id: a, label: A }
      - { id: b, label: B }
      - { id: c, label: C }
      - { id: d, label: D }
      - { id: e, label: E }
source:
  type: original
  work: Informatik-Biber 2024
  year: 2024
  page: 9
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2024/Biberheft_2024_web_komplett.pdf
  country: DE
  license: CC BY-SA 4.0
---
Eine Ballonmaschine kann Bilder erstellen, indem sie Ballons in einem quadratischen Rahmen aufbläst. Die Ballons sind mit den Buchstaben A, B, C, D und E beschriftet. Die Maschine liest nacheinander eine Folge von Buchstaben, von links nach rechts. Vor dem ersten Buchstaben sind alle Ballons leer.

Wenn die Maschine einen Buchstaben gelesen hat, macht sie Folgendes: Der Ballon mit diesem Buchstaben wird aufgeblasen, bis er

- entweder einen anderen Ballon berührt
- oder den gegenüberliegenden Rand des Rahmens berührt.

Wenn die Maschine zum Beispiel die Buchstabenfolge E C liest, macht sie dies:

![Links der leere Rahmen mit den Ballons A bis E, rechts das Ergebnis nach E C: Ballon E ist senkrecht bis zum oberen Rand aufgeblasen, Ballon C waagerecht bis zum Ballon E](./img/example.png)

Die Maschine liest eine Folge von fünf Buchstaben. Am Ende hat sie dieses Bild erstellt.

![Ergebnisbild: B waagerecht über die ganze Breite, darunter A kurz von oben bis B, C waagerecht bis E, D senkrecht von unten bis C, E senkrecht von unten bis B](./img/target.png)

**Gib die Folge an!**
