---
short: Hi55
title: Röhre
summary: In einer offenen Röhre liegen drei Kugeln. Schiebt man auf einer Seite eine hinein, fällt auf der anderen eine heraus. Was liegt am Ende drin?
grades:
  "5-6": easy
gi:
  content: [information-data]
  process: [modelling, reasoning]
topics: [data-structures]
methods: [deque]
mascot: beaver
interaction:
  format: pixel-grid
  props:
    rows: 1
    cols: 3
    palette: ["#ffffff", "#2d3436"]
source:
  type: original
  work: Informatik-Biber 2024
  year: 2024
  page: 55
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2024/Biberheft_2024_web_komplett.pdf
  country: KR
  license: CC BY-SA 4.0
---
In eine durchsichtige Röhre passen genau drei Kugeln. Die Röhre ist an beiden Seiten offen.

![Eine leere, durchsichtige Röhre](./img/tube.png)

Wenn in die volle Röhre von einer Seite eine Kugel hinein geschoben wird, fällt auf der anderen Seite eine Kugel heraus. Hier sind zwei Beispiele:

**Weiße Kugel von links:** Die Röhre enthält von links nach rechts schwarz, weiß, schwarz. Wird eine weiße Kugel von links hineingeschoben, ist die Röhre danach weiß, schwarz, weiß, und rechts fällt eine schwarze Kugel heraus.

![Weiße Kugel von links: Aus schwarz, weiß, schwarz wird weiß, schwarz, weiß; eine schwarze Kugel fällt rechts heraus](./img/example-left.png)

**Schwarze Kugel von rechts:** Wird eine schwarze Kugel von rechts hineingeschoben, ist die Röhre danach weiß, schwarz, schwarz, und links fällt eine schwarze Kugel heraus.

![Schwarze Kugel von rechts: Aus schwarz, weiß, schwarz wird weiß, schwarz, schwarz; eine schwarze Kugel fällt links heraus](./img/example-right.png)

Die Röhre ist mal wieder voll:

![Die volle Röhre: schwarz, weiß, schwarz](./img/full.png)

Nun werden nacheinander vier Kugeln in die Röhre geschoben: Zuerst eine schwarze und dann eine weiße Kugel von rechts, danach eine schwarze und dann eine weiße Kugel von links:

![Die vier Kugeln: zwei kommen von rechts (zuerst schwarz, dann weiß), zwei von links (zuerst schwarz, dann weiß)](./img/balls.png)

**Welche drei Kugeln sind am Ende in der Röhre? Färbe die Kugeln von links nach rechts schwarz oder lasse sie weiß.**
