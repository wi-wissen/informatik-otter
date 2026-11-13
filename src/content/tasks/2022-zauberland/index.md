---
short: pk1U
title: Zauberland
summary: Zauberhüte und Kristallkugeln verwandeln sich nach festen Regeln. Welche Anordnung kann nie entstehen?
grades:
  "11-13": hard
gi:
  content: [languages-automata]
  process: [reasoning, modelling]
topics: [formal-languages]
methods: [context-free-grammar]
mascot: beaver
interaction:
  format: choice
  props:
    columns: 1
    options:
      - { id: a, image: ./img/arr-a.png, alt: "Anordnung A: Zaubertrank, Zauberhut, Zaubertrank, Zauberbuch, Zauberbuch" }
      - { id: b, image: ./img/arr-b.png, alt: "Anordnung B: Zauberhut, Zaubertrank, Kristallkugel, Zauberbuch, Zaubertrank, Kristallkugel, Zaubertrank, Zauberbuch" }
      - { id: c, image: ./img/arr-c.png, alt: "Anordnung C: Kristallkugel, Zaubertrank, Zauberbuch, Zaubertrank, Zauberhut, Zauberbuch" }
      - { id: d, image: ./img/arr-d.png, alt: "Anordnung D: Zaubertrank, Zauberbuch, Zaubertrank, Zauberbuch" }
source:
  type: original
  work: Informatik-Biber 2022
  year: 2022
  page: 63
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2022/Biberheft_2022_mit_Loesungen_web.pdf
  country: CA
  license: CC BY-SA 4.0
---
Im Zauberland gibt es vier verschiedene magische Objekte: Zauberhüte, Kristallkugeln, Zauberbücher und Zaubertränke.

![Die vier Objekte: ein schwarzer Zauberhut, eine Kristallkugel, ein aufgeschlagenes Zauberbuch und ein Zaubertrank](./img/objects.png)

Zauberhüte und Kristallkugeln können jeweils auf zwei verschiedene Weisen verwandelt werden. Die Tabelle zeigt, was dabei aus den Objekten entsteht – genau an der Stelle, wo sie vorher waren, und genau in der gezeigten Anordnung:

![Tabelle der vier Verwandlungen. 1: Zauberhut wird zu Kristallkugel. 2: Zauberhut wird zu Zauberhut und Kristallkugel. 3: Kristallkugel wird zu Zaubertrank und Zauberbuch. 4: Kristallkugel wird zu Zaubertrank, Zauberhut und Zauberbuch](./img/rules.png)

Verwandlungen können beliebig oft und in beliebiger Reihenfolge passieren. So kann aus einem einzigen magischen Objekt eine lange Anordnung von Objekten entstehen.

**Welche Anordnung kann aus einem einzigen Zauberhut NICHT entstehen?**
