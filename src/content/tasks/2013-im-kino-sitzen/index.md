---
short: EJ86
title: Im Kino sitzen
summary: Fünf Freunde wollen im Kino nebeneinander sitzen, und zwar so, dass ihr gemeinsames Wohlsein möglichst groß ist.
grades:
  "7-8": hard
  "9-10": easy
  "11-13": easy
gi:
  content: [information-data, algorithms]
  process: [modelling, reasoning]
topics: [graphs, optimization]
methods: [hamilton-path, brute-force]
mascot: beaver
interaction:
  format: place
  props:
    background: ./img/seats.png
    width: 263.7
    height: 52.7
    trayLabel: Freunde
    zones:
      - { id: s1, label: "Sitz 1", x: 1.7, y: 2, w: 50, h: 49 }
      - { id: s2, label: "Sitz 2", x: 53.7, y: 2, w: 50, h: 49 }
      - { id: s3, label: "Sitz 3", x: 105.7, y: 2, w: 50, h: 49 }
      - { id: s4, label: "Sitz 4", x: 157.7, y: 2, w: 50, h: 49 }
      - { id: s5, label: "Sitz 5", x: 209.7, y: 2, w: 50, h: 49 }
    items:
      - { id: alfie, label: Alfie }
      - { id: berta, label: Berta }
      - { id: charlie, label: Charlie }
      - { id: dora, label: Dora }
      - { id: eddie, label: Eddie }
source:
  type: original
  work: Informatik-Biber 2013
  year: 2013
  page: 28
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2013/Biberheft2013-mit-Loesungen.pdf
  license: CC BY-NC-SA 3.0
---
Die Freunde Alfie, Berta, Charlie, Dora und Eddie gehen gerne ins Kino. Dort wollen sie immer zusammen in einer Reihe sitzen. In einer Reihe kann jeder aber nur neben höchstens zwei anderen sitzen. Wenn zwei eine Beziehung haben und im Kino nebeneinander sitzen, dann fühlen sie sich zu einem bestimmten Grad wohl. Dieses Paar-Wohlsein addiert sich zu einem Gruppen-Wohlsein.

| Beziehungssymbol | Beziehungsname | Paar-Wohlsein |
|---|---|---|
| blaue gestrichelte Linie | „befreundet“ | 1 |
| grüne Linie | „dick befreundet“ | 2 |
| rote Doppellinie | „verliebt“ | 3 |

Und dies ist das Netz ihrer Beziehungen:

![Netz der Beziehungen: Alfie–Berta befreundet (blau gestrichelt), Alfie–Charlie dick befreundet (grün), Charlie–Berta verliebt (rot doppelt), Berta–Dora dick befreundet (grün), Berta–Eddie dick befreundet (grün), Charlie–Dora befreundet (blau gestrichelt), Dora–Eddie verliebt (rot doppelt)](./img/net.png)

**Wie können sich die Freunde im Kino setzen, damit ihr Gruppen-Wohlsein so groß wie möglich ist?** Schiebe die Namen aus dem Netz auf die Sitze. Es gibt mehrere richtige Lösungen. Es ist gleich, welche davon du findest.
