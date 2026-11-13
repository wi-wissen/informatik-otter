---
short: c1s8
title: Postfix-Notation
summary: Zu einem Ausdruck in Postfix-Notation wird der passende Strukturbaum gesucht. Welcher der vier Bäume gehört dazu?
grades:
  "9-10": hard
  "11-13": medium
gi:
  content: [languages-automata]
  process: [representing, modelling]
topics: [formal-languages, trees]
methods: [postfix-notation]
mascot: beaver
interaction:
  format: choice
  props:
    columns: 2
    options:
      - { id: a, label: A, image: ./img/a.png, alt: "Strukturbaum A" }
      - { id: b, label: B, image: ./img/b.png, alt: "Strukturbaum B" }
      - { id: c, label: C, image: ./img/c.png, alt: "Strukturbaum C" }
      - { id: d, label: D, image: ./img/d.png, alt: "Strukturbaum D" }
source:
  type: original
  work: Informatik-Biber 2023
  year: 2023
  page: 46
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2023/Biberheft_2023_web_komplett.pdf
  country: RO
  license: CC BY-SA 4.0
---
Ein mathematischer Ausdruck besteht aus

- einem Operator: +, –, · oder :
- und den Operanden: Zahlen wie 1, 2, …, Buchstaben wie a, b, … oder wieder Ausdrücke wie (1 + 2).

Die Struktur eines mathematischen Ausdrucks kann man als Strukturbaum darstellen. Dieses Diagramm aus Operatoren und Operanden wird so gezeichnet: Ein Kringel mit dem Operator wird durch Pfeile mit den Strukturbäumen der Operanden verbunden. Das sind im einfachsten Fall Kringel mit einer Zahl oder einem Buchstaben.

Aus einem Strukturbaum wiederum kann man die Postfix-Notation eines mathematischen Ausdrucks ablesen. In dieser Notation werden für jeden Ausdruck zunächst die Operanden und dahinter der Operator geschrieben.

Die Tabelle zeigt für zwei Ausdrücke ihre Strukturbäume und Postfix-Notationen:

| Mathematischer Ausdruck | a + b | (a + 1) · (b + c) |
|---|---|---|
| Strukturbaum | ![Strukturbaum mit + oben und a und b darunter](./img/tree-1.png) | ![Strukturbaum mit · oben, darunter zwei +, links mit a und 1, rechts mit b und c](./img/tree-2.png) |
| Postfix-Notation | a b + | a 1 + b c + · |

Hier ist die Postfix-Notation eines anderen Ausdrucks: a 1 + b 2 + · 25 c : +

**Welchen Strukturbaum hat dieser Ausdruck?**
