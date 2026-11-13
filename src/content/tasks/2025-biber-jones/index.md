---
short: oz48
title: Biber Jones
summary: Biber Jones muss durch Gänge voller Fallblöcke zum Schatz, und das mit möglichst kurzem Programm.
grades:
  "11-13": hard
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [optimization, programming]
methods: [pareto-optimum, brute-force]
mascot: beaver
interaction:
  format: command-sequence
  props:
    maxLength: 10
    commands:
      - { id: w1, label: wait(1) }
      - { id: w2, label: wait(2) }
      - { id: w3, label: wait(3) }
      - { id: w4, label: wait(4) }
      - { id: w5, label: wait(5) }
      - { id: w6, label: wait(6) }
      - { id: w7, label: wait(7) }
      - { id: w8, label: wait(8) }
      - { id: w9, label: wait(9) }
      - { id: w10, label: wait(10) }
      - { id: w11, label: wait(11) }
      - { id: w12, label: wait(12) }
      - { id: gA, label: goto_block(A) }
      - { id: gB, label: goto_block(B) }
      - { id: gC, label: goto_block(C) }
      - { id: gD, label: goto_block(D) }
      - { id: gt, label: goto_treasure }
source:
  type: original
  work: Informatik-Biber 2025
  year: 2025
  page: 17
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2025/Biberheft_2025_web_komplett.pdf
  country: DE
  license: CC BY-SA 4.0
---
Biber Jones ist in einer perfiden Pyramide mit gefährlichen Gängen. Am Ende jedes Ganges befindet sich ein sagenhafter Schatz. Jones will jeden Schatz so schnell wie möglich erreichen.

Jedoch ist jeder Gang durch eine Reihe von Fallblöcken gesichert. Am Anfang sind alle Blöcke unten. Sobald jemand den Gang betritt, beginnen die Blöcke sich zu bewegen. Jeder Block bewegt sich in festem Takt nach oben und unten. Zum Beispiel schnellt ein Block mit Takt 2 nach 2 Minuten hoch und kracht nach weiteren 2 Minuten wieder herunter.

Jones steht vor seiner ersten Herausforderung:

Dieser Gang hat zwei Blöcke: Block A hat Takt 2, Block B Takt 3. Glücklicherweise hat Jones eine Schriftrolle mit Anweisungen gefunden, wie man so schnell wie möglich sicher den Schatz erreicht:

```
wait(2)
goto_block(A)
wait(1)
goto_treasure
```

![Der Gang mit Block A (Takt 2) und Block B (Takt 3) in den Minuten 1 bis 5: Jones wartet, geht zu Block A, wartet dort und geht dann zum Schatz](./img/gang1.png)

Jones befolgt die Anweisungen: Er wartet 2 Minuten, geht dann zu Block A, wartet dort 1 Minute und geht dann zum Schatz. Er erreicht den Schatz nach 3 Minuten.

Jones bemerkt, dass er auch mit weniger Anweisungen den Schatz erreicht hätte, und zwar gleich schnell:

```
wait(3)
goto_treasure
```

Er kommt zum nächsten Gang. Der hat vier Blöcke, mit Takt 3, 5, 8 und 4.

![Der Gang mit den Blöcken A (Takt 3), B (Takt 5), C (Takt 8) und D (Takt 4), Jones links, der Schatz rechts](./img/gang2.png)

**Baue die kürzeste Folge von Anweisungen, mit denen Jones so schnell wie möglich den Schatz erreicht.**
