---
short: dhd9
title: Tellerstapel
summary: Ein Roboter hat Teller auf zwei Stapel verteilt. Wie sahen die Stapel vorher aus?
grades:
  "5-6": hard
  "7-8": medium
  "9-10": easy
gi:
  content: [algorithms]
  process: [reasoning, modelling]
topics: [programming, data-structures]
methods: [stack]
mascot: beaver
interaction:
  format: choice
  props:
    columns: 2
    options:
      - { id: a, image: ./img/anfang-a.png, alt: "Anfangszustand A: links ein hoher Stapel mit 10 blauen und gelben Tellern, Stapel 1 mit drei Tellern, Stapel 2 mit zwei Tellern" }
      - { id: b, image: ./img/anfang-b.png, alt: "Anfangszustand B: links ein hoher Stapel mit blauen und gelben Tellern, Stapel 1 mit drei Tellern, Stapel 2 mit zwei Tellern" }
      - { id: c, image: ./img/anfang-c.png, alt: "Anfangszustand C: links ein hoher Stapel mit blauen und gelben Tellern, Stapel 1 mit drei Tellern, Stapel 2 mit zwei Tellern" }
      - { id: d, image: ./img/anfang-d.png, alt: "Anfangszustand D: links ein hoher Stapel mit blauen und gelben Tellern, Stapel 1 mit drei Tellern, Stapel 2 mit zwei Tellern" }
source:
  type: original
  work: Informatik-Biber 2011
  year: 2011
  page: 32
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2011/Biberheft2011-mit-Loesungen.pdf
  license: CC BY-NC-SA 3.0 DE
---
Unser Roboter kann vom linken Stapel einen Teller nehmen und ihn entweder auf dem Stapel 1 oder dem Stapel 2 ablegen.

Er kann dazu mit einer Folge der Zahlen 1 und 2 programmiert werden. Die Zahlen weisen ihn an, wie er nacheinander den jeweils obersten Teller des linken Stapels entweder auf dem Stapel 1 oder auf dem Stapel 2 ablegen soll.

Der Roboter hat gerade dieses Programm erfolgreich ausgeführt: „2 1 2 1 1 2 1“. Die Stapel sehen jetzt wie folgt aus:

![Links ein Stapel aus drei Tellern (oben blau, darunter zwei gelbe), in der Mitte Stapel 1 mit sieben Tellern, rechts Stapel 2 mit fünf Tellern](./img/ende.png)

**Wie haben die Stapel ausgesehen, bevor unser Roboter das Programm ausgeführt hat?**
