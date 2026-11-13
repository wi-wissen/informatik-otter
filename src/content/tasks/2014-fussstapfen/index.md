---
short: yC8w
title: Fußstapfen
summary: Fußstapfen-Bäume werden nach einem Schema gestapft, das sich selbst benutzt. Wie sieht ein 4-Baum aus?
grades:
  "9-10": hard
  "11-13": medium
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [recursion]
methods: []
mascot: beaver
interaction:
  format: choice
  props:
    columns: 2
    options:
      - { id: a, image: ./img/a.png, alt: "Baum A: vier Fußstapfen als Stamm, dann links und rechts je ein 3-Baum" }
      - { id: b, image: ./img/b.png, alt: "Baum B: vier Fußstapfen als Stamm mit vier 3-Bäumen" }
      - { id: c, image: ./img/c.png, alt: "Baum C: drei Fußstapfen als Stamm, dann links und rechts je ein 3-Baum" }
      - { id: d, image: ./img/d.png, alt: "Baum D: vier Fußstapfen als Stamm, dann links und rechts Äste, die keine 3-Bäume sind" }
source:
  type: original
  work: Informatik-Biber 2014
  year: 2014
  page: 25
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2014/Biberheft2014-mit-Loesungen.pdf
  license: CC BY-NC-SA 3.0
---
Fußstapfen-Bäume! Die werden nach einem bestimmten Schema gestapft.

Dies ist das Stapfprogramm für einen **1-Baum**:

1. Gehe 1 Schritt vor, dabei machst du 1 Fußstapfen.
2. Gehe wieder zurück.

![Der 1-Baum: ein einzelner Fußstapfen](./img/tree1.png)

Kennt man das Stapfprogramm für einen 1-Baum, sieht das Stapfprogramm für einen **2-Baum** so aus:

1. Gehe 2 Schritte vor, dabei machst du 2 Fußstapfen.
2. Wende dich nach rechts und stapfe einen 1-Baum.
3. Wende dich nach links und stapfe einen 1-Baum.
4. Gehe in deiner Spur wieder zurück.

![Der 2-Baum: zwei Fußstapfen als Stamm, links und rechts davon je ein Fußstapfen](./img/tree2.png)

Das Stapfprogramm für einen **3-Baum** ist nun auch schnell erklärt, denn ein 3-Baum enthält 2-Bäume:

1. Gehe 3 Schritte vor, dabei machst du 3 Fußstapfen.
2. Wende dich nach rechts und stapfe einen 2-Baum.
3. Wende dich nach links und stapfe einen 2-Baum.
4. Gehe in deiner Spur wieder zurück.

![Der 3-Baum: drei Fußstapfen als Stamm, links und rechts davon je ein 2-Baum](./img/tree3.png)

Das Stapfprogramm für einen 4-Baum folgt dem gleichen Schema.

**Welcher Baum ist nach diesem Schema ein 4-Baum?**
