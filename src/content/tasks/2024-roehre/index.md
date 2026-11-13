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
  format: place
  props:
    background: ./img/tube-leer.png
    width: 523
    height: 185
    reusable: true
    trayLabel: Kugeln
    zones:
      - { id: s1, label: "Platz 1 von links", x: 72, y: 32, w: 122, h: 128 }
      - { id: s2, label: "Platz 2 von links", x: 200, y: 32, w: 122, h: 128 }
      - { id: s3, label: "Platz 3 von links", x: 328, y: 32, w: 122, h: 128 }
    items:
      - { id: black, image: ./img/ball-black.svg, alt: schwarze Kugel }
      - { id: white, image: ./img/ball-white.svg, alt: weiße Kugel }
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

**Welche drei Kugeln sind am Ende in der Röhre?**

Ziehe dazu schwarze und weiße Kugeln in die Röhre.
