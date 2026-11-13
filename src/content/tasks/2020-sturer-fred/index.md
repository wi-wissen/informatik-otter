---
short: rcH3
title: Sturer Fred
summary: Biber Fred will Kängurus auf dem Baumstumpf-Pfad vorbeilassen, geht aber höchstens zehnmal zurück. Wie viele schaffen es?
grades:
  "7-8": hard
  "9-10": medium
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [programming, algorithm-analysis]
methods: [loop, invariant]
mascot: beaver
interaction:
  format: choice
  props:
    options:
      - { id: a, label: "Mehr als 10 Kängurus." }
      - { id: b, label: "Genau 10 Kängurus." }
      - { id: c, label: "Genau 6 Kängurus." }
      - { id: d, label: "Genau 4 Kängurus." }
      - { id: e, label: "Weniger als 4 Kängurus." }
      - { id: f, label: "Das kann man nicht genau sagen." }
source:
  type: original
  work: Informatik-Biber 2020
  year: 2020
  page: 54
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2020/Biberheft_2020_final_mit_Loesungen.pdf
  country: LT
  license: CC BY-SA 4.0
---
Über den Fluss führt ein Pfad aus Baumstümpfen. Der Biber Fred geht über den Pfad und begegnet einer Gruppe Kängurus. Der Biber und die Kängurus können nicht aneinander vorbei, denn auf jeden Baumstumpf passt nur ein Tier.

Aber es gibt einen Baumstumpf, von dem aus ein Känguru auf einen Stein und wieder zurück springen kann. Auch auf den Stein passt nur ein Tier.

![Fred steht auf einem Baumstumpf im Fluss, vor ihm warten mehrere Kängurus. Über dem übernächsten Baumstumpf liegt ein Stein, auf den ein Känguru springen kann](./img/river.png)

Mit Hilfe des Steins könnte Fred alle Kängurus vorbei lassen. Aber Fred ist stur. Er will höchstens 10-mal einen Baumstumpf zurück gehen. Vorwärts geht er beliebig oft.

**Wie viele Kängurus kann Fred höchstens vorbei lassen?**
