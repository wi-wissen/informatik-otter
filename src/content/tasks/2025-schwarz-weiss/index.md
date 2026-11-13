---
short: 3Bng
title: Schwarz – Weiß
summary: Ein rekursiver Algorithmus beschreibt Folgen aus schwarzen und weißen Kästchen mit Buchstaben. Was gibt er für diese Folge aus?
grades:
  "9-10": hard
  "11-13": medium
gi:
  content: [information-data]
  process: [modelling, reasoning]
topics: [compression, recursion]
methods: [divide-and-conquer]
mascot: beaver
interaction:
  format: command-sequence
  props:
    maxLength: 14
    commands:
      - { id: x, label: x }
      - { id: W, label: W }
      - { id: S, label: S }
source:
  type: original
  work: Informatik-Biber 2025
  year: 2025
  page: 70
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2025/Biberheft_2025_web_komplett.pdf
  country: PT
  license: CC BY-SA 4.0
---
Sarah möchte Folgen von schwarzen und weißen Kästchen mit Buchstaben beschreiben. Sie wendet dazu diesen Algorithmus auf eine Kästchen-Folge an:

- Wenn alle Kästchen der Folge weiß sind, schreibe **W**.
- Wenn alle Kästchen der Folge schwarz sind, schreibe **S**.
- Wenn die Folge schwarze und weiße Kästchen enthält, schreibe **x** und mache Folgendes:
  - Wende den Algorithmus auf die linke Hälfte der Folge an.
  - Wende den Algorithmus auf die rechte Hälfte der Folge an.

Hier siehst du für einige Kästchen-Folgen, welche Buchstaben-Beschreibung der Algorithmus ausgibt:

![Vier Kästchen-Folgen mit je 8 Kästchen: acht weiße Kästchen ergeben W. Vier weiße und vier schwarze Kästchen ergeben xWS. Zwei schwarze, zwei weiße und vier schwarze Kästchen ergeben xxSWS. Vier schwarze, zwei weiße, ein schwarzes und ein weißes Kästchen ergeben xSxWxSW](./img/examples.png)

- Acht weiße Kästchen: **W**
- Vier weiße, dann vier schwarze: **xWS**
- Zwei schwarze, zwei weiße, vier schwarze: **xxSWS**
- Vier schwarze, zwei weiße, ein schwarzes, ein weißes: **xSxWxSW**

**Welche Buchstaben-Beschreibung gibt Sarahs Algorithmus für diese Kästchen-Folge aus?**

![Kästchen-Folge von links nach rechts: weiß, schwarz, weiß, weiß, schwarz, schwarz, schwarz, weiß](./img/sequence.png)
