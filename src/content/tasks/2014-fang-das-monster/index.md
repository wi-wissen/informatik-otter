---
short: R5ST
title: Fang das Monster
summary: Ein Monster versteckt sich in 127 gelben Kellerzellen. Wie oft muss man mindestens klicken, um es sicher zu fangen?
grades:
  "7-8": medium
  "9-10": easy
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [searching]
methods: [binary-search]
mascot: beaver
interaction:
  format: input
  props:
    kind: number
    placeholder: Anzahl Klicks
    suffix: Klicks
source:
  type: original
  work: Informatik-Biber 2014
  year: 2014
  page: 22
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2014/Biberheft2014-mit-Loesungen.pdf
  license: CC BY-NC-SA 3.0
---
Im Keller der Biberburg lebt ein Monster. Es versteckt sich irgendwo in den gelben Zellen. Wo graue Wände sind, kann das Monster nicht sein.

![Der Keller: 127 gelbe Zellen bilden eine lange schlangenförmige Reihe, dazwischen und darum graue Wände](./img/cellar.png)

Du willst das Monster fangen. Im Computer-Spiel klickt man auf eine gelbe Zelle, und die gelben Zellen werden weniger. Dann klickt man wieder auf eine gelbe Zelle, und so weiter. Wenn nur noch eine gelbe Zelle übrig ist, hat man das Monster darin gefangen.

**Wie viele Klicks braucht man mindestens, um das Monster in jedem Fall zu fangen?**
