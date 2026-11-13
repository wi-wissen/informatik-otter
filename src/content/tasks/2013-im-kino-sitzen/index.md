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
  format: sort-list
  props:
    direction: horizontal
    startLabel: links
    endLabel: rechts
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

**Wie können sich die Freunde im Kino setzen, damit ihr Gruppen-Wohlsein so groß wie möglich ist?** Bringe die Namen in die Reihenfolge der Sitze von links nach rechts. Es gibt mehrere richtige Lösungen. Es ist gleich, welche davon du findest.
