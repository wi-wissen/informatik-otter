---
short: 6hot
title: Geburtstagsrätsel
summary: Bastian öffnet Türen mit passenden Bausteinen, um ans Geschenk zu kommen. Mit welcher Tür fängt er an?
grades:
  "5-6": hard
  "9-10": easy
gi:
  content: [algorithms]
  process: [modelling, reasoning]
topics: [searching, graphs]
methods: [topological-sort]
mascot: beaver
interaction:
  format: graph-pick
  props:
    pick: nodes
    width: 520
    height: 164
    background: ./img/box.png
    hideNodes: true
    nodeRadius: 16
    nodes:
      - { id: A, x: 45, y: 44, label: Tür A }
      - { id: B, x: 142, y: 44, label: Tür B }
      - { id: C, x: 240, y: 44, label: Tür C }
      - { id: D, x: 339, y: 44, label: Tür D }
      - { id: E, x: 441, y: 44, label: Tür E }
      - { id: F, x: 45, y: 90, label: Tür F }
      - { id: G, x: 142, y: 90, label: Tür G }
      - { id: H, x: 240, y: 90, label: Tür H }
      - { id: I, x: 339, y: 90, label: Tür I }
      - { id: J, x: 441, y: 90, label: Tür J }
      - { id: K, x: 45, y: 137, label: Tür K }
      - { id: L, x: 142, y: 137, label: Tür L }
      - { id: M, x: 240, y: 137, label: Tür M }
      - { id: N, x: 339, y: 137, label: Tür N }
      - { id: O, x: 441, y: 137, label: Tür O }
source:
  type: original
  work: Informatik-Biber 2021
  year: 2021
  page: 30
  url: https://bwinf.de/fileadmin/wettbewerbe/biber/2021/Biberheft_2021_mit_Loesungen_web.pdf
  country: IS
  license: CC BY-SA 4.0
---
Bastian bekommt zum Geburtstag eine Kiste mit 15 Türen. Hinter der mittleren Tür ist ein weiteres Geschenk. Hinter den anderen Türen sind Bausteine. Zu jeder Tür gehört ein Loch, rechts neben der Tür. Bastian kann eine Tür öffnen, indem er in das Loch einen Baustein gleicher Form einwirft – wie einen Schlüssel.

![Eine Tür mit Loch daneben: Ein Baustein in Form eines Quadrats liegt hinter der Tür, ein runder Baustein wird in das runde Loch geworfen und öffnet sie.](./img/door.png)

Zu Beginn hat Bastian einen runden (dunkelblauen) Baustein.

Er will höchstens fünf Türen öffnen, um das Geschenk zu erreichen.

**Welche Tür muss Bastian dafür zuerst öffnen?**
