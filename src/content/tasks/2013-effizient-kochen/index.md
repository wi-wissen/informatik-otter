---
short: c6Fs
title: Effizient kochen
summary: Anna und Ben wollen zwei Gerichte kochen. Wie schnell sind sie fertig, wenn der Herd nur drei Platten hat?
grades:
  "11-13": medium
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [optimization, parallelism]
methods: [scheduling]
mascot: beaver
interaction:
  format: input
  props:
    kind: number
    suffix: Minuten
source:
  type: original
  work: Informatik-Biber 2013
  year: 2013
  page: 11
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2013/Biberheft2013-mit-Loesungen.pdf
  license: CC BY-NC-SA 3.0
---
Anna und Ben kommen hungrig nach Hause. Nun möchten sie möglichst schnell zu Abend essen. Im Kühlschrank sind Brokkoli, Fisch, Tomaten und Fleisch. Daraus wollen sie zwei Gerichte zubereiten.

Die Zubereitung erfolgt in mehreren Schritten. Die meisten Schritte können Anna und Ben erst dann beginnen, wenn sie andere Schritte bereits erledigt haben.

Im Bild sind die Schritte als Kreise und die Abfolge der Schritte mit Pfeilen dargestellt.

![Gerichte-Diagramm: Fleisch und Tomate führen zum ersten Schritt, Fisch und Brokkoli zu einem zweiten; insgesamt elf Schritte als Kreise, verbunden durch Pfeile, enden bei einem Fleischgericht und bei einer Suppe.](./img/diagram.png)

Annas und Bens Herd hat drei Herdplatten. Sie können also maximal drei Schritte gleichzeitig erledigen. Für jeden Schritt benötigen sie 5 Minuten.

**Wie viele Minuten benötigen sie für die Zubereitung der beiden Gerichte mindestens?**
