---
short: n4ci
title: Ballon-Maschine 2
summary: Jetzt kann die Maschine Ballons auch wieder entleeren. Welche Buchstabenfolge erzeugt das gezeigte Bild?
grades:
  "5-6": hard
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [programming]
methods: [conditional]
mascot: beaver
interaction:
  format: command-sequence
  props:
    maxLength: 9
    commands:
      - { id: a, label: A }
      - { id: b, label: B }
      - { id: c, label: C }
      - { id: d, label: D }
      - { id: e, label: E }
      - { id: f, label: F }
source:
  type: original
  work: Informatik-Biber 2024
  year: 2024
  page: 11
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2024/Biberheft_2024_web_komplett.pdf
  country: DE
  license: CC BY-SA 4.0
---
Eine Ballonmaschine kann Bilder erstellen, indem sie Ballons in einem quadratischen Rahmen aufbläst.

Die Ballons sind mit den Buchstaben A, B, C, D, E und F beschriftet.

Die Maschine liest nacheinander eine Folge von Buchstaben, von links nach rechts. Vor dem ersten Buchstaben sind alle Ballons leer.

Wenn die Maschine einen Buchstaben gelesen hat, macht sie Folgendes:

- Wenn der Ballon mit diesem Buchstaben leer ist, wird er aufgeblasen, bis er entweder einen anderen Ballon oder den gegenüberliegenden Rand des Rahmens berührt.
- Wenn der Ballon mit diesem Buchstaben aufgeblasen ist, wird er entleert.

Wenn die Maschine zum Beispiel die Buchstabenfolge F A B A liest, macht sie dies:

![Vier Schritte der Folge F A B A: F wird waagerecht aufgeblasen, A senkrecht bis F, B waagerecht bis A, danach wird A wieder entleert](./img/example.png)

Die Maschine liest eine Folge von neun Buchstaben. Am Ende hat sie dieses Bild erstellt.

![Ergebnisbild: Die Ballons A, D und E sind senkrecht aufgeblasen, B, C und F sind leer](./img/target.png)

**Gib die Folge an!**
