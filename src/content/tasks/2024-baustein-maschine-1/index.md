---
short: 8ZwB
title: Baustein-Maschine 1
summary: Eine Maschine vertauscht Bausteine nach einfachen Regeln. Wie stehen die Steine, wenn sie stoppt?
grades:
  "7-8": hard
gi:
  content: [algorithms]
  process: [reasoning, modelling]
topics: [sorting, algorithm-analysis]
methods: [gnome-sort]
mascot: beaver
interaction:
  format: choice
  props:
    columns: 2
    options:
      - { id: a, label: A, image: ./img/opt-a.png, alt: "Von links: 1, 6, 4, 2, 5, 3, Markierung rechts neben den Steinen" }
      - { id: b, label: B, image: ./img/opt-b.png, alt: "Von links: 3, 5, 2, 4, 6, 1, Markierung rechts neben den Steinen" }
      - { id: c, label: C, image: ./img/opt-c.png, alt: "Von links: 1, 2, 3, 4, 5, 6, Markierung rechts neben den Steinen" }
      - { id: d, label: D, image: ./img/opt-d.png, alt: "Von links: 6, 5, 4, 3, 2, 1, Markierung rechts neben den Steinen" }
source:
  type: original
  work: Informatik-Biber 2024
  year: 2024
  page: 15
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2024/Biberheft_2024_web_komplett.pdf
  country: BE
  license: CC BY-SA 4.0
---
Eine Maschine kann sechs unterschiedlich hohe Bausteine bewegen. Dabei benutzt sie eine Markierung (▲), die in der Regel zwischen zwei Steinen steht. Am Anfang stehen Steine und Markierung so:

![Von links: 1, 6, 4, 2, 5, 3; die Markierung steht zwischen 1 und 6](./img/start.png)

Die Maschine arbeitet dann nach diesen Vorschriften:

- Wenn der Stein links von der Markierung kleiner ist als der Stein rechts davon, geht die Markierung nach rechts.

![Der Stein 1 links von der Markierung ist kleiner als 6, die Markierung geht nach rechts](./img/rule1.png)

- Wenn der Stein links von der Markierung größer ist als der Stein rechts davon, werden die Steine vertauscht. Danach geht die Markierung nach links – aber nur, wenn sie dann immer noch zwischen zwei Steinen steht.

![Die Steine 6 und 4 werden vertauscht, danach geht die Markierung nach links](./img/rule2.png)

Die Maschine arbeitet so lange, bis die Markierung ganz rechts neben den Steinen steht. Dann stoppt die Maschine.

**Wie stehen die Steine, nachdem die Maschine stoppt?**
